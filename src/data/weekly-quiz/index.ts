// Weekly Quiz Registry â CLAT Tribe
// Import all weekly quizzes here in chronological order

import { WeeklyQuiz } from './types';

// ââ 2026 ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ

import week01_april2026 from './2026/week01';

// ââ(*Helpers*)  -----------------------------------------------
//  Master registry â add new weeks here as they are created
-// ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
export const weeklyQuizzes: WeeklyQuiz[] = [
  week01_april2026,
  // week02_april2026,
  // week03_april2026,
  // week04_april2026,
  // week01_may2026,
];

// Helper: get a quiz by ID
export function getWeeklyQuizById(id: string): WeeklyQuiz | undefined {
  return weeklyQuizzes.find((q) => q.id === id);
}

// Helper: get all quizzes for a given month + year
export function getWeeklyQuizzesByMonth(month: string, year: number): WeeklyQuiz[] {
  return weeklyQuizzes.filter((q) => q.month === month && q.year === year);
}

export { WeeklyQuiz } from './types';
export * from './types';
