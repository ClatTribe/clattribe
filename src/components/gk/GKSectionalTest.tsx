"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Trophy,
  Zap,
  BookOpen,
  ChevronRight,
  Timer,
  AlertCircle,
  Lightbulb,
  RefreshCw,
  Target,
} from "lucide-react";
import { gkSupabase } from "@/lib/gk-supabase";
interface SectionalQuestion {
  id: number;
  set_number: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  topic: string;
  difficulty: string;
}
interface GKSectionalTestProps {
  onComplete?: (results: {
    score: number;
    total: number;
    timeSpent: number;
  }) => void;
  onBack?: () => void;
}
const SET_LABELS = [
  { num: 1, label: "Set 1", theme: "Polity & Economy", color: "bg-blue-500" },
  { num: 2, label: "Set 2", theme: "Science & Sports", color: "bg-purple-500" },
  {
    num: 3,
    label: "Set 3",
    theme: "Environment & Economy",
    color: "bg-green-500",
  },
  { num: 4, label: "Set 4", theme: "Critical Analysis", color: "bg-[#F59E0B]" },
  {
    num: 5,
    label: "Set 5",
    theme: "Synthesis & Strategy",
    color: "bg-[#060818]",
  },
];
function SetSelector({
  onSelect,
  onBack,
}: {
  onSelect: (setNum: number) => void;
  onBack?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {" "}
      <div className="flex items-center gap-4">
        {" "}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
          >
            {" "}
            <ArrowLeft size={16} /> Back{" "}
          </button>
        )}{" "}
        <div>
          {" "}
          <h2 className="text-2xl font-black text-[#060818] dark:text-white">
            GK Sectional Tests
          </h2>{" "}
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
            {" "}
            30 questions · Jan–Apr 2026 Current Affairs · Choose a set{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {" "}
        {SET_LABELS.map((set, idx) => (
          <motion.button
            key={set.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(set.num)}
            className="group bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 text-left hover:shadow-xl hover:shadow-[#F59E0B]/10 transition-all duration-300 relative overflow-hidden"
          >
            {" "}
            <div
              className={`absolute -right-6 -top-6 w-24 h-24 ${set.color} opacity-5 group-hover:opacity-10 rounded-full transition-all`}
            />{" "}
            <div className="space-y-4 relative">
              {" "}
              <div
                className={`w-12 h-12 ${set.color} rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg`}
              >
                {" "}
                {set.num}{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-black text-[#060818] dark:text-white text-base group-hover:text-[#F59E0B] transition-colors">
                  {" "}
                  {set.label}{" "}
                </p>{" "}
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
                  {set.theme}
                </p>{" "}
              </div>{" "}
              <div className="flex items-center justify-between pt-3 border-t border-gray-50 dark:border-white/5">
                {" "}
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  30 Questions
                </span>{" "}
                <ChevronRight
                  size={16}
                  className="text-gray-300 group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all"
                />{" "}
              </div>{" "}
            </div>{" "}
          </motion.button>
        ))}{" "}
      </div>{" "}
      <div className="bg-amber-50 dark:bg-[#F59E0B]/10 border border-amber-100 dark:border-[#F59E0B]/20 rounded-2xl p-4 flex items-start gap-3">
        {" "}
        <Lightbulb
          size={16}
          className="text-[#F59E0B] mt-0.5 flex-shrink-0"
        />{" "}
        <p className="text-xs text-amber-800 dark:text-[#F59E0B]/80 font-medium">
          {" "}
          Each set covers 30 questions across Polity, Economy, International
          Affairs, Environment, Science & Technology, and Sports — all from
          Jan–Apr 2026.{" "}
        </p>{" "}
      </div>{" "}
    </motion.div>
  );
}
function QuizScreen({
  questions,
  setNum,
  onComplete,
  onBack,
}: {
  questions: SectionalQuestion[];
  setNum: number;
  onComplete: (results: {
    score: number;
    total: number;
    timeSpent: number;
  }) => void;
  onBack: () => void;
}) {
  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(
    new Array(questions.length).fill(null),
  );
  const [showExplanation, setShowExplanation] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [timeSpent, setTimeSpent] = React.useState(0);
  const [reviewMode, setReviewMode] = React.useState(false);
  React.useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => setTimeSpent((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, [submitted]);
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return m + ":" + sec;
  };
  const q = questions[current];
  const selectedAnswer = answers[current];
  const answered = selectedAnswer !== null;
  const isCorrect = answered && selectedAnswer === q.correct;
  const handleSelect = (idx: number) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
    setShowExplanation(true);
  };
  const handleNext = () => {
    setShowExplanation(false);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setSubmitted(true);
    }
  };
  const handleSubmit = () => {
    const score = answers.reduce<number>(
      (acc, ans, i) => (ans === questions[i].correct ? acc + 1 : acc),
      0,
    ); /* Write analytics to localStorage */
    const pct = Math.round((score / questions.length) * 100);
    const existing = parseInt(
      (typeof window !== "undefined"
        ? window.localStorage
        : { getItem: () => null, setItem: () => null, removeItem: () => null }
      ).getItem("gk_quizzesTaken") || "0",
      10,
    );
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).setItem("gk_quizzesTaken", String(existing + 1));
    const prevAcc = parseInt(
      (typeof window !== "undefined"
        ? window.localStorage
        : { getItem: () => null, setItem: () => null, removeItem: () => null }
      ).getItem("gk_accuracy") || "0",
      10,
    );
    const newAcc = prevAcc > 0 ? Math.round((prevAcc + pct) / 2) : pct;
    (typeof window !== "undefined"
      ? window.localStorage
      : { getItem: () => null, setItem: () => null, removeItem: () => null }
    ).setItem("gk_accuracy", String(newAcc));
    onComplete({ score, total: questions.length, timeSpent });
  };
  if (submitted) {
    const score = answers.reduce<number>(
      (acc, ans, i) => (ans === questions[i].correct ? acc + 1 : acc),
      0,
    );
    const pct = Math.round((score / questions.length) * 100);
    if (reviewMode) {
      const q = questions[current];
      const userAns = answers[current];
      const correct = userAns === q.correct;
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {" "}
          <div className="flex items-center justify-between">
            {" "}
            <button
              onClick={() => {
                setReviewMode(false);
                setCurrent(0);
              }}
              className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
            >
              {" "}
              <ArrowLeft size={16} /> Back to Results{" "}
            </button>{" "}
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
              {" "}
              {current + 1} / {questions.length}{" "}
            </span>{" "}
          </div>{" "}
          <div className="bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 p-6 space-y-5">
            {" "}
            <div className="flex items-center gap-2">
              {" "}
              <span
                className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${q.difficulty === "easy" ? "bg-green-100 text-green-700" : q.difficulty === "hard" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}
              >
                {q.difficulty}
              </span>{" "}
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-lg">
                {q.topic}
              </span>{" "}
            </div>{" "}
            <p className="font-bold text-[#060818] dark:text-white text-base leading-relaxed">
              {q.question}
            </p>{" "}
            <div className="space-y-3">
              {" "}
              {q.options.map((opt, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl border-2 transition-all font-medium text-sm ${i === q.correct ? "bg-green-50 dark:bg-green-500/10 border-green-500 text-green-800 dark:text-green-300" : i === userAns && !correct ? "bg-red-50 dark:bg-red-500/10 border-red-400 text-red-800 dark:text-red-300" : "bg-gray-50 dark:bg-white/5 border-transparent text-gray-600 dark:text-gray-400"}`}
                >
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <span className="font-black text-[10px] uppercase w-5 flex-shrink-0">
                      {" "}
                      {["A", "B", "C", "D"][i]}{" "}
                    </span>{" "}
                    <span>{opt}</span>{" "}
                    {i === q.correct && (
                      <CheckCircle2
                        size={16}
                        className="ml-auto text-green-500 flex-shrink-0"
                      />
                    )}{" "}
                    {i === userAns && !correct && i !== q.correct && (
                      <XCircle
                        size={16}
                        className="ml-auto text-red-500 flex-shrink-0"
                      />
                    )}{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
            <div className="bg-amber-50 dark:bg-[#F59E0B]/10 border border-amber-100 dark:border-[#F59E0B]/20 rounded-2xl p-4">
              {" "}
              <p className="text-xs font-black text-[#F59E0B] uppercase tracking-widest mb-2">
                Explanation
              </p>{" "}
              <p className="text-sm text-amber-900 dark:text-[#F59E0B]/80 font-medium leading-relaxed">
                {q.explanation}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-center justify-between gap-4">
            {" "}
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 rounded-xl font-bold text-sm disabled:opacity-40 hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
            >
              {" "}
              <ArrowLeft size={16} /> Prev{" "}
            </button>{" "}
            <button
              onClick={() =>
                setCurrent(Math.min(questions.length - 1, current + 1))
              }
              disabled={current === questions.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 rounded-xl font-bold text-sm disabled:opacity-40 hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
            >
              {" "}
              Next <ArrowRight size={16} />{" "}
            </button>{" "}
          </div>{" "}
        </motion.div>
      );
    }
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6"
      >
        {" "}
        <div className="bg-[#060818] p-8 rounded-3xl text-center space-y-6">
          {" "}
          <Trophy size={48} className="text-[#F59E0B] mx-auto" />{" "}
          <div>
            {" "}
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              GK Sectional — Set {setNum}
            </p>{" "}
            <p className="text-5xl font-black text-white mt-2">{pct}%</p>{" "}
            <p className="text-gray-400 font-bold mt-1">
              {score} / {questions.length} correct
            </p>{" "}
          </div>{" "}
          <div className="flex justify-center gap-6 border-t border-white/10 pt-6">
            {" "}
            <div className="text-center">
              {" "}
              <p className="text-[#F59E0B] font-black text-lg">
                {formatTime(timeSpent)}
              </p>{" "}
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Time
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <p className="text-[#F59E0B] font-black text-lg">
                {Math.round(timeSpent / questions.length)}s
              </p>{" "}
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Per Q
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <p className="text-[#F59E0B] font-black text-lg">
                {questions.length - score}
              </p>{" "}
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Wrong
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="grid grid-cols-2 gap-4">
          {" "}
          <button
            onClick={() => {
              setReviewMode(true);
              setCurrent(0);
            }}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 text-[#060818] dark:text-white rounded-2xl font-black text-sm hover:bg-gray-50 dark:hover:bg-white/20 transition-all"
          >
            {" "}
            <BookOpen size={16} /> Review All{" "}
          </button>{" "}
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-[#F59E0B] text-[#060818] rounded-2xl font-black text-sm hover:shadow-lg hover:shadow-[#F59E0B]/20 transition-all"
          >
            {" "}
            <Zap size={16} fill="currentColor" /> Save Score{" "}
          </button>{" "}
        </div>{" "}
        <button
          onClick={onBack}
          className="w-full text-center text-xs text-gray-400 hover:text-[#F59E0B] transition-colors font-bold uppercase tracking-widest py-2"
        >
          {" "}
          ← Try Another Set{" "}
        </button>{" "}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      {" "}
      {/* Header Bar */}{" "}
      <div className="flex items-center justify-between">
        {" "}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          {" "}
          <ArrowLeft size={16} /> Sets{" "}
        </button>{" "}
        <div className="flex items-center gap-3">
          {" "}
          <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-white/10 px-3 py-1.5 rounded-xl">
            {" "}
            <Clock size={14} className="text-[#F59E0B]" />{" "}
            <span className="font-black text-[#060818] dark:text-white text-sm">
              {formatTime(timeSpent)}
            </span>{" "}
          </div>{" "}
          <div className="bg-[#F59E0B] text-[#060818] px-3 py-1.5 rounded-xl font-black text-sm">
            {" "}
            {current + 1}/{questions.length}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Progress Bar */}{" "}
      <div className="h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
        {" "}
        <motion.div
          className="h-full bg-[#F59E0B] rounded-full"
          animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />{" "}
      </div>{" "}
      {/* Question Card */}{" "}
      <AnimatePresence mode="wait">
        {" "}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 p-6 space-y-5"
        >
          {" "}
          <div className="flex items-center gap-2 flex-wrap">
            {" "}
            <span
              className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${q.difficulty === "easy" ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400" : q.difficulty === "hard" ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400" : "bg-amber-100 text-amber-700 dark:bg-[#F59E0B]/20 dark:text-[#F59E0B]"}`}
            >
              {q.difficulty}
            </span>{" "}
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-lg">
              {q.topic}
            </span>{" "}
          </div>{" "}
          <p className="text-base font-bold text-[#060818] dark:text-white leading-relaxed">
            {q.question}
          </p>{" "}
          <div className="space-y-3">
            {" "}
            {q.options.map((opt, i) => {
              let cls =
                "bg-gray-50 dark:bg-white/5 border-transparent text-gray-700 dark:text-gray-300 hover:border-[#F59E0B]/50 hover:bg-[#F59E0B]/5";
              if (answered) {
                if (i === q.correct)
                  cls =
                    "bg-green-50 dark:bg-green-500/10 border-green-500 text-green-800 dark:text-green-300";
                else if (i === selectedAnswer)
                  cls =
                    "bg-red-50 dark:bg-red-500/10 border-red-400 text-red-700 dark:text-red-300";
                else
                  cls =
                    "bg-gray-50 dark:bg-white/5 border-transparent text-gray-400 dark:text-gray-500 opacity-60";
              } else if (selectedAnswer === i) {
                cls =
                  "bg-[#F59E0B]/10 border-[#F59E0B] text-[#060818] dark:text-white";
              }
              return (
                <motion.button
                  key={i}
                  whileTap={!answered ? { scale: 0.98 } : {}}
                  onClick={() => handleSelect(i)}
                  disabled={answered}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all text-sm font-medium ${cls}`}
                >
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <span className="font-black text-[10px] uppercase w-5 flex-shrink-0 opacity-60">
                      {" "}
                      {["A", "B", "C", "D"][i]}{" "}
                    </span>{" "}
                    <span className="flex-1">{opt}</span>{" "}
                    {answered && i === q.correct && (
                      <CheckCircle2
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                    )}{" "}
                    {answered && i === selectedAnswer && !isCorrect && (
                      <XCircle
                        size={16}
                        className="text-red-500 flex-shrink-0"
                      />
                    )}{" "}
                  </div>{" "}
                </motion.button>
              );
            })}{" "}
          </div>{" "}
          <AnimatePresence>
            {" "}
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                {" "}
                <div
                  className={`rounded-2xl p-4 border ${isCorrect ? "bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20" : "bg-amber-50 dark:bg-[#F59E0B]/10 border-amber-200 dark:border-[#F59E0B]/20"}`}
                >
                  {" "}
                  <div className="flex items-center gap-2 mb-2">
                    {" "}
                    {isCorrect ? (
                      <CheckCircle2 size={14} className="text-green-600" />
                    ) : (
                      <Lightbulb size={14} className="text-[#F59E0B]" />
                    )}{" "}
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest ${isCorrect ? "text-green-700" : "text-[#F59E0B]"}`}
                    >
                      {" "}
                      {isCorrect ? "Correct!" : "Explanation"}{" "}
                    </span>{" "}
                  </div>{" "}
                  <p className="text-xs font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                    {q.explanation}
                  </p>{" "}
                </div>{" "}
              </motion.div>
            )}{" "}
          </AnimatePresence>{" "}
        </motion.div>{" "}
      </AnimatePresence>{" "}
      {/* Navigation */}{" "}
      {answered && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleNext}
          className="w-full py-4 bg-[#060818] dark:bg-[#F59E0B] text-white dark:text-[#060818] rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl"
        >
          {" "}
          {current < questions.length - 1 ? (
            <>
              <ArrowRight size={18} /> Next Question
            </>
          ) : (
            <>
              <Trophy size={18} /> View Results
            </>
          )}{" "}
        </motion.button>
      )}{" "}
      {/* Question nav dots */}{" "}
      <div className="flex flex-wrap gap-1.5 justify-center">
        {" "}
        {questions.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "w-4 bg-[#F59E0B]" : answers[i] !== null ? (answers[i] === questions[i].correct ? "bg-green-400" : "bg-red-400") : "bg-gray-200 dark:bg-white/20"}`}
          />
        ))}{" "}
      </div>{" "}
    </motion.div>
  );
}
export default function GKSectionalTest({
  onComplete,
  onBack,
}: GKSectionalTestProps) {
  const [selectedSet, setSelectedSet] = React.useState<number | null>(null);
  const [questions, setQuestions] = React.useState<SectionalQuestion[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const loadSet = async (setNum: number) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await gkSupabase
        .from("gk_sectional_questions")
        .select("*")
        .eq("set_number", setNum)
        .order("id");
      if (err) throw err;
      if (!data || data.length === 0)
        throw new Error("No questions found for this set.");
      setQuestions(data as SectionalQuestion[]);
      setSelectedSet(setNum);
    } catch (e: unknown) {
      const message =
        e instanceof Error ? e.message : "Failed to load questions.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        {" "}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          {" "}
          <RefreshCw size={32} className="text-[#F59E0B]" />{" "}
        </motion.div>{" "}
        <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
          Loading questions…
        </p>{" "}
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        {" "}
        <AlertCircle size={40} className="text-red-500" />{" "}
        <p className="font-bold text-[#060818] dark:text-white">
          Failed to load questions
        </p>{" "}
        <p className="text-sm text-gray-500">{error}</p>{" "}
        <button
          onClick={() => {
            setError(null);
            setSelectedSet(null);
          }}
          className="px-5 py-2 bg-[#F59E0B] text-[#060818] rounded-xl font-black text-sm"
        >
          {" "}
          Try Again{" "}
        </button>{" "}
      </div>
    );
  }
  if (!selectedSet) {
    return <SetSelector onSelect={loadSet} onBack={onBack} />;
  }
  return (
    <QuizScreen
      questions={questions}
      setNum={selectedSet}
      onComplete={onComplete || (() => {})}
      onBack={() => setSelectedSet(null)}
    />
  );
}
