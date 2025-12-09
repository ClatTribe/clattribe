"use client";

import React, { useState } from 'react';
import { Play, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';

const WrittenAnalysisPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Video details
  const videoUrl = "https://www.youtube.com/watch?v=2JVTB5S5FBQ&t=451s";
  // const videoDuration = "45:30";

  const extractVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = extractVideoId(videoUrl);

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
              CLAT 2026 <span className="text-[#F59E0B]">Exam Analysis</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive analysis of the December 7, 2025 exam
            </p>
          </div>

          {/* Content Section */}
          <div className="relative rounded-2xl border-2 border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 p-8">          
              {/* Left Side - Scrollable Content */}
              <div className="flex flex-col justify-start space-y-6">
                {/* Title */}
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    CLAT 2026 Exam Analysis
                  </h2>
                  <p className="text-base text-slate-300 leading-relaxed mb-4">
                    The CLAT 2026 exam, held on December 7, 2025, has been widely assessed by experts and students as having an <span className="text-[#F59E0B] font-semibold">"easy to moderate"</span> overall difficulty level. The paper followed a predictable structure but featured one major surprise that significantly impacted the test-taking strategy.
                  </p>
                </div>

                {/* Section-Wise Performance */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[#F59E0B]" />
                    Section-Wise Performance & Key Surprise
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <span className="font-semibold text-white">Logical Reasoning</span> emerged as the most challenging and talked-about section. In a major deviation, it contained <span className="text-[#F59E0B] font-semibold">only puzzle-based Analytical Reasoning questions</span>, with no Critical Reasoning passages at all. This unexpected shift consumed considerable time and was rated as moderately difficult.
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    In contrast, <span className="font-semibold text-white">General Knowledge & Current Affairs</span> and <span className="font-semibold text-white">Legal Reasoning</span> were considered the easiest and most scoring sections. The GK questions were direct and based on prominent recent events, while Legal Reasoning focused on applying principles from given passages.
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The <span className="font-semibold text-white">English Language</span> section was moderate, featuring dense, interdisciplinary passages that tested comprehension and inference. The <span className="font-semibold text-white">Quantitative Techniques</span> section was straightforward but included some calculation-intensive sets.
                  </p>
                </div>

                {/* Implications */}
                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F59E0B]" />
                    Implications and Next Steps
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    This balanced yet tricky paper suggests that competition for top scores will remain intense. Experts predict that securing a seat in a top-tier National Law University (NLU) will likely require a score <span className="text-[#F59E0B] font-semibold">above 90 marks</span>.
                  </p>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                    <p className="text-sm text-slate-200 font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#F59E0B]" />
                      Provisional Answer Key Release
                    </p>
                    <p className="text-sm text-slate-400 mt-2">
                      Scheduled for <span className="text-white font-semibold">December 10, 2025, at 5:00 PM</span>, allowing candidates to calculate their estimated scores.
                    </p>
                  </div>
                </div>

                {/* Watch Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-xl bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white font-semibold transition-all duration-300 shadow-lg shadow-[#F59E0B]/30 hover:shadow-[#F59E0B]/50"
                >
                  <Play className="w-5 h-5" fill="white" />
                  {isPlaying ? 'Hide Video' : 'Watch Detailed Analysis'}
                </button>
              </div>

              {/* Right Side - Sticky Video Player */}
              <div className="flex items-start justify-center lg:sticky lg:top-8 lg:self-start">
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
                      className="relative aspect-video bg-slate-800 cursor-pointer group"
                      onClick={() => setIsPlaying(true)}
                    >
                      <img
                        src={videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : ''}
                        alt="CLAT 2026 Analysis"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231e293b" width="100" height="100"/><text x="50" y="50" font-size="8" text-anchor="middle" dy=".3em" fill="%2394a3b8">Video Thumbnail</text></svg>';
                        }}
                      />
                      
                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300">
                        <div className="w-20 h-20 rounded-full bg-[#F59E0B] group-hover:scale-110 flex items-center justify-center shadow-2xl transition-transform duration-300">
                          <Play className="w-10 h-10 text-white ml-1" fill="white" />
                        </div>
                      </div>

                      {/* Duration Badge on Thumbnail */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 text-white text-sm font-semibold flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {/* {videoDuration} */}
                      </div>
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