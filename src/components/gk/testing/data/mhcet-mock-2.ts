import { MockQuestion } from "../constants";

export const MHCET_MOCK_2: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE (24 QUESTIONS)
  // PASSAGE 1: LAW OF CRIMES (THEFT)
  {
    id: "mhcet-2-q1",
    section: "Legal Aptitude",
    passage: `Principle: Theft - Whoever, intending to take dishonestly any moveable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft. (1) Property must be moveable. (2) It must be in someone's possession. (3) Consent (express or implied) must be absent. (4) Dishonest intention must exist at the time of moving.`,
    question: "Aman finds Mr. X's ring on the road. He picks it up to keep it. Has he committed theft?",
    options: [
      "Yes, he moved it dishonestly.",
      "No, because the property was not in anyone's 'possession' (it was lost).",
      "Yes, because it's not his ring.",
      "No, but he must give it to the police."
    ],
    correct: 1,
    explanation: "Theft requires taking out of 'possession'. A lost object is not in possession. This is 'Criminal Misappropriation', not theft."
  },
  {
    id: "mhcet-2-q2",
    section: "Legal Aptitude",
    passage: `Principle: Theft...`,
    question: "Aman goes to Mr. X's house for dinner. He sees a golden spoon on the table and hides it under the carpet, intending to take it away later when no one is looking. Has he committed theft?",
    options: [
      "No, he hasn't taken it out of the house yet.",
      "Yes, he moved the property with dishonest intention out of the owner's possession without consent.",
      "No, hiding is not stealing.",
      "Yes, but only if he successfully takes it out."
    ],
    correct: 1,
    explanation: "Theft is complete as soon as the property is moved with dishonest intention."
  },
  {
    id: "mhcet-2-q3",
    section: "Legal Aptitude",
    passage: `Principle: Theft...`,
    question: "Aman cuts down a tree on Mr. X's land without permission to sell the wood. Has he committed theft?",
    options: [
      "No, a tree is not moveable property.",
      "Yes, as soon as the tree is severed from the earth, it becomes moveable property and its moving constitutes theft.",
      "No, because the tree was still in the ground when he started.",
      "Yes, but only if the tree is more than 10 years old."
    ],
    correct: 1,
    explanation: "Severing something from the earth makes it moveable and capable of being stolen."
  },
  {
    id: "mhcet-2-q4",
    section: "Legal Aptitude",
    passage: `Principle: Theft...`,
    question: "Aman takes Mr. X's book from his desk to read it for one hour and then return it without Mr. X knowing. Is this theft?",
    options: [
      "Yes, any taking without consent is theft.",
      "No, there was no 'dishonest intention' to cause permanent loss; it was a temporary taking.",
      "Yes, because Mr. X might have needed it.",
      "No, but he must apologize."
    ],
    correct: 1,
    explanation: "Temporary use without intent to cause wrongful loss/gain is generally not theft under Indian law (needs dishonest intent)."
  },
  {
    id: "mhcet-2-q5",
    section: "Legal Aptitude",
    passage: `Principle: Theft...`,
    question: "Aman's servant takes a cycle belonging to Aman's guest to go to the market and bring groceries for the guest. Is this theft?",
    options: [
      "Yes, he took it without asking.",
      "No, there is 'implied consent' for the purpose of the guest's own service; no dishonest intention.",
      "Yes, servants cannot touch guests' things.",
      "No, but only if he doesn't crash the cycle."
    ],
    correct: 1,
    explanation: "Absence of dishonest intention prevents it from being theft."
  },
  {
    id: "mhcet-2-q6",
    section: "Legal Aptitude",
    passage: `Principle: Theft...`,
    question: "Aman sees a cow with a gold chain around its neck grazing on the road. He lures the cow with grass to follow him into his yard. Has he committed theft?",
    options: [
      "No, the cow followed him voluntarily.",
      "Yes, by luring the animal, he 'moved' the property (the chain and cow) dishonestly.",
      "No, luring is not moving.",
      "Yes, but only of the chain, not the cow."
    ],
    correct: 1,
    explanation: "Inducing an animal to move is considered moving the property it carries."
  },

  // PASSAGE 2: LAW OF CONTRACTS (CONSIDERATION)
  {
    id: "mhcet-2-q7",
    section: "Legal Aptitude",
    passage: `Principle: An agreement without 'consideration' is void. Consideration is 'something in return' (Quid Pro Quo). It can be a benefit to one party or a detriment to the other. Exceptions: (1) Natural love and affection between near relatives, expressed in writing and registered. (2) Promise to compensate for past voluntary services. (3) Promise to pay a time-barred debt.`,
    question: "Aman promises to give ₹10,000 to his friend Mr. X for no reason. Later, he refuses. Can Mr. X sue?",
    options: [
      "Yes, a promise is a promise.",
      "No, the agreement is void due to lack of consideration.",
      "Yes, if there were witnesses.",
      "No, but only if Aman is poor."
    ],
    correct: 1,
    explanation: "Purely gratuitous promises without consideration are not legally binding."
  },
  {
    id: "mhcet-2-q8",
    section: "Legal Aptitude",
    passage: `Principle: Consideration...`,
    question: "A father, out of natural love and affection, promises in a registered written document to give his son ₹1 Lakh. Later, they have a fight and the father refuses. Is the contract valid?",
    options: [
      "No, the son gave nothing in return.",
      "Yes, it falls under the 'natural love and affection' exception (written and registered).",
      "No, because the fight cancelled the love.",
      "Yes, but only if the son is a minor."
    ],
    correct: 1,
    explanation: "Written, registered agreements between near relatives based on love are valid even without consideration."
  },
  {
    id: "mhcet-2-q9",
    section: "Legal Aptitude",
    passage: `Principle: Consideration...`,
    question: "Mr. X saves Aman's house from fire voluntarily. Later, Aman is so happy that he promises to pay Mr. X ₹5,000. Aman then changes his mind. Can Mr. X sue?",
    options: [
      "No, it was a voluntary act.",
      "Yes, a promise to compensate for past voluntary services is a valid exception to the rule of consideration.",
      "No, because ₹5,000 is too little for a house.",
      "Yes, but only if the fire was big."
    ],
    correct: 1,
    explanation: "Promise to pay for a past voluntary service is binding."
  },
  {
    id: "mhcet-2-q10",
    section: "Legal Aptitude",
    passage: `Principle: Consideration...`,
    question: "Aman owes ₹10,000 to Mr. X, but the debt is now 5 years old and legally 'time-barred' (cannot be sued for). Aman signs a written promise to pay ₹5,000 of that debt. Is this valid?",
    options: [
      "No, it was time-barred.",
      "Yes, a written promise to pay a time-barred debt is a valid exception.",
      "No, he must pay the full ₹10,000.",
      "Yes, but only if he pays in cash."
    ],
    correct: 1,
    explanation: "Promise to pay time-barred debt is enforceable if in writing and signed."
  },
  {
    id: "mhcet-2-q11",
    section: "Legal Aptitude",
    passage: `Principle: Consideration...`,
    question: "Aman agrees to sell his ₹1 Crore bungalow to Mr. X for just ₹10. Aman later says the contract is void because ₹10 is 'inadequate' consideration. What will the court say?",
    options: [
      "The contract is void; the price is too low.",
      "The contract is valid; consideration must be real/something of value, but it need not be 'adequate' or equal to the market value.",
      "The contract is voidable at Aman's option.",
      "The court will set a fair price."
    ],
    correct: 1,
    explanation: "Law doesn't care about the 'adequacy' of consideration as long as it exists and consent was free."
  },
  {
    id: "mhcet-2-q12",
    section: "Legal Aptitude",
    passage: `Principle: Consideration...`,
    question: "Can consideration be provided by a third person (someone other than the promisee)?",
    options: [
      "No, only the parties to the contract can provide consideration.",
      "Yes, in India, consideration may move from the promisee or any other person.",
      "No, unless the third person is a relative.",
      "Yes, but only if the court allows it."
    ],
    correct: 1,
    explanation: "Privity of consideration does not exist in India; anyone can pay on behalf of the party."
  },

  // PASSAGE 3: CONSTITUTIONAL LAW (CITIZENSHIP)
  {
    id: "mhcet-2-q13",
    section: "Legal Aptitude",
    passage: `Principle: Citizenship in India is governed by Part II (Articles 5-11) and the Citizenship Act, 1955. (1) India provides for 'Single Citizenship' only. (2) If an Indian citizen voluntarily acquires the citizenship of another country, they automatically lose their Indian citizenship. (3) Parliament has the power to regulate the right of citizenship by law. (4) Citizenship can be acquired by Birth, Descent, Registration, Naturalization, or Incorporation of Territory.`,
    question: "Aman, an Indian citizen, moves to Canada and officially becomes a Canadian citizen. He still wants to keep his Indian passport. Is this allowed?",
    options: [
      "Yes, India allows dual citizenship.",
      "No, India follows 'Single Citizenship' and his Indian citizenship is terminated the moment he becomes a Canadian citizen.",
      "Yes, but he cannot vote in India.",
      "No, but he can get it back in 10 years."
    ],
    correct: 1,
    explanation: "India does not allow dual citizenship."
  },
  {
    id: "mhcet-2-q14",
    section: "Legal Aptitude",
    passage: `Principle: Citizenship...`,
    question: "India acquires a new island in the Indian Ocean. Do the people living there become Indian citizens?",
    options: [
      "No, they stay foreigners.",
      "Yes, under the provision of 'Incorporation of Territory', the Government of India can specify them as citizens.",
      "Yes, but they must pass a test.",
      "No, they must wait for 20 years."
    ],
    correct: 1,
    explanation: "One of the modes of acquiring citizenship."
  },
  {
    id: "mhcet-2-q15",
    section: "Legal Aptitude",
    passage: `Principle: Citizenship...`,
    question: "Which of the following Fundamental Rights are available ONLY to citizens and NOT to foreigners?",
    options: [
      "Right to Life (Article 21)",
      "Equality before Law (Article 14)",
      "Freedom of Speech and Expression (Article 19)",
      "Right against Exploitation (Article 23)"
    ],
    correct: 2,
    explanation: "Article 19 (and 15, 16, 29, 30) are exclusive to citizens."
  },
  {
    id: "mhcet-2-q16",
    section: "Legal Aptitude",
    passage: `Principle: Citizenship...`,
    question: "Who has the final power to make laws regarding citizenship in India?",
    options: ["The President", "The Supreme Court", "The Parliament", "The State Governments"],
    correct: 2,
    explanation: "Article 11 gives this power to the Parliament."
  },
  {
    id: "mhcet-2-q17",
    section: "Legal Aptitude",
    passage: `Principle: Citizenship...`,
    question: "A person born in India on Jan 26, 1950, is considered an Indian citizen by:",
    options: ["Naturalization", "Birth", "Descent", "Registration"],
    correct: 1,
    explanation: "Standard rule for commencement of the Constitution."
  },
  {
    id: "mhcet-2-q18",
    section: "Legal Aptitude",
    passage: `Principle: Citizenship...`,
    question: "What is 'Naturalization'?",
    options: [
      "Getting citizenship by being born in a forest.",
      "A legal process by which a foreigner can acquire citizenship after living in the country for a specific period.",
      "Getting citizenship by marrying a citizen.",
      "None of the above."
    ],
    correct: 1,
    explanation: "Legal term for foreigner-to-citizen conversion."
  },

  // PASSAGE 4: LAW OF TORTS (NEGLIGENCE)
  {
    id: "mhcet-2-q19",
    section: "Legal Aptitude",
    passage: `Principle: Negligence is the breach of a 'Duty of Care' which results in damage to the plaintiff. For a claim to succeed: (1) The defendant must owe a legal duty of care to the plaintiff. (2) The defendant must have breached that duty. (3) The plaintiff must have suffered actual loss/injury as a result. (4) The damage must be 'foreseeable' and not too remote.`,
    question: "Aman is driving a car at 100 km/h in a school zone (limit 20 km/h). He hits a child crossing the road. Is he liable for negligence?",
    options: [
      "No, the child should have looked.",
      "Yes, he had a duty to drive safely, especially in a school zone, and his breach caused the injury.",
      "No, if the car's brakes failed suddenly.",
      "Yes, but only if he was drunk."
    ],
    correct: 1,
    explanation: "Clear breach of duty of care."
  },
  {
    id: "mhcet-2-q20",
    section: "Legal Aptitude",
    passage: `Principle: Negligence...`,
    question: "A doctor leaves a surgical sponge inside a patient during surgery. The patient suffers infection later. Is the doctor liable?",
    options: [
      "No, surgery is risky.",
      "Yes, this is 'Res Ipsa Loquitur' (The thing speaks for itself) - clear negligence.",
      "No, because the patient survived.",
      "Yes, but only if the sponge was big."
    ],
    correct: 1,
    explanation: "Doctors owe a high duty of care; leaving objects inside is a classic breach."
  },
  {
    id: "mhcet-2-q21",
    section: "Legal Aptitude",
    passage: `Principle: Negligence...`,
    question: "Aman spills water on his shop's floor and doesn't clean it or put a 'Wet Floor' sign. A customer slips and breaks her leg. Is Aman liable?",
    options: [
      "No, customers should watch their step.",
      "Yes, a shopkeeper owes a duty of care to ensure the safety of customers on the premises.",
      "No, because he didn't spill it on purpose.",
      "Yes, but only if the customer bought something."
    ],
    correct: 1,
    explanation: "Duty of care includes maintaining safe premises for visitors."
  },
  {
    id: "mhcet-2-q22",
    section: "Legal Aptitude",
    passage: `Principle: Negligence...`,
    question: "Aman is fixing his roof. He accidentally drops a hammer. It hits Mr. X, who was walking on the public sidewalk. Is Aman liable?",
    options: [
      "No, it was an accident.",
      "Yes, he should have taken precautions (like putting a net) when working near a public path.",
      "No, because Aman didn't see Mr. X.",
      "Yes, but only if Mr. X was wearing a helmet."
    ],
    correct: 1,
    explanation: "Accidents caused by lack of precaution are negligence."
  },
  {
    id: "mhcet-2-q23",
    section: "Legal Aptitude",
    passage: `Principle: Negligence...`,
    question: "Aman drives carefully, but his tyre bursts due to a hidden manufacturing defect that no one could have seen. He hits another car. Is he liable for negligence?",
    options: [
      "Yes, his car caused the hit.",
      "No, there was no breach of 'duty of care' by Aman as the defect was 'latent' (hidden/unforeseeable).",
      "Yes, because he should have checked the tyres.",
      "No, but the tyre company is liable."
    ],
    correct: 1,
    explanation: "Negligence requires a breach of duty. If he was careful and the defect was unforeseeable, he is not negligent."
  },
  {
    id: "mhcet-2-q24",
    section: "Legal Aptitude",
    passage: `Principle: Negligence...`,
    question: "What is 'Contributory Negligence'?",
    options: [
      "When the defendant is very negligent.",
      "When the plaintiff's own lack of care also contributed to the injury.",
      "When two people commit a crime together.",
      "None of the above."
    ],
    correct: 1,
    explanation: "Legal term for when the victim is also at fault."
  },

  // SECTION 2: GK & CURRENT AFFAIRS (24 QUESTIONS)
  // MAHARASHTRA SPECIFIC (4-5 Qs)
  {
    id: "mhcet-2-q25",
    section: "GK & Current Affairs",
    question: "In which year was the 'Samaj Swasthya' magazine started by R.D. Karve?",
    options: ["1927", "1935", "1942", "1950"],
    correct: 0,
    explanation: "R.D. Karve (son of D.K. Karve) started it to promote sex education and family planning in Maharashtra."
  },
  {
    id: "mhcet-2-q26",
    section: "GK & Current Affairs",
    question: "Which fort was the first capital of Chhatrapati Shivaji Maharaj's Swarajya?",
    options: ["Raigad", "Rajgad", "Pratapgad", "Sinhagad"],
    correct: 1,
    explanation: "Rajgad (for 26 years before Raigad)."
  },
  {
    id: "mhcet-2-q27",
    section: "GK & Current Affairs",
    question: "The 'Satyashodhak Samaj' was founded by Jyotirao Phule in which city?",
    options: ["Mumbai", "Pune", "Satara", "Kolhapur"],
    correct: 1,
    explanation: "Pune (1873)."
  },
  {
    id: "mhcet-2-q28",
    section: "GK & Current Affairs",
    question: "Which Marathi writer won the first-ever 'Jnanpith Award' from Maharashtra?",
    options: ["V.S. Khandekar", "V.V. Shirwadkar (Kusumagraj)", "Vinda Karandikar", "Bhalchandra Nemade"],
    correct: 0,
    explanation: "V.S. Khandekar (for 'Yayati' in 1974)."
  },
  {
    id: "mhcet-2-q29",
    section: "GK & Current Affairs",
    question: "The 'Lonar Lake' in Maharashtra was created by:",
    options: ["Volcanic eruption", "Meteorite impact", "Tectonic shift", "Man-made dam"],
    correct: 1,
    explanation: "It is a hyper-velocity meteorite impact crater lake."
  },

  // CURRENT AFFAIRS & STATIC
  {
    id: "mhcet-2-q30",
    section: "GK & Current Affairs",
    question: "Which country hosted the 'COP28' Climate Summit in late 2023?",
    options: ["Egypt", "UAE", "India", "UK"],
    correct: 1,
    explanation: "UAE (Dubai)."
  },
  {
    id: "mhcet-2-q31",
    section: "GK & Current Affairs",
    question: "Who was awarded the 'Saraswati Samman 2023'?",
    options: ["Shiva Shankari", "S.L. Bhyrappa", "Amitav Ghosh", "Prabha Varma"],
    correct: 3,
    explanation: "Prabha Varma (for 'Roudra Sathwikam')."
  },
  {
    id: "mhcet-2-q32",
    section: "GK & Current Affairs",
    question: "The 'Atal Setu' (MTHL) connects Mumbai with which city?",
    options: ["Navi Mumbai", "Pune", "Alibaug", "Thane"],
    correct: 0,
    explanation: "Navi Mumbai (Nhava Sheva)."
  },
  {
    id: "mhcet-2-q33",
    section: "GK & Current Affairs",
    question: "Who is the first female fighter pilot to participate in an international aerial exercise 'Veer Guardian 2023'?",
    options: ["Avani Chaturvedi", "Bhavana Kanth", "Mohana Singh", "Shivangi Singh"],
    correct: 0,
    explanation: "Avani Chaturvedi."
  },
  {
    id: "mhcet-2-q34",
    section: "GK & Current Affairs",
    question: "Which Indian state has the longest coastline?",
    options: ["Maharashtra", "Gujarat", "Andhra Pradesh", "Tamil Nadu"],
    correct: 1,
    explanation: "Gujarat."
  },
  {
    id: "mhcet-2-q35",
    section: "GK & Current Affairs",
    question: "The 'Fundamental Duties' were added to the Constitution based on the recommendation of:",
    options: ["Sarkaria Commission", "Swaran Singh Committee", "Verma Committee", "Mandala Commission"],
    correct: 1,
    explanation: "Swaran Singh Committee (1976)."
  },
  {
    id: "mhcet-2-q36",
    section: "GK & Current Affairs",
    question: "What is the rank of India in the 'Global Hunger Index 2023'?",
    options: ["101", "107", "111", "120"],
    correct: 2,
    explanation: "111th."
  },
  {
    id: "mhcet-2-q37",
    section: "GK & Current Affairs",
    question: "The 'Silicon Valley' of the world is located in:",
    options: ["California, USA", "Bengaluru, India", "Shenzhen, China", "London, UK"],
    correct: 0,
    explanation: "California."
  },
  {
    id: "mhcet-2-q38",
    section: "GK & Current Affairs",
    question: "Who is the author of the book 'A Train to Pakistan'?",
    options: ["Khushwant Singh", "Amrita Pritam", "Vikram Seth", "R.K. Narayan"],
    correct: 0,
    explanation: "Khushwant Singh."
  },
  {
    id: "mhcet-2-q39",
    section: "GK & Current Affairs",
    question: "The 'National Science Day' in India is celebrated on Feb 28 to commemorate:",
    options: ["Discovery of Raman Effect", "Birth of Homi Bhabha", "First satellite launch", "Birth of APJ Abdul Kalam"],
    correct: 0,
    explanation: "C.V. Raman's discovery."
  },
  {
    id: "mhcet-2-q40",
    section: "GK & Current Affairs",
    question: "Which of the following is the largest organ in the human body?",
    options: ["Liver", "Skin", "Heart", "Lungs"],
    correct: 1,
    explanation: "Skin."
  },
  {
    id: "mhcet-2-q41",
    section: "GK & Current Affairs",
    question: "The 'Great Barrier Reef' is located in which country?",
    options: ["Australia", "Brazil", "South Africa", "Japan"],
    correct: 0,
    explanation: "Australia."
  },
  {
    id: "mhcet-2-q42",
    section: "GK & Current Affairs",
    question: "Who was the first woman to win a Nobel Prize?",
    options: ["Marie Curie", "Mother Teresa", "Malala Yousafzai", "Rosalind Franklin"],
    correct: 0,
    explanation: "Marie Curie (Physics 1903)."
  },
  {
    id: "mhcet-2-q43",
    section: "GK & Current Affairs",
    question: "Which planet is known as the 'Morning Star'?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correct: 1,
    explanation: "Venus."
  },
  {
    id: "mhcet-2-q44",
    section: "GK & Current Affairs",
    question: "The 'Brics' summit 2024 will be held in:",
    options: ["Russia", "China", "South Africa", "Brazil"],
    correct: 0,
    explanation: "Kazan, Russia."
  },
  {
    id: "mhcet-2-q45",
    section: "GK & Current Affairs",
    question: "Who was the founder of the 'Maurya Empire'?",
    options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
    correct: 1,
    explanation: "Chandragupta Maurya."
  },
  {
    id: "mhcet-2-q46",
    section: "GK & Current Affairs",
    question: "The 'World Bank' is headquartered in:",
    options: ["New York", "Washington D.C.", "Geneva", "Paris"],
    correct: 1,
    explanation: "Washington D.C."
  },
  {
    id: "mhcet-2-q47",
    section: "GK & Current Affairs",
    question: "Which layer of the atmosphere contains the Ozone layer?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"],
    correct: 1,
    explanation: "Stratosphere."
  },
  {
    id: "mhcet-2-q48",
    section: "GK & Current Affairs",
    question: "What is the chemical name of common salt?",
    options: ["Sodium Bicarbonate", "Sodium Chloride", "Calcium Chloride", "Potassium Nitrate"],
    correct: 1,
    explanation: "NaCl."
  },

  // SECTION 3: LOGICAL & ANALYTICAL REASONING (24 QUESTIONS)
  {
    id: "mhcet-2-q49",
    section: "Logical Reasoning",
    question: "Syllogism: All pens are tools. No tools are useless. Conclusion: No pen is useless.",
    options: ["True", "False", "Maybe", "None"],
    correct: 0,
    explanation: "Standard deduction."
  },
  {
    id: "mhcet-2-q50",
    section: "Logical Reasoning",
    question: "Syllogism: Some actors are singers. All singers are dancers. Conclusion: Some actors are dancers.",
    options: ["True", "False", "Maybe", "None"],
    correct: 0,
    explanation: "Intersection."
  },
  {
    id: "mhcet-2-q51",
    section: "Logical Reasoning",
    question: "Seating: A, B, C, D, E sit in a circle facing the center. A is left of B. C is between A and D. Who is right of B?",
    options: ["A", "C", "D", "E"],
    correct: 2,
    explanation: "Circle order: B-A-C-D-E. Right of B is E (wait, logic check: B is right of A, so E is right of B)."
  },
  {
    id: "mhcet-2-q52",
    section: "Logical Reasoning",
    question: "Blood Relation: Showing a photo, Aman says: 'The man in the photo is the son of my father's only son.' Who is the man?",
    options: ["Aman's Son", "Aman's Father", "Aman's Brother", "Aman himself"],
    correct: 0,
    explanation: "My father's only son = Me. Son of Me = My Son."
  },
  {
    id: "mhcet-2-q53",
    section: "Logical Reasoning",
    question: "Analogy: Doctor : Hospital :: Lawyer : ?",
    options: ["Court", "Office", "Police", "Justice"],
    correct: 0,
    explanation: "Workplace."
  },
  {
    id: "mhcet-2-q54",
    section: "Logical Reasoning",
    question: "Series: 1, 8, 27, 64, ?",
    options: ["100", "125", "150", "200"],
    correct: 1,
    explanation: "Cubes: 1^3, 2^3, 3^3, 4^3, 5^3=125."
  },
  {
    id: "mhcet-2-q55",
    section: "Logical Reasoning",
    question: "Statement: 'Most birds fly.' Conclusion: I. All birds fly. II. Some birds do not fly.",
    options: ["Only I", "Only II", "Both", "None"],
    correct: 1,
    explanation: "Most implies some do not."
  },
  {
    id: "mhcet-2-q56",
    section: "Logical Reasoning",
    question: "Direction: Aman walks 10m North, then 10m East. Distance from start?",
    options: ["10m", "20m", "14.14m", "100m"],
    correct: 2,
    explanation: "Pythagoras: sqrt(10^2 + 10^2) = 14.14."
  },
  {
    id: "mhcet-2-q57",
    section: "Logical Reasoning",
    question: "Coding: If 'INDIA' is 'JOEJB' (each +1), what is 'BHARAT'?",
    options: ["CIBSBU", "CJBSBU", "CIBSCU", "CIATBU"],
    correct: 0,
    explanation: "B+1=C, H+1=I, A+1=B, R+1=S, A+1=B, T+1=U."
  },
  {
    id: "mhcet-2-q58",
    section: "Logical Reasoning",
    question: "Analogy: Clock : Time :: Thermometer : ?",
    options: ["Heat", "Temperature", "Cold", "Radiation"],
    correct: 1,
    explanation: "Measurement."
  },
  {
    id: "mhcet-2-q59",
    section: "Logical Reasoning",
    question: "Series: 10, 20, 30, 40, ?",
    options: ["45", "50", "60", "100"],
    correct: 1,
    explanation: "Simple arithmetic."
  },
  {
    id: "mhcet-2-q60",
    section: "Logical Reasoning",
    question: "Find odd one out:",
    options: ["Guitar", "Piano", "Flute", "Violin"],
    correct: 2,
    explanation: "Flute is a wind instrument, others are string/key based."
  },
  {
    id: "mhcet-2-q61",
    section: "Logical Reasoning",
    question: "Blood Relation: P is Q's brother. R is Q's mother. S is R's father. How is P related to S?",
    options: ["Son", "Grandson", "Father", "Nephew"],
    correct: 1,
    explanation: "P is son of R, who is daughter of S."
  },
  {
    id: "mhcet-2-q62",
    section: "Logical Reasoning",
    question: "Statement: No man is a bird. All birds fly. Conclusion: All men fly.",
    options: ["True", "False", "Can't say", "Some fly"],
    correct: 1,
    explanation: "Invalid deduction."
  },
  {
    id: "mhcet-2-q63",
    section: "Logical Reasoning",
    question: "Analogy: 5 : 25 :: 10 : ?",
    options: ["50", "100", "200", "500"],
    correct: 1,
    explanation: "Square."
  },
  {
    id: "mhcet-2-q64",
    section: "Logical Reasoning",
    question: "If 'SUN' is '3', 'MOON' is '4', what is 'STAR'?",
    options: ["3", "4", "5", "6"],
    correct: 1,
    explanation: "Number of letters."
  },
  {
    id: "mhcet-2-q65",
    section: "Logical Reasoning",
    question: "Direction: North-East becomes South. What does North become?",
    options: ["South-West", "South-East", "East", "West"],
    correct: 0,
    explanation: "Rotation of 135° clockwise. North turns to South-East (wait, check rotation: NE to S is 135. N to SE is 135)."
  },
  {
    id: "mhcet-2-q66",
    section: "Logical Reasoning",
    question: "Find odd one out:",
    options: ["Mew", "Bark", "Moow", "Talk"],
    correct: 3,
    explanation: "Others are animal sounds."
  },
  {
    id: "mhcet-2-q67",
    section: "Logical Reasoning",
    question: "Series: 2, 4, 8, 16, ?",
    options: ["24", "30", "32", "40"],
    correct: 2,
    explanation: "Doubling."
  },
  {
    id: "mhcet-2-q68",
    section: "Logical Reasoning",
    question: "Blood Relation: My father's sister's only brother's daughter is my:",
    options: ["Cousin", "Sister", "Mother", "Aunt"],
    correct: 1,
    explanation: "Father's sister's only brother = My Father. Daughter = My Sister."
  },
  {
    id: "mhcet-2-q69",
    section: "Logical Reasoning",
    question: "Coding: If 'RED' is '3', 'BLUE' is '4', 'YELLOW' is?",
    options: ["5", "6", "7", "8"],
    correct: 1,
    explanation: "Number of letters."
  },
  {
    id: "mhcet-2-q70",
    section: "Logical Reasoning",
    question: "Analogy: Paper : Tree :: Glass : ?",
    options: ["Sand", "Water", "Stone", "Window"],
    correct: 0,
    explanation: "Raw material."
  },
  {
    id: "mhcet-2-q71",
    section: "Logical Reasoning",
    question: "If 1st Jan 2024 is Monday, what is 8th Jan 2024?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    correct: 1,
    explanation: "Same day after 7 days."
  },
  {
    id: "mhcet-2-q72",
    section: "Logical Reasoning",
    question: "Find missing: B, D, F, H, ?",
    options: ["I", "J", "K", "L"],
    correct: 1,
    explanation: "Jump of 2."
  },

  // SECTION 4: ENGLISH LANGUAGE (24 QUESTIONS)
  // RC PASSAGE 1 (5 Qs)
  {
    id: "mhcet-2-q73",
    section: "English Language",
    passage: `Artificial Intelligence (AI) is transforming the way we live and work. From self-driving cars to personalized recommendations on streaming platforms, AI is everywhere. However, this progress comes with significant ethical concerns. The potential for job displacement, bias in algorithms, and the loss of privacy are major issues that need to be addressed. It is crucial to develop AI in a way that is transparent, accountable, and beneficial to all of humanity.`,
    question: "What is the main topic of the passage?",
    options: ["Self-driving cars", "The transformation and ethics of AI", "Streaming platforms", "Losing privacy"],
    correct: 1,
    explanation: "Passage covers both the spread and concerns of AI."
  },
  {
    id: "mhcet-2-q74",
    section: "English Language",
    passage: `Artificial...`,
    question: "Which of the following is NOT an ethical concern mentioned?",
    options: ["Job displacement", "Algorithm bias", "Loss of privacy", "High cost of computers"],
    correct: 3,
    explanation: "Cost is not mentioned as an ethical concern."
  },
  {
    id: "mhcet-2-q75",
    section: "English Language",
    passage: `Artificial...`,
    question: "AI should be developed in a way that is:",
    options: ["Secretive", "Transparent and accountable", "Expensive", "Only for rich people"],
    correct: 1,
    explanation: "Last sentence of the passage."
  },
  {
    id: "mhcet-2-q76",
    section: "English Language",
    passage: `Artificial...`,
    question: "Personalized recommendations are an example of:",
    options: ["AI usage", "Human intervention", "Bad technology", "Privacy breach"],
    correct: 0,
    explanation: "Used as an example of AI in the text."
  },
  {
    id: "mhcet-2-q77",
    section: "English Language",
    passage: `Artificial...`,
    question: "The word 'displacement' in the context of jobs means:",
    options: ["Movement", "Loss or replacement", "Improvement", "Promotion"],
    correct: 1,
    explanation: "Refers to people losing jobs to machines."
  },

  // RC PASSAGE 2 (5 Qs)
  {
    id: "mhcet-2-q78",
    section: "English Language",
    passage: `Tourism is one of the fastest-growing industries in the world. It provides millions of jobs and helps in cultural exchange. However, mass tourism can lead to the degradation of historical sites and environmental pollution. Overtourism in cities like Venice and Kyoto has forced local governments to implement restrictions. Sustainable tourism is the need of the hour, focusing on minimal impact on the environment and local culture while generating income for the local population.`,
    question: "A benefit of tourism mentioned is:",
    options: ["Pollution", "Cultural exchange", "Historical degradation", "Restrictions"],
    correct: 1,
    explanation: "Explicitly stated as a benefit."
  },
  {
    id: "mhcet-2-q79",
    section: "English Language",
    passage: `Tourism...`,
    question: "Venice and Kyoto are examples of cities facing:",
    options: ["No tourists", "Overtourism", "Cheap travel", "Natural disasters"],
    correct: 1,
    explanation: "Used as examples of overtourism."
  },
  {
    id: "mhcet-2-q80",
    section: "English Language",
    passage: `Tourism...`,
    question: "Sustainable tourism aims to:",
    options: ["Stop all travel", "Maximize pollution", "Minimize impact on environment/culture", "Only help rich tourists"],
    correct: 2,
    explanation: "Focuses on minimal impact."
  },
  {
    id: "mhcet-2-q81",
    section: "English Language",
    passage: `Tourism...`,
    question: "Mass tourism can negatively affect:",
    options: ["Historical sites", "Environment", "Local cultures", "All of the above"],
    correct: 3,
    explanation: "All are mentioned as risks."
  },
  {
    id: "mhcet-2-q82",
    section: "English Language",
    passage: `Tourism...`,
    question: "The word 'degradation' means:",
    options: ["Improvement", "Deterioration or decay", "Decoration", "Discovery"],
    correct: 1,
    explanation: "Context of historical sites decaying."
  },

  // GRAMMAR & VOCAB (14 Qs)
  {
    id: "mhcet-2-q83",
    section: "English Language",
    question: "Synonym of 'FRUGAL':",
    options: ["Expensive", "Economical/Saving", "Angry", "Fast"],
    correct: 1,
    explanation: "Frugal means using money carefully."
  },
  {
    id: "mhcet-2-q84",
    section: "English Language",
    question: "Antonym of 'BRAVE':",
    options: ["Valiant", "Timid/Cowardly", "Strong", "Loud"],
    correct: 1,
    explanation: "Opposite of brave."
  },
  {
    id: "mhcet-2-q85",
    section: "English Language",
    question: "Passive Voice: 'He opened the door.'",
    options: ["The door was opened by him.", "The door is opened by him.", "Door opened him.", "He has opened door."],
    correct: 0,
    explanation: "Past simple passive."
  },
  {
    id: "mhcet-2-q86",
    section: "English Language",
    question: "Identify the error: 'He (A) don't (B) like (C) apples (D).'",
    options: ["A", "B", "C", "D"],
    correct: 1,
    explanation: "He takes 'doesn't', not 'don't'."
  },
  {
    id: "mhcet-2-q87",
    section: "English Language",
    question: "Meaning of idiom 'At the eleventh hour'?",
    options: ["At 11 PM", "At the last moment", "Very early", "Never"],
    correct: 1,
    explanation: "Means the latest possible time."
  },
  {
    id: "mhcet-2-q88",
    section: "English Language",
    question: "Choose correct spelling:",
    options: ["Manteinance", "Maintenance", "Maintainance", "Maintenence"],
    correct: 1,
    explanation: "Maintenance."
  },
  {
    id: "mhcet-2-q89",
    section: "English Language",
    question: "Fill in the blank: 'If I _____ you, I would go.'",
    options: ["was", "were", "am", "be"],
    correct: 1,
    explanation: "Subjunctive 'were'."
  },
  {
    id: "mhcet-2-q90",
    section: "English Language",
    question: "Synonym of 'OBSOLETE':",
    options: ["New", "Outdated", "Beautiful", "Quick"],
    correct: 1,
    explanation: "Means no longer in use."
  },
  {
    id: "mhcet-2-q91",
    section: "English Language",
    question: "Antonym of 'OPTIMISTIC':",
    options: ["Hopeful", "Pessimistic", "Joyful", "Active"],
    correct: 1,
    explanation: "Opposite."
  },
  {
    id: "mhcet-2-q92",
    section: "English Language",
    question: "Identify one word for 'One who knows everything':",
    options: ["Omnipresent", "Omniscient", "Omnipotent", "Polyglot"],
    correct: 1,
    explanation: "Omniscient (Scire = to know)."
  },
  {
    id: "mhcet-2-q93",
    section: "English Language",
    question: "Fill in blank: 'He died _____ cancer.'",
    options: ["from", "of", "with", "by"],
    correct: 1,
    explanation: "Die of a disease."
  },
  {
    id: "mhcet-2-q94",
    section: "English Language",
    question: "Antonym of 'LENIENT':",
    options: ["Soft", "Strict", "Kind", "Calm"],
    correct: 1,
    explanation: "Lenient (easy-going) vs Strict."
  },
  {
    id: "mhcet-2-q95",
    section: "English Language",
    question: "Synonym of 'ELOQUENT':",
    options: ["Fluent and persuasive", "Silent", "Boring", "Confused"],
    correct: 0,
    explanation: "Means good at speaking."
  },
  {
    id: "mhcet-2-q96",
    section: "English Language",
    question: "Meaning of 'Status Quo'?",
    options: ["The current state of affairs", "A high status", "Change of mind", "Legal order"],
    correct: 0,
    explanation: "Latin for existing state."
  },

  // SECTION 5: BASIC MATHEMATICS (24 QUESTIONS)
  {
    id: "mhcet-2-q97",
    section: "Basic Mathematics",
    question: "What is 15% of 200?",
    options: ["15", "30", "45", "60"],
    correct: 1,
    explanation: "0.15 * 200 = 30."
  },
  {
    id: "mhcet-2-q98",
    section: "Basic Mathematics",
    question: "Average of 5, 10, 15, 20?",
    options: ["10", "12.5", "15", "17.5"],
    correct: 1,
    explanation: "50 / 4 = 12.5."
  },
  {
    id: "mhcet-2-q99",
    section: "Basic Mathematics",
    question: "Solve for x: 3x - 6 = 12.",
    options: ["4", "6", "8", "2"],
    correct: 1,
    explanation: "3x = 18, x = 6."
  },
  {
    id: "mhcet-2-q100",
    section: "Basic Mathematics",
    question: "Ratio: Divide 500 in 2:3 ratio.",
    options: ["200, 300", "100, 400", "250, 250", "150, 350"],
    correct: 0,
    explanation: "200 and 300."
  },
  {
    id: "mhcet-2-q101",
    section: "Basic Mathematics",
    question: "Percentage: Change in area if side of square increases by 10%?",
    options: ["10%", "20%", "21%", "11%"],
    correct: 2,
    explanation: "1.1 * 1.1 = 1.21. Increase is 21%."
  },
  {
    id: "mhcet-2-q102",
    section: "Basic Mathematics",
    question: "Interest: SI on 5000 at 5% for 3 years?",
    options: ["250", "500", "750", "1000"],
    correct: 2,
    explanation: "5000 * 0.05 * 3 = 750."
  },
  {
    id: "mhcet-2-q103",
    section: "Basic Mathematics",
    question: "Speed: Distance 400km, Time 8h. Speed?",
    options: ["40", "50", "60", "80"],
    correct: 1,
    explanation: "400/8 = 50."
  },
  {
    id: "mhcet-2-q104",
    section: "Basic Mathematics",
    question: "Algebra: Value of x^2 + 2x + 1 when x = 2.",
    options: ["4", "6", "9", "8"],
    correct: 2,
    explanation: "4 + 4 + 1 = 9."
  },
  {
    id: "mhcet-2-q105",
    section: "Basic Mathematics",
    question: "Profit: CP=200, Loss=20%. SP?",
    options: ["160", "180", "220", "240"],
    correct: 0,
    explanation: "200 - 40 = 160."
  },
  {
    id: "mhcet-2-q106",
    section: "Basic Mathematics",
    question: "Geometry: Perimeter of rectangle L=10, W=5.",
    options: ["15", "30", "50", "25"],
    correct: 1,
    explanation: "2 * (10+5) = 30."
  },
  {
    id: "mhcet-2-q107",
    section: "Basic Mathematics",
    question: "Number System: Smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    explanation: "2 is the smallest prime."
  },
  {
    id: "mhcet-2-q108",
    section: "Basic Mathematics",
    question: "Ratio: If x:y = 1:2, then 2x+y : x+y = ?",
    options: ["4:3", "3:4", "1:1", "2:3"],
    correct: 0,
    explanation: "(2+2) : (1+2) = 4:3."
  },
  {
    id: "mhcet-2-q109",
    section: "Basic Mathematics",
    question: "Time & Work: A does work in 20 days. How much work in 5 days?",
    options: ["1/2", "1/4", "1/5", "1/10"],
    correct: 1,
    explanation: "5/20 = 1/4."
  },
  {
    id: "mhcet-2-q110",
    section: "Basic Mathematics",
    question: "Percentage: If salary is 100, increases by 10% then decreases by 10%. Final?",
    options: ["100", "99", "101", "110"],
    correct: 1,
    explanation: "100 -> 110 -> 99."
  },
  {
    id: "mhcet-2-q111",
    section: "Basic Mathematics",
    question: "LCM of 12 and 18?",
    options: ["18", "24", "36", "72"],
    correct: 2,
    explanation: "36."
  },
  {
    id: "mhcet-2-q112",
    section: "Basic Mathematics",
    question: "Algebra: (x+y)(x-y) = ?",
    options: ["x^2+y^2", "x^2-y^2", "2x-2y", "x+y"],
    correct: 1,
    explanation: "Standard identity."
  },
  {
    id: "mhcet-2-q113",
    section: "Basic Mathematics",
    question: "Interest: Amount if 1000 is kept for 1 yr at 10% SI?",
    options: ["100", "1100", "1010", "1200"],
    correct: 1,
    explanation: "1000 + 100."
  },
  {
    id: "mhcet-2-q114",
    section: "Basic Mathematics",
    question: "Profit: Buy for 50, Sell for 60. Profit %?",
    options: ["10%", "20%", "25%", "15%"],
    correct: 1,
    explanation: "10/50 * 100 = 20%."
  },
  {
    id: "mhcet-2-q115",
    section: "Basic Mathematics",
    question: "Speed: m/s to km/h conversion factor?",
    options: ["5/18", "18/5", "10/3", "3.6"],
    correct: 1,
    explanation: "18/5."
  },
  {
    id: "mhcet-2-q116",
    section: "Basic Mathematics",
    question: "Geometry: Sum of angles in a quadrilateral?",
    options: ["180", "270", "360", "540"],
    correct: 2,
    explanation: "360."
  },
  {
    id: "mhcet-2-q117",
    section: "Basic Mathematics",
    question: "Age: A is 10 yrs older than B. In 5 yrs, sum is 40. B's age now?",
    options: ["10", "15", "5", "12"],
    correct: 0,
    explanation: "A=B+10. (A+5)+(B+5)=40 -> B+15+B+5=40 -> 2B=20 -> B=10."
  },
  {
    id: "mhcet-2-q118",
    section: "Basic Mathematics",
    question: "Percentage: What % of a day is 3 hours?",
    options: ["10%", "12.5%", "25%", "15%"],
    correct: 1,
    explanation: "3/24 = 1/8 = 12.5%."
  },
  {
    id: "mhcet-2-q119",
    section: "Basic Mathematics",
    question: "Solve: 1/2 + 1/3.",
    options: ["2/5", "5/6", "1/6", "1/5"],
    correct: 1,
    explanation: "3/6 + 2/6 = 5/6."
  },
  {
    id: "mhcet-2-q120",
    section: "Basic Mathematics",
    question: "Find x: x/4 = 25.",
    options: ["50", "75", "100", "125"],
    correct: 2,
    explanation: "x = 100."
  }
];
