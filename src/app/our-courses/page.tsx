"use client";
import React, { useState } from 'react';
import { Check, Star, GraduationCap, Trophy, ArrowRight, ArrowDown, Info, X, CheckCircle } from 'lucide-react';
import Navbar from '../components/navbar';
import NewFooter from '../components/newFooter';
import ContactButton from '../components/ContactButton';

const COURSES = [
  {
    id: 'rankers-batch',
    name: "The Director's Batch (NLU Rankers)",
    currentPrice: '₹14,999',
    originalPrice: '₹19,000',
    tag: 'Elite Exclusive',
    description: "Generic coaching got you to a plateau. The Director's Batch will get you to an NLU. Designed for top-tier aspirants.",
    features: ['Direct Access to NLU Mentors', 'Mock Analysis by Rank Holders', 'Daily Answer Writing (Legal)', 'Advanced GK Deep-Dives', 'One-on-One Mentorship by NLUs/IIM Alumni'],
    highlight: true
  },
  {
    id: 'gk-intensive',
    name: 'GK Capsules',
    currentPrice: '₹2,999',
    originalPrice: '₹4,999',
    tag: 'Best Seller',
    description: 'Master the most volatile section. Current affairs, static GK, and legal updates curated by NLU alumni.',
    features: ['Monthly GK Capsules', 'High-Yield Video Explainers', 'Weekly Current Affairs Quizzes', "GK Special Notes", "Elite GK Flashcards"]
  },
  {
    id: 'gk-flashcards',
    name: 'Elite GK Flashcards',
    currentPrice: '₹99',
    originalPrice: '₹1,999',
    tag: 'Limited Time',
    description: '1000+ smart cards covering every important fact for CLAT. Perfect for rapid last-minute revision.',
    features: ['Memory Hook Techniques', 'Daily Progress Tracking', 'Offline Access via App', 'Category-wise Sorting']
  },
  {
    id: 'foundation-tribe',
    name: 'The Foundation Tribe',
    currentPrice: '₹79,999',
    originalPrice: '₹99,999',
    tag: 'Class 11th Target',
    description: 'A meticulously designed CLAT 2028 program applying the analytical rigour of IIT Bombay, the strategic management of IIM Ahmedabad, and NLU insider wisdom.',
    features: [
      'Founders\' Masterclasses (NLU, IIT B & IIM A Strategy)',
      'The GK Vault (Unlimited Access & Smart Flashcards)',
      '15+ Printed Books & 500+ Sectional Tests',
      '60+ Full-length Mocks with Personalised Analysis',
      'AI-Enabled Performance Tracker',
      'Monthly 1-on-1 Personalised Mentorship'
    ]
  },
  {
    id: 'elite-tribe',
    name: 'The Elite Tribe',
    currentPrice: '₹39,999',
    originalPrice: '₹49,999',
    tag: 'Class 12 & Droppers',
    description: 'A focused 1-year sprint for CLAT 2027 eliminating noise with high-yield strategies. Led by IIT Bombay and IIM Ahmedabad founders for maximum mock score improvement.',
    features: [
      'Founders\' Office Hours (1-on-1 Mentorship)',
      'Unlimited GK Vault Access & Smart Flashcards',
      '60+ Full-Length Mocks (CLAT & AILET Pattern)',
      'Triple Advantage Curriculum (IIT Logic, IIM Strategy, NLU Wisdom)',
      'Small Batch Accountability & Individual Tracking',
      'Personalised Mock Analysis Clinics'
    ]
  }
];

const handleWaiverCall = () => {
  window.location.href = 'tel:8303865139';
};

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setShowSuccessPopup(true);
      setFormData({ name: "", phone: "", email: "", city: "" });

      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Failed to submit form. Please try again.");
      }
      setShowErrorPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 outline-none transition-all";
  const labelClass = "block text-slate-300 font-semibold mb-2 text-sm";

  return (
    <>
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="relative max-w-md w-full bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-8 text-center">
            <button onClick={() => setShowSuccessPopup(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
              <X className="h-6 w-6" />
            </button>
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-500/10 p-3">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">Success!</h3>
            <p className="text-slate-400 mb-6">Thank you for submitting! Our team will get in touch with you shortly.</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {showErrorPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="relative max-w-md w-full bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-8 text-center">
            <button onClick={() => setShowErrorPopup(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
              <X className="h-6 w-6" />
            </button>
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-red-500/10 p-3">
                <X className="h-12 w-12 text-red-500" />
              </div>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">Oops!</h3>
            <p className="text-slate-400 mb-6">{errorMessage}</p>
            <button
              onClick={() => setShowErrorPopup(false)}
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Lead Form Section */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-widest text-[#F59E0B] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
              Get Started
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-4">Start Your CLAT Journey Today</h2>
            <p className="text-slate-400 text-lg">Join thousands of aspirants who trust ClatTribe for their preparation</p>
          </div>

          <div className="bg-slate-900/50 border-2 border-slate-800 rounded-2xl shadow-2xl p-8">
            <h3 className="mb-6 text-2xl font-bold text-white">Get Started Now</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="city" className={labelClass}>
                  City <span className="text-red-400">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={inputClass}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F59E0B] text-slate-950 font-black py-4 rounded-xl hover:bg-white transition duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
              >
                {isSubmitting ? "Submitting..." : (
                  <>
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <ContactButton />

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
                <button
                  onClick={handleWaiverCall}
                  className="px-8 sm:px-10 py-4 sm:py-5 bg-[#F59E0B] text-slate-950 font-extrabold rounded-xl hover:bg-white hover:scale-105 transition-all shadow-xl text-base sm:text-lg cursor-pointer"
                >
                  Apply for Waiver
                </button>
                <p className="text-center text-xs text-slate-500 font-medium italic">*Applicable for Director's & Foundation batches</p>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-32">
          {COURSES.map((course) => (
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

              <button
                onClick={course.id === 'gk-flashcards'
                  ? () => window.open('https://chat.whatsapp.com/EIMkBl02bhr8lC36jvVCiv', '_blank')
                  : undefined
                }
                className={`w-full py-4 sm:py-5 rounded-xl font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  course.highlight
                    ? 'bg-[#F59E0B] text-slate-950 hover:bg-white shadow-lg'
                    : 'bg-slate-700 text-white hover:bg-[#F59E0B] hover:text-slate-950'
                }`}
              >
                {course.id === 'gk-flashcards' ? 'Join WhatsApp Community' : 'Join the Tribe'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

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

      {/* Lead Form — just above footer */}
      <LeadForm />

      <NewFooter />
    </div>
  );
};

export default CoursePage;