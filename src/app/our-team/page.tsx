"use client";
import React, { useState } from 'react';
import { Award, GraduationCap, Star, Target, ShieldCheck, TrendingUp, Crown } from 'lucide-react';
import Navbar from '../components/navbar';
import NewFooter from '../components/newFooter';
import ContactButton from '../components/ContactButton';

const TEAM = [
  {
    name: "Raghvendra Bhaiya",
    role: "Legal Reasoning Specialist",
    credentials: "NLU Bangalore Alumnus",
    achievement: "NLSIU Topper",
    bio: "Hailing from India's #1 Law School, Raghvendra brings the NLSIU standard of reasoning to every ClatTribe student, ensuring peak mental agility.",
    image: "https://res.cloudinary.com/daetdadtt/image/upload/v1768377212/Gemini_Generated_Image_p9dr49p9dr49p9dr_cbaowb.png",
    tags: ["NLU Lucknow", "NLSIU Alumni"]
  },
  {
    name: "Poorva Didi",
    role: "Mentor & Legal Architect",
    credentials: "NLU Lucknow Alumna",
    achievement: "NLU Success Specialist",
    bio: "The guiding force for thousands. Her elder-sibling approach to mentorship has helped over 5,000 students secure seats in top NLUs across India.",
    image: "https://res.cloudinary.com/daetdadtt/image/upload/v1767851865/WhatsApp_Image_2026-01-08_at_11.24.32_uqcyur.jpg",
    tags: ["NLU Lucknow", "Mentor"]
  },
  {
    name: "Ashutosh Mishra",
    role: "Visionary Educator & Founder",
    credentials: "IIM Ahmedabad Alumnus",
    achievement: "Founder, IPMCareer | AIR 1 Producer",
    bio: "An educator with the vision to redefine success. As the founder of IPMCareer, he has built the exact blueprint that consistently delivers All India Rank 1s.",
    image: "https://res.cloudinary.com/daetdadtt/image/upload/v1766744730/WhatsApp_Image_2025-12-26_at_14.49.25_1_ucqpct.jpg",
    tags: ["Ex-IIMA", "IPMCareer Founder"]
  },
];

const TeachersPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#F59E0B]/30">
      <ContactButton />
      <Navbar scrollToSection={scrollToSection} />

      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#F59E0B]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-24">
        
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-[#F59E0B] text-[10px] md:text-xs font-black uppercase tracking-widest mb-6">
            <Crown className="w-4 h-4 fill-[#F59E0B]" /> From the Makers of IPMCareer
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            We don't just teach. <br className="hidden sm:block" />
            We build <span className="text-[#F59E0B] italic">Rankers.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
            The same leadership that delivered <span className="text-white font-bold italic">All India Rank 1s</span> at IPMCareer is now revolutionizing CLAT.
          </p>
        </div>

        {/* Success Habit Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-24 p-6 md:p-12 bg-slate-900/40 backdrop-blur-sm rounded-[32px] border border-slate-800/50 shadow-2xl">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">The Pedigree of AIR 1</h2>
            <p className="text-slate-400 text-sm md:text-lg mb-8 leading-relaxed">
              Success is not an accident—it's a system. Built by IIM and NLU alumni, ClatTribe inherits the winning DNA of IPMCareer.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="p-2 bg-[#F59E0B] rounded-lg">
                  <Target className="w-5 h-5 text-slate-950" />
                </div>
                <span className="text-white font-bold uppercase text-[10px] tracking-widest">AIR 1 Blueprints</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="p-2 bg-[#F59E0B] rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-slate-950" />
                </div>
                <span className="text-white font-bold uppercase text-[10px] tracking-widest">IIM Quality</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl text-center">
              <span className="block text-2xl md:text-4xl font-black text-[#F59E0B] mb-1">AIR 1</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Proven Record</span>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl text-center">
              <span className="block text-2xl md:text-4xl font-black text-[#F59E0B] mb-1">IIM-A/L</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Mentorship</span>
            </div>
            <div className="col-span-2 p-6 bg-slate-800/80 border border-[#F59E0B]/20 rounded-2xl text-center">
              <span className="block text-lg md:text-xl font-black text-white mb-1 uppercase tracking-tight">Makers of IPMCareer</span>
              <span className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold">The Gold Standard</span>
            </div>
          </div>
        </div>

        {/* Team Grid - Fixed 3 columns on Large Screens, 2 on Medium, 1 on Small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="flex flex-col bg-slate-900/40 rounded-[32px] overflow-hidden border border-slate-800 group hover:border-[#F59E0B]/40 transition-all duration-500 shadow-lg"
            >
              {/* Image Container with consistent Aspect Ratio */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-[#F59E0B] text-slate-950 text-[9px] font-black uppercase tracking-widest rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#F59E0B] font-bold text-[10px] tracking-[0.15em] uppercase">{member.role}</p>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span className="font-bold text-xs">{member.credentials}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {member.bio}
                </p>
                <div className="pt-4 border-t border-slate-800/50 flex items-center gap-2 mt-auto">
                  <Award className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span className="text-white text-[10px] font-black uppercase tracking-widest">{member.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-24 md:mt-32 text-center">
          <p className="text-slate-500 text-xl md:text-3xl font-serif italic max-w-2xl mx-auto px-4">
            "We don't just teach. <span className="text-white font-bold">We build Rankers.</span>"
          </p>
          <div className="mt-8 flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />)}
          </div>
        </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default TeachersPage;