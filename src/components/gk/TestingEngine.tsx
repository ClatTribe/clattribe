'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  History,
  FileText,
  Target,
  ChevronRight,
  Clock,
  Trophy,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Timer,
  TrendingDown,
  TrendingUp,
  Lightbulb,
} from 'lucide-react';
import GKPassageTest from './PassageTest';
import GKSectionalTest from './GKSectionalTest';
import GKWeeklyTest from './GKWeeklyTest';
import GKPYQTest from './GKPYQTest';

type TestType = 'weekly' | 'pyq' | 'mock' | 'sectional' | 'passage' | 'custom' | null;

interface TestCategory {
  id: TestType;
  title: string;
  description: string;
  icon: React.ReactNode;
  count: string;
  color: string;
  accent: string;
}

const CATEGORIES: TestCategory[] = [
  {
    id: 'weekly',
    title: 'Weekly Quizzes',
    description: 'Fresh questions every Sunday covering the week\'s top current affairs.',
    icon: <Zap size={24} />,
    count: '12 Available',
    color: 'bg-[#F59E0B]',
    accent: 'text-[#060818]'
  },
  {
    id: 'pyq',
    title: 'PYQs (2020-2026)',
    description: 'Official Previous Year Questions with detailed legal explanations.',
    icon: <History size={24} />,
    count: '6 Years',
    color: 'bg-blue-500',
    accent: 'text-white'
  },
  {
    id: 'mock',
    title: 'Full Mock Tests',
    description: '120-minute simulated exams to build your speed and accuracy.',
    icon: <Target size={24} />,
    count: '15 Mocks',
    color: 'bg-purple-500',
    accent: 'text-white'
  },
  {
    id: 'sectional',
    title: 'GK Sectionals',
    description: 'Focused 30-question sets purely for General Knowledge & Current Affairs.',
    icon: <FileText size={24} />,
    count: '5 Sets',
    color: 'bg-green-500',
    accent: 'text-white'
  },
  {
    id: 'passage',
    title: 'Passage Practice',
    description: 'Deductive reasoning practice based on recent legal passages.',
    icon: <BookOpen size={24} />,
    count: '5 Tests',
    color: 'bg-[#060818]',
    accent: 'text-[#F59E0B]'
  }
];

const TOPICS = [
  'Legal Reasoning',
  'Current Affairs',
  'General Knowledge',
  'Logical Reasoning',
  'English Language'
];

const QUESTION_TYPES = [
  'Passage Based',
  'Direct MCQ',
  'True/False'
];

const TIME_LIMITS = [
  { label: '15 Mins', value: 15 },
  { label: '30 Mins', value: 30 },
  { label: '60 Mins', value: 60 },
  { label: '120 Mins', value: 120 }
];

function CustomTestBuilder({ onBack }: { onBack: () => void }) {
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);
  const [timeLimit, setTimeLimit] = React.useState<number>(30);
  const [isBuilding, setIsBuilding] = React.useState(false);

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleStart = () => {
    setIsBuilding(true);
    setTimeout(() => {
      setIsBuilding(false);
      alert('Custom test generation logic would go here! Starting test with selected parameters...');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Engine
        </button>
        <h2 className="text-2xl font-black text-[#060818] dark:text-white">Configure Custom Test</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Topics & Types */}
        <div className="lg:col-span-2 space-y-8">
          {/* Topics */}
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-6">
            <h3 className="text-lg font-black text-[#060818] dark:text-white flex items-center gap-2">
              <BookOpen size={20} className="text-[#F59E0B]" />
              Select Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              {TOPICS.map(topic => (
                <button
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all border-2 ${
                    selectedTopics.includes(topic)
                      ? 'bg-[#F59E0B] border-[#F59E0B] text-[#060818]'
                      : 'bg-gray-50 dark:bg-white/5 border-transparent text-gray-500 hover:border-gray-200'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Question Types */}
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-6">
            <h3 className="text-lg font-black text-[#060818] dark:text-white flex items-center gap-2">
              <FileText size={20} className="text-[#F59E0B]" />
              Question Types
            </h3>
            <div className="flex flex-wrap gap-3">
              {QUESTION_TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all border-2 ${
                    selectedTypes.includes(type)
                      ? 'bg-[#060818] border-[#060818] text-white'
                      : 'bg-gray-50 dark:bg-white/5 border-transparent text-gray-500 hover:border-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Time & Summary */}
        <div className="space-y-8">
          {/* Time Limit */}
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-6">
            <h3 className="text-lg font-black text-[#060818] dark:text-white flex items-center gap-2">
              <Clock size={20} className="text-[#F59E0B]" />
              Time Limit
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {TIME_LIMITS.map(limit => (
                <button
                  key={limit.value}
                  onClick={() => setTimeLimit(limit.value)}
                  className={`p-4 rounded-2xl font-bold text-sm transition-all border-2 ${
                    timeLimit === limit.value
                      ? 'bg-[#F59E0B] border-[#F59E0B] text-[#060818]'
                      : 'bg-gray-50 dark:bg-white/5 border-transparent text-gray-500 hover:border-gray-200'
                  }`}
                >
                  {limit.label}
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <div className="bg-[#060818] p-8 rounded-[2.5rem] space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Test Summary</p>
              <div className="space-y-1">
                <p className="text-white font-bold text-sm flex justify-between">
                  Topics: <span>{selectedTopics.length || 'All'}</span>
                </p>
                <p className="text-white font-bold text-sm flex justify-between">
                  Types: <span>{selectedTypes.length || 'All'}</span>
                </p>
                <p className="text-white font-bold text-sm flex justify-between">
                  Duration: <span>{timeLimit} Mins</span>
                </p>
              </div>
            </div>
            <button
              disabled={isBuilding}
              onClick={handleStart}
              className="w-full bg-[#F59E0B] text-[#060818] py-4 rounded-2xl font-black text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isBuilding ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Clock size={24} />
                </motion.div>
              ) : (
                <>
                  Start Custom Test
                  <Zap size={20} fill="currentColor" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface TestResult {
  id: string;
  score: number;
  total: number;
  timeSpent: number;
  category: string;
  date: string;
  topicBreakdown: { topic: string; correct: number; total: number }[];
  suggestions: string[];
}

function FeedbackScreen({ result, onBack }: { result: TestResult; onBack: () => void }) {
  const percentage = Math.round((result.score / result.total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Engine
        </button>
        <h2 className="text-2xl font-black text-[#060818] dark:text-white">Performance Analysis</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Score Card */}
        <div className="bg-[#060818] p-10 rounded-[3rem] text-center space-y-6 shadow-2xl">
          <div className="relative inline-block">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-white/10"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="58"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={364.4}
                initial={{ strokeDashoffset: 364.4 }}
                animate={{ strokeDashoffset: 364.4 - (364.4 * percentage) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-[#F59E0B]"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-white">{percentage}%</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-white font-black text-2xl">{result.score} / {result.total}</p>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Correct Answers</p>
          </div>
          <div className="pt-4 border-t border-white/10 flex justify-between items-center">
            <div className="text-left">
              <p className="text-white/50 text-[10px] font-black uppercase tracking-widest">Time Taken</p>
              <p className="text-white font-bold">{Math.floor(result.timeSpent / 60)}m {result.timeSpent % 60}s</p>
            </div>
            <p className="text-[#F59E0B] font-black text-sm uppercase tracking-widest">
              {percentage >= 80 ? 'Excellent!' : percentage >= 50 ? 'Good!' : 'Retry!'}
            </p>
          </div>
        </div>

        {/* Breakdown & Suggestions */}
        <div className="lg:col-span-2 space-y-8">
          {/* Breakdown */}
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-6">
            <h3 className="text-lg font-black text-[#060818] dark:text-white flex items-center gap-2">
              <Target size={20} className="text-[#F59E0B]" />
              Topic Breakdown
            </h3>
            <div className="space-y-4">
              {result.topicBreakdown.map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-[#060818] dark:text-white">{item.topic}</span>
                    <span className="text-gray-500">{item.correct}/{item.total}</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${item.correct === item.total ? 'bg-green-500' : 'bg-[#F59E0B]'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.correct / item.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-amber-50 dark:bg-[#F59E0B]/10 p-8 rounded-[2.5rem] border border-amber-100 dark:border-[#F59E0B]/20 space-y-4">
            <h3 className="text-lg font-black text-[#F59E0B] flex items-center gap-2">
              <Zap size={20} fill="currentColor" />
              Areas for Improvement
            </h3>
            <ul className="space-y-3">
              {result.suggestions.map((suggestion, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-amber-900/70 dark:text-[#F59E0B]/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={onBack}
          className="px-10 py-4 bg-white dark:bg-white/10 border border-gray-100 dark:border-white/10 text-[#060818] dark:text-white rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-white/20 transition-all"
        >
          Retake Test
        </button>
        <button
          onClick={onBack}
          className="px-10 py-4 bg-[#F59E0B] text-[#060818] rounded-2xl font-bold hover:shadow-xl hover:shadow-[#F59E0B]/20 transition-all"
        >
          Explore More Tests
        </button>
      </div>
    </motion.div>
  );
}

interface TestingEngineProps {
  hasMockAccess?: boolean;
  onUnlockMocks?: () => void;
}

export default function TestingEngine({ hasMockAccess = false, onUnlockMocks }: TestingEngineProps) {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = React.useState<TestType>(null);
  const [testResult, setTestResult] = React.useState<TestResult | null>(null);
  const [history, setHistory] = React.useState<TestResult[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('clat_test_history');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const insights = React.useMemo(() => {
    if (history.length === 0) return null;

    const topicStats: Record<string, { correct: number; total: number; time: number; count: number }> = {};

    history.forEach(test => {
      test.topicBreakdown.forEach(item => {
        if (!topicStats[item.topic]) {
          topicStats[item.topic] = { correct: 0, total: 0, time: 0, count: 0 };
        }
        topicStats[item.topic].correct += item.correct;
        topicStats[item.topic].total += item.total;
        // Distribute test time proportionally to total questions in topic (rough estimate)
        const topicWeight = item.total / test.total;
        topicStats[item.topic].time += test.timeSpent * topicWeight;
        topicStats[item.topic].count += 1;
      });
    });

    const analyzedTopics = Object.entries(topicStats).map(([topic, stats]) => ({
      topic,
      accuracy: Math.round((stats.correct / stats.total) * 100),
      avgTimePerQuestion: Math.round(stats.time / stats.total),
      totalQuestions: stats.total
    }));

    const weakAreas = analyzedTopics
      .filter(t => t.accuracy < 70)
      .sort((a, b) => a.accuracy - b.accuracy);

    const slowAreas = analyzedTopics
      .filter(t => t.avgTimePerQuestion > 60) // Assuming > 60s per question is slow
      .sort((a, b) => b.avgTimePerQuestion - a.avgTimePerQuestion);

    return { analyzedTopics, weakAreas, slowAreas };
  }, [history]);

  const handleTestComplete = (results: { score: number; total: number; timeSpent: number }) => {
    // Generate mock feedback based on the score
    const breakdown = [
      { topic: 'Legal Reasoning', correct: results.score, total: results.total },
      { topic: 'Reading Comprehension', correct: Math.max(0, results.score - 1), total: results.total }
    ];

    const suggestions = [];
    if (results.score < results.total) {
      suggestions.push("Focus on the 'Doctrine of Pith and Substance' as your understanding of legislative powers seems slightly incomplete.");
      suggestions.push(`Try to improve your reading speed; you spent ${Math.floor(results.timeSpent / 60)}m ${results.timeSpent % 60}s which is slightly above the target for this passage.`);
    } else {
      suggestions.push(`Excellent speed! You finished in ${Math.floor(results.timeSpent / 60)}m ${results.timeSpent % 60}s.`);
      suggestions.push("Your deductive reasoning is sharp. Keep practicing with 'Hard' difficulty passages.");
    }

    const newResult: TestResult = {
      ...results,
      id: Math.random().toString(36).substr(2, 9),
      category: activeCategory === 'passage' ? 'Passage Practice' : (activeCategory || 'Test'),
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      topicBreakdown: breakdown,
      suggestions
    };

    setTestResult(newResult);
    const newHistory = [newResult, ...history];
    setHistory(newHistory);
    localStorage.setItem('clat_test_history', JSON.stringify(newHistory));
  };

  if (testResult) {
    return <FeedbackScreen result={testResult} onBack={() => { setTestResult(null); setActiveCategory(null); }} />;
  }

  if (activeCategory === 'custom') {
    return <CustomTestBuilder onBack={() => setActiveCategory(null)} />;
  }

  if (activeCategory === 'weekly') {
    return (
      <div className="space-y-6">
        <GKWeeklyTest onComplete={handleTestComplete} onBack={() => setActiveCategory(null)} />
      </div>
    );
  }

  if (activeCategory === 'pyq') {
    return (
      <div className="space-y-6">
        <GKPYQTest onComplete={handleTestComplete} onBack={() => setActiveCategory(null)} />
      </div>
    );
  }

  if (activeCategory === 'passage') {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setActiveCategory(null)}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Engine
        </button>
        <GKPassageTest onComplete={handleTestComplete} />
      </div>
    );
  }

  if (activeCategory === 'sectional') {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setActiveCategory(null)}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Engine
        </button>
        <GKSectionalTest onComplete={handleTestComplete} />
      </div>
    );
  }

  if (activeCategory) {
    return (
      <div className="space-y-8">
        <button
          onClick={() => setActiveCategory(null)}
          className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Engine
        </button>

        <div className="bg-white dark:bg-white/5 p-12 rounded-[3rem] border border-gray-100 dark:border-white/10 text-center space-y-6">
          <div className="w-20 h-20 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mx-auto">
            <Timer size={40} className="text-[#F59E0B]" />
          </div>
          <h2 className="text-3xl font-black text-[#060818] dark:text-white">
            {CATEGORIES.find(c => c.id === activeCategory)?.title} Coming Soon
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto font-medium">
            We are currently curating the most relevant questions for this section. Stay tuned for the next update!
          </p>
          <button
            onClick={() => setActiveCategory(null)}
            className="btn-primary mx-auto"
          >
            Explore Other Tests
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-black text-[#060818] dark:text-white tracking-tight">
          Testing Engine
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Master the art of CLAT with our comprehensive test series.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#060818] dark:bg-white/5 p-6 rounded-3xl border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 bg-[#F59E0B] rounded-2xl flex items-center justify-center text-[#060818]">
            <Trophy size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Tests Taken</p>
            <p className="text-2xl font-black text-white">{history.length}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Avg. Accuracy</p>
            <p className="text-2xl font-black text-[#060818] dark:text-white">
              {history.length > 0
                ? Math.round(history.reduce((acc, curr) => acc + (curr.score / curr.total), 0) / history.length * 100)
                : 0}%
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500">
            <Timer size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Time Spent</p>
            <p className="text-2xl font-black text-[#060818] dark:text-white">
              {Math.round(history.reduce((acc, curr) => acc + curr.timeSpent, 0) / 3600 * 10) / 10}h
            </p>
          </div>
        </div>
      </div>

      {/* Personalized Insights */}
      {insights && (insights.weakAreas.length > 0 || insights.slowAreas.length > 0) && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center text-[#F59E0B]">
              <Lightbulb size={18} />
            </div>
            <h3 className="text-2xl font-black tracking-tight dark:text-white">Personalized Insights</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.weakAreas.length > 0 && (
              <div className="bg-red-50 dark:bg-red-500/5 p-8 rounded-[2.5rem] border border-red-100 dark:border-red-500/10 space-y-4">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-black text-[10px] uppercase tracking-widest">
                  <TrendingDown size={14} />
                  Weak Areas (Accuracy &lt; 70%)
                </div>
                <div className="space-y-4">
                  {insights.weakAreas.slice(0, 2).map(area => (
                    <div key={area.topic} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-black text-[#060818] dark:text-white">{area.topic}</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{area.totalQuestions} questions attempted</p>
                      </div>
                      <span className="text-lg font-black text-red-600">{area.accuracy}%</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setActiveCategory('custom')}
                  className="w-full py-3 bg-red-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all"
                >
                  Practice Weak Topics
                </button>
              </div>
            )}

            {insights.slowAreas.length > 0 && (
              <div className="bg-amber-50 dark:bg-[#F59E0B]/5 p-8 rounded-[2.5rem] border border-amber-100 dark:border-[#F59E0B]/10 space-y-4">
                <div className="flex items-center gap-2 text-[#F59E0B] font-black text-[10px] uppercase tracking-widest">
                  <Clock size={14} />
                  Speed Bottlenecks
                </div>
                <div className="space-y-4">
                  {insights.slowAreas.slice(0, 2).map(area => (
                    <div key={area.topic} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-black text-[#060818] dark:text-white">{area.topic}</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Avg. {area.avgTimePerQuestion}s / question</p>
                      </div>
                      <span className="text-lg font-black text-[#F59E0B]">Slow</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setActiveCategory('passage')}
                  className="w-full py-3 bg-[#F59E0B] text-[#060818] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-amber-400 transition-all"
                >
                  Improve Reading Speed
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat) => {
            const isMock = cat.id === 'mock';

            return (
              <motion.button
                key={cat.id}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => isMock ? router.push('/gk/testing/exams') : setActiveCategory(cat.id)}
                className="group relative bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 text-left transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-[#F59E0B]/10"
              >
                {/* Background Accent */}
                <div className={`absolute -right-8 -top-8 w-32 h-32 ${cat.color} opacity-5 group-hover:opacity-10 rounded-full transition-all duration-500`} />

                {/* "1 Free" badge for mocks */}
                {isMock && (
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg z-10">
                    1 Free
                  </div>
                )}

                <div className="space-y-6 relative">
                  <div className={`w-14 h-14 ${cat.color} ${cat.accent} rounded-2xl flex items-center justify-center shadow-lg shadow-current/10`}>
                    {cat.icon}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black text-[#060818] dark:text-white transition-colors group-hover:text-[#F59E0B]">
                        {cat.title}
                      </h3>
                      <ChevronRight size={20} className="text-gray-300 group-hover:text-[#F59E0B] transition-all group-hover:translate-x-1" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-gray-50 dark:border-white/5">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      {cat.count}
                    </span>
                    <span className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest bg-[#F59E0B]/10 px-2 py-0.5 rounded">
                      Start Now
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}

          {/* Custom Test Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-[#F59E0B] p-8 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform duration-700">
              <Zap size={120} className="text-[#060818]" />
            </div>
            <div className="space-y-4 relative">
              <h3 className="text-2xl font-black text-[#060818] leading-tight">Create Custom Test</h3>
              <p className="text-[#060818]/60 text-sm font-bold">Mix topics and set your own timer for a personalized challenge.</p>
            </div>
            <button
              onClick={() => setActiveCategory('custom')}
              className="bg-[#060818] text-white px-6 py-3 rounded-2xl font-black text-sm w-fit mt-8 relative group-hover:bg-gray-800 transition-colors"
            >
              Build Test
            </button>
          </motion.div>
        </div>

        {/* Test History Sidebar */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black tracking-tight dark:text-white">Test History</h3>
            <History size={20} className="text-[#F59E0B]" />
          </div>

          <div className="bg-white dark:bg-white/5 p-6 rounded-[2.5rem] border border-gray-100 dark:border-white/10 space-y-4 max-h-[600px] overflow-y-auto">
            {history.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto text-gray-300">
                  <History size={24} />
                </div>
                <p className="text-sm font-bold text-gray-400">No tests taken yet.</p>
              </div>
            ) : (
              history.map((test, idx) => (
                <motion.button
                  key={test.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setTestResult(test)}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-left group border border-transparent hover:border-[#F59E0B]/20"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs ${
                    (test.score / test.total) >= 0.8 ? 'bg-emerald-500/10 text-emerald-500' :
                    (test.score / test.total) >= 0.5 ? 'bg-amber-500/10 text-amber-500' :
                    'bg-red-500/10 text-red-500'
                  }`}>
                    {Math.round((test.score / test.total) * 100)}%
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black text-[#060818] dark:text-white group-hover:text-[#F59E0B] transition-colors">
                      {test.category}
                    </p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{test.date}</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-[#F59E0B] transition-all group-hover:translate-x-1" />
                </motion.button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
