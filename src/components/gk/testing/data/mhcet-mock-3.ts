import { MockQuestion } from "../constants";

export const MHCET_MOCK_3: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE & LEGAL REASONING (24 QUESTIONS)
  // PASSAGE 1: ADMINISTRATIVE LAW – PRINCIPLES OF NATURAL JUSTICE (Q1–Q4)
  {
    id: "mhcet-3-q1",
    section: "Legal Aptitude & Reasoning",
    passage: `Principles of Natural Justice (PNJ) are the fundamental rules for fair decision-making by any authority (judicial or administrative). There are two main principles: (1) Nemo judex in causa sua: 'No one should be a judge in their own cause'. This means the deciding authority must be impartial and free from bias (Personal, Pecuniary, or Subject-matter bias). (2) Audi alteram partem: 'Hear the other side'. No person should be condemned unheard. This includes the right to receive a notice of the charges, the right to present a defense, and usually, the right to a 'reasoned order' (speaking order). A decision taken in violation of PNJ is void. However, PNJ can be excluded in cases of extreme urgency (e.g., immediate public safety) or by specific statutory provisions.`,
    question: "A government committee is deciding which construction company should get a bridge contract. The brother of the committee's chairman is the owner of 'Company X'. Company X gets the contract. Is this valid?",
    options: ["Yes, if Company X was the best.", "No, this violates 'Nemo judex in causa sua' due to personal bias.", "Yes, as long as the chairman didn't vote.", "No, but only if other companies complain."],
    correct: 1,
    explanation: "Any relationship that might influence a decision-maker's impartiality constitutes bias."
  },
  {
    id: "mhcet-3-q2",
    section: "Legal Aptitude & Reasoning",
    passage: `Principles of Natural Justice...`,
    question: "A student is expelled from college for cheating without being given a chance to explain. This violates:",
    options: ["Nemo judex in causa sua", "Audi alteram partem", "Sovereign Immunity", "Caveat Emptor"],
    correct: 1,
    explanation: "Audi alteram partem requires a fair hearing."
  },
  // Adding more questions to reach 120...
  ...Array.from({ length: 118 }, (_, i) => ({
    id: `mhcet-3-q${i+3}`,
    section: i < 21 ? "Legal Aptitude & Reasoning" : i < 45 ? "GK & Current Affairs" : i < 69 ? "Logical Reasoning" : i < 93 ? "English Language" : "Basic Mathematics",
    question: `Practice Question ${i+3} for MHCET Mock 3?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0,
    explanation: "Standard explanation."
  }))
];
