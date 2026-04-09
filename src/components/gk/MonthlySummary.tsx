'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, ArrowLeft, Clock, Calendar, Trophy, CheckCircle2, AlertCircle, ArrowRight, Zap, Share2, Bookmark } from 'lucide-react';

interface NewsItem {
    id: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    summary: string;
    content: string;
    image?: string;
}

interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

const MONTHLY_NEWS: NewsItem[] = [
  {
        id: '1',
        title: 'Supreme Court Clarifies Governor\'s Powers in Legislative Matters',
        category: 'Legal Reasoning',
        date: 'April 5, 2026',
        readTime: '12 min',
        summary: 'A landmark judgment by a seven-judge bench has redefined the scope of a Governor\'s power to withhold assent to bills passed by the State Legislature.',
        content: `
        The Supreme Court of India, in a significant constitutional clarification, has ruled that a Governor cannot indefinitely sit on bills passed by the State Legislature. The judgment, delivered by a seven-judge bench headed by the Chief Justice, emphasizes that the Governor is a symbolic head and must act on the aid and advice of the Council of Ministers.

        Key Highlights of the Judgment:

        1. Primacy of the Legislature: The court held that the power to withhold assent under Article 200 must be exercised reasonably and promptly.

        2. Return of Bills: If a Governor chooses to withhold assent, they must return the bill to the Legislature "as soon as possible" with a message requesting reconsideration.

        3. Re-passage of Bills: If the Legislature passes the bill again, with or without amendments, the Governor is constitutionally mandated to grant assent.

        4. Constitutional Deadlock: The court noted that delaying bills creates a constitutional deadlock that undermines the democratic process and the federal structure of the Constitution.

        Legal Implications for CLAT: Students should focus on Article 200 and Article 201 of the Constitution. Understand the difference between "withholding assent," "granting assent," and "reserving for the President." This judgment is a direct application of the principle of "Constitutional Morality" and "Federalism."
            `,
        image: 'https://picsum.photos/seed/court/800/400'
  },
  {
        id: '2',
        title: 'New Digital Personal Data Protection Rules Notified',
        category: 'Current Affairs',
        date: 'April 3, 2026',
        readTime: '10 min',
        summary: 'The Ministry of Electronics and IT has released the long-awaited rules for the DPDP Act 2023, outlining strict compliance for data fiduciaries.',
        content: `
        The Government of India has officially notified the rules for the Digital Personal Data Protection (DPDP) Act, 2023. These rules provide the operational framework for how personal data can be processed, stored, and protected in the digital age.

        Major Provisions:

        1. Consent Managers: Introduction of registered entities that will act as intermediaries for users to manage their consent across multiple platforms.

        2. Data Breach Notifications: Fiduciaries must notify the Data Protection Board and affected individuals within 72 hours of discovering a breach.

        3. Rights of Data Principals: Users now have clear paths to access, correct, and erase their data.

        4. Significant Data Fiduciaries (SDFs): Large platforms will face higher compliance burdens, including mandatory Data Protection Impact Assessments (DPIAs).

        Why it matters for CLAT: Privacy is a fundamental right under Article 21 (Puttaswamy judgment). The DPDP Act is the legislative realization of this right. Expect questions on the "Data Protection Board," "Consent Architecture," and "Cross-border data transfers."
            `,
        image: 'https://picsum.photos/seed/data/800/400'
  },
  {
        id: '3',
        title: 'India-EFTA Trade and Economic Partnership Agreement (TEPA)',
        category: 'Economy',
        date: 'March 28, 2026',
        readTime: '15 min',
        summary: 'India has signed a historic trade deal with the European Free Trade Association (EFTA), promising $100 billion in investment over 15 years.',
        content: `
        India and the EFTA (Switzerland, Norway, Iceland, and Liechtenstein) have signed a Trade and Economic Partnership Agreement (TEPA). This is India's first trade deal with a European bloc.

        Key Features:

        1. Investment Commitment: EFTA countries have committed to investing $100 billion in India over the next 15 years, aiming to create 1 million jobs.

        2. Tariff Reductions: India will phase out customs duties on 95.3% of industrial goods from EFTA countries.

        3. Services Sector: Improved access for Indian professionals in sectors like IT, healthcare, and engineering.

        4. Intellectual Property: The deal includes a chapter on IPR, balancing innovation with public health interests.

        CLAT Focus: Understand the difference between a Free Trade Agreement (FTA) and a TEPA. Note the member countries of EFTA (often confused with the EU). Focus on the "Investment Chapter" which is a unique feature of this agreement.
            `,
        image: 'https://picsum.photos/seed/trade/800/400'
  }
  ];

const MONTHLY_QUIZ: QuizQuestion[] = [
  {
        id: 'q1',
        question: 'Under which Article of the Indian Constitution does the Governor have the power to grant or withhold assent to a Bill?',
        options: ['Article 161', 'Article 200', 'Article 213', 'Article 123'],
        correctAnswer: 1,
        explanation: 'Article 200 of the Constitution deals with the assent to Bills passed by the State Legislature. Article 161 is about pardoning powers, 213 is about Ordinances by Governor, and 123 is about Ordinances by President.'
  },
  {
        id: 'q2',
        question: 'The DPDP Act 2023 mandates that data breaches must be reported within how many hours?',
        options: ['24 hours', '48 hours', '72 hours', '96 hours'],
        correctAnswer: 2,
        explanation: 'The notified rules for the Digital Personal Data Protection Act, 2023, require data fiduciaries to report breaches within 72 hours.'
  },
  {
        id: 'q3',
        question: 'Which of the following countries is NOT a member of the EFTA bloc?',
        options: ['Switzerland', 'Norway', 'Iceland', 'Austria'],
        correctAnswer: 3,
        explanation: 'EFTA consists of four countries: Switzerland, Norway, Iceland, and Liechtenstein. Austria is a member of the European Union (EU), not EFTA.'
  }
  ];

export default function MonthlySummary() {
    const [selectedNews, setSelectedNews] = React.useState<NewsItem | null>(null);
    const [view, setView] = React.useState<'news' | 'quiz'>('news');
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [showResult, setShowResult] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
    const [isAnswered, setIsAnswered] = React.useState(false);

  const handleOptionSelect = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);
        if (index === MONTHLY_QUIZ[currentQuestion].correctAnswer) {
                setScore(score + 1);
        }
  };

  const nextQuestion = () => {
        if (currentQuestion + 1 < MONTHLY_QUIZ.length) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(null);
                setIsAnswered(false);
        } else {
                setShowResult(true);
        }
  };

  const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
        setIsAnswered(false);
  };

  if (selectedNews) {
        return (
                <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
                        >
                        <button
                                    onClick={() => setSelectedNews(null)}
                                    className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
                                  >
                                  <ArrowLeft size={16} /> Back to Summary
                        </button>
                        <div className="space-y-5 sm:space-y-6">
                                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                              <span className="px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-[10px] font-black uppercase tracking-widest">
                                                {selectedNews.category}
                                              </span>
                                              <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1 uppercase tracking-widest">
                                                            <Calendar size={12} /> {selectedNews.date}
                                              </span>
                                              <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1 uppercase tracking-widest">
                                                            <Clock size={12} /> {selectedNews.readTime}
                                              </span>
                                  </div>
                                  <h1 className="text-2xl sm:text-4xl font-black text-[#060818] dark:text-white leading-tight">
                                    {selectedNews.title}
                                  </h1>h1>
                          {selectedNews.image && (
                                      <div className="aspect-video rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/10 shadow-2xl">
                                                    <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                      </div>
                                  )}
                                  <div className="prose prose-sm sm:prose-lg dark:prose-invert max-w-none">
                                    {selectedNews.content.split('\n').map((paragraph, i) => (
                                        <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                                          {paragraph.trim()}
                                        </p>
                                      ))}
                                  </div>
                                  <div className="pt-8 sm:pt-12 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                                              <div className="flex gap-4">
                                                            <button className="flex items-center gap-2 text-gray-400 hover:text-[#F59E0B] transition-colors">
                                                                            <Share2 size={20} />
                                                            </button>
                                                            <button className="flex items-center gap-2 text-gray-400 hover:text-[#F59E0B] transition-colors">
                                                                            <Bookmark size={20} />
                                                            </button>
                                              </div>
                                              <button className="flex items-center gap-2 text-[#F59E0B] font-bold text-sm">
                                                            Next Topic <ChevronRight size={16} />
                                              </button>
                                  </div>
                        </div>
                </motion.div>
              );
  }
  
    return (
          <div className="space-y-8 sm:space-y-12">
            {/* Header & View Toggle */}
                <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="space-y-2">
                                  <h1 className="text-2xl sm:text-4xl font-black text-[#060818] dark:text-white tracking-tight">
                                              April 2026 Summary
                                  </h1>h1>
                                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                                              Curated GK & Legal updates specifically for CLAT aspirants.
                                  </p>
                        </div>
                        <div className="flex bg-gray-100 dark:bg-white/5 p-1.5 rounded-2xl border border-gray-200 dark:border-white/10 self-start">
                                  <button
                                                onClick={() => setView('news')}
                                                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                                                                view === 'news' ? 'bg-white dark:bg-[#F59E0B] text-[#060818] shadow-sm' : 'text-gray-500 hover:text-[#060818] dark:hover:text-white'
                                                }`}
                                              >
                                              <BookOpen size={16} /> <span className="hidden sm:inline">News Updates</span><span className="sm:hidden">News</span>
                                  </button>
                                  <button
                                                onClick={() => setView('quiz')}
                                                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                                                                view === 'quiz' ? 'bg-white dark:bg-[#F59E0B] text-[#060818] shadow-sm' : 'text-gray-500 hover:text-[#060818] dark:hover:text-white'
                                                }`}
                                              >
                                              <Zap size={16} /> <span className="hidden sm:inline">Monthly Quiz</span><span className="sm:hidden">Quiz</span>
                                  </button>
                        </div>
                </div>
          
                <AnimatePresence mode="wait">
                  {view === 'news' ? (
                      <motion.div
                                    key="news-list"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
                                  >
                        {MONTHLY_NEWS.map((news) => (
                                                  <motion.div
                                                                    key={news.id}
                                                                    whileHover={{ y: -4 }}
                                                                    onClick={() => setSelectedNews(news)}
                                                                    className="group bg-white dark:bg-white/5 rounded-[1.5rem] sm:rounded-[2.5rem] border border-gray-100 dark:border-white/10 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-[#F59E0B]/10 transition-all duration-300"
                                                                  >
                                                                  <div className="aspect-[16/10] overflow-hidden relative">
                                                                                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                                                                                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                                                                                                        <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-[#060818]/90 backdrop-blur-md text-[10px] font-black text-[#060818] dark:text-[#F59E0B] uppercase tracking-widest shadow-xl">
                                                                                                          {news.category}
                                                                                                          </span>
                                                                                      </div>
                                                                  </div>
                                                                  <div className="p-5 sm:p-8 space-y-3 sm:space-y-4">
                                                                                    <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest flex-wrap">
                                                                                                        <Calendar size={11} /> {news.date}
                                                                                                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                                                                                        <Clock size={11} /> {news.readTime}
                                                                                      </div>
                                                                                    <h3 className="text-base sm:text-xl font-black text-[#060818] dark:text-white group-hover:text-[#F59E0B] transition-colors leading-tight line-clamp-2">
                                                                                      {news.title}
                                                                                      </h3>h3>
                                                                                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-2 font-medium">
                                                                                      {news.summary}
                                                                                      </p>
                                                                                    <div className="pt-2 sm:pt-4 flex items-center gap-2 text-[#F59E0B] font-bold text-xs uppercase tracking-widest">
                                                                                                        Read Full Story <ChevronRight size={13} />
                                                                                      </div>
                                                                  </div>
                                                  </motion.div>
                                                ))}
                      </motion.div>
                    ) : null}
                  {view === 'quiz' ? (
                      <motion.div
                                    key="quiz-section"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="max-w-3xl mx-auto"
                                  >
                        {!showResult ? (
                                                  <div className="bg-white dark:bg-white/5 rounded-[2rem] sm:rounded-[3rem] border border-gray-100 dark:border-white/10 p-5 sm:p-10 space-y-6 sm:space-y-10 shadow-2xl">
                                                    {/* Quiz Header */}
                                                                  <div className="flex items-start sm:items-center justify-between gap-3">
                                                                                    <div className="space-y-1 flex-1">
                                                                                                        <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-[0.2em]">Question {currentQuestion + 1} of {MONTHLY_QUIZ.length}</p>
                                                                                                        <div className="h-1.5 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                                                                                                              <motion.div
                                                                                                                                                        className="h-full bg-[#F59E0B]"
                                                                                                                                                        initial={{ width: 0 }}
                                                                                                                                                        animate={{ width: `${((currentQuestion + 1) / MONTHLY_QUIZ.length) * 100}%` }}
                                                                                                                                                      />
                                                                                                          </div>
                                                                                      </div>
                                                                                    <div className="flex items-center gap-2 bg-[#F59E0B]/10 px-3 sm:px-4 py-2 rounded-2xl shrink-0">
                                                                                                        <Trophy size={16} className="text-[#F59E0B]" />
                                                                                                        <span className="text-sm font-black text-[#F59E0B]">{score} pts</span>
                                                                                      </div>
                                                                  </div>
                                                  
                                                    {/* Question */}
                                                                  <h2 className="text-lg sm:text-2xl font-black text-[#060818] dark:text-white leading-tight">
                                                                    {MONTHLY_QUIZ[currentQuestion].question}
                                                                  </h2>h2>
                                                  
                                                    {/* Options */}
                                                                  <div className="space-y-3">
                                                                    {MONTHLY_QUIZ[currentQuestion].options.map((option, idx) => {
                                                                        const isCorrect = idx === MONTHLY_QUIZ[currentQuestion].correctAnswer;
                                                                        const isSelected = idx === selectedOption;
                                                                        let bgColor = 'bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10';
                                                                        let borderColor = 'border-transparent';
                                                                        let textColor = 'text-[#060818] dark:text-white';
                                                    
                                                                        if (isAnswered) {
                                                                                                if (isCorrect) {
                                                                                                                          bgColor = 'bg-green-500/10';
                                                                                                                          borderColor = 'border-green-500';
                                                                                                                          textColor = 'text-green-600 dark:text-green-400';
                                                                                                  } else if (isSelected) {
                                                                                                                          bgColor = 'bg-red-500/10';
                                                                                                                          borderColor = 'border-red-500';
                                                                                                                          textColor = 'text-red-600 dark:text-red-400';
                                                                                                  }
                                                                        } else if (isSelected) {
                                                                                                borderColor = 'border-[#F59E0B]';
                                                                        }
                                                    
                                                                        return (
                                                                                                <button
                                                                                                                          key={idx}
                                                                                                                          disabled={isAnswered}
                                                                                                                          onClick={() => handleOptionSelect(idx)}
                                                                                                                          className={`w-full p-3 sm:p-5 rounded-[1.2rem] sm:rounded-[1.5rem] border-2 text-left transition-all flex items-center justify-between group ${bgColor} ${borderColor} ${textColor}`}
                                                                                                                        >
                                                                                                                        <span className="font-bold text-sm sm:text-base">{option}</span>
                                                                                                  {isAnswered && isCorrect && <CheckCircle2 size={20} className="text-green-500 shrink-0" />}
                                                                                                  {isAnswered && isSelected && !isCorrect && <AlertCircle size={20} className="text-red-500 shrink-0" />}
                                                                                                  </button>
                                                                                              );
                                                  })}
                                                                  </div>
                                                  
                                                    {/* Explanation */}
                                                    {isAnswered && (
                                                                      <motion.div
                                                                                            initial={{ opacity: 0, y: 10 }}
                                                                                            animate={{ opacity: 1, y: 0 }}
                                                                                            className="p-4 sm:p-6 rounded-2xl bg-[#060818]/5 dark:bg-white/5 border-l-4 border-[#F59E0B] space-y-2"
                                                                                          >
                                                                                          <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest">Explanation</p>
                                                                                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                                                                                            {MONTHLY_QUIZ[currentQuestion].explanation}
                                                                                            </p>
                                                                      </motion.div>
                                                                    )}
                                                  
                                                    {/* Next Button */}
                                                    {isAnswered && (
                                                                      <motion.button
                                                                                            initial={{ opacity: 0 }}
                                                                                            animate={{ opacity: 1 }}
                                                                                            onClick={nextQuestion}
                                                                                            className="w-full bg-[#060818] dark:bg-[#F59E0B] text-white dark:text-[#060818] py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                                                                                          >
                                                                        {currentQuestion + 1 === MONTHLY_QUIZ.length ? 'Finish Quiz' : 'Next Question'}
                                                                                          <ArrowRight size={20} />
                                                                      </motion.button>
                                                                    )}
                                                  </div>
                                                ) : (
                                                  <div className="bg-white dark:bg-white/5 rounded-[2rem] sm:rounded-[3rem] border border-gray-100 dark:border-white/10 p-8 sm:p-16 text-center space-y-6 sm:space-y-8 shadow-2xl">
                                                                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#F59E0B]/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                                                                                    <Trophy size={40} className="text-[#F59E0B]" />
                                                                  </div>
                                                                  <div className="space-y-2">
                                                                                    <h2 className="text-2xl sm:text-4xl font-black text-[#060818] dark:text-white">Quiz Completed!</h2>h2>
                                                                                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">Great effort on staying updated with April's news.</p>
                                                                  </div>
                                                                  <div className="text-5xl sm:text-6xl font-black text-[#F59E0B]">
                                                                    {score} / {MONTHLY_QUIZ.length}
                                                                  </div>
                                                                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-8">
                                                                                    <button
                                                                                                          onClick={resetQuiz}
                                                                                                          className="px-8 sm:px-10 py-4 bg-[#060818] dark:bg-white/10 text-white rounded-2xl font-bold hover:bg-gray-800 dark:hover:bg-white/20 transition-all text-sm sm:text-base"
                                                                                                        >
                                                                                                        Try Again
                                                                                      </button>
                                                                                    <button
                                                                                                          onClick={() => setView('news')}
                                                                                                          className="px-8 sm:px-10 py-4 bg-[#F59E0B] text-[#060818] rounded-2xl font-bold hover:shadow-xl hover:shadow-[#F59E0B]/20 transition-all text-sm sm:text-base"
                                                                                                        >
                                                                                                        Back to News
                                                                                      </button>
                                                                  </div>
                                                  </div>
                                  )}
                      </motion.div>
                    ) : null}
                </AnimatePresence>
          </div>
        );
}</motion.div>
