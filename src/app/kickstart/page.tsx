"use client";

import React, { useState } from 'react';
import { Zap, Calendar, Clock, CheckCircle, MapPin, Filter, Rocket, Lock, ChevronRight, Gift } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">
            CLAT<span className="text-[#F59E0B]">Tribe</span>
          </a>
          <a
            href="#register"
            className="px-5 py-2.5 bg-[#F59E0B] text-slate-950 rounded-lg font-bold text-sm hover:bg-[#F59E0B]/90 transition-all"
          >
            Register Now
          </a>
        </div>
      </nav>
      {children}
    </div>
  );
};

const WebinarPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    status: 'Class 12 Student'
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    alert('Success! Your spot is reserved. Check your email for the Zoom link and Starter Kit instructions.');
    setFormData({ name: '', phone: '', email: '', status: 'Class 12 Student' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* Background decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl sm:w-[600px] sm:h-[600px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl sm:w-[800px] sm:h-[800px]"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F59E0B]/10 border border-[#F59E0B] text-[#F59E0B] rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>INAUGURAL STRATEGY WEBINAR</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master the Facts.<br />
              <span className="text-[#F59E0B]">Rule the Law.</span>
            </h1>
            
            <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              Kickstart your strategic CLAT 2027 journey with an 11-month roadmap and resource audit designed by NLU graduates.
            </p>
            
            <div className="flex justify-center gap-5 flex-wrap mb-8">
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] text-slate-950 rounded-lg font-bold hover:bg-[#F59E0B]/90 transition-all hover:scale-105 shadow-lg"
              >
                <span>Secure My Free Spot</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-[#F59E0B] font-semibold flex items-center justify-center gap-6 flex-wrap">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Jan 11, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                6:00 PM IST
              </span>
            </div>
          </div>
        </section>

        {/* Mentor Section */}
        <section className="relative py-20 bg-slate-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 sm:p-12">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <img
                  src="https://res.cloudinary.com/daetdadtt/image/upload/v1767851865/WhatsApp_Image_2026-01-08_at_11.24.32_uqcyur.jpg"
                  alt="Purva CLAT Mentor"
                  className="w-full rounded-2xl border-2 border-[#F59E0B]"
                />
              </div>
              
              <div>
                <span className="text-[#F59E0B] font-bold uppercase tracking-wider text-sm block mb-3">
                  Meet Your Webinar Mentor
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                  Purva <span className="text-[#F59E0B]">(RMLNLU)</span>
                </h2>
                <p className="text-slate-400 font-semibold mb-5">
                  National Law University Graduate | Core Mentor at CLAT Tribe
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Purva has helped hundreds of aspirants bring structure and confidence to their preparation. A graduate of RMLNLU, she specializes in transforming overwhelming syllabi into actionable roadmaps.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                    <span>Practical CLAT 2027 Execution Strategy</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                    <span>High-Yield Resource Identification</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                    <span>Student-Centric Coaching Framework</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-[#F59E0B]/50 transition-all duration-300">
                <MapPin className="w-12 h-12 text-[#F59E0B] mb-5" />
                <h3 className="text-xl font-bold mb-3">Surgical Roadmap</h3>
                <p className="text-slate-400">
                  A month-by-month breakdown of every section, from legal reasoning to current affairs mastery.
                </p>
              </div>
              
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-[#F59E0B]/50 transition-all duration-300">
                <Filter className="w-12 h-12 text-[#F59E0B] mb-5" />
                <h3 className="text-xl font-bold mb-3">Resource Audit</h3>
                <p className="text-slate-400">
                  Learn exactly which books and materials are essential, and which ones are a waste of your time.
                </p>
              </div>
              
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-[#F59E0B]/50 transition-all duration-300">
                <Rocket className="w-12 h-12 text-[#F59E0B] mb-5" />
                <h3 className="text-xl font-bold mb-3">Dropper Strategy</h3>
                <p className="text-slate-400">
                  A specialized framework for re-takers to fix past mistakes and dominate the 2027 attempt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                  Ready to join the <span className="text-[#F59E0B]">Tribe?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                  This is a free session, but seats are capped to ensure we can answer student questions live. Claim your invitation and starter kit today.
                </p>
                
                <div className="bg-slate-900/50 backdrop-blur-sm border-l-4 border-[#F59E0B] rounded-xl p-6">
                  <h4 className="text-[#F59E0B] font-bold flex items-center gap-2 mb-3">
                    <Gift className="w-5 h-5" />
                    Attendee Bonus:
                  </h4>
                  <p className="text-slate-300">
                    Register today to receive the <strong className="text-white">CLAT 2027 Starter Kit</strong> (Roadmap PDF + Resource Masterlist) immediately after the session.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-950 mb-6">Reserve Your Spot</h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-slate-950 font-semibold mb-2 text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-950 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-950 font-semibold mb-2 text-sm">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="For event reminders"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-950 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-950 font-semibold mb-2 text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="For webinar materials"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-950 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-950 font-semibold mb-2 text-sm">
                      Current Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => handleChange('status', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-950 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20"
                    >
                      <option>Class 12 Student</option>
                      <option>Dropper</option>
                      <option>Class 11 Student</option>
                      <option>Parent</option>
                    </select>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#F59E0B] text-slate-950 rounded-lg font-bold hover:bg-[#F59E0B]/90 transition-all hover:scale-105 shadow-lg cursor-pointer"
                  >
                    <span>Secure My Free Spot</span>
                    <Lock className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-2xl font-bold mb-4">
              CLAT<span className="text-[#F59E0B]">Tribe</span>
            </div>
            <p className="text-slate-400">
              &copy; 2026 CLAT Tribe. Master the Facts. Rule the Law.
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default WebinarPage;