'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

interface PassageTestProps {
    onComplete?: (results: { score: number; total: number; timeSpent: number }) => void;
}

export default function PassageTest({ onComplete }: PassageTestProps) {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
    const [answers, setAnswers] = React.useState<(number | null)[]>(new Array(2).fill(null));
    const [toast, setToast] = React.useState<string | null>(null);
    const [timeSpent, setTimeSpent] = React.useState(0);

  React.useEffect(() => {
        const timer = setInterval(() => {
                setTimeSpent(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const showToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
  };

  const passage = {
        title: "The Digital Personal Data Protection Act, 2023",
        content: `The Digital Personal Data Protection Act, 2023 (DPDP Act) is a landmark legislation that aims to provide for the processing of digital personal data in a manner that recognizes both the right of individuals to protect their personal data and the need to process such personal data for lawful purposes. The Act applies to the processing of digital personal data within the territory of India where the personal data is collected in digital form or in non-digital form and digitized subsequently. It also applies to processing of digital personal data outside the territory of India, if such processing is in connection with any activity related to offering of goods or services to Data Principals within the territory of India.

        The Act introduces several key roles: the Data Principal (the individual to whom the personal data relates), the Data Fiduciary (the entity that determines the purpose and means of processing), and the Data Protection Board of India (the adjudicatory body). A significant feature of the Act is the requirement for 'free, specific, informed, unconditional and unambiguous' consent with a clear affirmative action.

        Critics have raised concerns regarding the wide exemptions granted to the Central Government and its agencies, potentially impacting the right to privacy as recognized in the Puttaswamy judgment.`,
        questions: [
          {
                    text: "When does the DPDP Act apply outside India?",
                    options: [
                                "Only if the Fiduciary is Indian",
                                "If connected to offering goods/services to Indian Data Principals",
                                "It never applies outside India",
                                "Only for physical data collected in India"
                              ],
                    correct: 1
          },
          {
                    text: "Which is NOT a requirement for valid consent?",
                    options: ["Unambiguous", "Conditional", "Informed", "Specific"],
                    correct: 1
          }
              ]
  };

  const handleOptionSelect = (idx: number) => {
        setSelectedOption(idx);
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = idx;
        setAnswers(newAnswers);
  };

  const handleSubmit = () => {
        if (onComplete) {
                const score = answers.reduce<number>((acc, ans, i) =>
                          ans === passage.questions[i].correct ? acc + 1 : acc,
                                                             0
                                                           );
                onComplete({ score, total: passage.questions.length, timeSpent });
        } else {
                showToast('Test submitted!');
        }
  };

  return (
        <div className="max-w-7xl mx-auto space-y-5 sm:space-y-8 relative">
          {toast && (
                  <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="fixed bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-[100] bg-[#060818] text-white px-6 py-3 rounded-2xl font-bold shadow-2xl text-center"
                            >
                    {toast}
                  </motion.div>
                )}
        
          {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
                      <h2 className="text-lg sm:text-2xl font-black tracking-tight text-[#060818] dark:text-white leading-tight">
                        {passage.title}
                      </h2>
                      <div className="flex items-center gap-2 bg-[#060818] text-white px-4 py-2 rounded-xl font-mono text-sm font-bold self-start sm:self-auto shrink-0">
                                <Clock size={15} className="text-[#F59E0B]" />
                        {formatTime(timeSpent)}
                      </div>
              </div>
        
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 items-start">
                {/* Passage */}
                      <div className="bg-white dark:bg-white/5 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border border-gray-100 dark:border-white/5 lg:sticky lg:top-24 max-h-[40vh] sm:max-h-none overflow-y-auto sm:overflow-visible">
                        {passage.content.split('\n\n').map((para, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm sm:text-base font-medium">
                        {para}
                      </p>
                    ))}
                      </div>
              
                {/* Questions */}
                      <div className="space-y-4 sm:space-y-6">
                                <div className="bg-white dark:bg-white/5 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border border-gray-100 dark:border-white/5">
                                            <h3 className="text-base sm:text-xl font-black mb-5 sm:mb-8 text-[#060818] dark:text-white leading-tight">
                                              {passage.questions[currentQuestion].text}
                                            </h3>
                                            <div className="space-y-3">
                                              {passage.questions[currentQuestion].options.map((opt, i) => (
                          <button
                                              key={i}
                                              onClick={() => handleOptionSelect(i)}
                                              className={`w-full text-left p-3 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all flex items-center gap-3 ${
                                                                    selectedOption === i
                                                                      ? 'border-[#F59E0B] bg-amber-50/30 dark:bg-amber-500/10'
                                                                      : 'border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10'
                                              }`}
                                            >
                                            <div
                                                                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-black text-xs sm:text-sm shrink-0 ${
                                                                                          selectedOption === i
                                                                                            ? 'bg-[#F59E0B] text-[#060818]'
                                                                                            : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400'
                                                                  }`}
                                                                >
                                              {String.fromCharCode(65 + i)}
                                                </div>
                                            <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                                              {opt}
                                            </span>
                          </button>
                        ))}
                                            </div>
                                
                                            <div className="mt-6 flex justify-between pt-5 border-t border-gray-100 dark:border-white/5">
                                                          <button
                                                                            disabled={currentQuestion === 0}
                                                                            onClick={() => {
                                                                                                setCurrentQuestion(p => p - 1);
                                                                                                setSelectedOption(null);
                                                                            }}
                                                                            className="flex items-center gap-2 text-gray-400 font-black text-xs uppercase tracking-widest disabled:opacity-30 py-2 px-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                                                          >
                                                                          <ChevronLeft size={18} />
                                                                          Previous
                                                          </button>
                                            
                                              {currentQuestion === passage.questions.length - 1 ? (
                        <button
                            onClick={handleSubmit}
                            className="flex items-center gap-2 bg-[#F59E0B] text-[#060818] px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-black text-sm"
                          >
                          Submit
                          <ChevronRight size={18} />
                        </button>
                      ) : (
                        <button
                            onClick={() => setCurrentQuestion(q => q + 1)}
                            className="flex items-center gap-2 bg-[#F59E0B] text-[#060818] px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-black text-sm"
                          >
                          Next
                          <ChevronRight size={18} />
                        </button>
                      )}
                  </div>
          </div>
          </div>
          </div>
          </div>
        );
}
