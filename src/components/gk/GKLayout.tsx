'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, User, LogOut, Moon, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { gkSupabase } from '@/lib/gk-supabase';

interface GKLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userName?: string;
  userEmail?: string;
}

export default function GKLayout({ children, activeTab, setActiveTab, userName = 'Student', userEmail = '' }: GKLayoutProps) {
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
    { label: 'Dashboard', id: 'dashboard' },
    { label: 'Editorials', id: 'editorial' },
    { label: 'Flashcard', id: 'flashcards' },
    { label: 'Testing Engine', id: 'testing' },
    { label: 'GK Vault', id: 'vault' },
    { label: 'Monthly Summary', id: 'monthly-summary' },
  ];

  return (
    <div className={`gk-portal${theme === 'dark' ? ' dark' : ''} min-h-screen bg-white dark:bg-[#060818] font-sans text-[#060818] dark:text-white transition-colors duration-300 relative`}>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#060818] dark:bg-[#F59E0B] text-white dark:text-[#060818] px-6 py-3 rounded-2xl font-bold shadow-2xl border border-white/10"
        >
          {toast}
        </motion.div>
      )}

      <nav className="bg-white dark:bg-[#060818] border-b border-gray-100 dark:border-white/5 sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
              <div className="w-10 h-10 bg-[#060818] dark:bg-[#F59E0B] rounded-xl flex items-center justify-center font-bold text-xl text-[#F59E0B] dark:text-[#060818]">
                CT
              </div>
              <span className="text-xl font-black tracking-tighter text-[#060818] dark:text-white">CLAT TRIBE</span>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`text-sm font-semibold transition-colors ${activeTab === link.id ? 'text-[#F59E0B]' : 'text-gray-500 dark:text-gray-400 hover:text-[#060818] dark:hover:text-white'}`}
                >
                  {link.label}
                </button>
              ))}
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-gray-400">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <div className="relative ml-4">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 bg-gray-50 dark:bg-white/5 px-4 py-2 rounded-full border border-gray-100 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                >
                  <div className="w-6 h-6 bg-[#F59E0B] rounded-full flex items-center justify-center text-[10px] font-bold text-[#060818]">
                    {initials}
                  </div>
                  <span className="text-sm font-bold">{firstName}</span>
                  <ChevronDown size={14} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#060818] rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 py-2 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-100 dark:border-white/10">
                      <p className="text-sm font-black text-[#060818] dark:text-white truncate">{userName}</p>
                      <p className="text-xs text-gray-400 truncate">{userEmail}</p>
                    </div>
                    <button
                      onClick={() => { setActiveTab('profile'); setIsProfileOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <User size={16} /> Profile
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                    >
                      <LogOut size={16} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-gray-400">
                {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-600 dark:text-gray-400">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white dark:bg-[#060818] border-t border-gray-100 dark:border-white/5 px-4 py-6 space-y-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { setActiveTab(link.id); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-lg font-bold text-gray-800 dark:text-white py-2"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 dark:border-white/5 space-y-2">
              <button
                onClick={() => { setActiveTab('profile'); setIsMobileMenuOpen(false); }}
                className="flex items-center gap-3 text-lg font-bold text-gray-800 dark:text-white py-2"
              >
                <User size={20} /> My Profile
              </button>
              <button onClick={handleSignOut} className="flex items-center gap-3 text-lg font-bold text-red-500 py-2">
                <LogOut size={20} /> Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</main>
    </div>
  );
}
