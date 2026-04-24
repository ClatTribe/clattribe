"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  Clock,
  TrendingUp,
  Zap,
  ArrowRight,
  Sparkles,
  Trophy,
  Medal,
  Flame,
  Calendar as CalendarIcon,
} from "lucide-react";
import {
  GK_DAILY_TARGETS,
  GK_LEADERBOARD_DATA,
} from "@/constants/gk-constants";

const NAVY = "#060818";
const AMBER = "#F59E0B";

/** Returns YYYY-MM-DD in local timezone */
function getTodayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Calculates current streak and week study days from localStorage */
function calcStreakData(): { streak: number; weekDays: boolean[] } {
  const today = getTodayStr();
  const storedDates: string[] = JSON.parse(
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).getItem("gk_studyDates") || "[]",
  );
  const lastDate =
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).getItem("gk_lastStudyDate") || "";
  let streak = parseInt(
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).getItem("gk_streak") || "0",
    10,
  );

  if (!storedDates.includes(today)) {
    storedDates.push(today);
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).setItem("gk_studyDates", JSON.stringify(storedDates));
  }

  if (lastDate === "") {
    streak = 1;
  } else if (lastDate === today) {
    // Same day - streak unchanged
  } else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;
    streak = lastDate === yStr ? streak + 1 : 1;
  }

  (typeof window !== "undefined"
    ? window.localStorage
    : { getItem: () => null, setItem: () => null, removeItem: () => null }
  ).setItem("gk_streak", String(streak));
  (typeof window !== "undefined"
    ? window.localStorage
    : { getItem: () => null, setItem: () => null, removeItem: () => null }
  ).setItem("gk_lastStudyDate", today);

  // Build Mon-Sun array for current week
  const now = new Date();
  const dow = now.getDay(); // 0=Sun
  const monOffset = dow === 0 ? -6 : 1 - dow;
  const weekDays: boolean[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + monOffset + i);
    const dStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    weekDays.push(storedDates.includes(dStr));
  }

  return { streak, weekDays };
}

export default function GKDashboard() {
  const [toast, setToast] = React.useState<string | null>(null);
  const [userName, setUserName] = React.useState("Student");
  const [quizzesTaken, setQuizzesTaken] = React.useState(0);
  const [isFirstVisit, setIsFirstVisit] = React.useState(false);
  const [accuracy, setAccuracy] = React.useState("--");
  const [readingSpeed, setReadingSpeed] = React.useState("--");
  const [streak, setStreak] = React.useState(1);
  const [weekDays, setWeekDays] = React.useState<boolean[]>(
    Array(7).fill(false),
  );
  const [completedTargets, setCompletedTargets] = React.useState<string[]>([]);

  React.useEffect(() => {
    const name = (
      typeof window !== "undefined"
        ? window.localStorage
        : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).getItem("gk_userName");
    if (name) setUserName(name);

    const q = parseInt(
      (typeof window !== "undefined"
        ? window.localStorage
        : { getItem: () => null, setItem: () => null, removeItem: () => null }
      ).getItem("gk_quizzesTaken") || "0",
      10,
    );
    setQuizzesTaken(q);

    const _ls = typeof window !== "undefined" ? window.localStorage : { getItem: () => null, setItem: () => null };
    if (!_ls.getItem("gk_dashboardVisited")) { setIsFirstVisit(true); _ls.setItem("gk_dashboardVisited", "1"); }

    const acc = (
      typeof window !== "undefined"
        ? window.localStorage
        : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).getItem("gk_accuracy");
    if (acc && acc !== "0") setAccuracy(acc + "%");

    const spd = (
      typeof window !== "undefined"
        ? window.localStorage
        : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).getItem("gk_readingSpeed");
    if (spd && spd !== "0") setReadingSpeed(spd + " wpm");

    const { streak: s, weekDays: wd } = calcStreakData();
    setStreak(s);
    setWeekDays(wd);

    const todayKey = `gk_targets_${getTodayStr()}`;
    const saved: string[] = JSON.parse(
      (typeof window !== "undefined"
        ? window.localStorage
        : { getItem: () => null, setItem: () => null, removeItem: () => null }
      ).getItem(todayKey) || "[]",
    );
    setCompletedTargets(saved);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleTargetClick = (targetId: string, isCompleted: boolean) => {
    if (isCompleted) return;
    const todayKey = `gk_targets_${getTodayStr()}`;
    const updated = [...completedTargets, targetId];
    setCompletedTargets(updated);
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).setItem(todayKey, JSON.stringify(updated));
    showToast("Target marked complete! Keep going 🔥");
  };

  const firstName = userName.split(" ")[0] || "Student";
  const userInitials =
    userName
      .split(" ")
      .filter(Boolean)
      .map((w: string) => w[0].toUpperCase())
      .join("")
      .substring(0, 2) || "ST";

  const stats = [
    {
      label: "Accuracy Rate",
      value: accuracy,
      icon: TrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Reading Speed",
      value: readingSpeed,
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      label: "Quizzes Taken",
      value: String(quizzesTaken),
      icon: CheckCircle2,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Current Streak",
      value: `${streak} Day${streak !== 1 ? "s" : ""}`,
      icon: Flame,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const todayDayIdx = (() => {
    const d = new Date().getDay();
    return d === 0 ? 6 : d - 1;
  })();

  const targetsWithState = GK_DAILY_TARGETS.map((t) => ({
    ...t,
    is_completed: completedTargets.includes(t.id),
  }));
  const completedCount = targetsWithState.filter((t) => t.is_completed).length;

  const leaderboard = GK_LEADERBOARD_DATA.map((s) =>
    s.is_user ? { ...s, name: `${firstName} (You)`, avatar: userInitials } : s,
  );

  const nextMilestone = streak < 7 ? 7 : streak < 30 ? 30 : 100;
  const prevMilestone = nextMilestone === 7 ? 0 : nextMilestone === 30 ? 7 : 30;
  const streakProgress = Math.min(
    ((streak - prevMilestone) / (nextMilestone - prevMilestone)) * 100,
    100,
  );

  return (
    <div className="space-y-8 relative">
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#060818] text-white px-6 py-3 rounded-2xl font-bold shadow-2xl border border-white/10"
        >
          {toast}
        </motion.div>
      )}

      {/* Welcome */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#F59E0B] font-black text-xs uppercase tracking-[0.2em] mb-3">
            <Sparkles size={14} />
            Student Portal
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-[#060818] dark:text-white">
            Welcome back, {firstName}!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
            {streak <= 1
              ? "Day 1 of your journey. Consistency is your superpower."
              : `You're on a ${streak}-day streak. Your consistency is your superpower.`}
          </p>
        </div>
        <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-2 rounded-2xl border border-gray-100 dark:border-white/5">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white dark:border-[#060818] bg-gray-200 dark:bg-gray-800"
              />
            ))}
          </div>
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 pr-2">
            12+ friends studying now
          </span>
        </div>
      </section>

      {/* Stats */}
      {isFirstVisit ? (
        <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-3xl md:rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center text-center gap-5">
          <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-500/10 rounded-full flex items-center justify-center">
            <TrendingUp size={28} className="text-emerald-600" />
          </div>
          <div className="space-y-1.5">
            <p className="text-base font-semibold text-gray-800 dark:text-white">Your stats will appear here</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Complete your first editorial to see your accuracy, reading speed, and more.</p>
          </div>
          <a href="/gk/editorial" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors">
            Read today’s editorial →
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-3xl md:rounded-[2rem] flex items-center justify-between p-6 md:p-8"
          >
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                {stat.label}
              </p>
              <p className="text-3xl font-black text-[#060818] dark:text-white">
                {stat.value}
              </p>
            </div>
            <div
              className={`p-4 rounded-2xl ${stat.bg} dark:bg-white/10 ${stat.color}`}
            >
              <stat.icon size={28} />
            </div>
          </motion.div>
        ))}
        </div>
      )}

      {/* Streak */}
      <section className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-3xl md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <Flame size={200} />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 bg-orange-500/10 rounded-full flex items-center justify-center border-4 border-orange-500/20 relative">
              <Flame
                size={48}
                className="text-orange-500"
                fill="currentColor"
              />
              {streak >= 3 && (
                <div className="absolute -top-2 -right-2 bg-[#F59E0B] text-[#060818] text-[10px] font-black px-2 py-1 rounded-full shadow-lg">
                  HOT!
                </div>
              )}
            </div>
            <div>
              <h4 className="text-3xl font-black text-[#060818] dark:text-white">
                {streak} Day{streak !== 1 ? "s" : ""} Streak
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">
                {streak === 1 ? "Just started!" : "Keep it up!"}
              </p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-7 gap-4 w-full">
            {DAYS.map((day, idx) => {
              const isCompleted = weekDays[idx] || false;
              const isToday = idx === todayDayIdx;
              return (
                <div key={day} className="flex flex-col items-center gap-3">
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest ${isToday ? "text-[#F59E0B]" : "text-gray-400"}`}
                  >
                    <span className="hidden sm:inline">{day}</span>
                    <span className="sm:hidden">{day[0]}</span>
                  </span>
                  <div
                    className={`w-full aspect-square rounded-xl md:rounded-2xl flex items-center justify-center transition-all border-2 ${
                      isCompleted
                        ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20"
                        : "bg-gray-50 dark:bg-white/5 border-transparent text-gray-300 dark:text-gray-700"
                    } ${isToday ? "ring-2 md:ring-4 ring-[#F59E0B]/20" : ""}`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <Circle size={20} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:w-64 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
              <CalendarIcon size={14} />
              Next Milestone: {nextMilestone} Days
            </div>
            <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${streakProgress}%` }}
                className="h-full bg-orange-500"
              />
            </div>
            <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
              {streak >= nextMilestone
                ? `${streak}-day legend! You've unlocked the next level!`
                : `${nextMilestone - streak} more day${nextMilestone - streak !== 1 ? "s" : ""} to unlock the "${nextMilestone === 7 ? "Consistency King" : nextMilestone === 30 ? "Monthly Champion" : "Century Scholar"}" badge!`}
            </p>
          </div>
        </div>
      </section>

      {/* Daily Targets + Leaderboard */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black tracking-tight dark:text-white">
              Daily Targets
            </h3>
            <div className="flex items-center gap-2 text-sm font-bold text-[#F59E0B] bg-amber-50 dark:bg-[#F59E0B]/10 px-4 py-1.5 rounded-full">
              <CheckCircle2 size={16} />
              {completedCount}/{targetsWithState.length} Completed
            </div>
          </div>
          <div className="grid gap-4">
            {targetsWithState.map((target, idx) => (
              <motion.div
                key={target.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                onClick={() =>
                  handleTargetClick(target.id, target.is_completed)
                }
                className={`group p-5 md:p-6 rounded-3xl md:rounded-[2rem] border transition-all duration-300 flex items-center gap-4 md:gap-6 cursor-pointer ${
                  target.is_completed
                    ? "bg-gray-50 dark:bg-white/5 border-transparent opacity-60"
                    : "bg-white dark:bg-white/5 border-gray-100 dark:border-white/5 hover:border-[#F59E0B] hover:shadow-xl hover:shadow-[#F59E0B]/5"
                }`}
              >
                <div
                  className={
                    target.is_completed
                      ? "text-emerald-500"
                      : "text-gray-200 dark:text-gray-700 group-hover:text-[#F59E0B] transition-colors"
                  }
                >
                  {target.is_completed ? (
                    <CheckCircle2 size={32} />
                  ) : (
                    <Circle size={32} />
                  )}
                </div>
                <div className="flex-1">
                  <h4
                    className={`text-lg font-bold ${target.is_completed ? "text-gray-400 dark:text-gray-600 line-through" : "text-[#060818] dark:text-white"}`}
                  >
                    {target.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
                    {target.description}
                  </p>
                </div>
                {!target.is_completed && (
                  <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-300 dark:text-gray-600 group-hover:bg-[#F59E0B] group-hover:text-[#060818] transition-all">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black tracking-tight dark:text-white">
              Leaderboard
            </h3>
            <Trophy size={20} className="text-[#F59E0B]" />
          </div>
          <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-3xl md:rounded-[2rem] p-6 space-y-4">
            {leaderboard.map((student, idx) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.05 }}
                className={`flex items-center gap-4 p-3 rounded-2xl transition-all ${
                  student.is_user
                    ? "bg-[#F59E0B]/10 border border-[#F59E0B]/20"
                    : "hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${
                    student.rank === 1
                      ? "bg-amber-400 text-[#060818] shadow-lg shadow-amber-400/20"
                      : student.rank === 2
                        ? "bg-gray-300 text-[#060818]"
                        : student.rank === 3
                          ? "bg-amber-700 text-white"
                          : "bg-gray-100 dark:bg-white/10 text-gray-500"
                  }`}
                >
                  {student.rank}
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#060818] dark:bg-white/10 flex items-center justify-center text-white dark:text-gray-300 font-bold text-xs">
                  {student.avatar}
                </div>
                <div className="flex-1">
                  <p
                    className={`text-sm font-black ${student.is_user ? "text-[#060818] dark:text-[#F59E0B]" : "text-[#060818] dark:text-white"}`}
                  >
                    {student.name}
                  </p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {student.score} pts
                  </p>
                </div>
                {student.rank <= 3 && (
                  <Medal
                    size={16}
                    className={
                      student.rank === 1
                        ? "text-amber-400"
                        : student.rank === 2
                          ? "text-gray-400"
                          : "text-amber-700"
                    }
                  />
                )}
              </motion.div>
            ))}
            <button
              onClick={() => showToast("Full leaderboard coming soon!")}
              className="w-full py-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-[#F59E0B] transition-colors"
            >
              View Full Rankings
            </button>
          </div>
        </div>
      </section>

      {/* Promo + Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <section className="bg-[#060818] text-white p-8 md:p-10 rounded-3xl md:rounded-[3rem] relative overflow-hidden group">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F59E0B] text-[10px] font-black uppercase tracking-widest mb-6">
              New Module
            </div>
            <h3 className="text-3xl font-black mb-4 leading-tight">
              Master Legal
              <br />
              Reasoning
            </h3>
            <p className="text-gray-400 mb-10 max-w-xs font-medium">
              Our latest strategic module on Constitutional Law is now live.
              Perfect for CLAT 2025 aspirants.
            </p>
            <button
              onClick={() => showToast("Legal Reasoning module loading…")}
              className="bg-[#F59E0B] text-[#060818] px-8 py-4 rounded-2xl font-black hover:bg-amber-400 transition-all shadow-xl shadow-[#F59E0B]/20"
            >
              Start Learning
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B]/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-[#F59E0B]/20 transition-all duration-700" />
        </section>

        <section className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-3xl md:rounded-[2rem] p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest mb-6">
            <Clock size={14} />
            Strategy Tip
          </div>
          <blockquote className="text-2xl font-bold text-[#060818] dark:text-white leading-tight italic">
            “Don’t read to memorize. Read to understand the logic behind the
            author’s argument. In CLAT GK, the answer is often hidden in the
            passage’s structure.”
          </blockquote>
          <div className="flex items-center gap-4 pt-6 border-t border-gray-50 dark:border-white/5 mt-6">
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10" />
            <div>
              <p className="text-sm font-black text-[#060818] dark:text-white uppercase tracking-widest">
                IIT-IIM Strategy Desk
              </p>
              <p className="text-xs text-gray-400 font-bold">Lead Mentor</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
