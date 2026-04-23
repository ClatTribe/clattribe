import React from "react";
import { Zap, History, Target, FileText, BookOpen } from "lucide-react";

export type TestType =
  | "weekly"
  | "pyq"
  | "mock"
  | "sectional"
  | "passage"
  | "custom"
  | null;

export interface TestCategory {
  id: TestType;
  title: string;
  description: string;
  icon: React.ReactNode;
  count: string;
  color: string;
  accent: string;
}

export const CATEGORIES: TestCategory[] = [
  {
    id: "weekly",
    title: "Weekly Quizzes",
    description:
      "Fresh questions every Sunday covering the week's top current affairs.",
    icon: React.createElement(Zap, { size: 24 }),
    count: "12 Available",
    color: "bg-[#F59E0B]",
    accent: "text-[#060818]",
  },
  {
    id: "pyq",
    title: "PYQs (2020-2026)",
    description:
      "Official Previous Year Questions with detailed legal explanations.",
    icon: React.createElement(History, { size: 24 }),
    count: "6 Years",
    color: "bg-blue-500",
    accent: "text-white",
  },
  {
    id: "mock",
    title: "Full Mock Tests",
    description: "120-minute simulated exams to build your speed and accuracy.",
    icon: React.createElement(Target, { size: 24 }),
    count: "15 Mocks",
    color: "bg-purple-500",
    accent: "text-white",
  },
  {
    id: "sectional",
    title: "GK Sectionals",
    description:
      "Focused 30-question sets purely for General Knowledge & Current Affairs.",
    icon: React.createElement(FileText, { size: 24 }),
    count: "5 Sets",
    color: "bg-green-500",
    accent: "text-white",
  },
  {
    id: "passage",
    title: "Passage Practice",
    description: "Deductive reasoning practice based on recent legal passages.",
    icon: React.createElement(BookOpen, { size: 24 }),
    count: "5 Tests",
    color: "bg-[#060818]",
    accent: "text-[#F59E0B]",
  },
];

export const TOPICS = [
  "Legal Reasoning",
  "Current Affairs",
  "General Knowledge",
  "Logical Reasoning",
  "English Language",
];

export const QUESTION_TYPES = ["Passage Based", "Direct MCQ", "True/False"];

export const TIME_LIMITS = [
  { label: "15 Mins", value: 15 },
  { label: "30 Mins", value: 30 },
  { label: "60 Mins", value: 60 },
  { label: "120 Mins", value: 120 },
];

export type ExamType = "CLAT" | "AILET" | "NLAT" | "MHCET";

export interface MockQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correct: number;
  explanation: string;
  passage?: string;
  section?: string;
}

export const SAMPLE_CLAT_MOCK_1: MockQuestion[] = [
  {
    question: "Which of the following is NOT a fundamental right under the Indian Constitution?",
    options: ["Right to Equality", "Right to Property", "Right against Exploitation", "Right to Freedom of Religion"],
    correct: 1,
    explanation: "The Right to Property was removed from the list of Fundamental Rights by the 44th Amendment Act, 1978. It is now a legal right under Article 300A.",
  },
  {
    question: "The power of 'Judicial Review' in India is based on:",
    options: ["Procedure established by law", "Due process of law", "Rule of law", "Precedents and Conventions"],
    correct: 0,
    explanation: "Judicial Review in India is primarily based on the principle of 'Procedure established by law' as per Article 21.",
  },
  {
    question: "Who appoints the Chief Justice of India?",
    options: ["The Prime Minister", "The President", "The Law Minister", "The Parliament"],
    correct: 1,
    explanation: "The Chief Justice of India is appointed by the President of India under Article 124 of the Constitution.",
  },
  {
    question: "Which landmark case dealt with the 'Right to Privacy'?",
    options: ["K.S. Puttaswamy v. Union of India", "Navtej Singh Johar v. Union of India", "Joseph Shine v. Union of India", "Shayara Bano v. Union of India"],
    correct: 0,
    explanation: "Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) is the landmark case where the SC declared Right to Privacy as a Fundamental Right.",
  },
  {
    question: "The concept of 'Public Interest Litigation' (PIL) originated in which country?",
    options: ["United Kingdom", "USA", "Australia", "Canada"],
    correct: 1,
    explanation: "The concept of PIL originated and developed in the USA in the 1960s.",
  },
];

import { NLAT_MOCK_1 } from "./data/nlat-mock-1";

export const MOCK_DATABASE: Record<string, Record<number, MockQuestion[]>> = {
  CLAT: {
    1: SAMPLE_CLAT_MOCK_1,
    2: SAMPLE_CLAT_MOCK_1,
  },
  AILET: {
    1: SAMPLE_CLAT_MOCK_1,
  },
  NLAT: {
    1: NLAT_MOCK_1,
  },
  MHCET: {
    1: SAMPLE_CLAT_MOCK_1,
  },
};

export const EXAM_META: Record<ExamType, { color: string; accent: string; description: string }> = {
  CLAT: {
    color: "bg-purple-600",
    accent: "text-purple-600",
    description: "The gold standard for NLU admissions. 120 questions, 120 minutes.",
  },
  AILET: {
    color: "bg-emerald-600",
    accent: "text-emerald-600",
    description: "National Law University, Delhi's specific entrance. 150 questions, 90 minutes.",
  },
  NLAT: {
    color: "bg-blue-600",
    accent: "text-blue-600",
    description: "NMIMS Law Aptitude Test. 150 questions, 120 minutes, no negative marking.",
  },
  MHCET: {
    color: "bg-orange-600",
    accent: "text-orange-600",
    description: "Maharashtra Common Entrance Test for Law. 150 questions, 120 minutes.",
  },
};

export interface TestResult {
  id: string;
  score: number;
  total: number;
  timeSpent: number;
  category: string;
  date: string;
  topicBreakdown: { topic: string; correct: number; total: number }[];
  suggestions: string[];
}
