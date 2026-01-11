import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const primaryColor = '#FB923C';
const accentPurple = '#fce4ec';
const accentGreen = '#48C9B0';

// Types
type YearData = {
  opening: number;
  closing: number;
};

type NLUYearData = {
  2025: YearData;
  2024: YearData;
  2023: YearData;
  2022: YearData;
  2021: YearData;
};

type NLUDataType = {
  [key: string]: NLUYearData;
};

// NLU Data
const nluData: NLUDataType = {
  'NLSIU Bengaluru': {
    2025: { opening: 1, closing: 112 },
    2024: { opening: 1, closing: 97 },
    2023: { opening: 1, closing: 114 },
    2022: { opening: 1, closing: 85 },
    2021: { opening: 1, closing: 83 }
  },
  'NALSAR Hyderabad': {
    2025: { opening: 17, closing: 159 },
    2024: { opening: 4, closing: 161 },
    2023: { opening: 25, closing: 177 },
    2022: { opening: 8, closing: 162 },
    2021: { opening: 65, closing: 172 }
  },
  'WBNUJS Kolkata': {
    2025: { opening: 57, closing: 327 },
    2024: { opening: 140, closing: 262 },
    2023: { opening: 136, closing: 260 },
    2022: { opening: 117, closing: 257 },
    2021: { opening: 24, closing: 241 }
  },
  'NLIU Bhopal': {
    2025: { opening: 257, closing: 480 },
    2024: { opening: 311, closing: 409 },
    2023: { opening: 186, closing: 463 },
    2022: { opening: 217, closing: 451 },
    2021: { opening: 247, closing: 378 }
  },
  'HNLU Raipur': {
    2025: { opening: 480, closing: 807 },
    2024: { opening: 413, closing: 707 },
    2023: { opening: 425, closing: 805 },
    2022: { opening: 430, closing: 837 },
    2021: { opening: 387, closing: 765 }
  },
  'NLU Jodhpur': {
    2025: { opening: 159, closing: 367 },
    2024: { opening: 170, closing: 341 },
    2023: { opening: 70, closing: 383 },
    2022: { opening: 155, closing: 378 },
    2021: { opening: 185, closing: 356 }
  },
  'RMLNLU Lucknow': {
    2025: { opening: 461, closing: 780 },
    2024: { opening: 357, closing: 695 },
    2023: { opening: 432, closing: 749 },
    2022: { opening: 377, closing: 756 },
    2021: { opening: 255, closing: 676 }
  },
  'GNLU Gandhinagar': {
    2025: { opening: 236, closing: 444 },
    2024: { opening: 8, closing: 429 },
    2023: { opening: 147, closing: 462 },
    2022: { opening: 33, closing: 430 },
    2021: { opening: 251, closing: 366 }
  },
  'CNLU Patna': {
    2025: { opening: 882, closing: 1398 },
    2024: { opening: 790, closing: 1236 },
    2023: { opening: 628, closing: 1541 },
    2022: { opening: 932, closing: 1412 },
    2021: { opening: 677, closing: 1312 }
  },
  'RGNUL Patiala': {
    2025: { opening: 565, closing: 1279 },
    2024: { opening: 502, closing: 1129 },
    2023: { opening: 537, closing: 1307 },
    2022: { opening: 437, closing: 1184 },
    2021: { opening: 413, closing: 1075 }
  },
  'NLU Odisha (Cuttack)': {
    2025: { opening: 469, closing: 1013 },
    2024: { opening: 591, closing: 1080 },
    2023: { opening: 504, closing: 1207 },
    2022: { opening: 470, closing: 1193 },
    2021: { opening: 436, closing: 1072 }
  },
  'MNLU Mumbai': {
    2025: { opening: 443, closing: 1473 },
    2024: { opening: 99, closing: 547 },
    2023: { opening: 325, closing: 590 },
    2022: { opening: 64, closing: 548 },
    2021: { opening: 371, closing: 453 }
  },
  'NUALS Kochi': {
    2025: { opening: 350, closing: 1346 },
    2024: { opening: 350, closing: 1346 }, // Data not provided, using 2025 as placeholder
    2023: { opening: 552, closing: 1461 },
    2022: { opening: 413, closing: 1315 },
    2021: { opening: 414, closing: 1144 }
  },
  'NUSRL Ranchi': {
    2025: { opening: 864, closing: 1667 },
    2024: { opening: 864, closing: 1667 }, // Data not provided, using 2025 as placeholder
    2023: { opening: 939, closing: 1895 },
    2022: { opening: 933, closing: 1729 },
    2021: { opening: 1104, closing: 1507 }
  },
  'DSNLU Vishakhapatnam': {
    2025: { opening: 957, closing: 1682 },
    2024: { opening: 957, closing: 1682 }, // Data not provided, using 2025 as placeholder
    2023: { opening: 538, closing: 2080 },
    2022: { opening: 1002, closing: 1617 },
    2021: { opening: 1036, closing: 1473 }
  },
  'TNNLU Tiruchirappalli': {
    2025: { opening: 1231, closing: 1763 },
    2024: { opening: 1231, closing: 1763 }, // Data not provided, using 2025 as placeholder
    2023: { opening: 577, closing: 2045 },
    2022: { opening: 807, closing: 2024 },
    2021: { opening: 1199, closing: 1834 }
  },
  'MNLU Nagpur': {
    2025: { opening: 722, closing: 1529 },
    2024: { opening: 722, closing: 1529 }, // Data not provided, using 2025 as placeholder
    2023: { opening: 606, closing: 2102 },
    2022: { opening: 796, closing: 1657 },
    2021: { opening: 1052, closing: 1448 }
  },
  'MNLU Aurangabad': {
    2025: { opening: 1023, closing: 1949 },
    2024: { opening: 1023, closing: 1949 }, // Data not provided, using 2025 as placeholder
    2023: { opening: 1578, closing: 2655 },
    2022: { opening: 1390, closing: 2323 },
    2021: { opening: 1474, closing: 2022 }
  },
  'HPNLU Shimla': {
    2025: { opening: 949, closing: 2555 },
    2024: { opening: 949, closing: 2555 }, // Data not provided, using 2025 as placeholder
    2023: { opening: 822, closing: 2816 },
    2022: { opening: 1056, closing: 2302 },
    2021: { opening: 755, closing: 2009 }
  },
  'DBRANLU Sonepat': {
    2025: { opening: 626, closing: 1930 },
    2024: { opening: 626, closing: 1930 }, // Data not provided, using 2025 as placeholder
    2023: { opening: 767, closing: 2713 },
    2022: { opening: 1346, closing: 2000 },
    2021: { opening: 1033, closing: 2040 }
  }
};

const NLUCLATCutoff = () => {
  const [selectedNLU, setSelectedNLU] = useState<string>('NLSIU Bengaluru');
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  const nluList = Object.keys(nluData);
  const years = [2025, 2024, 2023, 2022, 2021]; // All available years

  // Prepare data for bar chart (current year)
  const currentYearData = nluList.map(nlu => ({
    name: nlu.split(' ')[0],
    fullName: nlu,
    opening: nluData[nlu][selectedYear as keyof NLUYearData]?.opening || 0,
    closing: nluData[nlu][selectedYear as keyof NLUYearData]?.closing || 0,
    range: (nluData[nlu][selectedYear as keyof NLUYearData]?.closing || 0) - (nluData[nlu][selectedYear as keyof NLUYearData]?.opening || 0)
  }));

  // Prepare trend data for selected NLU
  const trendData = years.map(year => ({
    year: year.toString(),
    opening: nluData[selectedNLU][year as keyof NLUYearData]?.opening || 0,
    closing: nluData[selectedNLU][year as keyof NLUYearData]?.closing || 0
  })).reverse();

  // Prepare table data for selected NLU
  const tableData = years.map(year => ({
    year,
    ...nluData[selectedNLU][year as keyof NLUYearData]
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 p-3 rounded-lg shadow-lg border-2 border-orange-500">
          <p className="font-semibold mb-1 text-orange-400">{payload[0].payload.fullName || payload[0].payload.year}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
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
            NLU CLAT Cutoff Data
          </h1>
          <p className="text-slate-400 text-lg">Historical Cutoff Analysis & Rank Trends</p>
        </div>

        {/* NLU Selector */}
        <div className="mb-8 bg-slate-900/40 rounded-2xl shadow-xl p-6 border-t-4 border-orange-500">
          <label className="block text-orange-400 font-semibold mb-3 text-lg">Select NLU:</label>
          <select
            value={selectedNLU}
            onChange={(e) => setSelectedNLU(e.target.value)}
            className="w-full bg-slate-800 text-white p-3 rounded-lg border-2 border-slate-700 focus:border-orange-500 focus:outline-none text-lg"
          >
            {nluList.map(nlu => (
              <option key={nlu} value={nlu}>{nlu}</option>
            ))}
          </select>
        </div>

        {/* Year Selector */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedYear === year
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Stats Cards - Compact row layout */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-xl p-3 md:p-6 shadow-lg transform hover:scale-105 transition-transform">
            <p className="text-white text-xs md:text-sm font-medium mb-1">Opening Rank</p>
            <p className="text-white text-2xl md:text-4xl font-bold">{nluData[selectedNLU][selectedYear as keyof NLUYearData]?.opening}</p>
          </div>
          <div className="bg-linear-to-br from-purple-500 to-purple-600 rounded-xl p-3 md:p-6 shadow-lg transform hover:scale-105 transition-transform">
            <p className="text-white text-xs md:text-sm font-medium mb-1">Closing Rank</p>
            <p className="text-white text-2xl md:text-4xl font-bold">{nluData[selectedNLU][selectedYear as keyof NLUYearData]?.closing}</p>
          </div>
          <div className="bg-linear-to-br from-green-500 to-green-600 rounded-xl p-3 md:p-6 shadow-lg transform hover:scale-105 transition-transform">
            <p className="text-white text-xs md:text-sm font-medium mb-1">Rank Range</p>
            <p className="text-white text-2xl md:text-4xl font-bold">
              {(nluData[selectedNLU][selectedYear as keyof NLUYearData]?.closing || 0) - (nluData[selectedNLU][selectedYear as keyof NLUYearData]?.opening || 0)}
            </p>
          </div>
        </div>

        {/* All NLUs Comparison Bar Chart - Moved up */}
        <div className="bg-slate-900/40 rounded-2xl shadow-xl p-6 mb-8 border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">
            All NLUs Rank Distribution - {selectedYear}
          </h2>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={currentYearData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }}
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis 
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                label={{ value: 'Rank', angle: -90, position: 'insideLeft', style: { fill: primaryColor } }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
              <Bar dataKey="opening" name="Opening Rank" fill={accentGreen} radius={[8, 8, 0, 0]} />
              <Bar dataKey="closing" name="Closing Rank" fill={primaryColor} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Trend Line Chart for Selected NLU - Moved down */}
        <div className="bg-slate-900/40 rounded-2xl shadow-xl p-6 mb-8 border-t-4 border-purple-500">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">
            {selectedNLU} - Rank Trend (2021-2025)
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
                label={{ value: 'Rank', angle: -90, position: 'insideLeft', style: { fill: primaryColor } }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
              <Line 
                type="monotone" 
                dataKey="opening" 
                name="Opening Rank" 
                stroke={accentGreen} 
                strokeWidth={3}
                dot={{ fill: accentGreen, r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="closing" 
                name="Closing Rank" 
                stroke={primaryColor} 
                strokeWidth={3}
                dot={{ fill: primaryColor, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-400 mt-3 text-center">
            * Some NLUs may show repeated data for 2024 where official data was not available
          </p>
        </div>

        {/* Cutoff Table for Selected NLU */}
        <div className="bg-slate-900/40 rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-500">
          <div className="p-6 border-b border-slate-800 bg-slate-900/60">
            <h2 className="text-2xl font-bold text-orange-400">
              {selectedNLU} - CLAT Cutoff Details (All Years)
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-800">
                  <th className="px-6 py-4 text-left text-white font-semibold text-sm">Year</th>
                  <th className="px-6 py-4 text-center text-white font-semibold text-sm">Opening Rank</th>
                  <th className="px-6 py-4 text-center text-white font-semibold text-sm">Closing Rank</th>
                  <th className="px-6 py-4 text-center text-white font-semibold text-sm">Rank Range</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={row.year}
                    className={`border-b border-slate-800 transition-colors ${
                      index % 2 === 0 ? 'bg-slate-900/20' : 'bg-slate-900/40'
                    } hover:bg-slate-800/50`}
                  >
                    <td className="px-6 py-4 font-semibold text-slate-200">{row.year}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full font-bold text-black text-sm bg-green-400">
                        {row.opening}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full font-bold text-black text-sm bg-orange-400">
                        {row.closing}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-slate-300 font-semibold">
                      {row.closing - row.opening}
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
            <span className="font-semibold text-orange-400">Note:</span> All cutoff ranks are based on CLAT counselling data. 
            Rankings represent All India Rank (AIR) ranges. Opening rank indicates the best rank admitted, while closing rank 
            indicates the lowest rank that secured admission after final counselling rounds. Some values may be approximate based on available data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NLUCLATCutoff;