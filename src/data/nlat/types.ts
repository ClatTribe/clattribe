export type NLATSection = 'verbal' | 'gk' | 'legal' | 'logical' | 'quant';

export interface NLATQuestion {
  section: NLATSection;
  question_text: string;
  options: [string, string, string, string]; // [A, B, C, D]
  correct: 0 | 1 | 2 | 3; // 0=A, 1=B, 2=C, 3=D
  explanation: string;
  difficulty?: 'Easy' | 'Medium'; // optional for compatibility
}

export interface NLATMock {
  id: number;
  name: string;
  questions: NLATQuestion[]; // Always 150 questions, 30 per section
}

export interface NLATSectionResult {
  section: NLATSection;
  label: string;
  correct: number;
  incorrect: number;
  unattempted: number;
  total: number;
  score: number;
}

export interface NLATTestResult {
  mockId: number;
  mockName: string;
  totalScore: number;
  totalQuestions: number;
  timeSpent: number;
  sections: NLATSectionResult[];
  answers: (number | null)[];
  questions: NLATQuestion[];
}

export const NLAT_SECTIONS: {
  key: NLATSection;
  label: string;
  color: string;
  bgColor: string;
}[] = [
  { key: 'verbal',  label: 'Verbal Reasoning',       color: '#3b82f6', bgColor: '#eff6ff' },
  { key: 'gk',      label: 'GK & Current Affairs',   color: '#10b981', bgColor: '#ecfdf5' },
  { key: 'legal',   label: 'Legal Reasoning',         color: '#ef4444', bgColor: '#fef2f2' },
  { key: 'logical', label: 'Logical Reasoning',       color: '#8b5cf6', bgColor: '#f5f3ff' },
  { key: 'quant',   label: 'Quantitative Reasoning',  color: '#f59e0b', bgColor: '#fffbeb' },
];
