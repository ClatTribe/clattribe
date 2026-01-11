import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const primaryColor = '#FB923C';
const secondaryColor = '#fce4ec';
const accentPurple = '#c084fc';
const accentGreen = '#48C9B0';

// Data for all years
const yearlyData = {
  2025: [
    { category: 'General', score: 177 },
    { category: 'EWS', score: 138 },
    { category: 'OBC', score: 120 },
    { category: 'SC', score: 95 },
    { category: 'ST', score: 49 },
    { category: 'PwD/DAP', score: 62 },
  ],
  2024: [
    { category: 'General', score: 186 },
    { category: 'EWS', score: 155 },
    { category: 'OBC', score: 130 },
    { category: 'SC', score: 98 },
    { category: 'ST', score: 60 },
    { category: 'PwD/DAP', score: 23 },
  ],
  2023: [
    { category: 'General', score: 187 },
    { category: 'EWS', score: 153 },
    { category: 'OBC', score: 131 },
    { category: 'SC', score: 90 },
    { category: 'ST', score: 43 },
    { category: 'PwD/DAP', score: 34 },
  ],
};

// Trend data for line chart
const trendData = [
  { year: '2023', General: 187, EWS: 153, OBC: 131, SC: 90, ST: 43, 'PwD/DAP': 34 },
  { year: '2024', General: 186, EWS: 155, OBC: 130, SC: 98, ST: 60, 'PwD/DAP': 23 },
  { year: '2025', General: 177, EWS: 138, OBC: 120, SC: 95, ST: 49, 'PwD/DAP': 62 },
];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
    dataKey?: string;
  }>;
  label?: string;
}

interface IIMRanchiCutoffProps {
  selectedYear?: number;
}

const IIMRanchiCutoff = ({ selectedYear: propYear }: IIMRanchiCutoffProps = {}) => {
  const selectedYear = propYear ?? 2025;
  const currentData = yearlyData[selectedYear as keyof typeof yearlyData];

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 p-3 rounded-lg shadow-lg border-2 border-orange-500">
          <p className="font-semibold mb-1 text-orange-400">
            {label || payload[0].name}
          </p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey || entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-orange-400">
            IIM Ranchi IPM Cutoff Data
          </h1>
          <p className="text-slate-400 text-lg">Historical Cutoff Analysis (2023-2025)</p>
        </div>

        {/* Bar Chart Section */}
        <div className="bg-slate-900/40 rounded-2xl shadow-xl p-6 mb-8 border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">
            Category-wise Cutoff Distribution - {selectedYear}
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={currentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="category" 
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                angle={-15}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                label={{ value: 'Final Score', angle: -90, position: 'insideLeft', style: { fill: primaryColor } }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
              <Bar dataKey="score" name="Final Score" fill={primaryColor} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Trend Line Chart */}
        <div className="bg-slate-900/40 rounded-2xl shadow-xl p-6 mb-8 border-t-4 border-purple-500">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">
            Cutoff Trends Across Years (2023-2025)
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={trendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="year" 
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
              />
              <YAxis 
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                label={{ value: 'Score', angle: -90, position: 'insideLeft', style: { fill: primaryColor } }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="line"
              />
              <Line type="monotone" dataKey="General" stroke={primaryColor} strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="EWS" stroke={accentPurple} strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="OBC" stroke={accentGreen} strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="SC" stroke="#E74C3C" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="ST" stroke="#3498DB" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="PwD/DAP" stroke={secondaryColor} strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Individual Year Table */}
        <div className="bg-slate-900/40 rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-500">
          <div className="p-6 border-b border-slate-800 bg-slate-900/60">
            <h2 className="text-2xl font-bold text-orange-400">
              IIM Ranchi IPM {selectedYear} Cutoff Details
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-800">
                  <th className="px-6 py-4 text-left text-white font-semibold text-sm">Category</th>
                  <th className="px-6 py-4 text-center text-white font-semibold text-sm">Final Score</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, index) => (
                  <tr
                    key={row.category}
                    className={`border-b border-slate-800 transition-colors ${
                      index % 2 === 0 ? 'bg-slate-900/20' : 'bg-slate-900/40'
                    } hover:bg-slate-800/50`}
                  >
                    <td className="px-6 py-4 font-semibold text-slate-200">{row.category}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-bold text-lg text-orange-400">
                        {row.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 bg-slate-900/40 rounded-xl border-l-4 border-orange-500">
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-orange-400">Note:</span> All cutoff scores are based on official IIM Ranchi data. The final score is calculated based on a composite of IPMAT scores, academic performance, and other parameters as per IIM Ranchi's admission criteria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IIMRanchiCutoff;