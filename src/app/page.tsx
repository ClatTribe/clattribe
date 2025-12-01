"use client";
import React from 'react';
import Hero from './components/Hero';
import CapsuleSystem from './components/CapsuleSystem';
import Flashcards from './components/Flashcards';
// import AiAssistant from './components/AiAssistant';
import NewFooter from './components/newFooter';
import { GraduationCap } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-900 text-white font-sans selection:bg-brand-gold selection:text-brand-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-900/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-brand-gold" />
            <span className="text-2xl font-serif font-bold tracking-tight">ClatTribe</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Capsules</a>
            <a href="#" className="hover:text-white transition-colors">Flashcards</a>
            <a href="#" className="hover:text-white transition-colors">Blogs</a>
            <a href="#" className="hover:text-white transition-colors">Yash AI</a>
            <button className="px-5 py-2 bg-white text-brand-900 rounded-full font-bold hover:bg-brand-gold transition-colors">
              Login
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <CapsuleSystem />
        <Flashcards />
        
        {/* Blog Teaser Section */}
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-serif font-bold mb-12">Latest from the Tribe Blog</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="overflow-hidden rounded-xl mb-4">
                                <img 
                                    src={`https://picsum.photos/seed/clat${i}/400/250`} 
                                    alt="Blog" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>
                            <div className="text-left">
                                <span className="text-xs text-brand-gold font-bold uppercase tracking-wider">Analysis</span>
                                <h3 className="text-xl font-bold mt-2 group-hover:text-brand-gold transition-colors">
                                    {i === 1 ? "The Indo-French Strategic Partnership: A CLAT Perspective" : 
                                     i === 2 ? "Understanding the new Criminal Laws in 5 minutes" : 
                                     "Top 10 Legal Maxims repeated in last 5 years"}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* <AiAssistant /> */}
      </main>

      <NewFooter />
    </div>
  );
};

export default App;
