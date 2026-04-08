'use client';

import React from 'react';
import GKLayout from './GKLayout';
import GKDashboard from './Dashboard';
import GKTestingEngine from './TestingEngine';
import GKVault from './Vault';
import GKFlashcards from './Flashcards';
import GKEditorial from './Editorial';
import GKMonthlySummary from './MonthlySummary';
import GKLogin from './Login';
import GKSubscriptionModal from './SubscriptionModal';
import { User } from 'lucide-react';

export default function GKApp() {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showSubModal, setShowSubModal] = React.useState(false);
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  React.useEffect(() => {
    setIsLoggedIn(localStorage.getItem('gk_isLoggedIn') === 'true');
    setIsSubscribed(localStorage.getItem('gk_isSubscribed') === 'true');
  }, []);

  React.useEffect(() => {
    if (isLoggedIn && !isSubscribed) {
      const regDateStr = localStorage.getItem('gk_registrationDate');
      if (regDateStr) {
        const regDate = new Date(regDateStr);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - regDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 2) {
          setShowSubModal(true);
        }
      }
    }
  }, [isLoggedIn, isSubscribed]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSubscribe = () => {
    localStorage.setItem('gk_isSubscribed', 'true');
    setIsSubscribed(true);
    setShowSubModal(false);
  };

  if (!isLoggedIn) {
    return <GKLogin onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <GKDashboard />;
      case 'testing':
        return <GKTestingEngine />;
      case 'vault':
        return <GKVault />;
      case 'flashcards':
        return <GKFlashcards />;
      case 'editorial':
        return <GKEditorial />;
      case 'monthly-summary':
        return <GKMonthlySummary />;
      case 'profile':
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-[#060818] dark:bg-white/10 rounded-full mb-6 flex items-center justify-center text-white dark:text-gray-400 border-4 border-[#F59E0B]/20">
              <User className="text-[#F59E0B]" size={40} />
            </div>
            <h2 className="text-3xl font-black mb-2 text-[#060818] dark:text-white">Abhinav Singh</h2>
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
      default:
        return <GKDashboard />;
    }
  };

  return (
    <>
      <GKLayout activeTab={activeTab} setActiveTab={setActiveTab}>
        {renderContent()}
      </GKLayout>
      {showSubModal && (
        <GKSubscriptionModal
          onSubscribe={handleSubscribe}
          onClose={() => setShowSubModal(false)}
        />
      )}
    </>
  );
}
