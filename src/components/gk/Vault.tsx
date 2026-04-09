'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Trophy, ChevronRight, Headphones, BookOpen, Sparkles, Bookmark } from 'lucide-react';

export default function Vault() {
  const [bookmarks, setBookmarks] = React.useState<string[]>([]);
  const [toast, setToast] = React.useState<string | null>(null);

  const highlights = [
    { id: '1', title: 'Supreme Court on Electoral Bonds', category: 'Legal', time: '2 mins', summary: 'The Constitution Bench has reserved its judgment on the validity of the Electoral Bonds scheme.' },
    { id: '2', title: 'Israel-Palestine Conflict: UN Resolution', category: 'International Relations', time: '3 mins', summary: 'A deep dive into the latest UN General Assembly resolution.' },
    { id: '3', title: 'New Digital Competition Bill', category: 'Economy', time: '2 mins', summary: 'How the proposed bill aims to regulate Big Tech companies in India.' },
  ];

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 3000); };

  return (
    <div className="space-y-12">
      {toast && (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#060818] text-white px-6 py-3 rounded-2xl font-bold shadow-2xl">{toast}</motion.div>
      )}
      <section className="text-center py-16 bg-white dark:bg-white/5 rounded-[3rem] border border-gray-100 dark:border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-black text-[#060818] dark:text-white mb-6">STop reading. <span className="text-[#F59E0B]">Start learning.</span></h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-10">Mas ter General Knowledge in just 10 minutes a day.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => showToast('Audio briefing coming soon!')} className="bg-[#060818] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-800 transition-all"><Play size={20} fill="currentColor" className="text-[#F59E0B]" /> Listen</button>
            <button onClick={() => showToast('Summary coming soon!')} className="bg-white text-[#060818] border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold hover:border-[#F59E0B] transition-all">Read Summary</button>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h3 className="text-2xl font-black dark:text-white">Today&#39;s Highlights</h3>
        <div className="space-y-4">
          {highlights.map((item, idx) => (
            <motion.div key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bs-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 hover:border-[#F59E0B] transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black px-3 py-1 rounded-full bg-gray-50 dark:bg-white/10 text-gray-400 uppercase tracking-widest">{item.category}</span>
                <button onClick={(e) => { e.stopPropagation(); showToast(bookmarks.includes(item.id) ? 'Bookmark removed!' : 'Bookmarked!'); }}
                  className="p-2 text-gray-300 hover:text-[#F59E0B] transition-colors"><Bookmark size={18} /></button>
              </div>
              <h4 className="text-xl font-bold mb-2 text-[#060818] dark:text-white">{item.title}</h4>
              <p className="text-gray-500 dark:text-gray-400">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
