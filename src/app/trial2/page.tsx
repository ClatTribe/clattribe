"use client";
import React from 'react';
import { Award, GraduationCap, Building2 } from 'lucide-react';

const TEACHERS = [
  {
    name: "Yash Ji",
    role: "Lead GK & Current Affairs Mentor",
    background: "NLSIU Bangalore Alumnus",
    bio: "With over a decade of experience in legal education, Yash Ji has pioneered the 'Capsule' methodology that has helped over 5,000 students enter top NLUs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500",
    stats: "AIR 12 Mentor",
    specialty: "GK & Legal Current Affairs"
  },
  {
    name: "Megha Sharma",
    role: "Legal Reasoning Expert",
    background: "NALSAR Hyderabad Alumna",
    bio: "Megha specializes in decoding complex legal propositions. Her background as a practicing High Court advocate brings unparalleled practical insight to her sessions.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
    stats: "NLU Topper",
    specialty: "Constitutional Law & Torts"
  },
  {
    name: "Rohan Varma",
    role: "Aptitude & Logical Lead",
    background: "IIM Ahmedabad Alumnus",
    bio: "Rohan brings the rigor of an IIM education to CLAT prep. He focuses on speed-solving techniques and data-driven critical reasoning strategies.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500",
    stats: "CAT 99.98%tile",
    specialty: "Critical Reasoning & QT"
  }
];

const TeachersPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl sm:w-[600px] sm:h-[600px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl sm:w-[800px] sm:h-[800px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-[#F59E0B] mb-6">
            <GraduationCap className="w-4 h-4" />
            The Elite Pedagogy
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
            Learn from <span className="text-[#F59E0B]">NLU & IIM Alumni</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto px-2">
            We don't just teach law; we've lived it. Our mentors are graduates of the very institutions you aspire to join.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-32">
          {TEACHERS.map((teacher, index) => (
            <div
              key={teacher.name}
              className="bg-slate-900/50 rounded-2xl overflow-hidden border-2 border-slate-800 group hover:border-[#F59E0B]/50 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.15)]"
            >
              <div className="relative h-[350px] sm:h-[400px] lg:h-[450px] overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                  <div className="flex items-center gap-2 text-[#F59E0B] font-bold text-xs uppercase tracking-widest mb-2">
                    <Building2 className="w-4 h-4" /> {teacher.background}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">{teacher.name}</h3>
                  <p className="text-slate-300 text-sm font-medium">{teacher.role}</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
                  "{teacher.bio}"
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Award className="w-5 h-5 text-[#F59E0B]" />
                    {teacher.stats}
                  </div>
                  <span className="text-[#F59E0B]/50 text-[10px] uppercase font-black tracking-wider">Verified Faculty</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Banner */}
        <div className="p-8 sm:p-10 lg:p-12 bg-slate-900/50 rounded-2xl border-2 border-slate-800 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 text-center lg:text-left shadow-xl">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The <span className="text-[#F59E0B]">NLU-IIM Advantage</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Standard coaching centers hire local graduates. We hire veterans. By learning from NLU and IIM alumni, you gain insights into the psychology of the exam setters and the rigor of law school life before you even step foot there.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="p-6 bg-slate-800/50 rounded-xl text-center border border-slate-700">
              <span className="block text-2xl sm:text-3xl font-bold text-[#F59E0B]">100%</span>
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">NLU Faculty</span>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl text-center border border-slate-700">
              <span className="block text-2xl sm:text-3xl font-bold text-[#F59E0B]">IIM</span>
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Strategy Lead</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersPage;