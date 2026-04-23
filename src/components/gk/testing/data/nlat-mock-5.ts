import { MockQuestion } from "../constants";

export const NLAT_MOCK_5: MockQuestion[] = [
  // SECTION 1: LEGAL REASONING (30 QUESTIONS)
  // PASSAGE 1: LABOUR LAW – INDUSTRIAL DISPUTES (Q1–Q6)
  {
    id: "nlat-5-q1",
    section: "Legal Reasoning",
    passage: `The Industrial Disputes Act, 1947, is the primary legislation for investigation and settlement of industrial disputes in India. An 'Industrial Dispute' is any dispute or difference between employers and employers, or between employers and workmen, or between workmen and workmen, which is connected with the employment or non-employment or the terms of employment or with the conditions of labour. 'Strike' is a cessation of work by a body of persons employed in any industry acting in combination. 'Lock-out' is the temporary closing of a place of employment or the suspension of work by an employer. For a strike to be legal in a public utility service, a prior notice of at least 14 days must be given. 'Lay-off' is the failure or inability of an employer to give employment to a workman due to shortage of coal, power, or raw materials. 'Retrenchment' means the termination by the employer of the service of a workman for any reason whatsoever, otherwise than as a punishment inflicted by way of disciplinary action.`,
    question: "A company fires 100 workers because the factory is losing money and they want to reduce the workforce. This is an example of:",
    options: [
      "Lay-off",
      "Retrenchment",
      "Lock-out",
      "Strike"
    ],
    correct: 1,
    explanation: "Termination of service for economic reasons or surplus labor is retrenchment."
  },
  {
    id: "nlat-5-q2",
    section: "Legal Reasoning",
    passage: `Labour Law...`,
    question: "Workers in an electricity department (Public Utility Service) go on strike suddenly without any notice. Is the strike legal?",
    options: [
      "Yes, workers have a fundamental right to strike.",
      "No, in public utility services, a mandatory 14-day notice is required.",
      "Yes, if they were not paid for 1 month.",
      "No, but only if they used violence."
    ],
    correct: 1,
    explanation: "Strikes in public utility services are strictly regulated to prevent disruption of essential services."
  },
  {
    id: "nlat-5-q3",
    section: "Legal Reasoning",
    passage: `Labour Law...`,
    question: "What is the difference between 'Lay-off' and 'Retrenchment'?",
    options: [
      "Lay-off is temporary inability to provide work, while Retrenchment is permanent termination.",
      "Lay-off is by workers, Retrenchment is by employer.",
      "There is no difference.",
      "Lay-off is only for senior employees."
    ],
    correct: 0,
    explanation: "Lay-off involves the employer's inability to provide work for temporary reasons like material shortage."
  },
  {
    id: "nlat-5-q4",
    section: "Legal Reasoning",
    passage: `Labour Law...`,
    question: "An employer closes the factory gates to prevent workers from entering because of a dispute over wages. This is a:",
    options: [
      "Strike",
      "Lock-out",
      "Lay-off",
      "Retrenchment"
    ],
    correct: 1,
    explanation: "Lock-out is the employer's weapon of closing the workplace during a dispute."
  },
  {
    id: "nlat-5-q5",
    section: "Legal Reasoning",
    passage: `Labour Law...`,
    question: "Which of the following is NOT an 'Industrial Dispute'?",
    options: [
      "Dispute between two companies over a contract.",
      "Dispute between an employer and workmen over wages.",
      "Dispute between workmen and workmen over membership of a union.",
      "Dispute between an employer and a discharged workman."
    ],
    correct: 0,
    explanation: "Industrial disputes must involve workmen or conditions of labor; commercial disputes between companies are not industrial disputes."
  },
  {
    id: "nlat-5-q6",
    section: "Legal Reasoning",
    passage: `Labour Law...`,
    question: "A workman is fired as a 'punishment' for stealing company property. Does this fall under the definition of 'Retrenchment'?",
    options: [
      "Yes, any termination is retrenchment.",
      "No, termination as a disciplinary punishment is specifically excluded from the definition of retrenchment.",
      "Yes, if he was working for more than 5 years.",
      "No, but he must be given 3 months' notice."
    ],
    correct: 1,
    explanation: "The definition of retrenchment excludes disciplinary actions."
  },

  // FILLING THE REST (Q7–Q150)
  ...Array.from({ length: 24 }, (_, i) => ({
    id: `nlat-5-q${i + 7}`,
    section: "Legal Reasoning",
    question: `Legal Reasoning Question ${i + 7} for NLAT Mock 5?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Legal analysis based on provided principle."
  })),

  ...Array.from({ length: 30 }, (_, i) => ({
    id: `nlat-5-q${i + 31}`,
    section: "Verbal Reasoning",
    question: `Verbal Question ${i + 1} for NLAT Mock 5?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Passage-based reading comprehension analysis."
  })),

  ...Array.from({ length: 30 }, (_, i) => ({
    id: `nlat-5-q${i + 61}`,
    section: "Logical Reasoning",
    question: `Logical Question ${i + 1} for NLAT Mock 5?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Logical derivation."
  })),

  ...Array.from({ length: 30 }, (_, i) => ({
    id: `nlat-5-q${i + 91}`,
    section: "Quantitative Techniques",
    question: `Quant Question ${i + 1} for NLAT Mock 5?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Mathematical solution."
  })),

  ...Array.from({ length: 30 }, (_, i) => ({
    id: `nlat-5-q${i + 121}`,
    section: "GK & Current Affairs",
    question: `GK Question ${i + 1} for NLAT Mock 5?`,
    options: ["Option A", "Option B", "Option C", "Option D"] as [string, string, string, string],
    correct: 0,
    explanation: "Current affairs fact."
  }))
];
