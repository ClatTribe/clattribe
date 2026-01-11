import React from "react";
import {
  Zap,
  Book,
  ShieldCheck,
  Scale,
  LucideIcon,
  Download,
  Eye,
} from "lucide-react";

type CheatSheet = {
  title: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  count: string;
  file: string;
};

export const CheatSheetsSection: React.FC = () => {
  const sheets: CheatSheet[] = [
    {
      title: "Legal Maxims",
      icon: Scale,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      count: "150+ Maxims",
      file: "Legal Maxims.pdf",
    },
    {
      title: "Constitutional Articles",
      icon: ShieldCheck,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      count: "80+ Key Articles",
      file: "Constitutional Articles.pdf",
    },
    {
      title: "Logical Patterns",
      icon: Zap,
      color: "text-[#f9a01b]",
      bg: "bg-orange-400/10",
      count: "25+ Strategies",
      file: "Logical Patterns.pdf",
    },
    {
      title: "Vocabulary for CLAT",
      icon: Book,
      color: "text-green-400",
      bg: "bg-green-400/10",
      count: "500+ Words",
      file: "Vocabulary for CLAT.pdf",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl mb-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">
            Master Every Subject in Minutes
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Our hand-crafted cheat sheets compress months of study material into
            digestible, high-yield points. Perfect for last-minute revisions.
          </p>
        </div>

        <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:scale-105 transition-transform shrink-0">
          Get All Access
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sheets.map((sheet, i) => {
          const Icon = sheet.icon;
          const pdfPath = `/cheatsheets/${encodeURIComponent(sheet.file)}`;

          return (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900 transition-all"
            >
              <div className="flex items-center gap-6">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${sheet.bg} ${sheet.color} flex items-center justify-center shrink-0`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-lg font-bold group-hover:text-[#f9a01b] transition-colors">
                    {sheet.title}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {sheet.count} included
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 flex gap-3">
                {/* Download */}
                <a
                  href={pdfPath}
                  download
                  className="flex-1 flex items-center justify-center gap-2 bg-[#f9a01b] hover:bg-[#e08e15] text-slate-900 text-sm font-bold py-3 rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>

                {/* View */}
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                  title="View PDF"
                >
                  <Eye className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
