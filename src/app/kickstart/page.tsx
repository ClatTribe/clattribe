"use client";

import React, { useState } from 'react';
import { 
  Zap, Calendar, Clock, CheckCircle, MapPin, Filter, 
  Rocket, Lock, ChevronRight, Plus, Minus 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ContactButton from '../components/ContactButton';

// --- Sub-Components ---

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/heading.png" 
              alt="Clat Tribe Logo" 
              width={140} 
              height={140} 
              className="rounded cursor-pointer w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px]" 
            />
          </Link>
          <a
            href="#register"
            className="px-3 sm:px-5 py-2 sm:py-2.5 bg-[#F59E0B] text-slate-950 rounded-lg font-bold text-xs sm:text-sm hover:bg-[#F59E0B]/90 transition-all"
          >
            Register Now
          </a>
        </div>
      </nav>
      {children}
    </div>
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is this webinar really free?",
      answer: "Absolutely! This is CLAT Tribe's inaugural event to build our community and help aspirants start their CLAT 2027 journey right. There are no hidden charges."
    },
    {
      question: "What if I miss the live session?",
      answer: "A recording will be sent to all registered participants within 24 hours after the live webinar. You'll also receive all the bonus materials."
    },
    {
      question: "Who is this webinar for?",
      answer: "Primarily for Class 12 students and droppers targeting CLAT 2027. Parents who want to support their child's law entrance journey are also welcome."
    },
    {
      question: "What will I receive after registration?",
      answer: "Immediate confirmation email with webinar details. 24 hours before: reminder with Zoom link. After webinar: recording + CLAT 2027 Starter Kit."
    },
    {
      question: "Will there be a Q&A session?",
      answer: "Yes! We've dedicated 30 minutes for live Q&A where you can ask any question about CLAT 2027 preparation directly to our mentors."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            Frequently Asked <span className="text-[#F59E0B]">Questions</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Got questions? We've got answers
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#F59E0B]/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors duration-200 hover:bg-slate-800/30"
              >
                <span className="text-white font-semibold text-base sm:text-lg pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B]" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B]" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
}

interface KickstartFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  currentStatus: string;
  question: string;
}

const WebinarPage: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<KickstartFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    currentStatus: 'Class 12 Student',
    question: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (data: KickstartFormData): boolean => {
    const newErrors: FormErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    } else if (data.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!data.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(data.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm(formData)) return;
    
    setIsSubmitting(true);

    try {
      const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
      const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

      const response = await fetch(`${SUPABASE_URL}/rest/v1/kickstart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          full_name: formData.fullName.trim(),
          phone_number: formData.phoneNumber.trim(),
          email: formData.email.trim(),
          current_status: formData.currentStatus,
          question: formData.question.trim() || null,
          submitted_at: new Date().toISOString()
        })
      });

      if (response.ok) {
        router.push('/kickstart-thankyou');
      } else {
        const errorData = await response.json();
        alert(`Submission failed: ${errorData.message || 'Please try again'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An unexpected error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* Background decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 text-center px-4">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-[#F59E0B]/10 border border-[#F59E0B] text-[#F59E0B] rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>INAUGURAL STRATEGY WEBINAR</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2">
              Master the Facts.<br />
              <span className="text-[#F59E0B]">Rule the Law.</span>
            </h1>
            
            <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
              Kickstart your strategic CLAT 2027 journey with an 11-month roadmap and resource audit designed by NLU graduates.
            </p>
            
            <div className="flex justify-center gap-3 sm:gap-5 flex-wrap mb-6 sm:mb-8 px-4">
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#F59E0B] text-slate-950 rounded-lg font-bold hover:bg-[#F59E0B]/90 transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                <span>Secure My Free Spot</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            
            <div className="text-[#F59E0B] font-semibold flex items-center justify-center gap-4 sm:gap-6 flex-wrap text-sm sm:text-base">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Jan 11, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                7:00 PM IST
              </span>
            </div>
          </div>
        </section>

        {/* Mentor Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 bg-slate-900/20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="relative max-w-sm sm:max-w-md mx-auto lg:mx-0">
                <img
                  src="https://res.cloudinary.com/daetdadtt/image/upload/v1767851865/WhatsApp_Image_2026-01-08_at_11.24.32_uqcyur.jpg"
                  alt="Purva CLAT Mentor"
                  className="w-full rounded-xl sm:rounded-2xl border-2 border-[#F59E0B]"
                />
              </div>
              
              <div className="text-center lg:text-left">
                <span className="text-[#F59E0B] font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2 sm:mb-3">
                  Meet Your Webinar Mentor
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                  Purva <span className="text-[#F59E0B]">(NLU)</span>
                </h2>
                <p className="text-slate-400 font-semibold mb-4 sm:mb-5 text-sm sm:text-base">
                  National Law University Graduate | Core Mentor at CLAT Tribe
                </p>
                <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Purva has helped hundreds of aspirants bring structure and confidence to their preparation. A graduate of NLU, she specializes in transforming overwhelming syllabi into actionable roadmaps.
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center gap-2 sm:gap-3 text-slate-300 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B] flex-shrink-0" />
                    <span>Practical CLAT 2027 Execution Strategy</span>
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-slate-300 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B] flex-shrink-0" />
                    <span>High-Yield Resource Identification</span>
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3 text-slate-300 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B] flex-shrink-0" />
                    <span>Student-Centric Training Framework</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#F59E0B]/50 transition-all duration-300">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-[#F59E0B] mb-4 sm:mb-5" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Surgical Roadmap</h3>
                <p className="text-slate-400 text-sm sm:text-base">
                  A month-by-month breakdown of every section, from legal reasoning to current affairs mastery.
                </p>
              </div>
              
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#F59E0B]/50 transition-all duration-300">
                <Filter className="w-10 h-10 sm:w-12 sm:h-12 text-[#F59E0B] mb-4 sm:mb-5" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Resource Audit</h3>
                <p className="text-slate-400 text-sm sm:text-base">
                  Learn exactly which books and materials are essential, and which ones are a waste of your time.
                </p>
              </div>
              
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#F59E0B]/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-[#F59E0B] mb-4 sm:mb-5" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Dropper Strategy</h3>
                <p className="text-slate-400 text-sm sm:text-base">
                  A specialized framework for re-takers to fix past mistakes and dominate the 2027 attempt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="relative py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5">
                  Ready to join the <span className="text-[#F59E0B]">Tribe?</span>
                </h2>
                <p className="text-slate-400 text-base sm:text-lg mb-6 sm:mb-8">
                  This is a free session, but seats are capped to ensure we can answer student questions live. Claim your invitation and starter kit today.
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl order-1 lg:order-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-5 sm:mb-6">Reserve Your Spot</h3>
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-slate-950 font-semibold mb-2 text-xs sm:text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      disabled={isSubmitting}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border ${
                        errors.fullName ? 'border-red-500' : 'border-slate-300'
                      } rounded-lg text-slate-950 text-sm sm:text-base focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 disabled:opacity-60 disabled:cursor-not-allowed`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-slate-950 font-semibold mb-2 text-xs sm:text-sm">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="For event reminders"
                      maxLength={10}
                      disabled={isSubmitting}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border ${
                        errors.phoneNumber ? 'border-red-500' : 'border-slate-300'
                      } rounded-lg text-slate-950 text-sm sm:text-base focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 disabled:opacity-60 disabled:cursor-not-allowed`}
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-slate-950 font-semibold mb-2 text-xs sm:text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border ${
                        errors.email ? 'border-red-500' : 'border-slate-300'
                      } rounded-lg text-slate-950 text-sm sm:text-base focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 disabled:opacity-60 disabled:cursor-not-allowed`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-slate-950 font-semibold mb-2 text-xs sm:text-sm">
                      Current Status
                    </label>
                    <select
                      name="currentStatus"
                      value={formData.currentStatus}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg text-slate-950 text-sm sm:text-base focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <option>Class 12 Student</option>
                      <option>Dropper</option>
                      <option>Class 11 Student</option>
                      <option>Parent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-950 font-semibold mb-2 text-xs sm:text-sm">
                      Question you want us to answer
                    </label>
                    <textarea
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      placeholder="Ask any question about CLAT preparation (optional)"
                      rows={3}
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg text-slate-950 text-sm sm:text-base focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 disabled:opacity-60 disabled:cursor-not-allowed resize-none"
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#F59E0B] text-slate-950 rounded-lg font-bold hover:bg-[#F59E0B]/90 transition-all hover:scale-105 shadow-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Secure My Free Spot'}</span>
                    {!isSubmitting && <Lock className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Footer */}
        <footer className="relative py-12 sm:py-16 border-t border-slate-800 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Image 
                src="/heading.png" 
                alt="Clat Tribe Logo" 
                width={180} 
                height={180} 
                className="rounded cursor-pointer"
              />
            </div>
            <p className="text-slate-400 text-sm sm:text-base">
              &copy; 2026 CLAT Tribe. Master the Facts. Rule the Law.
            </p>
          </div>
        </footer>
      </div>
      <ContactButton />
    </Layout>
  );
};

export default WebinarPage;