import { MockQuestion } from "../constants";

export const NLAT_MOCK_4: MockQuestion[] = [
  // SECTION 1: LEGAL REASONING (30 QUESTIONS)
  // PASSAGE 1: TORTS (STRICT & ABSOLUTE LIABILITY)
  {
    id: "nlat-4-q1",
    section: "Legal Reasoning",
    passage: `Principle: (1) Strict Liability (Rylands v. Fletcher): If a person brings onto their land a dangerous thing that is likely to cause mischief if it escapes, they are liable for any damage caused by its escape, even if they were not negligent. Exceptions: Act of God, Act of Third Party, Plaintiff's own fault. (2) Absolute Liability (M.C. Mehta v. Union of India): If an enterprise is engaged in a hazardous or inherently dangerous activity and any harm results to anyone on account of an accident in the operation of such activity, the enterprise is absolutely liable to compensate all those who are affected. No exceptions are allowed.`,
    question: "A massive chemical plant in a city leaks toxic gas due to an earthquake. The gas causes health issues for thousands of residents. The company claims it was an 'Act of God' (the earthquake). Is the company liable?",
    options: [
      "No, because earthquakes are unpredictable acts of God.",
      "Yes, under Absolute Liability, hazardous enterprises have no defense, even for Acts of God.",
      "No, unless the residents can prove the company's pipes were weak.",
      "Yes, but only under Strict Liability, not Absolute Liability."
    ],
    correct: 1,
    explanation: "In India, for hazardous industries, Absolute Liability applies, which allows NO exceptions (not even Act of God)."
  },
  {
    id: "nlat-4-q2",
    section: "Legal Reasoning",
    passage: `Principle: Strict & Absolute Liability...`,
    question: "Aman keeps a pet python in a glass tank in his apartment. A burglar breaks in, smashes the tank to steal it, and the python bites the burglar. Is Aman liable?",
    options: [
      "Yes, keeping a python is a dangerous activity.",
      "No, because the escape was caused by the 'Act of a Third Party' (the burglar) and the 'Plaintiff's own fault' (the burglary).",
      "Yes, under Absolute Liability.",
      "No, because pythons are not 'dangerous things' in the legal sense."
    ],
    correct: 1,
    explanation: "Aman is a private individual, so Strict Liability applies. The act of a third party and the plaintiff's own fault are valid defenses."
  },
  {
    id: "nlat-4-q3",
    section: "Legal Reasoning",
    passage: `Principle: Strict & Absolute Liability...`,
    question: "An industrial factory stores large quantities of water in a reservoir for its cooling systems. A group of terrorists bombs the reservoir, causing a flood in the neighboring village. Is the factory liable?",
    options: [
      "No, it was an Act of a Third Party.",
      "Yes, under Absolute Liability, if the activity is considered hazardous.",
      "Yes, because they should have had better security.",
      "No, because water is not a dangerous thing."
    ],
    correct: 1,
    explanation: "If the enterprise is 'hazardous', Absolute Liability applies and 'Act of Third Party' is not a defense."
  },
  {
    id: "nlat-4-q4",
    section: "Legal Reasoning",
    passage: `Principle: Strict & Absolute Liability...`,
    question: "Aman builds a swimming pool in his backyard. Due to a manufacturing defect in the tiles, water seeps into the neighbor's basement. Which principle applies?",
    options: [
      "Absolute Liability",
      "Strict Liability",
      "Negligence",
      "No liability"
    ],
    correct: 1,
    explanation: "Strict Liability applies to non-hazardous activities of private individuals."
  },
  {
    id: "nlat-4-q5",
    section: "Legal Reasoning",
    passage: `Principle: Strict & Absolute Liability...`,
    question: "In which landmark Indian case was the doctrine of 'Absolute Liability' first established?",
    options: [
      "Rylands v. Fletcher",
      "M.C. Mehta v. Union of India (Oleum Gas Leak Case)",
      "Donoghue v. Stevenson",
      "Kesavananda Bharati v. State of Kerala"
    ],
    correct: 1,
    explanation: "M.C. Mehta v. Union of India (1987) established Absolute Liability in India."
  },
  {
    id: "nlat-4-q6",
    section: "Legal Reasoning",
    passage: `Principle: Strict & Absolute Liability...`,
    question: "Aman's neighbor plants a poisonous tree. The branches grow over Aman's fence. Aman's cow eats the leaves and dies. Aman had been warned by the neighbor about the tree's nature. Is the neighbor liable?",
    options: [
      "Yes, strict liability for keeping a dangerous thing.",
      "No, if Aman knew the risk and let his cow eat it (Plaintiff's own fault).",
      "Yes, because trees are always the owner's responsibility.",
      "No, because the tree didn't 'escape'."
    ],
    correct: 1,
    explanation: "Under Strict Liability, the plaintiff's own fault or consent (Volenti Non Fit Injuria) is a defense."
  },

  // PASSAGE 2: CRIMINAL LAW (DEFAMATION)
  {
    id: "nlat-4-q7",
    section: "Legal Reasoning",
    passage: `Principle: Defamation is the communication of a false statement that harms the reputation of an individual, business, product, group, government, religion, or nation. In India, it is both a civil wrong (Tort) and a criminal offense (Section 499 of IPC). Exceptions to defamation include: (1) Imputation of truth which public good requires to be made or published, (2) Public conduct of public servants, (3) Conduct of any person touching any public question, and (4) Merits of a public performance. The statement must be false, published (told to a third party), and defamatory.`,
    question: "Aman writes a letter to his friend Mr. X, calling him a 'liar and a thief.' No one else sees the letter. Can Mr. X sue Aman for defamation?",
    options: [
      "Yes, the statement is false and harmful.",
      "No, because the statement was not 'published' to a third party.",
      "Yes, because it caused Mr. X mental agony.",
      "No, because it was a private letter."
    ],
    correct: 1,
    explanation: "Defamation requires 'publication'—the statement must be communicated to someone other than the person being defamed."
  },
  {
    id: "nlat-4-q8",
    section: "Legal Reasoning",
    passage: `Principle: Defamation...`,
    question: "A newspaper publishes a report about a Minister taking bribes, backed by solid evidence and audio recordings. The Minister sues for defamation. Will he succeed?",
    options: [
      "Yes, it harms his reputation.",
      "No, 'Imputation of truth for public good' is a valid exception.",
      "Yes, because newspapers have no right to judge ministers.",
      "No, but only if the newspaper apologizes."
    ],
    correct: 1,
    explanation: "Truth published for the public good is a complete defense to defamation."
  },
  {
    id: "nlat-4-q9",
    section: "Legal Reasoning",
    passage: `Principle: Defamation...`,
    question: "A film critic writes a review saying, 'The lead actor in this movie cannot act to save his life and the film is a waste of time.' The actor sues for defamation. What is the legal position?",
    options: [
      "The critic is liable for harming the actor's career.",
      "The critic is protected by the exception of 'Merits of a public performance' and 'Fair comment'.",
      "The critic must prove the actor is a bad person.",
      "Actors are exempt from defamation laws."
    ],
    correct: 1,
    explanation: "Commenting on the merits of a public performance (like a film) is not defamation."
  },
  {
    id: "nlat-4-q10",
    section: "Legal Reasoning",
    passage: `Principle: Defamation...`,
    question: "Aman tells a crowd of people that Mr. X has a contagious disease, even though Mr. X is perfectly healthy. Mr. X loses his job as a result. Is this defamation?",
    options: [
      "No, it was just a verbal statement (Slander).",
      "Yes, it is a false statement published to third parties that harmed Mr. X's reputation.",
      "No, because Aman was just 'concerned' about public health.",
      "Yes, but only if Aman wrote it down."
    ],
    correct: 1,
    explanation: "False statements about a person's health that cause them to be shunned or lose their job are defamatory."
  },
  {
    id: "nlat-4-q11",
    section: "Legal Reasoning",
    passage: `Principle: Defamation...`,
    question: "In a heated argument between two people with no one else around, one person calls the other 'corrupt.' Is this defamation?",
    options: [
      "Yes, it's an insult.",
      "No, there was no publication to a third party.",
      "Yes, if the person being called corrupt is a government official.",
      "No, because insults are not defamatory."
    ],
    correct: 1,
    explanation: "Again, without a third party hearing/reading it, there is no defamation."
  },
  {
    id: "nlat-4-q12",
    section: "Legal Reasoning",
    passage: `Principle: Defamation...`,
    question: "A witness in a court trial gives evidence against a criminal, stating 'I saw him committing the crime.' The criminal, after being acquitted, sues the witness for defamation. Will he succeed?",
    options: [
      "Yes, the witness lied.",
      "No, statements made in judicial proceedings are generally protected by 'Absolute Privilege'.",
      "Yes, because his reputation was ruined by the trial.",
      "No, but only if the witness was a police officer."
    ],
    correct: 1,
    explanation: "Statements in court are protected to ensure witnesses can speak freely without fear of lawsuits."
  },

  // PASSAGE 3: LAW OF CONTRACTS (RESTRAINT OF TRADE)
  {
    id: "nlat-4-q13",
    section: "Legal Reasoning",
    passage: `Principle: Section 27 of the Indian Contract Act states that every agreement by which any person is restrained from exercising a lawful profession, trade, or business of any kind is, to that extent, void. However, there is one major exception: the sale of Goodwill. When a person sells the goodwill of a business, they can agree with the buyer to refrain from carrying on a similar business within specified local limits, as long as those limits are reasonable.`,
    question: "Aman works as a software engineer at Google. His contract says he cannot work for any other tech company in the world for 10 years after leaving Google. Is this clause valid?",
    options: [
      "Yes, he signed it.",
      "No, it is a restraint of trade and is void under Section 27.",
      "Yes, companies must protect their secrets.",
      "No, but only if he gets a higher salary elsewhere."
    ],
    correct: 1,
    explanation: "Indian law is very strict against 'Restraint of Trade' clauses in employment contracts."
  },
  {
    id: "nlat-4-q14",
    section: "Legal Reasoning",
    passage: `Principle: Restraint of Trade...`,
    question: "Mr. X sells his famous 'XYZ Restaurant' to Aman for ₹1 crore. As part of the deal, Mr. X agrees not to open another restaurant within 5 km of XYZ Restaurant for the next 3 years. Is this agreement valid?",
    options: [
      "No, it restricts Mr. X's right to work.",
      "Yes, it is a valid exception related to the sale of Goodwill.",
      "No, 5 km is too large a distance.",
      "Yes, but only if Aman pays him extra monthly."
    ],
    correct: 1,
    explanation: "Reasonable restrictions on the seller of a business's goodwill are allowed."
  },
  {
    id: "nlat-4-q15",
    section: "Legal Reasoning",
    passage: `Principle: Restraint of Trade...`,
    question: "A group of manufacturers in a city agree among themselves to set a fixed price for their products and not to sell below that price. Is this agreement valid?",
    options: [
      "Yes, they can choose their own prices.",
      "No, it is in restraint of trade and harmful to competition.",
      "Yes, if the government approves it.",
      "No, but only if they are selling essentials like milk."
    ],
    correct: 1,
    explanation: "Agreements that restrict free trade/competition are generally void."
  },
  {
    id: "nlat-4-q16",
    section: "Legal Reasoning",
    passage: `Principle: Restraint of Trade...`,
    question: "A doctor joins a private hospital. The contract says she cannot practice medicine anywhere else *while* she is employed by the hospital. Is this valid?",
    options: [
      "No, it restricts her profession.",
      "Yes, negative covenants during the term of employment are generally valid and not considered restraint of trade.",
      "No, she can work in her free time.",
      "Yes, but only if she is a surgeon."
    ],
    correct: 1,
    explanation: "Restricting a person from working elsewhere *during* employment is valid; the problem arises with post-employment restrictions."
  },
  {
    id: "nlat-4-q17",
    section: "Legal Reasoning",
    passage: `Principle: Restraint of Trade...`,
    question: "Aman agrees with Mr. X that he will only buy raw materials from Mr. X for the next 5 years, and in return, Mr. X will give him a 20% discount. Is this a restraint of trade?",
    options: [
      "Yes, he is restrained from buying from others.",
      "No, 'exclusive dealing' agreements are usually valid in business and not considered a prohibited restraint of trade.",
      "Yes, because it hurts other suppliers.",
      "No, but only if the discount is more than 50%."
    ],
    correct: 1,
    explanation: "Business-to-business exclusive supply agreements are generally valid."
  },
  {
    id: "nlat-4-q18",
    section: "Legal Reasoning",
    passage: `Principle: Restraint of Trade...`,
    question: "What is the primary objective of Section 27 of the Indian Contract Act?",
    options: [
      "To protect big businesses.",
      "To ensure every citizen has the freedom to practice any lawful profession or trade.",
      "To prevent people from changing jobs.",
      "To encourage monopolies."
    ],
    correct: 1,
    explanation: "It's about the fundamental right to trade/work."
  },

  // PASSAGE 4: CONSTITUTIONAL LAW (WRITS)
  {
    id: "nlat-4-q19",
    section: "Legal Reasoning",
    passage: `Principle: Article 32 and Article 226 of the Constitution empower the Supreme Court and High Courts to issue 'Writs' for the enforcement of Fundamental Rights. (1) Habeas Corpus: To produce a person who is illegally detained. (2) Mandamus: To command a public official or body to perform their legal duty. (3) Prohibition: To stop a lower court from exceeding its jurisdiction. (4) Certiorari: To quash an order already passed by a lower court/body. (5) Quo Warranto: To challenge the right of a person to hold a public office.`,
    question: "Aman's brother has been taken by the police 3 days ago and has not been produced before a magistrate. Which writ should Aman file?",
    options: [
      "Mandamus",
      "Habeas Corpus",
      "Certiorari",
      "Quo Warranto"
    ],
    correct: 1,
    explanation: "Habeas Corpus is used to challenge illegal detention."
  },
  {
    id: "nlat-4-q20",
    section: "Legal Reasoning",
    passage: `Principle: Writs...`,
    question: "A government department refuses to issue a driving license to Aman even though he has passed all tests and fulfilled all requirements. Which writ can he file?",
    options: [
      "Habeas Corpus",
      "Mandamus",
      "Prohibition",
      "Certiorari"
    ],
    correct: 1,
    explanation: "Mandamus is used to compel a public authority to perform its duty."
  },
  {
    id: "nlat-4-q21",
    section: "Legal Reasoning",
    passage: `Principle: Writs...`,
    question: "A person who is not qualified to be a Judge of a High Court is appointed to the position. A citizen wants to challenge this appointment. Which writ applies?",
    options: [
      "Mandamus",
      "Quo Warranto",
      "Certiorari",
      "Prohibition"
    ],
    correct: 1,
    explanation: "Quo Warranto ('By what authority') challenges the right to hold public office."
  },
  {
    id: "nlat-4-q22",
    section: "Legal Reasoning",
    passage: `Principle: Writs...`,
    question: "A lower court passes an order in a case where it clearly had no jurisdiction (power) to do so. The affected person wants to get that order canceled. Which writ applies?",
    options: [
      "Mandamus",
      "Certiorari",
      "Habeas Corpus",
      "Quo Warranto"
    ],
    correct: 1,
    explanation: "Certiorari is used to quash orders of lower bodies."
  },
  {
    id: "nlat-4-q23",
    section: "Legal Reasoning",
    passage: `Principle: Writs...`,
    question: "Dr. B.R. Ambedkar called which article the 'Heart and Soul' of the Constitution?",
    options: [
      "Article 14",
      "Article 19",
      "Article 21",
      "Article 32"
    ],
    correct: 3,
    explanation: "Article 32 (Right to Constitutional Remedies) was called the heart and soul."
  },
  {
    id: "nlat-4-q24",
    section: "Legal Reasoning",
    passage: `Principle: Writs...`,
    question: "Can a writ of Mandamus be issued against a private individual?",
    options: [
      "Yes, if they are famous.",
      "No, Mandamus is only against public authorities and officials to perform legal duties.",
      "Yes, if they owe someone money.",
      "No, but it can be issued against private companies if they are large."
    ],
    correct: 1,
    explanation: "Mandamus is a public law remedy."
  },

  // PASSAGE 5: FAMILY LAW (HINDU SUCCESSION)
  {
    id: "nlat-4-q25",
    section: "Legal Reasoning",
    passage: `Principle: Under the Hindu Succession (Amendment) Act, 2005, daughters are recognized as 'coparceners' (equal owners) in a Hindu Undivided Family (HUF) property by birth, just like sons. A daughter has the same rights and liabilities in the coparcenary property as she would have had if she had been a son. This applies even if the daughter was born before 2005, and regardless of whether the father was alive in 2005 (as clarified by the Supreme Court in the Vineeta Sharma case).`,
    question: "Aman dies in 2020, leaving behind a son and a daughter. He had a large ancestral property. Does the daughter have an equal share?",
    options: [
      "No, only sons inherit ancestral property.",
      "Yes, daughters are equal coparceners by birth.",
      "Only if the son agrees to share.",
      "Only if the daughter is unmarried."
    ],
    correct: 1,
    explanation: "The 2005 amendment makes daughters equal owners by birth."
  },
  {
    id: "nlat-4-q26",
    section: "Legal Reasoning",
    passage: `Principle: Hindu Succession...`,
    question: "A daughter was born in 1980. Her father died in 2000 (before the amendment). Can she claim a share in the ancestral property after the 2005 amendment?",
    options: [
      "No, the amendment is not retroactive.",
      "Yes, she becomes a coparcener by birth; the father's death date doesn't matter (Vineeta Sharma judgment).",
      "Only if she can prove she took care of the father.",
      "No, because she was already married in 2005."
    ],
    correct: 1,
    explanation: "The SC clarified that the right is by birth, so the father's death date is irrelevant."
  },
  {
    id: "nlat-4-q27",
    section: "Legal Reasoning",
    passage: `Principle: Hindu Succession...`,
    question: "Does a daughter lose her right to ancestral property after she gets married?",
    options: [
      "Yes, she becomes part of the husband's family.",
      "No, marriage does not affect her status as a coparcener in her father's family.",
      "Yes, but only if her husband is wealthy.",
      "Only if her father had already made a will."
    ],
    correct: 1,
    explanation: "Marital status has no impact on coparcenary rights since 2005."
  },
  {
    id: "nlat-4-q28",
    section: "Legal Reasoning",
    passage: `Principle: Hindu Succession...`,
    question: "Can a father make a 'Will' to give his entire *ancestral* property to only his son, excluding his daughter?",
    options: [
      "Yes, it's his property.",
      "No, he can only make a will for his *personal* share; he cannot exclude a coparcener (daughter) from their birthright share in ancestral property.",
      "Yes, if the daughter is already well-settled.",
      "No, but only if the property is worth more than 1 crore."
    ],
    correct: 1,
    explanation: "Coparcenary rights are by birth and cannot be taken away by a will for the entire property."
  },
  {
    id: "nlat-4-q29",
    section: "Legal Reasoning",
    passage: `Principle: Hindu Succession...`,
    question: "What is the difference between 'Self-acquired' and 'Ancestral' property?",
    options: [
      "There is no difference in law.",
      "Self-acquired is earned by the person; Ancestral is inherited from four generations of male lineage.",
      "Ancestral is only in villages.",
      "Self-acquired cannot be sold."
    ],
    correct: 1,
    explanation: "Self-acquired property can be given to anyone via a will; ancestral property has shared birthrights."
  },
  {
    id: "nlat-4-q30",
    section: "Legal Reasoning",
    passage: `Principle: Hindu Succession...`,
    question: "A son and a daughter have a dispute over their father's self-acquired house (no will was made). How is it divided?",
    options: [
      "The son gets the house.",
      "It is divided equally between the son and the daughter (as Class I heirs).",
      "The oldest child gets the house.",
      "The government takes it."
    ],
    correct: 1,
    explanation: "For self-acquired property without a will, sons and daughters (and widow) inherit equally as Class I heirs."
  },

  // SECTION 2: GK & CURRENT AFFAIRS (30 QUESTIONS)
  {
    id: "nlat-4-q31",
    section: "GK & Current Affairs",
    question: "Which country's President was the Chief Guest for India's 75th Republic Day (2024)?",
    options: ["Egypt", "France", "USA", "Brazil"],
    correct: 1,
    explanation: "Emmanuel Macron (President of France)"
  },
  {
    id: "nlat-4-q32",
    section: "GK & Current Affairs",
    question: "The 'Ram Mandir' in Ayodhya was inaugurated on which date in 2024?",
    options: ["January 1", "January 22", "January 26", "February 1"],
    correct: 1,
    explanation: "January 22, 2024"
  },
  {
    id: "nlat-4-q33",
    section: "GK & Current Affairs",
    question: "Who won the 'Bharat Ratna' award posthumously in 2024, known as a socialist leader from Bihar?",
    options: ["L.K. Advani", "Karpoori Thakur", "P.V. Narasimha Rao", "M.S. Swaminathan"],
    correct: 1,
    explanation: "Karpoori Thakur"
  },
  {
    id: "nlat-4-q34",
    section: "GK & Current Affairs",
    question: "Which state won the overall championship trophy at the 'Khelo India Youth Games 2024'?",
    options: ["Maharashtra", "Tamil Nadu", "Haryana", "Delhi"],
    correct: 0,
    explanation: "Maharashtra"
  },
  {
    id: "nlat-4-q35",
    section: "GK & Current Affairs",
    question: "The 'INS Jatayu', a new naval base, was recently (2024) commissioned in which island territory?",
    options: ["Andaman & Nicobar", "Lakshadweep", "Daman & Diu", "Puducherry"],
    correct: 1,
    explanation: "Lakshadweep (Minicoy Island)"
  },
  {
    id: "nlat-4-q36",
    section: "GK & Current Affairs",
    question: "Who is the author of the book 'Four Stars of Destiny'?",
    options: ["General Manoj Pande", "General M.M. Naravane", "General Bipin Rawat", "General Dalbir Singh"],
    correct: 1,
    explanation: "General M.M. Naravane"
  },
  {
    id: "nlat-4-q37",
    section: "GK & Current Affairs",
    question: "Which country launched the 'World's first wooden satellite' in 2024?",
    options: ["Japan", "Finland", "India", "USA"],
    correct: 0,
    explanation: "Japan (LignoSat)"
  },
  {
    id: "nlat-4-q38",
    section: "GK & Current Affairs",
    question: "The 'Exercise Desert Knight 2024' was conducted by India along with which two countries?",
    options: ["USA and Japan", "France and UAE", "Russia and China", "UK and Germany"],
    correct: 1,
    explanation: "France and UAE"
  },
  {
    id: "nlat-4-q39",
    section: "GK & Current Affairs",
    question: "Who is the current Prime Minister of Bangladesh (re-elected in 2024)?",
    options: ["Khaleda Zia", "Sheikh Hasina", "Mohammad Yunus", "Abdul Hamid"],
    correct: 1,
    explanation: "Sheikh Hasina"
  },
  {
    id: "nlat-4-q40",
    section: "GK & Current Affairs",
    question: "The 'World Sustainable Development Summit 2024' was held in which city?",
    options: ["Paris", "New Delhi", "New York", "Dubai"],
    correct: 1,
    explanation: "New Delhi (TERI)"
  },
  {
    id: "nlat-4-q41",
    section: "GK & Current Affairs",
    question: "Which Indian film was nominated for 'Best Documentary Feature' at the 2024 Oscars?",
    options: ["To Kill a Tiger", "The Elephant Whisperers", "All That Breathes", "Writing with Fire"],
    correct: 0,
    explanation: "To Kill a Tiger"
  },
  {
    id: "nlat-4-q42",
    section: "GK & Current Affairs",
    question: "The 'Zoji La Pass' connects which two regions?",
    options: ["Srinagar and Leh", "Manali and Leh", "Sikkim and Tibet", "Arunachal and Lhasa"],
    correct: 0,
    explanation: "Srinagar and Leh"
  },
  {
    id: "nlat-4-q43",
    section: "GK & Current Affairs",
    question: "Who is the current Director of the Enforcement Directorate (ED)?",
    options: ["Sanjay Kumar Mishra", "Rahul Navin", "Praveen Sood", "Tapan Deka"],
    correct: 1,
    explanation: "Rahul Navin (Acting Director)"
  },
  {
    id: "nlat-4-q44",
    section: "GK & Current Affairs",
    question: "Which city is the headquarters of the 'International Solar Alliance' (ISA)?",
    options: ["Paris", "Gurugram", "New Delhi", "Mumbai"],
    correct: 1,
    explanation: "Gurugram, India"
  },
  {
    id: "nlat-4-q45",
    section: "GK & Current Affairs",
    question: "The 'Project Cheetah' in India is being implemented in which National Park?",
    options: ["Jim Corbett", "Kuno National Park", "Kaziranga", "Gir"],
    correct: 1,
    explanation: "Kuno National Park, Madhya Pradesh"
  },
  {
    id: "nlat-4-q46",
    section: "GK & Current Affairs",
    question: "Who was the first woman to be honored with the 'Saraswati Samman'?",
    options: ["Balamani Amma", "Harivansh Rai Bachchan", "Shivani", "Amrita Pritam"],
    correct: 0,
    explanation: "Balamani Amma"
  },
  {
    id: "nlat-4-q47",
    section: "GK & Current Affairs",
    question: "The 'Golden Globe Awards 2024' Best Motion Picture (Drama) was won by:",
    options: ["Barbie", "Oppenheimer", "Killers of the Flower Moon", "Poor Things"],
    correct: 1,
    explanation: "Oppenheimer"
  },
  {
    id: "nlat-4-q48",
    section: "GK & Current Affairs",
    question: "Which article of the Indian Constitution provides for the 'Joint Sitting' of both Houses of Parliament?",
    options: ["Article 108", "Article 110", "Article 112", "Article 123"],
    correct: 0,
    explanation: "Article 108"
  },
  {
    id: "nlat-4-q49",
    section: "GK & Current Affairs",
    question: "The 'Global Gender Gap Report' is released by which organization?",
    options: ["World Bank", "World Economic Forum", "UNDP", "UNESCO"],
    correct: 1,
    explanation: "World Economic Forum"
  },
  {
    id: "nlat-4-q50",
    section: "GK & Current Affairs",
    question: "Who is known as the 'Father of the Indian Constitution'?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
    correct: 2,
    explanation: "Dr. B.R. Ambedkar"
  },
  {
    id: "nlat-4-q51",
    section: "GK & Current Affairs",
    question: "The 'Hornbill Festival' is celebrated in which Indian state?",
    options: ["Manipur", "Nagaland", "Assam", "Meghalaya"],
    correct: 1,
    explanation: "Nagaland"
  },
  {
    id: "nlat-4-q52",
    section: "GK & Current Affairs",
    question: "Which city is the headquarters of the 'European Union'?",
    options: ["Paris", "London", "Brussels", "Berlin"],
    correct: 2,
    explanation: "Brussels, Belgium"
  },
  {
    id: "nlat-4-q53",
    section: "GK & Current Affairs",
    question: "The 'Operation Ganga' was launched by India to evacuate its citizens from:",
    options: ["Afghanistan", "Ukraine", "Sudan", "Israel"],
    correct: 1,
    explanation: "Ukraine"
  },
  {
    id: "nlat-4-q54",
    section: "GK & Current Affairs",
    question: "Who was the first woman President of the Indian National Congress?",
    options: ["Sarojini Naidu", "Annie Besant", "Indira Gandhi", "Nellie Sengupta"],
    correct: 1,
    explanation: "Annie Besant (Sarojini Naidu was first Indian woman)"
  },
  {
    id: "nlat-4-q55",
    section: "GK & Current Affairs",
    question: "The 'Hague Convention' is related to which subject?",
    options: ["Space Travel", "International Child Abduction", "Global Warming", "Trade Tariffs"],
    correct: 1,
    explanation: "International Child Abduction (Civil Aspects)"
  },
  {
    id: "nlat-4-q56",
    section: "GK & Current Affairs",
    question: "Which Indian state has the longest coastline?",
    options: ["Tamil Nadu", "Maharashtra", "Gujarat", "Andhra Pradesh"],
    correct: 2,
    explanation: "Gujarat"
  },
  {
    id: "nlat-4-q57",
    section: "GK & Current Affairs",
    question: "Who wrote the book 'Wings of Fire'?",
    options: ["A.P.J. Abdul Kalam", "Vikram Seth", "Arundhati Roy", "Salman Rushdie"],
    correct: 0,
    explanation: "Dr. A.P.J. Abdul Kalam"
  },
  {
    id: "nlat-4-q58",
    section: "GK & Current Affairs",
    question: "The 'G-7' group does NOT include which of the following countries?",
    options: ["Japan", "Canada", "Russia", "Italy"],
    correct: 2,
    explanation: "Russia (was suspended in 2014)"
  },
  {
    id: "nlat-4-q59",
    section: "GK & Current Affairs",
    question: "The 'Silkyara Tunnel', which was in news for a rescue operation in 2023, is in:",
    options: ["Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir", "Sikkim"],
    correct: 1,
    explanation: "Uttarakhand"
  },
  {
    id: "nlat-4-q60",
    section: "GK & Current Affairs",
    question: "Who is the current Speaker of the Lok Sabha (17th)?",
    options: ["Sumitra Mahajan", "Om Birla", "Meira Kumar", "Jagdeep Dhankhar"],
    correct: 1,
    explanation: "Om Birla"
  },

  // SECTION 3: VERBAL REASONING (30 QUESTIONS)
  // PASSAGE 1: CLIMATE CHANGE AND OCEANS
  {
    id: "nlat-4-q61",
    section: "Verbal Reasoning",
    passage: `The oceans are the true 'lungs' of our planet, absorbing more than 25% of the carbon dioxide we produce and generating over half of the world's oxygen. However, they are also bearing the brunt of global warming. Ocean acidification, caused by the absorption of CO2, is weakening the shells of marine organisms and destroying coral reefs—the 'rainforests of the sea.' Rising temperatures are also leading to sea-level rise and more frequent, intense storms. Beyond environmental damage, this has massive economic implications for coastal communities that depend on fishing and tourism. The 'Blue Economy'—the sustainable use of ocean resources—must be protected. This requires a global effort to reduce emissions, protect marine biodiversity, and eliminate plastic pollution. If we fail to protect our oceans, we fail to protect the life-support system of the Earth itself.`,
    question: "Why does the author call oceans the 'lungs' of the planet?",
    options: [
      "Because they are shaped like lungs.",
      "Because they absorb CO2 and generate over half the world's oxygen.",
      "Because they are full of air.",
      "Because they are blue."
    ],
    correct: 1,
    explanation: "Stated in the first sentence."
  },
  {
    id: "nlat-4-q62",
    section: "Verbal Reasoning",
    passage: `The oceans...`,
    question: "What is 'Ocean Acidification' caused by?",
    options: [
      "Oil spills.",
      "Absorption of Carbon Dioxide (CO2).",
      "Plastic waste.",
      "Overfishing."
    ],
    correct: 1,
    explanation: "Mentioned as the cause of weakening shells/corals."
  },
  {
    id: "nlat-4-q63",
    section: "Verbal Reasoning",
    passage: `The oceans...`,
    question: "Coral reefs are referred to as:",
    options: ["The lungs of the sea", "The rainforests of the sea", "The deserts of the sea", "The mountains of the sea"],
    correct: 1,
    explanation: "Explicitly mentioned in the passage."
  },
  {
    id: "nlat-4-q64",
    section: "Verbal Reasoning",
    passage: `The oceans...`,
    question: "The 'Blue Economy' refers to:",
    options: [
      "Painting everything blue.",
      "Sustainable use of ocean resources for economic growth.",
      "The profit made from selling salt.",
      "The cost of cleaning the ocean."
    ],
    correct: 1,
    explanation: "Defined in the passage."
  },
  {
    id: "nlat-4-q65",
    section: "Verbal Reasoning",
    passage: `The oceans...`,
    question: "The word 'brunt' in the passage means:",
    options: ["The best part", "The main force or impact of something unpleasant", "The smallest amount", "The cooling effect"],
    correct: 1,
    explanation: "Oceans bear the 'brunt' (main impact) of global warming."
  },
  {
    id: "nlat-4-q66",
    section: "Verbal Reasoning",
    passage: `The oceans...`,
    question: "The author's primary concern is:",
    options: ["Plastic pollution only", "The overall health and sustainability of the world's oceans", "The cost of tourism", "The size of fish"],
    correct: 1,
    explanation: "The passage covers a range of threats to ocean health."
  },

  // PASSAGE 2: THE DIGITAL DIVIDE
  {
    id: "nlat-4-q67",
    section: "Verbal Reasoning",
    passage: `The 'Digital Divide' is no longer just about who has a computer and who doesn't. In the 2020s, it has evolved into a complex gap in high-speed connectivity, digital literacy, and access to essential services like e-learning and telehealth. While urban centers enjoy 5G speeds, rural areas often struggle with basic 2G/3G connectivity, if any. This divide reinforces existing socioeconomic inequalities. A child with high-speed internet and a laptop has a massive advantage in education over a child who must rely on a shared smartphone with a spotty data connection. Bridging this gap requires more than just building towers; it requires affordable data, digital education for all ages, and 'device equity.' Governments must view internet access as a 'utility,' similar to water or electricity, rather than a luxury.`,
    question: "What is the 'Digital Divide' according to the author?",
    options: [
      "A wall between two computers.",
      "The gap in access to connectivity, digital literacy, and devices.",
      "A new social media platform.",
      "The cost of buying a smartphone."
    ],
    correct: 1,
    explanation: "Passage defines it as a complex gap in literacy/connectivity/access."
  },
  {
    id: "nlat-4-q68",
    section: "Verbal Reasoning",
    passage: `The 'Digital Divide'...`,
    question: "Why is internet access compared to water and electricity?",
    options: [
      "Because it runs through pipes.",
      "Because it should be treated as an essential public utility.",
      "Because it is very expensive.",
      "Because it is a natural resource."
    ],
    correct: 1,
    explanation: "Author argues it's essential for modern life services."
  },
  {
    id: "nlat-4-q69",
    section: "Verbal Reasoning",
    passage: `The 'Digital Divide'...`,
    question: "The word 'spotty' in the context of a data connection means:",
    options: ["Having spots on it", "Unreliable or intermittent", "Very fast", "Secure"],
    correct: 1,
    explanation: "Spotty means inconsistent/unreliable."
  },
  {
    id: "nlat-4-q70",
    section: "Verbal Reasoning",
    passage: `The 'Digital Divide'...`,
    question: "What is 'device equity'?",
    options: [
      "Sharing a phone with others.",
      "Ensuring everyone has fair access to the necessary hardware (devices).",
      "The price of a device.",
      "Recycling old computers."
    ],
    correct: 1,
    explanation: "Implied as part of bridging the gap."
  },
  {
    id: "nlat-4-q71",
    section: "Verbal Reasoning",
    passage: `The 'Digital Divide'...`,
    question: "The passage suggests that the digital divide:",
    options: ["Is shrinking rapidly", "Reinforces existing socioeconomic inequalities", "Only affects old people", "Is only a problem in villages"],
    correct: 1,
    explanation: "Explicitly mentioned as reinforcing inequalities."
  },
  {
    id: "nlat-4-q72",
    section: "Verbal Reasoning",
    passage: `The 'Digital Divide'...`,
    question: "Which of the following is NOT mentioned as a component of the digital divide?",
    options: ["High-speed connectivity", "Digital literacy", "Physical exercise", "Access to telehealth"],
    correct: 2,
    explanation: "Physical exercise is not mentioned."
  },

  // GRAMMAR & VOCABULARY
  {
    id: "nlat-4-q73",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'LUCID':",
    options: ["Dark", "Clear and easy to understand", "Confused", "Lazy"],
    correct: 1,
    explanation: "Lucid means clear."
  },
  {
    id: "nlat-4-q74",
    section: "Verbal Reasoning",
    question: "Identify the antonym for 'EPHEMERAL':",
    options: ["Short-lived", "Permanent or long-lasting", "Fast", "Transparent"],
    correct: 1,
    explanation: "Ephemeral means temporary; antonym is permanent."
  },
  {
    id: "nlat-4-q75",
    section: "Verbal Reasoning",
    question: "Fill in the blank: 'Neither the teacher nor the students _____ present.'",
    options: ["was", "were", "is", "has"],
    correct: 1,
    explanation: "With 'neither/nor', verb agrees with the closer subject ('students' - plural)."
  },
  {
    id: "nlat-4-q76",
    section: "Verbal Reasoning",
    question: "Choose the correct spelling:",
    options: ["Occurrence", "Occurence", "Occurrance", "Ocurence"],
    correct: 0,
    explanation: "Occurrence (double c, double r)."
  },
  {
    id: "nlat-4-q77",
    section: "Verbal Reasoning",
    question: "Meaning of the idiom 'To burn the midnight oil'?",
    options: ["To start a fire", "To work or study late into the night", "To waste energy", "To be angry"],
    correct: 1,
    explanation: "Means working late."
  },
  {
    id: "nlat-4-q78",
    section: "Verbal Reasoning",
    question: "Identify the error: 'He is (A) one of (B) the best (C) player (D) in the team.'",
    options: ["A", "B", "C", "D"],
    correct: 3,
    explanation: "Should be 'players' (one of the best PLAYERS)."
  },
  {
    id: "nlat-4-q79",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'INNOCUOUS':",
    options: ["Harmless", "Poisonous", "Large", "Bright"],
    correct: 0,
    explanation: "Innocuous means harmless."
  },
  {
    id: "nlat-4-q80",
    section: "Verbal Reasoning",
    question: "What is a 'person who loves books' called?",
    options: ["Bibliophile", "Philanthropist", "Optimist", "Polyglot"],
    correct: 0,
    explanation: "Bibliophile."
  },
  {
    id: "nlat-4-q81",
    section: "Verbal Reasoning",
    question: "Change to Passive Voice: 'The cat killed the mouse.'",
    options: ["The mouse is killed by the cat.", "The mouse was killed by the cat.", "The mouse killed by cat.", "Cat kill mouse."],
    correct: 1,
    explanation: "Past tense 'killed' becomes 'was killed'."
  },
  {
    id: "nlat-4-q82",
    section: "Verbal Reasoning",
    question: "Choose the correct preposition: 'He is good _____ Mathematics.'",
    options: ["in", "at", "on", "for"],
    correct: 1,
    explanation: "Good AT something."
  },
  {
    id: "nlat-4-q83",
    section: "Verbal Reasoning",
    question: "What does 'Sine qua non' mean?",
    options: ["Something unnecessary", "An essential condition; something absolutely necessary", "Without any doubt", "A legal mistake"],
    correct: 1,
    explanation: "Latin for 'without which not' (essential)."
  },
  {
    id: "nlat-4-q84",
    section: "Verbal Reasoning",
    question: "Identify the antonym of 'LOQUACIOUS':",
    options: ["Talkative", "Silent or taciturn", "Loud", "Smart"],
    correct: 1,
    explanation: "Loquacious means talkative; antonym is silent."
  },
  {
    id: "nlat-4-q85",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'REDUNDANT':",
    options: ["Necessary", "Unnecessary or surplus", "Missing", "Fast"],
    correct: 1,
    explanation: "Redundant means no longer needed/extra."
  },
  {
    id: "nlat-4-q86",
    section: "Verbal Reasoning",
    question: "What is 'the study of birds' called?",
    options: ["Ornithology", "Entomology", "Zoology", "Biology"],
    correct: 0,
    explanation: "Ornithology."
  },
  {
    id: "nlat-4-q87",
    section: "Verbal Reasoning",
    question: "Identify the error: 'The jury (A) were (B) divided (C) in their opinion (D).'",
    options: ["A", "B", "C", "D"],
    correct: 0,
    explanation: "Actually this is correct; when divided, 'jury' takes plural 'were'."
  },
  {
    id: "nlat-4-q88",
    section: "Verbal Reasoning",
    question: "What does 'Ab initio' mean?",
    options: ["From the beginning", "At the end", "In the middle", "After some time"],
    correct: 0,
    explanation: "Latin for 'from the beginning'."
  },
  {
    id: "nlat-4-q89",
    section: "Verbal Reasoning",
    question: "Choose the correct spelling:",
    options: ["Questionaire", "Questionnaire", "Questionere", "Quetionnaire"],
    correct: 1,
    explanation: "Questionnaire (double n)."
  },
  {
    id: "nlat-4-q90",
    section: "Verbal Reasoning",
    question: "What is the synonym of 'METICULOUS'?",
    options: ["Careless", "Careful and precise", "Fast", "Brave"],
    correct: 1,
    explanation: "Meticulous means showing great attention to detail."
  },

  // SECTION 4: LOGICAL REASONING (30 QUESTIONS)
  {
    id: "nlat-4-q91",
    section: "Logical Reasoning",
    question: "If 'DOG' is 26 (D=4, O=15, G=7. sum=26), what is 'CAT'?",
    options: ["20", "24", "26", "30"],
    correct: 1,
    explanation: "C=3, A=1, T=20. sum=24."
  },
  {
    id: "nlat-4-q92",
    section: "Logical Reasoning",
    question: "Find the missing number: 1, 3, 7, 15, 31, ?",
    options: ["60", "63", "62", "64"],
    correct: 1,
    explanation: "2n + 1 pattern (or add 2, 4, 8, 16, 32)."
  },
  {
    id: "nlat-4-q93",
    section: "Logical Reasoning",
    question: "If 10th February 2023 was a Friday, what day was 10th February 2024?",
    options: ["Saturday", "Sunday", "Friday", "Monday"],
    correct: 0,
    explanation: "Add 1 day for non-leap year (leap year effect starts after Feb 29)."
  },
  {
    id: "nlat-4-q94",
    section: "Logical Reasoning",
    question: "Analogy: Pen : Ink :: Car : ?",
    options: ["Tyre", "Petrol", "Driver", "Road"],
    correct: 1,
    explanation: "Fuel/Source of power."
  },
  {
    id: "nlat-4-q95",
    section: "Logical Reasoning",
    question: "Blood Relation: Pointing to a photograph, a man says, 'He is the son of the only son of my grandfather.' Who is in the photo?",
    options: ["His Brother", "His Son", "He himself (or his brother)", "His Father"],
    correct: 2,
    explanation: "Grandfather's only son is Father. Father's son is either him or his brother."
  },
  {
    id: "nlat-4-q96",
    section: "Logical Reasoning",
    question: "Direction: Aman walks 5km North, turns 90° right, walks 5km. What is his direction from the start?",
    options: ["North", "East", "North-East", "South-East"],
    correct: 2,
    explanation: "North-East."
  },
  {
    id: "nlat-4-q97",
    section: "Logical Reasoning",
    question: "Find the odd one out:",
    options: ["Bhopal", "Lucknow", "Mumbai", "Indore"],
    correct: 3,
    explanation: "Others are state capitals; Indore is not."
  },
  {
    id: "nlat-4-q98",
    section: "Logical Reasoning",
    question: "If 'BLUE' is 'CLVF' (Each +1), how is 'PINK' coded?",
    options: ["QJOL", "QJNM", "QKOL", "QJNL"],
    correct: 0,
    explanation: "P+1=Q, I+1=J, N+1=O, K+1=L."
  },
  {
    id: "nlat-4-q99",
    section: "Logical Reasoning",
    question: "Find the next term: 5, 10, 20, 40, ?",
    options: ["50", "60", "80", "100"],
    correct: 2,
    explanation: "Multiply by 2."
  },
  {
    id: "nlat-4-q100",
    section: "Logical Reasoning",
    question: "Syllogism: No cat is a dog. All dogs are animals. Conclusion: No cat is an animal.",
    options: ["True", "False", "Maybe", "Some cats are animals"],
    correct: 1,
    explanation: "Cats could still be other types of animals."
  },
  {
    id: "nlat-4-q101",
    section: "Logical Reasoning",
    question: "Find the missing term: B, D, G, K, ?",
    options: ["M", "N", "O", "P"],
    correct: 3,
    explanation: "Skip 1, 2, 3, 4 letters."
  },
  {
    id: "nlat-4-q102",
    section: "Logical Reasoning",
    question: "In a class of 30, Aman's rank is 10th from top. What is it from bottom?",
    options: ["20th", "21st", "19th", "22nd"],
    correct: 1,
    explanation: "30 - 10 + 1 = 21."
  },
  {
    id: "nlat-4-q103",
    section: "Logical Reasoning",
    question: "Analogy: Eye : Myopia :: Teeth : ?",
    options: ["Pyorrhoea", "Cataract", "Eczema", "Scurvy"],
    correct: 0,
    explanation: "Common disease/condition."
  },
  {
    id: "nlat-4-q104",
    section: "Logical Reasoning",
    question: "If 'EARTH' is '6-2-19-21-9' (Position + 1? No). If E=5, A=1, R=18, T=20, H=8. If each is +1, it would be 6, 2, 19, 21, 9.",
    options: ["E=5", "E=6", "E=4", "E=1"],
    correct: 1,
    explanation: "Position + 1."
  },
  {
    id: "nlat-4-q105",
    section: "Logical Reasoning",
    question: "Direction: Aman faces South. He turns 180° clockwise, then 90° clockwise. Which direction now?",
    options: ["North", "East", "West", "South"],
    correct: 2,
    explanation: "S -> N -> W."
  },
  {
    id: "nlat-4-q106",
    section: "Logical Reasoning",
    question: "Clock: What time is it when the angle between hands is 180°?",
    options: ["3:00", "6:00", "9:00", "12:00"],
    correct: 1,
    explanation: "At 6:00, hands are opposite."
  },
  {
    id: "nlat-4-q107",
    section: "Logical Reasoning",
    question: "Series: 100, 99, 97, 94, ?",
    options: ["90", "91", "89", "92"],
    correct: 0,
    explanation: "Difference: -1, -2, -3, -4."
  },
  {
    id: "nlat-4-q108",
    section: "Logical Reasoning",
    question: "Blood Relation: A is B's brother. C is A's mother. D is C's father. E is B's son. How is D related to E?",
    options: ["Grandfather", "Great Grandfather", "Uncle", "Father"],
    correct: 1,
    explanation: "E's grandmother is C. C's father is D. So D is great grandfather."
  },
  {
    id: "nlat-4-q109",
    section: "Logical Reasoning",
    question: "Find the odd one out:",
    options: ["Guitar", "Violin", "Flute", "Sitar"],
    correct: 2,
    explanation: "Flute is wind, others are string."
  },
  {
    id: "nlat-4-q110",
    section: "Logical Reasoning",
    question: "Analogy: Light : Darkness :: Knowledge : ?",
    options: ["Ignorance", "Intelligence", "Education", "Book"],
    correct: 0,
    explanation: "Antonyms."
  },
  {
    id: "nlat-4-q111",
    section: "Logical Reasoning",
    question: "If '123' is 'Big Red House', '345' is 'House is Small', what is 'House'?",
    options: ["1", "3", "5", "4"],
    correct: 1,
    explanation: "3 is common."
  },
  {
    id: "nlat-4-q112",
    section: "Logical Reasoning",
    question: "Direction: Aman goes 10m East, turns 135° left. Which direction now?",
    options: ["North-West", "North-East", "South-West", "South-East"],
    correct: 0,
    explanation: "E -> (90 left is N) -> (45 more is NW)."
  },
  {
    id: "nlat-4-q113",
    section: "Logical Reasoning",
    question: "Syllogism: All men are humans. All humans are mortal. Conclusion: All men are mortal.",
    options: ["True", "False", "Maybe", "None"],
    correct: 0,
    explanation: "Classic syllogism."
  },
  {
    id: "nlat-4-q114",
    section: "Logical Reasoning",
    question: "Analogy: 2 : 8 :: 3 : ?",
    options: ["9", "27", "12", "18"],
    correct: 1,
    explanation: "Cube."
  },
  {
    id: "nlat-4-q115",
    section: "Logical Reasoning",
    question: "Find the missing number: 2, 4, 12, 48, ?",
    options: ["240", "120", "96", "192"],
    correct: 0,
    explanation: "Multiply by 2, 3, 4, 5."
  },
  {
    id: "nlat-4-q116",
    section: "Logical Reasoning",
    question: "Blood Relation: A's father is B's only son. How is B related to A?",
    options: ["Father", "Grandfather", "Son", "Uncle"],
    correct: 1,
    explanation: "A's father is the son of B."
  },
  {
    id: "nlat-4-q117",
    section: "Logical Reasoning",
    question: "Odd one out:",
    options: ["Mercury", "Venus", "Earth", "Moon"],
    correct: 3,
    explanation: "Moon is a satellite, others are planets."
  },
  {
    id: "nlat-4-q118",
    section: "Logical Reasoning",
    question: "Statement: 'Should there be a common entrance exam for all colleges?' Argument: I. Yes, it ensures uniformity. II. No, it increases stress.",
    options: ["Only I", "Only II", "Both", "None"],
    correct: 2,
    explanation: "Both are strong socio-educational arguments."
  },
  {
    id: "nlat-4-q119",
    section: "Logical Reasoning",
    question: "Direction: Aman faces North. He turns 45° right, then 90° right. Which direction?",
    options: ["East", "South-East", "North-East", "South"],
    correct: 1,
    explanation: "N -> NE -> SE."
  },
  {
    id: "nlat-4-q120",
    section: "Logical Reasoning",
    question: "Find the next term: 1, 4, 27, 256, ?",
    options: ["3125", "1000", "625", "512"],
    correct: 0,
    explanation: "n^n pattern: 1^1, 2^2, 3^3, 4^4, 5^5 = 3125."
  },

  // SECTION 5: QUANTITATIVE REASONING (30 QUESTIONS)
  {
    id: "nlat-4-q121",
    section: "Quantitative Reasoning",
    question: "If x + 2y = 10 and 2x + y = 8, find x + y.",
    options: ["6", "18", "9", "5"],
    correct: 0,
    explanation: "Add: 3x + 3y = 18; x + y = 6."
  },
  {
    id: "nlat-4-q122",
    section: "Quantitative Reasoning",
    question: "Sum of angles in a hexagon?",
    options: ["360", "540", "720", "900"],
    correct: 2,
    explanation: "(n-2)*180 = 4*180 = 720."
  },
  {
    id: "nlat-4-q123",
    section: "Quantitative Reasoning",
    question: "What is 33.33% of 600?",
    options: ["200", "300", "150", "100"],
    correct: 0,
    explanation: "1/3 * 600 = 200."
  },
  {
    id: "nlat-4-q124",
    section: "Quantitative Reasoning",
    question: "A cube has side 4. Surface area?",
    options: ["64", "96", "48", "16"],
    correct: 1,
    explanation: "6 * 4^2 = 96."
  },
  {
    id: "nlat-4-q125",
    section: "Quantitative Reasoning",
    question: "Average of first 10 whole numbers?",
    options: ["4.5", "5.0", "5.5", "4.0"],
    correct: 0,
    explanation: "0 to 9. Sum = 45, Avg = 4.5."
  },
  {
    id: "nlat-4-q126",
    section: "Quantitative Reasoning",
    question: "If 5 workers build a wall in 4 days, 2 workers build in how many days?",
    options: ["10", "8", "6", "2"],
    correct: 0,
    explanation: "5 * 4 = 2 * x; x = 10."
  },
  {
    id: "nlat-4-q127",
    section: "Quantitative Reasoning",
    question: "Square root of 0.04?",
    options: ["0.2", "0.02", "2.0", "0.4"],
    correct: 0,
    explanation: "0.2 * 0.2 = 0.04."
  },
  {
    id: "nlat-4-q128",
    section: "Quantitative Reasoning",
    question: "A coin is tossed twice. Probability of 2 heads?",
    options: ["1/2", "1/4", "3/4", "1/8"],
    correct: 1,
    explanation: "HH, HT, TH, TT. HH is 1/4."
  },
  {
    id: "nlat-4-q129",
    section: "Quantitative Reasoning",
    question: "Solve: 2 + 2 * 2 - 2 / 2.",
    options: ["3", "5", "1", "4"],
    correct: 1,
    explanation: "2 + 4 - 1 = 5."
  },
  {
    id: "nlat-4-q130",
    section: "Quantitative Reasoning",
    question: "What is 20% of 20% of 1000?",
    options: ["40", "400", "4", "200"],
    correct: 0,
    explanation: "0.2 * 0.2 * 1000 = 40."
  },
  {
    id: "nlat-4-q131",
    section: "Quantitative Reasoning",
    question: "Find LCM of 15 and 20.",
    options: ["30", "60", "90", "120"],
    correct: 1,
    explanation: "60."
  },
  {
    id: "nlat-4-q132",
    section: "Quantitative Reasoning",
    question: "Perimeter of semi-circle: r=7. (pi=22/7)",
    options: ["36", "44", "22", "50"],
    correct: 0,
    explanation: "pi*r + 2r = 22 + 14 = 36."
  },
  {
    id: "nlat-4-q133",
    section: "Quantitative Reasoning",
    question: "If 1/3 of a number is 20, what is 2 times that number?",
    options: ["60", "120", "40", "80"],
    correct: 1,
    explanation: "Number is 60. 2 * 60 = 120."
  },
  {
    id: "nlat-4-q134",
    section: "Quantitative Reasoning",
    question: "HCF of 18, 24, 30?",
    options: ["2", "6", "3", "12"],
    correct: 1,
    explanation: "6."
  },
  {
    id: "nlat-4-q135",
    section: "Quantitative Reasoning",
    question: "Next number in 1, 4, 9, 16, ?",
    options: ["20", "25", "30", "36"],
    correct: 1,
    explanation: "Squares."
  },
  {
    id: "nlat-4-q136",
    section: "Quantitative Reasoning",
    question: "Find x: 2^x = 32.",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "2^5 = 32."
  },
  {
    id: "nlat-4-q137",
    section: "Quantitative Reasoning",
    question: "Convert 5/8 to percentage.",
    options: ["50%", "62.5%", "75%", "80%"],
    correct: 1,
    explanation: "0.625 * 100."
  },
  {
    id: "nlat-4-q138",
    section: "Quantitative Reasoning",
    question: "Sides in an octagon?",
    options: ["6", "7", "8", "9"],
    correct: 2,
    explanation: "8."
  },
  {
    id: "nlat-4-q139",
    section: "Quantitative Reasoning",
    question: "Degrees in a right angle?",
    options: ["0", "90", "180", "45"],
    correct: 1,
    explanation: "90."
  },
  {
    id: "nlat-4-q140",
    section: "Quantitative Reasoning",
    question: "Median of 2, 4, 6, 8, 10, 12?",
    options: ["6", "8", "7", "9"],
    correct: 2,
    explanation: "(6+8)/2 = 7."
  },
  {
    id: "nlat-4-q141",
    section: "Quantitative Reasoning",
    question: "Smallest 3 digit number?",
    options: ["100", "999", "111", "001"],
    correct: 0,
    explanation: "100."
  },
  {
    id: "nlat-4-q142",
    section: "Quantitative Reasoning",
    question: "Solve for x: x/2 + x/3 = 10.",
    options: ["12", "6", "10", "15"],
    correct: 0,
    explanation: "5x/6 = 10; 5x = 60; x = 12."
  },
  {
    id: "nlat-4-q143",
    section: "Quantitative Reasoning",
    question: "Value of pi approx?",
    options: ["3.14", "22/7", "Both", "None"],
    correct: 2,
    explanation: "Both are common approx."
  },
  {
    id: "nlat-4-q144",
    section: "Quantitative Reasoning",
    question: "A man buys for 200, sells for 150. Loss %?",
    options: ["50%", "25%", "20%", "30%"],
    correct: 1,
    explanation: "50/200 * 100 = 25%."
  },
  {
    id: "nlat-4-q145",
    section: "Quantitative Reasoning",
    question: "Sum of first 100 natural numbers?",
    options: ["5000", "5050", "5100", "5005"],
    correct: 1,
    explanation: "100*101/2 = 5050."
  },
  {
    id: "nlat-4-q146",
    section: "Quantitative Reasoning",
    question: "If area of square is 64, what is perimeter?",
    options: ["16", "32", "64", "8"],
    correct: 1,
    explanation: "Side=8, Perimeter=32."
  },
  {
    id: "nlat-4-q147",
    section: "Quantitative Reasoning",
    question: "Average of 10, 10, 10, 10?",
    options: ["10", "40", "0", "20"],
    correct: 0,
    explanation: "10."
  },
  {
    id: "nlat-4-q148",
    section: "Quantitative Reasoning",
    question: "Square root of 10000?",
    options: ["10", "100", "1000", "1"],
    correct: 1,
    explanation: "100."
  },
  {
    id: "nlat-4-q149",
    section: "Quantitative Reasoning",
    question: "Convert 250ml to Litres.",
    options: ["0.25", "2.5", "25", "0.025"],
    correct: 0,
    explanation: "250/1000."
  },
  {
    id: "nlat-4-q150",
    section: "Quantitative Reasoning",
    question: "If a watch shows 12:15, angle?",
    options: ["90", "82.5", "85", "97.5"],
    correct: 1,
    explanation: "|30H - 5.5M| = |360 - 82.5| = ... at 12:15, hour hand is slightly past 12. Angle is 82.5°."
  }
];
