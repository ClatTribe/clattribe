import { MockQuestion } from "../constants";

export const MHCET_MOCK_4: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE & LEGAL REASONING (24 QUESTIONS)
  // PASSAGE 1: LAW OF TORTS – DEFENSES (Q1–Q4)
  {
    id: "mhcet-4-q1",
    section: "Legal Aptitude & Reasoning",
    passage: `In Torts, several defenses can be used to avoid liability: (1) Volenti non fit injuria: 'To a willing person, no injury is done'. If a person consents to a risk (e.g., watching a cricket match where a ball might hit you), they cannot sue. However, consent must be free and with full knowledge. (2) Vis Major (Act of God): Extraordinary natural events that cannot be foreseen (e.g., a freak earthquake). (3) Inevitable Accident: An accident that could not have been avoided by the exercise of ordinary care and skill (different from Act of God as it can be human-related). (4) Necessity: An act done to prevent a greater harm (e.g., breaking into a house to save someone from a fire). (5) Private Defence: Reasonable force used to protect oneself or property.`,
    question: "Aman goes to a stadium to watch a football match. During the game, a player kicks the ball hard, and it hits Aman in the face, breaking his glasses. Can Aman sue the player?",
    options: [
      "Yes, the player was negligent.",
      "No, this is covered by 'Volenti non fit injuria' as he consented to the inherent risks of the game.",
      "Yes, but only if the player didn't say sorry.",
      "No, because Aman should have worn a helmet."
    ],
    correct: 1,
    explanation: "Spectators at sports events are presumed to consent to the normal risks associated with the game."
  },
  {
    id: "mhcet-4-q2",
    section: "Legal Aptitude & Reasoning",
    passage: `In Torts, several defenses can be used to avoid liability: (1) Volenti non fit injuria: 'To a willing person, no injury is done'. If a person consents to a risk (e.g., watching a cricket match where a ball might hit you), they cannot sue. However, consent must be free and with full knowledge. (2) Vis Major (Act of God): Extraordinary natural events that cannot be foreseen (e.g., a freak earthquake). (3) Inevitable Accident: An accident that could not have been avoided by the exercise of ordinary care and skill (different from Act of God as it can be human-related). (4) Necessity: An act done to prevent a greater harm (e.g., breaking into a house to save someone from a fire). (5) Private Defence: Reasonable force used to protect oneself or property.`,
    question: "To save a whole forest from catching fire, Aman burns down Mr. X's small hut which was in the path of the fire. Mr. X sues. Aman's best defense is:",
    options: [
      "Volenti non fit injuria",
      "Necessity",
      "Act of God",
      "Private Defence"
    ],
    correct: 1,
    explanation: "Necessity justifies a smaller harm done to prevent a significantly greater harm."
  },
  {
    id: "mhcet-4-q3",
    section: "Legal Aptitude & Reasoning",
    passage: `In Torts, several defenses can be used to avoid liability: (1) Volenti non fit injuria: 'To a willing person, no injury is done'. If a person consents to a risk (e.g., watching a cricket match where a ball might hit you), they cannot sue. However, consent must be free and with full knowledge. (2) Vis Major (Act of God): Extraordinary natural events that cannot be foreseen (e.g., a freak earthquake). (3) Inevitable Accident: An accident that could not have been avoided by the exercise of ordinary care and skill (different from Act of God as it can be human-related). (4) Necessity: An act done to prevent a greater harm (e.g., breaking into a house to save someone from a fire). (5) Private Defence: Reasonable force used to protect oneself or property.`,
    question: "Aman is driving carefully at 30 km/h. Suddenly, his car's tire bursts due to a hidden manufacturing defect that no one could have seen. He hits a lamp post. This is an example of:",
    options: [
      "Act of God",
      "Inevitable Accident",
      "Negligence",
      "Strict Liability"
    ],
    correct: 1,
    explanation: "An inevitable accident is one that could not be avoided by reasonable care despite being caused by human-made things (like a car)."
  },
  {
    id: "mhcet-4-q4",
    section: "Legal Aptitude & Reasoning",
    passage: `In Torts, several defenses can be used to avoid liability: (1) Volenti non fit injuria: 'To a willing person, no injury is done'. If a person consents to a risk (e.g., watching a cricket match where a ball might hit you), they cannot sue. However, consent must be free and with full knowledge. (2) Vis Major (Act of God): Extraordinary natural events that cannot be foreseen (e.g., a freak earthquake). (3) Inevitable Accident: An accident that could not have been avoided by the exercise of ordinary care and skill (different from Act of God as it can be human-related). (4) Necessity: An act done to prevent a greater harm (e.g., breaking into a house to save someone from a fire). (5) Private Defence: Reasonable force used to protect oneself or property.`,
    question: "Mr. X attacks Aman with a knife. Aman grabs a heavy bag and swings it at Mr. X, breaking Mr. X's arm. Mr. X sues for battery. Aman's defense is:",
    options: [
      "Private Defence",
      "Necessity",
      "Volenti non fit injuria",
      "Inevitable Accident"
    ],
    correct: 0,
    explanation: "A person is entitled to use reasonable force to defend themselves from a physical attack."
  },

  // FILLING THE REST (Q5–Q120)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `mhcet-4-q${i + 5}`,
    section: "Legal Aptitude & Reasoning",
    question: `Legal Reasoning Question ${i + 5} for MHCET Mock 4?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Legal analysis."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-4-q${i + 25}`,
    section: "GK & Current Affairs",
    question: `GK Question ${i + 1} for MHCET Mock 4?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "GK fact."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-4-q${i + 49}`,
    section: "Logical Reasoning",
    question: `Logical Question ${i + 1} for MHCET Mock 4?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Logical derivation."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-4-q${i + 73}`,
    section: "English Language",
    question: `English Question ${i + 1} for MHCET Mock 4?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Grammar/Vocab explanation."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-4-q${i + 97}`,
    section: "Basic Mathematics",
    question: `Math Question ${i + 1} for MHCET Mock 4?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Math solution."
  }))
];
