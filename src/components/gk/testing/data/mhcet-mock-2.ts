import { MockQuestion } from "../constants";

export const MHCET_MOCK_2: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE & LEGAL REASONING (24 QUESTIONS)
  // PASSAGE 1: CONSTITUTIONAL LAW – WRITS (Q1–Q4)
  {
    id: "mhcet-2-q1",
    section: "Legal Aptitude & Reasoning",
    passage: `Article 32 of the Indian Constitution, described by Dr. B.R. Ambedkar as the 'heart and soul' of the Constitution, provides the right to move the Supreme Court for the enforcement of Fundamental Rights. Under this Article (and Article 226 for High Courts), the courts can issue five types of writs: (1) Habeas Corpus: Literally 'to have the body', used to release a person who has been unlawfully detained; (2) Mandamus: Literally 'we command', used to order a public official or authority to perform their legal duty; (3) Quo Warranto: Literally 'by what authority', used to challenge a person's right to hold a public office; (4) Prohibition: Issued by a higher court to a lower court to stop it from exceeding its jurisdiction; and (5) Certiorari: Issued to quash an order already passed by a lower court or quasi-judicial body due to lack of jurisdiction or error of law.`,
    question: "Aman is arrested by the police but is not produced before a magistrate within 24 hours as required by law. His family wants to secure his release. Which writ should they apply for?",
    options: [
      "Mandamus",
      "Habeas Corpus",
      "Certiorari",
      "Quo Warranto"
    ],
    correct: 1,
    explanation: "Habeas Corpus is the remedy for illegal detention or arrest without following legal procedure."
  },
  {
    id: "mhcet-2-q2",
    section: "Legal Aptitude & Reasoning",
    passage: `Article 32 of the Indian Constitution, described by Dr. B.R. Ambedkar as the 'heart and soul' of the Constitution, provides the right to move the Supreme Court for the enforcement of Fundamental Rights. Under this Article (and Article 226 for High Courts), the courts can issue five types of writs: (1) Habeas Corpus: Literally 'to have the body', used to release a person who has been unlawfully detained; (2) Mandamus: Literally 'we command', used to order a public official or authority to perform their legal duty; (3) Quo Warranto: Literally 'by what authority', used to challenge a person's right to hold a public office; (4) Prohibition: Issued by a higher court to a lower court to stop it from exceeding its jurisdiction; and (5) Certiorari: Issued to quash an order already passed by a lower court or quasi-judicial body due to lack of jurisdiction or error of law.`,
    question: "A government department refuses to issue a license to Aman even though he has fulfilled all legal requirements. Aman wants the court to order the department to issue the license. Which writ is appropriate?",
    options: [
      "Prohibition",
      "Mandamus",
      "Certiorari",
      "Habeas Corpus"
    ],
    correct: 1,
    explanation: "Mandamus is used to command a public authority to perform a duty they are legally bound to do."
  },
  {
    id: "mhcet-2-q3",
    section: "Legal Aptitude & Reasoning",
    passage: `Article 32 of the Indian Constitution, described by Dr. B.R. Ambedkar as the 'heart and soul' of the Constitution, provides the right to move the Supreme Court for the enforcement of Fundamental Rights. Under this Article (and Article 226 for High Courts), the courts can issue five types of writs: (1) Habeas Corpus: Literally 'to have the body', used to release a person who has been unlawfully detained; (2) Mandamus: Literally 'we command', used to order a public official or authority to perform their legal duty; (3) Quo Warranto: Literally 'by what authority', used to challenge a person's right to hold a public office; (4) Prohibition: Issued by a higher court to a lower court to stop it from exceeding its jurisdiction; and (5) Certiorari: Issued to quash an order already passed by a lower court or quasi-judicial body due to lack of jurisdiction or error of law.`,
    question: "A person who is not qualified for the post of a University Vice-Chancellor is appointed to that position. A citizen wants to challenge this appointment. Which writ can be used?",
    options: [
      "Quo Warranto",
      "Mandamus",
      "Certiorari",
      "Prohibition"
    ],
    correct: 0,
    explanation: "Quo Warranto is used to inquire into the legality of the claim which a person asserts to a public office."
  },
  {
    id: "mhcet-2-q4",
    section: "Legal Aptitude & Reasoning",
    passage: `Article 32 of the Indian Constitution, described by Dr. B.R. Ambedkar as the 'heart and soul' of the Constitution, provides the right to move the Supreme Court for the enforcement of Fundamental Rights. Under this Article (and Article 226 for High Courts), the courts can issue five types of writs: (1) Habeas Corpus: Literally 'to have the body', used to release a person who has been unlawfully detained; (2) Mandamus: Literally 'we command', used to order a public official or authority to perform their legal duty; (3) Quo Warranto: Literally 'by what authority', used to challenge a person's right to hold a public office; (4) Prohibition: Issued by a higher court to a lower court to stop it from exceeding its jurisdiction; and (5) Certiorari: Issued to quash an order already passed by a lower court or quasi-judicial body due to lack of jurisdiction or error of law.`,
    question: "What is the difference between Prohibition and Certiorari?",
    options: [
      "Prohibition is for private individuals, Certiorari is for the State.",
      "Prohibition is preventive (issued before a decision), while Certiorari is curative (issued after a decision to quash it).",
      "There is no difference; they are the same.",
      "Prohibition is only for criminal cases."
    ],
    correct: 1,
    explanation: "Prohibition stops a lower court from continuing an illegal proceeding, while Certiorari quashes the final result of such a proceeding."
  },

  // PASSAGE 2: LAW OF TORTS – VICARIOUS LIABILITY (Q5–Q8)
  {
    id: "mhcet-2-q5",
    section: "Legal Aptitude & Reasoning",
    passage: `Vicarious liability is the legal responsibility of one person for the torts committed by another. The most common form is the liability of an Employer (Master) for the acts of an Employee (Servant). For such liability to arise, the act must be committed in the 'course of employment'. An act is in the course of employment if it is: (i) authorized by the employer, or (ii) a wrongful and unauthorized mode of doing some act authorized by the employer. However, if the employee is on a 'frolic of his own'—doing something entirely for his own purpose, unrelated to his work—the employer is not liable. Another rule is 'Qui facit per alium facit per se' (he who acts through another acts himself). Furthermore, the State is generally vicariously liable for the torts of its servants, except when they are exercising 'Sovereign Functions' (like maintaining law and order or defense).`,
    question: "A driver of a company bus, while taking employees to the office, stops at a petrol pump. While the bus is being refueled, he lights a cigarette despite warning signs, causing a fire. Is the company liable?",
    options: [
      "No, the company didn't authorize smoking.",
      "Yes, because he was performing an authorized task (driving/refueling) in a negligent/wrongful manner.",
      "No, because smoking is a personal habit.",
      "Yes, but only if the bus was full of people."
    ],
    correct: 1,
    explanation: "This is a classic example of doing an authorized act (managing the vehicle) in an unauthorized and negligent mode."
  },
  {
    id: "mhcet-2-q6",
    section: "Legal Aptitude & Reasoning",
    passage: `Vicarious liability is the legal responsibility of one person for the torts committed by another. The most common form is the liability of an Employer (Master) for the acts of an Employee (Servant). For such liability to arise, the act must be committed in the 'course of employment'. An act is in the course of employment if it is: (i) authorized by the employer, or (ii) a wrongful and unauthorized mode of doing some act authorized by the employer. However, if the employee is on a 'frolic of his own'—doing something entirely for his own purpose, unrelated to his work—the employer is not liable. Another rule is 'Qui facit per alium facit per se' (he who acts through another acts himself). Furthermore, the State is generally vicariously liable for the torts of its servants, except when they are exercising 'Sovereign Functions' (like maintaining law and order or defense).`,
    question: "A police officer, while chasing a criminal, accidentally breaks the window of a shop. Can the shop owner sue the State for damages?",
    options: [
      "Yes, the State is always liable for its employees.",
      "No, the police officer was performing a 'Sovereign Function' (maintaining law and order), for which the State has immunity.",
      "Yes, because the shop owner is a citizen.",
      "No, because the criminal should pay for it."
    ],
    correct: 1,
    explanation: "Traditional law provides immunity to the State for acts done in the exercise of sovereign powers like police actions."
  },
  {
    id: "mhcet-2-q7",
    section: "Legal Aptitude & Reasoning",
    passage: `Vicarious liability is the legal responsibility of one person for the torts committed by another. The most common form is the liability of an Employer (Master) for the acts of an Employee (Servant). For such liability to arise, the act must be committed in the 'course of employment'. An act is in the course of employment if it is: (i) authorized by the employer, or (ii) a wrongful and unauthorized mode of doing some act authorized by the employer. However, if the employee is on a 'frolic of his own'—doing something entirely for his own purpose, unrelated to his work—the employer is not liable. Another rule is 'Qui facit per alium facit per se' (he who acts through another acts himself). Furthermore, the State is generally vicariously liable for the torts of its servants, except when they are exercising 'Sovereign Functions' (like maintaining law and order or defense).`,
    question: "What does 'Qui facit per alium facit per se' mean?",
    options: [
      "The king can do no wrong.",
      "He who acts through another, acts himself.",
      "Let the buyer beware.",
      "In good faith."
    ],
    correct: 1,
    explanation: "This is the fundamental maxim of vicarious liability and agency."
  },
  {
    id: "mhcet-2-q8",
    section: "Legal Aptitude & Reasoning",
    passage: `Vicarious liability is the legal responsibility of one person for the torts committed by another. The most common form is the liability of an Employer (Master) for the acts of an Employee (Servant). For such liability to arise, the act must be committed in the 'course of employment'. An act is in the course of employment if it is: (i) authorized by the employer, or (ii) a wrongful and unauthorized mode of doing some act authorized by the employer. However, if the employee is on a 'frolic of his own'—doing something entirely for his own purpose, unrelated to his work—the employer is not liable. Another rule is 'Qui facit per alium facit per se' (he who acts through another acts himself). Furthermore, the State is generally vicariously liable for the torts of its servants, except when they are exercising 'Sovereign Functions' (like maintaining law and order or defense).`,
    question: "A delivery boy, after finishing his last delivery, goes 20 km away from his route to meet his girlfriend. On the way, he hits a pedestrian. Is the employer liable?",
    options: [
      "Yes, he was still wearing the company uniform.",
      "No, he was on a 'frolic of his own', completely outside the course of employment.",
      "Yes, because he was using the company bike.",
      "No, but only if the girlfriend lives in another city."
    ],
    correct: 1,
    explanation: "A significant detour for purely personal reasons is considered a 'frolic' and the employer is not liable."
  },

  // PASSAGE 3: LAW OF CONTRACTS – CONSIDERATION (Q9–Q12)
  {
    id: "mhcet-2-q9",
    section: "Legal Aptitude & Reasoning",
    passage: `Under Section 2(d) of the Indian Contract Act, 'Consideration' is defined as when, at the desire of the promisor, the promisee or any other person has done or abstained from doing something. A contract without consideration is 'void' (Nudum Pactum). Key rules: (1) Consideration must move at the 'desire of the promisor'; (2) It may move from the 'promisee or any other person' (Privity of Consideration is not required in India); (3) It may be past, present, or future; (4) It need not be 'adequate' (e.g., a house can be sold for ₹1 if both agree), but it must be 'real' and have some value in the eyes of law. There are exceptions to the rule 'No Consideration, No Contract' (Section 25): (a) Agreements made out of natural love and affection between near relatives (if written and registered); (b) Compensation for past voluntary services; and (c) Promise to pay a time-barred debt.`,
    question: "Aman sees a house on fire and saves the owner's child without being asked. Later, the grateful owner promises to pay Aman ₹50,000. Is this promise a valid contract?",
    options: [
      "No, there was no consideration at the time of the act.",
      "Yes, this falls under the exception of 'compensation for past voluntary services'.",
      "No, because Aman didn't sign a document.",
      "Yes, but only if the child is above 18."
    ],
    correct: 1,
    explanation: "Past voluntary service is a valid exception to the requirement of fresh consideration under Section 25."
  },
  {
    id: "mhcet-2-q10",
    section: "Legal Aptitude & Reasoning",
    passage: `Under Section 2(d) of the Indian Contract Act, 'Consideration' is defined as when, at the desire of the promisor, the promisee or any other person has done or abstained from doing something. A contract without consideration is 'void' (Nudum Pactum). Key rules: (1) Consideration must move at the 'desire of the promisor'; (2) It may move from the 'promisee or any other person' (Privity of Consideration is not required in India); (3) It may be past, present, or future; (4) It need not be 'adequate' (e.g., a house can be sold for ₹1 if both agree), but it must be 'real' and have some value in the eyes of law. There are exceptions to the rule 'No Consideration, No Contract' (Section 25): (a) Agreements made out of natural love and affection between near relatives (if written and registered); (b) Compensation for past voluntary services; and (c) Promise to pay a time-barred debt.`,
    question: "Aman's father promises to give him ₹10 lakhs out of love and affection. They write it down on a plain paper and sign it. Is this a binding contract?",
    options: [
      "Yes, love is a great consideration.",
      "No, for an agreement based on natural love and affection to be valid without consideration, it must be in writing AND registered.",
      "Yes, because it is in writing.",
      "No, because fathers cannot be sued by sons."
    ],
    correct: 1,
    explanation: "Registration is a mandatory requirement for this specific exception under Section 25."
  },
  {
    id: "mhcet-2-q11",
    section: "Legal Aptitude & Reasoning",
    passage: `Under Section 2(d) of the Indian Contract Act, 'Consideration' is defined as when, at the desire of the promisor, the promisee or any other person has done or abstained from doing something. A contract without consideration is 'void' (Nudum Pactum). Key rules: (1) Consideration must move at the 'desire of the promisor'; (2) It may move from the 'promisee or any other person' (Privity of Consideration is not required in India); (3) It may be past, present, or future; (4) It need not be 'adequate' (e.g., a house can be sold for ₹1 if both agree), but it must be 'real' and have some value in the eyes of law. There are exceptions to the rule 'No Consideration, No Contract' (Section 25): (a) Agreements made out of natural love and affection between near relatives (if written and registered); (b) Compensation for past voluntary services; and (c) Promise to pay a time-barred debt.`,
    question: "In India, can a person who is not a party to the contract (a third party) provide the consideration for a contract?",
    options: [
      "No, only the parties to the contract can provide consideration.",
      "Yes, consideration can move from the promisee or 'any other person'.",
      "Yes, but only if they are a relative.",
      "No, this would violate the 'privity of contract' rule."
    ],
    correct: 1,
    explanation: "Unlike English law, Indian law allows 'Stranger to Consideration' but not 'Stranger to Contract'."
  },
  {
    id: "mhcet-2-q12",
    section: "Legal Aptitude & Reasoning",
    passage: `Under Section 2(d) of the Indian Contract Act, 'Consideration' is defined as when, at the desire of the promisor, the promisee or any other person has done or abstained from doing something. A contract without consideration is 'void' (Nudum Pactum). Key rules: (1) Consideration must move at the 'desire of the promisor'; (2) It may move from the 'promisee or any other person' (Privity of Consideration is not required in India); (3) It may be past, present, or future; (4) It need not be 'adequate' (e.g., a house can be sold for ₹1 if both agree), but it must be 'real' and have some value in the eyes of law. There are exceptions to the rule 'No Consideration, No Contract' (Section 25): (a) Agreements made out of natural love and affection between near relatives (if written and registered); (b) Compensation for past voluntary services; and (c) Promise to pay a time-barred debt.`,
    question: "Aman agrees to sell his ₹1 crore car to Mr. X for ₹10,000. Later, Aman tries to cancel the deal saying the price was too low (inadequate consideration). Will he succeed?",
    options: [
      "Yes, the law requires the price to be fair.",
      "No, consideration need not be 'adequate' as long as it is 'real' and given with free consent.",
      "Yes, but only if the car is new.",
      "No, but Mr. X must pay some extra tax."
    ],
    correct: 1,
    explanation: "Inadequacy of consideration is not a ground for voiding a contract unless it proves that consent was not free."
  },

  // PASSAGE 4: CRIMINAL LAW – THEFT AND EXTORTION (Q13–Q16)
  {
    id: "mhcet-2-q13",
    section: "Legal Aptitude & Reasoning",
    passage: `Theft (Section 378 IPC/BNS) is defined as: (i) Dishonest intention to take property; (ii) The property must be 'movable'; (iii) It must be taken out of the 'possession' of another person; (iv) It must be taken 'without that person's consent'; and (v) There must be some 'moving' of the property to effect the taking. In contrast, 'Extortion' (Section 383 IPC/BNS) occurs when a person intentionally puts another in fear of any injury and thereby dishonestly induces them to deliver any property or valuable security. The key difference is that in theft, the property is taken without consent, while in extortion, consent is obtained by fear. If extortion is committed by putting the person in fear of 'instant death' or 'instant hurt', it becomes 'Robbery'.`,
    question: "Aman sees a diamond ring on Mr. X's table. He hides the ring in a corner of the same room, intending to come back and take it later when no one is looking. Has Aman committed theft?",
    options: [
      "No, he hasn't taken it out of the house yet.",
      "Yes, the moment he 'moved' the property with dishonest intent, the theft was complete.",
      "No, because the ring is still in Mr. X's house.",
      "Yes, but only if the ring is worth more than ₹1000."
    ],
    correct: 1,
    explanation: "Even a small 'moving' of the property with dishonest intent is enough to complete the act of theft."
  },
  {
    id: "mhcet-2-q14",
    section: "Legal Aptitude & Reasoning",
    passage: `Theft and Extortion...`,
    question: "Aman tells Mr. X: 'Give me your watch, or I will publish a scandalous story about you in the newspaper.' Mr. X gives the watch. What crime has Aman committed?",
    options: [
      "Theft",
      "Extortion",
      "Robbery",
      "Cheating"
    ],
    correct: 1,
    explanation: "Consent was obtained by putting the person in fear of injury (reputational injury), which is extortion."
  },
  {
    id: "mhcet-2-q15",
    section: "Legal Aptitude & Reasoning",
    passage: `Theft and Extortion...`,
    question: "Can a person commit 'theft' of their own property?",
    options: [
      "No, it's their own property.",
      "Yes, if they take it dishonestly from someone who has legal possession of it (e.g., taking a car from a repair shop without paying).",
      "No, that would be called 'reclaiming'.",
      "Yes, but only if they are drunk."
    ],
    correct: 1,
    explanation: "Theft is an offence against 'possession', not necessarily against 'ownership'."
  },
  {
    id: "mhcet-2-q16",
    section: "Legal Aptitude & Reasoning",
    passage: `Theft and Extortion...`,
    question: "Aman points a gun at Mr. X and says: 'Give me your wallet now or I will shoot you.' Mr. X gives the wallet. This is:",
    options: [
      "Theft",
      "Extortion",
      "Robbery",
      "Dacoity"
    ],
    correct: 2,
    explanation: "Extortion becomes robbery when there is a threat of 'instant death' or 'instant hurt'."
  },

  // PASSAGE 5: INTELLECTUAL PROPERTY – PATENTS (Q17–Q20)
  {
    id: "mhcet-2-q17",
    section: "Legal Aptitude & Reasoning",
    passage: `A Patent is an exclusive right granted by the government for an 'Invention'. Under the Patents Act, 1970, for an invention to be patentable, it must satisfy three criteria: (i) Novelty: It must be new and not known anywhere in the world; (ii) Inventive Step: It must not be obvious to a person skilled in the art; and (iii) Industrial Application: It must be capable of being used in an industry. In India, 'Product Patents' were introduced in 2005 (earlier only 'Process Patents' were allowed for food/drugs). However, Section 3(d) of the Act prevents 'evergreening' of patents—it states that a mere discovery of a new form of a known substance, which does not result in the enhancement of 'known efficacy', is NOT an invention. The duration of a patent is 20 years from the date of filing.`,
    question: "A pharmaceutical company discovers that a slightly different crystal form of a known cancer drug is easier to swallow, but it works exactly the same way as the old drug. Can they get a new patent for this in India?",
    options: [
      "Yes, any new form is patentable.",
      "No, under Section 3(d), a new form of a known substance without enhanced 'efficacy' is not patentable.",
      "Yes, because it is an 'Industrial Application'.",
      "No, because patents are only for machines."
    ],
    correct: 1,
    explanation: "Section 3(d) is a unique Indian provision to prevent companies from extending their patent monopolies through minor, non-efficacious changes."
  },
  {
    id: "mhcet-2-q18",
    section: "Legal Aptitude & Reasoning",
    passage: `Intellectual Property – Patents...`,
    question: "What is the standard duration of a patent in India?",
    options: [
      "10 years",
      "20 years",
      "50 years",
      "Lifetime of the inventor"
    ],
    correct: 1,
    explanation: "The standard term for all patents is 20 years from the date of filing the application."
  },
  {
    id: "mhcet-2-q19",
    section: "Legal Aptitude & Reasoning",
    passage: `Intellectual Property – Patents...`,
    question: "Can a naturally occurring plant or animal be patented in India?",
    options: [
      "Yes, if you find it first.",
      "No, plants and animals in their natural state are not 'inventions' and are excluded from patentability.",
      "Yes, but only if they are colorful.",
      "No, only the government can own them."
    ],
    correct: 1,
    explanation: "Discoveries of living things occurring in nature are not patentable inventions."
  },
  {
    id: "mhcet-2-q20",
    section: "Legal Aptitude & Reasoning",
    passage: `Intellectual Property – Patents...`,
    question: "What is an 'Inventive Step'?",
    options: [
      "A step taken to sell the product.",
      "A feature of an invention that involves technical advance or economic significance and is NOT obvious to an expert in that field.",
      "The first step of building a factory.",
      "A new name for an old product."
    ],
    correct: 1,
    explanation: "The 'non-obviousness' or inventive step is a crucial test for a patent."
  },

  // PASSAGE 6: FAMILY LAW – ADOPTION (Q21–Q24)
  {
    id: "mhcet-2-q21",
    section: "Legal Aptitude & Reasoning",
    passage: `The Hindu Adoptions and Maintenance Act (HAMA), 1956, governs adoption among Hindus. For a valid adoption: (i) The person adopting must have the capacity and right to take in adoption; (ii) The person giving in adoption must have the capacity; (iii) The person adopted must be capable of being taken; and (iv) The adoption must be made in compliance with the Act. A Hindu male or female of sound mind who is not a minor can adopt. If they have a spouse, consent of the spouse is mandatory. A crucial rule is that if you are adopting a child of the opposite sex, the age difference between the adopter and the adopted child must be at least 21 years. Adoption, once made, is 'irrevocable'—it cannot be cancelled by either party. The child's ties with their biological family are severed and replaced by ties with the adoptive family.`,
    question: "Aman, aged 30, wants to adopt a girl child aged 15. Can he legally do so under HAMA?",
    options: [
      "Yes, he is an adult and can adopt.",
      "No, because the age difference between him and the child is only 15 years, and the law requires a 21-year gap for adopting a child of the opposite sex.",
      "Yes, but only if he gets permission from the girl's parents.",
      "No, only married couples can adopt."
    ],
    correct: 1,
    explanation: "The 21-year age gap is a mandatory safety provision in HAMA when adopting a child of the opposite sex."
  },
  {
    id: "mhcet-2-q22",
    section: "Legal Aptitude & Reasoning",
    passage: `Adoption...`,
    question: "Aman adopts a son. After 2 years, he discovers the son is very naughty and wants to 'return' him to his biological parents. Is this allowed?",
    options: [
      "Yes, adoption is like a contract that can be cancelled.",
      "No, a valid adoption is 'irrevocable' and cannot be cancelled by the adopter or the adopted child.",
      "Yes, but only if the biological parents agree.",
      "No, but he can give the child for adoption to someone else."
    ],
    correct: 1,
    explanation: "Section 15 of HAMA clearly states that a valid adoption cannot be cancelled."
  },
  {
    id: "mhcet-2-q23",
    section: "Legal Aptitude & Reasoning",
    passage: `Adoption...`,
    question: "Can a single woman adopt a child under HAMA?",
    options: [
      "No, only a husband and wife together can adopt.",
      "Yes, any Hindu female who is an adult and of sound mind (whether unmarried, widowed, or divorced) can adopt.",
      "Yes, but only a girl child.",
      "No, but she can be a foster parent."
    ],
    correct: 1,
    explanation: "Single women have full capacity to adopt under modern Hindu law."
  },
  {
    id: "mhcet-2-q24",
    section: "Legal Aptitude & Reasoning",
    passage: `Adoption...`,
    question: "If a person has a living son, can they adopt another son under HAMA?",
    options: [
      "Yes, they can adopt as many as they want.",
      "No, HAMA prohibits adopting a child of the same sex if you already have a living child, grandchild, or great-grandchild of that sex.",
      "Yes, but they must pay a fine.",
      "No, unless the living son is a major."
    ],
    correct: 1,
    explanation: "You cannot adopt a son if you already have one, and you cannot adopt a daughter if you already have one."
  },

  // SECTION 2: GK & CURRENT AFFAIRS (24 QUESTIONS)
  {
    id: "mhcet-2-q25",
    section: "GK & Current Affairs",
    question: "Who is the 'Miss World 2024' (crowned in Mumbai)?",
    options: ["Krystyna Pyszková", "Yasmina Zaytoun", "Karolina Bielawska", "Sini Shetty"],
    correct: 0,
    explanation: "Krystyna Pyszková from the Czech Republic was crowned in Mumbai in March 2024."
  },
  {
    id: "mhcet-2-q26",
    section: "GK & Current Affairs",
    question: "The 'Dadasaheb Phalke Award' for 2023 was conferred upon:",
    options: ["Waheeda Rehman", "Asha Parekh", "Rajinikanth", "Amitabh Bachchan"],
    correct: 0,
    explanation: "Waheeda Rehman received the 53rd Dadasaheb Phalke Award."
  },
  {
    id: "mhcet-2-q27",
    section: "GK & Current Affairs",
    question: "Which country is the largest trading partner of India in 2023-24?",
    options: ["China", "USA", "UAE", "Saudi Arabia"],
    correct: 1,
    explanation: "The USA remains India's largest trading partner."
  },
  {
    id: "mhcet-2-q28",
    section: "GK & Current Affairs",
    question: "The 'World Happiness Report 2024' ranked which country at the top?",
    options: ["Denmark", "Finland", "Iceland", "Norway"],
    correct: 1,
    explanation: "Finland has been the happiest country for seven consecutive years."
  },
  {
    id: "mhcet-2-q29",
    section: "GK & Current Affairs",
    question: "Who is the current President of the World Bank?",
    options: ["David Malpass", "Ajay Banga", "Kristalina Georgieva", "Jim Yong Kim"],
    correct: 1,
    explanation: "Indian-American Ajay Banga is the current President."
  },
  {
    id: "mhcet-2-q30",
    section: "GK & Current Affairs",
    question: "The 'NITI Aayog' was established in which year?",
    options: ["2014", "2015", "2016", "2017"],
    correct: 1,
    explanation: "It replaced the Planning Commission on January 1, 2015."
  },
  {
    id: "mhcet-2-q31",
    section: "GK & Current Affairs",
    question: "Which city is the venue for the 2024 Summer Olympics?",
    options: ["Tokyo", "Paris", "Los Angeles", "Brisbane"],
    correct: 1,
    explanation: "Paris, France."
  },
  {
    id: "mhcet-2-q32",
    section: "GK & Current Affairs",
    question: "The 'Nilgiri Tahr' is the state animal of which Indian state?",
    options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    correct: 1,
    explanation: "Tamil Nadu."
  },
  {
    id: "mhcet-2-q33",
    section: "GK & Current Affairs",
    question: "Who won the 'Booker Prize 2023'?",
    options: ["Paul Lynch", "Shehan Karunatilaka", "Damon Galgut", "Douglas Stuart"],
    correct: 0,
    explanation: "Paul Lynch won for his novel 'Prophet Song'."
  },
  {
    id: "mhcet-2-q34",
    section: "GK & Current Affairs",
    question: "The 'Lata Mangeshkar Award 2023' of Maharashtra government was given to:",
    options: ["Suresh Wadkar", "Asha Bhosle", "A.R. Rahman", "Shreya Ghoshal"],
    correct: 0,
    explanation: "Veteran singer Suresh Wadkar was selected for the award."
  },
  {
    id: "mhcet-2-q35",
    section: "GK & Current Affairs",
    question: "Which Indian state has the highest forest cover by area?",
    options: ["Arunachal Pradesh", "Madhya Pradesh", "Chhattisgarh", "Odisha"],
    correct: 1,
    explanation: "Madhya Pradesh has the largest forest cover by area."
  },
  {
    id: "mhcet-2-q36",
    section: "GK & Current Affairs",
    question: "The 'First Women's Premier League' (WPL) 2023 was won by:",
    options: ["Delhi Capitals", "Mumbai Indians", "Royal Challengers Bangalore", "UP Warriorz"],
    correct: 1,
    explanation: "Mumbai Indians won the inaugural title."
  },
  {
    id: "mhcet-2-q37",
    section: "GK & Current Affairs",
    question: "Who is the current National Security Advisor (NSA) of India?",
    options: ["Ajit Doval", "Brijesh Mishra", "Shivshankar Menon", "S. Jaishankar"],
    correct: 0,
    explanation: "Ajit Doval."
  },
  {
    id: "mhcet-2-q38",
    section: "GK & Current Affairs",
    question: "The 'Vande Bharat' mission was related to:",
    options: ["High-speed trains", "Evacuation of Indian citizens during COVID-19", "Space exploration", "Cleaning rivers"],
    correct: 1,
    explanation: "It was a massive repatriation operation."
  },
  {
    id: "mhcet-2-q39",
    section: "GK & Current Affairs",
    question: "Which Indian city has the world's longest railway platform?",
    options: ["Gorakhpur", "Hubballi", "Kollam", "Kharagpur"],
    correct: 1,
    explanation: "Shree Siddharoodha Swamiji Hubballi Junction in Karnataka."
  },
  {
    id: "mhcet-2-q40",
    section: "GK & Current Affairs",
    question: "The 'Oscar' for Best Original Song in 2023 was won by:",
    options: ["Naatu Naatu", "Hold My Hand", "Lift Me Up", "This is a Life"],
    correct: 0,
    explanation: "From the movie RRR."
  },
  {
    id: "mhcet-2-q41",
    section: "GK & Current Affairs",
    question: "Who is the author of 'The India Way'?",
    options: ["Shashi Tharoor", "S. Jaishankar", "Raghuram Rajan", "Amartya Sen"],
    correct: 1,
    explanation: "Dr. S. Jaishankar, the External Affairs Minister."
  },
  {
    id: "mhcet-2-q42",
    section: "GK & Current Affairs",
    question: "The 'Project Tiger' completed how many years in 2023?",
    options: ["25", "40", "50", "60"],
    correct: 2,
    explanation: "Launched in 1973, it completed 50 years in 2023."
  },
  {
    id: "mhcet-2-q43",
    section: "GK & Current Affairs",
    question: "Which country is the host of the 2024 ICC Men's T20 World Cup?",
    options: ["India", "USA and West Indies", "Australia", "England"],
    correct: 1,
    explanation: "USA and West Indies co-hosted."
  },
  {
    id: "mhcet-2-q44",
    section: "GK & Current Affairs",
    question: "The 'Ramon Magsaysay Award' 2023 from India was given to:",
    options: ["Dr. Ravi Kannan R.", "Sonam Wangchuk", "Arvind Kejriwal", "Kiran Bedi"],
    correct: 0,
    explanation: "Surgical oncologist Dr. Ravi Kannan R. from Assam."
  },
  {
    id: "mhcet-2-q45",
    section: "GK & Current Affairs",
    question: "Which state is the 'First Organic State' of India?",
    options: ["Sikkim", "Uttarakhand", "Himachal Pradesh", "Kerala"],
    correct: 0,
    explanation: "Sikkim."
  },
  {
    id: "mhcet-2-q46",
    section: "GK & Current Affairs",
    question: "The 'New Education Policy' (NEP) was launched in which year?",
    options: ["2019", "2020", "2021", "2022"],
    correct: 1,
    explanation: "2020."
  },
  {
    id: "mhcet-2-q47",
    section: "GK & Current Affairs",
    question: "Who is the CEO of Google/Alphabet?",
    options: ["Satya Nadella", "Sundar Pichai", "Tim Cook", "Elon Musk"],
    correct: 1,
    explanation: "Sundar Pichai."
  },
  {
    id: "mhcet-2-q48",
    section: "GK & Current Affairs",
    question: "The 'COP 28' climate summit was held in:",
    options: ["Glasgow", "Sharm El-Sheikh", "Dubai", "Baku"],
    correct: 2,
    explanation: "Dubai, UAE."
  },

  // SECTION 3: LOGICAL & ANALYTICAL REASONING (24 QUESTIONS)
  {
    id: "mhcet-2-q49",
    section: "Logical Reasoning",
    question: "Find the missing number in the series: 1, 9, 25, 49, ?, 121",
    options: ["64", "81", "100", "91"],
    correct: 1,
    explanation: "Squares of odd numbers: 1^2, 3^2, 5^2, 7^2, 9^2 (81), 11^2."
  },
  {
    id: "mhcet-2-q50",
    section: "Logical Reasoning",
    question: "If 'BIRD' is 'CJSE', then 'CAT' is:",
    options: ["DBU", "BZS", "DAU", "DBS"],
    correct: 0,
    explanation: "Pattern: +1. C+1=D, A+1=B, T+1=U. DBU."
  },
  {
    id: "mhcet-2-q51",
    section: "Logical Reasoning",
    question: "Pointing to a man, a woman said, 'His mother is the only daughter of my father.' How is the woman related to the man?",
    options: ["Sister", "Mother", "Aunt", "Daughter"],
    correct: 1,
    explanation: "The woman is the only daughter of her father. So she is the mother of the man."
  },
  {
    id: "mhcet-2-q52",
    section: "Logical Reasoning",
    question: "Odd one out: January, May, July, November",
    options: ["January", "May", "July", "November"],
    correct: 3,
    explanation: "November has 30 days; others have 31."
  },
  {
    id: "mhcet-2-q53",
    section: "Logical Reasoning",
    question: "In a certain code, 'GOOD' is '715154'. What is 'BAD'?",
    options: ["214", "124", "412", "241"],
    correct: 0,
    explanation: "Alphabet positions: G=7, O=15, D=4. So B=2, A=1, D=4. 214."
  },
  {
    id: "mhcet-2-q54",
    section: "Logical Reasoning",
    question: "A man is facing North. He turns 45 degrees clockwise, then 90 degrees anti-clockwise. Which direction is he facing now?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    correct: 1,
    explanation: "N + 45 CW = NE. NE - 90 ACW = NW."
  },
  {
    id: "mhcet-2-q55",
    section: "Logical Reasoning",
    question: "Analogy: Library : Books :: Forest : ?",
    options: ["Animals", "Trees", "Water", "Sky"],
    correct: 1,
    explanation: "Library is made of books; forest is made of trees."
  },
  {
    id: "mhcet-2-q56",
    section: "Logical Reasoning",
    question: "All lawyers are humans. Some humans are doctors. Conclusion: Some lawyers are doctors.",
    options: ["True", "False", "Maybe", "Data Inadequate"],
    correct: 2,
    explanation: "Maybe. There's no direct overlap guaranteed."
  },
  {
    id: "mhcet-2-q57",
    section: "Logical Reasoning",
    question: "If 'A' is to the West of 'B', and 'C' is to the South of 'A', then 'C' is in which direction of 'B'?",
    options: ["North-East", "South-West", "South-East", "North-West"],
    correct: 1,
    explanation: "A is West, C is South of A. So C is South-West of B."
  },
  {
    id: "mhcet-2-q58",
    section: "Logical Reasoning",
    question: "Missing number: 5, 10, 20, 40, ?",
    options: ["60", "70", "80", "100"],
    correct: 2,
    explanation: "Pattern: x2. 40*2 = 80."
  },
  {
    id: "mhcet-2-q59",
    section: "Logical Reasoning",
    question: "If the day after tomorrow is Sunday, what day was yesterday?",
    options: ["Thursday", "Friday", "Saturday", "Wednesday"],
    correct: 0,
    explanation: "Day after tomorrow is Sunday -> Tomorrow is Saturday -> Today is Friday -> Yesterday was Thursday."
  },
  {
    id: "mhcet-2-q60",
    section: "Logical Reasoning",
    question: "Find the odd one: Apple, Rose, Lily, Lotus",
    options: ["Apple", "Rose", "Lily", "Lotus"],
    correct: 0,
    explanation: "Apple is a fruit; others are flowers."
  },
  {
    id: "mhcet-2-q61",
    section: "Logical Reasoning",
    question: "Arrange logically: 1. Rain, 2. Cloud, 3. Sun, 4. Rainbow, 5. Vapor",
    options: ["3, 5, 2, 1, 4", "1, 2, 3, 4, 5", "5, 2, 1, 4, 3", "3, 2, 5, 1, 4"],
    correct: 0,
    explanation: "Sun -> Vapor -> Cloud -> Rain -> Rainbow."
  },
  {
    id: "mhcet-2-q62",
    section: "Logical Reasoning",
    question: "If 'P' is the brother of 'Q', and 'R' is the mother of 'Q', how is 'R' related to 'P'?",
    options: ["Sister", "Aunt", "Mother", "Daughter"],
    correct: 2,
    explanation: "R is mother of Q, P is brother of Q. So R is mother of P."
  },
  {
    id: "mhcet-2-q63",
    section: "Logical Reasoning",
    question: "Next term: A, C, F, J, ?",
    options: ["L", "M", "N", "O"],
    correct: 3,
    explanation: "Gaps: +2, +3, +4, so +5. J(10)+5 = 15(O)."
  },
  {
    id: "mhcet-2-q64",
    section: "Logical Reasoning",
    question: "A cube is painted green on all faces. If it's cut into 27 small cubes, how many have 2 faces painted?",
    options: ["8", "12", "6", "4"],
    correct: 1,
    explanation: "Cubes with 2 sides painted are on the edges. 1 per edge x 12 edges = 12."
  },
  {
    id: "mhcet-2-q65",
    section: "Logical Reasoning",
    question: "Angle between hands at 3:30?",
    options: ["75 deg", "85 deg", "90 deg", "105 deg"],
    correct: 0,
    explanation: "|(30*3 - 5.5*30)| = |90 - 165| = 75 degrees."
  },
  {
    id: "mhcet-2-q66",
    section: "Logical Reasoning",
    question: "If 'WATER' is '12345', what is 'WET'?",
    options: ["143", "134", "142", "124"],
    correct: 0,
    explanation: "W=1, E=4, T=3. 143."
  },
  {
    id: "mhcet-2-q67",
    section: "Logical Reasoning",
    question: "Syllogism: No paper is pen. No pen is pencil. Conclusion: No paper is pencil.",
    options: ["True", "False", "Maybe", "Data Inadequate"],
    correct: 2,
    explanation: "Maybe. There's no direct relation defined."
  },
  {
    id: "mhcet-2-q68",
    section: "Logical Reasoning",
    question: "If 10 men can do a work in 10 days, 1 man can do it in:",
    options: ["1 day", "10 days", "100 days", "1000 days"],
    correct: 2,
    explanation: "10 * 10 = 1 * x. x = 100."
  },
  {
    id: "mhcet-2-q69",
    section: "Logical Reasoning",
    question: "Choose the odd one: Delhi, Mumbai, Kolkata, Sri Lanka",
    options: ["Delhi", "Mumbai", "Kolkata", "Sri Lanka"],
    correct: 3,
    explanation: "Sri Lanka is a country."
  },
  {
    id: "mhcet-2-q70",
    section: "Logical Reasoning",
    question: "If 'A' is older than 'B', 'C' is older than 'A', then who is the youngest?",
    options: ["A", "B", "C", "Cannot say"],
    correct: 1,
    explanation: "C > A > B. B is youngest."
  },
  {
    id: "mhcet-2-q71",
    section: "Logical Reasoning",
    question: "Next number: 100, 90, 80, 70, ?",
    options: ["50", "60", "65", "55"],
    correct: 1,
    explanation: "Pattern: -10."
  },
  {
    id: "mhcet-2-q72",
    section: "Logical Reasoning",
    question: "Analogy: Pen : Write :: Knife : ?",
    options: ["Cut", "Kill", "Sharp", "Steel"],
    correct: 0,
    explanation: "Purpose of pen is to write; purpose of knife is to cut."
  },

  // SECTION 4: ENGLISH LANGUAGE (24 QUESTIONS)
  {
    id: "mhcet-2-q73",
    section: "English Language",
    question: "Synonym of 'ABANDON':",
    options: ["Keep", "Leave/Forsake", "Start", "Help"],
    correct: 1,
    explanation: "Abandon = leave behind."
  },
  {
    id: "mhcet-2-q74",
    section: "English Language",
    question: "Antonym of 'COURAGE':",
    options: ["Bravery", "Fear", "Cowardice", "Strength"],
    correct: 2,
    explanation: "Cowardice is the opposite of courage."
  },
  {
    id: "mhcet-2-q75",
    section: "English Language",
    question: "Meaning of 'Once in a blue moon':",
    options: ["Daily", "Very rarely", "Monthly", "Never"],
    correct: 1,
    explanation: "Rarely occurring."
  },
  {
    id: "mhcet-2-q76",
    section: "English Language",
    question: "Correct spelling:",
    options: ["Separate", "Seperate", "Seprate", "Saperate"],
    correct: 0,
    explanation: "Separate."
  },
  {
    id: "mhcet-2-q77",
    section: "English Language",
    question: "Fill: 'She has been working here ______ 2010.'",
    options: ["for", "since", "from", "at"],
    correct: 1,
    explanation: "Since (specific point in time)."
  },
  {
    id: "mhcet-2-q78",
    section: "English Language",
    question: "Identify error: 'She (A) is (B) more taller (C) than me (D).'",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "Double comparative is wrong. Just 'taller'."
  },
  {
    id: "mhcet-2-q79",
    section: "English Language",
    question: "Meaning of 'Veni, Vidi, Vici':",
    options: ["I came, I saw, I conquered", "I am, I was, I will", "Live and let live", "Truth alone triumphs"],
    correct: 0,
    explanation: "Julius Caesar's famous quote."
  },
  {
    id: "mhcet-2-q80",
    section: "English Language",
    question: "Opposite of 'OPTIMIST':",
    options: ["Realist", "Pessimist", "Idealist", "Cynic"],
    correct: 1,
    explanation: "Pessimist."
  },
  {
    id: "mhcet-2-q81",
    section: "English Language",
    question: "Choose correct phrasal verb: 'He ______ his father.'",
    options: ["takes after", "takes on", "takes out", "takes off"],
    correct: 0,
    explanation: "Takes after = resembles."
  },
  {
    id: "mhcet-2-q82",
    section: "English Language",
    question: "Passive: 'They are playing football.'",
    options: ["Football is being played by them.", "Football was played by them.", "Football is played.", "They played football."],
    correct: 0,
    explanation: "Is being played."
  },
  {
    id: "mhcet-2-q83",
    section: "English Language",
    question: "Meaning of 'Status quo ante':",
    options: ["Current state", "State as it was before", "Future state", "Legal state"],
    correct: 1,
    explanation: "Previous state of affairs."
  },
  {
    id: "mhcet-2-q84",
    section: "English Language",
    question: "One word for 'A collection of poems':",
    options: ["Anthology", "Catalogue", "Dictionary", "Biography"],
    correct: 0,
    explanation: "Anthology."
  },
  {
    id: "mhcet-2-q85",
    section: "English Language",
    question: "Correct spelling:",
    options: ["Maintenance", "Maintainance", "Maintenence", "Maintenace"],
    correct: 0,
    explanation: "Maintenance."
  },
  {
    id: "mhcet-2-q86",
    section: "English Language",
    question: "Synonym of 'GENUINE':",
    options: ["Fake", "Authentic", "Bad", "New"],
    correct: 1,
    explanation: "Authentic."
  },
  {
    id: "mhcet-2-q87",
    section: "English Language",
    question: "Meaning of 'Pro rata':",
    options: ["For a reason", "In proportion", "By law", "Against the rule"],
    correct: 1,
    explanation: "Proportionally."
  },
  {
    id: "mhcet-2-q88",
    section: "English Language",
    question: "Figure of speech: 'Life is a roller coaster.'",
    options: ["Simile", "Metaphor", "Personification", "Alliteration"],
    correct: 1,
    explanation: "Metaphor."
  },
  {
    id: "mhcet-2-q89",
    section: "English Language",
    question: "Choose word that means 'A person who is centenarian':",
    options: ["10 years old", "50 years old", "100 years old", "1000 years old"],
    correct: 2,
    explanation: "100 years old."
  },
  {
    id: "mhcet-2-q90",
    section: "English Language",
    question: "Antonym of 'VANITY':",
    options: ["Pride", "Humility", "Beauty", "Worth"],
    correct: 1,
    explanation: "Humility."
  },
  {
    id: "mhcet-2-q91",
    section: "English Language",
    question: "Meaning of 'Amicus Curiae':",
    options: ["Friend of the court", "Enemy of the law", "Legal fee", "A new witness"],
    correct: 0,
    explanation: "Friend of the court (neutral expert)."
  },
  {
    id: "mhcet-2-q92",
    section: "English Language",
    question: "Identify error: 'Each (A) of the (B) boys (C) are (D) here.'",
    options: ["A", "B", "C", "D"],
    correct: 3,
    explanation: "Should be 'is'."
  },
  {
    id: "mhcet-2-q93",
    section: "English Language",
    question: "Meaning of 'In toto':",
    options: ["In parts", "In total/completely", "In court", "In future"],
    correct: 1,
    explanation: "Completely."
  },
  {
    id: "mhcet-2-q94",
    section: "English Language",
    question: "Synonym of 'CAUTIOUS':",
    options: ["Brave", "Careful", "Careless", "Fast"],
    correct: 1,
    explanation: "Careful."
  },
  {
    id: "mhcet-2-q95",
    section: "English Language",
    question: "Antonym of 'LEND':",
    options: ["Give", "Borrow", "Keep", "Lose"],
    correct: 1,
    explanation: "Borrow."
  },
  {
    id: "mhcet-2-q96",
    section: "English Language",
    question: "One word for 'A story with a hidden moral':",
    options: ["Allegory", "Essay", "Report", "News"],
    correct: 0,
    explanation: "Allegory."
  },

  // SECTION 5: BASIC MATHEMATICS (24 QUESTIONS)
  {
    id: "mhcet-2-q97",
    section: "Basic Mathematics",
    question: "What is 20% of 500?",
    options: ["50", "100", "150", "200"],
    correct: 1,
    explanation: "100."
  },
  {
    id: "mhcet-2-q98",
    section: "Basic Mathematics",
    question: "Find x: 2x + 10 = 40",
    options: ["10", "15", "20", "25"],
    correct: 1,
    explanation: "2x = 30, x = 15."
  },
  {
    id: "mhcet-2-q99",
    section: "Basic Mathematics",
    question: "Area of a triangle with base 10 and height 5?",
    options: ["15", "25", "50", "100"],
    correct: 1,
    explanation: "0.5 * 10 * 5 = 25."
  },
  {
    id: "mhcet-2-q100",
    section: "Basic Mathematics",
    question: "Next number in 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "30"],
    correct: 2,
    explanation: "25."
  },
  {
    id: "mhcet-2-q101",
    section: "Basic Mathematics",
    question: "If a pen costs 5, how many for 100?",
    options: ["10", "20", "30", "40"],
    correct: 1,
    explanation: "20."
  },
  {
    id: "mhcet-2-q102",
    section: "Basic Mathematics",
    question: "Sum of 0.5 and 0.25?",
    options: ["0.7", "0.75", "0.8", "1.0"],
    correct: 1,
    explanation: "0.75."
  },
  {
    id: "mhcet-2-q103",
    section: "Basic Mathematics",
    question: "Average of 5, 10, 15?",
    options: ["5", "10", "15", "30"],
    correct: 1,
    explanation: "10."
  },
  {
    id: "mhcet-2-q104",
    section: "Basic Mathematics",
    question: "Square of 11?",
    options: ["111", "121", "131", "141"],
    correct: 1,
    explanation: "121."
  },
  {
    id: "mhcet-2-q105",
    section: "Basic Mathematics",
    question: "HCF of 12 and 18?",
    options: ["2", "3", "6", "12"],
    correct: 2,
    explanation: "6."
  },
  {
    id: "mhcet-2-q106",
    section: "Basic Mathematics",
    question: "LCM of 10 and 20?",
    options: ["10", "20", "30", "40"],
    correct: 1,
    explanation: "20."
  },
  {
    id: "mhcet-2-q107",
    section: "Basic Mathematics",
    question: "If 10% of a number is 50, the number is:",
    options: ["50", "100", "500", "1000"],
    correct: 2,
    explanation: "500."
  },
  {
    id: "mhcet-2-q108",
    section: "Basic Mathematics",
    question: "Perimeter of a square with side 4?",
    options: ["8", "12", "16", "20"],
    correct: 2,
    explanation: "16."
  },
  {
    id: "mhcet-2-q109",
    section: "Basic Mathematics",
    question: "What is 3^4?",
    options: ["12", "27", "64", "81"],
    correct: 3,
    explanation: "81."
  },
  {
    id: "mhcet-2-q110",
    section: "Basic Mathematics",
    question: "If a car travels 40 km in 30 mins, its speed in km/h is:",
    options: ["40", "60", "80", "100"],
    correct: 2,
    explanation: "80 km/h."
  },
  {
    id: "mhcet-2-q111",
    section: "Basic Mathematics",
    question: "Square root of 625?",
    options: ["15", "25", "35", "45"],
    correct: 1,
    explanation: "25."
  },
  {
    id: "mhcet-2-q112",
    section: "Basic Mathematics",
    question: "What is 1/4 as a percentage?",
    options: ["10%", "20%", "25%", "40%"],
    correct: 2,
    explanation: "25%."
  },
  {
    id: "mhcet-2-q113",
    section: "Basic Mathematics",
    question: "Volume of a box 2x3x4?",
    options: ["9", "12", "24", "48"],
    correct: 2,
    explanation: "24."
  },
  {
    id: "mhcet-2-q114",
    section: "Basic Mathematics",
    question: "If today is June 1, what date is 10 days later?",
    options: ["June 10", "June 11", "June 12", "June 13"],
    correct: 1,
    explanation: "June 11."
  },
  {
    id: "mhcet-2-q115",
    section: "Basic Mathematics",
    question: "How many degrees in a straight line?",
    options: ["90", "180", "270", "360"],
    correct: 1,
    explanation: "180."
  },
  {
    id: "mhcet-2-q116",
    section: "Basic Mathematics",
    question: "Find the odd one: 2, 4, 6, 9, 10",
    options: ["2", "4", "6", "9"],
    correct: 3,
    explanation: "9 is odd; others are even."
  },
  {
    id: "mhcet-2-q117",
    section: "Basic Mathematics",
    question: "What is 1000 - 99?",
    options: ["900", "901", "911", "801"],
    correct: 1,
    explanation: "901."
  },
  {
    id: "mhcet-2-q118",
    section: "Basic Mathematics",
    question: "Number of seconds in 2 minutes?",
    options: ["60", "100", "120", "200"],
    correct: 2,
    explanation: "120."
  },
  {
    id: "mhcet-2-q119",
    section: "Basic Mathematics",
    question: "If a shirt is 200 after 50% discount, original price was:",
    options: ["100", "300", "400", "500"],
    correct: 2,
    explanation: "400."
  },
  {
    id: "mhcet-2-q120",
    section: "Basic Mathematics",
    question: "1/2 of 1/4 is:",
    options: ["1/4", "1/6", "1/8", "1/10"],
    correct: 2,
    explanation: "1/8."
  }
];
