'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Bookmark } from 'lucide-react';

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
        <div className="space-y-8 sm:space-y-12">
          {toast && (
                  <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="fixed bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-[100] bg-[#060818] text-white px-6 py-3 rounded-2xl font-bold shadow-2xl text-center"
                            >
                    {toast}
                  </motion.div>motion.div>
                )}
        
          {/* Hero */}
              <section className="text-center py-10 sm:py-16 bg-white dark:bg-white/5 rounded-[2rem] sm:rounded-[3rem] border border-gray-100 dark:border-white/5">
                      <div className="max-w-2xl mx-auto px-4 sm:px-6">
                                <h2 className="text-3xl sm:text-5xl font-black text-[#060818] dark:text-white mb-4 sm:mb-6 leading-tight">
                                            Stop reading. <span className="text-[#F59E0B]">Start learning.</span>span>
                                </h2>h2>
                                <p className="text-base sm:text-xl text-gray-500 dark:text-gray-400 mb-8 sm:mb-10">
                                            Master General Knowledge in just 10 minutes a day.
                                </p>p>
                                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                                            <button
                                                            onClick={() => showToast('Audio briefing coming soon!')}
                                                            className="bg-[#060818] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-800 transition-all text-sm sm:text-base"
                                                          >
                                                          <Play size={18} fill="currentColor" className="text-[#F59E0B]" /> Listen
                                            </button>button>
                                            <button
                                                            onClick={() => showToast('Summary coming soon!')}
                                                            className="bg-white dark:bg-white/10 text-[#060818] dark:text-white border-2 border-gray-100 dark:border-white/10 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold hover:border-[#F59E0B] transition-all text-sm sm:text-base"
                                                          >
                                                          <span className="flex items-center gap-2"><BookOpen size={18} /> Read Summary</span>span>
                                            </button>button>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* Highlights */}
              <section className="space-y-5 sm:space-y-8">
                      <h3 className="text-xl sm:text-2xl font-black dark:text-white">Today&#39;s Highlights</h3>h3>
                      <div className="space-y-3 sm:space-y-4">
                        {highlights.map((item, idx) => (
                      <motion.div
                                      key={item.id}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="bg-white dark:bg-white/5 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 dark:border-white/5 hover:border-[#F59E0B] transition-all cursor-pointer"
                                    >
                                    <div className="flex justify-between items-start mb-3">
                                                    <span className="text-[10px] font-black px-3 py-1 rounded-full bg-gray-50 dark:bg-white/10 text-gray-400 uppercase tracking-widest">{item.category}</span>span>
                                                    <button
                                                                        onClick={(e) => {
                                                                                              e.stopPropagation();
                                                                                              const isBookmarked = bookmarks.includes(item.id);
                                                                                              setBookmarks(prev => isBookmarked ? prev.filter(b => b !== item.id) : [...prev, item.id]);
                                                                                              showToast(isBookmarked ? 'Bookmark removed!' : 'Bookmarked!');
                                                                        }}
                                                                        className="p-2 text-gray-300 hover:text-[#F59E0B] transition-colors"
                                                                      >
                                                                      <Bookmark size={18} className={bookmarks.includes(item.id) ? 'fill-[#F59E0B] text-[#F59E0B]' : ''} />
                                                    </button>button>
                                    </div>div>
                                    <h4 className="text-base sm:text-xl font-bold mb-2 text-[#060818] dark:text-white">{item.title}</h4>h4>
                                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{item.summary}</p>p>
                                    <p className="text-[10px] font-bold text-gray-400 mt-2 uppercase tracking-widest">{item.time} read</p>p>
                      </motion.div>motion.div>
                    ))}
                      </div>div>
              </section>section>
        </div>div>
      );
}</div>
