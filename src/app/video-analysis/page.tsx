"use client";

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import Layout from '../components/Layout';

interface Video {
  id: number;
  title: string;
  url: string;
  description: string;
}

const VideoAnalysisPage: React.FC = () => {
  // Simply edit this array to add/remove videos
  const videos: Video[] = [
    {
      id: 1,
      title: "Analysis Session 1",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Comprehensive analysis of key concepts"
    },
    {
      id: 2,
      title: "Analysis Session 2",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Deep dive into important topics"
    },
    {
      id: 3,
      title: "Analysis Session 3",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Expert analysis and insights"
    },
    {
      id: 4,
      title: "Analysis Session 4",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Advanced concepts explained"
    },
    {
      id: 5,
      title: "Analysis Session 5",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Key strategies and tips"
    },
    {
      id: 6,
      title: "Analysis Session 6",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Problem-solving techniques"
    },
    {
      id: 7,
      title: "Analysis Session 7",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Practice session analysis"
    },
    {
      id: 8,
      title: "Analysis Session 8",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Mock test breakdown"
    },
    {
      id: 9,
      title: "Analysis Session 9",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Common mistakes analysis"
    },
    {
      id: 10,
      title: "Analysis Session 10",
      url: "https://www.youtube.com/live/ZZdZjYzeBOA?si=hsH3JgWF7SJb2Sha",
      description: "Final preparation strategies"
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const extractVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* Background decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-12">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
              Video Analysis Hub
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Master Your <span className="text-[#F59E0B]">Preparation</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Access comprehensive video analysis sessions to boost your CLAT preparation
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => {
              const videoId = extractVideoId(video.url);
              const thumbnailUrl = videoId 
                ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231e293b" width="100" height="100"/></svg>';

              return (
                <div
                  key={video.id}
                  className="relative group rounded-xl border-2 border-slate-800 bg-slate-900/90 hover:border-[#F59E0B]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                  style={{
                    animationDelay: `${index * 40}ms`,
                    animation: 'fadeIn 0.5s ease-out forwards'
                  }}
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-slate-800 cursor-pointer" onClick={() => setSelectedVideo(video)}>
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231e293b" width="100" height="100"/><text x="50" y="50" font-size="12" text-anchor="middle" dy=".3em" fill="%2394a3b8">Video</text></svg>';
                      }}
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-[#F59E0B] flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                      {video.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {videos.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-block p-6 rounded-full bg-[#F59E0B]/10 mb-4">
                <Play className="w-16 h-16 text-[#F59E0B]" />
              </div>
              <p className="text-xl font-semibold text-white mb-2">
                No videos available
              </p>
              <p className="text-slate-400">
                Check back soon for new analysis sessions
              </p>
            </div>
          )}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Title */}
              <div className="p-4 border-b border-slate-800">
                <h2 className="text-xl font-bold text-white">{selectedVideo.title}</h2>
                {selectedVideo.description && (
                  <p className="text-sm text-slate-400 mt-1">{selectedVideo.description}</p>
                )}
              </div>

              {/* Video Player */}
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${extractVideoId(selectedVideo.url)}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default VideoAnalysisPage;