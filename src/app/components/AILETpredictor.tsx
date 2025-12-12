"use client";
import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import NewFooter from './newFooter';
import Layout from './Layout';
import { Menu, X } from 'lucide-react';

// AILET Cutoff Data
const AILET_CUTOFFS: { [key: string]: { min: number; max: number; targetText: string } } = {
  'General': { min: 90, max: 110, targetText: 'Aim for 90-100+ for a safer zone' },
  'EWS': { min: 58, max: 80, targetText: 'Target 75-80+' },
  'OBC-NCL': { min: 70, max: 80, targetText: 'Aim closer to 80' },
  'SC': { min: 45, max: 65, targetText: 'Target 55-65' },
  'ST': { min: 38, max: 60, targetText: 'Target 50-60' }
};

// =========================
// Result Component
// =========================

interface ResultDisplayProps {
  category: string;
  score: number;
  isEligible: boolean;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ category, score, isEligible }) => {
  const cutoff = AILET_CUTOFFS[category];

  return (
    <div className="animate-[fadeIn_0.5s_ease-out] max-w-3xl mx-auto">
      <div 
        className={`relative group rounded-xl border-2 p-8 transition-all duration-300 overflow-hidden ${
          isEligible 
            ? 'bg-slate-800/90 border-emerald-400/50 shadow-emerald-500/20' 
            : 'bg-slate-800/90 border-red-400/50 shadow-red-500/20'
        }`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className={`absolute inset-0 bg-linear-to-br ${
            isEligible ? 'from-emerald-500/20 to-transparent' : 'from-red-500/20 to-transparent'
          }`}></div>
        </div>

        {/* College Header */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          {/* <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-slate-900/50 border border-slate-700/50 shadow-lg">
            <img 
              src="/nlu-images/nlu-delhi.jpg"
              alt="NLU Delhi"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231e293b" width="100" height="100"/><text x="50" y="50" font-size="30" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-weight="bold">NLU</text></svg>';
              }}
            />
          </div> */}
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-1">NLU Delhi</h2>
            <p className="text-slate-400 text-sm">AILET 2026 - BA LLB (Hons.)</p>
          </div>

          <div className={`shrink-0 p-3 rounded-full ${
            isEligible ? 'bg-emerald-500/20' : 'bg-red-500/20'
          }`}>
            {isEligible ? (
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
        </div>

        {/* Status Message */}
        <div className={`p-4 rounded-lg mb-6 relative z-10 ${
          isEligible 
            ? 'bg-emerald-500/10 border border-emerald-400/30' 
            : 'bg-red-500/10 border border-red-400/30'
        }`}>
          <p className={`text-lg font-semibold ${isEligible ? 'text-emerald-300' : 'text-red-300'}`}>
            {isEligible 
              ? '✓ COngratulations, Your score is within the expected cutoff range!' 
              : '✗ Regret, Your marks are currently below the expected cutoff range'
            }
          </p>
        </div>

        {/* Score Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 relative z-10">
          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">Your Score</p>
            <p className="text-3xl font-bold text-[#F59E0B]">{score}</p>
          </div>
          
          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">Your Category</p>
            <p className="text-2xl font-bold text-white">{category}</p>
          </div>
        </div>

        {/* Cutoff Range */}
        <div className="bg-slate-900/50 rounded-lg p-5 border border-slate-700/50 relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wide">Expected Cutoff Range ({category})</h3>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl font-bold text-[#F59E0B]">{cutoff.min}</span>
            <span className="text-slate-500 text-xl">—</span>
            <span className="text-3xl font-bold text-[#F59E0B]">{cutoff.max}</span>
          </div>
          <p className="text-sm text-slate-400 italic">({cutoff.targetText})</p>
        </div>

        {/* Additional Message */}
        {!isEligible && (
          <div className="mt-6 p-4 bg-slate-900/30 rounded-lg border border-slate-700/50 relative z-10">
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-white">Don't lose hope!</span> Vacancies often arise in later admission lists, and there are many pathways to success. Consider strengthening your application or exploring other excellent law schools.
            </p>
          </div>
        )}
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
  score: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  category?: string;
  score?: string;
}

const App: React.FC = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    category: '',
    score: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Use state for prediction criteria, initialized from formData
  const [currentCategory, setCurrentCategory] = useState<string>('');
  const [currentScore, setCurrentScore] = useState<string>('');

  const categories = [
    { value: 'General', label: 'General' },
    { value: 'OBC-NCL', label: 'OBC-NCL' },
    { value: 'SC', label: 'SC' },
    { value: 'ST', label: 'ST' },
    { value: 'EWS', label: 'EWS' }
  ];

  // Load previous data and set prediction criteria on mount
  useEffect(() => {
    const submitted = localStorage.getItem('ailet_enquiry_submitted');
    const name = localStorage.getItem('ailet_enquiry_name');
    const phone = localStorage.getItem('ailet_enquiry_phone');
    const category = localStorage.getItem('ailet_enquiry_category');
    const score = localStorage.getItem('ailet_enquiry_score');
    
    if (submitted === 'true' && name && phone && category && score) {
      setIsFormSubmitted(true);
      setFormData({ name, phone, category, score });
      setCurrentCategory(category);
      setCurrentScore(score);
    }
  }, []);

  const validateForm = (data: FormData): boolean => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!data.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(data.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!data.category) {
      newErrors.category = 'Please select your category';
    }

    if (!data.score.trim()) {
      newErrors.score = 'Score is required';
    } else {
      const scoreNum = parseFloat(data.score);
      if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 150) {
        newErrors.score = 'Score must be between 0 and 150';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    // 1. Validate all fields
    if (!validateForm(formData)) return;
    
    setIsSubmitting(true);

    try {
      const { name, phone, category, score } = formData;
      
      // Update prediction criteria based on current form data
      setCurrentCategory(category);
      setCurrentScore(score);
      
      // Check if user has already submitted (data saved once)
      if (isFormSubmitted) {
        // Data already saved. Skip Supabase call and proceed to predictions.
        console.log("User already submitted. Skipping Supabase save.");
        setIsFormSubmitted(true); 
      } else {
        // FIRST TIME SUBMISSION: Save data to Supabase
        const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
        const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';
  
        const response = await fetch(`${SUPABASE_URL}/rest/v1/ailet_enquiry`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            name: name.trim(),
            phone: phone.trim(),
            category: category,
            score: parseFloat(score),
            submitted_at: new Date().toISOString()
          })
        });
  
        if (response.ok) {
          // Successfully saved for the first time
          localStorage.setItem('ailet_enquiry_submitted', 'true');
          localStorage.setItem('ailet_enquiry_name', name.trim());
          localStorage.setItem('ailet_enquiry_phone', phone.trim());
          localStorage.setItem('ailet_enquiry_category', category);
          localStorage.setItem('ailet_enquiry_score', score);
          
          setIsFormSubmitted(true);
        } else {
          const errorData = await response.json();
          alert(`Submission failed: ${errorData.message || 'Please try again'}`);
          setIsSubmitting(false);
          return; // Exit on failure
        }
      }

    } catch (error) {
      console.error('Error processing form:', error);
      alert('An unexpected error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    
    // Update the form data state
    setFormData(prev => ({ ...prev, [name]: value }));

    // If already submitted, update the prediction criteria instantly for Category and Score fields
    if (isFormSubmitted) {
        if (name === 'category') {
            setCurrentCategory(value);
        } else if (name === 'score') {
            setCurrentScore(value);
        }
    }
    
    // Clear errors as user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const parsedScore = useMemo(() => {
    const s = parseFloat(currentScore);
    return isNaN(s) ? 0 : s;
  }, [currentScore]);

  // Check if score is eligible based on category cutoff
  const isEligible = useMemo(() => {
    if (!currentCategory || !currentScore) return false;
    const cutoff = AILET_CUTOFFS[currentCategory];
    if (!cutoff) return false;
    return parsedScore >= cutoff.min;
  }, [parsedScore, currentCategory, currentScore]);
  
  // Determine if we have valid criteria to show result
  const hasValidCriteria = currentCategory && currentScore && !errors.score && !errors.category && isFormSubmitted;

  return (
    <Layout>
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

      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-12 flex flex-col gap-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            AILET 2026 Predictor
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            AILET <span className="text-[#F59E0B]">Predictor</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Enter your details and estimated AILET score to check if you're in the expected cutoff range for NLU Delhi.
          </p>
        </div>

        {/* Enquiry Form */}
        <div className="w-full relative group z-10">
          <div className="absolute -inset-0.5 bg-[#F59E0B]/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative bg-slate-900 rounded-xl p-6 shadow-xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></div>
                <h2 className="text-lg font-bold text-white">
                  Enter Your Details and Criteria
                </h2>
              </div>
              {isFormSubmitted && (
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/40">
                  ✓ Data Saved
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              {/* Name (Disabled after first submission) */}
              <div className="md:col-span-1">
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
                  disabled={isSubmitting || isFormSubmitted}
                  className={`w-full px-3 py-2.5 rounded-lg border ${
                    errors.name 
                      ? 'border-red-500/50 bg-red-500/10' 
                      : 'border-slate-700 bg-slate-800'
                  } text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Phone (Disabled after first submission) */}
              <div className="md:col-span-1">
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
                  disabled={isSubmitting || isFormSubmitted}
                  className={`w-full px-3 py-2.5 rounded-lg border ${
                    errors.phone 
                      ? 'border-red-500/50 bg-red-500/10' 
                      : 'border-slate-700 bg-slate-800'
                  } text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                )}
              </div>

              {/* Category (Editable always) */}
              <div className="md:col-span-1">
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

              {/* Score (Editable always) */}
              <div className="md:col-span-1">
                <label htmlFor="score" className="block text-xs font-semibold text-slate-400 mb-1.5">
                  Estimated Score *
                </label>
                <input
                  type="number"
                  id="score"
                  name="score"
                  value={formData.score}
                  onChange={handleChange}
                  placeholder="Enter score (0-150)"
                  min="0"
                  max="150"
                  step="0.5"
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2.5 rounded-lg border ${
                    errors.score 
                      ? 'border-red-500/50 bg-red-500/10' 
                      : 'border-slate-700 bg-slate-800'
                  } text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all disabled:opacity-60`}
                />
                {errors.score && (
                  <p className="mt-1 text-xs text-red-400">{errors.score}</p>
                )}
              </div>
            </div>

            <button
              type="button"
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
                    Submitting Data...
                  </>
                ) : (
                  <>
                    {isFormSubmitted ? 'Get Prediction' : 'Access Predictor'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </span>
            </button>

            {isFormSubmitted && (
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 mt-4">
                <p className="text-sm text-slate-300 mb-1">
                  <span className="font-semibold text-white">Current Prediction Criteria:</span> 
                  Category <span className="text-[#F59E0B] font-bold">{currentCategory}</span>, 
                  Score <span className="text-[#F59E0B] font-bold">{currentScore}</span>
                </p>
                <p className="text-xs text-slate-400">
                  Your data has been saved. The predictions below update instantly as you change the score and category.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Results Area */}
        <div className="space-y-6 min-h-[400px]">
          {!isFormSubmitted ? (
            <div className="text-center py-20 opacity-60">
              <div className="inline-block p-6 rounded-full bg-[#F59E0B]/10 mb-4">
                <svg className="w-16 h-16 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-xl font-semibold text-white mb-2">
                Fill the form above and click "Access Predictor"
              </p>
              <p className="text-slate-400">
                Enter your details and score to check your eligibility for NLU Delhi.
              </p>
            </div>
          ) : hasValidCriteria ? (
            <ResultDisplay 
              category={currentCategory}
              score={parsedScore}
              isEligible={isEligible}
            />
          ) : (
            <div className="text-center py-20 opacity-60">
                <div className="inline-block p-6 rounded-full bg-slate-800/50 mb-4">
                    <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p className="text-xl font-semibold text-white mb-2">
                    Data Submitted. Ready for Prediction.
                </p>
                <p className="text-slate-400">
                    Change the score and category in the form above to see instant prediction.
                </p>
            </div>
          )}
        </div>

        <div className="w-full bg-slate-900/50 rounded-xl border border-slate-800 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-white font-semibold text-lg sm:text-xl mb-2 sm:mb-0">
              Try our
          </span>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                  href="/#capsules"
                  className="w-full text-center sm:w-auto px-6 py-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-base"
              >
                  GK Capsules
              </a>

              <a 
                  href="/#flashcards"
                  className="w-full text-center sm:w-auto px-6 py-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-base"
              >
                  Flashcards
              </a>
          </div>
        </div> 
      </div>
      {/* <NewFooter />  */}
    </div>
    </Layout>
  );
};

export default App;