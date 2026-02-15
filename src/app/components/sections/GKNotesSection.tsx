import React from 'react';
import { Download, ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';

export const GKNotesSection: React.FC = () => {
  const cheatsheets = [
    {
      year: 2024,
      title: 'December 2024 GK & Current Affairs',
      description: 'CLAT-focused GK & Current Affairs cheatsheet with exam-relevant coverage.',
      pdfPath: '/cheatsheets/December_2024_GK_CurrentAffairs_Clattribe.html.pdf'
    },
    {
      year: 2026,
      title: 'January 2026 Current Affairs',
      description: 'CLAT-focused GK & Current Affairs cheatsheet with exam-relevant coverage.',
      pdfPath: '/cheatsheets/CLAT_Tribe_January_2026_Current_Affairs (1).pdf'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cheatsheets.map((item) => (
          <div
            key={item.year}
            className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 hover:border-[#f9a01b]/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-[#f9a01b]">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                Cheatsheet
              </span>
            </div>

            <h3 className="text-xl font-bold mb-2">
              {item.title}
            </h3>

            <p className="text-slate-400 text-sm mb-6">
              {item.description}
            </p>

            <div className="flex items-center gap-3">
              {/* FIXED: Re-added the missing 'a' tag opening here */}
              <a
                href={item.pdfPath}
                download
                className="flex-1 flex items-center justify-center gap-2 bg-[#f9a01b] hover:bg-[#e08e15] text-slate-900 text-sm font-bold py-3 rounded-xl transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>

              <Link
                href={item.pdfPath}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};