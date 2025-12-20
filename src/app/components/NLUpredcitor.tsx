// "use client";
// import React, { useState, useMemo, useEffect } from 'react';
// import { COLLEGES, AdmissionChance, PredictionResult, getCollegeImage } from '../nlu-predictor/data';
// import Image from 'next/image';
// import Link from 'next/link';
// import NewFooter from '../components/newFooter';
// import Layout from '../components/Layout';
// import { Menu, X } from 'lucide-react';

// // =========================
// // Result Card Component
// // =========================

// interface ResultCardProps {
//   result: PredictionResult;
//   index: number;
// }

// const ResultCard: React.FC<ResultCardProps> = ({ result, index }) => {
//   const getChanceColors = (chance: AdmissionChance) => {
//     switch (chance) {
//       case AdmissionChance.HIGH:
//         return 'bg-slate-800/90 border-emerald-400/50 hover:border-emerald-400/80 shadow-emerald-500/10';
//       case AdmissionChance.MODERATE:
//         return 'bg-slate-800/90 border-amber-400/50 hover:border-amber-400/80 shadow-amber-500/10';
//       case AdmissionChance.LOW:
//         return 'bg-slate-800/90 border-orange-400/50 hover:border-orange-400/80 shadow-orange-500/10';
//       default:
//         return 'bg-slate-800/90 border-slate-600';
//     }
//   };

//   const getChanceBadge = (chance: AdmissionChance) => {
//     switch (chance) {
//       case AdmissionChance.HIGH: 
//         return { text: 'High Probability', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/50', icon: '✓' };
//       case AdmissionChance.MODERATE: 
//         return { text: 'Competitive', color: 'bg-amber-500/15 text-amber-300 border-amber-400/50', icon: '◆' };
//       case AdmissionChance.LOW: 
//         return { text: 'Ambitious', color: 'bg-orange-500/15 text-orange-300 border-orange-400/50', icon: '★' };
//       default: 
//         return { text: 'Unlikely', color: 'bg-slate-700 text-slate-400 border-slate-600', icon: '○' };
//     }
//   };

//   const badge = getChanceBadge(result.chance);

//   return (
//     <div 
//       className={`relative group rounded-xl border-2 p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden min-h-[180px] flex flex-col ${getChanceColors(result.chance)}`}
//       style={{ 
//         animationDelay: `${index * 40}ms`,
//         animation: 'fadeIn 0.5s ease-out forwards'
//       }}
//     >
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//         <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent"></div>
//       </div>

//       <div className="flex items-start gap-4 mb-3 relative z-10">
//         <div className="shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-slate-900/50 border border-slate-700/50 shadow-lg">
//           <img 
//             src={getCollegeImage(result.name)} 
//             alt={result.name}
//             className="w-full h-full object-cover"
//             onError={(e) => {
//               e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231e293b" width="100" height="100"/><text x="50" y="50" font-size="35" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-weight="bold">NLU</text></svg>';
//             }}
//           />
//         </div>
        
//         <div className="flex-1 min-w-0">
//           <div className="flex items-center gap-2 mb-2 flex-wrap">
//             <span className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md border flex items-center gap-1 ${badge.color}`}>
//               <span className="text-[10px]">{badge.icon}</span>
//               {badge.text}
//             </span>
//           </div>
//           <h3 className="text-base font-bold leading-tight text-white mb-1.5 line-clamp-2">{result.name}</h3>
//         </div>
//       </div>

//       <div className="mt-auto pt-3 border-t border-slate-700/50 relative z-10">
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Score Range</p>
//             <p className="text-sm font-bold text-[#F59E0B]">{result.minScore} - {result.maxScore}</p>
//           </div>
//           <div className="text-right">
//             <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Category</p>
//             <p className="text-sm font-semibold text-slate-300">{result.category}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // =========================
// // Main App Component
// // =========================

// interface FormData {
//   name: string;
//   phone: string;
//   category: string;
//   score: string;
// }

// interface FormErrors {
//   name?: string;
//   phone?: string;
//   category?: string;
//   score?: string;
// }

// const App: React.FC = () => {
//   const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     phone: '',
//     category: '',
//     score: ''
//   });
//   const [errors, setErrors] = useState<FormErrors>({});
  
//   // Use state for prediction criteria, initialized from formData
//   const [currentCategory, setCurrentCategory] = useState<string>('');
//   const [currentScore, setCurrentScore] = useState<string>('');

//   const categories = [
//     { value: 'General', label: 'General' },
//     { value: 'OBC-NCL', label: 'OBC-NCL' },
//     { value: 'SC', label: 'SC' },
//     { value: 'ST', label: 'ST' },
//     { value: 'EWS', label: 'EWS' }
//   ];

//   // Load previous data and set prediction criteria on mount
//   useEffect(() => {
//     const submitted = localStorage.getItem('nlu_enquiry_submitted');
//     const name = localStorage.getItem('nlu_enquiry_name');
//     const phone = localStorage.getItem('nlu_enquiry_phone');
//     const category = localStorage.getItem('nlu_enquiry_category');
//     const score = localStorage.getItem('nlu_enquiry_score');
    
//     if (submitted === 'true' && name && phone && category && score) {
//       setIsFormSubmitted(true);
//       setFormData({ name, phone, category, score });
//       setCurrentCategory(category);
//       setCurrentScore(score);
//     }
//   }, []);

//   const validateForm = (data: FormData): boolean => {
//     const newErrors: FormErrors = {};

//     if (!data.name.trim()) {
//       newErrors.name = 'Name is required';
//     } else if (data.name.trim().length < 2) {
//       newErrors.name = 'Name must be at least 2 characters';
//     }

//     if (!data.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^[6-9]\d{9}$/.test(data.phone.trim())) {
//       newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
//     }

//     if (!data.category) {
//       newErrors.category = 'Please select your category';
//     }

//     if (!data.score.trim()) {
//       newErrors.score = 'Score is required';
//     } else {
//       const scoreNum = parseFloat(data.score);
//       if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 200) {
//         newErrors.score = 'Score must be between 0 and 120';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (): Promise<void> => {
//     // 1. Validate all fields
//     if (!validateForm(formData)) return;
    
//     setIsSubmitting(true);

//     try {
//       const { name, phone, category, score } = formData;
      
//       // Update prediction criteria based on current form data
//       setCurrentCategory(category);
//       setCurrentScore(score);
      
//       // Check if user has already submitted (data saved once)
//       if (isFormSubmitted) {
//         // Data already saved. Skip Supabase call and proceed to predictions.
//         console.log("User already submitted. Skipping Supabase save.");
//         // We still set isFormSubmitted to true just in case the check failed but the data was valid.
//         setIsFormSubmitted(true); 
//       } else {
//         // FIRST TIME SUBMISSION: Save data to Supabase
//         const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
//         const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';
  
//         const response = await fetch(`${SUPABASE_URL}/rest/v1/nlu_enquiry`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'apikey': SUPABASE_ANON_KEY,
//             'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
//             'Prefer': 'return=minimal'
//           },
//           body: JSON.stringify({
//             name: name.trim(),
//             phone: phone.trim(),
//             category: category,
//             score: parseFloat(score),
//             submitted_at: new Date().toISOString()
//           })
//         });
  
//         if (response.ok) {
//           // Successfully saved for the first time
//           localStorage.setItem('nlu_enquiry_submitted', 'true');
//           localStorage.setItem('nlu_enquiry_name', name.trim());
//           localStorage.setItem('nlu_enquiry_phone', phone.trim());
//           localStorage.setItem('nlu_enquiry_category', category);
//           localStorage.setItem('nlu_enquiry_score', score);
          
//           setIsFormSubmitted(true);
//         } else {
//           const errorData = await response.json();
//           alert(`Submission failed: ${errorData.message || 'Please try again'}`);
//           setIsSubmitting(false);
//           return; // Exit on failure
//         }
//       }

//     } catch (error) {
//       console.error('Error processing form:', error);
//       alert('An unexpected error occurred. Please check your connection and try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
//     const { name, value } = e.target;
    
//     // Update the form data state
//     setFormData(prev => ({ ...prev, [name]: value }));

//     // If already submitted, update the prediction criteria instantly for Category and Score fields
//     if (isFormSubmitted) {
//         if (name === 'category') {
//             setCurrentCategory(value);
//         } else if (name === 'score') {
//             setCurrentScore(value);
//         }
//     }
    
//     // Clear errors as user types
//     if (errors[name as keyof FormErrors]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const parsedScore = useMemo(() => {
//     const s = parseFloat(currentScore);
//     return isNaN(s) ? 0 : s;
//   }, [currentScore]);

//   // Prediction logic runs instantly based on currentCategory and currentScore if form is submitted
//   const predictions: PredictionResult[] = useMemo(() => {
//     // Only proceed if form has been submitted AND criteria are set
//     if (!isFormSubmitted || !currentScore || !currentCategory) return [];
    
//     const categoryColleges = COLLEGES.filter(college => college.category === currentCategory);
    
//     const results: PredictionResult[] = categoryColleges.map(college => {
//       let chance = AdmissionChance.NONE;
//       let matchScore = 0;

//       if (parsedScore >= college.minScore) {
//         chance = AdmissionChance.HIGH;
//         matchScore = 100 + (parsedScore - college.minScore);
//       } else if (parsedScore >= college.minScore - 2) {
//         chance = AdmissionChance.MODERATE;
//         matchScore = 50 + (parsedScore - (college.minScore - 2));
//       } else if (parsedScore >= college.minScore - 5) {
//         chance = AdmissionChance.LOW;
//         matchScore = 10 + (parsedScore - (college.minScore - 5));
//       }

//       return {
//         ...college,
//         chance,
//         matchScore
//       };
//     }).filter(r => r.chance !== AdmissionChance.NONE);

//     return results.sort((a, b) => {
//       const chanceWeight = {
//         [AdmissionChance.HIGH]: 3,
//         [AdmissionChance.MODERATE]: 2,
//         [AdmissionChance.LOW]: 1,
//         [AdmissionChance.NONE]: 0
//       };
      
//       if (chanceWeight[a.chance] !== chanceWeight[b.chance]) {
//         return chanceWeight[b.chance] - chanceWeight[a.chance];
//       }
//       return b.maxScore - a.maxScore;
//     });

//   }, [parsedScore, currentScore, currentCategory, isFormSubmitted]);
  
//   // Determine if we have valid criteria to show prediction status
//   const hasValidCriteria = currentCategory && currentScore && !errors.score && !errors.category && isFormSubmitted;

//   return (
//     <Layout>
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>

//       {/* Background decoration */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 pt-6 pb-12 flex flex-col gap-8">
        
//         {/* Header */}
//         <div className="text-center space-y-3">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
//             <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
//             CLAT 2026 Predictor
//           </div>
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
//             Where will your <span className="text-[#F59E0B]">score</span> take you?
//           </h1>
//           <p className=" text-slate-400 max-w-2xl text-md mx-auto">
//             Enter your details and estimated score to instantly see which National Law Universities are within your reach.
//           </p>
//         </div>

//         {/* Enquiry Form */}
//         <div className="w-full relative group z-10">
//           <div className="absolute -inset-0.5 bg-[#F59E0B]/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
//           <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="relative bg-slate-900 rounded-xl p-6 shadow-xl border border-slate-800">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></div>
//                 <h3 className="font-semibold text-white">
//                   Enter Your Details and Criteria :
//                 </h3>
//               </div>
//               {/* {isFormSubmitted && (
//                 <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/40">
//                   ✓ Data Saved
//                 </span>
//               )} */}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//               {/* Name (Disabled after first submission) */}
//               <div className="md:col-span-1">
//                 <label htmlFor="name" className="block text-xs font-semibold text-slate-400 mb-1.5">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   disabled={isSubmitting || isFormSubmitted}
//                   className={`w-full px-3 py-2.5 rounded-lg border ${
//                     errors.name 
//                       ? 'border-red-500/50 bg-red-500/10' 
//                       : 'border-slate-700 bg-slate-800'
//                   } text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
//                 />
//                 {errors.name && (
//                   <p className="mt-1 text-xs text-red-400">{errors.name}</p>
//                 )}
//               </div>

//               {/* Phone (Disabled after first submission) */}
//               <div className="md:col-span-1">
//                 <label htmlFor="phone" className="block text-xs font-semibold text-slate-400 mb-1.5">
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="10-digit number"
//                   maxLength={10}
//                   disabled={isSubmitting || isFormSubmitted}
//                   className={`w-full px-3 py-2.5 rounded-lg border ${
//                     errors.phone 
//                       ? 'border-red-500/50 bg-red-500/10' 
//                       : 'border-slate-700 bg-slate-800'
//                   } text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
//                 />
//                 {errors.phone && (
//                   <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
//                 )}
//               </div>

//               {/* Category (Editable always) */}
//               <div className="md:col-span-1">
//                 <label htmlFor="category" className="block text-xs font-semibold text-slate-400 mb-1.5">
//                   Category *
//                 </label>
//                 <select
//                   id="category"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   disabled={isSubmitting}
//                   className={`w-full px-3 py-2.5 rounded-lg border ${
//                     errors.category 
//                       ? 'border-red-500/50 bg-red-500/10' 
//                       : 'border-slate-700 bg-slate-800'
//                   } text-sm text-white focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all disabled:opacity-60`}
//                 >
//                   <option value="">Select category</option>
//                   {categories.map(cat => (
//                     <option key={cat.value} value={cat.value}>
//                       {cat.label}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.category && (
//                   <p className="mt-1 text-xs text-red-400">{errors.category}</p>
//                 )}
//               </div>

//               {/* Score (Editable always) */}
//               <div className="md:col-span-1">
//                 <label htmlFor="score" className="block text-xs font-semibold text-slate-400 mb-1.5">
//                   Estimated Score *
//                 </label>
//                 <input
//                   type="number"
//                   id="score"
//                   name="score"
//                   value={formData.score}
//                   onChange={handleChange}
//                   placeholder="Enter score (0-120)"
//                   min="0"
//                   max="200"
//                   step="0.5"
//                   disabled={isSubmitting}
//                   className={`w-full px-3 py-2.5 rounded-lg border ${
//                     errors.score 
//                       ? 'border-red-500/50 bg-red-500/10' 
//                       : 'border-slate-700 bg-slate-800'
//                   } text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all disabled:opacity-60`}
//                 />
//                 {errors.score && (
//                   <p className="mt-1 text-xs text-red-400">{errors.score}</p>
//                 )}
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full relative overflow-hidden bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
//                 {isSubmitting ? (
//                   <>
//                     <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Submitting Data...
//                   </>
//                 ) : (
//                   <>
//                     {isFormSubmitted ? 'Get Prediction' : 'Access Predictor'}
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </>
//                 )}
//               </span>
//             </button>

//             {isFormSubmitted && (
//               <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 mt-4">
//                 <p className="text-sm text-slate-300 mb-1">
//                   <span className="font-semibold text-white">Current Prediction Criteria:</span> 
//                   Category <span className="text-[#F59E0B] font-bold">{currentCategory}</span>, 
//                   Score <span className="text-[#F59E0B] font-bold">{currentScore}</span>
//                 </p>
//                 <p className="text-xs text-slate-400">
//                   Your data has been saved. The predictions below update instantly as you change the score and category.
//                 </p>
//               </div>
//             )}
//           </form>
//         </div>

//         {/* Results Area */}
//         <div className="space-y-6  mb-12">
//           {!isFormSubmitted ? (
//             <div className="text-center py-20 opacity-60">
//               <div className="inline-block p-6 rounded-full bg-[#F59E0B] mb-4">
//                 <svg className="w-16 h-16 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </div>
//               <p className="text-xl font-semibold text-white mb-2">
//                 Fill the form above and click {"Access Predictor"}
//               </p>
//               <p className="text-slate-400">
//                 Enter your details and score to get personalized college predictions.
//               </p>
//             </div>
//           ) : predictions.length === 0 && hasValidCriteria ? (
//             <div className="text-center py-20">
//               <div className="inline-block p-4 rounded-full bg-red-500/10 mb-4">
//                 <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                 </svg>
//               </div>
//               <p className="text-lg font-medium text-white">It looks challenging.</p>
//               <p className="text-slate-400 mt-2">
//                 Based on previous trends, a score of <span className="font-semibold text-[#F59E0B]">{currentScore}</span> might be below the typical cutoff for the tracked NLUs in <span className="font-semibold text-[#F59E0B]">{currentCategory}</span> category. <br/>
//                 Don&apos;t lose hope—vacancies often arise in later lists.
//               </p>
//             </div>
//           ) : predictions.length > 0 ? (
//             <div className="animate-[fadeIn_0.5s_ease-out]">
//               <div className="flex justify-between items-end mb-6 border-b border-slate-800 pb-2">
//                 <h2 className="text-xl font-semibold text-white">
//                   <span className="text-[#F59E0B]">{predictions.length}</span> Universities Found for <span className="text-[#F59E0B]">{currentCategory}</span>
//                 </h2>
//                 <span className="text-xs text-slate-500">Sorted by probability</span>
//               </div>
              
//               <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {predictions.map((college, idx) => (
//                   <ResultCard 
//                     key={college.id} 
//                     result={college} 
//                     index={idx}
//                   />
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="text-center mt-8 opacity-60 ">
//                 <div className="inline-block p-6 rounded-full bg-slate-800/50">
//                     <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
//                     </svg>
//                 </div>
//                 <p className="text-xl font-semibold text-white mb-2">
//                     Data Submitted. Ready for Prediction.
//                 </p>
//                 <p className="text-slate-400">
//                     Change the score and category in the form above to see instant predictions.
//                 </p>
//             </div>
//           )}
//         </div>
//         <div className="w-full bg-slate-900/50 rounded-xl border border-slate-800 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-4">
//     <span className="text-white font-semibold text-lg sm:text-xl mb-2 sm:mb-0">
//         Try our
//     </span>

//     <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
//         <Link 
//             href="/#capsules"
//             className="w-full text-center sm:w-auto px-6 py-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-base"
//         >
//             GK Capsules
//         </Link>

//         <Link 
//             href="/#flashcards"
//             className="w-full text-center sm:w-auto px-6 py-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-base"
//         >
//             Flashcards
//         </Link>
//     </div>
//         </div> 
//       </div>
//       <NewFooter /> 
//     </div>
//     </Layout>
//   );
// };

// export default App;

"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { COLLEGES, AdmissionChance, PredictionResult, getCollegeImage } from '../nlu-predictor/data';
import Image from 'next/image';
import Link from 'next/link';
import NewFooter from '../components/newFooter';
import Layout from '../components/Layout';
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
        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent"></div>
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
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Rank Range</p>
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
    const submitted = localStorage.getItem('nlu_enquiry_submitted');
    const name = localStorage.getItem('nlu_enquiry_name');
    const phone = localStorage.getItem('nlu_enquiry_phone');
    const category = localStorage.getItem('nlu_enquiry_category');
    const score = localStorage.getItem('nlu_enquiry_score');
    
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
      newErrors.score = 'Rank is required';
    } else {
      const scoreNum = parseFloat(data.score);
      if (isNaN(scoreNum) || scoreNum < 1) {
        newErrors.score = 'Please enter a valid rank (minimum 1)';
      } else if (scoreNum > 1000000) {
        newErrors.score = 'Rank seems unusually high. Please verify.';
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
        // We still set isFormSubmitted to true just in case the check failed but the data was valid.
        setIsFormSubmitted(true); 
      } else {
        // FIRST TIME SUBMISSION: Save data to Supabase
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
            name: name.trim(),
            phone: phone.trim(),
            category: category,
            score: parseFloat(score),
            submitted_at: new Date().toISOString()
          })
        });
  
        if (response.ok) {
          // Successfully saved for the first time
          localStorage.setItem('nlu_enquiry_submitted', 'true');
          localStorage.setItem('nlu_enquiry_name', name.trim());
          localStorage.setItem('nlu_enquiry_phone', phone.trim());
          localStorage.setItem('nlu_enquiry_category', category);
          localStorage.setItem('nlu_enquiry_score', score);
          
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

  // Prediction logic runs instantly based on currentCategory and currentScore if form is submitted
  // NOW WORKS WITH RANKS: Lower rank = Better chances
  const predictions: PredictionResult[] = useMemo(() => {
    // Only proceed if form has been submitted AND criteria are set
    if (!isFormSubmitted || !currentScore || !currentCategory) return [];
    
    const categoryColleges = COLLEGES.filter(college => college.category === currentCategory);
    
    const results: PredictionResult[] = categoryColleges.map(college => {
      let chance = AdmissionChance.NONE;
      let matchScore = 0;

      // RANK LOGIC: Lower rank is better
      // If user's rank is LESS THAN OR EQUAL to college's maxScore (cutoff rank), they have a chance
      if (parsedScore <= college.maxScore) {
        // Calculate how much better the rank is
        const rankMargin = college.maxScore - parsedScore;
        
        // High probability if rank is well within cutoff
        if (rankMargin >= (college.maxScore * 0.2)) {
          chance = AdmissionChance.HIGH;
          matchScore = 100 + rankMargin;
        } 
        // Moderate probability if rank is close to cutoff
        else if (rankMargin >= (college.maxScore * 0.05)) {
          chance = AdmissionChance.MODERATE;
          matchScore = 50 + rankMargin;
        } 
        // Low probability if rank is very close to cutoff
        else {
          chance = AdmissionChance.LOW;
          matchScore = 10 + rankMargin;
        }
      }
      // If user's rank is slightly worse than cutoff, still show as "Low" chance
      // else if (parsedScore <= college.maxScore * 1.1) {
      //   chance = AdmissionChance.LOW;
      //   matchScore = 5;
      // }

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
      
      // First sort by chance (higher chance first)
      if (chanceWeight[a.chance] !== chanceWeight[b.chance]) {
        return chanceWeight[b.chance] - chanceWeight[a.chance];
      }
      // Then sort by rank (lower maxScore/rank is better)
      return a.maxScore - b.maxScore;
    });

  }, [parsedScore, currentScore, currentCategory, isFormSubmitted]);
  
  // Determine if we have valid criteria to show prediction status
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

      <div className="relative max-w-7xl mx-auto px-4 pt-6 pb-12 flex flex-col gap-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            CLAT 2026 Predictor
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Where will your <span className="text-[#F59E0B]">rank</span> take you?
          </h1>
          <p className=" text-slate-400 max-w-2xl text-md mx-auto">
            Enter your details and expected rank to instantly see which National Law Universities are within your reach.
          </p>
        </div>

        {/* Enquiry Form */}
        <div className="w-full relative group z-10">
          <div className="absolute -inset-0.5 bg-[#F59E0B]/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="relative bg-slate-900 rounded-xl p-6 shadow-xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></div>
                <h3 className="font-semibold text-white">
                  Enter Your Details and Criteria :
                </h3>
              </div>
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

              {/* Rank (Editable always) */}
              <div className="md:col-span-1">
                <label htmlFor="score" className="block text-xs font-semibold text-slate-400 mb-1.5">
                  Rank *
                </label>
                <input
                  type="number"
                  id="score"
                  name="score"
                  value={formData.score}
                  onChange={handleChange}
                  placeholder="Enter your rank"
                  min="1"
                  // max="10000"
                  step="1"
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
              type="submit"
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
                  Rank <span className="text-[#F59E0B] font-bold">{currentScore}</span>
                </p>
                <p className="text-xs text-slate-400">
                  Your data has been saved. The predictions below update instantly as you change the rank and category.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Results Area */}
        <div className="space-y-6  mb-12">
          {!isFormSubmitted ? (
            <div className="text-center py-20 opacity-60">
               <div className="inline-block p-6 rounded-full bg-[#F59E0B]/10 mb-4">
                <svg className="w-16 h-16 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-xl font-semibold text-white mb-2">
                Fill the form above and click {"Access Predictor"}
              </p>
              <p className="text-slate-400">
                Enter your details and expected rank to get personalized college predictions.
              </p>
            </div>
          ) : predictions.length === 0 && hasValidCriteria ? (
            <div className="text-center py-20">
              <div className="inline-block p-4 rounded-full bg-red-500/10 mb-4">
                <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-white">It looks challenging.</p>
              <p className="text-slate-400 mt-2">
                Based on previous trends, a rank of <span className="font-semibold text-[#F59E0B]">{currentScore}</span> might be above the typical cutoff for the tracked NLUs in <span className="font-semibold text-[#F59E0B]">{currentCategory}</span> category. <br/>
                Don&apos;t lose hope—vacancies often arise in later lists.
              </p>
            </div>
          ) : predictions.length > 0 ? (
            <div className="animate-[fadeIn_0.5s_ease-out]">
              <div className="flex justify-between items-end mb-6 border-b border-slate-800 pb-2">
                <h2 className="text-xl font-semibold text-white">
                  <span className="text-[#F59E0B]">{predictions.length}</span> Universities Found for <span className="text-[#F59E0B]">{currentCategory}</span>
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
          ) : (
            <div className="text-center mt-8 opacity-60 ">
                <div className="inline-block p-6 rounded-full bg-slate-800/50">
                    <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <p className="text-xl font-semibold text-white mb-2">
                    Data Submitted. Ready for Prediction.
                </p>
                <p className="text-slate-400">
                    Change the rank and category in the form above to see instant predictions.
                </p>
            </div>
          )}
        </div>
        <div className="w-full bg-slate-900/50 rounded-xl border border-slate-800 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-4">
    <span className="text-white font-semibold text-lg sm:text-xl mb-2 sm:mb-0">
        Try our
    </span>

    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link 
            href="/#capsules"
            className="w-full text-center sm:w-auto px-6 py-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-base"
        >
            GK Capsules
        </Link>

        <Link 
            href="/#flashcards"
            className="w-full text-center sm:w-auto px-6 py-3 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-base"
        >
            Flashcards
        </Link>
    </div>
        </div> 
      </div>
      <NewFooter /> 
    </div>
    </Layout>
  );
};

export default App;