import React, { useMemo } from "react";
import Link from "next/link";
import { FORMS_DATA } from "../../../../constants";
import { Calendar, ExternalLink, AlertCircle, Clock } from "lucide-react";

/* ---------------- TYPES ---------------- */

type FormStatus = "Open" | "Closed" | "Coming Soon";

type Form = {
  name: string;
  startDate: string;
  endDate: string;
  examDate: string;
  status: FormStatus;
  link: string;
};

/* ---------------- HELPER FUNCTIONS ---------------- */

const parseDate = (dateStr: string): Date => {
  const months: { [key: string]: number } = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
    January: 0, February: 1, March: 2, April: 3, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
  };

  const parts = dateStr.trim().split(/[\s,]+/);
  
  if (parts.length === 3) {
    const month = months[parts[0]];
    const day = parseInt(parts[1]);
    const year = parseInt(parts[2]);
    if (!isNaN(month) && !isNaN(day) && !isNaN(year)) {
      return new Date(year, month, day);
    }
  }
  
  if (parts.length === 2) {
    const month = months[parts[0]];
    const year = parseInt(parts[1]);
    if (!isNaN(month) && !isNaN(year)) {
      return new Date(year, month, 1);
    }
  }
  
  return new Date(dateStr);
};

const isFormExpired = (endDate: string): boolean => {
  try {
    const endDateObj = parseDate(endDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return endDateObj < today;
  } catch {
    return false;
  }
};

/* ---------------- COMPONENT ---------------- */

export const FormsSection: React.FC = () => {
  const filteredAndSortedForms = useMemo(() => {
    const activeForms = (FORMS_DATA as Form[]).filter(
      (form) => !isFormExpired(form.endDate)
    );

    return activeForms.sort((a, b) => {
      if (a.status === "Open" && b.status !== "Open") return -1;
      if (a.status !== "Open" && b.status === "Open") return 1;
      return 0;
    });
  }, []);

  if (filteredAndSortedForms.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400">No active forms available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAndSortedForms.map((form: Form, i: number) => (
          <div
            key={i}
            className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 relative overflow-hidden"
          >
            {/* Status ping */}
            {form.status === "Open" && (
              <div className="absolute top-0 right-0 p-4">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="text-2xl font-bold mb-6">{form.name}</h3>

            {/* Dates */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 flex items-center gap-2 font-medium">
                  <Calendar className="w-4 h-4" />
                  Registration Starts
                </span>
                <span className="text-slate-200 font-bold">
                  {form.startDate}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4" />
                  Last Date
                </span>
                <span className="text-red-400 font-bold">
                  {form.endDate}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 flex items-center gap-2 font-medium">
                  <Clock className="w-4 h-4" />
                  Exam Date
                </span>
                <span className="text-blue-400 font-bold">
                  {form.examDate}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
              <span
                className={`text-xs font-black uppercase tracking-tighter px-3 py-1 rounded-full ${
                  form.status === "Open"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-slate-800 text-slate-500"
                }`}
              >
                {form.status}
              </span>

              {form.status === "Open" ? (
                <Link
                  href={form.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-[#f9a01b] hover:text-white transition-colors"
                >
                  Official Website <ExternalLink className="w-4 h-4" />
                </Link>
              ) : (
                <button
                  disabled
                  className="flex items-center gap-2 text-sm font-bold text-slate-600 cursor-not-allowed opacity-50"
                >
                  Official Website <ExternalLink className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20 text-center">
        <p className="text-orange-400 text-sm font-medium">
          Want personalized deadline alerts?
          <button className="underline font-bold ml-1">
            Connect your calendar
          </button>
        </p>
      </div>
    </div>
  );
};