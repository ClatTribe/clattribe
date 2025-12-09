"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp, Award, Info, Target, Loader2 } from 'lucide-react';
import Layout from '../components/Layout';

const CLATPredictorPage: React.FC = () => {
  const [score, setScore] = useState<string>('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [prediction, setPrediction] = useState<{score: number, rank: number} | null>(null);

  // Score to Rank mapping data
  const scoreRankData: Array<[number, number]> = [
    [120, 1], [119, 1], [118, 1], [117, 1], [116, 1], [115, 1], [114, 1], [113, 1], [112, 1], [111, 1],
    [110, 1], [109, 1], [108, 1], [107, 4], [106, 14], [105, 34], [104, 50], [103, 65], [102, 80],
    [101, 90], [100, 100], [99, 120], [98, 140], [97, 160], [96, 180], [95, 200], [94, 240], [93, 280],
    [92, 320], [91, 360], [90, 400], [89, 460], [88, 520], [87, 580], [86, 640], [85, 700], [84, 800],
    [83, 900], [82, 1000], [81, 1100], [80, 1200], [79, 1360], [78, 1520], [77, 1680], [76, 1840],
    [75, 2000], [74, 2300], [73, 2600], [72, 2900], [71, 3200], [70, 3500], [69, 3800], [68, 4100], // Corrected 70, 350 to 70, 3500
    [67, 4400], [66, 4700], [65, 5000], [64, 5600], [63, 6200], [62, 6800], [61, 7400], [60, 8000],
    [59, 8800], [58, 9600], [57, 10400], [56, 11200], [55, 12000], [54, 13000], [53, 14000], [52, 15000],
    [51, 16000], [50, 17000], [44, 25400], [43, 26600], [42, 27800], [41, 29000], [40, 30200], [39, 30950],
    [38, 31700], [37, 32450], [36, 33200], [35, 33950], [34, 34700], [33, 35450], [32, 36200], [31, 36950],
    [30, 37700], [29, 38450], [28, 39200], [27, 39950], [26, 40700], [25, 41450], [24, 42200], [23, 42950],
    [22, 43700], [21, 44450], [20, 45200], [19, 45950], [18, 46700], [17, 47450], [16, 48200], [15, 48950],
    [14, 49700], [13, 50450], [12, 51200], [11, 51950], [10, 52700], [9, 53450], [8, 54200], [7, 54950],
    [6, 55700], [5, 56450], [4, 57200], [3, 57950], [2, 58700], [1, 59450], [0, 60200]
  ];

  const predictRank = (inputScore: number): number => {
    const exactMatch = scoreRankData.find(([s]) => s === inputScore);
    if (exactMatch) return exactMatch[1];

    let lowerScore = scoreRankData[scoreRankData.length - 1];
    let upperScore = scoreRankData[0];

    for (let i = 0; i < scoreRankData.length - 1; i++) {
      if (scoreRankData[i][0] >= inputScore && scoreRankData[i + 1][0] <= inputScore) {
        upperScore = scoreRankData[i];
        lowerScore = scoreRankData[i + 1];
        break;
      }
    }

    if (upperScore[0] !== lowerScore[0]) {
      const ratio = (inputScore - lowerScore[0]) / (upperScore[0] - lowerScore[0]);
      // The rank should be interpolated linearly, but for a score-to-rank mapping where lower score means higher rank, 
      // the calculation should be inverted to estimate the rank correctly, which is already done below:
      // lowerRank + ratio * (upperRank - lowerRank) - this is mathematically incorrect for rank data
      // For a correct interpolation: Rank = Rank_lower + Ratio * (Rank_upper - Rank_lower)
      // Since Rank_lower > Rank_upper, this will correctly subtract the difference.
      const predictedRank = Math.round(lowerScore[1] + ratio * (upperScore[1] - lowerScore[1]));
      return predictedRank;
    }

    return lowerScore[1];
  };

  useEffect(() => {
    const numScore = parseFloat(score);
    
    if (score === '' || isNaN(numScore) || numScore < 0 || numScore > 120) {
      setPrediction(null);
      setIsCalculating(false);
      return;
    }

    setIsCalculating(true);
    setPrediction(null);

    const timer = setTimeout(() => {
      const rank = predictRank(numScore);
      setPrediction({ score: numScore, rank });
      setIsCalculating(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [score]);

  const getRankCategory = (rank: number): { label: string; color: string } => {
    if (rank <= 50) return { label: 'Excellent - Top NLUs', color: 'text-emerald-400' };
    if (rank <= 500) return { label: 'Very Good - Premium NLUs', color: 'text-green-400' };
    if (rank <= 2000) return { label: 'Good - Top Tier NLUs', color: 'text-blue-400' };
    if (rank <= 5000) return { label: 'Fair - Mid Tier NLUs', color: 'text-yellow-400' };
    if (rank <= 10000) return { label: 'Moderate - Lower Tier NLUs', color: 'text-orange-400' };
    return { label: 'Challenging - Consider Other Options', color: 'text-red-400' };
  };

  return (
    <Layout>
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background decoration (Responsive: These are fixed and scale well) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl sm:w-[600px] sm:h-[600px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl sm:w-[800px] sm:h-[800px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header (Responsive: text sizes adjust) */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            Rank Predictor
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            My <span className="text-[#F59E0B]">CLAT Predictor</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto px-2">
            Predict your CLAT 2026 rank based on your expected score
          </p>
        </div>

        {/* Main Content (Responsive: Padding and max-width) */}
        <div className="relative rounded-2xl border-2 border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden p-6 sm:p-8 lg:p-10">
          {/* Input Section (Responsive: Input size and margin) */}
          <div className="max-w-xl mx-auto mb-8 sm:mb-10">
            <div className="space-y-4">
              <label className="block text-white font-semibold text-lg sm:text-xl">
                Enter Your Score (0-120)
              </label>
              <input
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="Enter score, e.g., 95.75"
                min="0"
                max="120"
                step="0.25"
                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl bg-slate-800 border-2 border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B] transition-colors text-xl sm:text-2xl"
              />
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>Enter your CLAT score (0-120) and your predicted rank will appear instantly.</p>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {isCalculating && (
            <div className="max-w-xl mx-auto">
              <div className="rounded-xl border-2 border-slate-800 bg-slate-800/50 p-8 sm:p-10">
                <div className="flex flex-col items-center justify-center gap-4">
                  <Loader2 className="w-12 h-12 text-[#F59E0B] animate-spin" />
                  <p className="text-lg sm:text-xl text-slate-300 font-medium">Calculating your rank...</p>
                </div>
              </div>
            </div>
          )}

          {/* Results Section (Responsive: Flex-wrap for small screens) */}
          {!isCalculating && prediction && (
            <div className="space-y-4 max-w-xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 mb-6">
                <Target className="w-6 h-6 text-[#F59E0B]" />
                Your Predicted Rank
              </h2>
              
              <div className="relative rounded-xl border-2 border-slate-800 bg-slate-800/50 p-6 sm:p-8 hover:border-[#F59E0B]/50 transition-all duration-300 animate-fadeIn">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 sm:gap-4">
                  {/* Score */}
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 flex-grow">
                    <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-7 h-7 text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-0.5">Score</div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-white">{prediction.score}</div>
                    </div>
                  </div>

                  {/* Predicted Rank */}
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 flex-grow">
                    <div>
                      <div className="text-sm text-slate-400 mb-0.5">Predicted Rank</div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#F59E0B]">
                        {prediction.rank.toLocaleString()}
                      </div>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0 ml-auto">
                      <Award className="w-7 h-7 text-[#F59E0B]" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-base text-slate-400 font-medium">Category:</span>
                    <span className={`text-base font-bold ${getRankCategory(prediction.rank).color}`}>
                      {getRankCategory(prediction.rank).label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Info Box (Responsive: Padding and text size) */}
          <div className="mt-10 max-w-3xl mx-auto bg-slate-800/50 border border-slate-700 rounded-xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
              Important Note
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              These predictions are based on historical data and statistical analysis. Actual ranks may vary based on 
              factors such as total number of test takers, difficulty level, and score distribution. Use this as a 
              rough estimate to gauge your performance. Securing a seat in top-tier NLUs typically requires a score 
              <span className="text-[#F59E0B] font-semibold"> above 90 marks</span>.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
    </Layout>
  );
};

export default CLATPredictorPage;