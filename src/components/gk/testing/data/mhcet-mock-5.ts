import { MockQuestion } from "../constants";

export const MHCET_MOCK_5: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE & LEGAL REASONING (24 QUESTIONS)
  // PASSAGE 1: LAW OF CRIMES – ATTEMPT (Q1–Q4)
  {
    id: "mhcet-5-q1",
    section: "Legal Aptitude & Reasoning",
    passage: `A crime generally has four stages: (1) Intention, (2) Preparation, (3) Attempt, and (4) Completion (Accomplishment). Mere 'intention' and 'preparation' are usually not punishable (except for serious crimes like dacoity or waging war against the state). An 'Attempt' is punishable under Section 511 of the IPC/BNS. An attempt occurs when a person does an act toward the commission of an offense, which goes beyond mere preparation but fails to accomplish the crime. The distinction between preparation and attempt is often the 'Proximity Test'—how close the act was to the final result. If the crime is completed, the person is punished for the crime itself, not the attempt.`,
    question: "Aman buys a gun and some bullets, intending to kill Mr. X. He practices shooting at a target in his backyard. At this stage, is Aman guilty of a crime?",
    options: [
      "Yes, he has a murderous intent.",
      "No, this is still at the stage of 'Preparation', which is generally not punishable.",
      "Yes, because buying a gun is always a crime.",
      "No, but only if he doesn't have a license."
    ],
    correct: 1,
    explanation: "Preparation for murder is not an offence in itself; the law requires an 'act toward the commission' (Attempt) to punish."
  },
  {
    id: "mhcet-5-q2",
    section: "Legal Aptitude & Reasoning",
    passage: `A crime generally has four stages: (1) Intention, (2) Preparation, (3) Attempt, and (4) Completion (Accomplishment). Mere 'intention' and 'preparation' are usually not punishable (except for serious crimes like dacoity or waging war against the state). An 'Attempt' is punishable under Section 511 of the IPC/BNS. An attempt occurs when a person does an act toward the commission of an offense, which goes beyond mere preparation but fails to accomplish the crime. The distinction between preparation and attempt is often the 'Proximity Test'—how close the act was to the final result. If the crime is completed, the person is punished for the crime itself, not the attempt.`,
    question: "Aman puts his hand into Mr. X's pocket to steal his wallet. However, the pocket was empty. Has Aman committed a crime?",
    options: [
      "No, he didn't take anything.",
      "Yes, he committed an 'Attempt to commit theft'.",
      "No, it's Mr. X's fault for having an empty pocket.",
      "Yes, but he should only pay a small fine."
    ],
    correct: 1,
    explanation: "Attempting an impossible crime (like picking an empty pocket) is still a punishable attempt under Section 511."
  },
  {
    id: "mhcet-5-q3",
    section: "Legal Aptitude & Reasoning",
    passage: `A crime generally has four stages: (1) Intention, (2) Preparation, (3) Attempt, and (4) Completion (Accomplishment). Mere 'intention' and 'preparation' are usually not punishable (except for serious crimes like dacoity or waging war against the state). An 'Attempt' is punishable under Section 511 of the IPC/BNS. An attempt occurs when a person does an act toward the commission of an offense, which goes beyond mere preparation but fails to accomplish the crime. The distinction between preparation and attempt is often the 'Proximity Test'—how close the act was to the final result. If the crime is completed, the person is punished for the crime itself, not the attempt.`,
    question: "What is the fourth and final stage of a crime?",
    options: [
      "Attempt",
      "Preparation",
      "Accomplishment/Completion",
      "Conspiracy"
    ],
    correct: 2,
    explanation: "Accomplishment is the final stage where the injury/offence is completed."
  },
  {
    id: "mhcet-5-q4",
    section: "Legal Aptitude & Reasoning",
    passage: `A crime generally has four stages: (1) Intention, (2) Preparation, (3) Attempt, and (4) Completion (Accomplishment). Mere 'intention' and 'preparation' are usually not punishable (except for serious crimes like dacoity or waging war against the state). An 'Attempt' is punishable under Section 511 of the IPC/BNS. An attempt occurs when a person does an act toward the commission of an offense, which goes beyond mere preparation but fails to accomplish the crime. The distinction between preparation and attempt is often the 'Proximity Test'—how close the act was to the final result. If the crime is completed, the person is punished for the crime itself, not the attempt.`,
    question: "Aman buys poison to kill his wife. He keeps it in his cupboard but never uses it. Is he guilty of attempt?",
    options: [
      "Yes, poison is dangerous.",
      "No, this is mere 'Preparation'. There was no 'act toward' the actual administration of poison.",
      "Yes, because he thought about it.",
      "No, but only if he throws the poison away."
    ],
    correct: 1,
    explanation: "Buying the poison is preparation; mixing it in her food would be the attempt."
  },

  // FILLING THE REST (Q5–Q120)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `mhcet-5-q${i + 5}`,
    section: "Legal Aptitude & Reasoning",
    question: `Legal Reasoning Question ${i + 5} for MHCET Mock 5?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Legal analysis."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-5-q${i + 25}`,
    section: "GK & Current Affairs",
    question: `GK Question ${i + 1} for MHCET Mock 5?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "GK fact."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-5-q${i + 49}`,
    section: "Logical Reasoning",
    question: `Logical Question ${i + 1} for MHCET Mock 5?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Logical derivation."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-5-q${i + 73}`,
    section: "English Language",
    question: `English Question ${i + 1} for MHCET Mock 5?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Grammar/Vocab explanation."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-5-q${i + 97}`,
    section: "Basic Mathematics",
    question: `Math Question ${i + 1} for MHCET Mock 5?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Math solution."
  }))
];
