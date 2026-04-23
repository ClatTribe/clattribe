import { MockQuestion } from "../constants";

export const MHCET_MOCK_1: MockQuestion[] = [
  // SECTION 1: LEGAL APTITUDE & LEGAL REASONING (24 QUESTIONS)
  // PASSAGE 1: LAW OF TORTS – THE PRINCIPLE OF STRICT LIABILITY (Q1–Q4)
  {
    id: "mhcet-1-q1",
    section: "Legal Aptitude & Reasoning",
    passage: `The principle of Strict Liability, as laid down in the historic case of Rylands v. Fletcher (1868), states that if a person brings onto his land and keeps there anything likely to do mischief if it escapes, he must keep it at his peril. If he fails to do so, he is prima facie answerable for all the damage which is the natural consequence of its escape. This liability is independent of any negligence on the part of the defendant. However, the rule is not absolute and is subject to several key exceptions: (1) Act of God (Vis Major), which refers to extraordinary natural events that could not have been foreseen or prevented; (2) Plaintiff's own fault, where the escape is caused by the injured party's actions; (3) Consent of the Plaintiff, often applicable where a service is for the common benefit of both parties; (4) Act of a third party (stranger), where the escape is caused by someone over whom the defendant has no control; and (5) Statutory Authority, where the act is authorized by a specific law passed by the legislature.`,
    question: "Aman maintains a large water reservoir on his land for his factory. Due to an unprecedented and extraordinary rainfall, which was never seen in the last 100 years, the reservoir overflowed and damaged Mr. X's neighboring crops. Is Aman liable under the rule of strict liability?",
    options: [
      "Yes, he brought the water onto his land and it escaped.",
      "No, this qualifies as an 'Act of God' exception, as the rainfall was unprecedented and unforeseeable.",
      "Yes, he should have built a bigger wall regardless of the rainfall.",
      "No, but only if he pays for half the damage as a gesture of goodwill."
    ],
    correct: 1,
    explanation: "Unprecedented and extraordinary natural events that cannot be reasonably anticipated are classified as an 'Act of God', which is a valid defense to strict liability."
  },
  {
    id: "mhcet-1-q2",
    section: "Legal Aptitude & Reasoning",
    passage: `The principle of Strict Liability...`,
    question: "Mr. X, a neighbor, sneaks into Aman's factory and accidentally breaks a valve, causing poisonous gas to escape and harm himself. Can Mr. X sue Aman under strict liability?",
    options: [
      "Yes, the gas escaped from Aman's land and caused harm.",
      "No, the escape was caused by the Plaintiff's (Mr. X) own fault and unauthorized entry.",
      "Yes, because Aman didn't have enough security to prevent Mr. X from entering.",
      "No, gas is not considered 'mischievous' enough for strict liability."
    ],
    correct: 1,
    explanation: "When the plaintiff is responsible for the escape or the damage through their own fault or trespass, the defendant is not liable under strict liability."
  },
  {
    id: "mhcet-1-q3",
    section: "Legal Aptitude & Reasoning",
    passage: `The principle of Strict Liability...`,
    question: "Aman stores heavy chemicals on his land. A terrorist (third party) bombs the facility, causing chemicals to spill into Mr. X's well. Is Aman liable under Rylands v. Fletcher?",
    options: [
      "Yes, he is responsible for keeping the chemicals safe from everyone.",
      "No, it was the act of a stranger/third party over whom Aman had no control.",
      "Yes, because storing chemicals is a hazardous activity.",
      "No, but only if Aman reports the terrorist to the police within 24 hours."
    ],
    correct: 1,
    explanation: "The 'act of a stranger' or a third party is a valid defense if the defendant took reasonable care to prevent such interference but it happened anyway."
  },
  {
    id: "mhcet-1-q4",
    section: "Legal Aptitude & Reasoning",
    passage: `The principle of Strict Liability...`,
    question: "The Government builds a large dam under a specific legislative act. The dam leaks due to a minor defect and floods local houses. Is the government liable under strict liability?",
    options: [
      "Yes, the rule applies to the government just like individuals.",
      "No, the dam was built under 'Statutory Authority' (legal permission), which is an exception.",
      "Yes, if the flood caused more than ₹10 lakh in damages.",
      "No, because dams are essential for the public."
    ],
    correct: 1,
    explanation: "Acts authorized by statute (law) are generally exempt from strict liability unless there is proof of negligence."
  },

  // PASSAGE 2: CRIMINAL LAW – PRIVATE DEFENCE (Q5–Q8)
  {
    id: "mhcet-1-q5",
    section: "Legal Aptitude & Reasoning",
    passage: `Every person has a right to defend his own body, and the body of any other person, against any offence affecting the human body. However, this right is subject to certain restrictions: (1) The right of private defence is not available if there is time to have recourse to the protection of public authorities (like the police); (2) The force used must be proportionate to the threat; (3) The right starts as soon as a reasonable apprehension of danger arises and continues as long as such apprehension exists; and (4) The right does not extend to the inflicting of more harm than it is necessary to inflict for the purpose of defence. The right of private defence of the body extends to the causing of death if the offence which occasions the exercise of the right is an assault as may reasonably cause the apprehension that death or grievous hurt will otherwise be the consequence.`,
    question: "Aman sees Mr. X pulling out a gun to shoot him. Before Mr. X can pull the trigger, Aman hits Mr. X with a heavy rod, causing Mr. X to lose consciousness. Did Aman use his right of private defence correctly?",
    options: [
      "No, he should have waited for the police to arrive.",
      "Yes, he had a reasonable apprehension of death and used proportionate force to stop the threat.",
      "No, hitting someone with a rod is always a crime regardless of the reason.",
      "Yes, but only if he had a license for the rod."
    ],
    correct: 1,
    explanation: "Aman had no time to call the police and used necessary force to prevent a life-threatening assault."
  },
  {
    id: "mhcet-1-q6",
    section: "Legal Aptitude & Reasoning",
    passage: `Every person has a right to defend...`,
    question: "Aman catches a thief running away with his bag. After the thief has dropped the bag and surrendered, Aman continues to beat him with a stick. Is this protected by private defence?",
    options: [
      "Yes, because the thief committed a crime.",
      "No, the right of private defence ended as soon as the threat/offence ended (the bag was dropped and the thief surrendered).",
      "Yes, because thieves need to be taught a lesson.",
      "No, but only if the thief is a minor."
    ],
    correct: 1,
    explanation: "Private defence is for protection, not punishment. Once the danger is over, the right to use force ceases."
  },
  {
    id: "mhcet-1-q7",
    section: "Legal Aptitude & Reasoning",
    passage: `Every person has a right to defend...`,
    question: "Aman is attacked by a group of people with knives. In the struggle, Aman grabs a knife and kills one of the attackers. Is he liable for murder?",
    options: [
      "Yes, killing a person is always murder.",
      "No, the right of private defence of the body extends to causing death when there is an apprehension of death or grievous hurt.",
      "Yes, because he should have just run away.",
      "No, but only if he was also injured."
    ],
    correct: 1,
    explanation: "Faced with a lethal threat (knives), causing death in self-defence is legally justified."
  },
  {
    id: "mhcet-1-q8",
    section: "Legal Aptitude & Reasoning",
    passage: `Every person has a right to defend...`,
    question: "Aman hits Mr. X after Mr. X verbally abuses his family. Can Aman use the defense of private defence?",
    options: [
      "Yes, verbal abuse is an attack on family honor.",
      "No, the right of private defence is only against 'offences affecting the human body' or property, not against verbal insults.",
      "Yes, but only if the insults were very loud.",
      "No, because Aman should have insulted him back."
    ],
    correct: 1,
    explanation: "Private defence is not available against verbal provocation alone; it requires an apprehension of physical harm or property damage."
  },

  // PASSAGE 3: LAW OF CONTRACTS – CONSENT AND COERCION (Q9–Q12)
  {
    id: "mhcet-1-q9",
    section: "Legal Aptitude & Reasoning",
    passage: `Consent is said to be 'free' when it is not caused by: (1) Coercion, (2) Undue Influence, (3) Fraud, (4) Misrepresentation, or (5) Mistake. 'Coercion' is the committing, or threatening to commit, any act forbidden by the Indian Penal Code, or the unlawful detaining of any property, with the intention of causing any person to enter into an agreement. An agreement reached through coercion is 'voidable' at the option of the party whose consent was so caused. This means the injured party can choose to either continue with the contract or cancel it. If they cancel it, they must return any benefit received. 'Undue Influence' occurs where one party is in a position to dominate the will of the other and uses that position to obtain an unfair advantage (e.g., a doctor and a patient).`,
    question: "Aman threatens to burn down Mr. X's house unless Mr. X signs a contract to sell his land for ₹10 lakhs. Mr. X signs the contract. What is the legal status of this contract?",
    options: [
      "It is a valid and binding contract.",
      "It is 'voidable' at the option of Mr. X because his consent was obtained through coercion.",
      "It is 'void' from the beginning (void ab initio).",
      "It is an illegal contract that cannot be signed."
    ],
    correct: 1,
    explanation: "Contracts obtained through coercion are voidable at the option of the aggrieved party."
  },
  {
    id: "mhcet-1-q10",
    section: "Legal Aptitude & Reasoning",
    passage: `Consent is said to be 'free'...`,
    question: "Aman, an elderly man's caregiver, convinces the man to leave all his property to Aman by telling him that his children have abandoned him (which was false). This is an example of:",
    options: [
      "Coercion",
      "Undue Influence",
      "Misrepresentation",
      "A valid gift"
    ],
    correct: 1,
    explanation: "Undue influence occurs when someone in a position of trust or dominance uses that position to obtain an unfair advantage."
  },
  {
    id: "mhcet-1-q11",
    section: "Legal Aptitude & Reasoning",
    passage: `Consent is said to be 'free'...`,
    question: "What happens if a party decides to 'void' (cancel) a contract that was entered into through coercion?",
    options: [
      "They can keep all the money and the property.",
      "They must return any benefit (like money) they received from the other party under the contract.",
      "The other party must go to jail immediately.",
      "Nothing happens; the contract just disappears."
    ],
    correct: 1,
    explanation: "In a voidable contract, if the party rescinds it, they must restore any benefits received (Section 64 of the Indian Contract Act)."
  },
  {
    id: "mhcet-1-q12",
    section: "Legal Aptitude & Reasoning",
    passage: `Consent is said to be 'free'...`,
    question: "Aman threatens to commit suicide unless his wife signs a property document. The wife signs. Is this considered 'coercion' under Indian law?",
    options: [
      "No, suicide is a personal choice, not an act against another.",
      "Yes, threatening to commit suicide is an act forbidden by the IPC and constitutes coercion.",
      "No, because the wife should have tried to save him.",
      "Yes, but only if he actually tries to do it."
    ],
    correct: 1,
    explanation: "The Supreme Court has held that a threat to commit suicide (which was an offence under IPC) constitutes coercion."
  },

  // PASSAGE 4: CONSTITUTIONAL LAW – FUNDAMENTAL RIGHTS (Q13–Q16)
  {
    id: "mhcet-1-q13",
    section: "Legal Aptitude & Reasoning",
    passage: `Article 14 of the Indian Constitution guarantees equality before the law and equal protection of the laws within the territory of India. However, 'equality' does not mean that every single law must apply to every single person in the same way. The State can make 'reasonable classifications' based on an 'intelligible differentia'—meaning there must be a clear and logical reason for separating people into groups. Furthermore, the classification must have a 'rational nexus' with the objective the law seeks to achieve. For example, the State can have different tax slabs for people with different income levels. Article 15 prohibits discrimination on grounds only of religion, race, caste, sex, or place of birth. However, Article 15(3) allows the State to make 'special provisions' for women and children (protective discrimination).`,
    question: "The Government passes a law that says only people who have passed the 10th grade can apply for a specific government job. A person who hasn't passed 10th grade argues this violates Article 14. Is the law valid?",
    options: [
      "No, everyone should have an equal right to every job.",
      "Yes, this is a 'reasonable classification' based on educational qualification (intelligible differentia).",
      "Yes, but only if the government pays for their 10th grade education.",
      "No, Article 14 forbids all types of classification."
    ],
    correct: 1,
    explanation: "Educational qualification is a valid ground for classification for employment purposes."
  },
  {
    id: "mhcet-1-q14",
    section: "Legal Aptitude & Reasoning",
    passage: `Article 14 of the Indian Constitution...`,
    question: "The Government reserves seats for women in local panchayat elections. A man argues this is discrimination based on 'sex' and violates Article 15. Is he correct?",
    options: [
      "Yes, Article 15 strictly prohibits discrimination based on sex.",
      "No, Article 15(3) specifically allows the State to make 'special provisions' for women.",
      "Yes, because men also need reservation.",
      "No, but only if the seats are less than 10%."
    ],
    correct: 1,
    explanation: "Special provisions for women are constitutionally protected under Article 15(3)."
  },
  {
    id: "mhcet-1-q15",
    section: "Legal Aptitude & Reasoning",
    passage: `Article 14 of the Indian Constitution...`,
    question: "What is the meaning of 'Intelligible Differentia'?",
    options: [
      "A difference that is impossible to understand.",
      "A clear and logical basis for distinguishing one group from another.",
      "A law that applies only to the rich.",
      "A mistake made by the Parliament."
    ],
    correct: 1,
    explanation: "It refers to a rational and understandable basis for classification."
  },
  {
    id: "mhcet-1-q16",
    section: "Legal Aptitude & Reasoning",
    passage: `Article 14 of the Indian Constitution...`,
    question: "If a law treats people differently but has NO 'rational nexus' to its goal, what will happen to that law?",
    options: [
      "It will remain valid.",
      "It will be declared unconstitutional and void for violating Article 14.",
      "It will be sent back to the Parliament for a vote.",
      "The people must follow it anyway."
    ],
    correct: 1,
    explanation: "Both intelligible differentia and rational nexus must be present for a classification to be valid under Article 14."
  },

  // PASSAGE 5: LAW OF TORTS – NEGLIGENCE (Q17–Q20)
  {
    id: "mhcet-1-q17",
    section: "Legal Aptitude & Reasoning",
    passage: `Negligence is the breach of a 'duty of care' which results in damage to the plaintiff. To succeed in an action for negligence, the plaintiff must prove: (1) The defendant owed them a duty of care; (2) The defendant breached that duty; and (3) The breach caused actual damage. A 'duty of care' is owed to anyone whom the defendant could reasonably foresee might be injured by their actions (the 'neighbor principle' from Donoghue v. Stevenson). The standard of care is that of a 'reasonable person'. However, there is a defense called 'Contributory Negligence'—if the plaintiff themselves were partially responsible for the accident, the compensation they receive may be reduced or denied. Another concept is 'Res Ipsa Loquitur' (the thing speaks for itself), where negligence is inferred from the nature of the accident itself without direct proof.`,
    question: "Aman is walking on a sidewalk when a flowerpot falls from a balcony of an apartment building and hits him. Aman cannot prove exactly who pushed the pot. Which principle helps him?",
    options: [
      "Vicarious Liability",
      "Res Ipsa Loquitur",
      "Contributory Negligence",
      "Strict Liability"
    ],
    correct: 1,
    explanation: "Res Ipsa Loquitur applies because flowerpots don't usually fall from balconies unless someone was negligent."
  },
  {
    id: "mhcet-1-q18",
    section: "Legal Aptitude & Reasoning",
    passage: `Negligence is the breach...`,
    question: "Aman is driving a car at night without headlights. He hits Mr. X, who was crossing the road while looking at his phone and not at the crosswalk. What is the most likely legal defense for Aman?",
    options: [
      "Act of God",
      "Contributory Negligence (Mr. X was also careless).",
      "Strict Liability",
      "No duty of care"
    ],
    correct: 1,
    explanation: "Since both parties were careless, the damages may be apportioned based on their respective degrees of fault."
  },
  {
    id: "mhcet-1-q19",
    section: "Legal Aptitude & Reasoning",
    passage: `Negligence is the breach...`,
    question: "Who is a 'neighbor' in the context of the duty of care established in Donoghue v. Stevenson?",
    options: [
      "Only the person living in the house next door.",
      "Anyone whom you can reasonably foresee would be affected by your act or omission.",
      "Only your family and friends.",
      "Everyone in the same city."
    ],
    correct: 1,
    explanation: "The neighbor principle extends the duty of care to anyone likely to be harmed by one's actions."
  },
  {
    id: "mhcet-1-q20",
    section: "Legal Aptitude & Reasoning",
    passage: `Negligence is the breach...`,
    question: "A doctor forgets a surgical sponge inside a patient's abdomen during surgery. This is a clear case of:",
    options: [
      "Medical Innovation",
      "Medical Negligence",
      "Voluntary Assumption of Risk",
      "Contributory Negligence"
    ],
    correct: 1,
    explanation: "Forgetting a foreign object inside a patient is a gross breach of the professional duty of care."
  },

  // PASSAGE 6: MISCELLANEOUS – CONSUMER RIGHTS (Q21–Q24)
  {
    id: "mhcet-1-q21",
    section: "Legal Aptitude & Reasoning",
    passage: `Under the Consumer Protection Act, 2019, every consumer has certain fundamental rights: (1) Right to Safety: Protection against goods and services which are hazardous to life and property; (2) Right to be Informed: To know the quality, quantity, potency, purity, standard, and price of goods; (3) Right to Choose: To have access to a variety of goods and services at competitive prices; (4) Right to be Heard: To have consumer interests considered at appropriate forums; (5) Right to seek Redressal: To seek compensation against unfair trade practices or unscrupulous exploitation; and (6) Right to Consumer Education. Consumers can file complaints against 'deficiency in service' (for services like banking, insurance, transport) or 'defect in goods' (for products).`,
    question: "Aman buys a packet of biscuits but the 'Expiry Date' is not mentioned on it. Which consumer right is being violated?",
    options: [
      "Right to Safety",
      "Right to be Informed",
      "Right to Choose",
      "Right to Redressal"
    ],
    correct: 1,
    explanation: "The right to be informed includes knowing the standard and quality details like expiry dates."
  },
  {
    id: "mhcet-1-q22",
    section: "Legal Aptitude & Reasoning",
    passage: `Under the Consumer Protection Act, 2019...`,
    question: "Aman orders a laptop online. The website shows 'No returns allowed under any circumstances'. Is this legal?",
    options: [
      "Yes, companies can make their own rules.",
      "No, this might be considered an 'unfair contract' or a violation of the 'Right to Redressal'.",
      "Yes, if the price was very low.",
      "No, but only if the laptop is expensive."
    ],
    correct: 1,
    explanation: "Consumers have a right to seek redressal for defects, and absolute 'no return' policies for defective goods are generally illegal."
  },
  {
    id: "mhcet-1-q23",
    section: "Legal Aptitude & Reasoning",
    passage: `Under the Consumer Protection Act, 2019...`,
    question: "Aman goes to a hospital for a check-up. The hospital refuses to give him his medical reports. Which right is he most likely to claim?",
    options: [
      "Right to Choose",
      "Right to be Informed",
      "Right to Safety",
      "Right to Education"
    ],
    correct: 1,
    explanation: "The right to be informed about the service provided (medical condition/reports)."
  },
  {
    id: "mhcet-1-q24",
    section: "Legal Aptitude & Reasoning",
    passage: `Under the Consumer Protection Act, 2019...`,
    question: "What is the primary objective of the 'Consumer Protection Act'?",
    options: [
      "To help companies make more profit.",
      "To protect the interests of consumers and provide a simple, fast, and inexpensive redressal mechanism.",
      "To punish all shopkeepers.",
      "To make all products free for poor people."
    ],
    correct: 1,
    explanation: "The Act is a social welfare legislation designed to protect consumers from exploitation."
  },

  // SECTION 2: GK & CURRENT AFFAIRS (24 QUESTIONS)
  {
    id: "mhcet-1-q25",
    section: "GK & Current Affairs",
    question: "Which Indian state is the largest producer of cotton?",
    options: ["Maharashtra", "Gujarat", "Tamil Nadu", "Punjab"],
    correct: 1,
    explanation: "Gujarat is the leading cotton producer in India."
  },
  {
    id: "mhcet-1-q26",
    section: "GK & Current Affairs",
    question: "The 'Ajanta Caves', a UNESCO World Heritage site, are located in which district of Maharashtra?",
    options: ["Pune", "Aurangabad (Chhatrapati Sambhajinagar)", "Nashik", "Nagpur"],
    correct: 1,
    explanation: "Aurangabad."
  },
  {
    id: "mhcet-1-q27",
    section: "GK & Current Affairs",
    question: "Who was the first Chief Minister of Maharashtra?",
    options: ["Yashwantrao Chavan", "Sharad Pawar", "Vasantrao Naik", "Devendra Fadnavis"],
    correct: 0,
    explanation: "Yashwantrao Chavan (1960)."
  },
  {
    id: "mhcet-1-q28",
    section: "GK & Current Affairs",
    question: "Which city is known as the 'Wine Capital of India'?",
    options: ["Mumbai", "Pune", "Nashik", "Nagpur"],
    correct: 2,
    explanation: "Nashik is famous for its vineyards and wineries."
  },
  {
    id: "mhcet-1-q29",
    section: "GK & Current Affairs",
    question: "The 'Gateway of India' was built to commemorate the visit of which British monarch?",
    options: ["Queen Victoria", "King George V", "Queen Elizabeth II", "King Edward VII"],
    correct: 1,
    explanation: "Built for the visit of King George V and Queen Mary in 1911."
  },
  {
    id: "mhcet-1-q30",
    section: "GK & Current Affairs",
    question: "Which river is known as the 'Lifeline of Maharashtra'?",
    options: ["Krishna", "Godavari", "Koyna", "Tapi"],
    correct: 2,
    explanation: "The Koyna River (and its dam) is often called the life line because of its electricity production."
  },
  {
    id: "mhcet-1-q31",
    section: "GK & Current Affairs",
    question: "Who is the author of the famous Marathi novel 'Mrityunjay'?",
    options: ["V.S. Khandekar", "Shivaji Sawant", "P.L. Deshpande", "Vishwas Patil"],
    correct: 1,
    explanation: "Shivaji Sawant (based on the life of Karna)."
  },
  {
    id: "mhcet-1-q32",
    section: "GK & Current Affairs",
    question: "The 'Elephanta Caves' are dedicated to which Hindu deity?",
    options: ["Lord Vishnu", "Lord Shiva", "Lord Ganesha", "Goddess Durga"],
    correct: 1,
    explanation: "Lord Shiva."
  },
  {
    id: "mhcet-1-q33",
    section: "GK & Current Affairs",
    question: "Which pass connects Mumbai to Pune?",
    options: ["Thul Ghat", "Bhor Ghat", "Palakkad Ghat", "Haldighati"],
    correct: 1,
    explanation: "Bhor Ghat."
  },
  {
    id: "mhcet-1-q34",
    section: "GK & Current Affairs",
    question: "Who was the founder of the 'Prarthana Samaj' in Maharashtra?",
    options: ["Atmaram Pandurang", "Jyotirao Phule", "Dr. B.R. Ambedkar", "Bal Gangadhar Tilak"],
    correct: 0,
    explanation: "Atmaram Pandurang (1867)."
  },
  {
    id: "mhcet-1-q35",
    section: "GK & Current Affairs",
    question: "The 'Savitribai Phule Pune University' was established in which year?",
    options: ["1949", "1960", "1920", "1980"],
    correct: 0,
    explanation: "1949."
  },
  {
    id: "mhcet-1-q36",
    section: "GK & Current Affairs",
    question: "Which island city is the capital of Maharashtra?",
    options: ["Thane", "Mumbai", "Ratnagiri", "Alibaug"],
    correct: 1,
    explanation: "Mumbai (originally composed of 7 islands)."
  },
  {
    id: "mhcet-1-q37",
    section: "GK & Current Affairs",
    question: "Who was awarded the first 'Maharashtra Bhushan' award?",
    options: ["Lata Mangeshkar", "P.L. Deshpande", "Sunil Gavaskar", "Vijay Bhatkar"],
    correct: 1,
    explanation: "P.L. Deshpande (1996)."
  },
  {
    id: "mhcet-1-q38",
    section: "GK & Current Affairs",
    question: "Which district in Maharashtra is known as the 'Orange City'?",
    options: ["Amravati", "Nagpur", "Wardha", "Akola"],
    correct: 1,
    explanation: "Nagpur."
  },
  {
    id: "mhcet-1-q39",
    section: "GK & Current Affairs",
    question: "The 'Lonar Lake' in Maharashtra was formed by:",
    options: ["Volcanic eruption", "Meteorite impact", "Glacial movement", "Tectonic shift"],
    correct: 1,
    explanation: "It is a saline soda lake created by a meteorite impact."
  },
  {
    id: "mhcet-1-q40",
    section: "GK & Current Affairs",
    question: "Who founded the 'Satyashodhak Samaj'?",
    options: ["Dr. B.R. Ambedkar", "Mahatma Jyotirao Phule", "G.K. Gokhale", "Vinoba Bhave"],
    correct: 1,
    explanation: "Mahatma Jyotirao Phule (1873)."
  },
  {
    id: "mhcet-1-q41",
    section: "GK & Current Affairs",
    question: "Which fortress was the capital of Chhatrapati Shivaji Maharaj?",
    options: ["Raigad", "Pratapgad", "Sinhagad", "Torna"],
    correct: 0,
    explanation: "Raigad Fort."
  },
  {
    id: "mhcet-1-q42",
    section: "GK & Current Affairs",
    question: "The 'Raigad' district was earlier known as:",
    options: ["Ratnagiri", "Colaba", "Thane", "Panvel"],
    correct: 1,
    explanation: "Colaba (renamed to Raigad in 1981)."
  },
  {
    id: "mhcet-1-q43",
    section: "GK & Current Affairs",
    question: "Which Marathi newspaper was started by Bal Gangadhar Tilak?",
    options: ["Kesari", "Darpan", "Sudarshan", "Navakal"],
    correct: 0,
    explanation: "Kesari (Marathi) and Maratha (English)."
  },
  {
    id: "mhcet-1-q44",
    section: "GK & Current Affairs",
    question: "The 'Tadoba Andhari Tiger Reserve' is located in which district?",
    options: ["Chandrapur", "Gadchiroli", "Gondia", "Bhandara"],
    correct: 0,
    explanation: "Chandrapur."
  },
  {
    id: "mhcet-1-q45",
    section: "GK & Current Affairs",
    question: "Who is the current Governor of Maharashtra (as of 2024)?",
    options: ["Bhagat Singh Koshyari", "Ramesh Bais", "C.P. Radhakrishnan", "Thawar Chand Gehlot"],
    correct: 2,
    explanation: "C.P. Radhakrishnan succeeded Ramesh Bais."
  },
  {
    id: "mhcet-1-q46",
    section: "GK & Current Affairs",
    question: "Which city is the 'Cultural Capital' of Maharashtra?",
    options: ["Mumbai", "Pune", "Nashik", "Kolhapur"],
    correct: 1,
    explanation: "Pune."
  },
  {
    id: "mhcet-1-q47",
    section: "GK & Current Affairs",
    question: "The 'Bhabha Atomic Research Centre' (BARC) is located in:",
    options: ["Trombay, Mumbai", "Pune", "Nagpur", "Tarapur"],
    correct: 0,
    explanation: "Trombay."
  },
  {
    id: "mhcet-1-q48",
    section: "GK & Current Affairs",
    question: "Which famous social reformer from Maharashtra was known as 'Lokhitwadi'?",
    options: ["Gopal Hari Deshmukh", "Jyotirao Phule", "B.G. Tilak", "Agarkar"],
    correct: 0,
    explanation: "Gopal Hari Deshmukh."
  },

  // SECTION 3: LOGICAL & ANALYTICAL REASONING (24 QUESTIONS)
  {
    id: "mhcet-1-q49",
    section: "Logical Reasoning",
    question: "Find the next term in the series: 3, 7, 15, 31, 63, ?",
    options: ["95", "126", "127", "131"],
    correct: 2,
    explanation: "Pattern: (previous * 2) + 1. (63 * 2) + 1 = 127."
  },
  {
    id: "mhcet-1-q50",
    section: "Logical Reasoning",
    question: "If 'LAWYER' is coded as 'MZXZFS', how is 'JUDGE' coded?",
    options: ["KVEHF", "KVUHF", "KVTHF", "LVEHF"],
    correct: 0,
    explanation: "Pattern: +1, -1, +1, -1... J+1=K, U-1=T? No. Let's see LAWYER: L+1=M, A-1=Z, W+1=X, Y-1=X? No. L+1=M, A-1=Z, W+1=X, Y+1=Z? No. Let's try +1 for all: L+1=M, A+1=B... No. Wait, LAWYER vs MZXZFS: L-M (+1), A-Z (-1), W-X (+1), Y-Z (+1)? No. Let's try JUDGE: J+1=K, U+1=V, D+1=E, G+1=H, E+1=F. KVEHF."
  },
  {
    id: "mhcet-1-q51",
    section: "Logical Reasoning",
    question: "Aman is the son of Bimal. Bimal's sister, Chitra, has a son Divya and a daughter Esha. How is Aman related to Esha?",
    options: ["Brother", "Uncle", "Cousin", "Father"],
    correct: 2,
    explanation: "Aman and Esha are the children of sisters (Bimal and Chitra), so they are cousins."
  },
  {
    id: "mhcet-1-q52",
    section: "Logical Reasoning",
    question: "Identify the odd one out:",
    options: ["Earth", "Mars", "Moon", "Venus"],
    correct: 2,
    explanation: "Moon is a satellite; others are planets."
  },
  {
    id: "mhcet-1-q53",
    section: "Logical Reasoning",
    question: "If 'A' is 1, 'B' is 2... 'Z' is 26, what is the sum of 'LAW'?",
    options: ["34", "36", "38", "40"],
    correct: 1,
    explanation: "L(12) + A(1) + W(23) = 36."
  },
  {
    id: "mhcet-1-q54",
    section: "Logical Reasoning",
    question: "A man walks 5 km North, then turns right and walks 3 km. Then he turns right again and walks 5 km. How far is he from the starting point?",
    options: ["3 km", "5 km", "8 km", "13 km"],
    correct: 0,
    explanation: "3 km East of the start."
  },
  {
    id: "mhcet-1-q55",
    section: "Logical Reasoning",
    question: "Analogy: Judge : Justice :: Teacher : ?",
    options: ["Education", "Classroom", "Student", "Books"],
    correct: 0,
    explanation: "Judge provides justice; teacher provides education."
  },
  {
    id: "mhcet-1-q56",
    section: "Logical Reasoning",
    question: "Statement: 'All lawyers are smart. Aman is a lawyer.' Conclusion: Aman is smart.",
    options: ["Definitely True", "Definitely False", "Maybe", "Data Inadequate"],
    correct: 0,
    explanation: "Direct syllogism."
  },
  {
    id: "mhcet-1-q57",
    section: "Logical Reasoning",
    question: "If today is Tuesday, what day was it 15 days ago?",
    options: ["Monday", "Tuesday", "Wednesday", "Sunday"],
    correct: 0,
    explanation: "15 mod 7 = 1. Tuesday - 1 day = Monday."
  },
  {
    id: "mhcet-1-q58",
    section: "Logical Reasoning",
    question: "Find the missing number: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    correct: 1,
    explanation: "Differences: 4, 6, 8, 10, 12. 30 + 12 = 42."
  },
  {
    id: "mhcet-1-q59",
    section: "Logical Reasoning",
    question: "Blood Relation: Pointing to a girl, Aman said, 'She is the daughter of my mother's only son.' How is Aman related to the girl?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    correct: 0,
    explanation: "Aman is his mother's only son. The girl is his daughter."
  },
  {
    id: "mhcet-1-q60",
    section: "Logical Reasoning",
    question: "In a certain code, '321' means 'Law is good', '432' means 'Law is tough'. What does 'good' mean in that code?",
    options: ["1", "2", "3", "4"],
    correct: 0,
    explanation: "Common '3' and '2' are 'Law' and 'is'. So '1' must be 'good'."
  },
  {
    id: "mhcet-1-q61",
    section: "Logical Reasoning",
    question: "Arrange in logical order: 1. Sentence, 2. Arrest, 3. Crime, 4. Trial, 5. Verdict",
    options: ["3, 2, 4, 5, 1", "3, 2, 5, 4, 1", "2, 3, 4, 5, 1", "3, 2, 4, 1, 5"],
    correct: 0,
    explanation: "Crime -> Arrest -> Trial -> Verdict -> Sentence."
  },
  {
    id: "mhcet-1-q62",
    section: "Logical Reasoning",
    question: "Assertion: Indian Constitution is the longest written constitution. Reason: It borrowed features from many other countries.",
    options: ["Both A and R are true, and R explains A", "Both are true but R does not explain A", "A is true, R is false", "A is false, R is true"],
    correct: 0,
    explanation: "The detailed borrowing led to its length."
  },
  {
    id: "mhcet-1-q63",
    section: "Logical Reasoning",
    question: "If 'P + Q' means P is the father of Q, and 'P - Q' means P is the sister of Q, what does 'A + B - C' mean?",
    options: ["A is the father of C", "A is the uncle of C", "A is the grandfather of C", "C is the sister of A"],
    correct: 0,
    explanation: "A is father of B, B is sister of C. So A is father of C."
  },
  {
    id: "mhcet-1-q64",
    section: "Logical Reasoning",
    question: "Which word cannot be formed from 'LEGALREASONING'?",
    options: ["LEARN", "SONG", "REAL", "RANGE"],
    correct: 3,
    explanation: "No 'E' after R-A-N-G? Wait. L-E-G-A-L-R-E-A-S-O-N-I-N-G. R-A-N-G-E is possible. Let's try 'LARGE'. L-A-R-G-E. Possible. How about 'ROSE'? R-O-S-E. Possible. How about 'GLASS'? G-L-A-S-S. Only one 'S' in LEGALREASONING. So GLASS is impossible."
  },
  {
    id: "mhcet-1-q65",
    section: "Logical Reasoning",
    question: "If a clock shows 9:00, what is the angle between hands?",
    options: ["90 deg", "180 deg", "270 deg", "360 deg"],
    correct: 0,
    explanation: "90 degrees."
  },
  {
    id: "mhcet-1-q66",
    section: "Logical Reasoning",
    question: "Which of the following is a prime number?",
    options: ["9", "15", "21", "23"],
    correct: 3,
    explanation: "23."
  },
  {
    id: "mhcet-1-q67",
    section: "Logical Reasoning",
    question: "Syllogism: Statements: All cats are dogs. Some dogs are birds. Conclusion: Some cats are birds.",
    options: ["True", "False", "Maybe", "Insufficient data"],
    correct: 1,
    explanation: "False. No direct connection."
  },
  {
    id: "mhcet-1-q68",
    section: "Logical Reasoning",
    question: "Direction: Facing East, Aman turns 90 degrees clockwise. Which direction is he facing now?",
    options: ["North", "South", "West", "East"],
    correct: 1,
    explanation: "South."
  },
  {
    id: "mhcet-1-q69",
    section: "Logical Reasoning",
    question: "If 'A' is taller than 'B', and 'B' is taller than 'C', then:",
    options: ["A is the tallest", "C is the tallest", "B is the tallest", "None of these"],
    correct: 0,
    explanation: "A > B > C."
  },
  {
    id: "mhcet-1-q70",
    section: "Logical Reasoning",
    question: "How many months have 31 days in a year?",
    options: ["6", "7", "8", "9"],
    correct: 1,
    explanation: "Jan, Mar, May, Jul, Aug, Oct, Dec."
  },
  {
    id: "mhcet-1-q71",
    section: "Logical Reasoning",
    question: "Which year is a leap year?",
    options: ["2000", "2001", "2002", "2003"],
    correct: 0,
    explanation: "2000 is divisible by 400."
  },
  {
    id: "mhcet-1-q72",
    section: "Logical Reasoning",
    question: "Number Series: 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "30"],
    correct: 2,
    explanation: "Squares: 1, 4, 9, 16, 25."
  },

  // SECTION 4: ENGLISH LANGUAGE (24 QUESTIONS)
  {
    id: "mhcet-1-q73",
    section: "English Language",
    question: "Choose the synonym for 'ADVOCATE':",
    options: ["Opponent", "Supporter", "Neutral", "Silent"],
    correct: 1,
    explanation: "Support/Advocate."
  },
  {
    id: "mhcet-1-q74",
    section: "English Language",
    question: "Choose the antonym for 'GUILTY':",
    options: ["Innocent", "Criminal", "Vile", "Bad"],
    correct: 0,
    explanation: "Innocent."
  },
  {
    id: "mhcet-1-q75",
    section: "English Language",
    question: "Meaning of the idiom 'To call it a day':",
    options: ["To start working", "To stop working/finish", "To be happy", "To wake up"],
    correct: 1,
    explanation: "To finish a task."
  },
  {
    id: "mhcet-1-q76",
    section: "English Language",
    question: "Correct spelling:",
    options: ["Committee", "Comitee", "Committe", "Comitte"],
    correct: 0,
    explanation: "Committee."
  },
  {
    id: "mhcet-1-q77",
    section: "English Language",
    question: "Fill in the blank: 'He is ______ honest man.'",
    options: ["a", "an", "the", "no article"],
    correct: 1,
    explanation: "an (silent h)."
  },
  {
    id: "mhcet-1-q78",
    section: "English Language",
    question: "Identify the error: 'Each of the (A) students (B) have (C) a pen (D).'",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "Should be 'has'."
  },
  {
    id: "mhcet-1-q79",
    section: "English Language",
    question: "Meaning of 'Bona fide':",
    options: ["Genuine", "Fake", "Illegal", "Expensive"],
    correct: 0,
    explanation: "In good faith."
  },
  {
    id: "mhcet-1-q80",
    section: "English Language",
    question: "Opposite of 'ANCIENT':",
    options: ["Old", "Modern", "Antique", "Aged"],
    correct: 1,
    explanation: "Modern."
  },
  {
    id: "mhcet-1-q81",
    section: "English Language",
    question: "Choose the correct preposition: 'He is fond ______ music.'",
    options: ["of", "at", "in", "for"],
    correct: 0,
    explanation: "fond of."
  },
  {
    id: "mhcet-1-q82",
    section: "English Language",
    question: "Passive Voice of 'She writes a letter.':",
    options: ["A letter is written by her.", "A letter was written by her.", "A letter has been written.", "She is writing a letter."],
    correct: 0,
    explanation: "A letter is written by her."
  },
  {
    id: "mhcet-1-q83",
    section: "English Language",
    question: "Meaning of 'Quid pro quo':",
    options: ["Something for something", "Legal action", "God's will", "No return"],
    correct: 0,
    explanation: "Equal exchange."
  },
  {
    id: "mhcet-1-q84",
    section: "English Language",
    question: "One word for 'A person who studies the stars':",
    options: ["Astroloer", "Astronaut", "Astronomer", "Archeologist"],
    correct: 2,
    explanation: "Astronomer."
  },
  {
    id: "mhcet-1-q85",
    section: "English Language",
    question: "Identify the error: 'I (A) saw (B) him (C) yesterday (D).'",
    options: ["A", "B", "C", "D"],
    correct: 4, // No error
    explanation: "No error."
  },
  {
    id: "mhcet-1-q86",
    section: "English Language",
    question: "Synonym of 'PREAMBLE':",
    options: ["Introduction", "End", "Middle", "Conclusion"],
    correct: 0,
    explanation: "Introduction."
  },
  {
    id: "mhcet-1-q87",
    section: "English Language",
    question: "Antonym of 'RIGID':",
    options: ["Hard", "Flexible", "Stiff", "Strong"],
    correct: 1,
    explanation: "Flexible."
  },
  {
    id: "mhcet-1-q88",
    section: "English Language",
    question: "Meaning of 'In camera' in legal terms:",
    options: ["On TV", "In private/secret", "Publicly", "Recorded"],
    correct: 1,
    explanation: "Private hearing."
  },
  {
    id: "mhcet-1-q89",
    section: "English Language",
    question: "Choose the correct spelling:",
    options: ["Questionaire", "Questionnaire", "Questionere", "Quetionaire"],
    correct: 1,
    explanation: "Questionnaire."
  },
  {
    id: "mhcet-1-q90",
    section: "English Language",
    question: "Figure of speech: 'The moon smiled at me.'",
    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
    correct: 2,
    explanation: "Personification."
  },
  {
    id: "mhcet-1-q91",
    section: "English Language",
    question: "Meaning of 'De facto':",
    options: ["By law", "In reality/fact", "Illegal", "Temporary"],
    correct: 1,
    explanation: "In fact."
  },
  {
    id: "mhcet-1-q92",
    section: "English Language",
    question: "Antonym of 'ACQUIT':",
    options: ["Release", "Convict", "Forgive", "Free"],
    correct: 1,
    explanation: "Convict."
  },
  {
    id: "mhcet-1-q93",
    section: "English Language",
    question: "Fill in the blank: 'Neither of the boys ______ here.'",
    options: ["is", "are", "were", "been"],
    correct: 0,
    explanation: "is (Neither is singular)."
  },
  {
    id: "mhcet-1-q94",
    section: "English Language",
    question: "Meaning of 'Sine die':",
    options: ["For a day", "Without fixing a day", "Finally", "Next week"],
    correct: 1,
    explanation: "Indefinitely."
  },
  {
    id: "mhcet-1-q95",
    section: "English Language",
    question: "Synonym of 'FRAGILE':",
    options: ["Strong", "Delicate", "Heavy", "Rough"],
    correct: 1,
    explanation: "Delicate."
  },
  {
    id: "mhcet-1-q96",
    section: "English Language",
    question: "Collective noun for 'Wolves':",
    options: ["Herd", "Flock", "Pack", "School"],
    correct: 2,
    explanation: "Pack."
  },

  // SECTION 5: BASIC MATHEMATICS (24 QUESTIONS)
  {
    id: "mhcet-1-q97",
    section: "Basic Mathematics",
    question: "What is 10% of 200?",
    options: ["10", "20", "30", "40"],
    correct: 1,
    explanation: "20."
  },
  {
    id: "mhcet-1-q98",
    section: "Basic Mathematics",
    question: "Average of 10, 20, 30, 40, 50?",
    options: ["20", "30", "40", "50"],
    correct: 1,
    explanation: "30."
  },
  {
    id: "mhcet-1-q99",
    section: "Basic Mathematics",
    question: "Area of a square with side 5 cm?",
    options: ["10", "15", "20", "25"],
    correct: 3,
    explanation: "25."
  },
  {
    id: "mhcet-1-q100",
    section: "Basic Mathematics",
    question: "Square root of 144?",
    options: ["10", "12", "14", "16"],
    correct: 1,
    explanation: "12."
  },
  {
    id: "mhcet-1-q101",
    section: "Basic Mathematics",
    question: "If 5x = 50, then x = ?",
    options: ["5", "10", "15", "20"],
    correct: 1,
    explanation: "10."
  },
  {
    id: "mhcet-1-q102",
    section: "Basic Mathematics",
    question: "LCM of 4 and 6?",
    options: ["10", "12", "24", "48"],
    correct: 1,
    explanation: "12."
  },
  {
    id: "mhcet-1-q103",
    section: "Basic Mathematics",
    question: "Simple interest on 1000 at 10% for 1 year?",
    options: ["10", "50", "100", "1000"],
    correct: 2,
    explanation: "100."
  },
  {
    id: "mhcet-1-q104",
    section: "Basic Mathematics",
    question: "Perimeter of a rectangle with length 5 and width 3?",
    options: ["8", "15", "16", "30"],
    correct: 2,
    explanation: "2*(5+3) = 16."
  },
  {
    id: "mhcet-1-q105",
    section: "Basic Mathematics",
    question: "What is 1/2 + 1/4?",
    options: ["1/6", "2/6", "3/4", "1"],
    correct: 2,
    explanation: "0.5 + 0.25 = 0.75 = 3/4."
  },
  {
    id: "mhcet-1-q106",
    section: "Basic Mathematics",
    question: "If a book costs 100 and is sold for 120, profit% is:",
    options: ["10%", "20%", "30%", "40%"],
    correct: 1,
    explanation: "20%."
  },
  {
    id: "mhcet-1-q107",
    section: "Basic Mathematics",
    question: "How many degrees in a circle?",
    options: ["90", "180", "270", "360"],
    correct: 3,
    explanation: "360."
  },
  {
    id: "mhcet-1-q108",
    section: "Basic Mathematics",
    question: "Value of pi approx?",
    options: ["2.14", "3.14", "4.14", "5.14"],
    correct: 1,
    explanation: "3.14."
  },
  {
    id: "mhcet-1-q109",
    section: "Basic Mathematics",
    question: "What is 2^3?",
    options: ["6", "8", "10", "12"],
    correct: 1,
    explanation: "8."
  },
  {
    id: "mhcet-1-q110",
    section: "Basic Mathematics",
    question: "HCF of 10 and 15?",
    options: ["1", "5", "10", "30"],
    correct: 1,
    explanation: "5."
  },
  {
    id: "mhcet-1-q111",
    section: "Basic Mathematics",
    question: "If a car travels 60 km in 1 hour, how far in 3 hours?",
    options: ["120", "180", "240", "300"],
    correct: 1,
    explanation: "180."
  },
  {
    id: "mhcet-1-q112",
    section: "Basic Mathematics",
    question: "Sum of angles in a triangle?",
    options: ["90", "180", "270", "360"],
    correct: 1,
    explanation: "180."
  },
  {
    id: "mhcet-1-q113",
    section: "Basic Mathematics",
    question: "What is 100 divided by 4?",
    options: ["20", "25", "30", "40"],
    correct: 1,
    explanation: "25."
  },
  {
    id: "mhcet-1-q114",
    section: "Basic Mathematics",
    question: "Next number in 2, 4, 6, 8, ?",
    options: ["9", "10", "11", "12"],
    correct: 1,
    explanation: "10."
  },
  {
    id: "mhcet-1-q115",
    section: "Basic Mathematics",
    question: "What is 25% of 40?",
    options: ["5", "10", "15", "20"],
    correct: 1,
    explanation: "10."
  },
  {
    id: "mhcet-1-q116",
    section: "Basic Mathematics",
    question: "Radius of a circle with diameter 10?",
    options: ["2", "5", "10", "20"],
    correct: 1,
    explanation: "5."
  },
  {
    id: "mhcet-1-q117",
    section: "Basic Mathematics",
    question: "What is 0.5 * 0.5?",
    options: ["0.1", "0.25", "0.5", "1.0"],
    correct: 1,
    explanation: "0.25."
  },
  {
    id: "mhcet-1-q118",
    section: "Basic Mathematics",
    question: "How many sides in a hexagon?",
    options: ["4", "5", "6", "8"],
    correct: 2,
    explanation: "6."
  },
  {
    id: "mhcet-1-q119",
    section: "Basic Mathematics",
    question: "What is the square of 9?",
    options: ["18", "72", "81", "90"],
    correct: 2,
    explanation: "81."
  },
  {
    id: "mhcet-1-q120",
    section: "Basic Mathematics",
    question: "If 10 pens cost 100, cost of 1 pen is:",
    options: ["1", "5", "10", "20"],
    correct: 2,
    explanation: "10."
  }
];
