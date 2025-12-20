"use client";
import React from 'react';
import { NLU } from './types';
import { MapPin, Briefcase, Award, TrendingUp } from 'lucide-react';

interface NLUCardProps {
  nlu: NLU;
  rank: number;
  matchScore?: number;
}

const NLUCard: React.FC<NLUCardProps> = ({ nlu, rank, matchScore }) => {
  const isMatch = nlu.closingRank >= rank;
  
  return (
    <div className={`group relative bg-[#0f172a] border ${isMatch ? 'border-[#F59E0B]/30 hover:border-[#F59E0B]' : 'border-gray-800'} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#F59E0B]/10`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{nlu.name}</h4>
            <div className="flex items-center text-gray-400 mt-1 text-sm">
              <MapPin size={14} className="mr-1" />
              <span>{nlu.location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[#F59E0B] font-bold text-lg">{nlu.medianCTC}</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Approx. Median CTC</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-[#1e293b] p-3 rounded-xl border border-gray-800">
            <div className="flex items-center text-gray-400 text-[10px] uppercase font-bold mb-1">
              <TrendingUp size={12} className="mr-1 text-green-500" />
              Placement Rate
            </div>
            <div className="text-white font-semibold">{nlu.placementRate}</div>
          </div>
          <div className="bg-[#1e293b] p-3 rounded-xl border border-gray-800">
            <div className="flex items-center text-gray-400 text-[10px] uppercase font-bold mb-1">
              <Award size={12} className="mr-1 text-blue-500" />
              Specializations
            </div>
            <div className="text-white text-xs truncate font-semibold">
              {nlu.specializations.join(', ')}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="text-[10px] text-gray-500 uppercase font-bold mb-2">Key Recruiters</h5>
          <div className="flex flex-wrap gap-2">
            {nlu.recruiters.map(rec => (
              <span key={rec} className="px-2 py-1 bg-[#1e293b] text-[10px] text-gray-300 rounded border border-gray-700">
                {rec}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800">
          <p className="text-sm text-gray-400 italic">"{nlu.notes}"</p>
        </div>
      </div>
      
      {isMatch && (
        <div className="absolute top-0 right-0 bg-[#F59E0B] text-[10px] font-bold text-white px-3 py-1 rounded-bl-lg uppercase tracking-tighter">
          Within Reach
        </div>
      )}
    </div>
  );
};

export default NLUCard;
