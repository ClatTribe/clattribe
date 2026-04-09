'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import GKLayout from './GKLayout';
import GKDashboard from './Dashboard';
import GKTestingEngine from './TestingEngine';
import GKVault from './Vault';
import GKFlashcards from './Flashcards';
import GKEditorial from './Editorial';
import GKMonthlySummary from './MonthlySummary';
import GKSubscriptionModal from './SubscriptionModal';
import { User } from 'lucide-react';
import { gkSupabase } from '@/lib/gk-supabase';

export default function GKApp() {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [isLoading, setIsLoading] = React.useState(true);
  const [showSubModal, setShowSubModal] = React.useState(false);
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');

  React.useEffect(() => {
    gkSupabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const name = session.user.user_metadata?.full_name || session.user.user_metadata?.name || 'Student';
        const email = session.user.email || '';
        setUserName(name);
        setUserEmail(email);
        localStorage.setItem('gk_userEmail', email);
        localStorage.setItem('gk_userName', name);
        setIsSubscribed(localStorage.getItem('gk_isSubscribed') === 'true');
        const regDateStr = localStorage.getItem('gk_registrationDate');
        if (!regDateStr) {
          localStorage.setItem('gk_registrationDate', new Date().toISOString());
        }
      } else {
        router.replace('/gk/login');
      }
      setIsLoading(false);
    });

    const { data: { subscription } } = gkSupabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        router.replace('/gk/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  React.useEffect(() => {
    if (!isLoading && !isSubscribed) {
      const regDateStr = localStorage.getItem('gk_registrationDate');
      if (regDateStr) {
        const regDate = new Date(regDateStr);
        const now = new Date();
        const diffDays = Math.ceil(Math.abs(now.getTime() - regDate.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays > 2) setShowSubModal(true);
      }
    }
  }, [isLoading, isSubscribed]);

  const handleSubscribe = () => {
    localStorage.setItem('gk_isSubscribed', 'true');
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

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <GKDashboard />;
      case 'testing': return <GKTestingEngine />;
      case 'vault': return <GKVault />;
      case 'flashcards': return <GKFlashcards />;
      case 'editorial': return <GKEditorial />;
      case 'monthly-summary': return <GKMonthlySummary />;
      case 'profile':
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-[#060818] dark:bg-white/10 rounded-full mb-6 flex items-center justify-center text-white dark:text-gray-400 border-4 border-[#F59E0B]/20">
              <User className="text-[#F59E0B]" size={40} />
            </div>
            <h2 className="text-3xl font-black mb-2 text-[#060818] dark:text-white">{userName || 'Student'}</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">{userEmail}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-8 font-bold uppercase tracking-widest text-xs">
              CLAT 2025 Aspirant • {isSubscribed ? 'Premium Member' : 'Free Trial'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Accuracy</p>
                <p className="text-4xl font-black text-[#060818] dark:text-white">84%</p>
              </div>
              <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Reading Speed</p>
                <p className="text-4xl font-black text-[#060818] dark:text-white">320 wpm</p>
              </div>
            </div>
            {!isSubscribed && (
              <button
                onClick={() => setShowSubModal(true)}
                className="mt-12 bg-[#F59E0B] text-[#060818] px-10 py-4 rounded-2xl font-black shadow-xl hover:scale-[1.02] transition-all"
              >
                Upgrade to Premium
              </button>
            )}
          </div>
        );
      default: return <GKDashboard />;
    }
  };

  return (
    <>
      <GKLayout activeTab={activeTab} setActiveTab={setActiveTab}>
        {renderContent()}
      </GKLayout>
      {showSubModal && (
        <GKSubscriptionModal onSubscribe={handleSubscribe} onClose={() => setShowSubModal(false)} />
      )}
    </>
  );
}
