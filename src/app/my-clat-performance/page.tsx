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
    [120, 1], [119, 11], [118, 11], [117, 11], [116, 11], [115, 11], [114, 11], [113, 11], [112, 11], [111, 11],
    [110, 11], [109, 11], [108, 11], [107, 41], [106, 141], [105, 341], [104, 501], [103, 651], [102, 801],
    [101, 901], [100, 1000], [99, 1200], [98, 1400], [97, 1600], [96, 1800], [95, 2000], [94, 2400], [93, 2800],
    [92, 3200], [91, 3600], [90, 4000], [89, 4600], [88, 5200], [87, 5800], [86, 6400], [85, 7000], [84, 8000],
    [83, 9000], [82, 10000], [81, 11000], [80, 12000], [79, 13600], [78, 15200], [77, 16800], [76, 18400],
    [75, 20000], [74, 23000], [73, 26000], [72, 29000], [71, 32000], [70, 35000], [69, 38000], [68, 41000],
    [67, 44000], [66, 47000], [65, 50000], [64, 56000], [63, 62000], [62, 68000], [61, 74000], [60, 80000],
    [59, 88000], [58, 96000], [57, 104000], [56, 112000], [55, 120000], [54, 130000], [53, 140000], [52, 150000],
    [51, 160000], [50, 170000], [44, 254000], [43, 266000], [42, 278000], [41, 290000], [40, 302000], [39, 309500],
    [38, 317000], [37, 324500], [36, 332000], [35, 339500], [34, 347000], [33, 354500], [32, 362000], [31, 369500],
    [30, 377000], [29, 384500], [28, 392000], [27, 399500], [26, 407000], [25, 414500], [24, 422000], [23, 429500],
    [22, 437000], [21, 444500], [20, 452000], [19, 459500], [18, 467000], [17, 474500], [16, 482000], [15, 489500],
    [14, 497000], [13, 504500], [12, 512000], [11, 519500], [10, 527000], [9, 534500], [8, 542000], [7, 549500],
    [6, 557000], [5, 564500], [4, 572000], [3, 579500], [2, 587000], [1, 594500], [0, 602000]
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
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 shadow-sm text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            Rank Predictor
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            My <span className="text-[#F59E0B]">CLAT Predictor</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Predict your CLAT 2026 rank based on your expected score
          </p>
        </div>

        {/* Main Content */}
        <div className="relative rounded-2xl border-2 border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden p-8">
          {/* Input Section */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="space-y-4">
              <label className="block text-white font-semibold text-lg">
                Enter Your Score
              </label>
              <input
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="Enter score between 0-120"
                min="0"
                max="120"
                step="0.25"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border-2 border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#F59E0B] transition-colors text-lg"
              />
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>Enter your CLAT score (0-120) and your predicted rank will appear instantly</p>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {isCalculating && (
            <div className="max-w-3xl mx-auto">
              <div className="rounded-xl border-2 border-slate-800 bg-slate-800/50 p-8">
                <div className="flex flex-col items-center justify-center gap-4">
                  <Loader2 className="w-12 h-12 text-[#F59E0B] animate-spin" />
                  <p className="text-lg text-slate-300 font-medium">Calculating your rank...</p>
                </div>
              </div>
            </div>
          )}

          {/* Results Section */}
          {!isCalculating && prediction && (
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                <Target className="w-6 h-6 text-[#F59E0B]" />
                Your Predicted Rank
              </h2>
              
              <div className="relative rounded-xl border-2 border-slate-800 bg-slate-800/50 p-6 hover:border-[#F59E0B]/50 transition-all duration-300 animate-fadeIn">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Score</div>
                      <div className="text-3xl font-bold text-white">{prediction.score}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-slate-400 mb-1">Predicted Rank</div>
                      <div className="text-3xl font-bold text-[#F59E0B]">
                        {prediction.rank.toLocaleString()}
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                      <Award className="w-8 h-8 text-[#F59E0B]" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-400">Category:</span>
                    <span className={`text-sm font-semibold ${getRankCategory(prediction.rank).color}`}>
                      {getRankCategory(prediction.rank).label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-8 max-w-3xl mx-auto bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#F59E0B]" />
              Important Note
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
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