"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Trophy,
  Users,
  MessageSquare,
  Activity,
  Headphones,
  Quote,
  Layers,
  Phone,
} from "lucide-react";

// Imported Components
import Navbar from '../components/navbar';
import NewFooter from '../components/newFooter';
import ContactButton from '../components/ContactButton';

const AdsLandingPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    target: "Target 2026",
    role: "Role: Student"
  });

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const floatVariant: Variants = {
    float: {
      y: [-15, 15, -15],
      transition: {
        duration: 2.5, 
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/landing_page`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          category: `${formData.target} | ${formData.role}`,
          submitted_at: new Date().toISOString()
        })
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error submitting to Supabase:", error);
      alert("Something went wrong. Please try again.");
      setFormStatus("idle");
    }
  };

  return (
    <div ref={targetRef} className="min-h-screen bg-slate-950 text-white selection:bg-[#F59E0B] selection:text-slate-950 overflow-x-hidden">
      <Navbar />
      <ContactButton />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl sm:w-[600px] sm:h-[600px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl sm:w-[800px] sm:h-[800px]"></div>
      </div>

      {/* 1. HERO + LEAD FORM */}
      {/* REDUCED TOP PADDING TO pt-12 and lg:pt-16 to remove useless space */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-32 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div style={{ opacity, scale }} className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[#F59E0B] text-xs font-black uppercase tracking-widest mb-8 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
                From the Makers of AIR 1 & NLU
              </motion.div>

              {/* FIXED LINE HEIGHT (leading-[1.1]) and pb-4 to prevent 'g' from cropping */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl xl:text-9xl font-black mb-6 leading-[1.05] tracking-tighter font-sans"
              >
                CLAT is a <br />
                <span className="font-sans italic font-black bg-gradient-to-b from-[#F59E0B] via-[#FDE68A] to-[#FEF3C7] bg-clip-text text-transparent inline-block transform -skew-x-2 pb-4">
                  Battle of Logic.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-medium"
              >
                The 2026 pattern shift proved that memory fails, but{" "}
                <span className="text-white font-bold">Analytical Muscle</span>{" "}
                wins. Trained by founders who have produced All India Rank 1s.
              </motion.p>

              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-950 overflow-hidden bg-slate-800">
                      <img 
                        src={`/${i}.jpeg`} 
                        alt={`Student ${i}`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-slate-950 bg-[#F59E0B] flex items-center justify-center text-slate-950 font-black text-xs">
                    +1k
                  </div>
                </div>
                <div className="text-slate-400 text-sm">
                  <span className="text-white font-bold block italic underline decoration-[#F59E0B]">10,000+ Students Mentored</span>
                  By IPMCareer Founders
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5"
            >
              <div className="bg-slate-900/50 backdrop-blur-md border-2 border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-[#F59E0B] text-slate-950 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-tighter animate-bounce">
                  Limited Batch Seats
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">Join the Tribe</h3>
                <p className="text-slate-400 text-sm mb-8 italic text-balance leading-tight">Schedule a 1-on-1 Strategy Session with Poorva Didi's Team.</p>

                {formStatus === "success" ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-[#F59E0B] mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-2">Success!</h4>
                    <p className="text-slate-400">Our Senior Counsellor will call you within 2 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                      required 
                      type="text" 
                      placeholder="Candidate Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 focus:border-[#F59E0B] outline-none transition-all placeholder:text-slate-500 text-white" 
                    />
                    <input 
                      required 
                      type="tel" 
                      placeholder="WhatsApp Number" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 focus:border-[#F59E0B] outline-none transition-all placeholder:text-slate-500 text-white" 
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <select 
                        className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-4 text-slate-300 outline-none"
                        value={formData.target}
                        onChange={(e) => setFormData({...formData, target: e.target.value})}
                      >
                        <option>Target 2026</option><option>Target 2027</option>
                      </select>
                      <select 
                        className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-4 text-slate-300 outline-none"
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                      >
                        <option>Role: Student</option><option>Role: Parent</option>
                      </select>
                    </div>
                    <button 
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-4 bg-[#F59E0B] text-slate-950 font-black rounded-xl text-lg hover:bg-white hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      {formStatus === "submitting" ? "Processing..." : "Get My Blueprint"}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-[10px] text-center text-slate-600 font-bold tracking-widest uppercase mt-4">100% Secure & Private</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. AIR 1 SHOWCASE */}
      <section className="py-24 bg-white text-slate-950 relative overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F59E0B]/30 via-transparent to-transparent blur-3xl scale-125 pointer-events-none" />
              
              <div className="relative rounded-[40px] overflow-hidden border-8 border-slate-100 shadow-2xl z-10">
                <img src="/NIK.jpeg" alt="Nikhilesh AIR 1" className="w-full object-cover" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-950/90 backdrop-blur-md rounded-2xl border border-white/10 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-[#F59E0B] font-black uppercase text-[10px] tracking-widest">All India Rank 1</span>
                  </div>
                  <p className="text-sm italic font-medium opacity-80">"The strategy built by ClatTribe founders is a mental reprogramming for excellence."</p>
                </div>
              </div>

              <motion.div 
                variants={floatVariant}
                animate="float"
                className="absolute -top-12 -right-8 p-6 bg-[#F59E0B] rounded-2xl shadow-2xl hidden md:block z-[100] border-4 border-white"
              >
                <p className="text-slate-950 font-black text-2xl leading-tight uppercase">THIS<br/>COULD<br/>BE<br/>YOU.</p>
              </motion.div>
            </motion.div>

            <div className="lg:w-1/2">
              <span className="text-[#F59E0B] font-black uppercase tracking-widest text-xs mb-4 block">The Pedigree of Success</span>
              <h2 className="text-4xl md:text-6xl font-[1000] mb-8 tracking-tighter uppercase leading-none">We Don't Guess. <br/><span className="italic text-[#F59E0B]">We Predict.</span></h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">Nikhilesh followed the same <span className="text-slate-950 font-bold italic underline decoration-[#F59E0B]">AIR 1 Blueprint</span> that we have perfected over a decade at IPMCareer.</p>
              <div className="space-y-4">
                {[ "Director's Batch: Only 50 Students", "Direct Founder Mentorship" ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle2 className="text-[#F59E0B] w-6 h-6" /> {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GK & LEGAL DOMINANCE */}
      <section className="py-32 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] rounded-full text-xs font-black uppercase tracking-widest">
              <Zap className="w-4 h-4" /> Mastery Section
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter uppercase">Master the <span className="text-[#F59E0B] italic">GK & Legal</span> Paper.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">Ditch the 400-page magazines. Use digital-native tools designed by NLU Architects.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Headphones, title: "Daily GK Audio Briefs", desc: "Master current affairs in just 10 minutes. High-impact summaries recorded daily.", color: "bg-[#F59E0B]" },
              { icon: Smartphone, title: "Smart GK Flashcards", desc: "1000+ AI-powered cards using Spaced Repetition (SRS) for long-term memory.", color: "bg-indigo-500" },
              { icon: Layers, title: "Strategic Capsules", desc: "10-day, 30-day, and 6-month paths designed to hit the most frequent propositions.", color: "bg-purple-500" }
            ].map((card, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-slate-800/40 border-2 border-slate-800 p-10 rounded-3xl hover:border-[#F59E0B]/30 transition-all">
                <div className={`w-14 h-14 ${card.color} text-slate-950 rounded-2xl flex items-center justify-center mb-8`}>
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{card.desc}</p>
                <div className="flex items-center gap-2 text-[#F59E0B] font-black text-[10px] uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" /> Verified Strategy
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARENTAL DASHBOARD */}
      <section className="py-24 bg-slate-50 text-slate-950 relative overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F59E0B]/20 via-transparent to-transparent blur-3xl scale-150 pointer-events-none" />
              
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white z-10">
                <img src="/download.jpeg" alt="Mentoring" className="w-full" />
              </div>

              <motion.div 
                  variants={floatVariant}
                  animate="float"
                  className="absolute -top-10 -right-8 p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 hidden sm:block z-[100] min-w-[200px]"
                >
                   <div className="flex items-center gap-3 mb-2">
                      <Activity className="text-green-500 w-5 h-5" />
                      <span className="font-black text-slate-900 text-base uppercase">Weekly Audit: A+</span>
                   </div>
                   <div className="flex gap-2 h-10 items-end">
                      {[40, 80, 60, 95].map((h, i) => <div key={i} className="w-3 bg-[#F59E0B] rounded-full" style={{height: `${h}%`}} />)}
                   </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-slate-200 text-slate-900 text-xs font-black uppercase tracking-widest border border-slate-300">
                <ShieldCheck className="w-4 h-4" /> For the Concerned Guardian
              </div>
              <h2 className="text-4xl md:text-5xl font-[1000] mb-8 tracking-tighter uppercase leading-none">Your Child's Ambition, <br/><span className="text-[#F59E0B] italic">Our Obsession.</span></h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed italic font-medium">Typical coachings are factories. IPM Careers is a boutique lab where every child is a potential All India Ranker.</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[ { icon: MessageSquare, t: "Direct Founder Access" }, { icon: Users, t: "Legacy of AIR 1" }].map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4 group hover:border-[#F59E0B] transition-all">
                    <div className="w-12 h-12 bg-slate-950 text-white rounded-xl flex items-center justify-center group-hover:bg-[#F59E0B] transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-40 bg-[#F59E0B] text-slate-950 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <Quote className="w-16 h-16 opacity-10 mx-auto mb-8" />
          <h2 className="text-6xl md:text-8xl font-[1000] mb-12 tracking-tighter uppercase leading-[0.85]">Winning is a <br/> <span className="underline decoration-slate-950">Choice.</span></h2>
          <p className="text-xl md:text-2xl font-black mb-12 uppercase tracking-widest opacity-80 italic">Only 50 Seats in the Director's Batch.</p>
          
          <div className="flex flex-col gap-6 items-center">
            {/* Primary CTA */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="px-12 py-8 bg-slate-950 text-white rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4 cursor-pointer w-full max-w-md justify-center">
              APPLY NOW <ArrowRight className="w-8 h-8" />
            </button>

            {/* CALL NOW CTA - Matching uploaded image style */}
            <motion.a 
              href="tel:8303865139"
              whileHover={{ scale: 1.02 }}
              className="relative group bg-[#0D1117] text-white p-4 rounded-[2rem] flex items-center gap-6 shadow-2xl border border-white/5 w-full max-w-md overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Phone Icon Circle */}
              <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                <Phone className="w-8 h-8 text-slate-950" fill="currentColor" />
              </div>

              {/* Text content */}
              <div className="flex flex-col items-start relative z-10 text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-[#F59E0B] transition-colors">
                  Speak to an Expert
                </span>
                <span className="text-3xl md:text-4xl font-black tracking-tight leading-none group-hover:translate-x-1 transition-transform">
                  8303865139
                </span>
              </div>

              {/* Arrow Icon */}
              <ArrowRight className="ml-auto w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
            </motion.a>
          </div>
        </div>
      </section>

      <NewFooter />
    </div>
  );
};

export default AdsLandingPage;