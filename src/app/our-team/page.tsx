"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Award, GraduationCap, Building2, X, Menu } from 'lucide-react';

const TEACHERS = [
  {
    name: "Ashutosh Mishra",
    // role: "Lead GK & Current Affairs Mentor",
    background: "IIM Ahmedabad Alumnus",
    bio: "The Architect of Our Academic Excellence Ashutosh, a co-founder of CLAT Tribe, is an alumnus of the prestigious IIM Ahmedabad. As our Head of Academics, he brings the world-class strategic thinking and rigorous standards of India’s top B-school to the legal entrance domain. Ashutosh oversees the entire pedagogical framework, ensuring that our curriculum is not just comprehensive, but strategically designed to help students think like toppers and manage their preparation with peak efficiency.",
    image: "https://res.cloudinary.com/daetdadtt/image/upload/v1766744730/WhatsApp_Image_2025-12-26_at_14.49.25_1_ucqpct.jpg",
    // stats: "AIR 12 Mentor",
    // specialty: "GK & Legal Current Affairs",
    layout: "left"
  },
  {
    name: "Ashish Mishra",
    // role: "Legal Reasoning Expert",
    background: "IIT Bombay Alumnus",
    bio: "Learn from the Best Our Co-founder, Ashish, knows exactly what it takes to crack India’s toughest competitive exams. An IIT Bombay graduate, he specializes in transforming the way students approach Quants and Critical Reasoning. By blending high-level analytical strategies with simplified learning techniques, Ashish ensures that every member of the CLAT Tribe gains a competitive edge in their journey toward a top National Law University..",
    image: "https://res.cloudinary.com/daetdadtt/image/upload/v1766745275/WhatsApp_Image_2025-12-26_at_16.02.51_t5qrhu.jpg",
    // stats: "NLU Topper",
    // specialty: "Constitutional Law & Torts"
  },
  {
    name: "Aradhya Vats",
    // role: "Aptitude & Logical Lead",
    background: "IIM Indore Alumnus",
    bio: "Aradhya Mam brings the discipline and strategic rigor of an IIM education to CLAT preparation. With a sharp focus on speed-solving methodologies and data-driven critical reasoning, he helps students build accuracy under pressure. By combining structured problem-solving frameworks with practical exam insights, Aradhya Mam ensures that every CLAT Tribe learner develops the confidence and precision needed to compete for top National Law Universities.",
    image: "https://res.cloudinary.com/daetdadtt/image/upload/v1766741253/WhatsApp_Image_2025-12-26_at_14.56.09_xihrb1.jpg",
    // stats: "CAT 99.98%tile",
    // specialty: "Critical Reasoning & QT"
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
      <nav className="fixed w-full z-50 bg-brand-900/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/heading.png" alt="Clat Tribe Logo" width={180} height={180} className="rounded" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/our-team" className="hover:text-white transition-colors">
            Our Team
          </Link>
          {/* <button 
            onClick={() => scrollToSection('flashcards')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Flashcards
          </button> */}
          <Link href="/blogs" className="hover:text-white transition-colors">
            Blogs
          </Link>
          <Link href="/nlu-predictor" className="hover:text-white transition-colors">
            NLU Predictor
          </Link>
          <Link href="/nlu-preference-list" className="hover:text-white transition-colors">
            NLU Preference List
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172B] border-t border-white/10 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            <Link 
              href="/" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/our-team" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            {/* <button 
              onClick={() => scrollToSection('flashcards')}
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 text-left font-medium"
            >
              Flashcards
            </button> */}
            <Link 
              href="/blogs" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link 
              href="/nlu-predictor" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              NLU Predictor
            </Link>
            <Link 
              href="/nlu-preference-list" 
              className="text-white hover:text-brand-gold transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              NLU Preference List
            </Link>
          </div>
        </div>
      )}
    </nav>

      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl sm:w-[600px] sm:h-[600px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl sm:w-[800px] sm:h-[800px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pb-20">
        
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
            We don't just teach law, We've lived it.
          </p>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto px-2">
            Our mentors are graduates of the very institutions you aspire to join.
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
                  {/* <p className="text-slate-300 text-sm font-medium">{teacher.role}</p> */}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
                  "{teacher.bio}"
                </p>
                {/* <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Award className="w-5 h-5 text-[#F59E0B]" />
                    {teacher.stats}
                  </div>
                  <span className="text-[#F59E0B]/50 text-[10px] uppercase font-black tracking-wider">Verified Faculty</span>
                </div> */}
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