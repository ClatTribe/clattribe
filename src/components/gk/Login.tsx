'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LogIn, Sparkles, ShieldCheck, Zap, Globe } from 'lucide-react';
import { gkSupabase } from '@/lib/gk-supabase';

export default function GKLogin() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const { error } = await gkSupabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://clattribe.com/gk/auth/callback',
        },
      });
      if (error) throw error;
    } catch (err: any) {
      console.error('Login error:', err);
      setError('Login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060818] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F59E0B]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 shadow-2xl relative z-10"
      >
        <div className="text-center space-y-6 mb-10">
          <div className="w-20 h-20 bg-[#F59E0B]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-[#F59E0B]/20">
            <LogIn size={40} className="text-[#F59E0B]" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#F59E0B] font-black text-[10px] uppercase tracking-[0.3em]">
              <Sparkles size={14} />
              Elite CLAT Prep
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter">CLAT Tribe</h1>
            <p className="text-gray-400 font-medium">Your journey to National Law Schools begins here.</p>
          </div>
        </div>
        <div className="space-y-4">
          {error && <p className="text-red-400 text-sm text-center font-medium">{error}</p>}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white text-[#060818] py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-gray-100 transition-all shadow-xl shadow-white/5 group disabled:opacity-60"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-[#060818] border-t-transparent rounded-full animate-spin" />
            ) : (
              <Globe size={20} className="group-hover:rotate-12 transition-transform" />
            )}
            {loading ? 'Redirecting to Google...' : 'Continue with Google'}
          </button>
          <p className="text-[10px] text-gray-500 text-center font-bold uppercase tracking-widest pt-4">
            By continuing, you agree to our Terms of Service
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
          {[{ icon: ShieldCheck, label: 'Secure' }, { icon: Zap, label: 'Fast' }, { icon: Sparkles, label: 'Premium' }].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#F59E0B]">
                <Icon size={20} />
              </div>
              <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
                                                                                                                              }
