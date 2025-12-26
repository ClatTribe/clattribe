"use client";
import React from 'react';
import { Check, Star, GraduationCap, Trophy, ArrowRight, ArrowDown, Info } from 'lucide-react';

const COURSES = [
  {
    id: 'rankers-batch',
    name: "The Director's Batch (NLU Rankers)",
    currentPrice: '₹4,999',
    originalPrice: '₹9,999',
    tag: 'Elite Exclusive',
    description: "Generic coaching got you to a plateau. The Director's Batch will get you to an NLU. Designed for top-tier aspirants.",
    features: ['Direct Access to NLU Mentors', 'Mock Analysis by Rank Holders', 'Daily Answer Writing (Legal)', 'Advanced GK Deep-Dives', 'One-on-One Mentorship by NLUs/IIM Alumni'],
    highlight: true
  },
  {
    id: 'gk-intensive',
    name: 'GK Capsules',
    currentPrice: '₹6,999',
    originalPrice: '₹15,999',
    tag: 'Best Seller',
    description: 'Master the most volatile section. Current affairs, static GK, and legal updates curated by NLU alumni.',
    features: ['Monthly GK Capsules', 'High-Yield Video Explainers', 'Weekly Current Affairs Quizzes', "Yash Ji's Special Notes","Elite GK Flashcards"]
  },
  {
    id: 'gk-flashcards',
    name: 'Elite GK Flashcards',
    currentPrice: '₹99',
    originalPrice: '₹1,999',
    tag: 'Limited Time',
    description: '1000+ smart cards covering every important fact for CLAT. Perfect for rapid last-minute revision.',
    features: ['Memory Hook Techniques', 'Daily Progress Tracking', 'Offline Access via App', 'Category-wise Sorting']
  }
];

const RANKERS = [
  { name: "Ananya Iyer", rank: "AIR 8", college: "NLSIU Bangalore", image: "https://i.pravatar.cc/150?u=ananya" },
  { name: "Kabir Singh", rank: "AIR 24", college: "NALSAR Hyderabad", image: "https://i.pravatar.cc/150?u=kabir" },
  { name: "Sara Khan", rank: "AIR 56", college: "WBNUJS Kolkata", image: "https://i.pravatar.cc/150?u=sara" },
  { name: "Rahul Verma", rank: "AIR 92", college: "NLU Jodhpur", image: "https://i.pravatar.cc/150?u=rahul" }
];

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl sm:w-[600px] sm:h-[600px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl sm:w-[800px] sm:h-[800px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-[#F59E0B] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            Study Programs
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
            Our <span className="text-[#F59E0B]">Study Programs</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto px-2">
            From foundational logic to the elite Director's Batch, choose the path that leads you to your dream NLU.
          </p>
        </div>

        {/* Scholarship Spotlight */}
        <div className="mb-16 sm:mb-24">
          <div className="relative rounded-2xl border-2 border-[#F59E0B]/30 bg-slate-900/50 backdrop-blur-sm overflow-hidden p-6 sm:p-8 lg:p-12 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="text-left flex-1">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-[#F59E0B] rounded-xl sm:rounded-2xl">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-slate-950" />
                  </div>
                  <div>
                    <span className="text-[#F59E0B] font-black tracking-widest uppercase text-xs block">Scholarship Portal</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">The 90+ Club Reward</h2>
                  </div>
                </div>
                <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Excellence deserves support. If you scored <span className="text-white font-bold">90+ in CLAT 2026</span> or achieve it in our scholarship mock, you are eligible for <span className="text-[#F59E0B] font-bold">100% scholarship</span>.
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <button className="px-8 sm:px-10 py-4 sm:py-5 bg-[#F59E0B] text-slate-950 font-extrabold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-xl text-base sm:text-lg">
                  Apply for Waiver
                </button>
                <p className="text-center text-xs text-slate-500 font-medium italic">*Applicable for Director's & Foundation batches</p>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-32">
          {COURSES.map((course, idx) => (
            <div
              key={course.id}
              className={`relative rounded-2xl border-2 p-6 sm:p-8 lg:p-10 flex flex-col h-full transition-all duration-300 ${
                course.highlight 
                ? 'bg-slate-800/80 border-[#F59E0B]/50 shadow-[0_30px_60px_-15px_rgba(245,158,11,0.15)]' 
                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              {course.tag && (
                <span className={`absolute -top-4 left-1/2 -translate-x-1/2 text-slate-950 text-xs font-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-full uppercase tracking-wider shadow-lg ${
                  course.tag === 'Limited Time' ? 'bg-red-500' : 'bg-[#F59E0B]'
                }`}>
                  {course.tag}
                </span>
              )}
              
              <div className="mb-8 sm:mb-10">
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${course.highlight ? 'text-[#F59E0B]' : 'text-white'}`}>
                  {course.name}
                </h3>
                <div className="flex items-baseline gap-2 sm:gap-3">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{course.currentPrice}</span>
                  <span className="text-slate-500 text-lg sm:text-xl font-medium line-through">{course.originalPrice}</span>
                </div>
                <p className="text-slate-400 text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed italic">
                  {course.description}
                </p>
              </div>

              <div className="flex-grow space-y-4 sm:space-y-5 mb-8 sm:mb-12">
                {course.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-300 group">
                    <div className={`mt-1 rounded-full p-0.5 flex-shrink-0 ${course.highlight ? 'bg-[#F59E0B]' : 'bg-slate-600'}`}>
                      <Check className="w-3 h-3 text-slate-950" />
                    </div>
                    <span className="group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 sm:py-5 rounded-xl font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2 ${
                course.highlight
                ? 'bg-[#F59E0B] text-slate-950 hover:bg-white shadow-lg'
                : 'bg-slate-700 text-white hover:bg-[#F59E0B] hover:text-slate-950'
              }`}>
                {course.id === 'gk-flashcards' ? 'Grab Access Now' : 'Join the Tribe'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Rankers Section */}
        <section className="py-16 sm:py-24 border-t border-slate-800">
          <div className="text-center mb-16 sm:mb-20 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
              <Trophy className="w-4 h-4" /> The Hall of Fame
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 text-white tracking-tighter">
              THIS COULD BE <span className="text-[#F59E0B]">YOU</span>.
            </h2>
            
            <div className="flex flex-col items-center gap-2 mt-6 sm:mt-8">
              <span className="text-slate-500 text-xs sm:text-sm uppercase font-bold tracking-wider sm:tracking-widest">Join the elites below</span>
              <ArrowDown className="w-8 h-8 sm:w-10 sm:h-10 text-[#F59E0B] animate-bounce" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-24">
            {RANKERS.map((ranker, i) => (
              <div 
                key={i}
                className="text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative mb-4 sm:mb-6 inline-block">
                  <div className="absolute inset-0 bg-[#F59E0B] rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <img 
                    src={ranker.image} 
                    alt={ranker.name} 
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto border-4 border-slate-800 group-hover:border-[#F59E0B] transition-colors object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#F59E0B] text-slate-950 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-black text-xs border-4 border-slate-950">
                    {ranker.rank}
                  </div>
                </div>
                <h4 className="text-base sm:text-xl font-bold text-white mb-1">{ranker.name}</h4>
                <p className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-widest uppercase">{ranker.college}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="p-8 sm:p-12 bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-700 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Tribe Philosophy</h3>
              <p className="text-slate-400 text-lg sm:text-xl lg:text-2xl italic mb-6 sm:mb-8 leading-relaxed">
                "Generic coaching got you to a plateau. The <span className="text-white font-bold">Director's Batch</span> will get you to an NLU. We don't just teach the syllabus; we teach you how to out-think the exam."
              </p>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B] fill-[#F59E0B]" />)}
                </div>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Verified Alumnus Testimonial</span>
              </div>
            </div>
          </div>
        </section>

        {/* Info Box */}
        <div className="mt-10 sm:mt-16 bg-slate-800/50 border-2 border-slate-700 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
            Important Note
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            All course prices are limited-time offers. Prices may increase without prior notice. Scholarships are subject to eligibility criteria verification. For queries, reach out to our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;