import { MockQuestion } from "../constants";

export const MHCET_MOCK_1: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE & LEGAL REASONING (24 QUESTIONS)
  // PASSAGE 1: LAW OF TORTS (STRICT LIABILITY)
  {
    id: "mhcet-1-q1",
    section: "Legal Aptitude",
    passage: `Principle: Strict Liability (Rylands v Fletcher) - If a person brings onto his land something which is likely to do mischief if it escapes, he must keep it at his peril, and if he does not do so, he is prima facie answerable for all the damage which is the natural consequence of its escape. Exceptions: (1) Act of God, (2) Plaintiff's own fault, (3) Consent of the Plaintiff, (4) Act of a third party, (5) Statutory Authority.`,
    question: "Aman maintains a large water reservoir on his land for his factory. Due to an unprecedented and extraordinary rainfall, which was never seen in the last 100 years, the reservoir overflowed and damaged Mr. X's neighboring crops. Is Aman liable?",
    options: [
      "Yes, he brought the water onto his land.",
      "No, this qualifies as an 'Act of God' exception (Vis Major).",
      "Yes, he should have built a bigger wall.",
      "No, but only if he pays for half the damage."
    ],
    correct: 1,
    explanation: "Unprecedented and extraordinary natural events qualify as an Act of God."
  },
  {
    id: "mhcet-1-q2",
    section: "Legal Aptitude",
    passage: `Principle: Strict Liability...`,
    question: "Mr. X, a neighbor, sneaks into Aman's factory and accidentally breaks a valve, causing poisonous gas to escape and harm himself. Can Mr. X sue Aman under strict liability?",
    options: [
      "Yes, the gas escaped from Aman's land.",
      "No, the escape was caused by the Plaintiff's (Mr. X) own fault/trespass.",
      "Yes, because Aman didn't have enough security.",
      "No, gas is not considered 'mischievous'."
    ],
    correct: 1,
    explanation: "The plaintiff's own fault is a valid defense."
  },
  {
    id: "mhcet-1-q3",
    section: "Legal Aptitude",
    passage: `Principle: Strict Liability...`,
    question: "Aman stores heavy chemicals on his land. A terrorist (third party) bombs the facility, causing chemicals to spill into Mr. X's well. Is Aman liable?",
    options: [
      "Yes, he kept the chemicals.",
      "No, it was the act of a stranger/third party over whom Aman had no control.",
      "Yes, chemicals are dangerous.",
      "No, but only if Aman reports the terrorist to the police."
    ],
    correct: 1,
    explanation: "The act of a third party/stranger is a defense to strict liability."
  },
  {
    id: "mhcet-1-q4",
    section: "Legal Aptitude",
    passage: `Principle: Strict Liability...`,
    question: "The Government builds a dam under a specific law. The dam leaks and floods local houses. Is the government liable under strict liability?",
    options: [
      "Yes, they caused the flood.",
      "No, the dam was built under 'Statutory Authority' (legal permission).",
      "Yes, if the water was cold.",
      "No, but only if they give free electricity."
    ],
    correct: 1,
    explanation: "Statutory authority is an exception to strict liability."
  },
  {
    id: "mhcet-1-q5",
    section: "Legal Aptitude",
    passage: `Principle: Strict Liability...`,
    question: "Aman and Mr. X share a common water tank for their mutual benefit. The tank leaks and harms Mr. X's floor. Is Aman liable?",
    options: [
      "Yes, he is the owner of the tank.",
      "No, because there was 'Consent of the Plaintiff' (Common Benefit).",
      "Yes, because Mr. X's floor is expensive.",
      "No, but only if the leak is small."
    ],
    correct: 1,
    explanation: "Common benefit implies consent, which is an exception."
  },
  {
    id: "mhcet-1-q6",
    section: "Legal Aptitude",
    passage: `Principle: Strict Liability...`,
    question: "Aman keeps a pet tiger. The tiger escapes and bites a passerby. Aman says he took all possible care and the tiger was usually very calm. Is Aman liable?",
    options: [
      "No, he took all possible care.",
      "Yes, under strict liability, the owner is liable for the escape of dangerous things regardless of 'care' taken.",
      "No, if the passerby was wearing red.",
      "Yes, but only if the tiger was hungry."
    ],
    correct: 1,
    explanation: "Liability is 'strict', meaning even if you took care, you are liable for the escape."
  },

  // PASSAGE 2: CRIMINAL LAW (PRIVATE DEFENCE)
  {
    id: "mhcet-1-q7",
    section: "Legal Aptitude",
    passage: `Principle: Every person has a right to defend his own body, and the body of any other person, against any offence affecting the human body. (1) The right of private defence is not available if there is time to have recourse to the protection of public authorities. (2) The force used must be proportionate to the threat. (3) The right starts as soon as a reasonable apprehension of danger arises and continues as long as such apprehension exists. (4) The right does not extend to the inflicting of more harm than it is necessary to inflict for the purpose of defence.`,
    question: "Aman sees Mr. X pulling out a gun to shoot him. Before Mr. X can pull the trigger, Aman hits Mr. X with a heavy rod, causing Mr. X to lose consciousness. Did Aman use his right of private defence correctly?",
    options: [
      "No, he should have waited for the police.",
      "Yes, he had a reasonable apprehension of death and used proportionate force to stop the threat.",
      "No, hitting someone with a rod is always a crime.",
      "Yes, but only if the gun was loaded."
    ],
    correct: 1,
    explanation: "Reasonable apprehension of death allows for strong defensive action."
  },
  {
    id: "mhcet-1-q8",
    section: "Legal Aptitude",
    passage: `Principle: Private Defence...`,
    question: "Aman sees a thief running away with his bag 500 meters away. Aman takes a gun and shoots the thief in the leg to stop him. Is this valid private defence?",
    options: [
      "Yes, he was protecting his property.",
      "No, there was no immediate threat to body, and he could have called the police; also, the force was disproportionate.",
      "Yes, because thieves deserve it.",
      "No, but only if the bag was empty."
    ],
    correct: 1,
    explanation: "The right of private defence does not allow for 'retaliation' or excessive force once the immediate threat is gone."
  },
  {
    id: "mhcet-1-q9",
    section: "Legal Aptitude",
    passage: `Principle: Private Defence...`,
    question: "Aman is being slapped by Mr. X. Aman pulls out a knife and stabs Mr. X multiple times. Is this valid?",
    options: [
      "Yes, Mr. X started it.",
      "No, the force used (stabbing) was not 'proportionate' to the threat (slapping).",
      "Yes, because Aman was angry.",
      "No, but only if Mr. X dies."
    ],
    correct: 1,
    explanation: "Proportionality is the key rule of private defence."
  },
  {
    id: "mhcet-1-q10",
    section: "Legal Aptitude",
    passage: `Principle: Private Defence...`,
    question: "Aman's friend is being attacked by a gang with sticks. Aman joins and hits one of the attackers. Is Aman protected?",
    options: [
      "No, it was not his own body.",
      "Yes, the right extends to protecting the 'body of any other person'.",
      "No, unless the friend is a relative.",
      "Yes, but only if the gang had more than 5 people."
    ],
    correct: 1,
    explanation: "You can defend others as well as yourself."
  },
  {
    id: "mhcet-1-q11",
    section: "Legal Aptitude",
    passage: `Principle: Private Defence...`,
    question: "Aman is in his house. A thief enters at night with a knife. Aman hits the thief on the head with a vase. The thief falls. Aman then keeps hitting him for 10 minutes until the thief is dead. Is Aman liable?",
    options: [
      "No, it's his house.",
      "Yes, the right of private defence continues only as long as the 'apprehension of danger exists'. Once the thief was down, the danger ended.",
      "No, because the thief had a knife.",
      "Yes, but only if the vase was expensive."
    ],
    correct: 1,
    explanation: "You cannot continue inflicting harm after the danger has ceased."
  },
  {
    id: "mhcet-1-q12",
    section: "Legal Aptitude",
    passage: `Principle: Private Defence...`,
    question: "Mr. X, who is insane, attacks Aman with an axe. Aman hits Mr. X to defend himself. Mr. X's lawyer argues that since an insane person cannot commit a crime, Aman has no right of 'private defence' against an offence. Is this correct?",
    options: [
      "Yes, you can only defend against criminals.",
      "No, the right of private defence is available against the 'act' of any person, even if they are legally incapable of committing a crime (like an insane person or a child).",
      "Yes, Aman should have just run away.",
      "No, but only if Mr. X was actually violent before."
    ],
    correct: 1,
    explanation: "The law protects the defender regardless of the legal capacity of the attacker."
  },

  // PASSAGE 3: CONSTITUTIONAL LAW (WRITS)
  {
    id: "mhcet-1-q13",
    section: "Legal Aptitude",
    passage: `Principle: Under Article 32 and 226, the Courts can issue 'Writs'. (1) Habeas Corpus: To produce a person who is illegally detained. (2) Mandamus: To command a public official to perform their legal duty. (3) Quo Warranto: To challenge the right of a person to hold a public office. (4) Prohibition/Certiorari: To prevent or correct errors of jurisdiction by lower courts/tribunals.`,
    question: "Aman is picked up by the police and kept in the station for 4 days without being produced before a magistrate. Which writ should his family file?",
    options: ["Mandamus", "Habeas Corpus", "Quo Warranto", "Certiorari"],
    correct: 1,
    explanation: "Habeas Corpus is the remedy against illegal detention."
  },
  {
    id: "mhcet-1-q14",
    section: "Legal Aptitude",
    passage: `Principle: Writs...`,
    question: "A government officer refuses to issue a death certificate despite all documents being submitted and valid. Which writ is most appropriate?",
    options: ["Habeas Corpus", "Mandamus", "Prohibition", "Quo Warranto"],
    correct: 1,
    explanation: "Mandamus (We Command) is issued to force an official to do their duty."
  },
  {
    id: "mhcet-1-q15",
    section: "Legal Aptitude",
    passage: `Principle: Writs...`,
    question: "A person who is not qualified (too young) is appointed as a High Court Judge. A citizen wants to challenge this appointment. Which writ?",
    options: ["Certiorari", "Quo Warranto", "Mandamus", "Habeas Corpus"],
    correct: 1,
    explanation: "Quo Warranto challenges the legality of a person's claim to a public office."
  },
  {
    id: "mhcet-1-q16",
    section: "Legal Aptitude",
    passage: `Principle: Writs...`,
    question: "A lower court delivers a judgment in a case where it had no jurisdiction (power) to hear that matter. The High Court wants to quash (cancel) that order. Which writ?",
    options: ["Mandamus", "Certiorari", "Habeas Corpus", "Quo Warranto"],
    correct: 1,
    explanation: "Certiorari is used to quash orders of lower courts made without jurisdiction."
  },
  {
    id: "mhcet-1-q17",
    section: "Legal Aptitude",
    passage: `Principle: Writs...`,
    question: "Can a writ be issued against a private individual (like a neighbor)?",
    options: [
      "Yes, for all writs.",
      "Only Habeas Corpus can be issued against a private person; most others are only for public authorities.",
      "No, writs are only for the Prime Minister.",
      "Yes, but only if they owe you money."
    ],
    correct: 1,
    explanation: "Most writs are public law remedies, but Habeas Corpus can free someone from private detention too."
  },
  {
    id: "mhcet-1-q18",
    section: "Legal Aptitude",
    passage: `Principle: Writs...`,
    question: "Who is known as the 'Protector and Guarantor' of Fundamental Rights in India?",
    options: ["The President", "The Supreme Court", "The Parliament", "The Prime Minister"],
    correct: 1,
    explanation: "The Supreme Court (Article 32)."
  },

  // PASSAGE 4: LAW OF CONTRACTS (PROPOSAL)
  {
    id: "mhcet-1-q19",
    section: "Legal Aptitude",
    passage: `Principle: A 'Proposal' or 'Offer' must be distinguished from an 'Invitation to Treat' (or Invitation to Offer). An advertisement of goods for sale, a price list, or a display of items in a shop window with price tags are generally invitations to treat. They are not offers. The offer is made when the customer brings the item to the counter and expresses a desire to buy. The contract is formed when the shopkeeper accepts that offer.`,
    question: "Aman sees a shirt in a shop window marked '₹100'. He goes inside and gives ₹100 to the shopkeeper. The shopkeeper says, 'Sorry, the tag was a mistake, it is ₹1,000. I won't sell it for ₹100.' Can Aman sue for breach of contract?",
    options: [
      "Yes, the display was an offer.",
      "No, the display was an 'invitation to treat'; the shopkeeper is not bound to accept Aman's offer of ₹100.",
      "Yes, because the customer is always right.",
      "No, but only if the shopkeeper apologizes."
    ],
    correct: 1,
    explanation: "Display of goods is an invitation to treat, not a binding offer."
  },
  {
    id: "mhcet-1-q20",
    section: "Legal Aptitude",
    passage: `Principle: Proposal...`,
    question: "An auctioneer publishes an advertisement for an auction of furniture. Aman travels 200 km to attend, but the auction is cancelled. Can Aman recover his travel costs?",
    options: [
      "Yes, the ad was a binding offer.",
      "No, an advertisement for an auction is an invitation to treat; no contract was formed.",
      "Yes, if he has the ticket.",
      "No, but the auctioneer must pay for his food."
    ],
    correct: 1,
    explanation: "Advertising an auction is just an invitation to negotiate."
  },
  {
    id: "mhcet-1-q21",
    section: "Legal Aptitude",
    passage: `Principle: Proposal...`,
    question: "A company advertises that they will pay £100 to anyone who uses their medicine as directed and still catches the flu. Is this an offer?",
    options: [
      "No, it's just an ad.",
      "Yes, this is a 'General Offer' made to the world at large, and anyone who fulfills the conditions accepts the offer.",
      "No, because the company didn't sign a paper with every customer.",
      "Yes, but only if the customer is over 18."
    ],
    correct: 1,
    explanation: "A general offer becomes a contract when someone performs the condition."
  },
  {
    id: "mhcet-1-q22",
    section: "Legal Aptitude",
    passage: `Principle: Proposal...`,
    question: "Aman loses his dog. He offers a reward of ₹5,000 in a newspaper to anyone who finds it. Mr. X finds the dog without knowing about the reward and returns it. Later he hears about the reward. Can he claim it?",
    options: [
      "Yes, he did the work.",
      "No, you cannot accept an offer you didn't know about; knowledge of the offer is essential for acceptance.",
      "Yes, because the dog is safe.",
      "No, but Aman should give him ₹500."
    ],
    correct: 1,
    explanation: "Offer must be communicated to the person who accepts it (Lalman Shukla v Gauri Dutt)."
  },
  {
    id: "mhcet-1-q23",
    section: "Legal Aptitude",
    passage: `Principle: Proposal...`,
    question: "Aman writes a letter to Mr. X: 'I will sell you my car for ₹5 Lakhs. If I don't hear from you by Sunday, I will assume you have accepted.' Mr. X does not reply. Is there a contract?",
    options: [
      "Yes, silence is acceptance.",
      "No, 'Silence' cannot be prescribed as a mode of acceptance; acceptance must be communicated.",
      "Yes, because Aman waited until Sunday.",
      "No, but only if Mr. X sold the car to someone else."
    ],
    correct: 1,
    explanation: "You cannot force someone into a contract by saying their silence means 'Yes'."
  },
  {
    id: "mhcet-1-q24",
    section: "Legal Aptitude",
    passage: `Principle: Proposal...`,
    question: "Which of the following is the correct sequence in a contract?",
    options: [
      "Proposal -> Acceptance -> Promise -> Agreement -> Contract",
      "Agreement -> Proposal -> Promise",
      "Contract -> Proposal -> Acceptance",
      "Acceptance -> Contract -> Agreement"
    ],
    correct: 0,
    explanation: "Basic flow of the Indian Contract Act."
  },

  // SECTION 2: GK & CURRENT AFFAIRS (24 QUESTIONS)
  // MAHARASHTRA SPECIFIC (4-5 Qs)
  {
    id: "mhcet-1-q25",
    section: "GK & Current Affairs",
    question: "Who was the first Chief Minister of Maharashtra?",
    options: ["Yashwantrao Chavan", "Vasantrao Naik", "Sharad Pawar", "Bal Thackeray"],
    correct: 0,
    explanation: "Yashwantrao Chavan (1960)"
  },
  {
    id: "mhcet-1-q26",
    section: "GK & Current Affairs",
    question: "Which city in Maharashtra is known as the 'Wine Capital of India'?",
    options: ["Pune", "Nashik", "Nagpur", "Aurangabad"],
    correct: 1,
    explanation: "Nashik"
  },
  {
    id: "mhcet-1-q27",
    section: "GK & Current Affairs",
    question: "The famous 'Ellora Caves' are located in which district of Maharashtra?",
    options: ["Satara", "Raigad", "Chhatrapati Sambhaji Nagar (Aurangabad)", "Ratnagiri"],
    correct: 2,
    explanation: "Aurangabad district."
  },
  {
    id: "mhcet-1-q28",
    section: "GK & Current Affairs",
    question: "Which social reformer from Maharashtra is known as 'Lokhitwadi'?",
    options: ["Gopal Hari Deshmukh", "Jyotirao Phule", "Baba Amte", "Dhondo Keshav Karve"],
    correct: 0,
    explanation: "Gopal Hari Deshmukh"
  },
  {
    id: "mhcet-1-q29",
    section: "GK & Current Affairs",
    question: "Who is the current Governor of Maharashtra (as of late 2024)?",
    options: ["Bhagat Singh Koshyari", "Ramesh Bais", "C.P. Radhakrishnan", "Banwarilal Purohit"],
    correct: 2,
    explanation: "C.P. Radhakrishnan (appointed in 2024)"
  },

  // CURRENT AFFAIRS 2025-26 & STATIC
  {
    id: "mhcet-1-q30",
    section: "GK & Current Affairs",
    question: "Which Indian city hosted the 'G20 Summit' in 2023?",
    options: ["Mumbai", "New Delhi", "Bengaluru", "Chennai"],
    correct: 1,
    explanation: "New Delhi"
  },
  {
    id: "mhcet-1-q31",
    section: "GK & Current Affairs",
    question: "Who is the current Chief Justice of India (CJI) as of 2025?",
    options: ["D.Y. Chandrachud", "Sanjeev Khanna", "U.U. Lalit", "N.V. Ramana"],
    correct: 1,
    explanation: "Justice Sanjeev Khanna (succeeded Justice Chandrachud in Nov 2024)"
  },
  {
    id: "mhcet-1-q32",
    section: "GK & Current Affairs",
    question: "Which country's team won the ICC Men's T20 World Cup 2024?",
    options: ["South Africa", "India", "Australia", "England"],
    correct: 1,
    explanation: "India"
  },
  {
    id: "mhcet-1-q33",
    section: "GK & Current Affairs",
    question: "The 'Statue of Equality' in Hyderabad commemorates which saint?",
    options: ["Ramanujacharya", "Basavanna", "Adi Shankara", "Vivekananda"],
    correct: 0,
    explanation: "Ramanujacharya"
  },
  {
    id: "mhcet-1-q34",
    section: "GK & Current Affairs",
    question: "Which article of the Indian Constitution deals with the 'Uniform Civil Code'?",
    options: ["Article 40", "Article 44", "Article 48", "Article 50"],
    correct: 1,
    explanation: "Article 44"
  },
  {
    id: "mhcet-1-q35",
    section: "GK & Current Affairs",
    question: "Who was posthumously awarded the Bharat Ratna in 2024 for his contribution to farmers?",
    options: ["M.S. Swaminathan", "Chaudhary Charan Singh", "Kapur Thakur", "P.V. Narasimha Rao"],
    correct: 1,
    explanation: "Chaudhary Charan Singh"
  },
  {
    id: "mhcet-1-q36",
    section: "GK & Current Affairs",
    question: "Which space agency launched the 'Aditya-L1' mission?",
    options: ["NASA", "ISRO", "ESA", "JAXA"],
    correct: 1,
    explanation: "ISRO (Solar mission)"
  },
  {
    id: "mhcet-1-q37",
    section: "GK & Current Affairs",
    question: "The 'Euro' is the currency of how many EU member states (the Eurozone)?",
    options: ["15", "19", "20", "27"],
    correct: 2,
    explanation: "20 (Croatia joined in 2023)"
  },
  {
    id: "mhcet-1-q38",
    section: "GK & Current Affairs",
    question: "Who won the Nobel Peace Prize 2023?",
    options: ["Narges Mohammadi", "Malala Yousafzai", "World Food Programme", "Denis Mukwege"],
    correct: 0,
    explanation: "Narges Mohammadi (Iran)"
  },
  {
    id: "mhcet-1-q39",
    section: "GK & Current Affairs",
    question: "Which river is known as the 'Sorrow of Bihar'?",
    options: ["Ganga", "Kosi", "Yamuna", "Son"],
    correct: 1,
    explanation: "Kosi"
  },
  {
    id: "mhcet-1-q40",
    section: "GK & Current Affairs",
    question: "The 'World Environment Day' is celebrated on:",
    options: ["June 5", "April 22", "September 16", "December 10"],
    correct: 0,
    explanation: "June 5"
  },
  {
    id: "mhcet-1-q41",
    section: "GK & Current Affairs",
    question: "In which year was the 'United Nations' established?",
    options: ["1919", "1945", "1950", "1939"],
    correct: 1,
    explanation: "1945"
  },
  {
    id: "mhcet-1-q42",
    section: "GK & Current Affairs",
    question: "Who was the first woman President of India?",
    options: ["Indira Gandhi", "Pratibha Patil", "Droupadi Murmu", "Sarojini Naidu"],
    correct: 1,
    explanation: "Pratibha Patil"
  },
  {
    id: "mhcet-1-q43",
    section: "GK & Current Affairs",
    question: "The 'Preamble' of the Indian Constitution was amended only once by which act?",
    options: ["24th Amendment", "42nd Amendment", "44th Amendment", "73rd Amendment"],
    correct: 1,
    explanation: "42nd Amendment (1976)"
  },
  {
    id: "mhcet-1-q44",
    section: "GK & Current Affairs",
    question: "Which gland in the human body is known as the 'Master Gland'?",
    options: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
    correct: 1,
    explanation: "Pituitary"
  },
  {
    id: "mhcet-1-q45",
    section: "GK & Current Affairs",
    question: "The 'Kyoto Protocol' is mainly concerned with:",
    options: ["Trade", "Climate Change", "Nuclear Safety", "Cyber Crime"],
    correct: 1,
    explanation: "Climate Change"
  },
  {
    id: "mhcet-1-q46",
    section: "GK & Current Affairs",
    question: "Who wrote the national song 'Vande Mataram'?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Lala Lajpat Rai"],
    correct: 1,
    explanation: "Bankim Chandra Chattopadhyay"
  },
  {
    id: "mhcet-1-q47",
    section: "GK & Current Affairs",
    question: "Which of the following is a direct tax in India?",
    options: ["GST", "Income Tax", "Excise Duty", "Customs Duty"],
    correct: 1,
    explanation: "Income Tax"
  },
  {
    id: "mhcet-1-q48",
    section: "GK & Current Affairs",
    question: "The 'Sahitya Akademi Award' is given for excellence in which field?",
    options: ["Science", "Literature", "Sports", "Social Work"],
    correct: 1,
    explanation: "Literature"
  },

  // SECTION 3: LOGICAL & ANALYTICAL REASONING (24 QUESTIONS)
  {
    id: "mhcet-1-q49",
    section: "Logical Reasoning",
    question: "Syllogism: All A are B. No B is C. Conclusion: No A is C.",
    options: ["True", "False", "Can't say", "Some A are C"],
    correct: 0,
    explanation: "Standard deductive logic."
  },
  {
    id: "mhcet-1-q50",
    section: "Logical Reasoning",
    question: "Syllogism: Some cats are dogs. All dogs are birds. Conclusion: Some cats are birds.",
    options: ["True", "False", "Maybe", "None"],
    correct: 0,
    explanation: "Intersection follows through."
  },
  {
    id: "mhcet-1-q51",
    section: "Logical Reasoning",
    question: "Seating: 5 people (A,B,C,D,E) sit in a row. A is next to B but not C. D is at the end. If B is in the middle, where is A?",
    options: ["2nd or 4th", "1st", "5th", "3rd"],
    correct: 0,
    explanation: "If B is 3rd, A must be 2nd or 4th."
  },
  {
    id: "mhcet-1-q52",
    section: "Logical Reasoning",
    question: "Blood Relation: A is B's father. C is B's sister. D is A's mother. Relation of C to D?",
    options: ["Daughter", "Granddaughter", "Niece", "Mother"],
    correct: 1,
    explanation: "C is daughter of A, who is son of D."
  },
  {
    id: "mhcet-1-q53",
    section: "Logical Reasoning",
    question: "Analogy: Court : Justice :: School : ?",
    options: ["Teacher", "Education", "Student", "Building"],
    correct: 1,
    explanation: "Purpose relation."
  },
  {
    id: "mhcet-1-q54",
    section: "Logical Reasoning",
    question: "Series: 2, 5, 10, 17, ?",
    options: ["24", "25", "26", "27"],
    correct: 2,
    explanation: "n^2 + 1 series: 1^2+1, 2^2+1, 3^2+1, 4^2+1, 5^2+1=26."
  },
  {
    id: "mhcet-1-q55",
    section: "Logical Reasoning",
    question: "Statement: 'Government should ban plastic.' Conclusion: I. Pollution will decrease. II. People will face difficulty.",
    options: ["Only I", "Only II", "Both I and II follow", "Neither"],
    correct: 2,
    explanation: "Both are logical consequences."
  },
  {
    id: "mhcet-1-q56",
    section: "Logical Reasoning",
    question: "Direction: Aman faces West. He turns 90° right, then 180° back. Direction now?",
    options: ["North", "South", "East", "West"],
    correct: 1,
    explanation: "West -> North (90R) -> South (180 back)."
  },
  {
    id: "mhcet-1-q57",
    section: "Logical Reasoning",
    question: "Coding: If 'CAT' is '3120', what is 'DOG'?",
    options: ["4157", "4158", "5157", "4167"],
    correct: 0,
    explanation: "Alphabet positions: D=4, O=15, G=7."
  },
  {
    id: "mhcet-1-q58",
    section: "Logical Reasoning",
    question: "Analogy: 8 : 64 :: 9 : ?",
    options: ["72", "81", "90", "100"],
    correct: 1,
    explanation: "Square."
  },
  {
    id: "mhcet-1-q59",
    section: "Logical Reasoning",
    question: "Series: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    correct: 1,
    explanation: "Alternate letters."
  },
  {
    id: "mhcet-1-q60",
    section: "Logical Reasoning",
    question: "Find odd one out:",
    options: ["Mars", "Venus", "Moon", "Saturn"],
    correct: 2,
    explanation: "Moon is a satellite, others are planets."
  },
  {
    id: "mhcet-1-q61",
    section: "Logical Reasoning",
    question: "Blood Relation: My mother's father's only son is my:",
    options: ["Father", "Uncle", "Grandfather", "Brother"],
    correct: 1,
    explanation: "Maternal Uncle."
  },
  {
    id: "mhcet-1-q62",
    section: "Logical Reasoning",
    question: "Clock: Time is 3:00. Angle between hands?",
    options: ["0", "45", "90", "180"],
    correct: 2,
    explanation: "90 degrees."
  },
  {
    id: "mhcet-1-q63",
    section: "Logical Reasoning",
    question: "Coding: If 'GOOD' is 'HPPE', what is 'BAD'?",
    options: ["CBE", "ACE", "CCE", "DBE"],
    correct: 0,
    explanation: "Each letter +1."
  },
  {
    id: "mhcet-1-q64",
    section: "Logical Reasoning",
    question: "A is taller than B. C is taller than A. Who is the tallest?",
    options: ["A", "B", "C", "Can't say"],
    correct: 2,
    explanation: "C > A > B."
  },
  {
    id: "mhcet-1-q65",
    section: "Logical Reasoning",
    question: "Series: 100, 90, 81, 73, ?",
    options: ["65", "66", "67", "68"],
    correct: 1,
    explanation: "Subtracting 10, 9, 8, then 7. 73-7 = 66."
  },
  {
    id: "mhcet-1-q66",
    section: "Logical Reasoning",
    question: "Analogy: Book : Author :: Statue : ?",
    options: ["Mason", "Sculptor", "Painter", "Poet"],
    correct: 1,
    explanation: "Creator."
  },
  {
    id: "mhcet-1-q67",
    section: "Logical Reasoning",
    question: "Find odd one out:",
    options: ["January", "March", "April", "May"],
    correct: 2,
    explanation: "April has 30 days, others have 31."
  },
  {
    id: "mhcet-1-q68",
    section: "Logical Reasoning",
    question: "Statement: All students like music. Ravi is a student. Conclusion: Ravi likes music.",
    options: ["Follows", "Doesn't follow", "Maybe", "Data inadequate"],
    correct: 0,
    explanation: "Direct deduction."
  },
  {
    id: "mhcet-1-q69",
    section: "Logical Reasoning",
    question: "Coding: If '123' is 'ABC', what is '321'?",
    options: ["CBA", "BCA", "CAB", "AAA"],
    correct: 0,
    explanation: "Substitution."
  },
  {
    id: "mhcet-1-q70",
    section: "Logical Reasoning",
    question: "Analogy: Pen : Ink :: Car : ?",
    options: ["Petrol", "Wheel", "Road", "Driver"],
    correct: 0,
    explanation: "Fuel/Requirement."
  },
  {
    id: "mhcet-1-q71",
    section: "Logical Reasoning",
    question: "If South becomes East, what does West become?",
    options: ["North", "South", "East", "West"],
    correct: 0,
    explanation: "90° Anti-clockwise rotation. West becomes North."
  },
  {
    id: "mhcet-1-q72",
    section: "Logical Reasoning",
    question: "Series: 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "30"],
    correct: 2,
    explanation: "Squares."
  },

  // SECTION 4: ENGLISH LANGUAGE (24 QUESTIONS)
  // RC PASSAGE 1 (5 Qs)
  {
    id: "mhcet-1-q73",
    section: "English Language",
    passage: `Education is the most powerful weapon which you can use to change the world. It is the key to unlocking the golden door of freedom. However, education is not just about earning degrees; it is about building character, fostering critical thinking, and developing empathy. In a rapidly changing technological landscape, the ability to 'unlearn' and 'relearn' is as important as the initial learning. True education should empower individuals to distinguish between right and wrong, and to contribute positively to society.`,
    question: "According to the passage, education is a weapon to:",
    options: ["Fight wars", "Change the world", "Earn money", "Build houses"],
    correct: 1,
    explanation: "Stated in the first sentence."
  },
  {
    id: "mhcet-1-q74",
    section: "English Language",
    passage: `Education...`,
    question: "Besides degrees, education is about building:",
    options: ["Buildings", "Character and empathy", "Wealth", "Fast cars"],
    correct: 1,
    explanation: "Mentioned as building character and fostering thinking."
  },
  {
    id: "mhcet-1-q75",
    section: "English Language",
    passage: `Education...`,
    question: "In the modern landscape, what is as important as learning?",
    options: ["Sleeping", "Unlearning and relearning", "Ignoring technology", "Reading old books"],
    correct: 1,
    explanation: "Explicitly mentioned in the text."
  },
  {
    id: "mhcet-1-q76",
    section: "English Language",
    passage: `Education...`,
    question: "The 'golden door of freedom' is unlocked by:",
    options: ["Money", "Education", "Politics", "Strength"],
    correct: 1,
    explanation: "Metaphor used in the second sentence."
  },
  {
    id: "mhcet-1-q77",
    section: "English Language",
    passage: `Education...`,
    question: "The word 'Empathy' means:",
    options: ["Hatred", "Understanding others' feelings", "Physical strength", "Memory"],
    correct: 1,
    explanation: "Definition of empathy."
  },

  // RC PASSAGE 2 (5 Qs)
  {
    id: "mhcet-1-q78",
    section: "English Language",
    passage: `The preservation of nature is not a luxury but a necessity for human survival. Forests act as the lungs of our planet, absorbing carbon dioxide and releasing oxygen. When we destroy forests for urban development, we disrupt the delicate balance of the ecosystem. This leads to climate change, loss of biodiversity, and increased natural disasters. Sustainable development is the only path forward, where we meet our current needs without compromising the ability of future generations to meet theirs.`,
    question: "Forests are called the 'lungs of our planet' because:",
    options: ["They are green", "They absorb CO2 and release Oxygen", "They are big", "They have animals"],
    correct: 1,
    explanation: "Directly from the passage."
  },
  {
    id: "mhcet-1-q79",
    section: "English Language",
    passage: `The preservation...`,
    question: "Destroying forests for urban use leads to:",
    options: ["More rain", "Disruption of ecosystem balance", "Cheaper houses", "Better health"],
    correct: 1,
    explanation: "Stated as disrupting the balance."
  },
  {
    id: "mhcet-1-q80",
    section: "English Language",
    passage: `The preservation...`,
    question: "What is 'Sustainable Development'?",
    options: [
      "Rapid industrialization",
      "Meeting current needs without harming future ones",
      "Only using solar power",
      "Building taller skyscrapers"
    ],
    correct: 1,
    explanation: "Standard definition provided in the text."
  },
  {
    id: "mhcet-1-q81",
    section: "English Language",
    passage: `The preservation...`,
    question: "The passage warns against:",
    options: ["Urban development", "Loss of biodiversity", "Climate change", "All of the above"],
    correct: 3,
    explanation: "All are mentioned as consequences of destroying nature."
  },
  {
    id: "mhcet-1-q82",
    section: "English Language",
    passage: `The preservation...`,
    question: "The word 'luxury' in the passage means:",
    options: ["Something essential", "Something non-essential but desirable", "Something dangerous", "Something free"],
    correct: 1,
    explanation: "Standard meaning."
  },

  // GRAMMAR & VOCAB (14 Qs)
  {
    id: "mhcet-1-q83",
    section: "English Language",
    question: "Find the synonym of 'ABANDON':",
    options: ["Keep", "Forsake", "Adopt", "Protect"],
    correct: 1,
    explanation: "Abandon means to leave/forsake."
  },
  {
    id: "mhcet-1-q84",
    section: "English Language",
    question: "Find the antonym of 'ARTIFICIAL':",
    options: ["Fake", "Natural", "Man-made", "False"],
    correct: 1,
    explanation: "Natural is the opposite."
  },
  {
    id: "mhcet-1-q85",
    section: "English Language",
    question: "Identify the error: 'He (A) is (B) more taller (C) than me (D).'",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "Double comparative ('more taller') is wrong; should be 'taller'."
  },
  {
    id: "mhcet-1-q86",
    section: "English Language",
    question: "Choose the correct spelling:",
    options: ["Comittee", "Committee", "Comity", "Committe"],
    correct: 1,
    explanation: "Committee has double m, double t, double e."
  },
  {
    id: "mhcet-1-q87",
    section: "English Language",
    question: "Passive Voice: 'She sings a song.'",
    options: ["A song is sung by her.", "A song was sung by her.", "A song sings her.", "Song is being sung."],
    correct: 0,
    explanation: "Simple present passive."
  },
  {
    id: "mhcet-1-q88",
    section: "English Language",
    question: "Meaning of idiom 'Break the ice'?",
    options: ["To cool down", "To start a conversation", "To break a glass", "To be angry"],
    correct: 1,
    explanation: "Means to overcome initial hesitation in a social setting."
  },
  {
    id: "mhcet-1-q89",
    section: "English Language",
    question: "Fill in the blank: 'Neither he nor I _____ going.'",
    options: ["is", "am", "are", "were"],
    correct: 1,
    explanation: "Verb agrees with the closer subject ('I')."
  },
  {
    id: "mhcet-1-q90",
    section: "English Language",
    question: "Synonym of 'PRECARIOUS':",
    options: ["Safe", "Uncertain/Dangerous", "Valuable", "Beautiful"],
    correct: 1,
    explanation: "Precarious means unstable/unsafe."
  },
  {
    id: "mhcet-1-q91",
    section: "English Language",
    question: "Antonym of 'VIGILANT':",
    options: ["Watchful", "Careless", "Brave", "Smart"],
    correct: 1,
    explanation: "Careless/Negligent."
  },
  {
    id: "mhcet-1-q92",
    section: "English Language",
    question: "Fill in the blank: 'He has been ill _____ Monday.'",
    options: ["for", "since", "from", "at"],
    correct: 1,
    explanation: "Since is used for a point in time."
  },
  {
    id: "mhcet-1-q93",
    section: "English Language",
    question: "What is 'A person who hates mankind' called?",
    options: ["Philanthropist", "Misanthrope", "Misogynist", "Optimist"],
    correct: 1,
    explanation: "Misanthrope."
  },
  {
    id: "mhcet-1-q94",
    section: "English Language",
    question: "Correct the sentence: 'I prefer coffee than tea.'",
    options: ["I prefer coffee to tea.", "I prefer coffee more than tea.", "I prefer coffee over tea.", "No correction needed."],
    correct: 0,
    explanation: "Prefer takes 'to'."
  },
  {
    id: "mhcet-1-q95",
    section: "English Language",
    question: "Synonym of 'ZEAL':",
    options: ["Hatred", "Enthusiasm", "Laziness", "Fear"],
    correct: 1,
    explanation: "Zeal means passion/enthusiasm."
  },
  {
    id: "mhcet-1-q96",
    section: "English Language",
    question: "One word for 'A place where birds are kept':",
    options: ["Apiary", "Aviary", "Aquarium", "Zoo"],
    correct: 1,
    explanation: "Aviary (Avis = Bird)."
  },

  // SECTION 5: BASIC MATHEMATICS (24 QUESTIONS)
  {
    id: "mhcet-1-q97",
    section: "Basic Mathematics",
    question: "What is 20% of 150?",
    options: ["20", "25", "30", "35"],
    correct: 2,
    explanation: "0.2 * 150 = 30."
  },
  {
    id: "mhcet-1-q98",
    section: "Basic Mathematics",
    question: "Solve: 2x + 10 = 30. What is x?",
    options: ["5", "10", "15", "20"],
    correct: 1,
    explanation: "2x = 20, x = 10."
  },
  {
    id: "mhcet-1-q99",
    section: "Basic Mathematics",
    question: "Profit calculation: Buy for 100, sell for 125. Profit %?",
    options: ["20%", "25%", "30%", "15%"],
    correct: 1,
    explanation: "25/100 * 100 = 25%."
  },
  {
    id: "mhcet-1-q100",
    section: "Basic Mathematics",
    question: "Ratio: If A:B is 2:3 and B:C is 4:5, what is A:C?",
    options: ["8:15", "2:5", "6:8", "1:2"],
    correct: 0,
    explanation: "Multiply: (2/3) * (4/5) = 8/15."
  },
  {
    id: "mhcet-1-q101",
    section: "Basic Mathematics",
    question: "Speed: A car covers 120 km in 2 hours. Speed in m/s?",
    options: ["16.66", "30", "60", "20"],
    correct: 0,
    explanation: "60 km/h = 60 * 5/18 = 16.66 m/s."
  },
  {
    id: "mhcet-1-q102",
    section: "Basic Mathematics",
    question: "Interest: SI on ₹1,000 at 10% for 2 years?",
    options: ["100", "200", "300", "400"],
    correct: 1,
    explanation: "(1000 * 10 * 2)/100 = 200."
  },
  {
    id: "mhcet-1-q103",
    section: "Basic Mathematics",
    question: "Number System: Sum of first 5 natural numbers?",
    options: ["10", "15", "20", "25"],
    correct: 1,
    explanation: "1+2+3+4+5 = 15."
  },
  {
    id: "mhcet-1-q104",
    section: "Basic Mathematics",
    question: "Algebra: (a+b)^2 - (a-b)^2 = ?",
    options: ["2a^2 + 2b^2", "4ab", "0", "a^2 - b^2"],
    correct: 1,
    explanation: "Identity: 4ab."
  },
  {
    id: "mhcet-1-q105",
    section: "Basic Mathematics",
    question: "Geometry: Area of circle with radius 7? (pi=22/7)",
    options: ["44", "154", "308", "77"],
    correct: 1,
    explanation: "pi * 7 * 7 = 154."
  },
  {
    id: "mhcet-1-q106",
    section: "Basic Mathematics",
    question: "Percentage: If x is 25% of y, what % of x is y?",
    options: ["400%", "200%", "75%", "100%"],
    correct: 0,
    explanation: "y/x = 1/0.25 = 4. 4 * 100 = 400%."
  },
  {
    id: "mhcet-1-q107",
    section: "Basic Mathematics",
    question: "Ratio: Divide ₹1000 in 3:2 ratio.",
    options: ["500, 500", "600, 400", "700, 300", "800, 200"],
    correct: 1,
    explanation: "3/5 * 1000 = 600, 2/5 * 1000 = 400."
  },
  {
    id: "mhcet-1-q108",
    section: "Basic Mathematics",
    question: "Time & Work: A does work in 10 days, B in 15. Together?",
    options: ["5 days", "6 days", "8 days", "12 days"],
    correct: 1,
    explanation: "1/10 + 1/15 = 5/30 = 1/6. So 6 days."
  },
  {
    id: "mhcet-1-q109",
    section: "Basic Mathematics",
    question: "Average: Average of first 3 multiples of 10?",
    options: ["10", "20", "30", "15"],
    correct: 1,
    explanation: "(10+20+30)/3 = 20."
  },
  {
    id: "mhcet-1-q110",
    section: "Basic Mathematics",
    question: "Algebra: If x + 1/x = 5, then x^2 + 1/x^2 = ?",
    options: ["25", "23", "27", "20"],
    correct: 1,
    explanation: "5^2 - 2 = 23."
  },
  {
    id: "mhcet-1-q111",
    section: "Basic Mathematics",
    question: "Profit/Loss: A man loses 10% by selling for ₹90. CP?",
    options: ["80", "100", "110", "99"],
    correct: 1,
    explanation: "90 is 90% of CP. CP = 100."
  },
  {
    id: "mhcet-1-q112",
    section: "Basic Mathematics",
    question: "HCF and LCM: Product of two numbers is 200. LCM is 50. HCF?",
    options: ["2", "4", "5", "10"],
    correct: 1,
    explanation: "Product = LCM * HCF. 200/50 = 4."
  },
  {
    id: "mhcet-1-q113",
    section: "Basic Mathematics",
    question: "A train 100m long passes a pole in 5 sec. Speed in km/h?",
    options: ["20", "72", "36", "50"],
    correct: 1,
    explanation: "Speed = 100/5 = 20 m/s = 20 * 18/5 = 72 km/h."
  },
  {
    id: "mhcet-1-q114",
    section: "Basic Mathematics",
    question: "Simplification: 1/2 of 1/4 of 800.",
    options: ["100", "200", "400", "50"],
    correct: 0,
    explanation: "800/4/2 = 100."
  },
  {
    id: "mhcet-1-q115",
    section: "Basic Mathematics",
    question: "Compound Interest: CI on ₹1000 for 2 yrs at 10%?",
    options: ["200", "210", "220", "100"],
    correct: 1,
    explanation: "1000 * 1.1 * 1.1 = 1210. CI = 210."
  },
  {
    id: "mhcet-1-q116",
    section: "Basic Mathematics",
    question: "Geometry: Volume of cube with side 4 cm?",
    options: ["16", "32", "64", "128"],
    correct: 2,
    explanation: "4^3 = 64."
  },
  {
    id: "mhcet-1-q117",
    section: "Basic Mathematics",
    question: "Age: Father is 3 times older than son. Sum is 40. Son's age?",
    options: ["10", "15", "5", "12"],
    correct: 0,
    explanation: "3x + x = 40 -> 4x = 40 -> x = 10."
  },
  {
    id: "mhcet-1-q118",
    section: "Basic Mathematics",
    question: "Probability: Picking a red card from a deck?",
    options: ["1/4", "1/2", "1/13", "1/52"],
    correct: 1,
    explanation: "26/52 = 1/2."
  },
  {
    id: "mhcet-1-q119",
    section: "Basic Mathematics",
    question: "Mensuration: Perimeter of square with area 100?",
    options: ["10", "20", "40", "80"],
    correct: 2,
    explanation: "Side = 10. Perimeter = 4 * 10 = 40."
  },
  {
    id: "mhcet-1-q120",
    section: "Basic Mathematics",
    question: "Simplification: Square root of 0.09?",
    options: ["0.3", "0.03", "3", "0.003"],
    correct: 0,
    explanation: "0.3 * 0.3 = 0.09."
  }
];
