import { MockQuestion } from "../constants";

export const NLAT_MOCK_3: MockQuestion[] = [
  {
    id: "nlat-3-q1",
    section: "Legal Reasoning",
    passage: `Principle: Culpable Homicide is not murder if the offender, whilst deprived of the power of self-control by grave and sudden provocation, causes the death of the person who gave the provocation or causes the death of any other person by mistake or accident. The provocation must not be sought or voluntarily provoked by the offender as an excuse for killing or doing harm to any person.`,
    question: "Aman is walking on the street when Mr. X suddenly slaps him without any reason. Enraged, Aman pulls out a heavy stick and hits Mr. X on the head, killing him instantly. Is Aman liable for murder?",
    options: [
      "Yes, because hitting someone with a stick on the head is likely to cause death.",
      "No, it is culpable homicide not amounting to murder due to grave and sudden provocation.",
      "Yes, because Aman should have called the police instead of hitting him.",
      "No, it was a pure accident."
    ],
    correct: 1,
    explanation: "The slap constitutes grave and sudden provocation, and Aman's immediate reaction led to the death, making it culpable homicide not amounting to murder."
  },
  {
    id: "nlat-3-q31",
    section: "GK & Current Affairs",
    question: "Which city hosted the 15th BRICS Summit in August 2023?",
    options: ["New Delhi, India", "Johannesburg, South Africa", "Beijing, China", "Moscow, Russia"],
    correct: 1,
    explanation: "Johannesburg, South Africa"
  },
  {
    id: "nlat-3-q121",
    section: "Quantitative Reasoning",
    question: "If the surface area of a cube is 150 cm², what is its volume?",
    options: ["100 cm³", "125 cm³", "150 cm³", "250 cm³"],
    correct: 1,
    explanation: "6a² = 150 => a² = 25 => a = 5. Volume = a³ = 125."
  }
];
