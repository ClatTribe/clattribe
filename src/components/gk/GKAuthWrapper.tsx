'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import GKLayout from './GKLayout';
import GKSubscriptionModal from './SubscriptionModal';
import { gkSupabase } from '@/lib/gk-supabase';

export default function GKAuthWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState(true);
  const [showSubModal, setShowSubModal] = React.useState(false);
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');

  React.useEffect(() => {
    // Initial check on mount or path change
    gkSupabase.auth.getSession().then(({ data: { session } }) => {
      handleRedirects(session, pathname);
      setIsLoading(false);
    });

    // Listen for auth state changes
    const { data: { subscription } } = gkSupabase.auth.onAuthStateChange((_event, session) => {
      handleRedirects(session, pathname);
    });

    return () => subscription.unsubscribe();
  }, [router, pathname]);

  const handleRedirects = (session: any, currentPath: string) => {
    const isLoginPage = currentPath === '/gk/login';
    const isAuthPath = currentPath?.startsWith('/gk/auth');
    const isRootPath = currentPath === '/gk';
    
    if (session?.user) {
      // Authenticated users
      const name = session.user.user_metadata?.full_name || session.user.user_metadata?.name || 'Student';
      const email = session.user.email || '';
      setUserName(name);
      setUserEmail(email);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('gk_userEmail', email);
        window.localStorage.setItem('gk_userName', name);
        setIsSubscribed(window.localStorage.getItem('gk_isSubscribed') === 'true');
        
        const regDateStr = window.localStorage.getItem('gk_registrationDate');
        if (!regDateStr) {
          window.localStorage.setItem('gk_registrationDate', new Date().toISOString());
        }
      }

      // If at /gk or login, redirect to dashboard
      if (isRootPath || isLoginPage) {
        router.replace('/gk/dashboard');
      }
    } else {
      // Unauthenticated users
      // If not on login/auth pages, redirect to login
      if (!isLoginPage && !isAuthPath) {
        router.replace('/gk/login');
      }
    }
  };

  React.useEffect(() => {
    if (!isLoading && !isSubscribed) {
      if (typeof window !== 'undefined') {
        const regDateStr = window.localStorage.getItem('gk_registrationDate');
        if (regDateStr) {
          const regDate = new Date(regDateStr);
          const now = new Date();
          const diffDays = Math.ceil(Math.abs(now.getTime() - regDate.getTime()) / (1000 * 60 * 60 * 24));
          
          if (diffDays > 2) {
            // Only show modal once every 3 days after first appearance
            const lastShown = window.localStorage.getItem('gk_lastModalShown');
            const shouldShow = !lastShown || Math.ceil(Math.abs(now.getTime() - new Date(lastShown).getTime()) / (1000 * 60 * 60 * 24)) >= 3;
            
            if (shouldShow && !sessionStorage.getItem('gk_modalShownThisSession')) {
              setShowSubModal(true);
              window.localStorage.setItem('gk_lastModalShown', now.toISOString());
              sessionStorage.setItem('gk_modalShownThisSession', '1');
            }
          }
        }
      }
    }
  }, [isLoading, isSubscribed]);

  const handleSubscribe = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('gk_isSubscribed', 'true');
    }
    setIsSubscribed(true);
    setShowSubModal(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#060818] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#F59E0B] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const isLoginPage = pathname === '/gk/login';
  const isAuthPath = pathname?.startsWith('/gk/auth');

  if (isLoginPage || isAuthPath) {
    return <>{children}</>;
  }

  return (
    <>
      <GKLayout userName={userName} userEmail={userEmail}>
        {children}
      </GKLayout>
      
      {showSubModal && (
        <GKSubscriptionModal onSubscribe={handleSubscribe} onClose={() => setShowSubModal(false)} />
      )}
    </>
  );
}
