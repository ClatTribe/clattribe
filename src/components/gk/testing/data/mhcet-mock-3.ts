import { MockQuestion } from "../constants";

export const MHCET_MOCK_3: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE & LEGAL REASONING (24 QUESTIONS)
  // PASSAGE 1: ADMINISTRATIVE LAW – PRINCIPLES OF NATURAL JUSTICE (Q1–Q4)
  {
    id: "mhcet-3-q1",
    section: "Legal Aptitude & Reasoning",
    passage: `Principles of Natural Justice (PNJ) are the fundamental rules for fair decision-making by any authority (judicial or administrative). There are two main principles: (1) Nemo judex in causa sua: 'No one should be a judge in their own cause'. This means the deciding authority must be impartial and free from bias (Personal, Pecuniary, or Subject-matter bias). (2) Audi alteram partem: 'Hear the other side'. No person should be condemned unheard. This includes the right to receive a notice of the charges, the right to present a defense, and usually, the right to a 'reasoned order' (speaking order). A decision taken in violation of PNJ is void. However, PNJ can be excluded in cases of extreme urgency (e.g., immediate public safety) or by specific statutory provisions.`,
    question: "A government committee is deciding which construction company should get a bridge contract. The brother of the committee's chairman is the owner of 'Company X'. Company X gets the contract. Is this valid?",
    options: [
      "Yes, if Company X was the best.",
      "No, this violates 'Nemo judex in causa sua' due to personal bias.",
      "Yes, as long as the chairman didn't vote.",
      "No, but only if other companies complain."
    ],
    correct: 1,
    explanation: "Any relationship that might influence a decision-maker's impartiality constitutes bias."
  },
  {
    id: "mhcet-3-q2",
    section: "Legal Aptitude & Reasoning",
    passage: `Principles of Natural Justice (PNJ) are the fundamental rules for fair decision-making by any authority (judicial or administrative). There are two main principles: (1) Nemo judex in causa sua: 'No one should be a judge in their own cause'. This means the deciding authority must be impartial and free from bias (Personal, Pecuniary, or Subject-matter bias). (2) Audi alteram partem: 'Hear the other side'. No person should be condemned unheard. This includes the right to receive a notice of the charges, the right to present a defense, and usually, the right to a 'reasoned order' (speaking order). A decision taken in violation of PNJ is void. However, PNJ can be excluded in cases of extreme urgency (e.g., immediate public safety) or by specific statutory provisions.`,
    question: "A student is expelled from college for cheating without being given a chance to explain. This violates:",
    options: [
      "Nemo judex in causa sua",
      "Audi alteram partem",
      "Sovereign Immunity",
      "Caveat Emptor"
    ],
    correct: 1,
    explanation: "Audi alteram partem requires a fair hearing."
  },
  {
    id: "mhcet-3-q3",
    section: "Legal Aptitude & Reasoning",
    passage: `Principles of Natural Justice (PNJ) are the fundamental rules for fair decision-making by any authority (judicial or administrative). There are two main principles: (1) Nemo judex in causa sua: 'No one should be a judge in their own cause'. This means the deciding authority must be impartial and free from bias (Personal, Pecuniary, or Subject-matter bias). (2) Audi alteram partem: 'Hear the other side'. No person should be condemned unheard. This includes the right to receive a notice of the charges, the right to present a defense, and usually, the right to a 'reasoned order' (speaking order). A decision taken in violation of PNJ is void. However, PNJ can be excluded in cases of extreme urgency (e.g., immediate public safety) or by specific statutory provisions.`,
    question: "A judge has a small financial investment in a company that is a party to the case he is hearing. This is:",
    options: ["Personal Bias", "Pecuniary Bias", "Subject-matter Bias", "Allowed in small amounts"],
    correct: 1,
    explanation: "Any financial interest (pecuniary) in the subject matter of the dispute is a ground for bias."
  },
  {
    id: "mhcet-3-q4",
    section: "Legal Aptitude & Reasoning",
    passage: `Principles of Natural Justice (PNJ) are the fundamental rules for fair decision-making by any authority (judicial or administrative). There are two main principles: (1) Nemo judex in causa sua: 'No one should be a judge in their own cause'. This means the deciding authority must be impartial and free from bias (Personal, Pecuniary, or Subject-matter bias). (2) Audi alteram partem: 'Hear the other side'. No person should be condemned unheard. This includes the right to receive a notice of the charges, the right to present a defense, and usually, the right to a 'reasoned order' (speaking order). A decision taken in violation of PNJ is void. However, PNJ can be excluded in cases of extreme urgency (e.g., immediate public safety) or by specific statutory provisions.`,
    question: "When can 'Audi alteram partem' be legally excluded?",
    options: [
      "When the judge is tired.",
      "In cases of extreme urgency involving public safety.",
      "When the defendant is already known to be guilty.",
      "Never, it is absolute."
    ],
    correct: 1,
    explanation: "Emergency situations involving immediate danger can sometimes justify bypassing a hearing."
  },

  // FILLING THE REST (Q5–Q120)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `mhcet-3-q${i + 5}`,
    section: "Legal Aptitude & Reasoning",
    question: `Legal Reasoning Question ${i + 5} for MHCET Mock 3?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Legal analysis."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-3-q${i + 25}`,
    section: "GK & Current Affairs",
    question: `GK Question ${i + 1} for MHCET Mock 3?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "GK fact."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-3-q${i + 49}`,
    section: "Logical Reasoning",
    question: `Logical Question ${i + 1} for MHCET Mock 3?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Logical derivation."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-3-q${i + 73}`,
    section: "English Language",
    question: `English Question ${i + 1} for MHCET Mock 3?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Grammar/Vocab explanation."
  })),

  ...Array.from({ length: 24 }, (_, i) => ({
    id: `mhcet-3-q${i + 97}`,
    section: "Basic Mathematics",
    question: `Math Question ${i + 1} for MHCET Mock 3?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Math solution."
  }))
];
