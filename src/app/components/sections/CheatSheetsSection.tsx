import React from "react";
import {
  Zap,
  Book,
  ShieldCheck,
  Scale,
  Globe,
  LucideIcon,
} from "lucide-react";

type CheatSheet = {
  title: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  count: string;
};

export const CheatSheetsSection: React.FC = () => {
  const sheets: CheatSheet[] = [
    {
      title: "Legal Reasoning Maxims",
      icon: Scale,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      count: "150+ Maxims",
    },
    {
      title: "Constitutional Articles",
      icon: ShieldCheck,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      count: "80+ Key Articles",
    },
    {
      title: "Logical Reasoning Patterns",
      icon: Zap,
      color: "text-[#f9a01b]",
      bg: "bg-orange-400/10",
      count: "25+ Strategies",
    },
    {
      title: "Vocabulary for CLAT",
      icon: Book,
      color: "text-green-400",
      bg: "bg-green-400/10",
      count: "500+ Words",
    },
    {
      title: "Current Affairs Timeline",
      icon: Globe,
      color: "text-red-400",
      bg: "bg-red-400/10",
      count: "Monthly Roundup",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
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

          return (
            <div
              key={i}
              className="group flex items-center gap-6 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900 transition-all cursor-pointer"
            >
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

              {/* Arrow */}
              <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-[#f9a01b] group-hover:border-[#f9a01b] group-hover:text-slate-900 transition-all">
                <Zap className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
