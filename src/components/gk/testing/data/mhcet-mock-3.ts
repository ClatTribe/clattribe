import { MockQuestion } from "../constants";

export const MHCET_MOCK_3: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE (24 QUESTIONS)
  // PASSAGE 1: FAMILY LAW (HINDU MARRIAGE ACT)
  {
    id: "mhcet-3-q1",
    section: "Legal Aptitude",
    passage: `Principle: Under the Hindu Marriage Act, 1955, a marriage may be solemnized between any two Hindus if the following conditions are fulfilled: (1) Neither party has a spouse living at the time of the marriage (Monogamy). (2) At the time of the marriage, neither party is incapable of giving a valid consent due to unsoundness of mind. (3) The bridegroom has completed the age of 21 years and the bride the age of 18 years. (4) The parties are not within the degrees of prohibited relationship, unless the custom or usage governing each of them permits of a marriage between the two.`,
    question: "Aman, aged 22, and Ms. X, aged 17, get married in a temple. Is this marriage valid under the Hindu Marriage Act?",
    options: [
      "Yes, both are adults in some states.",
      "No, the bride must have completed 18 years of age.",
      "Yes, if their parents agree.",
      "No, but only if the groom is also under 21."
    ],
    correct: 1,
    explanation: "Age of bride must be 18+."
  },
  {
    id: "mhcet-3-q2",
    section: "Legal Aptitude",
    passage: `Principle: Hindu Marriage...`,
    question: "Aman's first wife is alive and they are not divorced. Aman marries Ms. Y. What is the status of the second marriage?",
    options: [
      "It is valid but he will be fined.",
      "It is void (invalid from the start) and Aman can be prosecuted for bigamy.",
      "It is valid if the first wife gives written consent.",
      "It is voidable at the option of the second wife."
    ],
    correct: 1,
    explanation: "Monogamy is a mandatory condition."
  },
  {
    id: "mhcet-3-q3",
    section: "Legal Aptitude",
    passage: `Principle: Hindu Marriage...`,
    question: "Aman and Ms. X are first cousins. Their community custom strictly forbids such marriages. They get married. Is it valid?",
    options: [
      "Yes, they are both Hindus.",
      "No, they are within 'prohibited degrees of relationship' and no custom permits it.",
      "Yes, because they love each other.",
      "No, but only if they are from the same village."
    ],
    correct: 1,
    explanation: "Prohibited relationships make the marriage void unless a custom allows it."
  },
  {
    id: "mhcet-3-q4",
    section: "Legal Aptitude",
    passage: `Principle: Hindu Marriage...`,
    question: "At the time of marriage, Aman was suffering from a mental disorder that made him unable to understand the nature of the marriage ceremony. What is the status of this marriage?",
    options: [
      "It is perfectly valid.",
      "It is voidable at the option of the other party (the bride).",
      "It is automatically void.",
      "It is illegal."
    ],
    correct: 1,
    explanation: "Lack of valid consent due to unsoundness of mind makes a marriage voidable."
  },
  {
    id: "mhcet-3-q5",
    section: "Legal Aptitude",
    passage: `Principle: Hindu Marriage...`,
    question: "Does the Hindu Marriage Act apply to Sikhs, Jains, and Buddhists?",
    options: [
      "No, only to Hindus.",
      "Yes, the definition of 'Hindu' under this Act includes Sikhs, Jains, and Buddhists.",
      "Only if they register it specially.",
      "No, they have their own separate acts."
    ],
    correct: 1,
    explanation: "The Act has an expansive definition of 'Hindu'."
  },
  {
    id: "mhcet-3-q6",
    section: "Legal Aptitude",
    passage: `Principle: Hindu Marriage...`,
    question: "Aman marries Ms. X. After two years, they realize they are distant relatives within prohibited degrees, but their local custom allows such marriages. Is the marriage valid?",
    options: [
      "No, the Act is superior to custom.",
      "Yes, the Act expressly recognizes valid 'custom or usage' as an exception to the prohibited relationship rule.",
      "No, customs are not valid in modern law.",
      "Yes, but only if they pay a tax."
    ],
    correct: 1,
    explanation: "Custom is a valid defense if proven."
  },

  // PASSAGE 2: LAW OF TORTS (DEFAMATION)
  {
    id: "mhcet-3-q7",
    section: "Legal Aptitude",
    passage: `Principle: Defamation is the publication of a statement which tends to lower a person in the estimation of right-thinking members of society. For a successful claim: (1) The statement must be defamatory. (2) It must refer to the plaintiff. (3) It must be published (communicated to a third party). (4) Defenses: Truth, Fair Comment on public interest, and Privilege (Absolute or Qualified).`,
    question: "Aman writes a private letter to Mr. X calling him a 'thief' and a 'liar'. No one else reads the letter. Has Aman committed defamation?",
    options: [
      "Yes, the words are defamatory.",
      "No, because the statement was not 'published' to a third party.",
      "Yes, because Mr. X's feelings were hurt.",
      "No, but only if Aman can prove Mr. X is a thief."
    ],
    correct: 1,
    explanation: "Communication to the person defamed only is not publication."
  },
  {
    id: "mhcet-3-q8",
    section: "Legal Aptitude",
    passage: `Principle: Defamation...`,
    question: "A newspaper publishes a report that 'A prominent lawyer in Mumbai is taking bribes'. There are 50,000 lawyers in Mumbai. Can Aman, a lawyer in Mumbai, sue for defamation?",
    options: [
      "Yes, he is a lawyer in Mumbai.",
      "No, the statement does not 'refer to the plaintiff' specifically enough for a member of a large class to sue.",
      "Yes, if he can prove he is prominent.",
      "No, because newspapers have freedom of speech."
    ],
    correct: 1,
    explanation: "Defamation of a large group doesn't allow individual members to sue unless it points to them specifically."
  },
  {
    id: "mhcet-3-q9",
    section: "Legal Aptitude",
    passage: `Principle: Defamation...`,
    question: "A film critic writes that a new movie is 'the worst piece of trash ever made and a waste of public money'. The director sues. What is the critic's best defense?",
    options: [
      "Truth",
      "Fair Comment on a matter of public interest.",
      "Absolute Privilege.",
      "He didn't mean to hurt the director."
    ],
    correct: 1,
    explanation: "Opinions on public works (movies, books) are protected as Fair Comment."
  },
  {
    id: "mhcet-3-q10",
    section: "Legal Aptitude",
    passage: `Principle: Defamation...`,
    question: "Aman tells a group of friends that Mr. X is a bank defaulter. It turns out Mr. X actually defaulted on a loan last year. Is Aman liable?",
    options: [
      "Yes, he shamed Mr. X.",
      "No, 'Truth' (Justification) is a complete defense to a civil claim for defamation.",
      "Yes, because it's a private matter.",
      "No, but only if Mr. X is still in debt."
    ],
    correct: 1,
    explanation: "If the statement is true, it is not defamation in civil law."
  },
  {
    id: "mhcet-3-q11",
    section: "Legal Aptitude",
    passage: `Principle: Defamation...`,
    question: "A Member of Parliament (MP) makes a defamatory speech against a businessman inside the Parliament. Can the businessman sue the MP in court?",
    options: [
      "Yes, no one is above the law.",
      "No, speeches made in Parliament are protected by 'Absolute Privilege'.",
      "Yes, but only if the Speaker allows it.",
      "No, but the MP must apologize."
    ],
    correct: 1,
    explanation: "Parliamentary proceedings have absolute immunity from defamation suits."
  },
  {
    id: "mhcet-3-q12",
    section: "Legal Aptitude",
    passage: `Principle: Defamation...`,
    question: "What is the difference between 'Libel' and 'Slander'?",
    options: [
      "Libel is written/permanent; Slander is spoken/temporary.",
      "Libel is for rich people; Slander is for everyone.",
      "They are the same in India.",
      "Libel is a crime; Slander is a tort."
    ],
    correct: 0,
    explanation: "Basic legal distinction."
  },

  // PASSAGE 3: LAW OF TORTS (VICARIOUS LIABILITY)
  {
    id: "mhcet-3-q13",
    section: "Legal Aptitude",
    passage: `Principle: Vicarious Liability - An employer is liable for the wrongful acts of his employee if the act is committed 'in the course of employment'. An act is in the course of employment if it is (a) authorized by the employer, or (b) an unauthorized way of doing an authorized act. The employer is NOT liable if the employee is on a 'frolic of his own' (doing something completely unrelated to work for personal reasons).`,
    question: "A bus driver, while driving on his assigned route, stops to help a friend move furniture and crashes the bus. Is the bus company liable?",
    options: [
      "Yes, he was their driver.",
      "No, the driver was on a 'frolic of his own' and the act was not in the course of employment.",
      "Yes, because the bus belongs to the company.",
      "No, but they must pay for the bus repairs."
    ],
    correct: 1,
    explanation: "Deviating from work for purely personal reasons breaks the chain of liability."
  },
  {
    id: "mhcet-3-q14",
    section: "Legal Aptitude",
    passage: `Principle: Vicarious Liability...`,
    question: "A bank clerk, whose job is to collect deposits, takes money from a customer but instead of depositing it, he keeps it for himself. Is the bank liable?",
    options: [
      "No, the bank didn't tell him to steal.",
      "Yes, this is an 'unauthorized way of doing an authorized act' (collecting money) within the course of employment.",
      "No, because the customer should have checked the receipt.",
      "Yes, but only if the clerk is caught."
    ],
    correct: 1,
    explanation: "Fraud by an employee during authorized duties makes the employer liable."
  },
  {
    id: "mhcet-3-q15",
    section: "Legal Aptitude",
    passage: `Principle: Vicarious Liability...`,
    question: "Aman hires a contractor to build a house. The contractor's worker accidentally drops a brick on a neighbor. Is Aman (the owner) liable?",
    options: [
      "Yes, it's his house.",
      "No, an employer is generally not vicariously liable for the torts of an 'Independent Contractor' (as opposed to an employee).",
      "Yes, because he hired the contractor.",
      "No, but the worker must be fired."
    ],
    correct: 1,
    explanation: "Difference between 'Contract of Service' (Employee) and 'Contract for Service' (Independent Contractor)."
  },
  {
    id: "mhcet-3-q16",
    section: "Legal Aptitude",
    passage: `Principle: Vicarious Liability...`,
    question: "A driver is told by his boss 'Never give a lift to strangers'. The driver ignores this, gives a lift to Aman, and crashes the car. Is the boss liable for Aman's injuries?",
    options: [
      "No, he explicitly forbade giving lifts.",
      "Yes, the prohibition was only a 'mode' of performing the employment; the act (driving) was still in the course of employment.",
      "No, Aman was a trespasser in the car.",
      "Yes, but only if the boss was in the car."
    ],
    correct: 1,
    explanation: "Limiting instructions often don't shield the employer if the core task (driving) was authorized."
  },
  {
    id: "mhcet-3-q17",
    section: "Legal Aptitude",
    passage: `Principle: Vicarious Liability...`,
    question: "The legal maxim 'Qui facit per alium facit per se' means:",
    options: [
      "He who acts through another, acts himself.",
      "The master must be rich.",
      "Where there is a right, there is a remedy.",
      "Let the buyer beware."
    ],
    correct: 0,
    explanation: "Foundation of vicarious liability."
  },
  {
    id: "mhcet-3-q18",
    section: "Legal Aptitude",
    passage: `Principle: Vicarious Liability...`,
    question: "A servant, after finishing his work for the day, hits someone with his own car while going home. Is the master liable?",
    options: [
      "Yes, he is still an employee.",
      "No, the employment ends when the workday is over and he is no longer in the 'course of employment'.",
      "Yes, because the master pays his salary.",
      "No, but only if the master didn't know about the car."
    ],
    correct: 1,
    explanation: "Commuting to/from work is generally not in the course of employment."
  },

  // PASSAGE 4: MISCELLANEOUS (LEGAL TERMS)
  {
    id: "mhcet-3-q19",
    section: "Legal Aptitude",
    passage: `Principle: (1) 'Amicus Curiae' - A friend of the court; a person appointed to assist the court with legal expertise. (2) 'Ad Hoc' - For a particular purpose or task. (3) 'Bona Fide' - In good faith; without intention to deceive. (4) 'De Facto' - In fact or in practice, regardless of legal status. (5) 'De Jure' - By right or according to law.`,
    question: "The Government appoints a committee 'Ad Hoc' to investigate a bridge collapse. What does this mean?",
    options: [
      "The committee is permanent.",
      "The committee is formed for this specific purpose only.",
      "The committee has no power.",
      "The committee is made of bridge experts."
    ],
    correct: 1,
    explanation: "Definition of Ad Hoc."
  },
  {
    id: "mhcet-3-q20",
    section: "Legal Aptitude",
    passage: `Principle: Terms...`,
    question: "Aman buys a stolen phone 'Bona Fide' from a shop, believing the shop owner had the right to sell it. What does this imply about Aman?",
    options: [
      "He is a criminal.",
      "He acted in good faith and without any dishonest intention.",
      "He is a De Jure owner.",
      "He is an Amicus Curiae."
    ],
    correct: 1,
    explanation: "Bona Fide means good faith."
  },
  {
    id: "mhcet-3-q21",
    section: "Legal Aptitude",
    passage: `Principle: Terms...`,
    question: "In a country, a rebel group controls the capital and runs the administration, but the UN still recognizes the old exiled government. The rebel group is the _____ government.",
    options: ["De Jure", "De Facto", "Amicus Curiae", "Bona Fide"],
    correct: 1,
    explanation: "De Facto means 'in fact' (holding actual power)."
  },
  {
    id: "mhcet-3-q22",
    section: "Legal Aptitude",
    passage: `Principle: Terms...`,
    question: "The Supreme Court asks a senior lawyer to help them understand a complex technical law case. The lawyer is acting as:",
    options: ["A prosecutor", "A witness", "An Amicus Curiae", "A judge"],
    correct: 2,
    explanation: "Amicus Curiae assists the court."
  },
  {
    id: "mhcet-3-q23",
    section: "Legal Aptitude",
    passage: `Principle: Terms...`,
    question: "If a person is the 'De Jure' owner of a land, it means:",
    options: [
      "He is living on the land.",
      "He is the legal owner according to the law/papers.",
      "He stole the land.",
      "He is a friend of the owner."
    ],
    correct: 1,
    explanation: "De Jure means 'by law'."
  },
  {
    id: "mhcet-3-q24",
    section: "Legal Aptitude",
    passage: `Principle: Terms...`,
    question: "A 'Locus Standi' means:",
    options: [
      "A place to stand in court.",
      "The right of a party to bring an action or to appear in a court.",
      "A secret location.",
      "The law of the land."
    ],
    correct: 1,
    explanation: "Right to be heard."
  },

  // SECTION 2: GK & CURRENT AFFAIRS (24 QUESTIONS)
  // MAHARASHTRA SPECIFIC (4-5 Qs)
  {
    id: "mhcet-3-q25",
    section: "GK & Current Affairs",
    question: "Which mountain range is also known as the 'Sahyadri' in Maharashtra?",
    options: ["Satpura", "Western Ghats", "Vindhya", "Aravalli"],
    correct: 1,
    explanation: "The Western Ghats are called Sahyadri in MH."
  },
  {
    id: "mhcet-3-q26",
    section: "GK & Current Affairs",
    question: "Which district of Maharashtra is the largest in terms of area?",
    options: ["Ahmednagar", "Pune", "Nashik", "Solapur"],
    correct: 0,
    explanation: "Ahmednagar."
  },
  {
    id: "mhcet-3-q27",
    section: "GK & Current Affairs",
    question: "The 'Koyna Dam' is built on which river?",
    options: ["Godavari", "Krishna", "Koyna", "Tapi"],
    correct: 2,
    explanation: "Koyna river (tributary of Krishna)."
  },
  {
    id: "mhcet-3-q28",
    section: "GK & Current Affairs",
    question: "Which saint from Maharashtra wrote 'Bhavartha Deepika' (popularly known as Dnyaneshwari)?",
    options: ["Saint Tukaram", "Saint Dnyaneshwar", "Saint Eknath", "Saint Namdev"],
    correct: 1,
    explanation: "Saint Dnyaneshwar."
  },
  {
    id: "mhcet-3-q29",
    section: "GK & Current Affairs",
    question: "Which city is known as the 'Orange City' of India?",
    options: ["Pune", "Nagpur", "Amravati", "Wardha"],
    correct: 1,
    explanation: "Nagpur."
  },

  // CURRENT AFFAIRS & STATIC
  {
    id: "mhcet-3-q30",
    section: "GK & Current Affairs",
    question: "Who won the 'Dada Saheb Phalke Award' for 2023?",
    options: ["Waheeda Rehman", "Asha Parekh", "Rajinikanth", "Amitabh Bachchan"],
    correct: 0,
    explanation: "Waheeda Rehman."
  },
  {
    id: "mhcet-3-q31",
    section: "GK & Current Affairs",
    question: "The 'Women's Reservation Bill' (2023) provides how much reservation in Lok Sabha?",
    options: ["25%", "33%", "50%", "10%"],
    correct: 1,
    explanation: "33%."
  },
  {
    id: "mhcet-3-q32",
    section: "GK & Current Affairs",
    question: "Who is the current Secretary-General of the United Nations?",
    options: ["Ban Ki-moon", "Antonio Guterres", "Kofi Annan", "Tedros Adhanom"],
    correct: 1,
    explanation: "Antonio Guterres."
  },
  {
    id: "mhcet-3-q33",
    section: "GK & Current Affairs",
    question: "The 'Chandrayaan-3' landing spot on the moon is named:",
    options: ["Tiranga Point", "Shiv Shakti Point", "Jawahar Point", "Atal Point"],
    correct: 1,
    explanation: "Shiv Shakti Point."
  },
  {
    id: "mhcet-3-q34",
    section: "GK & Current Affairs",
    question: "Which is the highest civilian award in India?",
    options: ["Padma Vibhushan", "Bharat Ratna", "Param Vir Chakra", "Sahitya Akademi"],
    correct: 1,
    explanation: "Bharat Ratna."
  },
  {
    id: "mhcet-3-q35",
    section: "GK & Current Affairs",
    question: "The 'NITI Aayog' was formed in which year?",
    options: ["2014", "2015", "2016", "2017"],
    correct: 1,
    explanation: "January 1, 2015."
  },
  {
    id: "mhcet-3-q36",
    section: "GK & Current Affairs",
    question: "Which planet is known as 'Earth's Twin'?",
    options: ["Mars", "Venus", "Jupiter", "Neptune"],
    correct: 1,
    explanation: "Venus."
  },
  {
    id: "mhcet-3-q37",
    section: "GK & Current Affairs",
    question: "The 'Kaziranga National Park' is famous for:",
    options: ["Tigers", "One-horned Rhinoceros", "Lions", "Elephants"],
    correct: 1,
    explanation: "Assam's famous park."
  },
  {
    id: "mhcet-3-q38",
    section: "GK & Current Affairs",
    question: "Who was the first Governor-General of independent India?",
    options: ["C. Rajagopalachari", "Lord Mountbatten", "Jawaharlal Nehru", "Sardar Patel"],
    correct: 1,
    explanation: "Lord Mountbatten (C. Rajagopalachari was the first *Indian* GG)."
  },
  {
    id: "mhcet-3-q39",
    section: "GK & Current Affairs",
    question: "Which organ secretes Insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Spleen"],
    correct: 1,
    explanation: "Pancreas."
  },
  {
    id: "mhcet-3-q40",
    section: "GK & Current Affairs",
    question: "The 'Hawa Mahal' is located in which city?",
    options: ["Udaipur", "Jaipur", "Jodhpur", "Bikaner"],
    correct: 1,
    explanation: "Jaipur."
  },
  {
    id: "mhcet-3-q41",
    section: "GK & Current Affairs",
    question: "In which year did India win its first Cricket World Cup (60 overs)?",
    options: ["1975", "1979", "1983", "2011"],
    correct: 2,
    explanation: "1983 under Kapil Dev."
  },
  {
    id: "mhcet-3-q42",
    section: "GK & Current Affairs",
    question: "Who is the author of 'Wings of Fire'?",
    options: ["A.P.J. Abdul Kalam", "Nelson Mandela", "Barack Obama", "Mahatma Gandhi"],
    correct: 0,
    explanation: "Dr. Kalam's autobiography."
  },
  {
    id: "mhcet-3-q43",
    section: "GK & Current Affairs",
    question: "Which of the following is NOT a member of SAARC?",
    options: ["India", "Pakistan", "China", "Bhutan"],
    correct: 2,
    explanation: "China is not a member."
  },
  {
    id: "mhcet-3-q44",
    section: "GK & Current Affairs",
    question: "The 'Dandi March' (1930) was against which tax?",
    options: ["Income Tax", "Salt Tax", "Land Tax", "Sugar Tax"],
    correct: 1,
    explanation: "Salt Satyagraha."
  },
  {
    id: "mhcet-3-q45",
    section: "GK & Current Affairs",
    question: "Which is the smallest state of India by area?",
    options: ["Sikkim", "Goa", "Tripura", "Manipur"],
    correct: 1,
    explanation: "Goa."
  },
  {
    id: "mhcet-3-q46",
    section: "GK & Current Affairs",
    question: "The 'Fundamental Rights' in India are borrowed from which Constitution?",
    options: ["UK", "USA", "Canada", "Ireland"],
    correct: 1,
    explanation: "USA (Bill of Rights)."
  },
  {
    id: "mhcet-3-q47",
    section: "GK & Current Affairs",
    question: "What is the study of birds called?",
    options: ["Entomology", "Ornithology", "Ecology", "Anthropology"],
    correct: 1,
    explanation: "Ornithology."
  },
  {
    id: "mhcet-3-q48",
    section: "GK & Current Affairs",
    question: "Who was the first Indian woman to go to space?",
    options: ["Sunita Williams", "Kalpana Chawla", "Anandibai Joshi", "Kiran Bedi"],
    correct: 1,
    explanation: "Kalpana Chawla."
  },

  // SECTION 3: LOGICAL & ANALYTICAL REASONING (24 QUESTIONS)
  {
    id: "mhcet-3-q49",
    section: "Logical Reasoning",
    question: "Syllogism: All stars are suns. Some suns are planets. Conclusion: Some stars are planets.",
    options: ["Follows", "Doesn't follow", "Maybe", "None"],
    correct: 1,
    explanation: "No direct link between stars and planets."
  },
  {
    id: "mhcet-3-q50",
    section: "Logical Reasoning",
    question: "Seating: 6 people sit in two rows (A,B,C in row 1; D,E,F in row 2). A is opposite D. B is next to A. F is at an end. Where is E?",
    options: ["Opposite B", "Opposite C", "At an end", "In the middle"],
    correct: 3,
    explanation: "Row 2: D, E, F. D is at one end (opposite A), F at other end. E is middle."
  },
  {
    id: "mhcet-3-q51",
    section: "Logical Reasoning",
    question: "Blood Relation: A's daughter is B. B is married to C. C's son is D. How is A related to D?",
    options: ["Father", "Grandfather/Grandmother", "Uncle", "Brother"],
    correct: 1,
    explanation: "A is parent of D's mother."
  },
  {
    id: "mhcet-3-q52",
    section: "Logical Reasoning",
    question: "Analogy: Earth : Sun :: Moon : ?",
    options: ["Star", "Earth", "Planet", "Orbit"],
    correct: 1,
    explanation: "Revolution relation."
  },
  {
    id: "mhcet-3-q53",
    section: "Logical Reasoning",
    question: "Series: 3, 6, 12, 24, ?",
    options: ["30", "36", "48", "60"],
    correct: 2,
    explanation: "Multiplication by 2."
  },
  {
    id: "mhcet-3-q54",
    section: "Logical Reasoning",
    question: "Statement: 'If you work hard, you will succeed.' Conclusion: I. Success requires hard work. II. All successful people worked hard.",
    options: ["Only I", "Only II", "Both", "None"],
    correct: 0,
    explanation: "Only I is a direct conclusion. II is a generalization."
  },
  {
    id: "mhcet-3-q55",
    section: "Logical Reasoning",
    question: "Direction: Aman faces East. He turns 45° clockwise. Which direction?",
    options: ["South-East", "North-East", "South", "East"],
    correct: 0,
    explanation: "E -> SE."
  },
  {
    id: "mhcet-3-q56",
    section: "Logical Reasoning",
    question: "Coding: If 'BAT' is '2120', 'BALL' is?",
    options: ["211212", "21211", "2112", "2211"],
    correct: 0,
    explanation: "Alphabet positions: B=2, A=1, L=12, L=12."
  },
  {
    id: "mhcet-3-q57",
    section: "Logical Reasoning",
    question: "Find odd one out:",
    options: ["Triangle", "Square", "Pentagon", "Circle"],
    correct: 3,
    explanation: "Circle has no straight edges."
  },
  {
    id: "mhcet-3-q58",
    section: "Logical Reasoning",
    question: "Analogy: 2 : 10 :: 3 : ?",
    options: ["15", "20", "30", "12"],
    correct: 0,
    explanation: "Multiplied by 5."
  },
  {
    id: "mhcet-3-q59",
    section: "Logical Reasoning",
    question: "Series: Z, X, V, T, ?",
    options: ["S", "R", "Q", "P"],
    correct: 1,
    explanation: "Backwards jump of 2."
  },
  {
    id: "mhcet-3-q60",
    section: "Logical Reasoning",
    question: "Statement: Most Indians speak Hindi. Aman is Indian. Conclusion: Aman speaks Hindi.",
    options: ["True", "False", "Can't say", "Definitely"],
    correct: 2,
    explanation: "Most is not all."
  },
  {
    id: "mhcet-3-q61",
    section: "Logical Reasoning",
    question: "Blood Relation: My sister's husband's mother is my:",
    options: ["Mother", "Aunt", "Mother-in-law of sister", "Grandmother"],
    correct: 2,
    explanation: "Self-explanatory."
  },
  {
    id: "mhcet-3-q62",
    section: "Logical Reasoning",
    question: "Clock: What is the angle at 6:00?",
    options: ["90", "180", "360", "270"],
    correct: 1,
    explanation: "Straight line."
  },
  {
    id: "mhcet-3-q63",
    section: "Logical Reasoning",
    question: "Analogy: Bird : Wing :: Fish : ?",
    options: ["Scale", "Fin", "Water", "Gill"],
    correct: 1,
    explanation: "Locomotion part."
  },
  {
    id: "mhcet-3-q64",
    section: "Logical Reasoning",
    question: "If 'CAT' is 'XZG', what is 'DOG'?",
    options: ["WLT", "WLS", "VLT", "WMT"],
    correct: 0,
    explanation: "Opposite letters: C(3) -> X(24), A(1) -> Z(26), T(20) -> G(7). D(4) -> W(23), O(15) -> L(12), G(7) -> T(20)."
  },
  {
    id: "mhcet-3-q65",
    section: "Logical Reasoning",
    question: "Direction: North becomes West. What does East become?",
    options: ["North", "South", "East", "West"],
    correct: 0,
    explanation: "90° Anti-clockwise. East turns North."
  },
  {
    id: "mhcet-3-q66",
    section: "Logical Reasoning",
    question: "Series: 5, 11, 23, 47, ?",
    options: ["90", "95", "94", "96"],
    correct: 1,
    explanation: "n*2 + 1: 47*2+1 = 95."
  },
  {
    id: "mhcet-3-q67",
    section: "Logical Reasoning",
    question: "Find odd one out:",
    options: ["Gold", "Silver", "Copper", "Coal"],
    correct: 3,
    explanation: "Coal is non-metal."
  },
  {
    id: "mhcet-3-q68",
    section: "Logical Reasoning",
    question: "Analogy: 10 : 99 :: 5 : ?",
    options: ["24", "25", "26", "30"],
    correct: 0,
    explanation: "n^2 - 1."
  },
  {
    id: "mhcet-3-q69",
    section: "Logical Reasoning",
    question: "Coding: If '111' is 'A', '222' is 'B', what is '333'?",
    options: ["C", "D", "E", "F"],
    correct: 0,
    explanation: "Substitution."
  },
  {
    id: "mhcet-3-q70",
    section: "Logical Reasoning",
    question: "Statement: Should exams be banned? Arg 1: Yes, it causes stress. Arg 2: No, it measures progress.",
    options: ["Only 1", "Only 2", "Both", "Neither"],
    correct: 2,
    explanation: "Both are valid points."
  },
  {
    id: "mhcet-3-q71",
    section: "Logical Reasoning",
    question: "Analogy: Pen : Write :: Knife : ?",
    options: ["Sharp", "Cut", "Steel", "Kitchen"],
    correct: 1,
    explanation: "Function."
  },
  {
    id: "mhcet-3-q72",
    section: "Logical Reasoning",
    question: "Series: 1, 2, 6, 24, ?",
    options: ["100", "120", "150", "180"],
    correct: 1,
    explanation: "Factorials."
  },

  // SECTION 4: ENGLISH LANGUAGE (24 QUESTIONS)
  // RC PASSAGE 1 (5 Qs)
  {
    id: "mhcet-3-q73",
    section: "English Language",
    passage: `The Internet of Things (IoT) is a giant network of connected devices that collect and share data about the way they are used and about the environment around them. This includes everything from smart microwaves, which automatically cook your food for the right length of time, to self-driving cars, whose complex sensors detect objects in their path. IoT allows for more efficiency and better services. however, security remains a major challenge, as every connected device is a potential entry point for hackers.`,
    question: "What is IoT?",
    options: ["A cooking method", "A network of connected devices", "A type of car", "A security system"],
    correct: 1,
    explanation: "First sentence."
  },
  {
    id: "mhcet-3-q74",
    section: "English Language",
    passage: `The Internet...`,
    question: "One benefit of IoT mentioned is:",
    options: ["Hacking", "Efficiency", "Microwaves", "Complexity"],
    correct: 1,
    explanation: "Mentioned as allowing for more efficiency."
  },
  {
    id: "mhcet-3-q75",
    section: "English Language",
    passage: `The Internet...`,
    question: "What is a major challenge for IoT?",
    options: ["Cost", "Security", "Speed", "Color"],
    correct: 1,
    explanation: "Last sentence."
  },
  {
    id: "mhcet-3-q76",
    section: "English Language",
    passage: `The Internet...`,
    question: "Self-driving cars use _____ to detect objects.",
    options: ["Eyes", "Sensors", "Cameras", "Drivers"],
    correct: 1,
    explanation: "Explicitly mentioned."
  },
  {
    id: "mhcet-3-q77",
    section: "English Language",
    passage: `The Internet...`,
    question: "The word 'Potential' means:",
    options: ["Actual", "Possible", "Impossible", "Old"],
    correct: 1,
    explanation: "Standard meaning."
  },

  // RC PASSAGE 2 (5 Qs)
  {
    id: "mhcet-3-q78",
    section: "English Language",
    passage: `Yoga is an ancient physical, mental, and spiritual practice that originated in India. The word 'yoga' derives from Sanskrit and means to join or to unite, symbolizing the union of body and consciousness. Today it is practiced in various forms around the world and continues to grow in popularity. recognizing its universal appeal, on 11 December 2014, the United Nations proclaimed 21 June as the International Day of Yoga.`,
    question: "Where did Yoga originate?",
    options: ["USA", "India", "China", "Europe"],
    correct: 1,
    explanation: "First sentence."
  },
  {
    id: "mhcet-3-q79",
    section: "English Language",
    passage: `Yoga...`,
    question: "The word 'Yoga' means:",
    options: ["Exercise", "To join or unite", "To sleep", "Breath"],
    correct: 1,
    explanation: "From the Sanskrit root mentioned."
  },
  {
    id: "mhcet-3-q80",
    section: "English Language",
    passage: `Yoga...`,
    question: "When is International Yoga Day?",
    options: ["Jan 1", "June 21", "Dec 11", "Aug 15"],
    correct: 1,
    explanation: "Mentioned at the end."
  },
  {
    id: "mhcet-3-q81",
    section: "English Language",
    passage: `Yoga...`,
    question: "Yoga symbolizes the union of:",
    options: ["Sun and Moon", "Body and Consciousness", "Earth and Sky", "Mind and Brain"],
    correct: 1,
    explanation: "From the text."
  },
  {
    id: "mhcet-3-q82",
    section: "English Language",
    passage: `Yoga...`,
    question: "The word 'Proclaimed' means:",
    options: ["Ignored", "Officially announced", "Cancelled", "Hidden"],
    correct: 1,
    explanation: "In the context of the UN."
  },

  // GRAMMAR & VOCAB (14 Qs)
  {
    id: "mhcet-3-q83",
    section: "English Language",
    question: "Synonym of 'ABRIDGE':",
    options: ["Extend", "Shorten", "Bridge", "Cross"],
    correct: 1,
    explanation: "Abridge means to shorten."
  },
  {
    id: "mhcet-3-q84",
    section: "English Language",
    question: "Antonym of 'VAGUE':",
    options: ["Clear", "Unclear", "Blurry", "Big"],
    correct: 0,
    explanation: "Vague (unclear) vs Clear."
  },
  {
    id: "mhcet-3-q85",
    section: "English Language",
    question: "Direct to Indirect: He said, 'I am happy.'",
    options: ["He said that he was happy.", "He said he is happy.", "He told he was happy.", "He says he was happy."],
    correct: 0,
    explanation: "Tense shift."
  },
  {
    id: "mhcet-3-q86",
    section: "English Language",
    question: "Identify error: 'Neither (A) apples (B) nor (C) oranges (D) is (E) fresh.'",
    options: ["A", "B", "C", "D", "E"],
    correct: 4,
    explanation: "Oranges is plural, so 'are fresh'."
  },
  {
    id: "mhcet-3-q87",
    section: "English Language",
    question: "Meaning of 'To hit the sack'?",
    options: ["To play", "To go to sleep", "To fight", "To work hard"],
    correct: 1,
    explanation: "Common idiom."
  },
  {
    id: "mhcet-3-q88",
    section: "English Language",
    question: "Choose correct spelling:",
    options: ["Occurrence", "Occurence", "Ocurence", "Occurrance"],
    correct: 0,
    explanation: "Occurrence."
  },
  {
    id: "mhcet-3-q89",
    section: "English Language",
    question: "Fill in blank: 'He is _____ M.A. in English.'",
    options: ["a", "an", "the", "no article"],
    correct: 1,
    explanation: "Sound 'em' starts with vowel."
  },
  {
    id: "mhcet-3-q90",
    section: "English Language",
    question: "Synonym of 'COMPLACENT':",
    options: ["Self-satisfied", "Worried", "Angry", "Fast"],
    correct: 0,
    explanation: "Definition."
  },
  {
    id: "mhcet-3-q91",
    section: "English Language",
    question: "Antonym of 'PROSPERITY':",
    options: ["Wealth", "Adversity", "Happiness", "Success"],
    correct: 1,
    explanation: "Opposite."
  },
  {
    id: "mhcet-3-q92",
    section: "English Language",
    question: "One word for 'A collection of poems':",
    options: ["Anthology", "Dictionary", "Biography", "Epic"],
    correct: 0,
    explanation: "Anthology."
  },
  {
    id: "mhcet-3-q93",
    section: "English Language",
    question: "Fill in blank: 'They jumped _____ the river.'",
    options: ["in", "into", "at", "on"],
    correct: 1,
    explanation: "Into shows movement."
  },
  {
    id: "mhcet-3-q94",
    section: "English Language",
    question: "Antonym of 'ACQUIT':",
    options: ["Free", "Convict", "Release", "Pardon"],
    correct: 1,
    explanation: "Opposite of declaring innocent."
  },
  {
    id: "mhcet-3-q95",
    section: "English Language",
    question: "Meaning of 'Bona fide'?",
    options: ["In good faith", "By law", "After death", "Against all"],
    correct: 0,
    explanation: "Latin term."
  },
  {
    id: "mhcet-3-q96",
    section: "English Language",
    question: "One word for 'A life history written by oneself':",
    options: ["Biography", "Autobiography", "History", "Story"],
    correct: 1,
    explanation: "Auto = Self."
  },

  // SECTION 5: BASIC MATHEMATICS (24 QUESTIONS)
  {
    id: "mhcet-3-q97",
    section: "Basic Mathematics",
    question: "What is 30% of 300?",
    options: ["30", "60", "90", "120"],
    correct: 2,
    explanation: "0.3 * 300 = 90."
  },
  {
    id: "mhcet-3-q98",
    section: "Basic Mathematics",
    question: "Solve: 5x - 5 = 20.",
    options: ["3", "4", "5", "6"],
    correct: 2,
    explanation: "5x = 25, x = 5."
  },
  {
    id: "mhcet-3-q99",
    section: "Basic Mathematics",
    question: "Average of first 5 even numbers?",
    options: ["4", "5", "6", "8"],
    correct: 2,
    explanation: "(2+4+6+8+10)/5 = 30/5 = 6."
  },
  {
    id: "mhcet-3-q100",
    section: "Basic Mathematics",
    question: "Ratio: A:B = 1:2. If sum is 30, B is?",
    options: ["10", "20", "15", "5"],
    correct: 1,
    explanation: "2/3 * 30 = 20."
  },
  {
    id: "mhcet-3-q101",
    section: "Basic Mathematics",
    question: "Percentage: x is 20. what is 100% of x?",
    options: ["10", "20", "40", "100"],
    correct: 1,
    explanation: "Self-explanatory."
  },
  {
    id: "mhcet-3-q102",
    section: "Basic Mathematics",
    question: "Interest: SI on 2000 at 5% for 1 yr?",
    options: ["50", "100", "200", "150"],
    correct: 1,
    explanation: "2000 * 0.05 = 100."
  },
  {
    id: "mhcet-3-q103",
    section: "Basic Mathematics",
    question: "Speed: Time 2h, Speed 60km/h. Distance?",
    options: ["30", "60", "120", "180"],
    correct: 2,
    explanation: "60 * 2 = 120."
  },
  {
    id: "mhcet-3-q104",
    section: "Basic Mathematics",
    question: "Algebra: Value of x^2 - 1 when x = 3.",
    options: ["5", "8", "10", "7"],
    correct: 1,
    explanation: "9 - 1 = 8."
  },
  {
    id: "mhcet-3-q105",
    section: "Basic Mathematics",
    question: "Profit: CP=100, SP=90. Loss %?",
    options: ["5%", "10%", "15%", "20%"],
    correct: 1,
    explanation: "10/100 = 10%."
  },
  {
    id: "mhcet-3-q106",
    section: "Basic Mathematics",
    question: "Geometry: Area of square with side 5?",
    options: ["10", "20", "25", "50"],
    correct: 2,
    explanation: "5 * 5 = 25."
  },
  {
    id: "mhcet-3-q107",
    section: "Basic Mathematics",
    question: "Number System: Sum of 10 and 20?",
    options: ["10", "30", "200", "0.5"],
    correct: 1,
    explanation: "Simple."
  },
  {
    id: "mhcet-3-q108",
    section: "Basic Mathematics",
    question: "Ratio: 1/2 of 1/2.",
    options: ["1", "1/2", "1/4", "1/8"],
    correct: 2,
    explanation: "1/4."
  },
  {
    id: "mhcet-3-q109",
    section: "Basic Mathematics",
    question: "Time & Work: A does work in 10 days. Together with B in 5. B alone?",
    options: ["5", "10", "15", "20"],
    correct: 1,
    explanation: "1/5 - 1/10 = 1/10."
  },
  {
    id: "mhcet-3-q110",
    section: "Basic Mathematics",
    question: "Percentage: Convert 0.5 to %.",
    options: ["5%", "50%", "0.5%", "500%"],
    correct: 1,
    explanation: "50%."
  },
  {
    id: "mhcet-3-q111",
    section: "Basic Mathematics",
    question: "HCF of 8 and 12?",
    options: ["2", "4", "6", "8"],
    correct: 1,
    explanation: "4."
  },
  {
    id: "mhcet-3-q112",
    section: "Basic Mathematics",
    question: "Algebra: If x=1, y=2, then x+y = ?",
    options: ["1", "2", "3", "4"],
    correct: 2,
    explanation: "3."
  },
  {
    id: "mhcet-3-q113",
    section: "Basic Mathematics",
    question: "Interest: SI on 100 at 10% for 10 yrs?",
    options: ["10", "100", "200", "50"],
    correct: 1,
    explanation: "100 * 0.1 * 10 = 100."
  },
  {
    id: "mhcet-3-q114",
    section: "Basic Mathematics",
    question: "Profit: Buy for 10, Sell for 15. Profit %?",
    options: ["10%", "50%", "100%", "25%"],
    correct: 1,
    explanation: "5/10 * 100 = 50%."
  },
  {
    id: "mhcet-3-q115",
    section: "Basic Mathematics",
    question: "Speed: 36 km/h in m/s?",
    options: ["5", "10", "15", "20"],
    correct: 1,
    explanation: "36 * 5/18 = 10."
  },
  {
    id: "mhcet-3-q116",
    section: "Basic Mathematics",
    question: "Geometry: Angles in triangle sum to?",
    options: ["90", "180", "270", "360"],
    correct: 1,
    explanation: "180."
  },
  {
    id: "mhcet-3-q117",
    section: "Basic Mathematics",
    question: "Age: Sum of ages of A and B is 30. A is twice of B. B is?",
    options: ["5", "10", "15", "20"],
    correct: 1,
    explanation: "2x + x = 30 -> 3x = 30 -> x = 10."
  },
  {
    id: "mhcet-3-q118",
    section: "Basic Mathematics",
    question: "Percentage: 50 is what % of 200?",
    options: ["20%", "25%", "30%", "50%"],
    correct: 1,
    explanation: "50/200 = 1/4 = 25%."
  },
  {
    id: "mhcet-3-q119",
    section: "Basic Mathematics",
    question: "Solve: 2 + 2 * 2.",
    options: ["4", "6", "8", "2"],
    correct: 1,
    explanation: "2 + 4 = 6."
  },
  {
    id: "mhcet-3-q120",
    section: "Basic Mathematics",
    question: "Find x: x^2 = 144.",
    options: ["10", "12", "14", "16"],
    correct: 1,
    explanation: "12."
  }
];
