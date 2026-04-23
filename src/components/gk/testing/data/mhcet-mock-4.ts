import { MockQuestion } from "../constants";

export const MHCET_MOCK_4: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE & LEGAL REASONING (24 QUESTIONS)
  {
    id: "mhcet-4-q1",
    section: "Legal Aptitude & Reasoning",
    passage: `In Torts, several defenses...`,
    question: "Aman goes to a stadium to watch a football match. During the game, a player kicks the ball hard, and it hits Aman in the face, breaking his glasses. Can Aman sue the player?",
    options: ["Yes, the player was negligent.", "No, this is covered by 'Volenti non fit injuria'.", "Yes, but only if the player didn't say sorry.", "No, because Aman should have worn a helmet."],
    correct: 1,
    explanation: "Spectators at sports events consent to normal risks."
  },
  ...Array.from({ length: 119 }, (_, i) => ({
    id: `mhcet-4-q${i+2}`,
    section: i < 22 ? "Legal Aptitude & Reasoning" : i < 46 ? "GK & Current Affairs" : i < 70 ? "Logical Reasoning" : i < 94 ? "English Language" : "Basic Mathematics",
    question: `Practice Question ${i+2} for MHCET Mock 4?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0,
    explanation: "Standard explanation."
  }))
];
