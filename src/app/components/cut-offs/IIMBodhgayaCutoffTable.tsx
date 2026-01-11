import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const primaryColor = '#FB923C';
const secondaryColor = '#fce4ec';
const accentPurple = '#c084fc';
const accentGreen = '#48C9B0';

// Define types for detailed data
type DetailedData = {
  category: string;
  p1: number | null;
  p2: number | null;
  p3: number | null;
  p4: number | null;
  t3: number | null;
  t2: number | null;
  t1: number | null;
};

type YearData = {
  cutoffs: Array<{ category: string; score: number }>;
  detailed?: DetailedData[];
};

// Data for all years
const yearlyData: Record<2025 | 2024 | 2023 | 2022, YearData> = {
  2025: {
    cutoffs: [
      { category: 'General', score: 333 },
      { category: 'EWS', score: 300 },
      { category: 'NC-OBC', score: 280 },
      { category: 'SC', score: 235 },
      { category: 'ST', score: 190 },
      { category: 'PwD', score: 230 },
    ],
    detailed: [
      {
        category: 'General',
        p1: 70, p2: 70, p3: 70, p4: 76,
        t3: 290, t2: 275, t1: 333,
      },
      {
        category: 'EWS',
        p1: 50, p2: 50, p3: 50, p4: 63,
        t3: 245, t2: 184, t1: 300,
      },
      {
        category: 'NC-OBC',
        p1: 50, p2: 50, p3: 50, p4: 52,
        t3: 220, t2: 195, t1: 280,
      },
      {
        category: 'SC',
        p1: 35, p2: 35, p3: 35, p4: 40,
        t3: 146, t2: 146, t1: 235,
      },
      {
        category: 'ST',
        p1: 30, p2: 25, p3: 25, p4: 36,
        t3: 140, t2: 140, t1: 190,
      },
      {
        category: 'PwD-GEN',
        p1: null, p2: null, p3: null, p4: null,
        t3: null, t2: null, t1: 230,
      },
      {
        category: 'PwD-EWS',
        p1: null, p2: null, p3: null, p4: null,
        t3: null, t2: null, t1: 180,
      },
      {
        category: 'PwD-NCOBC',
        p1: 30, p2: 25, p3: 25, p4: 36,
        t3: 140, t2: 140, t1: null,
      },
      {
        category: 'PwD-SC',
        p1: null, p2: null, p3: null, p4: null,
        t3: null, t2: null, t1: 154,
      },
      {
        category: 'PwD-ST',
        p1: null, p2: null, p3: null, p4: null,
        t3: null, t2: null, t1: null,
      },
    ]
  },
  2024: {
    cutoffs: [
      { category: 'General', score: 292 },
      { category: 'EWS', score: 271 },
      { category: 'NC-OBC', score: 237 },
      { category: 'SC', score: 192 },
      { category: 'ST', score: 135 },
      { category: 'PwD', score: 164 },
    ]
  },
  2023: {
    cutoffs: [
      { category: 'General', score: 313 },
      { category: 'EWS', score: 289 },
      { category: 'NC-OBC', score: 255 },
      { category: 'SC', score: 203 },
      { category: 'ST', score: 148 },
      { category: 'PwD', score: 159 },
    ]
  },
  2022: {
    cutoffs: [
      { category: 'General', score: 335 },
      { category: 'EWS', score: 315 },
      { category: 'NC-OBC', score: 287 },
      { category: 'SC', score: 222 },
      { category: 'ST', score: 148 },
      { category: 'PwD', score: 224 },
    ]
  },
};

// Trend data for line chart
const trendData = [
  { year: '2022', General: 335, EWS: 315, 'NC-OBC': 287, SC: 222, ST: 148, PwD: 224 },
  { year: '2023', General: 313, EWS: 289, 'NC-OBC': 255, SC: 203, ST: 148, PwD: 159 },
  { year: '2024', General: 292, EWS: 271, 'NC-OBC': 237, SC: 192, ST: 135, PwD: 164 },
  { year: '2025', General: 333, EWS: 300, 'NC-OBC': 280, SC: 235, ST: 190, PwD: 230 },
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

const Cell = ({ value }: { value: number | null }) => (
  <td className="py-3 px-3 text-center text-slate-300">
    {value !== null ? value : '—'}
  </td>
);

interface IIMBodhgayaCutoffProps {
  selectedYear?: number;
}

const IIMBodhgayaCutoff = ({ selectedYear: propYear }: IIMBodhgayaCutoffProps = {}) => {
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
            IIM Bodh Gaya IPM Cutoff Data
          </h1>
          <p className="text-slate-400 text-lg">Historical Cutoff Analysis (2022-2025)</p>
        </div>

        {/* Bar Chart Section */}
        <div className="bg-slate-900/40 rounded-2xl shadow-xl p-6 mb-8 border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">
            Category-wise Cutoff Distribution - {selectedYear}
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={currentData.cutoffs} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
                label={{ value: 'Cutoff Score', angle: -90, position: 'insideLeft', style: { fill: primaryColor } }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
              <Bar dataKey="score" name="Cutoff Score" fill={primaryColor} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Trend Line Chart */}
        <div className="bg-slate-900/40 rounded-2xl shadow-xl p-6 mb-8 border-t-4 border-purple-500">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">
            Cutoff Trends Across Years (2022-2025)
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
              <Line type="monotone" dataKey="NC-OBC" stroke={accentGreen} strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="SC" stroke="#E74C3C" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="ST" stroke="#3498DB" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="PwD" stroke={secondaryColor} strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed 2025 Table */}
        {selectedYear === 2025 && currentData.detailed && (
          <div className="bg-slate-900/40 rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-500">
            <div className="p-6 border-b border-slate-800 bg-slate-900/60">
              <h2 className="text-2xl font-bold text-orange-400">
                IIM Bodh Gaya IPM 2025 Detailed Cut-Off
              </h2>
              <p className="text-sm text-slate-400 mt-1">Including Percentile and Type-wise Cutoffs</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800">
                    <th rowSpan={2} className="text-white px-4 py-3 text-center border-r border-slate-700">
                      Category
                    </th>
                    <th colSpan={4} className="text-white px-4 py-3 text-center border-r border-slate-700">
                      Percentile Cut-Off (Type III)
                    </th>
                    <th colSpan={3} className="text-white px-4 py-3 text-center">
                      Cut-Off Score
                    </th>
                  </tr>
                  <tr className="bg-slate-800">
                    {['P1', 'P2', 'P3', 'P4'].map((h) => (
                      <th key={h} className="text-white px-3 py-2 text-center text-xs border-r border-slate-700">
                        {h}
                      </th>
                    ))}
                    {['Type III – GN', 'Type II', 'Type I'].map((h) => (
                      <th key={h} className="text-white px-3 py-2 text-center text-xs">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentData.detailed.map((row: DetailedData, i: number) => (
                    <tr
                      key={row.category}
                      className={`border-b border-slate-800 ${
                        i % 2 === 0 ? 'bg-slate-900/20' : 'bg-slate-900/40'
                      } hover:bg-slate-800/50`}
                    >
                      <td className="py-3 px-4 font-medium text-slate-200 border-r border-slate-800">
                        {row.category}
                      </td>
                      <Cell value={row.p1} />
                      <Cell value={row.p2} />
                      <Cell value={row.p3} />
                      <td className="py-3 px-3 text-center text-slate-300 border-r border-slate-800">
                        {row.p4 ?? '—'}
                      </td>
                      <Cell value={row.t3} />
                      <Cell value={row.t2} />
                      <td className="py-3 px-3 text-center font-bold text-orange-400">
                        {row.t1 ?? '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Simple Cutoff Table for Other Years */}
        {selectedYear !== 2025 && (
          <div className="bg-slate-900/40 rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-500">
            <div className="p-6 border-b border-slate-800 bg-slate-900/60">
              <h2 className="text-2xl font-bold text-orange-400">
                IIM Bodh Gaya IPM {selectedYear} Cutoff Details
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="px-6 py-4 text-left text-white font-semibold text-sm">Category</th>
                    <th className="px-6 py-4 text-center text-white font-semibold text-sm">Cut-off Score</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.cutoffs.map((row, index) => (
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
        )}

        {/* Footer Note */}
        <div className="mt-8 p-4 bg-slate-900/40 rounded-xl border-l-4 border-orange-500">
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-orange-400">Note:</span> All cutoff scores are based on official IIM Bodh Gaya data. 
            {selectedYear === 2025 && ' The 2025 data includes detailed percentile cutoffs and type-wise scores for comprehensive analysis.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IIMBodhgayaCutoff;