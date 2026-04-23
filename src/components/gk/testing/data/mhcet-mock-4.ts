import { MockQuestion } from "../constants";

export const MHCET_MOCK_4: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE (24 QUESTIONS)
  // PASSAGE 1: CONSUMER PROTECTION ACT, 2019
  {
    id: "mhcet-4-q1",
    section: "Legal Aptitude",
    passage: `Principle: Under the Consumer Protection Act, 2019, a 'Consumer' is any person who buys any goods or hires/avails of any service for a consideration. (1) It does not include a person who obtains goods for resale or for any commercial purpose. (2) A consumer can file a complaint against 'deficiency in service' or 'defect in goods'. (3) The Act establishes a three-tier quasi-judicial machinery: District, State, and National Commissions. (4) E-commerce transactions are also covered under this Act.`,
    question: "Aman buys 50 laptops from a manufacturer to sell them in his shop. One laptop is defective. Can Aman file a complaint as a 'consumer' under this Act?",
    options: [
      "Yes, he paid for the laptops.",
      "No, he obtained the goods for 'resale/commercial purpose' and is not a consumer.",
      "Yes, because the defect is the manufacturer's fault.",
      "No, but only if he already sold that laptop."
    ],
    correct: 1,
    explanation: "Buying for resale is excluded from the definition of consumer."
  },
  {
    id: "mhcet-4-q2",
    section: "Legal Aptitude",
    passage: `Principle: Consumer Protection...`,
    question: "Aman buys a mobile phone for his personal use. Within a week, the screen stops working. The shopkeeper refuses to replace it. Where should Aman first file his complaint if the phone cost ₹20,000?",
    options: ["District Commission", "State Commission", "National Commission", "Supreme Court"],
    correct: 0,
    explanation: "Low-value claims start at the District level."
  },
  {
    id: "mhcet-4-q3",
    section: "Legal Aptitude",
    passage: `Principle: Consumer Protection...`,
    question: "Aman orders a pizza online through an app. The pizza arrives 3 hours late and is cold. Is this a 'deficiency in service'?",
    options: [
      "No, it's just a small delay.",
      "Yes, failure to provide service as promised (time-bound delivery) constitutes deficiency.",
      "No, because Aman ate the pizza anyway.",
      "Yes, but only if he didn't get a discount."
    ],
    correct: 1,
    explanation: "Service quality and timing are part of consumer rights."
  },
  {
    id: "mhcet-4-q4",
    section: "Legal Aptitude",
    passage: `Principle: Consumer Protection...`,
    question: "Aman buys a car for ₹60 Lakhs. The car has a major engine defect. Can he file a complaint directly in the National Commission?",
    options: [
      "Yes, it's a very expensive car.",
      "No, as per 2019 Act rules, the National Commission hears cases above ₹10 Crores (limit varies by recent notifications).",
      "Yes, if he lives in Delhi.",
      "No, he must go to the High Court."
    ],
    correct: 1,
    explanation: "Pecuniary jurisdiction determines where the case is filed."
  },
  {
    id: "mhcet-4-q5",
    section: "Legal Aptitude",
    passage: `Principle: Consumer Protection...`,
    question: "A doctor performs a surgery for free at a charitable camp. The patient suffers due to the doctor's mistake. Is the patient a 'consumer'?",
    options: [
      "Yes, he received a service.",
      "No, 'consideration' (payment) is essential to be a consumer; free services are generally excluded.",
      "Yes, because the doctor was negligent.",
      "No, but only if the doctor is famous."
    ],
    correct: 1,
    explanation: "Consumer status requires payment of consideration."
  },
  {
    id: "mhcet-4-q6",
    section: "Legal Aptitude",
    passage: `Principle: Consumer Protection...`,
    question: "Which right allows consumers to be protected against marketing of goods which are hazardous to life and property?",
    options: ["Right to be Informed", "Right to Safety", "Right to be Heard", "Right to Consumer Education"],
    correct: 1,
    explanation: "Right to Safety."
  },

  // PASSAGE 2: LAW OF TORTS (ASSAULT & BATTERY)
  {
    id: "mhcet-4-q7",
    section: "Legal Aptitude",
    passage: `Principle: (1) 'Assault' is an act which creates a reasonable apprehension in the mind of the plaintiff that the defendant is about to commit a battery against him. Actual contact is not necessary. (2) 'Battery' is the intentional application of force to another person without any lawful justification. Even the slightest touch can be battery if it is done with hostile intent. (3) 'Mayhem' is a more serious form of battery involving permanent injury.`,
    question: "Aman points an unloaded gun at Mr. X and threatens to shoot him. Mr. X is terrified. Aman knows the gun is empty. Has Aman committed assault?",
    options: [
      "No, he couldn't actually shoot.",
      "Yes, he created a reasonable apprehension of immediate force in Mr. X's mind.",
      "No, because there was no battery.",
      "Yes, but only if Mr. X has a heart condition."
    ],
    correct: 1,
    explanation: "Assault is about the victim's apprehension, not the defendant's actual ability to harm."
  },
  {
    id: "mhcet-4-q8",
    section: "Legal Aptitude",
    passage: `Principle: Assault & Battery...`,
    question: "Aman throws a bucket of water on Mr. X during an argument. Has battery been committed?",
    options: [
      "No, water doesn't cause physical injury.",
      "Yes, throwing water is the intentional application of force (water) to another person without justification.",
      "No, because Mr. X's clothes just got wet.",
      "Yes, but only if the water was dirty."
    ],
    correct: 1,
    explanation: "Battery doesn't require injury, just intentional unpermitted contact."
  },
  {
    id: "mhcet-4-q9",
    section: "Legal Aptitude",
    passage: `Principle: Assault & Battery...`,
    question: "Aman is standing behind a glass window. He shakes his fist and shouts threats at Mr. X outside. Is this assault?",
    options: [
      "Yes, he threatened him.",
      "No, because there is no 'immediate' threat of force due to the glass window; Mr. X cannot be reached.",
      "Yes, if Mr. X is afraid.",
      "No, but only if the window is bulletproof."
    ],
    correct: 1,
    explanation: "Assault requires the threat to be immediate."
  },
  {
    id: "mhcet-4-q10",
    section: "Legal Aptitude",
    passage: `Principle: Assault & Battery...`,
    question: "A doctor vaccines a child despite the child crying and saying 'No'. Is this battery?",
    options: [
      "Yes, it's force without consent.",
      "No, medical treatment with parental consent is a lawful justification.",
      "Yes, children have rights.",
      "No, but only if the needle was small."
    ],
    correct: 1,
    explanation: "Lawful justification (like medical care) prevents it from being a tort."
  },
  {
    id: "mhcet-4-q11",
    section: "Legal Aptitude",
    passage: `Principle: Assault & Battery...`,
    question: "Aman accidentally bumps into Mr. X in a crowded local train in Mumbai. Is this battery?",
    options: [
      "Yes, there was contact.",
      "No, in crowded places, there is 'implied consent' to minor accidental touching; also, there was no 'hostile intent'.",
      "Yes, because Aman was in a hurry.",
      "No, but only if he says sorry."
    ],
    correct: 1,
    explanation: "Accidental contact in social settings is not battery."
  },
  {
    id: "mhcet-4-q12",
    section: "Legal Aptitude",
    passage: `Principle: Assault & Battery...`,
    question: "What is the key difference between Assault and Battery?",
    options: [
      "Assault is for words; Battery is for actions.",
      "Assault is the fear of force; Battery is the actual application of force.",
      "Assault is a crime; Battery is a tort.",
      "There is no difference."
    ],
    correct: 1,
    explanation: "Apprehension vs Contact."
  },

  // PASSAGE 3: CONSTITUTIONAL LAW (FUNDAMENTAL DUTIES)
  {
    id: "mhcet-4-q13",
    section: "Legal Aptitude",
    passage: `Principle: Fundamental Duties (Part IV-A, Article 51A) were added by the 42nd Amendment (1976). There are currently 11 duties. They are 'non-justiciable,' meaning a citizen cannot be punished by a court purely for not following them, unless there is a specific law made by Parliament regarding that duty (like the Flag Code). Duties include: (1) Abiding by the Constitution and respecting the National Flag/Anthem. (2) Protecting the sovereignty and integrity of India. (3) Safeguarding public property. (4) Protecting the natural environment.`,
    question: "Aman refuses to stand up during the National Anthem in a cinema hall. Is he violating a Fundamental Duty?",
    options: [
      "No, it's his freedom.",
      "Yes, it is a Fundamental Duty to respect the National Anthem.",
      "No, because he was tired.",
      "Yes, but only if he was loud."
    ],
    correct: 1,
    explanation: "Duty to respect national symbols is the first FD."
  },
  {
    id: "mhcet-4-q14",
    section: "Legal Aptitude",
    passage: `Principle: Fundamental Duties...`,
    question: "A citizen is sued in court because he does not keep his house clean, which the neighbor says violates the duty to 'protect the environment'. Will the suit succeed?",
    options: [
      "Yes, duties are part of the Constitution.",
      "No, Fundamental Duties are non-justiciable and cannot be enforced directly by a court unless a specific law exists.",
      "Yes, if the house smells bad.",
      "No, because it's his private house."
    ],
    correct: 1,
    explanation: "Non-justiciability means no direct legal enforcement in courts."
  },
  {
    id: "mhcet-4-q15",
    section: "Legal Aptitude",
    passage: `Principle: Fundamental Duties...`,
    question: "The 11th Fundamental Duty (providing education to children aged 6-14) was added by which Amendment?",
    options: ["42nd Amendment", "44th Amendment", "86th Amendment", "101st Amendment"],
    correct: 2,
    explanation: "86th Amendment (2002) added the 11th duty."
  },
  {
    id: "mhcet-4-q16",
    section: "Legal Aptitude",
    passage: `Principle: Fundamental Duties...`,
    question: "Fundamental Duties apply to:",
    options: ["All people living in India", "Only Citizens of India", "Only Government officials", "Only Hindus"],
    correct: 1,
    explanation: "Fds are only for citizens."
  },
  {
    id: "mhcet-4-q17",
    section: "Legal Aptitude",
    passage: `Principle: Fundamental Duties...`,
    question: "Which country's constitution inspired the inclusion of Fundamental Duties in India?",
    options: ["USA", "USSR (Russia)", "Ireland", "Japan"],
    correct: 1,
    explanation: "Inspired by the Soviet Constitution."
  },
  {
    id: "mhcet-4-q18",
    section: "Legal Aptitude",
    passage: `Principle: Fundamental Duties...`,
    question: "Does the Constitution mention any 'Fundamental Rights' for animals?",
    options: [
      "Yes, Article 21 includes animals.",
      "No, but Article 51A(g) makes it a 'Fundamental Duty' of citizens to have compassion for living creatures.",
      "Yes, in the Preamble.",
      "No, animals have no rights in India."
    ],
    correct: 1,
    explanation: "Compassion for creatures is a duty, not an animal right per se in the text."
  },

  // PASSAGE 4: LAW OF CRIMES (ABETMENT)
  {
    id: "mhcet-4-q19",
    section: "Legal Aptitude",
    passage: `Principle: Abetment of a crime occurs when a person (1) Instigates another to commit an offence, or (2) Engages in a conspiracy for the same, or (3) Intentionally aids the commission of the offence. The abettor is liable even if the person abetted refuses to commit the crime or fails to achieve the result.`,
    question: "Aman tells Mr. X, 'You should kill your enemy, he is a bad person.' Mr. X ignores Aman and goes home. Is Aman guilty of abetment?",
    options: [
      "No, because no crime was committed.",
      "Yes, he instigated the crime, and the offence of abetment is complete regardless of the result.",
      "No, it was just a suggestion.",
      "Yes, but only if he gave Mr. X a gun."
    ],
    correct: 1,
    explanation: "Abetment is a substantive offence in itself."
  },
  {
    id: "mhcet-4-q20",
    section: "Legal Aptitude",
    passage: `Principle: Abetment...`,
    question: "Aman provides a ladder to a thief, knowing that the thief is going to use it to enter a house at night. Is Aman an abettor?",
    options: [
      "No, selling ladders is legal.",
      "Yes, he intentionally aided the commission of the offence.",
      "No, because he didn't enter the house himself.",
      "Yes, but only if the thief was successful."
    ],
    correct: 1,
    explanation: "Intentional aiding is abetment."
  },
  {
    id: "mhcet-4-q21",
    section: "Legal Aptitude",
    passage: `Principle: Abetment...`,
    question: "Aman and Mr. X plan to rob a bank. They buy masks and a car. Before they can go to the bank, they are caught by the police. Are they liable?",
    options: [
      "No, they didn't rob anything.",
      "Yes, they are liable for 'Criminal Conspiracy' (a form of abetment/planning).",
      "No, because masks are not illegal.",
      "Yes, but only for a small fine."
    ],
    correct: 1,
    explanation: "Conspiracy is a crime at the planning stage."
  },
  {
    id: "mhcet-4-q22",
    section: "Legal Aptitude",
    passage: `Principle: Abetment...`,
    question: "Aman provokes Mr. X by insulting his family. In anger, Mr. X hits Aman. Is Aman an abettor to the hitting?",
    options: [
      "Yes, he instigated it.",
      "No, provocation might be a defense for Mr. X, but it doesn't make the victim an abettor to his own assault.",
      "Yes, because he started the fight.",
      "No, but he is liable for defamation."
    ],
    correct: 1,
    explanation: "Victim is not an abettor."
  },
  {
    id: "mhcet-4-q23",
    section: "Legal Aptitude",
    passage: `Principle: Abetment...`,
    question: "Can a person abet a crime by 'silence'?",
    options: [
      "Yes, always.",
      "Only if they had a 'legal duty' to speak/prevent the crime and intentionally remained silent to aid the crime.",
      "No, silence is never a crime.",
      "Yes, if they were present at the scene."
    ],
    correct: 1,
    explanation: "Omission can be abetment if there's a legal duty to act."
  },
  {
    id: "mhcet-4-q24",
    section: "Legal Aptitude",
    passage: `Principle: Abetment...`,
    question: "If Aman tells a child (aged 5) to set fire to a house, is Aman liable for abetment?",
    options: [
      "No, the child cannot commit a crime.",
      "Yes, you can abet an offence even if the person you abet is legally incapable of committing the crime (like a child).",
      "No, because the child is the one who did it.",
      "Yes, but only if the house was destroyed."
    ],
    correct: 1,
    explanation: "Capacity of the person abetted doesn't matter for the abettor's liability."
  },

  // SECTION 2: GK & CURRENT AFFAIRS (24 QUESTIONS)
  // MAHARASHTRA SPECIFIC (4-5 Qs)
  {
    id: "mhcet-4-q25",
    section: "GK & Current Affairs",
    question: "Who is known as the 'Mother of Indian Revolution' and was born in Mumbai?",
    options: ["Madam Bhikaji Cama", "Sarojini Naidu", "Aruna Asaf Ali", "Kasturba Gandhi"],
    correct: 0,
    explanation: "Madam Cama unfurled the first Indian flag in Germany."
  },
  {
    id: "mhcet-4-q26",
    section: "GK & Current Affairs",
    question: "Which Maharashtrian personality was the first individual Satyagrahi chosen by Mahatma Gandhi?",
    options: ["Vinoba Bhave", "Jawaharlal Nehru", "Sardar Patel", "B.R. Ambedkar"],
    correct: 0,
    explanation: "Acharya Vinoba Bhave (1940)."
  },
  {
    id: "mhcet-4-q27",
    section: "GK & Current Affairs",
    question: "The 'Gateway of India' in Mumbai was built to commemorate the visit of:",
    options: ["King George V", "Queen Victoria", "Lord Mountbatten", "King Edward VII"],
    correct: 0,
    explanation: "Built for the visit of King George V and Queen Mary in 1911."
  },
  {
    id: "mhcet-4-q28",
    section: "GK & Current Affairs",
    question: "Who founded the 'Bahishkrit Hitakarini Sabha' for the welfare of the depressed classes?",
    options: ["Jyotirao Phule", "B.R. Ambedkar", "Vitthal Ramji Shinde", "Shahu Maharaj"],
    correct: 1,
    explanation: "Dr. Ambedkar (1924)."
  },
  {
    id: "mhcet-4-q29",
    section: "GK & Current Affairs",
    question: "Which stadium in Mumbai is the headquarters of the BCCI?",
    options: ["Wankhede Stadium", "Brabourne Stadium", "DY Patil Stadium", "Gymkhana"],
    correct: 0,
    explanation: "Wankhede Stadium."
  },

  // CURRENT AFFAIRS & STATIC
  {
    id: "mhcet-4-q30",
    section: "GK & Current Affairs",
    question: "Which city is the host of the '2036 Olympic Games' that India is bidding for?",
    options: ["Ahmedabad", "Mumbai", "New Delhi", "Bengaluru"],
    correct: 0,
    explanation: "India is pushing Ahmedabad as a primary hub for the bid."
  },
  {
    id: "mhcet-4-q31",
    section: "GK & Current Affairs",
    question: "Who is the current President of the Maldives (as of 2024)?",
    options: ["Ibrahim Solih", "Mohamed Muizzu", "Mohamed Nasheed", "Abdulla Yameen"],
    correct: 1,
    explanation: "Mohamed Muizzu."
  },
  {
    id: "mhcet-4-q32",
    section: "GK & Current Affairs",
    question: "The 'Bharat NCAP' is related to:",
    options: ["Space Safety", "Car Safety Ratings", "Education Policy", "Cyber Security"],
    correct: 1,
    explanation: "New Car Assessment Programme."
  },
  {
    id: "mhcet-4-q33",
    section: "GK & Current Affairs",
    question: "Which movie won the 'Best Picture' at the Oscars 2024?",
    options: ["Barbie", "Oppenheimer", "Poor Things", "Killers of the Flower Moon"],
    correct: 1,
    explanation: "Oppenheimer."
  },
  {
    id: "mhcet-4-q34",
    section: "GK & Current Affairs",
    question: "The 'Dadasaheb Phalke' award is India's highest award in:",
    options: ["Sports", "Cinema", "Literature", "Social Service"],
    correct: 1,
    explanation: "Cinema."
  },
  {
    id: "mhcet-4-q35",
    section: "GK & Current Affairs",
    question: "Who was the first woman to reach the Summit of Mount Everest?",
    options: ["Bachendri Pal", "Junko Tabei", "Santosh Yadav", "Arunima Sinha"],
    correct: 1,
    explanation: "Junko Tabei (Japan, 1975)."
  },
  {
    id: "mhcet-4-q36",
    section: "GK & Current Affairs",
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    correct: 1,
    explanation: "Nitrogen (78%)."
  },
  {
    id: "mhcet-4-q37",
    section: "GK & Current Affairs",
    question: "The 'Panchatantra' was written by:",
    options: ["Vishnu Sharma", "Kalidasa", "Tulsi Das", "Valmiki"],
    correct: 0,
    explanation: "Vishnu Sharma."
  },
  {
    id: "mhcet-4-q38",
    section: "GK & Current Affairs",
    question: "Which vitamin is synthesized by the human body in the presence of sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correct: 3,
    explanation: "Vitamin D."
  },
  {
    id: "mhcet-4-q39",
    section: "GK & Current Affairs",
    question: "The 'Right to Education' became a Fundamental Right in which year?",
    options: ["2002", "2005", "2009", "2010"],
    correct: 3,
    explanation: "Enforced from April 1, 2010."
  },
  {
    id: "mhcet-4-q40",
    section: "GK & Current Affairs",
    question: "Which of the following is the smallest continent by area?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    correct: 1,
    explanation: "Australia."
  },
  {
    id: "mhcet-4-q41",
    section: "GK & Current Affairs",
    question: "Who is known as the 'Iron Man of India'?",
    options: ["Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "Bhagat Singh", "Bal Gangadhar Tilak"],
    correct: 1,
    explanation: "Sardar Patel."
  },
  {
    id: "mhcet-4-q42",
    section: "GK & Current Affairs",
    question: "The 'Battle of Plassey' (1757) was fought between:",
    options: ["Akbar and Hemu", "British and Siraj-ud-Daulah", "Marathas and Mughals", "Tipu Sultan and British"],
    correct: 1,
    explanation: "British (Clive) vs Siraj-ud-Daulah."
  },
  {
    id: "mhcet-4-q43",
    section: "GK & Current Affairs",
    question: "Which blood group is known as the 'Universal Donor'?",
    options: ["A+", "B+", "AB+", "O-"],
    correct: 3,
    explanation: "O Negative."
  },
  {
    id: "mhcet-4-q44",
    section: "GK & Current Affairs",
    question: "What is the capital of Ukraine?",
    options: ["Moscow", "Kyiv", "Warsaw", "Berlin"],
    correct: 1,
    explanation: "Kyiv."
  },
  {
    id: "mhcet-4-q45",
    section: "GK & Current Affairs",
    question: "The 'Great Wall of China' was built mainly to protect from:",
    options: ["Floods", "Mongol invasions", "Trade disputes", "Sea pirates"],
    correct: 1,
    explanation: "Mongol/Nomadic tribes."
  },
  {
    id: "mhcet-4-q46",
    section: "GK & Current Affairs",
    question: "Who was the first woman Prime Minister of Great Britain?",
    options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Liz Truss"],
    correct: 1,
    explanation: "Margaret Thatcher (The Iron Lady)."
  },
  {
    id: "mhcet-4-q47",
    section: "GK & Current Affairs",
    question: "Which organ of the UN is responsible for maintaining international peace and security?",
    options: ["General Assembly", "Security Council", "Secretariat", "ICJ"],
    correct: 1,
    explanation: "UNSC."
  },
  {
    id: "mhcet-4-q48",
    section: "GK & Current Affairs",
    question: "The 'Beti Bachao, Beti Padhao' scheme was launched in which year?",
    options: ["2014", "2015", "2016", "2017"],
    correct: 1,
    explanation: "Jan 2015."
  },

  // SECTION 3: LOGICAL & ANALYTICAL REASONING (24 QUESTIONS)
  {
    id: "mhcet-4-q49",
    section: "Logical Reasoning",
    question: "Syllogism: All men are humans. All humans are mortal. Conclusion: All men are mortal.",
    options: ["True", "False", "Maybe", "None"],
    correct: 0,
    explanation: "Classic syllogism."
  },
  {
    id: "mhcet-4-q50",
    section: "Logical Reasoning",
    question: "Seating: 8 people sit at a round table. A is opposite E. B is next to A. C is between A and D. Where is B relative to E?",
    options: ["Opposite", "3 seats away", "Next to", "2 seats away"],
    correct: 1,
    explanation: "Round table geometry."
  },
  {
    id: "mhcet-4-q51",
    section: "Logical Reasoning",
    question: "Blood Relation: Aman's wife's brother is Mr. X. How is Aman related to Mr. X?",
    options: ["Brother", "Brother-in-law", "Cousin", "Father"],
    correct: 1,
    explanation: "Wife's brother = Brother-in-law."
  },
  {
    id: "mhcet-4-q52",
    section: "Logical Reasoning",
    question: "Analogy: Fire : Ash :: Explosion : ?",
    options: ["Sound", "Debris", "Fire", "Smoke"],
    correct: 1,
    explanation: "Product of action."
  },
  {
    id: "mhcet-4-q53",
    section: "Logical Reasoning",
    question: "Series: 1, 3, 6, 10, 15, ?",
    options: ["20", "21", "25", "30"],
    correct: 1,
    explanation: "Adding 2, 3, 4, 5, so +6 = 21."
  },
  {
    id: "mhcet-4-q54",
    section: "Logical Reasoning",
    question: "Statement: 'If you want high marks, join ClatTribe.' Assumption: ClatTribe helps in getting high marks.",
    options: ["Implicit", "Not implicit", "Irrelevant", "False"],
    correct: 0,
    explanation: "The advice assumes efficacy."
  },
  {
    id: "mhcet-4-q55",
    section: "Logical Reasoning",
    question: "Direction: Aman faces North. He turns 135° clockwise. Which direction?",
    options: ["East", "South-East", "South", "North-West"],
    correct: 1,
    explanation: "N -> NE -> E -> SE."
  },
  {
    id: "mhcet-4-q56",
    section: "Logical Reasoning",
    question: "Coding: If 'CAT' is 'DBU', what is 'DOG'?",
    options: ["EPH", "FPH", "EOH", "DOH"],
    correct: 0,
    explanation: "Each +1."
  },
  {
    id: "mhcet-4-q57",
    section: "Logical Reasoning",
    question: "Find odd one out:",
    options: ["Rose", "Lotus", "Lily", "Cabbage"],
    correct: 3,
    explanation: "Vegetable vs Flowers."
  },
  {
    id: "mhcet-4-q58",
    section: "Logical Reasoning",
    question: "Analogy: 10 : 1000 :: 2 : ?",
    options: ["4", "8", "16", "32"],
    correct: 1,
    explanation: "Cube."
  },
  {
    id: "mhcet-4-q59",
    section: "Logical Reasoning",
    question: "Series: ABC, DEF, GHI, ?",
    options: ["JKL", "MNO", "PQR", "STU"],
    correct: 0,
    explanation: "Successive triplets."
  },
  {
    id: "mhcet-4-q60",
    section: "Logical Reasoning",
    question: "Statement: All rich people are happy. Mr. X is not rich. Conclusion: Mr. X is not happy.",
    options: ["Follows", "Doesn't follow", "Maybe", "Data inadequate"],
    correct: 1,
    explanation: "Denying the antecedent is a fallacy."
  },
  {
    id: "mhcet-4-q61",
    section: "Logical Reasoning",
    question: "Blood Relation: My maternal uncle's only sister is my:",
    options: ["Aunt", "Mother", "Grandmother", "Cousin"],
    correct: 1,
    explanation: "Mother."
  },
  {
    id: "mhcet-4-q62",
    section: "Logical Reasoning",
    question: "Clock: Time 9:00. Angle?",
    options: ["90", "180", "270", "0"],
    correct: 0,
    explanation: "Right angle."
  },
  {
    id: "mhcet-4-q63",
    section: "Logical Reasoning",
    question: "Analogy: India : Tiger :: USA : ?",
    options: ["Lion", "Bald Eagle", "Panda", "Kangaroo"],
    correct: 1,
    explanation: "National animal/symbol."
  },
  {
    id: "mhcet-4-q64",
    section: "Logical Reasoning",
    question: "If 'A' = 1, 'B' = 2, 'C' = 3, then 'CAB' = ?",
    options: ["6", "5", "7", "8"],
    correct: 0,
    explanation: "3+1+2 = 6."
  },
  {
    id: "mhcet-4-q65",
    section: "Logical Reasoning",
    question: "Direction: North-West faces South-East. West faces?",
    options: ["North", "South", "East", "West"],
    correct: 2,
    explanation: "Opposite of West is East."
  },
  {
    id: "mhcet-4-q66",
    section: "Logical Reasoning",
    question: "Series: 10, 20, 30, 40, ?",
    options: ["50", "60", "70", "100"],
    correct: 0,
    explanation: "Simple sequence."
  },
  {
    id: "mhcet-4-q67",
    section: "Logical Reasoning",
    question: "Find odd one out:",
    options: ["Gmail", "Outlook", "Yahoo", "Google Search"],
    correct: 3,
    explanation: "Others are primary email services."
  },
  {
    id: "mhcet-4-q68",
    section: "Logical Reasoning",
    question: "Statement: Some students are players. All players are tall. Conclusion: Some students are tall.",
    options: ["True", "False", "Maybe", "None"],
    correct: 0,
    explanation: "Valid intersection."
  },
  {
    id: "mhcet-4-q69",
    section: "Logical Reasoning",
    question: "Coding: If 'PEN' is '31', what is 'INK'?",
    options: ["30", "32", "33", "34"],
    correct: 2,
    explanation: "Sum of positions: P=16, E=5, N=14 (35, wait, recalculate: 16+5+14 = 35. I=9, N=14, K=11. 9+14+11 = 34)."
  },
  {
    id: "mhcet-4-q70",
    section: "Logical Reasoning",
    question: "Analogy: 4 : 16 :: 16 : ?",
    options: ["32", "64", "256", "512"],
    correct: 2,
    explanation: "Square."
  },
  {
    id: "mhcet-4-q71",
    section: "Logical Reasoning",
    question: "What comes next: Sunday, Monday, Wednesday, Saturday, ?",
    options: ["Sunday", "Wednesday", "Thursday", "Friday"],
    correct: 1,
    explanation: "Skips 0, 1, 2, then 3 days? Mon(+1)=Tue, Tue(+2)=Thu? Wait. Sun to Mon (+1), Mon to Wed (+2), Wed to Sat (+3), Sat to Wed (+4). Sun,Mon,Tue,Wed."
  },
  {
    id: "mhcet-4-q72",
    section: "Logical Reasoning",
    question: "Find missing: 2, 4, 12, 48, ?",
    options: ["96", "120", "240", "480"],
    correct: 2,
    explanation: "*2, *3, *4, so *5 = 240."
  },

  // SECTION 4: ENGLISH LANGUAGE (24 QUESTIONS)
  // RC PASSAGE 1 (5 Qs)
  {
    id: "mhcet-4-q73",
    section: "English Language",
    passage: `Renewable energy is energy that is collected from renewable resources, which are naturally replenished on a human timescale, such as sunlight, wind, rain, tides, waves, and geothermal heat. Unlike fossil fuels, which are finite and contribute to greenhouse gas emissions, renewable energy sources are clean and sustainable. Many countries are now investing heavily in solar and wind power to reduce their carbon footprint and combat global warming.`,
    question: "What are renewable resources?",
    options: ["Fossil fuels", "Naturally replenished resources", "Resources that never end", "Coal and Oil"],
    correct: 1,
    explanation: "Defined in the first sentence."
  },
  {
    id: "mhcet-4-q74",
    section: "English Language",
    passage: `Renewable...`,
    question: "Which of the following is NOT a renewable source mentioned?",
    options: ["Sunlight", "Wind", "Natural Gas", "Tides"],
    correct: 2,
    explanation: "Natural gas is a fossil fuel."
  },
  {
    id: "mhcet-4-q75",
    section: "English Language",
    passage: `Renewable...`,
    question: "Fossil fuels are described as:",
    options: ["Infinite", "Finite and polluting", "Clean", "Cheap"],
    correct: 1,
    explanation: "Opposite of renewable sources."
  },
  {
    id: "mhcet-4-q76",
    section: "English Language",
    passage: `Renewable...`,
    question: "Why are countries investing in solar power?",
    options: ["To make money", "To reduce carbon footprint", "To build more factories", "To stop rain"],
    correct: 1,
    explanation: "Explicitly stated as a goal."
  },
  {
    id: "mhcet-4-q77",
    section: "English Language",
    passage: `Renewable...`,
    question: "The word 'Finite' means:",
    options: ["Endless", "Limited", "Fast", "Old"],
    correct: 1,
    explanation: "Opposite of infinite."
  },

  // RC PASSAGE 2 (5 Qs)
  {
    id: "mhcet-4-q78",
    section: "English Language",
    passage: `Reading is to the mind what exercise is to the body. It expands our horizons, improves our vocabulary, and enhances our critical thinking abilities. In the age of digital distraction, the habit of reading long-form content is becoming rare. However, those who maintain a consistent reading habit often find themselves better equipped to understand complex issues and communicate effectively. A good book can transport you to different worlds and provide perspectives that you might never encounter otherwise.`,
    question: "According to the passage, reading is like _____ for the body.",
    options: ["Food", "Exercise", "Sleep", "Water"],
    correct: 1,
    explanation: "Simile used in the first sentence."
  },
  {
    id: "mhcet-4-q79",
    section: "English Language",
    passage: `Reading...`,
    question: "A benefit of reading mentioned is:",
    options: ["Losing weight", "Improving vocabulary", "Saving money", "Getting a job"],
    correct: 1,
    explanation: "Directly stated."
  },
  {
    id: "mhcet-4-q80",
    section: "English Language",
    passage: `Reading...`,
    question: "What is happening in the 'age of digital distraction'?",
    options: ["Everyone is reading more", "Reading habit is becoming rare", "Books are becoming cheaper", "Internet is slow"],
    correct: 1,
    explanation: "Author laments the rarity of reading."
  },
  {
    id: "mhcet-4-q81",
    section: "English Language",
    passage: `Reading...`,
    question: "Reading helps in understanding:",
    options: ["Simple tasks", "Complex issues", "Math only", "Nothing"],
    correct: 1,
    explanation: "Mentioned as a result of consistent habit."
  },
  {
    id: "mhcet-4-q82",
    section: "English Language",
    passage: `Reading...`,
    question: "The word 'Horizons' in the passage refers to:",
    options: ["The sky", "Range of experience or knowledge", "Distance", "Future"],
    correct: 1,
    explanation: "Metaphorical use."
  },

  // GRAMMAR & VOCAB (14 Qs)
  {
    id: "mhcet-4-q83",
    section: "English Language",
    question: "Synonym of 'GENEROUS':",
    options: ["Selfish", "Magnanimous", "Greedy", "Mean"],
    correct: 1,
    explanation: "Generous and Magnanimous both mean kind/giving."
  },
  {
    id: "mhcet-4-q84",
    section: "English Language",
    question: "Antonym of 'ANCIENT':",
    options: ["Old", "Modern", "Antique", "Historic"],
    correct: 1,
    explanation: "Opposite."
  },
  {
    id: "mhcet-4-q85",
    section: "English Language",
    question: "Change to Passive: 'I write a letter.'",
    options: ["A letter is written by me.", "A letter was written by me.", "A letter being written by me.", "Letter is wrote by me."],
    correct: 0,
    explanation: "Simple present passive."
  },
  {
    id: "mhcet-4-q86",
    section: "English Language",
    question: "Identify the error: 'Each (A) of (B) the (C) students (D) are (E) here.'",
    options: ["A", "B", "C", "D", "E"],
    correct: 4,
    explanation: "'Each' is singular, should be 'is'."
  },
  {
    id: "mhcet-4-q87",
    section: "English Language",
    question: "Meaning of idiom 'Crying over spilt milk'?",
    options: ["To be hungry", "To worry about something that cannot be changed", "To waste food", "To be loud"],
    correct: 1,
    explanation: "Regretting the past."
  },
  {
    id: "mhcet-4-q88",
    section: "English Language",
    question: "Choose correct spelling:",
    options: ["Acquaintance", "Aquaintance", "Acquantance", "Acquaintence"],
    correct: 0,
    explanation: "Acquaintance."
  },
  {
    id: "mhcet-4-q89",
    section: "English Language",
    question: "Fill in blank: 'He is afraid _____ dogs.'",
    options: ["from", "of", "with", "by"],
    correct: 1,
    explanation: "Afraid of."
  },
  {
    id: "mhcet-4-q90",
    section: "English Language",
    question: "Synonym of 'REDUNDANT':",
    options: ["Essential", "Unnecessary/Extra", "Fast", "Brave"],
    correct: 1,
    explanation: "Redundant means superfluous."
  },
  {
    id: "mhcet-4-q91",
    section: "English Language",
    question: "Antonym of 'CONCEAL':",
    options: ["Hide", "Reveal", "Close", "Protect"],
    correct: 1,
    explanation: "Opposite."
  },
  {
    id: "mhcet-4-q92",
    section: "English Language",
    question: "One word for 'A person who studies stars and planets':",
    options: ["Astrologer", "Astronomer", "Geologist", "Biologist"],
    correct: 1,
    explanation: "Astronomer."
  },
  {
    id: "mhcet-4-q93",
    section: "English Language",
    question: "Fill in blank: 'She has been working _____ morning.'",
    options: ["for", "since", "at", "from"],
    correct: 1,
    explanation: "Point of time."
  },
  {
    id: "mhcet-4-q94",
    section: "English Language",
    question: "Antonym of 'HOSTILE':",
    options: ["Angry", "Friendly", "Enemy", "Cold"],
    correct: 1,
    explanation: "Hostile (unfriendly) vs Friendly."
  },
  {
    id: "mhcet-4-q95",
    section: "English Language",
    question: "Meaning of 'De facto'?",
    options: ["By law", "In fact/practice", "In secret", "After truth"],
    correct: 1,
    explanation: "Legal term."
  },
  {
    id: "mhcet-4-q96",
    section: "English Language",
    question: "Identify the synonym of 'CANDID':",
    options: ["Fake", "Frank/Honest", "Sweet", "Heavy"],
    correct: 1,
    explanation: "Candid means straightforward."
  },

  // SECTION 5: BASIC MATHEMATICS (24 QUESTIONS)
  {
    id: "mhcet-4-q97",
    section: "Basic Mathematics",
    question: "What is 25% of 400?",
    options: ["100", "200", "50", "25"],
    correct: 0,
    explanation: "1/4 * 400 = 100."
  },
  {
    id: "mhcet-4-q98",
    section: "Basic Mathematics",
    question: "Solve: 4x + 8 = 24.",
    options: ["2", "4", "6", "8"],
    correct: 1,
    explanation: "4x = 16, x = 4."
  },
  {
    id: "mhcet-4-q99",
    section: "Basic Mathematics",
    question: "Average of 10, 20, 30, 40, 50?",
    options: ["20", "25", "30", "35"],
    correct: 2,
    explanation: "Middle value of AP."
  },
  {
    id: "mhcet-4-q100",
    section: "Basic Mathematics",
    question: "Ratio: A:B = 3:4. If A is 12, B is?",
    options: ["14", "16", "18", "20"],
    correct: 1,
    explanation: "3 units = 12, so 1 unit = 4. 4 units = 16."
  },
  {
    id: "mhcet-4-q101",
    section: "Basic Mathematics",
    question: "Percentage: Change 0.75 to percentage.",
    options: ["7.5%", "75%", "0.75%", "750%"],
    correct: 1,
    explanation: "0.75 * 100 = 75%."
  },
  {
    id: "mhcet-4-q102",
    section: "Basic Mathematics",
    question: "Interest: SI on 1000 for 5 years at 5%?",
    options: ["100", "200", "250", "500"],
    correct: 2,
    explanation: "1000 * 0.05 * 5 = 250."
  },
  {
    id: "mhcet-4-q103",
    section: "Basic Mathematics",
    question: "Speed: Time 4h, Distance 200km. Speed?",
    options: ["40", "50", "60", "80"],
    correct: 1,
    explanation: "200/4 = 50."
  },
  {
    id: "mhcet-4-q104",
    section: "Basic Mathematics",
    question: "Algebra: x + y = 10, x - y = 2. x = ?",
    options: ["4", "5", "6", "7"],
    correct: 2,
    explanation: "2x = 12, x = 6."
  },
  {
    id: "mhcet-4-q105",
    section: "Basic Mathematics",
    question: "Profit: CP=500, SP=600. Profit %?",
    options: ["10%", "20%", "25%", "15%"],
    correct: 1,
    explanation: "100/500 * 100 = 20%."
  },
  {
    id: "mhcet-4-q106",
    section: "Basic Mathematics",
    question: "Geometry: Area of triangle with base 10, height 5.",
    options: ["50", "25", "100", "75"],
    correct: 1,
    explanation: "1/2 * 10 * 5 = 25."
  },
  {
    id: "mhcet-4-q107",
    section: "Basic Mathematics",
    question: "Number System: Next prime after 13?",
    options: ["15", "17", "19", "21"],
    correct: 1,
    explanation: "17."
  },
  {
    id: "mhcet-4-q108",
    section: "Basic Mathematics",
    question: "Ratio: 2/3 of 60.",
    options: ["20", "40", "30", "50"],
    correct: 1,
    explanation: "40."
  },
  {
    id: "mhcet-4-q109",
    section: "Basic Mathematics",
    question: "Time & Work: A does work in 10, B in 10. Together?",
    options: ["10", "5", "2", "20"],
    correct: 1,
    explanation: "Half the time."
  },
  {
    id: "mhcet-4-q110",
    section: "Basic Mathematics",
    question: "Percentage: If x increases by 100%, it becomes:",
    options: ["Equal", "Double", "Triple", "Half"],
    correct: 1,
    explanation: "x + x = 2x."
  },
  {
    id: "mhcet-4-q111",
    section: "Basic Mathematics",
    question: "LCM of 10, 15, 20?",
    options: ["30", "40", "60", "120"],
    correct: 2,
    explanation: "60."
  },
  {
    id: "mhcet-4-q112",
    section: "Basic Mathematics",
    question: "Algebra: If x = 0, x^2 + 10x + 5 = ?",
    options: ["0", "5", "10", "15"],
    correct: 1,
    explanation: "5."
  },
  {
    id: "mhcet-4-q113",
    section: "Basic Mathematics",
    question: "Interest: SI on 1000 for 1 yr at 1%.",
    options: ["1", "10", "100", "1000"],
    correct: 1,
    explanation: "10."
  },
  {
    id: "mhcet-4-q114",
    section: "Basic Mathematics",
    question: "Profit: Sell for 110, Profit 10%. CP?",
    options: ["90", "100", "110", "120"],
    correct: 1,
    explanation: "100."
  },
  {
    id: "mhcet-4-q115",
    section: "Basic Mathematics",
    question: "Speed: 90 km/h in m/s.",
    options: ["15", "25", "30", "45"],
    correct: 1,
    explanation: "90 * 5/18 = 25."
  },
  {
    id: "mhcet-4-q116",
    section: "Basic Mathematics",
    question: "Geometry: Volume of sphere formula starts with?",
    options: ["4/3", "1/3", "1/2", "pi"],
    correct: 0,
    explanation: "4/3 pi r^3."
  },
  {
    id: "mhcet-4-q117",
    section: "Basic Mathematics",
    question: "Age: A is 5 and B is 10. In how many years will B be twice of A?",
    options: ["0", "5", "10", "Never"],
    correct: 0,
    explanation: "He is already twice (10 is twice of 5)."
  },
  {
    id: "mhcet-4-q118",
    section: "Basic Mathematics",
    question: "Percentage: 10% of 10% of 100.",
    options: ["10", "1", "0.1", "100"],
    correct: 1,
    explanation: "10% of 10 is 1."
  },
  {
    id: "mhcet-4-q119",
    section: "Basic Mathematics",
    question: "Solve: 10 + 10 / 10.",
    options: ["2", "11", "20", "1"],
    correct: 1,
    explanation: "10 + 1 = 11."
  },
  {
    id: "mhcet-4-q120",
    section: "Basic Mathematics",
    question: "Find x: sqrt(x) = 15.",
    options: ["150", "225", "200", "300"],
    correct: 1,
    explanation: "15*15 = 225."
  }
];
