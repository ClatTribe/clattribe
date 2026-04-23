import { MockQuestion } from "../constants";

export const NLAT_MOCK_4: MockQuestion[] = [
  {
    id: "nlat-4-q1",
    section: "Legal Reasoning",
    passage: `Principle: Negligence is the breach of a legal duty to take care which results in unintended damage to the plaintiff. To succeed in an action for negligence, the plaintiff must prove: (1) that the defendant owed a duty of care to the plaintiff, (2) that the defendant breached that duty, and (3) that the plaintiff suffered damage as a result of that breach.`,
    question: "A doctor forgets a surgical sponge inside a patient's abdomen during surgery. The patient develops a severe infection. Is the doctor liable for negligence?",
    options: [
      "No, surgery is inherently risky.",
      "Yes, the doctor breached the duty of care owed to the patient.",
      "No, unless the patient can prove the doctor did it intentionally.",
      "Yes, but only if the hospital had a policy against sponges."
    ],
    correct: 1,
    explanation: "Leaving a foreign object inside a patient is a clear breach of the duty of care expected from a medical professional."
  },
  {
    id: "nlat-4-q31",
    section: "GK & Current Affairs",
    question: "The 'World Digital Competitiveness Ranking 2023' is published by which organization?",
    options: ["World Economic Forum", "IMD (International Institute for Management Development)", "World Bank", "UNESCO"],
    correct: 1,
    explanation: "IMD"
  }
];
