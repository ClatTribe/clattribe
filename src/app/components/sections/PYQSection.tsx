import React from 'react';
import { Download, ChevronRight, FileText } from 'lucide-react';

export const PYQSection: React.FC = () => {
  const papers = [
    { year: 2025, file: 'CLAT 2025.pdf' },
    { year: 2024, file: 'CLAT 2024.pdf' },
    { year: 2023, file: 'CLAT 2023.pdf' },
    { year: 2022, file: 'CLAT 2022.pdf' },
    { year: 2021, file: 'CLAT 2021.pdf' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {papers.map(({ year, file }) => {
          const pdfPath = `/${encodeURIComponent(file)}`;

          return (
            <div
              key={year}
              className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 hover:border-[#f9a01b]/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-[#f9a01b]">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                  UG Exam
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">
                CLAT {year} Question Paper
              </h3>

              <p className="text-slate-400 text-sm mb-6">
                Complete question paper with official answer key and detailed explanations.
              </p>

              <div className="flex items-center gap-3">
                {/* Download Button */}
                <a
                  href={pdfPath}
                  download
                  className="flex-1 flex items-center justify-center gap-2 bg-[#f9a01b] hover:bg-[#e08e15] text-slate-900 text-sm font-bold py-3 rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>

                {/* View Button */}
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                  title="View PDF"
                >
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
