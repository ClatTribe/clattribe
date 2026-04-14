// Weekly Quiz Types â CLAT Tribe
// Used for GK & Current Affairs weekly quizzes for CLAT, AILET, NLAT & other law entrance exams

export type QuizCategory =
  | 'current_affairs_national'
  | 'current_affairs_international'
  | 'static_gk'
  | 'legal_gk'
  | 'important_days'
  | 'science_tech'
  | 'economy'
  | 'sports'
  | 'polity';

export interface WeeklyQuizQuestion {
  id: number;
  category: QuizCategory;
  question_text: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explanation: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  tags?: string[];
}

export interface WeeklyQuiz {
  id: string;                  // e.g. 'wq-2026-04-w1'
  title: string;               // e.g. 'Weekly Quiz â Week 1: April 1â7, 2026'
  description: string;
  week: number;                // 1â5
  month: string;               // 'April'
  year: number;                // 2026
  dateRange: string;           // 'April 1â7, 2026'
  totalQuestions: number;
  questions: WeeklyQuizQuestion[];
}

// Result types (reusable by QuizEngine)

export interface WeeklyQuizCategoryResult {
  category: QuizCategory;
  label: string;
  correct: number;
  incorrect: number;
  unattempted: number;
  total: number;
  score: number;
}

export interface WeeklyQuizResult {
  quizId: string;
  quizTitle: string;
  totalScore: number;
  totalQuestions: number;
  timeSpent: number;          // seconds
  categoryResults: WeeklyQuizCategoryResult[];
  answers: (number | null)[];
  questions: WeeklyQuizQuestion[];
}

export const QUIZ_CATEGORY_META: Record<QuizCategory, { label: string; color: string; bgColor: string }> = {
  current_affairs_national:      { label: 'National Current Affairs',      color: '#3b82f6', bgColor: '#eff6ff' },
  current_affairs_international: { label: 'International Current Affairs', color: '#8b5cf6', bgColor: '#f5f3ff' },
  static_gk:                     { label: 'Static GK',                     color: '#10b981', bgColor: '#ecfdf5' },
  legal_gk:                      { label: 'Legal GK & Polity',             color: '#ef4444', bgColor: '#fef2f2' },
  important_days:                { label: 'Important Days',                color: '#f59e0b', bgColor: '#fffbeb' },
  science_tech:                  { label: 'Science & Technology',          color: '#06b6d4', bgColor: '#ecfeff' },
  economy:                       { label: 'Economy',                       color: '#84cc16', bgColor: '#f7fee7' },
  sports:                        { label: 'Sports',                        color: '#f97316', bgColor: '#fff7ed' },
  polity:                        { label: 'Polity & Governance',           color: '#6366f1', bgColor: '#eef2ff' },
};
