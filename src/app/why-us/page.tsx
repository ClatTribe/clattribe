"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Target,
  FlaskConical,
  CheckCircle2,
  XCircle,
  Cpu,
  Scale,
  ArrowRight,
  BrainCircuit,
  LineChart
} from 'lucide-react';

import Navbar from '../components/navbar';
import NewFooter from '../components/newFooter';
import ContactButton from '../components/ContactButton';

const VP = { once: true, margin: "-80px" } as const;

// ─── Reusable FadeUp wrapper (NO variant functions → no TS errors) ────────────
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VP}
    transition={{ duration: 0.55, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Vertex Card ──────────────────────────────────────────────────────────────
type Vertex = {
  id: string;
  title: string;
  name: string;
  desc: string;
  icon: React.ElementType;
  img: string;
};

const VertexCard = ({ v }: { v: Vertex }) => (
  <div className="bg-slate-900/90 backdrop-blur-xl p-8 text-center border border-[#F59E0B]/30 rounded-3xl shadow-2xl hover:border-[#F59E0B]/60 transition-all duration-300 group h-full">
    <div className="w-28 h-28 rounded-full border-2 border-[#F59E0B]/30 mx-auto mb-5 overflow-hidden bg-slate-800 ring-4 ring-[#F59E0B]/5">
      <img
        src={v.img}
        alt={v.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <v.icon className="w-7 h-7 text-[#F59E0B] mx-auto mb-3" />
    <h3 className="text-xl font-bold mb-1 text-white">{v.title}</h3>
    <p className="text-[#F59E0B] font-mono text-sm mb-3">{v.name}</p>
    <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
  </div>
);

// ─── Trinity Section (horizontal 3-col grid) ──────────────────────────────────
const TrinitySection = () => {
  const vertices: Vertex[] = [
    {
      id: "iit",
      title: "The IIT Vertex",
      name: "Ashish",
      desc: "Analytical Rigour & Data-Driven Prep",
      icon: Cpu,
      img: "https://res.cloudinary.com/daetdadtt/image/upload/v1766745275/WhatsApp_Image_2025-12-26_at_16.02.51_t5qrhu.jpg",
    },
    {
      id: "iim",
      title: "The IIM Vertex",
      name: "Ashutosh",
      desc: "Academic Strategy & Goal Management",
      icon: Target,
      img: "https://res.cloudinary.com/daetdadtt/image/upload/v1770707953/WhatsApp_Image_2025-12-26_at_14.49.25_1_ucqpct_qxh7yi.jpg",
    },
    {
      id: "nlu",
      title: "The NLU Vertex",
      name: "NLU Partner",
      desc: "Legal Core & Exam DNA",
      icon: Scale,
      img: "https://res.cloudinary.com/daetdadtt/image/upload/v1767851865/WhatsApp_Image_2026-01-08_at_11.24.32_uqcyur.jpg",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Architects of <span className="text-[#F59E0B]">Excellence</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto italic">
              "Most coaching has teachers. We have Architects. One to build your logic, one to manage your strategy, and one to master your law."
            </p>
          </FadeUp>
        </div>

        {/* Horizontal 3-column grid — all cards at same level */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vertices.map((v, idx) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.55, delay: idx * 0.13, ease: "easeOut" }}
            >
              <VertexCard v={v} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Lab Section ──────────────────────────────────────────────────────────────
const LabSection = () => {
  const bars = [40, 70, 45, 90, 65, 80, 50, 95, 30, 85];

  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left */}
          <div className="flex-1 w-full">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] text-xs font-mono mb-6">
                <FlaskConical className="w-4 h-4" />
                SYSTEM_STATUS: OPTIMIZED
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                The <span className="text-[#F59E0B]">CLAT Lab</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We didn't just make a curriculum; we engineered a system. We've dissected the exam to its atomic level.
              </p>
            </FadeUp>

            <div className="space-y-6">
              {[
                {
                  Icon: BrainCircuit,
                  title: "Research Phase",
                  desc: "Our NLU team tracks every shift in CLAT patterns, ensuring you never study outdated material.",
                  delay: 0.28,
                },
                {
                  Icon: LineChart,
                  title: "Processing Phase",
                  desc: "Our IIT/IIM team optimises how info reaches your brain via the GK Vault and Starter Kits.",
                  delay: 0.36,
                },
              ].map((item) => (
                <FadeUp key={item.title} delay={item.delay}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center shrink-0">
                      <item.Icon className="text-[#F59E0B]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 text-white">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.44}>
              <div className="mt-12 p-6 border-l-4 border-[#F59E0B] bg-[#F59E0B]/5 rounded-r-xl">
                <p className="text-sm font-mono text-[#F59E0B] mb-2">OUTPUT_LOG:</p>
                <p className="text-2xl font-bold text-white">
                  The same process that delivered AIR 1 & 7 in IPMAT.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right — Blueprint card */}
          <FadeUp delay={0.18} className="flex-1 w-full">
            <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl">
              <h3 className="text-xl md:text-2xl font-bold mb-6 font-mono text-white">
                Technical Blueprint v2.0
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Pattern Recognition", value: "99.8%" },
                  { label: "Logic Compression", value: "Active" },
                  { label: "Legal Synthesis", value: "Optimized" },
                  { label: "GK Vault Latency", value: "0.2ms" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center border-b border-white/10 pb-3"
                  >
                    <span className="text-slate-400 font-mono text-xs md:text-sm">
                      {item.label}
                    </span>
                    <span className="text-[#F59E0B] font-mono text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Bar chart — fires once */}
              <div className="mt-8 h-32 w-full bg-[#F59E0B]/5 rounded-lg border border-[#F59E0B]/10 flex items-end p-2 gap-1">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={VP}
                    transition={{ duration: 0.6, delay: i * 0.04, ease: "easeOut" }}
                    className="flex-1 bg-[#F59E0B]/40 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

// ─── Boutique Section ─────────────────────────────────────────────────────────
const BoutiqueSection = () => {
  const cards = [
    {
      Icon: Cpu,
      title: "IIT Logic Fix",
      desc: "Get your logic fixed directly by an IITian. No middlemen, no generic solutions.",
    },
    {
      Icon: Target,
      title: "IIM Strategy",
      desc: "Get your schedule fixed by an IIM grad who knows how to manage goals under pressure.",
    },
    {
      Icon: Scale,
      title: "NLU Legal Core",
      desc: "Get your legal doubts cleared by an NLU expert who has lived the exam DNA.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Boutique vs. <span className="text-[#F59E0B]">Factory</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-xl text-slate-400">The Direct Line to Mentorship.</p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: "easeOut" }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-[#F59E0B]/50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <card.Icon className="text-[#F59E0B] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
              <p className="text-slate-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-16 bg-[#F59E0B]/5 border border-[#F59E0B]/20 p-8 rounded-3xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white text-center md:text-left">
              "In big coachings, the founders are in a boardroom. At CLAT Tribe, they are in your WhatsApp group."
            </h3>
            <p className="text-slate-400 text-center md:text-left">
              Direct access isn't a feature; it's our philosophy. We are a Tribe, not a factory line.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

// ─── Comparison Section ───────────────────────────────────────────────────────
const ComparisonSection = () => {
  const features = [
    { name: "Legal Depth", average: "Often just theory", tribe: "NLU Alumni Insights", status: "cross" },
    { name: "Logic & Quant Speed", average: "Basic formulas", tribe: "IIT-Level Shortcuts", status: "cross" },
    { name: "Exam Strategy", average: "Generic advice", tribe: "IIM-Style Management", status: "cross" },
    { name: "Proven Results", average: "Inconsistent", tribe: "Legacy of AIR 1 & 7", status: "warning" },
  ];

  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            The 360-Degree <span className="text-[#F59E0B]">Advantage</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full text-left border-collapse bg-slate-900/50 min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-6 text-slate-400 font-medium">What you need for CLAT</th>
                  <th className="py-6 px-6 text-slate-400 font-medium text-center">
                    The "Average" Coaching
                  </th>
                  <th className="py-6 px-6 text-[#F59E0B] font-bold text-center bg-[#F59E0B]/5">
                    The CLAT Tribe
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <motion.tr
                    key={f.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-5 px-6 font-medium text-white">{f.name}</td>
                    <td className="py-5 px-6 text-center text-slate-500">
                      <div className="flex items-center justify-center gap-2">
                        {f.status === "cross" ? (
                          <XCircle className="w-4 h-4 text-red-500/50" />
                        ) : (
                          <Zap className="w-4 h-4 text-yellow-500/50" />
                        )}
                        {f.average}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-center font-bold bg-[#F59E0B]/5 text-white">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#F59E0B]" />
                        {f.tribe}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

// ─── Mentor Selector ──────────────────────────────────────────────────────────
const MentorSelector = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const problems = [
    {
      id: 1,
      problem: "I can't manage my time.",
      solution: "Connect with our IIM Strategist.",
      icon: Target,
      detail: "Learn high-stakes goal management and schedule optimization from an IIM graduate.",
    },
    {
      id: 2,
      problem: "Legal Reasoning is confusing.",
      solution: "Learn from our NLU Expert.",
      icon: Scale,
      detail: "Master the legal core with insights from someone who has lived the NLU life.",
    },
    {
      id: 3,
      problem: "My logic is slow.",
      solution: "Get the IIT Logic Hack.",
      icon: Cpu,
      detail: "Apply analytical rigour and data-driven shortcuts used by IITians to crush quant and logic.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Choose Your <span className="text-[#F59E0B]">Mentor</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-slate-400 mb-12">Click on a problem you are facing right now:</p>
        </FadeUp>

        <div className="grid gap-4">
          {problems.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="space-y-2"
            >
              <button
                onClick={() => setSelected(selected === p.id ? null : p.id)}
                className={`w-full p-6 text-left rounded-2xl border transition-all flex items-center justify-between ${
                  selected === p.id
                    ? "border-[#F59E0B] bg-[#F59E0B]/10"
                    : "bg-slate-900 border-slate-800 hover:border-white/20"
                }`}
              >
                <span className="text-base md:text-lg font-medium text-white">{p.problem}</span>
                <ArrowRight
                  className={`w-5 h-5 transition-transform shrink-0 ml-4 ${
                    selected === p.id ? "rotate-90 text-[#F59E0B]" : "text-slate-600"
                  }`}
                />
              </button>

              <AnimatePresence>
                {selected === p.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 bg-[#F59E0B]/5 border border-[#F59E0B]/20 rounded-2xl flex flex-col md:flex-row gap-6 items-center text-left">
                      <div className="w-16 h-16 rounded-full bg-[#F59E0B]/20 flex items-center justify-center shrink-0">
                        <p.icon className="w-6 h-6 text-[#F59E0B]" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#F59E0B] mb-2">{p.solution}</h4>
                        <p className="text-slate-300 text-sm md:text-base">{p.detail}</p>
                        <button className="mt-4 inline-flex items-center gap-2 text-[#F59E0B] font-bold hover:underline">
                          Start Mentorship <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#F59E0B] selection:text-slate-950">
      <Navbar />
      <ContactButton />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-24 px-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#F59E0B]/5 blur-[120px] -z-10 pointer-events-none" />
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight text-white"
            >
              We are the <br />
              <span className="text-[#F59E0B]">Architects</span> of Success.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-4"
            >
              CLAT Tribe is not just a coaching institute. It's an elite engine powered by the
              analytical rigour of IIT, the strategic vision of IIM, and the legal DNA of NLU.
            </motion.p>
          </div>
        </section>

        <TrinitySection />
        <LabSection />
        <BoutiqueSection />
        <ComparisonSection />
        <MentorSelector />

        {/* Footer CTA */}
        <section className="py-32 px-6 text-center bg-[#F59E0B] text-slate-950">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-4xl md:text-7xl font-bold mb-8">Ready to join the Tribe?</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg md:text-xl mb-12 font-medium opacity-80">
                Stop being a student in a factory. Become an architect of your own future.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="bg-slate-950 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                  Get Started Now <ArrowRight />
                </button>
                <button className="border-2 border-slate-950 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-slate-950 hover:text-white transition-all">
                  Talk to a Mentor
                </button>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <NewFooter />
    </div>
  );
}