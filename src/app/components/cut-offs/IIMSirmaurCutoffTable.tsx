import React from 'react';

const primaryColor = '#fce4ec';
const secondaryColor = '#FB923C';

const cutOffData = [
  { category: 'General', cutoff: 55 },
  { category: 'EWS (Economically Weaker Section)', cutoff: 25 },
  { category: 'NC-OBC', cutoff: 20 },
  { category: 'SC/ST', cutoff: 17 },
  { category: 'PWD', cutoff: 16 },
];

const IIMSirmaurCutoffTable = () => {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ color: secondaryColor }}
          >
            IIM Sirmaur BMS 2025 Cut-Off
          </h1>
          <p className="text-slate-400 text-lg">Category-wise Cutoff Analysis</p>
        </div>

        {/* Table Card */}
        <div className="bg-slate-900/40 rounded-2xl shadow-xl border-t-4 overflow-hidden" style={{ borderColor: primaryColor }}>
          <div className="p-6 border-b border-slate-800 bg-slate-900/60">
            <h2 className="text-2xl font-bold" style={{ color: secondaryColor }}>
              IIM Sirmaur BMS 2025 Cutoff Details
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-800">
                  <th className="py-4 px-6 text-white font-semibold text-center text-sm">
                    Category
                  </th>
                  <th className="py-4 px-6 text-white font-semibold text-center text-sm">
                    Cut-Off
                  </th>
                </tr>
              </thead>

              <tbody>
                {cutOffData.map((row, index) => (
                  <tr
                    key={row.category}
                    className={`border-b border-slate-800 transition-colors ${
                      index % 2 === 0 ? 'bg-slate-900/20' : 'bg-slate-900/40'
                    } hover:bg-slate-800/50`}
                  >
                    <td className="py-4 px-6 text-center font-semibold text-slate-200">
                      {row.category}
                    </td>

                    <td className="py-4 px-6 text-center">
                      <span
                        className="inline-block px-4 py-2 rounded-full font-bold text-black text-lg"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        {row.cutoff}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 bg-slate-900/40 rounded-xl border-l-4" style={{ borderColor: primaryColor }}>
          <p className="text-sm text-slate-300">
            <span className="font-semibold" style={{ color: secondaryColor }}>Note:</span> All cutoff marks are based on official IIM Sirmaur data for the year 2025. The cutoffs represent the minimum marks required to qualify for the next stage of selection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IIMSirmaurCutoffTable;