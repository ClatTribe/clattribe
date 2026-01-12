"use client";
import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { TopNav } from '../components/TopNav';
import { ResourceTabs } from '../components/ResourceTabs';
import { ResourceContent } from '../components/ResourceContent';
import { ResourceTab } from '../../../types';
import Navbar from '../components/navbar';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ResourceTab>(ResourceTab.PYQ);

  return (
    <div className="flex h-screen bg-[#05070a] text-slate-200 overflow-hidden font-sans">
      <Navbar />
      {/* Sidebar - Fixed Left */}
      {/* <Sidebar /> */}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full -z-10"></div>

        {/* <TopNav /> */}
        
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 sm:py-8 md:px-12 lg:px-16 scroll-smooth pt-20 sm:pt-24 md:pt-28">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-8 sm:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-3 sm:mb-4 tracking-wider uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Clat Free Learning Resources
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400">
                Unlock Your <span className="text-[#f9a01b]">Potential.</span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                Empowering your CLAT journey with curated study materials, expert insights, and real-time exam updates. Join the tribe and lead the rank list.
              </p>
            </div>

            {/* Sticky Tabs Navigation */}
            <ResourceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Dynamic Content Rendering */}
            <div className="mt-6 sm:mt-8">
              <ResourceContent activeTab={activeTab} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;