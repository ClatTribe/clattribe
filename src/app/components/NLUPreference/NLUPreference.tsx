"use client";
import React, { useState, useMemo } from 'react';
import Layout from '../Layout';
import PredictorForm from './PredictorForm';
import NLUCard from './NLUCard';
import { UserPreferences } from './types';
import { NLU_DATA } from './constants';
import { Info, LayoutGrid, List } from 'lucide-react';

const NLUPreference: React.FC = () => {
  const [userPrefs, setUserPrefs] = useState<UserPreferences | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handlePredict = (prefs: UserPreferences) => {
    setIsLoading(true);
    // Smooth transition simulation
    setTimeout(() => {
      setUserPrefs(prefs);
      setIsLoading(false);
      const resultsEl = document.getElementById('results-section');
      if (resultsEl) resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 600);
  };

  const filteredAndSortedNLUs = useMemo(() => {
  if (!userPrefs) return [];

  const { rank, locationPref, specializationPref } = userPrefs;

  // Filter by rank eligibility
  let eligible = NLU_DATA.filter(nlu => nlu.closingRank >= rank);

  // Filter by location preference
  if (locationPref && locationPref !== 'Any') {
    eligible = eligible.filter(nlu => nlu.location === locationPref);
  }

  // Filter by specialization preference
  if (specializationPref && specializationPref !== 'Any') {
    eligible = eligible.filter(nlu => 
      nlu.specializations.includes(specializationPref)
    );
  }

  // Sorting Logic: 
  // 1. Closing Rank (harder colleges first - ascending order)
  // 2. Median CTC (High to Low)
  return [...eligible].sort((a, b) => {
    // Priority 1: Closing Rank (harder to get colleges at top)
    if (a.closingRank !== b.closingRank) {
      return a.closingRank - b.closingRank;
    }

    // Priority 2: Median CTC (High to Low)
    if (b.avgCTC !== a.avgCTC) {
      return b.avgCTC - a.avgCTC;
    }

    return 0;
  });
}, [userPrefs]);

  return (
    <Layout>
      <div className="min-h-screen bg-[#0b1120] selection:bg-orange-500/30">
        <main className="p-8 lg:p-12 overflow-x-hidden">
          {/* Header Section */}
          <div className="max-w-6xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">NLU PREFERENCE TOOL 2026</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-none">
              Find Your Future <span className="text-[#F59E0B]">Law School</span>
            </h1>
            
            <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Data-driven predictions based on recent closing ranks, median CTC, 
              and your personal preferences.
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <PredictorForm onPredict={handlePredict} isLoading={isLoading} />
          </div>

          {/* Results Section */}
          {userPrefs && !isLoading && (
            <div id="results-section" className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-gray-800">
                <div>
                  <h2 className="text-3xl font-black text-white">Matching Universities</h2>
                  <p className="text-gray-500 mt-1">
                    Showing NLUs with closing rank ≥ <span className="text-[#F59E0B] font-bold">{userPrefs.rank}</span>
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center space-x-4">
                  <div className="flex bg-[#0f172a] p-1 rounded-lg border border-gray-800">
                    <button 
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                    >
                      <LayoutGrid size={18} />
                    </button>
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                    >
                      <List size={18} />
                    </button>
                  </div>
                  
                  <div className="flex items-center bg-orange-500/10 text-orange-400 px-4 py-2 rounded-lg border border-orange-500/20">
                    <Info size={18} className="mr-2" />
                    <span className="text-sm font-bold uppercase tracking-wider">{filteredAndSortedNLUs.length} Results</span>
                  </div>
                </div>
              </div>

              {filteredAndSortedNLUs.length > 0 ? (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                  {filteredAndSortedNLUs.map((nlu, index) => (
                    <div key={nlu.id} className="relative group">
                      <div className="absolute -left-3 top-6 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-black z-10 shadow-xl border-2 border-[#0b1120] transform group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <NLUCard nlu={nlu} rank={userPrefs.rank} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 bg-[#0f172a] rounded-3xl border-2 border-dashed border-gray-800/50">
                  <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Info size={40} className="text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">No Eligible NLUs Found</h3>
                  <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                    Historical data suggests that with a rank of <span className="font-bold text-orange-400">{userPrefs.rank}</span>, 
                    you might be outside the closing ranks for the listed NLUs. Consider checking regional or private institutions.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Footer info */}
          <div className="max-w-6xl mx-auto mt-32 text-center text-gray-600 text-xs border-t border-gray-900 pt-12 pb-16">
            <p className="mb-2">© 2026 LegalPrep India Rank Predictor. All rights reserved.</p>
            <p className="max-w-xl mx-auto opacity-60">This tool provides estimates based on historical closing rank trends and publicly available placement reports. Actual cut-offs may vary based on year-to-year competition and reservation quotas.</p>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default NLUPreference;