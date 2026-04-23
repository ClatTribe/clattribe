import { MockQuestion } from "../constants";

export const MHCET_MOCK_5: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE (24 QUESTIONS)
  // PASSAGE 1: CONSTITUTIONAL AMENDMENTS (ARTICLE 368)
  {
    id: "mhcet-5-q1",
    section: "Legal Aptitude",
    passage: `Principle: Article 368 of the Indian Constitution grants Parliament the power to amend the Constitution. However, in the 'Kesavananda Bharati' case (1973), the Supreme Court ruled that Parliament cannot amend the 'Basic Structure' of the Constitution. Amendments can be of three types: (1) By Simple Majority (like forming new states), (2) By Special Majority (2/3rd present and voting + 50% of total strength), (3) By Special Majority + Ratification by half of the State Legislatures (for federal matters like GST).`,
    question: "Parliament passes an amendment to abolish the 'Independence of Judiciary'. The Supreme Court strikes it down. On what grounds?",
    options: [
      "Parliament has no power to amend.",
      "Independence of Judiciary is part of the 'Basic Structure' and cannot be destroyed.",
      "The amendment was not signed by the President.",
      "State legislatures didn't agree."
    ],
    correct: 1,
    explanation: "Basic Structure doctrine prevents destruction of core features."
  },
  {
    id: "mhcet-5-q2",
    section: "Legal Aptitude",
    passage: `Principle: Amendments...`,
    question: "The Government wants to change the way the President of India is elected. Which type of majority is required?",
    options: [
      "Simple Majority",
      "Special Majority only",
      "Special Majority + Ratification by at least half of the States.",
      "Only the President can change it."
    ],
    correct: 2,
    explanation: "Presidential election is a federal matter requiring state ratification."
  },
  {
    id: "mhcet-5-q3",
    section: "Legal Aptitude",
    passage: `Principle: Amendments...`,
    question: "Which amendment is known as the 'Mini Constitution' of India?",
    options: ["24th Amendment", "42nd Amendment", "44th Amendment", "73rd Amendment"],
    correct: 1,
    explanation: "42nd Amendment (1976) made massive changes."
  },
  {
    id: "mhcet-5-q4",
    section: "Legal Aptitude",
    passage: `Principle: Amendments...`,
    question: "The 'Right to Property' was removed from the list of Fundamental Rights by which amendment?",
    options: ["42nd", "44th", "52nd", "61st"],
    correct: 1,
    explanation: "44th Amendment (1978)."
  },
  {
    id: "mhcet-5-q5",
    section: "Legal Aptitude",
    passage: `Principle: Amendments...`,
    question: "The voting age was reduced from 21 to 18 years by the _____ Amendment.",
    options: ["61st", "69th", "73rd", "86th"],
    correct: 0,
    explanation: "61st Amendment (1989)."
  },
  {
    id: "mhcet-5-q6",
    section: "Legal Aptitude",
    passage: `Principle: Amendments...`,
    question: "Can the Preamble of the Constitution be amended?",
    options: [
      "No, it is the soul of the Constitution.",
      "Yes, it was amended once in 1976.",
      "Only by the Supreme Court.",
      "Yes, but only the date."
    ],
    correct: 1,
    explanation: "Amended by 42nd Amendment (added Socialist, Secular, Integrity)."
  },

  // PASSAGE 2: LAW OF TORTS (FALSE IMPRISONMENT)
  {
    id: "mhcet-5-q7",
    section: "Legal Aptitude",
    passage: `Principle: False Imprisonment is the total restraint of the liberty of a person, for however short a time, without lawful justification. (1) The restraint must be 'total' (blocking all directions). (2) Knowledge of the imprisonment by the plaintiff is not strictly necessary at the time. (3) Mere partial obstruction (blocking one way but leaving others open) is not false imprisonment.`,
    question: "Aman locks Mr. X in a room while Mr. X is asleep. Aman unlocks it before Mr. X wakes up. Mr. X later finds out. Is Aman liable?",
    options: [
      "No, Mr. X didn't even know he was locked.",
      "Yes, for the period he was locked, his liberty was totally restrained; knowledge is not essential.",
      "No, because he was not harmed.",
      "Yes, but only if he missed an appointment."
    ],
    correct: 1,
    explanation: "Knowledge is not a required element of false imprisonment (Meering v Grahame-White Aviation)."
  },
  {
    id: "mhcet-5-q8",
    section: "Legal Aptitude",
    passage: `Principle: False Imprisonment...`,
    question: "Aman blocks the main road to Mr. X's house, but there is another side-lane through which Mr. X can reach home. Has Aman committed false imprisonment?",
    options: [
      "Yes, he blocked the path.",
      "No, it was only a partial restraint; Mr. X had another way to go.",
      "Yes, because the side-lane is longer.",
      "No, but he committed a crime."
    ],
    correct: 1,
    explanation: "False imprisonment requires 'total' restraint."
  },
  {
    id: "mhcet-5-q9",
    section: "Legal Aptitude",
    passage: `Principle: False Imprisonment...`,
    question: "A security guard at a mall suspects Aman of shoplifting and forces him to wait in a room for 30 minutes until the police arrive. The police find nothing. Is the mall liable?",
    options: [
      "No, they have a right to suspect.",
      "Yes, it is false imprisonment if they had no 'lawful justification' (like clear evidence) to restrain him.",
      "No, because it was only 30 minutes.",
      "Yes, but only if they used handcuffs."
    ],
    correct: 1,
    explanation: "Suspicion without evidence is not always a lawful justification."
  },
  {
    id: "mhcet-5-q10",
    section: "Legal Aptitude",
    passage: `Principle: False Imprisonment...`,
    question: "Aman is in a lift that gets stuck between floors for 2 hours due to a power cut. Can he sue the building owner for false imprisonment?",
    options: [
      "Yes, he was totally restrained.",
      "No, there was no 'act' or 'intention' by the owner to restrain him; it was a technical failure.",
      "Yes, because the owner should have a generator.",
      "No, but he can sue for negligence."
    ],
    correct: 1,
    explanation: "False imprisonment requires an intentional act."
  },
  {
    id: "mhcet-5-q11",
    section: "Legal Aptitude",
    passage: `Principle: False Imprisonment...`,
    question: "What is the meaning of the writ 'Habeas Corpus'?",
    options: ["To command", "To have the body", "By what authority", "To be certified"],
    correct: 1,
    explanation: "Remedy against false imprisonment."
  },
  {
    id: "mhcet-5-q12",
    section: "Legal Aptitude",
    passage: `Principle: False Imprisonment...`,
    question: "Aman is told he cannot leave a party until he pays for a broken vase. He is not physically blocked, but he is afraid to leave. Is this false imprisonment?",
    options: [
      "No, he could have just walked out.",
      "Yes, restraint can be through 'force' or 'show of authority/threat' that makes the person feel they cannot leave.",
      "No, because he actually broke the vase.",
      "Yes, but only if they took his car keys."
    ],
    correct: 1,
    explanation: "Psychological restraint or threat of force also counts."
  },

  // PASSAGE 3: LAW OF CONTRACTS (VOID & VOIDABLE)
  {
    id: "mhcet-5-q13",
    section: "Legal Aptitude",
    passage: `Principle: (1) A 'Void' agreement is one which is not enforceable by law from the very beginning (Void-ab-initio). (2) A 'Voidable' contract is one which is enforceable at the option of one party (the aggrieved party) but not the other. (3) Agreements with minors are void-ab-initio. (4) Agreements where consent is obtained by Coercion (force), Undue Influence (pressure), Fraud, or Misrepresentation are voidable.`,
    question: "Aman (aged 16) signs a contract to buy a car. He pays and then changes his mind. What is the status of the contract?",
    options: [
      "It is valid because he paid.",
      "It is void-ab-initio (Mohori Bibee v Dharmodas Ghose); a minor's agreement has no legal value.",
      "It is voidable at Aman's option.",
      "It is valid if his parents sign it."
    ],
    correct: 1,
    explanation: "Minor's agreements are absolutely void in India."
  },
  {
    id: "mhcet-5-q14",
    section: "Legal Aptitude",
    passage: `Principle: Contracts...`,
    question: "Aman threatens to kill Mr. X if he doesn't sell his house for ₹1. Mr. X signs the papers. What is the status of the contract?",
    options: [
      "Void",
      "Voidable at the option of Mr. X due to 'Coercion'.",
      "Valid if the papers are registered.",
      "Illegal."
    ],
    correct: 1,
    explanation: "Consent obtained by force makes the contract voidable by the victim."
  },
  {
    id: "mhcet-5-q15",
    section: "Legal Aptitude",
    passage: `Principle: Contracts...`,
    question: "A spiritual guru tells his disciple that the disciple will not achieve heaven unless he transfers all his property to the guru. The disciple does so. This is an example of:",
    options: ["Coercion", "Fraud", "Undue Influence", "Misrepresentation"],
    correct: 2,
    explanation: "Dominating the will of another due to a position of trust/power."
  },
  {
    id: "mhcet-5-q16",
    section: "Legal Aptitude",
    passage: `Principle: Contracts...`,
    question: "Aman agrees to pay ₹10,000 to Mr. X if Mr. X murders his enemy. What is the status?",
    options: [
      "Voidable",
      "Void (Unlawful object/consideration).",
      "Valid but secret.",
      "Voidable at the option of the victim."
    ],
    correct: 1,
    explanation: "Agreements for illegal acts are void."
  },
  {
    id: "mhcet-5-q17",
    section: "Legal Aptitude",
    passage: `Principle: Contracts...`,
    question: "Aman sells a horse to Mr. X, knowing the horse is dead, but doesn't tell Mr. X. This is:",
    options: ["Fraud", "Mistake", "Bona fide", "Puffery"],
    correct: 0,
    explanation: "Intentional deception is fraud."
  },
  {
    id: "mhcet-5-q18",
    section: "Legal Aptitude",
    passage: `Principle: Contracts...`,
    question: "What happens if both parties to a contract are under a 'mistake of fact' essential to the agreement?",
    options: ["The contract is valid.", "The agreement is void.", "The contract is voidable.", "The court will fix it."],
    correct: 1,
    explanation: "Bilateral mistake of fact makes it void."
  },

  // PASSAGE 4: LAW OF TORTS (NUISANCE)
  {
    id: "mhcet-5-q19",
    section: "Legal Aptitude",
    passage: `Principle: Nuisance is the unlawful interference with a person's use or enjoyment of land. (1) Public Nuisance: Affects the community at large (e.g., blocking a public road). It is a crime. (2) Private Nuisance: Affects an individual's right (e.g., noise, smoke, or vibrations from a neighbor's property). The interference must be 'unreasonable' and 'continuous.'`,
    question: "Aman plays very loud music every night from 1 AM to 4 AM. His neighbor Mr. X cannot sleep. Is this nuisance?",
    options: [
      "No, Aman has freedom of expression.",
      "Yes, this is an unreasonable and continuous interference with Mr. X's enjoyment of his home.",
      "No, if Mr. X can use earplugs.",
      "Yes, but only if the music is bad."
    ],
    correct: 1,
    explanation: "Excessive noise at night is a classic private nuisance."
  },
  {
    id: "mhcet-5-q20",
    section: "Legal Aptitude",
    passage: `Principle: Nuisance...`,
    question: "A factory on a public highway releases thick black smoke that makes it impossible for drivers to see the road, causing multiple accidents. What kind of nuisance is this?",
    options: ["Private Nuisance", "Public Nuisance", "Both", "Neither"],
    correct: 1,
    explanation: "Affects the public at large."
  },
  {
    id: "mhcet-5-q21",
    section: "Legal Aptitude",
    passage: `Principle: Nuisance...`,
    question: "Aman's neighbor builds a balcony that hangs over Aman's garden, blocking sunlight. Is this nuisance?",
    options: [
      "No, it's his air space.",
      "Yes, it interferes with Aman's right to his land and enjoyment of sunlight.",
      "No, unless the balcony falls.",
      "Yes, but only if the balcony is ugly."
    ],
    correct: 1,
    explanation: "Encroachment on air space or blocking light can be nuisance."
  },
  {
    id: "mhcet-5-q22",
    section: "Legal Aptitude",
    passage: `Principle: Nuisance...`,
    question: "Can Aman sue for nuisance if he is 'extra-sensitive' (e.g., he cannot stand even the sound of a ticking clock which is normal to others)?",
    options: [
      "Yes, his rights are absolute.",
      "No, the law uses the standard of a 'reasonable person'; extra-sensitivity is not protected.",
      "Yes, if he has a doctor's certificate.",
      "No, unless the neighbor is doing it on purpose."
    ],
    correct: 1,
    explanation: "Legal standard is 'reasonable' use/enjoyment."
  },
  {
    id: "mhcet-5-q23",
    section: "Legal Aptitude",
    passage: `Principle: Nuisance...`,
    question: "What is 'Prescriptive Right' to commit nuisance?",
    options: [
      "If you do it for 20 years without being stopped, it becomes a legal right.",
      "The right to sue within 24 hours.",
      "A right granted by the Mayor.",
      "None of the above."
    ],
    correct: 0,
    explanation: "Easementary right through long usage."
  },
  {
    id: "mhcet-5-q24",
    section: "Legal Aptitude",
    passage: `Principle: Nuisance...`,
    question: "Is it a defense to say 'The plaintiff came to the nuisance' (e.g., Mr. X bought a house next to a pre-existing noisy factory)?",
    options: [
      "Yes, he knew about it.",
      "No, 'coming to the nuisance' is not a valid defense in law.",
      "Yes, if the factory was there for 50 years.",
      "No, but the factory can get a discount on the fine."
    ],
    correct: 1,
    explanation: "The factory cannot continue a nuisance just because they were there first."
  },

  // SECTION 2: GK & CURRENT AFFAIRS (24 QUESTIONS)
  // MAHARASHTRA SPECIFIC (4-5 Qs)
  {
    id: "mhcet-5-q25",
    section: "GK & Current Affairs",
    question: "Which Marathi movie was the first to represent India at the Oscars?",
    options: ["Shwaas", "Court", "Harishchandrachi Factory", "Sairat"],
    correct: 0,
    explanation: "Shwaas (2004) was the first Marathi film sent to the Oscars."
  },
  {
    id: "mhcet-5-q26",
    section: "GK & Current Affairs",
    question: "The 'Maharashtra State Board of Literature and Culture' was established in which year?",
    options: ["1960", "1965", "1950", "1972"],
    correct: 0,
    explanation: "1960 (with the formation of the state)."
  },
  {
    id: "mhcet-5-q27",
    section: "GK & Current Affairs",
    question: "Who is the 'Father of the Green Revolution' in Maharashtra?",
    options: ["Vasantrao Naik", "Sharad Pawar", "M.S. Swaminathan", "Verghese Kurien"],
    correct: 0,
    explanation: "Vasantrao Naik (longest serving CM of MH)."
  },
  {
    id: "mhcet-5-q28",
    section: "GK & Current Affairs",
    question: "Which folk dance is most popular in the Konkan region of Maharashtra?",
    options: ["Lavani", "Dhangari Gaja", "Koli Dance", "Povada"],
    correct: 2,
    explanation: "Koli (Fishermen) dance."
  },
  {
    id: "mhcet-5-q29",
    section: "GK & Current Affairs",
    question: "The 'Bombay Stock Exchange' (BSE) was established in:",
    options: ["1850", "1875", "1900", "1921"],
    correct: 1,
    explanation: "1875 (Native Share & Stock Brokers' Association)."
  },

  // CURRENT AFFAIRS & STATIC
  {
    id: "mhcet-5-q30",
    section: "GK & Current Affairs",
    question: "Which country's team won the 'Asia Cup 2023' (Cricket)?",
    options: ["Sri Lanka", "Pakistan", "India", "Bangladesh"],
    correct: 2,
    explanation: "India beat Sri Lanka in the final."
  },
  {
    id: "mhcet-5-q31",
    section: "GK & Current Affairs",
    question: "Who is the current Prime Minister of the United Kingdom (as of 2025)?",
    options: ["Rishi Sunak", "Keir Starmer", "Boris Johnson", "David Cameron"],
    correct: 1,
    explanation: "Keir Starmer (won the 2024 general election)."
  },
  {
    id: "mhcet-5-q32",
    section: "GK & Current Affairs",
    question: "The 'National Education Policy 2020' aims to increase the GER in higher education to 50% by:",
    options: ["2025", "2030", "2035", "2040"],
    correct: 2,
    explanation: "Target year is 2035."
  },
  {
    id: "mhcet-5-q33",
    section: "GK & Current Affairs",
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correct: 2,
    explanation: "Pacific Ocean."
  },
  {
    id: "mhcet-5-q34",
    section: "GK & Current Affairs",
    question: "The 'Quit India Movement' was launched in which year?",
    options: ["1920", "1930", "1942", "1947"],
    correct: 2,
    explanation: "August 1942."
  },
  {
    id: "mhcet-5-q35",
    section: "GK & Current Affairs",
    question: "Who is the first citizen of India?",
    options: ["Prime Minister", "President", "Chief Justice", "Speaker"],
    correct: 1,
    explanation: "The President."
  },
  {
    id: "mhcet-5-q36",
    section: "GK & Current Affairs",
    question: "The 'Sanchi Stupa' is located in which state?",
    options: ["Bihar", "Madhya Pradesh", "Uttar Pradesh", "Maharashtra"],
    correct: 1,
    explanation: "Madhya Pradesh."
  },
  {
    id: "mhcet-5-q37",
    section: "GK & Current Affairs",
    question: "Which element is the main component of a computer chip?",
    options: ["Iron", "Copper", "Silicon", "Gold"],
    correct: 2,
    explanation: "Silicon."
  },
  {
    id: "mhcet-5-q38",
    section: "GK & Current Affairs",
    question: "The 'Grand Slam' refers to which sport?",
    options: ["Tennis", "Golf", "Baseball", "Cricket"],
    correct: 0,
    explanation: "Major tennis tournaments."
  },
  {
    id: "mhcet-5-q39",
    section: "GK & Current Affairs",
    question: "Who founded the 'Brahmo Samaj'?",
    options: ["Raja Ram Mohan Roy", "Swami Vivekananda", "Dayanand Saraswati", "Annie Besant"],
    correct: 0,
    explanation: "Raja Ram Mohan Roy (1828)."
  },
  {
    id: "mhcet-5-q40",
    section: "GK & Current Affairs",
    question: "Which is the most populous country in the world (as of 2024)?",
    options: ["China", "India", "USA", "Indonesia"],
    correct: 1,
    explanation: "India overtook China in 2023."
  },
  {
    id: "mhcet-5-q41",
    section: "GK & Current Affairs",
    question: "The 'Nobel Prize' is NOT given for which field?",
    options: ["Physics", "Economics", "Mathematics", "Peace"],
    correct: 2,
    explanation: "Fields Medal is the equivalent for Math."
  },
  {
    id: "mhcet-5-q42",
    section: "GK & Current Affairs",
    question: "Who wrote 'Discovery of India'?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr. Ambedkar"],
    correct: 1,
    explanation: "Written in Ahmednagar Fort prison."
  },
  {
    id: "mhcet-5-q43",
    section: "GK & Current Affairs",
    question: "Which planet has the maximum number of moons?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    correct: 1,
    explanation: "Saturn (current count exceeds Jupiter)."
  },
  {
    id: "mhcet-5-q44",
    section: "GK & Current Affairs",
    question: "The 'World Trade Organization' (WTO) replaced which agreement?",
    options: ["GATT", "SAARC", "NATO", "IMF"],
    correct: 0,
    explanation: "General Agreement on Tariffs and Trade."
  },
  {
    id: "mhcet-5-q45",
    section: "GK & Current Affairs",
    question: "Which day is celebrated as 'International Women's Day'?",
    options: ["Feb 14", "March 8", "April 22", "June 5"],
    correct: 1,
    explanation: "March 8."
  },
  {
    id: "mhcet-5-q46",
    section: "GK & Current Affairs",
    question: "Who is the current Governor of the RBI (2024)?",
    options: ["Urjit Patel", "Raghuram Rajan", "Shaktikanta Das", "D. Subbarao"],
    correct: 2,
    explanation: "Shaktikanta Das."
  },
  {
    id: "mhcet-5-q47",
    section: "GK & Current Affairs",
    question: "The 'Statue of Liberty' was a gift to the USA from:",
    options: ["UK", "France", "Germany", "Italy"],
    correct: 1,
    explanation: "France."
  },
  {
    id: "mhcet-5-q48",
    section: "GK & Current Affairs",
    question: "Which language is used by the Supreme Court of India in its proceedings?",
    options: ["Hindi", "English", "Both", "Any regional language"],
    correct: 1,
    explanation: "Article 348 specifies English."
  },

  // SECTION 3: LOGICAL & ANALYTICAL REASONING (24 QUESTIONS)
  {
    id: "mhcet-5-q49",
    section: "Logical Reasoning",
    question: "Syllogism: All A are B. All B are C. No C is D. Conclusion: No A is D.",
    options: ["True", "False", "Maybe", "None"],
    correct: 0,
    explanation: "Standard chain."
  },
  {
    id: "mhcet-5-q50",
    section: "Logical Reasoning",
    question: "Seating: 5 people (P,Q,R,S,T) are in a line. P is to the left of Q. R is to the right of S. If T is in the middle and P is at an end, who is to the left of T?",
    options: ["P", "Q", "R", "S"],
    correct: 1,
    explanation: "Order: P-Q-T-S-R (or similar). Left of T is Q."
  },
  {
    id: "mhcet-5-q51",
    section: "Logical Reasoning",
    question: "Blood Relation: Aman is the brother of Mr. X's wife. Relation of Mr. X to Aman?",
    options: ["Brother", "Brother-in-law", "Cousin", "Father"],
    correct: 1,
    explanation: "Self-explanatory."
  },
  {
    id: "mhcet-5-q52",
    section: "Logical Reasoning",
    question: "Analogy: Car : Garage :: Aeroplane : ?",
    options: ["Airport", "Hangar", "Sky", "Runway"],
    correct: 1,
    explanation: "Storage place."
  },
  {
    id: "mhcet-5-q53",
    section: "Logical Reasoning",
    question: "Series: 1, 2, 4, 7, 11, ?",
    options: ["15", "16", "17", "18"],
    correct: 1,
    explanation: "+1, +2, +3, +4, +5 = 16."
  },
  {
    id: "mhcet-5-q54",
    section: "Logical Reasoning",
    question: "Statement: 'Every child should go to school.' Argument 1: Yes, it is a right. Argument 2: No, children can work and earn.",
    options: ["Arg 1 is strong", "Arg 2 is strong", "Both strong", "Neither"],
    correct: 0,
    explanation: "Arg 2 violates fundamental rights."
  },
  {
    id: "mhcet-5-q55",
    section: "Logical Reasoning",
    question: "Direction: Aman faces West. He turns 270° clockwise. Which direction?",
    options: ["North", "South", "East", "West"],
    correct: 1,
    explanation: "W -> N (90) -> E (180) -> S (270)."
  },
  {
    id: "mhcet-5-q56",
    section: "Logical Reasoning",
    question: "Coding: If 'CAT' is 'ECV', what is 'DOG'?",
    options: ["FQH", "FPH", "FQI", "EQH"],
    correct: 2,
    explanation: "Each letter +2."
  },
  {
    id: "mhcet-5-q57",
    section: "Logical Reasoning",
    question: "Find odd one out:",
    options: ["Google", "Amazon", "Microsoft", "Wikipedia"],
    correct: 3,
    explanation: "Others are commercial corporations; Wiki is non-profit."
  },
  {
    id: "mhcet-5-q58",
    section: "Logical Reasoning",
    question: "Analogy: 9 : 81 :: 12 : ?",
    options: ["120", "144", "169", "100"],
    correct: 1,
    explanation: "Square."
  },
  {
    id: "mhcet-5-q59",
    section: "Logical Reasoning",
    question: "Series: A, E, I, O, ?",
    options: ["P", "U", "V", "W"],
    correct: 1,
    explanation: "Vowels."
  },
  {
    id: "mhcet-5-q60",
    section: "Logical Reasoning",
    question: "Statement: No fish can fly. Shark is a fish. Conclusion: Shark cannot fly.",
    options: ["True", "False", "Maybe", "None"],
    correct: 0,
    explanation: "Direct deduction."
  },
  {
    id: "mhcet-5-q61",
    section: "Logical Reasoning",
    question: "Blood Relation: My brother's only nephew's mother is my:",
    options: ["Sister", "Sister-in-law", "Aunt", "Daughter"],
    correct: 0,
    explanation: "If I am the only brother, my brother's nephew is my son. His mother is my wife. Wait. 'My brother's only nephew' = My son. His mother = My wife. Or my sister's son? If my brother has one nephew, it must be my son. So mother is my wife/sister. Usually sister-in-law or sister."
  },
  {
    id: "mhcet-5-q62",
    section: "Logical Reasoning",
    question: "Clock: Angle at 4:00?",
    options: ["90", "120", "150", "180"],
    correct: 1,
    explanation: "4 * 30 = 120."
  },
  {
    id: "mhcet-5-q63",
    section: "Logical Reasoning",
    question: "Analogy: Book : Page :: Wall : ?",
    options: ["Room", "Brick", "Paint", "Roof"],
    correct: 1,
    explanation: "Unit."
  },
  {
    id: "mhcet-5-q64",
    section: "Logical Reasoning",
    question: "If 'ICE' is '935', what is 'CAB'?",
    options: ["312", "321", "123", "213"],
    correct: 0,
    explanation: "Positions."
  },
  {
    id: "mhcet-5-q65",
    section: "Logical Reasoning",
    question: "Direction: If you move clockwise from North, the third cardinal direction you reach is?",
    options: ["East", "South", "West", "North"],
    correct: 2,
    explanation: "N -> E -> S -> W."
  },
  {
    id: "mhcet-5-q66",
    section: "Logical Reasoning",
    question: "Series: 2, 6, 12, 20, ?",
    options: ["25", "30", "32", "35"],
    correct: 1,
    explanation: "+4, +6, +8, +10 = 30."
  },
  {
    id: "mhcet-5-q67",
    section: "Logical Reasoning",
    question: "Find odd one out:",
    options: ["CPU", "RAM", "Mouse", "Hard Disk"],
    correct: 2,
    explanation: "Mouse is input, others are internal processing/storage."
  },
  {
    id: "mhcet-5-q68",
    section: "Logical Reasoning",
    question: "Analogy: 1 : 1 :: 5 : ?",
    options: ["5", "10", "25", "1"],
    correct: 2,
    explanation: "Square."
  },
  {
    id: "mhcet-5-q69",
    section: "Logical Reasoning",
    question: "Coding: If 'SUN' is 'TTO', what is 'MOON'?",
    options: ["NPPN", "NPOO", "NPPO", "NOOP"],
    correct: 2,
    explanation: "M+1=N, O+1=P, O+1=P, N+1=O."
  },
  {
    id: "mhcet-5-q70",
    section: "Logical Reasoning",
    question: "Statement: Should homework be abolished? Argument 1: Yes, kids need play time. Argument 2: No, it reinforces learning.",
    options: ["Arg 1 strong", "Arg 2 strong", "Both strong", "Neither"],
    correct: 2,
    explanation: "Both are valid educational perspectives."
  },
  {
    id: "mhcet-5-q71",
    section: "Logical Reasoning",
    question: "Analogy: Water : Drink :: Bread : ?",
    options: ["Food", "Eat", "Bake", "Wheat"],
    correct: 1,
    explanation: "Verb/Action."
  },
  {
    id: "mhcet-5-q72",
    section: "Logical Reasoning",
    question: "Series: 100, 50, 25, ?",
    options: ["10", "12.5", "5", "0"],
    correct: 1,
    explanation: "Division by 2."
  },

  // SECTION 4: ENGLISH LANGUAGE (24 QUESTIONS)
  // RC PASSAGE 1 (5 Qs)
  {
    id: "mhcet-5-q73",
    section: "English Language",
    passage: `Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes. implementing effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming more innovative.`,
    question: "What is cybersecurity?",
    options: ["Making computers faster", "Protecting systems from digital attacks", "Building websites", "Selling antivirus"],
    correct: 1,
    explanation: "First sentence."
  },
  {
    id: "mhcet-5-q74",
    section: "English Language",
    passage: `Cybersecurity...`,
    question: "A goal of cyberattacks mentioned is:",
    options: ["Improving internet speed", "Extorting money", "Helping businesses", "Buying devices"],
    correct: 1,
    explanation: "Mentioned as one of the aims."
  },
  {
    id: "mhcet-5-q75",
    section: "English Language",
    passage: `Cybersecurity...`,
    question: "Why is cybersecurity challenging today?",
    options: ["There are fewer computers", "Attackers are becoming innovative", "Internet is too cheap", "People don't use phones"],
    correct: 1,
    explanation: "Last sentence."
  },
  {
    id: "mhcet-5-q76",
    section: "English Language",
    passage: `Cybersecurity...`,
    question: "Cyberattacks can target:",
    options: ["Systems", "Networks", "Programs", "All of the above"],
    correct: 3,
    explanation: "Mentioned in the first sentence."
  },
  {
    id: "mhcet-5-q77",
    section: "English Language",
    passage: `Cybersecurity...`,
    question: "The word 'Extorting' means:",
    options: ["Giving away", "Obtaining by force or threat", "Saving", "Borrowing"],
    correct: 1,
    explanation: "Standard meaning."
  },

  // RC PASSAGE 2 (5 Qs)
  {
    id: "mhcet-5-q78",
    section: "English Language",
    passage: `Space exploration has always fascinated humanity. Since the launch of Sputnik in 1957, we have made incredible strides, from landing on the moon to sending rovers to Mars. These missions are not just about curiosity; they lead to technological breakthroughs that benefit life on Earth, such as satellite communication and advanced medical imaging. as we look toward the future, the prospect of human settlements on other planets is no longer just the stuff of science fiction.`,
    question: "When did the space age begin with Sputnik?",
    options: ["1947", "1957", "1969", "2000"],
    correct: 1,
    explanation: "Date mentioned in the text."
  },
  {
    id: "mhcet-5-q79",
    section: "English Language",
    passage: `Space...`,
    question: "Which benefit of space missions is mentioned?",
    options: ["Faster airplanes", "Satellite communication", "Cheaper food", "More gold"],
    correct: 1,
    explanation: "Mentioned as a breakthrough."
  },
  {
    id: "mhcet-5-q80",
    section: "English Language",
    passage: `Space...`,
    question: "Future missions might involve:",
    options: ["Stopping sun", "Human settlements on other planets", "Destroying moon", "Ignoring Mars"],
    correct: 1,
    explanation: "Mentioned at the end."
  },
  {
    id: "mhcet-5-q81",
    section: "English Language",
    passage: `Space...`,
    question: "The passage suggests that space missions are:",
    options: ["A waste of money", "Useful for life on Earth", "Dangerous and useless", "Only for curiosity"],
    correct: 1,
    explanation: "Author highlights breakthroughs."
  },
  {
    id: "mhcet-5-q82",
    section: "English Language",
    passage: `Space...`,
    question: "The word 'Strides' means:",
    options: ["Steps or progress", "Failures", "Stars", "Engines"],
    correct: 0,
    explanation: "Meaning progress."
  },

  // GRAMMAR & VOCAB (14 Qs)
  {
    id: "mhcet-5-q83",
    section: "English Language",
    question: "Synonym of 'EFFICIENT':",
    options: ["Lazy", "Productive", "Slow", "Weak"],
    correct: 1,
    explanation: "Efficiency relates to productivity."
  },
  {
    id: "mhcet-5-q84",
    section: "English Language",
    question: "Antonym of 'RIGID':",
    options: ["Hard", "Flexible", "Solid", "Tough"],
    correct: 1,
    explanation: "Opposite."
  },
  {
    id: "mhcet-5-q85",
    section: "English Language",
    question: "Identify the error: 'The (A) furniture (B) in (C) this (D) room (E) are (F) old.'",
    options: ["A", "B", "C", "D", "E", "F"],
    correct: 5,
    explanation: "Furniture is uncountable/singular; should be 'is old'."
  },
  {
    id: "mhcet-5-q86",
    section: "English Language",
    question: "Meaning of idiom 'Burn the midnight oil'?",
    options: ["To waste energy", "To work late into the night", "To cook food", "To be angry"],
    correct: 1,
    explanation: "Common idiom for working hard."
  },
  {
    id: "mhcet-5-q87",
    section: "English Language",
    question: "Choose correct spelling:",
    options: ["Questionnaire", "Questionaire", "Questionnare", "Questionnair"],
    correct: 0,
    explanation: "Questionnaire."
  },
  {
    id: "mhcet-5-q88",
    section: "English Language",
    question: "Fill in blank: 'He is the _____ boy in the class.'",
    options: ["tall", "taller", "tallest", "most tall"],
    correct: 2,
    explanation: "Superlative degree."
  },
  {
    id: "mhcet-5-q89",
    section: "English Language",
    question: "Synonym of 'REVERE':",
    options: ["Hate", "Respect/Venerate", "Reverse", "Repeat"],
    correct: 1,
    explanation: "Revere means deep respect."
  },
  {
    id: "mhcet-5-q90",
    section: "English Language",
    question: "Antonym of 'GIGANTIC':",
    options: ["Huge", "Tiny", "Large", "Fast"],
    correct: 1,
    explanation: "Opposite."
  },
  {
    id: "mhcet-5-q91",
    section: "English Language",
    question: "One word for 'A person who loves books':",
    options: ["Bibliophile", "Philanthropist", "Bookworm", "Librarian"],
    correct: 0,
    explanation: "Bibliophile (Biblio = Book, Phile = Lover)."
  },
  {
    id: "mhcet-5-q92",
    section: "English Language",
    question: "Fill in blank: 'She is good _____ Math.'",
    options: ["in", "at", "with", "for"],
    correct: 1,
    explanation: "Good at a subject."
  },
  {
    id: "mhcet-5-q93",
    section: "English Language",
    question: "Meaning of 'Ad interim'?",
    options: ["Forever", "In the meantime", "At the end", "Without doubt"],
    correct: 1,
    explanation: "Temporary/Interim."
  },
  {
    id: "mhcet-5-q94",
    section: "English Language",
    question: "Synonym of 'METICULOUS':",
    options: ["Careless", "Careful and precise", "Fast", "Brave"],
    correct: 1,
    explanation: "Detail-oriented."
  },
  {
    id: "mhcet-5-q95",
    section: "English Language",
    question: "One word for 'Murder of a king':",
    options: ["Homicide", "Regicide", "Patricide", "Fratricide"],
    correct: 1,
    explanation: "Rex/Regis = King."
  },
  {
    id: "mhcet-5-q96",
    section: "English Language",
    question: "Identify the antonym of 'AMBIGUOUS':",
    options: ["Unclear", "Certain/Clear", "Vague", "Doubtful"],
    correct: 1,
    explanation: "Ambiguous (unclear) vs Certain."
  },

  // SECTION 5: BASIC MATHEMATICS (24 QUESTIONS)
  {
    id: "mhcet-5-q97",
    section: "Basic Mathematics",
    question: "What is 10% of 10% of 1000?",
    options: ["10", "100", "1", "0.1"],
    correct: 0,
    explanation: "10% of 1000 is 100. 10% of 100 is 10."
  },
  {
    id: "mhcet-5-q98",
    section: "Basic Mathematics",
    question: "Solve: x/2 + 5 = 15.",
    options: ["10", "20", "30", "5"],
    correct: 1,
    explanation: "x/2 = 10, x = 20."
  },
  {
    id: "mhcet-5-q99",
    section: "Basic Mathematics",
    question: "Average of 1, 2, 3, 4, 5, 6, 7?",
    options: ["3", "4", "5", "6"],
    correct: 1,
    explanation: "Middle value of odd count AP."
  },
  {
    id: "mhcet-5-q100",
    section: "Basic Mathematics",
    question: "Ratio: Divide 100 in 1:4 ratio.",
    options: ["20, 80", "10, 90", "25, 75", "50, 50"],
    correct: 0,
    explanation: "20 and 80."
  },
  {
    id: "mhcet-5-q101",
    section: "Basic Mathematics",
    question: "Percentage: If 50 is 10% of x, x is?",
    options: ["5", "50", "500", "1000"],
    correct: 2,
    explanation: "50 * 10 = 500."
  },
  {
    id: "mhcet-5-q102",
    section: "Basic Mathematics",
    question: "Interest: SI for 1000 at 10% for 1 month?",
    options: ["100", "10", "8.33", "120"],
    correct: 2,
    explanation: "100 / 12 = 8.33."
  },
  {
    id: "mhcet-5-q103",
    section: "Basic Mathematics",
    question: "Speed: 100m in 10 sec. Speed in km/h?",
    options: ["10", "36", "60", "72"],
    correct: 1,
    explanation: "10 m/s * 18/5 = 36 km/h."
  },
  {
    id: "mhcet-5-q104",
    section: "Basic Mathematics",
    question: "Algebra: (x+1)^2 = ?",
    options: ["x^2+1", "x^2+2x+1", "x^2+x+1", "2x+2"],
    correct: 1,
    explanation: "Expansion."
  },
  {
    id: "mhcet-5-q105",
    section: "Basic Mathematics",
    question: "Profit: CP=80, SP=100. Profit %?",
    options: ["20%", "25%", "10%", "15%"],
    correct: 1,
    explanation: "20/80 = 25%."
  },
  {
    id: "mhcet-5-q106",
    section: "Basic Mathematics",
    question: "Geometry: Diagonal of square with side 1?",
    options: ["1", "sqrt(2)", "2", "sqrt(3)"],
    correct: 1,
    explanation: "a * sqrt(2)."
  },
  {
    id: "mhcet-5-q107",
    section: "Basic Mathematics",
    question: "Number System: HCF of two primes?",
    options: ["0", "1", "Product", "Smaller one"],
    correct: 1,
    explanation: "Primes are coprime."
  },
  {
    id: "mhcet-5-q108",
    section: "Basic Mathematics",
    question: "Ratio: 0.5 : 2 in simplest form.",
    options: ["1:4", "1:2", "5:2", "1:5"],
    correct: 0,
    explanation: "5/20 = 1/4."
  },
  {
    id: "mhcet-5-q109",
    section: "Basic Mathematics",
    question: "Time & Work: 10 men do work in 10 days. 5 men?",
    options: ["5", "10", "20", "50"],
    correct: 2,
    explanation: "Half the men = double the time."
  },
  {
    id: "mhcet-5-q110",
    section: "Basic Mathematics",
    question: "Percentage: y is 200% of x. then x is what % of y?",
    options: ["50%", "100%", "200%", "25%"],
    correct: 0,
    explanation: "x/2x = 50%."
  },
  {
    id: "mhcet-5-q111",
    section: "Basic Mathematics",
    question: "LCM of first 3 prime numbers?",
    options: ["6", "10", "30", "15"],
    correct: 2,
    explanation: "2 * 3 * 5 = 30."
  },
  {
    id: "mhcet-5-q112",
    section: "Basic Mathematics",
    question: "Algebra: x^0 is?",
    options: ["0", "1", "x", "Infinity"],
    correct: 1,
    explanation: "Any non-zero number to power 0 is 1."
  },
  {
    id: "mhcet-5-q113",
    section: "Basic Mathematics",
    question: "Interest: SI = P*R*T/100. If P doubles and others same, SI?",
    options: ["Doubles", "Triples", "Halves", "Same"],
    correct: 0,
    explanation: "Directly proportional."
  },
  {
    id: "mhcet-5-q114",
    section: "Basic Mathematics",
    question: "Profit: Buy 2 for 10, Sell each for 6. Profit?",
    options: ["20%", "10%", "2", "6"],
    correct: 0,
    explanation: "Cost 10, Sale 12. 2/10 = 20%."
  },
  {
    id: "mhcet-5-q115",
    section: "Basic Mathematics",
    question: "Speed: 1 km/h is how many m/min?",
    options: ["100/6", "1000/60", "16.66", "All of the above"],
    correct: 3,
    explanation: "1000m / 60min."
  },
  {
    id: "mhcet-5-q116",
    section: "Basic Mathematics",
    question: "Geometry: Sum of interior angles of hexagon?",
    options: ["360", "540", "720", "900"],
    correct: 2,
    explanation: "(6-2)*180 = 720."
  },
  {
    id: "mhcet-5-q117",
    section: "Basic Mathematics",
    question: "Age: A was 10, five years ago. Age now?",
    options: ["5", "10", "15", "20"],
    correct: 2,
    explanation: "10 + 5 = 15."
  },
  {
    id: "mhcet-5-q118",
    section: "Basic Mathematics",
    question: "Percentage: What is 1/3 as %?",
    options: ["30%", "33%", "33.33%", "3.33%"],
    correct: 2,
    explanation: "Standard fraction."
  },
  {
    id: "mhcet-5-q119",
    section: "Basic Mathematics",
    question: "Solve: 5 - 5 + 5 * 0.",
    options: ["0", "5", "10", "-5"],
    correct: 0,
    explanation: "0 + 0 = 0."
  },
  {
    id: "mhcet-5-q120",
    section: "Basic Mathematics",
    question: "Find x: log10(100) = x.",
    options: ["1", "2", "10", "100"],
    correct: 1,
    explanation: "10^2 = 100."
  }
];
