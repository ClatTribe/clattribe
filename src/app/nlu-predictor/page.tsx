"use client";
import React, { useState, useMemo } from 'react';

// =========================
// Types & Enums
// =========================

enum AdmissionChance {
  HIGH = 'High Probability',
  MODERATE = 'Competitive',
  LOW = 'Ambitious',
  NONE = 'Unlikely'
}

interface CollegeData {
  id: string;
  name: string;
  minScore: number;
  maxScore: number;
  category: string;
}

interface PredictionResult extends CollegeData {
  chance: AdmissionChance;
  matchScore: number;
}

// =========================
// College Data
// =========================

const COLLEGES: CollegeData[] = [
  { id: 'nlsiu', name: 'NLSIU Bangalore', minScore: 100, maxScore: 105, category: 'General' },
  { id: 'nalsar', name: 'NALSAR Hyderabad', minScore: 98, maxScore: 103, category: 'General' },
  { id: 'wbnujs-ba', name: 'WBNUJS Kolkata (BA LLB)', minScore: 95, maxScore: 100, category: 'General' },
  { id: 'nlu-jodhpur', name: 'NLU Jodhpur', minScore: 95, maxScore: 100, category: 'General' },
  { id: 'nliu-ba', name: 'NLIU Bhopal (BA LLB)', minScore: 93, maxScore: 98, category: 'General' },
  { id: 'gnlu', name: 'GNLU Gandhinagar', minScore: 93, maxScore: 98, category: 'General' },
  { id: 'mnlu-mumbai', name: 'MNLU Mumbai', minScore: 92, maxScore: 97, category: 'General' },
  { id: 'hnlu', name: 'HNLU Raipur', minScore: 90, maxScore: 95, category: 'General' },
  { id: 'rmlnlu', name: 'RMLNLU Lucknow', minScore: 90, maxScore: 95, category: 'General' },
  { id: 'wbnujs-bsc', name: 'WBNUJS Kolkata (BSc LLB)', minScore: 88, maxScore: 93, category: 'General' },
  { id: 'nliu-bsc', name: 'NLIU Bhopal (BSc LLB)', minScore: 88, maxScore: 95, category: 'General' },
  { id: 'rgnul', name: 'RGNUL Punjab', minScore: 88, maxScore: 93, category: 'General' },
  { id: 'nuals', name: 'NUALS Kochi', minScore: 88, maxScore: 93, category: 'General' },
  { id: 'nlu-odisha', name: 'NLU Odisha', minScore: 88, maxScore: 93, category: 'General' },
  { id: 'dsnlu', name: 'DSNLU Vishakhapatnam', minScore: 88, maxScore: 92, category: 'General' },
  { id: 'cnlu-ba', name: 'CNLU Patna (BA LLB)', minScore: 88, maxScore: 92, category: 'General' },
  { id: 'gnlu-silvassa', name: 'GNLU Silvassa', minScore: 88, maxScore: 93, category: 'General' },
  { id: 'tnnlu-ba', name: 'TNNLU Tiruchirappalli (BA LLB)', minScore: 87, maxScore: 92, category: 'General' },
  { id: 'tnnlu-bcom', name: 'TNNLU Tiruchirappalli (BCom LLB)', minScore: 87, maxScore: 92, category: 'General' },
  { id: 'nusrl', name: 'NUSRL Ranchi', minScore: 87, maxScore: 92, category: 'General' },
  { id: 'mnlu-nagpur-bba', name: 'MNLU Nagpur (BBA LLB)', minScore: 87, maxScore: 92, category: 'General' },
  { id: 'mnlu-nagpur-ba', name: 'MNLU Nagpur (BA LLB)', minScore: 86, maxScore: 91, category: 'General' },
  { id: 'mnlu-aurangabad-bba', name: 'MNLU Aurangabad (BBA LLB)', minScore: 86, maxScore: 91, category: 'General' },
  { id: 'cnlu-bba', name: 'CNLU Patna (BBA LLB)', minScore: 85, maxScore: 90, category: 'General' },
  { id: 'mnlu-aurangabad-ba', name: 'MNLU Aurangabad (BA LLB)', minScore: 85, maxScore: 90, category: 'General' },
  { id: 'nluja', name: 'NLUJA Assam', minScore: 85, maxScore: 90, category: 'General' },
  { id: 'hpnlu-ba', name: 'HPNLU Shimla (BA LLB)', minScore: 85, maxScore: 90, category: 'General' },
  { id: 'dnlu', name: 'DNLU Jabalpur', minScore: 85, maxScore: 90, category: 'General' },
  { id: 'dbranlu', name: 'DBRANLU Sonepat', minScore: 85, maxScore: 90, category: 'General' },
  { id: 'hpnlu-bba', name: 'HPNLU Shimla (BBA LLB)', minScore: 84, maxScore: 89, category: 'General' },
  { id: 'nlut', name: 'NLUT Agartala', minScore: 83, maxScore: 88, category: 'General' },
];

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
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-300 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800';
      case AdmissionChance.MODERATE:
        return 'bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-300 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800';
      case AdmissionChance.LOW:
        return 'bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-300 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  const getChanceBadge = (chance: AdmissionChance) => {
    switch (chance) {
      case AdmissionChance.HIGH: return 'High Probability';
      case AdmissionChance.MODERATE: return 'Competitive';
      case AdmissionChance.LOW: return 'Ambitious';
      default: return 'Unlikely';
    }
  };

  return (
    <div 
      className={`relative group rounded-xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${getChanceColors(result.chance)}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-current opacity-80">
              {getChanceBadge(result.chance)}
            </span>
            <span className="text-xs opacity-60 font-medium">Est. {result.minScore}-{result.maxScore}</span>
          </div>
          <h3 className="text-lg font-bold leading-tight">{result.name}</h3>
        </div>
      </div>

      <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

// =========================
// Main App Component
// =========================

const App: React.FC = () => {
  const [score, setScore] = useState<string>('');

  const parsedScore = useMemo(() => {
    const s = parseFloat(score);
    return isNaN(s) ? 0 : s;
  }, [score]);

  const predictions: PredictionResult[] = useMemo(() => {
    if (!score) return [];
    
    const results: PredictionResult[] = COLLEGES.map(college => {
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

  }, [parsedScore, score]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/30">
      
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12 sm:py-20 flex flex-col gap-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            CLAT 2025 Predictor
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white">
            Where will your <br className="hidden sm:block" /> score take you?
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Enter your estimated General Category score to instantly see which National Law Universities are within your reach.
          </p>
        </div>

        {/* Input Section */}
        <div className="w-full max-w-md mx-auto relative group z-10">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-xl p-2 flex items-center shadow-xl">
             <div className="pl-4 text-slate-400">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
              className="w-full bg-transparent border-none focus:ring-0 text-2xl font-bold text-slate-800 dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 h-14"
            />
            {score && (
              <button 
                onClick={() => setScore('')}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
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
              <div className="inline-block p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                 <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                 </svg>
              </div>
              <p className="text-lg font-medium">Enter your score above to start predicting.</p>
            </div>
          ) : predictions.length === 0 ? (
            <div className="text-center py-20">
               <div className="inline-block p-4 rounded-full bg-rose-50 dark:bg-rose-900/20 mb-4">
                 <svg className="w-12 h-12 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                 </svg>
              </div>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200">It looks challenging.</p>
              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Based on previous trends, this score might be below the typical cutoff for the tracked NLUs. <br/>
                Don't lose hope—vacancies often arise in later lists.
              </p>
            </div>
          ) : (
            <div className="animate-[fadeIn_0.5s_ease-out]">
              <div className="flex justify-between items-end mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  <span className="text-indigo-600 dark:text-indigo-400">{predictions.length}</span> Universities Found
                </h2>
                <span className="text-xs text-slate-500">Sorted by probability & prestige</span>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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

        <footer className="text-center pt-12 pb-6 border-t border-slate-200 dark:border-slate-800">
          <p className="text-slate-400 text-sm">
            Data is based on estimated cut-offs. Actual admission depends on rank, category, and domicile.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;