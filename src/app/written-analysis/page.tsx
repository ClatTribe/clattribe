"use client";

import React, { useState } from 'react';
import { Play, Clock, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

interface Video {
  id: number;
  title: string;
  url: string;
  description: string;
  duration?: string;
  details: string[];
}

type SessionType = 'morning' | 'afternoon' | 'evening';

interface SessionData {
  morning: Video;
  afternoon: Video;
  evening: Video;
}

const WrittenAnalysisPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SessionType>('morning');
  const [isPlaying, setIsPlaying] = useState(false);

  // Edit these video details for each session
  const sessionData: SessionData = {
    morning: {
      id: 1,
      title: "Morning Session Analysis",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Comprehensive analysis of the morning session covering all key concepts, problem-solving strategies, and essential shortcuts to ace your exam.",
      duration: "45:30",
      details: [
        "Complete question-by-question breakdown",
        "Time-saving techniques and shortcuts",
        "Common mistakes and how to avoid them",
        "Expert tips for maximizing accuracy"
      ]
    },
    afternoon: {
      id: 2,
      title: "Afternoon Session Analysis",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "In-depth analysis of the afternoon session with critical reasoning strategies, logical analysis techniques, and optimal time management approaches.",
      duration: "50:10",
      details: [
        "Advanced reasoning and logical analysis",
        "Strategic time management techniques",
        "Answer validation methods",
        "High-yield topic coverage"
      ]
    },
    evening: {
      id: 3,
      title: "Evening Session Analysis",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Complete breakdown of the evening session with expert insights, final preparation strategies, and revision tips to ensure exam success.",
      duration: "55:20",
      details: [
        "Comprehensive session review",
        "Expert insights and pro tips",
        "Final preparation strategies",
        "Key revision points and practice methods"
      ]
    }
  };

  const extractVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const tabs = [
    { key: 'morning' as const, icon: '🌅', label: 'Morning Session' },
    { key: 'afternoon' as const, icon: '☀️', label: 'Afternoon Session' },
    { key: 'evening' as const, icon: '🌆', label: 'Evening Session' }
  ];

  const currentVideo = sessionData[activeTab];
  const videoId = extractVideoId(currentVideo.url);

  const handleTabChange = (tab: SessionType) => {
    setActiveTab(tab);
    setIsPlaying(false);
  };

  return (
    <Layout>
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            Written Analysis
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            CLAT <span className="text-[#F59E0B]">Written Analysis</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive video analysis for Morning, Afternoon, and Evening sessions
          </p>
        </div>

        {/* Session Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-[#F59E0B] text-white shadow-lg shadow-[#F59E0B]/30'
                    : 'bg-slate-900 text-slate-300 border border-slate-800'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </span>
                {activeTab === tab.key && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative rounded-2xl border-2 border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Session Badge */}
              <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
                <span className="text-2xl">{tabs.find(t => t.key === activeTab)?.icon}</span>
                <span className="text-sm font-semibold text-slate-300">
                  {tabs.find(t => t.key === activeTab)?.label}
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                  {currentVideo.title}
                </h2>
                <p className="text-base text-slate-400 leading-relaxed">
                  {currentVideo.description}
                </p>
              </div>

              {/* Duration */}
              {currentVideo.duration && (
                <div className="flex items-center gap-2 text-[#F59E0B]">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-semibold">Duration: {currentVideo.duration}</span>
                </div>
              )}

              {/* Details List */}
              <div className="space-y-3">
                {currentVideo.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-300">
                    <ChevronRight className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Watch Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-xl bg-[#F59E0B] text-white font-semibold transition-all duration-300 shadow-lg shadow-[#F59E0B]/30"
              >
                <Play className="w-5 h-5" fill="white" />
                {isPlaying ? 'Hide Video' : 'Watch Analysis'}
              </button>
            </div>

            {/* Right Side - Video */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                {isPlaying && videoId ? (
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div 
                    className="relative aspect-video bg-slate-800 cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    <img
                      src={videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : ''}
                      alt={currentVideo.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231e293b" width="100" height="100"/><text x="50" y="50" font-size="8" text-anchor="middle" dy=".3em" fill="%2394a3b8">Video Thumbnail</text></svg>';
                      }}
                    />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300">
                      <div className="w-20 h-20 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-2xl">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>

                    {/* Duration Badge on Thumbnail */}
                    {currentVideo.duration && (
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 text-white text-sm font-semibold flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {currentVideo.duration}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default WrittenAnalysisPage;