'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Lock,
  ChevronRight,
  BookOpen,
  FileText,
  Clock,
  ArrowRight,
  Zap,
  BookMarked
} from 'lucide-react';

interface MCQ {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface EditorialCard {
  id: string;
  source: 'The Hindu' | 'The Indian Express';
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
  mcqs: MCQ[];
}

// ─── Supabase helpers ────────────────────────────────────────────────────────

const SUPABASE_URL = 'https://fjswchcothephgtzqbgq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
  'eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqc3djaGNvdGhlcGhndHpxYmdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk2ODQsImV4cCI6MjA3MTMzNTY4NH0.' +
  'AqKfl8rwkH4_Y0sVdcQLWu6HF1nrxhro-jMyEdUggV4';

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function isoToDisplayDate(iso: string): string {
  const parts = iso.split('-');
  const month = MONTH_NAMES[parseInt(parts[1]) - 1];
  const day = parseInt(parts[2]);
  const year = parts[0];
  return `${month} ${day}, ${year}`;
}

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min`;
}

function transformRow(row: any): EditorialCard {
  const optionKeys = ['A', 'B', 'C', 'D'];
  const rawMcqs: any[] = Array.isArray(row.mcqs) ? row.mcqs : [];
  const mcqs = rawMcqs.map((m: any) => ({
    question: m.q ?? '',
    options: optionKeys.map(k => m.options?.[k] ?? ''),
    correctAnswer: Math.max(0, optionKeys.indexOf(m.correct ?? 'A')),
    explanation: m.explanation ?? '',
  }));
  const content = row.content ?? '';
  return {
    id: row.id,
    source: (row.source === 'Indian Express' ? 'The Indian Express' : row.source) as 'The Hindu' | 'The Indian Express',
    title: row.title,
    date: row.date && row.date !== '1970-01-01' ? isoToDisplayDate(row.date) : isoToDisplayDate(new Date().toISOString().split('T')[0]),
    readTime: estimateReadTime(content),
    summary: content.replace(/\n/g, ' ').substring(0, 200).trim(),
    content,
    tags: [],
    mcqs,
  };
}
// Clean scraped editorial content: strip footer, fix link fragments, split paragraphs
function cleanEditorialContent(raw: string): string[] {
  if (!raw) return [];
  // Strip The Hindu footer junk - everything from the first footer marker
  const footerMarkers = ['\nPublished\n', '\nRead Comments', '\nCopy link', '\nPrint\n', '\nShare\n'];
  let text = raw;
  for (const marker of footerMarkers) {
    const idx = text.indexOf(marker);
    if (idx > 200) { text = text.substring(0, idx); break; }
  }
  // Fix hanging punctuation: line starting with , or ; means it's continuation of previous
  text = text.replace(/\n([,;])/g, '$1');
  // Split into lines, merge fragments, form paragraphs
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const paragraphs: string[] = [];
  let current = '';
  for (const line of lines) {
    if (!current) { current = line; continue; }
    // Continuation: starts with lowercase letter or connecting punctuation
    if (/^[a-z,;(]/.test(line)) {
      current += ' ' + line;
    } else {
      paragraphs.push(current);
      current = line;
    }
  }
  if (current) paragraphs.push(current);
  return paragraphs.filter(p => p.length > 10);
}

export default function Editorial() {
  const [selectedDate, setSelectedDate] = React.useState(String(new Date().getDate()));
  const [selectedEditorial, setSelectedEditorial] = React.useState<EditorialCard | null>(null);
  const [quizItemId, setQuizItemId] = React.useState<string | null>(null);
  const [allEditorials, setAllEditorials] = React.useState<EditorialCard[]>([]);
  const [availableDays, setAvailableDays] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    const now = new Date();
    // Fetch recent editorials (last 60 entries covers 1 month of daily data)
    fetch(`${SUPABASE_URL}/rest/v1/gk_editorials?order=date.desc&limit=60&select=*`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
    )
      .then(r => r.json())
      .then((rows: any[]) => {
        if (!Array.isArray(rows)) { console.error('Supabase error', rows); return; }
        setAllEditorials(rows.map(transformRow));
        const days = new Set<string>(rows.map((r: any) => String(parseInt(r.date.split('-')[2]))));
        setAvailableDays(days);
        const today = String(now.getDate());
        if (!days.has(today) && days.size > 0) {
          const sorted = [...days].map(Number).sort((a, b) => b - a);
          setSelectedDate(String(sorted[0]));
        }
      })
      .catch(e => console.error('Editorial fetch failed:', e));
  }, []);
  const filteredEditorials = React.useMemo(() => {
    return allEditorials.filter(e => e.date.includes(`${selectedDate}, ${new Date().getFullYear()}`));
  }, [allEditorials, selectedDate]);

  const ARCHIVE_DATES = React.useMemo(() => {
    const now = new Date();
    const today = now.getDate();
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return Array.from({ length: 14 }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth(), today - i);
      const dateStr = String(d.getDate());
      return {
        month: months[d.getMonth()],
        date: dateStr,
        day: dayNames[d.getDay()],
        active: dateStr === selectedDate,
        locked: i >= 2,
      };
    });
  }, [selectedDate]);
  if (selectedEditorial) {
    return <DetailedEditorial item={selectedEditorial} onBack={() => { setSelectedEditorial(null); setQuizItemId(null); }} initialShowQuiz={quizItemId === selectedEditorial.id} />;
  }

  return (
    <div className="space-y-12">
      {/* Daily Archives Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <Clock size={14} />
            Daily Archives
          </h3>
          <span className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest bg-[#F59E0B]/10 px-2 py-0.5 rounded">
            (First 2 Days Free)
          </span>
        </div>

        <div className="relative group">
          <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar mask-fade-right">
            {ARCHIVE_DATES.map((item) => (
              <motion.button
                key={`${item.month}-${item.date}`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => !item.locked && setSelectedDate(item.date)}
                className={`flex-shrink-0 w-24 h-32 rounded-3xl flex flex-col items-center justify-center gap-1 transition-all relative border-2 ${
                  selectedDate === item.date
                    ? 'bg-[#F59E0B] border-[#F59E0B] text-[#060818] shadow-lg shadow-[#F59E0B]/20'
                    : 'bg-white dark:bg-[#060818] border-gray-100 dark:border-white/10 text-gray-400 dark:text-gray-500 hover:border-[#F59E0B]/50'
                } ${item.locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {item.locked && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#F59E0B]/20 text-[#F59E0B] text-[8px] font-black px-1.5 py-0.5 rounded uppercase">PRO</span>
                  </div>
                )}
                <span className={`text-[10px] font-black uppercase tracking-widest ${selectedDate === item.date ? 'text-[#060818]/60' : ''}`}>
                  {item.month}
                </span>
                <span className={`text-3xl font-black ${selectedDate === item.date ? 'text-[#060818]' : 'text-[#060818] dark:text-white'}`}>
                  {item.locked ? <Lock size={20} className="mb-1" /> : item.date}
                </span>
                <span className={`text-[10px] font-bold ${selectedDate === item.date ? 'text-[#060818]/60' : ''}`}>
                  {item.day}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Custom Scrollbar Indicator */}
          <div className="flex items-center gap-4 mt-2">
            <div className="h-1 bg-gray-100 dark:bg-white/5 rounded-full flex-1 max-w-[200px] overflow-hidden">
              <motion.div
                className="h-full bg-[#F59E0B]"
                initial={{ width: '20%' }}
                animate={{ width: '15%' }}
              />
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              <button className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors">
                <BookMarked size={14} /> April Summary <ChevronRight size={12} />
              </button>
              <button className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors">
                <Zap size={14} /> Weekly Quiz <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Editorials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* The Hindu Column */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
            <h2 className="text-2xl font-black text-[#060818] dark:text-white flex items-center gap-3">
              <div className="w-2 h-8 bg-[#F59E0B] rounded-full" />
              The Hindu
            </h2>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {filteredEditorials.filter(e => e.source === 'The Hindu').length} Editorials
            </span>
          </div>

          <div className="space-y-6">
            {filteredEditorials.filter(e => e.source === 'The Hindu').map((item) => (
              <EditorialItem key={item.id} item={item} onOpen={() => setSelectedEditorial(item)} onQuiz={() => { setQuizItemId(item.id); setSelectedEditorial(item); }} />
            ))}
            {filteredEditorials.filter(e => e.source === 'The Hindu').length === 0 && (
              <p className="text-gray-500 font-medium py-8 text-center">No editorials found for this date.</p>
            )}
          </div>
        </div>

        {/* Indian Express Column */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
            <h2 className="text-2xl font-black text-[#060818] dark:text-white flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full" />
              The Indian Express
            </h2>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {filteredEditorials.filter(e => e.source === 'The Indian Express').length} Editorials
            </span>
          </div>

          <div className="space-y-6">
            {filteredEditorials.filter(e => e.source === 'The Indian Express').map((item) => (
              <EditorialItem key={item.id} item={item} onOpen={() => setSelectedEditorial(item)} onQuiz={() => { setQuizItemId(item.id); setSelectedEditorial(item); }} />
            ))}
            {filteredEditorials.filter(e => e.source === 'The Indian Express').length === 0 && (
              <p className="text-gray-500 font-medium py-8 text-center">No editorials found for this date.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const EditorialItem: React.FC<{ item: EditorialCard; onOpen: () => void; onQuiz: () => void }> = ({ item, onOpen, onQuiz }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onOpen}
      className="group bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 hover:shadow-2xl hover:shadow-[#F59E0B]/5 transition-all duration-300 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
          <Clock size={12} /> {item.readTime}
        </div>
      </div>

      <h3 className="text-xl font-black text-[#060818] dark:text-white mb-4 group-hover:text-[#F59E0B] transition-colors leading-tight">
        {item.title}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 line-clamp-2 font-medium">
        {item.summary}
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          className="flex-1 bg-[#060818] dark:bg-white/10 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all flex items-center justify-center gap-2"
        >
          <BookOpen size={16} /> Read
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onQuiz(); }}
          className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 text-[#060818] dark:text-white hover:bg-[#F59E0B] hover:text-[#060818] transition-all"
          title="Take Quiz"
        >
          <FileText size={20} />
        </button>
      </div>
    </motion.div>
  );
}

function DetailedEditorial({ item, onBack, initialShowQuiz = false }: { item: EditorialCard; onBack: () => void; initialShowQuiz?: boolean }) {
  const [showQuiz, setShowQuiz] = React.useState(initialShowQuiz);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [showExplanation, setShowExplanation] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false);

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === item.mcqs[currentQuestion].correctAnswer) {
      setScore(s => s + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < item.mcqs.length) {
      setCurrentQuestion(c => c + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
      >
        <ChevronRight size={16} className="rotate-180" /> Back to Editorials
      </button>

      <div className="bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-gray-100 dark:border-white/10 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
              item.source === 'The Hindu' ? 'bg-[#F59E0B]/10 text-[#F59E0B]' : 'bg-blue-500/10 text-blue-500'
            }`}>
              {item.source}
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
          </div>
          <h1 className="text-3xl font-black text-[#060818] dark:text-white leading-tight">
            {item.title}
          </h1>
          <div className="flex gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-5">
          {cleanEditorialContent(item.content).map((para, idx) => (
            <p key={idx} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              {para}
            </p>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-4">
    0                   <button className="flex items-center gap-2 text-[#060818] dark:text-white font-bold hover:text-[#F59E0B] transition-colors">
              <FileText size={20} /> Download PDF
            </button>
          </div>
          <button
            onClick={() => setShowQuiz(true)}
            className="bg-[#F59E0B] text-[#060818] px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#F59E0B]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Zap size={18} fill="currentColor" /> Take Passage Quiz
          </button>
        </div>
      </div>

      {showQuiz && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-[100] bg-[#060818]/90 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <div className="bg-white dark:bg-[#060818] w-full max-w-2xl rounded-[3rem] p-10 shadow-2xl border border-white/10 relative overflow-hidden">
            <button
              onClick={() => setShowQuiz(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors"
            >
              <Zap size={24} className="rotate-45" />
            </button>

            {!quizFinished ? (
              <div className="space-y-8">
     0          <div className="space-y-2">
                  <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest">Question {currentQuestion + 1} of {item.mcqs.length}</p>
                  <h3 className="text-xl font-black text-[#060818] dark:text-white">
                    {item.mcqs[currentQuestion].question}
                  </h3>
                </div>

                <div className="grid gap-4">
                  {item.mcqs[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={selectedOption !== null}
                      className={`w-full p-6 rounded-2xl text-left font-bold transition-all border-2 ${
                        selectedOption === idx
                          ? idx === item.mcqs[currentQuestion].correctAnswer
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'bg-red-500 border-red-500 text-white'
                          : selectedOption !== null && idx === item.mcqs[currentQuestion].correctAnswer
                            ? 'bg-green-500/20 border-green-500 text-green-500'
                            : 'bg-gray-50 dark:bg-white/5 border-transparent text-gray-600 dark:text-gray-300 hover:border-[#F59E0B]/50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-[#F59E0B]/10 rounded-2xl border border-[#F59E0B]/20"
                  >
                    <p className="text-sm font-bold text-[#F59E0B] mb-2 uppercase tracking-widest">Explanation</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      {item.mcqs[currentQuestion].explanation}
                    </p>
                    <button
                      onClick={nextQuestion}
                      className="mt-6 w-full bg-[#F59E0B] text-[#060818] py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                    >
                      {currentQuestion + 1 < item.mcqs.length ? 'Next Question' : 'Finish Quiz'} <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="text-center space-y-8 py-10">
                <div className="w-24 h-24 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap size={48} className="text-[#F59E0B]" fill="currentColor" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-[#060818] dark:text-white">Quiz Completed!</h3>
                  <p className="text-gray-500 font-bold">You scored {score} out of {item.mcqs.length}</p>
                </div>
                <button
                  onClick={() => setShowQuiz(false)}
                  className="bg-[#F59E0B] text-[#060818] px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#F59E0B]/20"
                >
                  Back to Editorial
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
