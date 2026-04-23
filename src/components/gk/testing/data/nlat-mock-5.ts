import { MockQuestion } from "../constants";

export const NLAT_MOCK_5: MockQuestion[] = [
  {
    id: "nlat-5-q1",
    section: "Legal Reasoning",
    passage: `Principle: False Imprisonment is the total restraint of the liberty of a person without lawful justification. The restraint must be total; if there is a reasonable means of escape, it is not false imprisonment. Knowledge of the imprisonment by the person restrained is not essential at the time of restraint.`,
    question: "Aman is sleeping in his room. His roommate, as a prank, locks the door from the outside. Aman wakes up an hour later and finds the door locked, but then the roommate opens it. Is this false imprisonment?",
    options: [
      "No, because Aman was sleeping and didn't know he was locked in.",
      "Yes, because his liberty was totally restrained without justification for that hour.",
      "No, because it was just a prank.",
      "Yes, but only if Aman tried to open the door and failed."
    ],
    correct: 1,
    explanation: "False imprisonment occurs even if the person is unaware of the restraint at the time, as long as the restraint was total and unjustified."
  },
  {
    id: "nlat-5-q31",
    section: "GK & Current Affairs",
    question: "Who was appointed as the 16th Finance Commission Chairman in December 2023?",
    options: ["Arvind Panagariya", "N.K. Singh", "Raghuram Rajan", "Urjit Patel"],
    correct: 0,
    explanation: "Arvind Panagariya"
  }
];
