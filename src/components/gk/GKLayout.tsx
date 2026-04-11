'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { User, ChevronDown, LayoutDashboard, FileText, Zap, Brain, BookMarked, CalendarDays } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { gkSupabase } from '@/lib/gk-supabase';

interface GKLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userName?: string;
  userEmail?: string;
}

export default function GKLayout({
  children,
  activeTab,
  setActiveTab,
  userName = 'Student',
  userEmail = ''
}: GKLayoutProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');
  const [toast, setToast] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);

  const initials = userName
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .join('')
    .substring(0, 2) || 'ST';

  const firstName = userName.split(' ')[0] || 'Student';

  React.useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('gk_theme') as 'light' | 'dark' | null;
    if (saved) setTheme(saved);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('gk_theme', theme);
  }, [theme, mounted]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    showToast(`Switched to ${newTheme} mode`);
  };

  const handleSignOut = async () => {
    setIsProfileOpen(false);
    showToast('Signing out…');
    await gkSupabase.auth.signOut();
    localStorage.removeItem('gk_userName');
    localStorage.removeItem('gk_userEmail');
    localStorage.removeItem('gk_isSubscribed');
    localStorage.removeItem('gk_registrationDate');
    setTimeout(() => router.replace('/gk/login'), 800);
  };

  const navLinks = [
    { id: 'dashboard',       name: 'Dashboard',       icon: LayoutDashboard },
    { id: 'editorial',       name: 'Editorials',       icon: FileText        },
    { id: 'flashcards',      name: 'Flashcards',       icon: Zap             },
    { id: 'testing',         name: 'Testing Engine',   icon: Brain           },
    { id: 'vault',           name: 'GK Vault',         icon: BookMarked      },
    { id: 'monthly-summary', name: 'Monthly Summary',  icon: CalendarDays    },
  ];

  return (
    <div className={`flex flex-col gk-portal${theme === 'dark' ? ' dark' : ''} min-h-screen bg-white dark:bg-[#060818] font-sans text-[#060818] dark:text-white transition-colors duration-300 relative`}>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-auto z-[100] bg-[#060818] dark:bg-[#F59E0B] text-white dark:text-[#060818] px-6 py-3 rounded-2xl font-bold shadow-2xl border border-white/10 text-center"
        >
          {toast}
        </motion.div>
      )}
      {/* clattribe.com header */}
      <header className="sticky top-0 z-[60] bg-[#060818]/80 backdrop-blur-md border-b border-white/[0.08] shadow-[0_1px_24px_rgba(0,0,0,0.45)]">
        <div className="mx-auto px-4 py-3 flex items-center justify-between">
          <a href="https://www.clattribe.com" target="_blank" rel="noopener noreferrer">
            <img src="https://www.clattribe.com/heading.png" alt="CLAT Tribe" className="h-9 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-5 text-[13px] text-white/75">
            <a href="https://www.clattribe.com" className="hover:text-white transition-colors">Home</a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-white transition-colors bg-transparent border-0 cursor-pointer text-[13px] text-white/75">
                About Us <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-44 bg-[#0d1235] border border-white/10 rounded-lg shadow-xl py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                <a href="https://www.clattribe.com/our-team" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors">Our Team</a>
                <a href="https://www.clattribe.com/our-courses" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-colors">Our Courses</a>
              </div>
            </div>
            <a href="https://www.clattribe.com" className="hover:text-white transition-colors">DSB Challenge</a>
            <a href="https://www.clattribe.com/clat-2027-starter-kit" className="hover:text-white transition-colors">CLAT 2027 Starter Kit</a>
            <button onClick={() => setActiveTab('flashcards')} className="hover:text-white transition-colors bg-transparent border-0 cursor-pointer text-[13px] text-white/75">Flashcards</button>
            <a href="https://www.clattribe.com/blogs" className="hover:text-white transition-colors">Blogs</a>
            <a href="https://www.clattribe.com/clat-gk-vault" className="hover:text-white transition-colors">CLAT GK Vault</a>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">

      <nav className="bg-white dark:bg-[#060818] border-r border-gray-100 dark:border-white/5 h-full flex flex-col overflow-y-auto w-56 shrink-0 transition-colors">

          {/* Brand */}
          {/* Nav links */}
          <div className="flex flex-col gap-0.5 px-3 flex-1 pt-5 pb-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <div
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                    isActive
                      ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-500'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-800 dark:hover:text-white'
                  }`}
                >
                  <Icon size={18} className="shrink-0" />
                  <span className="text-sm font-medium leading-none">{link.name}</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />}
                </div>
              );
            })}
          </div>

          {/* Profile footer */}
          <div className="px-3 pb-4 pt-2 border-t border-gray-100 dark:border-white/10">
            <div
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                activeTab === 'profile'
                  ? 'bg-amber-50 text-amber-500'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                <User size={13} />
              </div>
              <div className="flex flex-col min-w-0 flex-1 leading-tight">
                <span className="text-xs font-semibold text-gray-800 dark:text-white truncate">{userName}</span>
                <span className="text-[10px] text-gray-400 truncate">{userEmail}</span>
              </div>
            </div>
          </div>
        </nav>

      <main className="flex-1 overflow-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">{children}</main>
      </div>
    </div>
  );
}
