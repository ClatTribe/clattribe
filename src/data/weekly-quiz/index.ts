// Weekly Quiz Registry — CLAT Tribe
// Import all weekly quizzes here in chronological order

import { WeeklyQuiz } from './types';

// ── 2026 ────────────────────────────────────────────────────────────────────────────

import week01_april2026 from './2026/week01';
import week02_april2026 from './2026/week02';

// ────────────────────────────────────────────────────────────────────────────
//  Master registry — add new weeks here as they are created
// ────────────────────────────────────────────────────────────────────────────
export const weeklyQuizzes: WeeklyQuiz[] = [
  week01_april2026,
  week02_april2026,
  // week03_april2026,
  // week04_april2026,
  // week01_may2026,
];

// Helper: get a quiz by ID
export function getWeeklyQuizById(id: string): WeeklyQuiz | undefined {
  return weeklyQuizzes.find(q => q.id === id);
}

// Helper: get quizzes by year
export function getWeeklyQuizzesByYear(year: number): WeeklyQuiz[] {
  return weeklyQuizzes.filter(q => q.year === year);
}
