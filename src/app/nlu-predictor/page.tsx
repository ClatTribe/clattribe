"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { COLLEGES, AdmissionChance, PredictionResult, getCollegeImage } from './data';
import Image from 'next/image';
import Link from 'next/link';
import NewFooter from '../components/newFooter';
import { Menu, X } from 'lucide-react';

// =========================
// Result Card Component
// =========================

interface ResultCardProps {
  result: PredictionResult;
  index: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, index }) => {
  const getChanceColors = (chance: AdmissionChance) => {
    switch (chance) {
      case AdmissionChance.HIGH:
        return 'bg-slate-800/90 border-emerald-400/50 hover:border-emerald-400/80 shadow-emerald-500/10';
      case AdmissionChance.MODERATE:
        return 'bg-slate-800/90 border-amber-400/50 hover:border-amber-400/80 shadow-amber-500/10';
      case AdmissionChance.LOW:
        return 'bg-slate-800/90 border-orange-400/50 hover:border-orange-400/80 shadow-orange-500/10';
      default:
        return 'bg-slate-800/90 border-slate-600';
    }
  };

  const getChanceBadge = (chance: AdmissionChance) => {
    switch (chance) {
      case AdmissionChance.HIGH: 
        return { text: 'High Probability', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/50', icon: '✓' };
      case AdmissionChance.MODERATE: 
        return { text: 'Competitive', color: 'bg-amber-500/15 text-amber-300 border-amber-400/50', icon: '◆' };
      case AdmissionChance.LOW: 
        return { text: 'Ambitious', color: 'bg-orange-500/15 text-orange-300 border-orange-400/50', icon: '★' };
      default: 
        return { text: 'Unlikely', color: 'bg-slate-700 text-slate-400 border-slate-600', icon: '○' };
    }
  };

  const badge = getChanceBadge(result.chance);

  return (
    <div 
      className={`relative group rounded-xl border-2 p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden min-h-[180px] flex flex-col ${getChanceColors(result.chance)}`}
      style={{ 
        animationDelay: `${index * 40}ms`,
        animation: 'fadeIn 0.5s ease-out forwards'
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="flex items-start gap-4 mb-3 relative z-10">
        <div className="shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-slate-900/50 border border-slate-700/50 shadow-lg">
          <img 
            src={getCollegeImage(result.name)} 
            alt={result.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231e293b" width="100" height="100"/><text x="50" y="50" font-size="35" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-weight="bold">NLU</text></svg>';
            }}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md border flex items-center gap-1 ${badge.color}`}>
              <span className="text-[10px]">{badge.icon}</span>
              {badge.text}
            </span>
          </div>
          <h3 className="text-base font-bold leading-tight text-white mb-1.5 line-clamp-2">{result.name}</h3>
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-slate-700/50 relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Score Range</p>
            <p className="text-sm font-bold text-[#F59E0B]">{result.minScore} - {result.maxScore}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Category</p>
            <p className="text-sm font-semibold text-slate-300">{result.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================
// Main App Component
// =========================

interface FormData {
  name: string;
  phone: string;
  category: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  category?: string;
}

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    category: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [score, setScore] = useState<string>('');

  const categories = [
    { value: 'General', label: 'General' },
    { value: 'OBC-NCL', label: 'OBC-NCL' },
    { value: 'SC', label: 'SC' },
    { value: 'ST', label: 'ST' },
    { value: 'EWS', label: 'EWS' }
  ];

  useEffect(() => {
    const submitted = localStorage.getItem('nlu_enquiry_submitted');
    const name = localStorage.getItem('nlu_enquiry_name');
    const phone = localStorage.getItem('nlu_enquiry_phone');
    const category = localStorage.getItem('nlu_enquiry_category');
    
    if (submitted === 'true' && name && phone && category) {
      setIsFormSubmitted(true);
      setFormData({ name, phone, category });
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.category) {
      newErrors.category = 'Please select your category';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
      const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

      const response = await fetch(`${SUPABASE_URL}/rest/v1/nlu_enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          category: formData.category,
          submitted_at: new Date().toISOString()
        })
      });

      if (response.ok) {
        localStorage.setItem('nlu_enquiry_submitted', 'true');
        localStorage.setItem('nlu_enquiry_name', formData.name.trim());
        localStorage.setItem('nlu_enquiry_phone', formData.phone.trim());
        localStorage.setItem('nlu_enquiry_category', formData.category);
        setIsFormSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Submission failed: ${errorData.message || 'Please try again'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (isFormSubmitted) {
      if (name === 'category') {
        localStorage.setItem('nlu_enquiry_category', value);
      } else if (name === 'name') {
        localStorage.setItem('nlu_enquiry_name', value);
      } else if (name === 'phone') {
        localStorage.setItem('nlu_enquiry_phone', value);
      }
    }
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const parsedScore = useMemo(() => {
    const s = parseFloat(score);
    return isNaN(s) ? 0 : s;
  }, [score]);

  const predictions: PredictionResult[] = useMemo(() => {
    if (!score || !formData.category || !isFormSubmitted) return [];
    
    const categoryColleges = COLLEGES.filter(college => college.category === formData.category);
    
    const results: PredictionResult[] = categoryColleges.map(college => {
      let chance = AdmissionChance.NONE;
      let matchScore = 0;

      if (parsedScore >= college.minScore) {
        chance = AdmissionChance.HIGH;
        matchScore = 100 + (parsedScore - college.minScore);
      } else if (parsedScore >= college.minScore - 2) {
        chance = AdmissionChance.MODERATE;
        matchScore = 50 + (parsedScore - (college.minScore - 2));
      } else if (parsedScore >= college.minScore - 5) {
        chance = AdmissionChance.LOW;
        matchScore = 10 + (parsedScore - (college.minScore - 5));
      }

      return {
        ...college,
        chance,
        matchScore
      };
    }).filter(r => r.chance !== AdmissionChance.NONE);

    return results.sort((a, b) => {
      const chanceWeight = {
        [AdmissionChance.HIGH]: 3,
        [AdmissionChance.MODERATE]: 2,
        [AdmissionChance.LOW]: 1,
        [AdmissionChance.NONE]: 0
      };
      
      if (chanceWeight[a.chance] !== chanceWeight[b.chance]) {
        return chanceWeight[b.chance] - chanceWeight[a.chance];
      }
      return b.maxScore - a.maxScore;
    });

  }, [parsedScore, score, formData.category, isFormSubmitted]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image src="/heading.png" alt="Clat Tribe Logo" width={180} height={180} className="rounded cursor-pointer" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/#capsules" className="hover:text-white transition-colors">
              Capsules
            </Link>
            <Link href="/#flashcards" className="hover:text-white transition-colors">
              Flashcards
            </Link>
            <Link href="/#blogs" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <Link href="/nlu-predictor" className="hover:text-white transition-colors">
              NLU Predictor
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
                className="text-white hover:text-[#F59E0B] transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/#capsules" 
                className="text-white hover:text-[#F59E0B] transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Capsules
              </Link>
              <Link 
                href="/#flashcards" 
                className="text-white hover:text-[#F59E0B] transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Flashcards
              </Link>
              <Link 
                href="/#blogs" 
                className="text-white hover:text-[#F59E0B] transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                href="/nlu-predictor" 
                className="text-white hover:text-[#F59E0B] transition-colors py-3 px-4 rounded-lg hover:bg-white/5 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                NLU Predictor
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-12 flex flex-col gap-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            CLAT 2026 Predictor
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Where will your <span className="text-[#F59E0B]">score</span> take you?
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Enter your estimated score to instantly see which National Law Universities are within your reach.
          </p>
        </div>

        {/* Horizontal Enquiry Form */}
        <div className="w-full relative group z-10">
          <div className="absolute -inset-0.5 bg-[#F59E0B]/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative bg-slate-900 rounded-xl p-6 shadow-xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></div>
                <h2 className="text-lg font-bold text-white">
                  Your Details
                </h2>
              </div>
              {isFormSubmitted && (
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/40">
                  ✓ Verified
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-400 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2.5 rounded-lg border ${
                    errors.name 
                      ? 'border-red-500/50 bg-red-500/10' 
                      : 'border-slate-700 bg-slate-800'
                  } text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all disabled:opacity-60`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-400 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  maxLength={10}
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2.5 rounded-lg border ${
                    errors.phone 
                      ? 'border-red-500/50 bg-red-500/10' 
                      : 'border-slate-700 bg-slate-800'
                  } text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all disabled:opacity-60`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="category" className="block text-xs font-semibold text-slate-400 mb-1.5">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2.5 rounded-lg border ${
                    errors.category 
                      ? 'border-red-500/50 bg-red-500/10' 
                      : 'border-slate-700 bg-slate-800'
                  } text-sm text-white focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all disabled:opacity-60`}
                >
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-xs text-red-400">{errors.category}</p>
                )}
              </div>
            </div>

            {!isFormSubmitted && (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full relative overflow-hidden bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Access Predictor
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            )}

            {isFormSubmitted && (
              <p className="text-xs text-center text-slate-400">
                You can change your category anytime to see different results
              </p>
            )}
          </div>
        </div>

        {/* Score Input Section */}
        {isFormSubmitted ? (
          <>
            <div className="w-full max-w-md mx-auto relative group z-10">
              <div className="absolute -inset-0.5 bg-[#F59E0B]/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-slate-900 rounded-xl p-2 flex items-center shadow-xl border border-slate-800">
                <div className="pl-4 text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 4 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <input 
                  type="number" 
                  value={score}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (parseFloat(val) < 0) return;
                    if (parseFloat(val) > 200) return;
                    setScore(val);
                  }}
                  placeholder="Enter your estimated score (e.g. 95.5)" 
                  className="w-full bg-transparent border-none focus:ring-0 text-2xl font-bold text-white placeholder-slate-600 h-14 px-4"
                />
                {score && (
                  <button 
                    onClick={() => setScore('')}
                    className="p-2 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Results Area */}
            <div className="space-y-6 min-h-[400px]">
              {score === '' ? (
                <div className="text-center py-20 opacity-40">
                  <div className="inline-block p-4 rounded-full bg-slate-800 mb-4">
                    <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-slate-300">Enter your score above to start predicting.</p>
                </div>
              ) : predictions.length === 0 ? (
                <div className="text-center py-20">
                  <div className="inline-block p-4 rounded-full bg-red-500/10 mb-4">
                    <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-white">It looks challenging.</p>
                  <p className="text-slate-400 mt-2">
                    Based on previous trends, this score might be below the typical cutoff for the tracked NLUs in <span className="font-semibold text-[#F59E0B]">{formData.category}</span> category. <br/>
                    Don&apos;t lose hope—vacancies often arise in later lists.
                  </p>
                </div>
              ) : (
                <div className="animate-[fadeIn_0.5s_ease-out]">
                  <div className="flex justify-between items-end mb-6 border-b border-slate-800 pb-2">
                    <h2 className="text-xl font-semibold text-white">
                      <span className="text-[#F59E0B]">{predictions.length}</span> Universities Found for <span className="text-[#F59E0B]">{formData.category}</span>
                    </h2>
                    <span className="text-xs text-slate-500">Sorted by probability</span>
                  </div>
                  
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {predictions.map((college, idx) => (
                      <ResultCard 
                        key={college.id} 
                        result={college} 
                        index={idx}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-20 opacity-60">
            <div className="inline-block p-6 rounded-full bg-[#F59E0B]/10 mb-4">
              <svg className="w-16 h-16 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-white mb-2">
              Fill the form above to unlock the predictor
            </p>
            <p className="text-slate-400">
              Enter your details to get personalized college predictions
            </p>
          </div>
        )}

      </div>
       <NewFooter /> 
    </div>
  );
};

export default App;