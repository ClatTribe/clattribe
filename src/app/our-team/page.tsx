"use client";
import React, { useState } from 'react';
import { Award, GraduationCap, Star, Target, ShieldCheck, TrendingUp, Crown } from 'lucide-react';
import Navbar from '../components/navbar';
import NewFooter from '../components/newFooter';

const TEAM = [
  {
    name: "Ashutosh Mishra",
    role: "Visionary Educator & Founder",
    credentials: "IIM Ahmedabad Alumnus",
    achievement: "Founder, IPMCareer | AIR 1 Producer",
    bio: "An educator with the vision to redefine success. As the founder of IPMCareer, he has built the exact blueprint that consistently delivers All India Rank 1s.",
    image: "https://res.cloudinary.com/daetdadtt/image/upload/v1766744730/WhatsApp_Image_2025-12-26_at_14.49.25_1_ucqpct.jpg",
    tags: ["Ex-IIMA", "IPMCareer Founder", "AIR 1 Producer"]
  },
  {
    name: "Deepak Kushwaha",
    role: "Growth Strategist & Founder",
    credentials: "Ex-IIM Lucknow",
    achievement: "Founder, IPMCareer | Makers of AIR 1",
    bio: "The strategist who turns potential into performance. Deepak's expertise in educational scaling is what makes ClatTribe the fastest growing CLAT community.",
    image: "https://res.cloudinary.com/daetdadtt/image/upload/v1766745275/WhatsApp_Image_2025-12-26_at_16.02.51_t5qrhu.jpg",
    tags: ["Ex-IIM L", "IPMCareer Founder", "Growth Architect"]
  },
  {
    name: "Poorva Didi",
    role: "Mentor & Legal Architect",
    credentials: "NLU Lucknow Alumna",
    achievement: "NLU Success Specialist",
    bio: "The guiding force for thousands. Her elder-sibling approach to mentorship has helped over 5,000 students secure seats in top NLUs across India.",
    image: "https://res.cloudinary.com/daetdadtt/image/upload/v1766741253/WhatsApp_Image_2025-12-26_at_14.56.09_xihrb1.jpg",
    tags: ["NLU Lucknow", "Mentor", "Legal Guru"]
  },
  {
    name: "Raghvendra",
    role: "Legal Reasoning Specialist",
    credentials: "NLU Bangalore Alumnus",
    achievement: "NLSIU Topper",
    bio: "Hailing from India's #1 Law School, Raghvendra brings the NLSIU standard of reasoning to every ClatTribe student, ensuring peak mental agility.",
    image: "https://res.cloudinary.com/daetdadtt/image/upload/v1766741253/WhatsApp_Image_2025-12-26_at_14.56.09_xihrb1.jpg",
    tags: ["NLU Bangalore", "NLSIU Alumni", "Reasoning Pro"]
  }
];

const TeachersPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar scrollToSection={scrollToSection} />

      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl sm:w-[600px] sm:h-[600px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl sm:w-[800px] sm:h-[800px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-[#F59E0B] text-xs font-black uppercase tracking-widest mb-6">
            <Crown className="w-4 h-4 fill-[#F59E0B]" /> From the Makers of IPMCareer
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
            We don't just teach. <br />
            We build <span className="text-[#F59E0B] italic">Rankers.</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed px-2">
            The same leadership that delivered <span className="text-white font-bold italic">All India Rank 1s</span> at IPMCareer is now revolutionizing CLAT. Meet the producers of excellence.
          </p>
        </div>

        {/* Success Habit Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32 p-8 sm:p-12 bg-slate-900/50 rounded-2xl sm:rounded-[40px] border-2 border-slate-800 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <TrendingUp className="w-64 h-64 text-[#F59E0B]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">The Pedigree of AIR 1</h2>
            <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
              Success is not an accident—it's a system. Built by IIM and NLU alumni, ClatTribe inherits the winning DNA of IPMCareer. We understand the science of high-stakes exams.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-[#F59E0B] rounded-2xl group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-slate-950" />
                </div>
                <span className="text-white font-bold uppercase text-xs tracking-widest">AIR 1 Blueprints</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-[#F59E0B] rounded-2xl group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-slate-950" />
                </div>
                <span className="text-white font-bold uppercase text-xs tracking-widest">IIM-Standard Quality</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 sm:p-8 bg-slate-800 border-2 border-slate-700 rounded-2xl sm:rounded-3xl text-center shadow-xl">
                <span className="block text-3xl sm:text-4xl font-black text-[#F59E0B] mb-2">AIR 1</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Proven Record</span>
              </div>
              <div className="p-6 sm:p-8 bg-slate-800 border-2 border-slate-700 rounded-2xl sm:rounded-3xl text-center shadow-xl">
                <span className="block text-3xl sm:text-4xl font-black text-[#F59E0B] mb-2">IIM-L</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">IIM Lucknow</span>
              </div>
              <div className="p-6 sm:p-8 bg-slate-800 border-2 border-slate-700 rounded-2xl sm:rounded-3xl text-center shadow-xl col-span-2">
                <span className="block text-xl sm:text-2xl font-black text-white mb-2 uppercase tracking-tighter">Makers of IPMCareer</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">Undisputed Leaders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM.map((member, index) => (
            <div
              key={member.name}
              className="bg-slate-900/50 rounded-2xl sm:rounded-[40px] overflow-hidden border-2 border-slate-800 group hover:border-[#F59E0B]/50 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.15)]"
            >
              <div className="relative h-[350px] sm:h-[400px] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-[#F59E0B] text-slate-950 text-[8px] font-black uppercase tracking-widest rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#F59E0B] font-bold text-[10px] tracking-widest uppercase">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
                  <span className="font-bold text-xs">{member.credentials}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#F59E0B]" />
                  <span className="text-white text-[10px] font-black uppercase tracking-widest">{member.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-32 text-center">
          <p className="text-slate-500 text-2xl sm:text-3xl font-serif italic max-w-2xl mx-auto px-4">
            "We don't just teach. <span className="text-white font-bold">We build Rankers.</span>"
          </p>
          <div className="mt-8 flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] fill-[#F59E0B]" />)}
          </div>
        </div>
      </div>

      <NewFooter />
    </div>
  );
};

export default TeachersPage;