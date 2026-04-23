import { MockQuestion } from "../constants";

export const NLAT_MOCK_5: MockQuestion[] = [
  // SECTION 1: LEGAL REASONING (30 QUESTIONS)
  // PASSAGE 1: INTELLECTUAL PROPERTY (COPYRIGHT)
  {
    id: "nlat-5-q1",
    section: "Legal Reasoning",
    passage: `Principle: Copyright is a legal right that protects original works of authorship, such as books, music, art, and software. (1) Copyright exists from the moment a work is created and fixed in a tangible form. (2) It protects the "expression" of an idea, not the idea itself. (3) "Fair Use" or "Fair Dealing" is an exception that allows limited use of copyrighted material without permission for purposes like criticism, news reporting, teaching, or research. (4) Plagiarism is a moral wrong, but copyright infringement is a legal one.`,
    question: "Aman has a unique idea for a movie about a time-traveling toaster. He tells the idea to his friend Mr. X. Mr. X writes a screenplay based on that idea and sells it to a studio. Can Aman sue for copyright infringement?",
    options: [
      "Yes, it was his original idea.",
      "No, copyright does not protect ideas, only the 'expression' of ideas in a tangible form (like a screenplay).",
      "Yes, if he can prove he told Mr. X first.",
      "No, but only if the toaster is not a branded toaster."
    ],
    correct: 1,
    explanation: "Copyright law only protects the expression (the script), not the underlying idea (time-traveling toaster)."
  },
  {
    id: "nlat-5-q2",
    section: "Legal Reasoning",
    passage: `Principle: Copyright...`,
    question: "A student photocopies 5 pages of a 500-page textbook to include in their research paper. The author sues for copyright infringement. Is the student liable?",
    options: [
      "Yes, any copying is infringement.",
      "No, this likely falls under the 'Fair Dealing' exception for research and education.",
      "Yes, if the student didn't pay for the textbook.",
      "No, but only if the book is more than 10 years old."
    ],
    correct: 1,
    explanation: "Limited copying for research or education is generally protected as Fair Dealing."
  },
  {
    id: "nlat-5-q3",
    section: "Legal Reasoning",
    passage: `Principle: Copyright...`,
    question: "Aman paints a beautiful landscape. Before he can even show it to anyone, a thief steals it and sells it as his own work. Has copyright been created?",
    options: [
      "No, because it wasn't registered with the government.",
      "Yes, copyright exists from the moment the work is created and fixed in a tangible form (the canvas).",
      "No, because no one saw it.",
      "Yes, but only if he signed the painting."
    ],
    correct: 1,
    explanation: "Copyright is automatic upon creation/fixation."
  },
  {
    id: "nlat-5-q4",
    section: "Legal Reasoning",
    passage: `Principle: Copyright...`,
    question: "A YouTuber uses a 30-second clip of a famous movie to criticize the bad acting in that scene. The movie studio files a copyright claim. What is the YouTuber's best defense?",
    options: [
      "The movie is already famous.",
      "Fair Dealing for the purpose of criticism and review.",
      "He didn't make any money from the video.",
      "The movie studio has too much money anyway."
    ],
    correct: 1,
    explanation: "Criticism and review are standard fair dealing exceptions."
  },
  {
    id: "nlat-5-q5",
    section: "Legal Reasoning",
    passage: `Principle: Copyright...`,
    question: "Aman writes a song that is very similar in 'vibe' and 'style' to a famous song by Ed Sheeran, but the melody and lyrics are completely different. Is this infringement?",
    options: [
      "Yes, he copied the style.",
      "No, copyright doesn't protect a 'vibe' or 'style'; it protects the specific expression (melody/lyrics).",
      "Yes, if people confuse the two songs.",
      "No, but only if he mentions Ed Sheeran in the credits."
    ],
    correct: 1,
    explanation: "Style/vibe is not protected by copyright."
  },
  {
    id: "nlat-5-q6",
    section: "Legal Reasoning",
    passage: `Principle: Copyright...`,
    question: "How long does copyright generally last in India for a literary work?",
    options: [
      "20 years",
      "50 years after creation",
      "Lifetime of the author plus 60 years",
      "Forever"
    ],
    correct: 2,
    explanation: "Standard term for literary/artistic works in India is lifetime + 60 years."
  },

  // PASSAGE 2: LAW OF TORTS (FALSE IMPRISONMENT)
  {
    id: "nlat-5-q7",
    section: "Legal Reasoning",
    passage: `Principle: False Imprisonment is the total restraint of a person's liberty without legal justification. For false imprisonment to occur: (1) There must be a total restraint (blocking only one path while others are open is not enough), (2) The restraint must be against the person's will, and (3) There must be no lawful justification (like a valid arrest warrant). Knowledge of the imprisonment by the victim at the time is not strictly necessary for a legal claim.`,
    question: "Aman is in a room. Mr. X locks the only door from the outside while Aman is asleep. Mr. X unlocks it before Aman wakes up. Is this false imprisonment?",
    options: [
      "No, because Aman didn't know he was locked in.",
      "Yes, there was a total restraint of liberty without justification, even if the victim didn't know at the time.",
      "No, because Aman was not harmed.",
      "Yes, but only if Mr. X kept the key."
    ],
    correct: 1,
    explanation: "The restraint itself is the tort, even if the victim is unaware at the time."
  },
  {
    id: "nlat-5-q8",
    section: "Legal Reasoning",
    passage: `Principle: False Imprisonment...`,
    question: "Aman is walking on a public path. Mr. X blocks his way and says he cannot go forward. However, the paths to the left, right, and back are all open. Is this false imprisonment?",
    options: [
      "Yes, his path was blocked.",
      "No, because the restraint was not 'total'; he had other ways to go.",
      "Yes, because it's a public path.",
      "No, but only if the other paths were easy to walk on."
    ],
    correct: 1,
    explanation: "False imprisonment requires total restraint of movement in all directions."
  },
  {
    id: "nlat-5-q9",
    section: "Legal Reasoning",
    passage: `Principle: False Imprisonment...`,
    question: "A store manager suspects Aman of shoplifting. He asks Aman to stay in the office until the police arrive. Aman stays because he is afraid of being hit. It turns out Aman is innocent. Is the store liable?",
    options: [
      "No, they had a 'suspicion'.",
      "Yes, Aman was restrained against his will without lawful justification (innocence proved later).",
      "No, because Aman wasn't physically tied up.",
      "Yes, but only if the manager used handcuffs."
    ],
    correct: 1,
    explanation: "Psychological pressure or threat of force that results in total restraint is false imprisonment."
  },
  {
    id: "nlat-5-q10",
    section: "Legal Reasoning",
    passage: `Principle: False Imprisonment...`,
    question: "A police officer arrests Aman without a warrant for a crime that Aman did not commit. Is this false imprisonment?",
    options: [
      "No, police can arrest anyone.",
      "Yes, arrest without legal justification (no warrant or no cognizable offense) is false imprisonment.",
      "No, because it's the officer's job.",
      "Yes, but only if Aman is kept for more than 24 hours."
    ],
    correct: 1,
    explanation: "Unjustified arrest by the state is a form of false imprisonment."
  },
  {
    id: "nlat-5-q11",
    section: "Legal Reasoning",
    passage: `Principle: False Imprisonment...`,
    question: "Aman is on a moving bus. He wants to get off at a stop, but the driver refuses to stop the bus and keeps driving for 10 km. Is this false imprisonment?",
    options: [
      "No, the bus is going to a destination.",
      "Yes, Aman's liberty is totally restrained within the bus against his will.",
      "No, Aman should have jumped off.",
      "Yes, but only if the driver was laughing at him."
    ],
    correct: 1,
    explanation: "Forcing someone to stay on a moving vehicle is false imprisonment."
  },
  {
    id: "nlat-5-q12",
    section: "Legal Reasoning",
    passage: `Principle: False Imprisonment...`,
    question: "A parent grounds their 10-year-old child for two days. Is this false imprisonment?",
    options: [
      "Yes, the child is locked up.",
      "No, parents have the lawful authority and justification for reasonable discipline of their children.",
      "Yes, children have human rights.",
      "No, but only if the child has toys in the room."
    ],
    correct: 1,
    explanation: "Parental authority provides a lawful justification for reasonable restraint."
  },

  // PASSAGE 3: LAW OF CONTRACTS (UNDUE INFLUENCE)
  {
    id: "nlat-5-q13",
    section: "Legal Reasoning",
    passage: `Principle: A contract is said to be induced by 'Undue Influence' where the relations subsisting between the parties are such that one of the parties is in a position to dominate the will of the other and uses that position to obtain an unfair advantage. A person is deemed to be in a position to dominate the will of another: (1) where he holds a real or apparent authority, (2) where he stands in a fiduciary relation (trust-based), or (3) where he makes a contract with a person whose mental capacity is temporarily or permanently affected by age, illness, or mental/bodily distress.`,
    question: "A spiritual guru tells his elderly follower, \"If you don't transfer your house to my ashram, you will never attain salvation.\" The follower transfers the house. Can the contract be set aside?",
    options: [
      "No, it was a voluntary religious donation.",
      "Yes, the guru was in a position to dominate the will and used it for an unfair advantage (Undue Influence).",
      "No, salvation is a valid 'consideration'.",
      "Yes, but only if the guru is a fake."
    ],
    correct: 1,
    explanation: "The spiritual/trust relationship allows for the dominance of will."
  },
  {
    id: "nlat-5-q14",
    section: "Legal Reasoning",
    passage: `Principle: Undue Influence...`,
    question: "A doctor tells a patient who is in severe pain that he will only perform the life-saving surgery if the patient sells him his car for ₹1,000. Is this valid?",
    options: [
      "Yes, it's a trade for services.",
      "No, the doctor used the patient's mental/bodily distress to obtain an unfair advantage.",
      "Yes, because the patient agreed in writing.",
      "No, but only because ₹1,000 is too little."
    ],
    correct: 1,
    explanation: "Making a contract with someone in severe distress is a classic case of Undue Influence."
  },
  {
    id: "nlat-5-q15",
    section: "Legal Reasoning",
    passage: `Principle: Undue Influence...`,
    question: "A father sells a piece of land to his son for a price much lower than the market rate. Can the father later sue for Undue Influence?",
    options: [
      "Yes, the son dominated him.",
      "Generally No, unless the father can prove that the son actually used his position to dominate him; the law doesn't assume undue influence just because of a family relationship.",
      "Yes, because any low-price contract is void.",
      "No, because sons have a right to the land."
    ],
    correct: 1,
    explanation: "Undue influence must be proven; it isn't automatically assumed in all family transactions unless one party is particularly vulnerable."
  },
  {
    id: "nlat-5-q16",
    section: "Legal Reasoning",
    passage: `Principle: Undue Influence...`,
    question: "An employer tells an employee, \"Sell me your laptop or I will fire you tomorrow.\" The employee sells the laptop. Is this Undue Influence?",
    options: [
      "No, it's just business.",
      "Yes, the employer holds real authority over the employee and used it to obtain an unfair advantage.",
      "No, because the employee still has a job.",
      "Yes, but only if the laptop was worth more than ₹50,000."
    ],
    correct: 1,
    explanation: "Real authority in an employer-employee relationship can be used for undue influence."
  },
  {
    id: "nlat-5-q17",
    section: "Legal Reasoning",
    passage: `Principle: Undue Influence...`,
    question: "What is the legal consequence of a contract induced by Undue Influence?",
    options: [
      "It is void-ab-initio (void from start).",
      "It is voidable at the option of the party whose consent was so caused.",
      "It is perfectly valid.",
      "It is illegal."
    ],
    correct: 1,
    explanation: "Voidable means the victim can choose to cancel it or keep it."
  },
  {
    id: "nlat-5-q18",
    section: "Legal Reasoning",
    passage: `Principle: Undue Influence...`,
    question: "A lawyer advises his client to sell a property to the lawyer's wife at a low price. The client trusts the lawyer and agrees. Is this Undue Influence?",
    options: [
      "No, the lawyer's wife is a third party.",
      "Yes, a lawyer-client relationship is a 'fiduciary' (trust) relationship, which is prone to undue influence.",
      "No, if the price was at least 50% of market value.",
      "Yes, but only if the lawyer was also the client's friend."
    ],
    correct: 1,
    explanation: "Fiduciary relationships carry a high burden of trust."
  },

  // PASSAGE 4: CONSTITUTIONAL LAW (DIRECTIVE PRINCIPLES)
  {
    id: "nlat-5-q19",
    section: "Legal Reasoning",
    passage: `Principle: Directive Principles of State Policy (DPSP) are guidelines for the State contained in Part IV of the Indian Constitution. Unlike Fundamental Rights (Part III), DPSPs are 'non-justiciable,' meaning they cannot be enforced by any court. However, Article 37 states that they are 'fundamental in the governance of the country' and it shall be the duty of the State to apply these principles in making laws. Examples include the Uniform Civil Code, Separation of Judiciary from Executive, and Protection of Environment.`,
    question: "A citizen sues the Government in court because it has not yet implemented a 'Uniform Civil Code' as mentioned in Article 44 (a DPSP). Will the citizen succeed?",
    options: [
      "Yes, it's in the Constitution.",
      "No, DPSPs are non-justiciable and cannot be enforced by a court order.",
      "Yes, if the citizen is from a minority group.",
      "No, because the government is busy."
    ],
    correct: 1,
    explanation: "DPSPs are not legally enforceable by citizens through courts."
  },
  {
    id: "nlat-5-q20",
    section: "Legal Reasoning",
    passage: `Principle: DPSP...`,
    question: "If a law passed by the State aims to implement a DPSP but violates a Fundamental Right, what happens generally?",
    options: [
      "The DPSP always wins.",
      "The Fundamental Right generally prevails, as they are justiciable and superior (though some exceptions exist).",
      "The law is perfectly valid.",
      "The President decides."
    ],
    correct: 1,
    explanation: "Fundamental Rights are generally superior to DPSPs in terms of enforceability."
  },
  {
    id: "nlat-5-q21",
    section: "Legal Reasoning",
    passage: `Principle: DPSP...`,
    question: "Which of the following is a Directive Principle?",
    options: [
      "Right to Equality",
      "Separation of Judiciary from Executive",
      "Freedom of Speech",
      "Right against Exploitation"
    ],
    correct: 1,
    explanation: "Article 50 provides for the separation of the judiciary from the executive."
  },
  {
    id: "nlat-5-q22",
    section: "Legal Reasoning",
    passage: `Principle: DPSP...`,
    question: "Why did the Constitution makers make DPSPs 'non-justiciable'?",
    options: [
      "Because they didn't think they were important.",
      "Because the newly independent India didn't have enough financial resources to fulfill all these social/economic goals immediately.",
      "Because they wanted the government to have more power.",
      "Because they forgot to add the word 'justiciable'."
    ],
    correct: 1,
    explanation: "Resource constraints were the primary reason for making them aspirational goals."
  },
  {
    id: "nlat-5-q23",
    section: "Legal Reasoning",
    passage: `Principle: DPSP...`,
    question: "The 'Village Panchayats' mentioned in Article 40 is a:",
    options: ["Fundamental Right", "Directive Principle", "Fundamental Duty", "Legal Right"],
    correct: 1,
    explanation: "It's one of the Gandhian principles in Part IV."
  },
  {
    id: "nlat-5-q24",
    section: "Legal Reasoning",
    passage: `Principle: DPSP...`,
    question: "Article 37 says DPSPs are fundamental in the 'governance' of the country. What does this mean?",
    options: [
      "The police must follow them.",
      "The State must keep them in mind while making new laws and policies.",
      "Courts must use them to punish criminals.",
      "The President must read them every day."
    ],
    correct: 1,
    explanation: "They serve as a moral and political guide for lawmakers."
  },

  // PASSAGE 5: MISCELLANEOUS (LEGAL MAXIMS)
  {
    id: "nlat-5-q25",
    section: "Legal Reasoning",
    passage: `Principle: (1) "Caveat Emptor" (Let the buyer beware) - The buyer is responsible for checking the quality of goods before purchasing. (2) "Ubi Jus Ibi Remedium" (Where there is a right, there is a remedy) - If a person's legal right is violated, the law must provide a way to seek justice. (3) "Nemo Dat Quod Non Habet" (No one can give what they do not have) - A person cannot transfer a better title/ownership than they themselves possess.`,
    question: "Aman buys a second-hand car from a private seller. After two days, the engine fails. Aman didn't check the engine before buying. Can he sue the seller?",
    options: [
      "Yes, the seller lied.",
      "No, under Caveat Emptor, the burden was on Aman to check the car's condition.",
      "Yes, because the car is useless now.",
      "No, but only if the seller is a mechanic."
    ],
    correct: 1,
    explanation: "In private sales of second-hand goods, the buyer must be careful (Caveat Emptor)."
  },
  {
    id: "nlat-5-q26",
    section: "Legal Reasoning",
    passage: `Principle: Maxims...`,
    question: "Aman's neighbor blocks Aman's only entrance to his house. Aman goes to court. The neighbor says there is no specific law for 'entrance blocking.' What will the court say?",
    options: [
      "If there's no law, there's no help.",
      "Ubi Jus Ibi Remedium - Since Aman has a right to access his property, the court will find a remedy.",
      "Aman should build a new door.",
      "The neighbor is right."
    ],
    correct: 1,
    explanation: "Courts will create or find a remedy if a clear legal right is being violated."
  },
  {
    id: "nlat-5-q27",
    section: "Legal Reasoning",
    passage: `Principle: Maxims...`,
    question: "A thief steals a watch from Aman and sells it to Mr. X, who pays the full price and doesn't know it's stolen. Aman finds the watch. Who owns it?",
    options: [
      "Mr. X, because he paid for it.",
      "Aman, because the thief had no title to the watch and thus could not transfer ownership to Mr. X (Nemo Dat Quod Non Habet).",
      "They share it.",
      "The government takes it as evidence."
    ],
    correct: 1,
    explanation: "A thief has no legal title, so he cannot give a legal title to anyone else."
  },
  {
    id: "nlat-5-q28",
    section: "Legal Reasoning",
    passage: `Principle: Maxims...`,
    question: "Aman buys a box of chocolates. When he opens it at home, he finds they are all melted. Does Caveat Emptor apply?",
    options: [
      "Yes, he should have opened the box in the shop.",
      "No, Caveat Emptor doesn't apply to 'latent' defects that cannot be seen by reasonable inspection without opening the packaging.",
      "Yes, chocolates are not essential items.",
      "No, but only if he has the bill."
    ],
    correct: 1,
    explanation: "The rule doesn't cover defects that are hidden (latent) and couldn't be checked by a normal buyer."
  },
  {
    id: "nlat-5-q29",
    section: "Legal Reasoning",
    passage: `Principle: Maxims...`,
    question: "Aman is hit by a speeding car. The car owner is very rich and powerful. Does Aman have a remedy?",
    options: [
      "No, powerful people are above the law.",
      "Yes, Ubi Jus Ibi Remedium - The law provides a remedy for injury regardless of the defendant's status.",
      "Only if he can afford a better lawyer.",
      "Yes, but only if the car was insured."
    ],
    correct: 1,
    explanation: "The law provides a remedy for every legal injury."
  },
  {
    id: "nlat-5-q30",
    section: "Legal Reasoning",
    passage: `Principle: Maxims...`,
    question: "Aman finds a ring on the road and sells it to Mr. X. Later, the real owner appears. Who has the better right?",
    options: [
      "Mr. X, because he bought it in good faith.",
      "The real owner, because Aman was just a 'finder' and couldn't give better title than he had (Nemo Dat Quod Non Habet).",
      "Aman, because he found it.",
      "They divide the value of the ring."
    ],
    correct: 1,
    explanation: "Ownership remains with the true owner; a finder doesn't become the owner."
  },

  // SECTION 2: GK & CURRENT AFFAIRS (30 QUESTIONS)
  {
    id: "nlat-5-q31",
    section: "GK & Current Affairs",
    question: "Who was appointed as the 16th Finance Commission Chairman in December 2023?",
    options: ["N.K. Singh", "Arvind Panagariya", "Y.V. Reddy", "Vijay Kelkar"],
    correct: 1,
    explanation: "Arvind Panagariya"
  },
  {
    id: "nlat-5-q32",
    section: "GK & Current Affairs",
    question: "Which country's team won the 'FIH Hockey 5s World Cup 2024' (Women)?",
    options: ["India", "Netherlands", "Argentina", "Germany"],
    correct: 1,
    explanation: "Netherlands (beat India in the final)"
  },
  {
    id: "nlat-5-q33",
    section: "GK & Current Affairs",
    question: "The 'Vayu Shakti-24' exercise was conducted by the Indian Air Force in which state?",
    options: ["Gujarat", "Rajasthan", "Punjab", "Odisha"],
    correct: 1,
    explanation: "Rajasthan (Pokhran)"
  },
  {
    id: "nlat-5-q34",
    section: "GK & Current Affairs",
    question: "Who is the first Indian woman to reach the final of a World Wrestling Championship?",
    options: ["Vinesh Phogat", "Anshu Malik", "Sakshi Malik", "Babita Kumari"],
    correct: 1,
    explanation: "Anshu Malik (2021)"
  },
  {
    id: "nlat-5-q35",
    section: "GK & Current Affairs",
    question: "The 'Sudarshan Setu', India's longest cable-stayed bridge, is in which state?",
    options: ["Maharashtra", "Gujarat", "Goa", "Kerala"],
    correct: 1,
    explanation: "Gujarat (connecting Okha and Beyt Dwarka)"
  },
  {
    id: "nlat-5-q36",
    section: "GK & Current Affairs",
    question: "Who was awarded the 'Jnanpith Award' for 2023 along with Gulzar?",
    options: ["Damodar Mauzo", "Jagat Guru Rambhadracharya", "Amitav Ghosh", "Akkitham"],
    correct: 1,
    explanation: "Jagat Guru Rambhadracharya (Sanskrit scholar)"
  },
  {
    id: "nlat-5-q37",
    section: "GK & Current Affairs",
    question: "Which state government launched the 'Swayam' scheme to provide interest-free loans to youth?",
    options: ["Odisha", "Bihar", "Uttar Pradesh", "Madhya Pradesh"],
    correct: 0,
    explanation: "Odisha"
  },
  {
    id: "nlat-5-q38",
    section: "GK & Current Affairs",
    question: "The 'INDUS-X' summit (2024) for defense acceleration was held between India and which country?",
    options: ["Russia", "USA", "France", "Israel"],
    correct: 1,
    explanation: "USA"
  },
  {
    id: "nlat-5-q39",
    section: "GK & Current Affairs",
    question: "Who is the current Prime Minister of Pakistan (elected in 2024)?",
    options: ["Imran Khan", "Shehbaz Sharif", "Nawaz Sharif", "Asif Ali Zardari"],
    correct: 1,
    explanation: "Shehbaz Sharif"
  },
  {
    id: "nlat-5-q40",
    section: "GK & Current Affairs",
    question: "The 'Indira Gandhi Peace Prize' for 2023 was jointly awarded to Daniel Barenboim and:",
    options: ["Ali Abu Awwad", "Malala Yousafzai", "Greta Thunberg", "Bill Gates"],
    correct: 0,
    explanation: "Ali Abu Awwad"
  },
  {
    id: "nlat-5-q41",
    section: "GK & Current Affairs",
    question: "Which city is known as the 'City of Lakes' in India?",
    options: ["Jaipur", "Udaipur", "Bhopal", "Srinagar"],
    correct: 1,
    explanation: "Udaipur"
  },
  {
    id: "nlat-5-q42",
    section: "GK & Current Affairs",
    question: "The 'World Press Freedom Index 2023' ranked India at:",
    options: ["142nd", "150th", "161st", "180th"],
    correct: 2,
    explanation: "161st"
  },
  {
    id: "nlat-5-q43",
    section: "GK & Current Affairs",
    question: "Who is the current National Security Advisor (NSA) of India?",
    options: ["S. Jaishankar", "Ajit Doval", "Pankaj Saran", "Brijesh Mishra"],
    correct: 1,
    explanation: "Ajit Doval"
  },
  {
    id: "nlat-5-q44",
    section: "GK & Current Affairs",
    question: "Which organization releases the 'Human Development Index' (HDI)?",
    options: ["World Bank", "UNDP", "IMF", "WHO"],
    correct: 1,
    explanation: "UNDP"
  },
  {
    id: "nlat-5-q45",
    section: "GK & Current Affairs",
    question: "The 'Golden Temple' is located in which city?",
    options: ["Ludhiana", "Amritsar", "Chandigarh", "Jalandhar"],
    correct: 1,
    explanation: "Amritsar"
  },
  {
    id: "nlat-5-q46",
    section: "GK & Current Affairs",
    question: "Who was the first Indian to win an individual Gold Medal at the Olympics?",
    options: ["Abhinav Bindra", "Neeraj Chopra", "Leander Paes", "P.V. Sindhu"],
    correct: 0,
    explanation: "Abhinav Bindra (2008 Beijing)"
  },
  {
    id: "nlat-5-q47",
    section: "GK & Current Affairs",
    question: "The 'Pulitzer Prize' is awarded for excellence in:",
    options: ["Science", "Journalism and Arts", "Economics", "Sports"],
    correct: 1,
    explanation: "Journalism and Arts"
  },
  {
    id: "nlat-5-q48",
    section: "GK & Current Affairs",
    question: "Which planet has the maximum number of moons (as per 2023 data)?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correct: 1,
    explanation: "Saturn (surpassed Jupiter in 2023)"
  },
  {
    id: "nlat-5-q49",
    section: "GK & Current Affairs",
    question: "The 'SAARC' headquarters is located in:",
    options: ["New Delhi", "Kathmandu", "Dhaka", "Colombo"],
    correct: 1,
    explanation: "Kathmandu, Nepal"
  },
  {
    id: "nlat-5-q50",
    section: "GK & Current Affairs",
    question: "Who is the author of 'Discovery of India'?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"],
    correct: 1,
    explanation: "Jawaharlal Nehru"
  },
  {
    id: "nlat-5-q51",
    section: "GK & Current Affairs",
    question: "The 'White Revolution' was led by:",
    options: ["M.S. Swaminathan", "Verghese Kurien", "Sam Pitroda", "Baba Amte"],
    correct: 1,
    explanation: "Dr. Verghese Kurien"
  },
  {
    id: "nlat-5-q52",
    section: "GK & Current Affairs",
    question: "Which city is known as the 'Diamond City' of India?",
    options: ["Surat", "Mumbai", "Jaipur", "Panna"],
    correct: 0,
    explanation: "Surat"
  },
  {
    id: "nlat-5-q53",
    section: "GK & Current Affairs",
    question: "The 'Kyoto Protocol' is related to:",
    options: ["International Trade", "Climate Change", "Cyber Security", "Nuclear Weapons"],
    correct: 1,
    explanation: "Climate Change (reduction of GHG emissions)"
  },
  {
    id: "nlat-5-q54",
    section: "GK & Current Affairs",
    question: "Who was the first Viceroy of India?",
    options: ["Lord Dalhousie", "Lord Canning", "Lord Mountbatten", "Lord Bentinck"],
    correct: 1,
    explanation: "Lord Canning (after 1857)"
  },
  {
    id: "nlat-5-q55",
    section: "GK & Current Affairs",
    question: "The 'Silicon Valley of India' is:",
    options: ["Hyderabad", "Bengaluru", "Pune", "Gurugram"],
    correct: 1,
    explanation: "Bengaluru"
  },
  {
    id: "nlat-5-q56",
    section: "GK & Current Affairs",
    question: "Which bank is known as the 'Banker's Bank' in India?",
    options: ["SBI", "RBI", "HDFC", "ICICI"],
    correct: 1,
    explanation: "Reserve Bank of India"
  },
  {
    id: "nlat-5-q57",
    section: "GK & Current Affairs",
    question: "The 'Ayushman Bharat' scheme provides health insurance up to:",
    options: ["1 Lakh", "2 Lakh", "5 Lakh", "10 Lakh"],
    correct: 2,
    explanation: "5 Lakh per family per year"
  },
  {
    id: "nlat-5-q58",
    section: "GK & Current Affairs",
    question: "Who is the first Indian woman to win a Grammy?",
    options: ["Anoushka Shankar", "Tanvi Shah", "Neeti Mohan", "Lata Mangeshkar"],
    correct: 1,
    explanation: "Tanvi Shah (2010)"
  },
  {
    id: "nlat-5-q59",
    section: "GK & Current Affairs",
    question: "The 'Global Environment Outlook' report is published by:",
    options: ["UNEP", "WWF", "Greenpeace", "World Bank"],
    correct: 0,
    explanation: "UNEP"
  },
  {
    id: "nlat-5-q60",
    section: "GK & Current Affairs",
    question: "Which fundamental right cannot be suspended even during Emergency?",
    options: ["Article 19", "Article 14", "Articles 20 and 21", "Article 32"],
    correct: 2,
    explanation: "Articles 20 (Protection in respect of conviction) and 21 (Right to Life)"
  },

  // SECTION 3: VERBAL REASONING (30 QUESTIONS)
  // PASSAGE 1: THE IMPORTANCE OF SLEEP
  {
    id: "nlat-5-q61",
    section: "Verbal Reasoning",
    passage: `Sleep is not a luxury; it is a biological necessity. During sleep, the brain undergoes a process of 'housekeeping,' clearing out metabolic waste and consolidating memories. Chronic sleep deprivation is linked to a host of health problems, including obesity, heart disease, and impaired cognitive function. Scientists have discovered that during deep sleep, the brain's glymphatic system becomes ten times more active, flushing out toxins that accumulate during waking hours. Moreover, sleep is crucial for emotional regulation. A sleep-deprived brain is more reactive to negative stimuli and less able to process complex information. Despite this, modern society often glamorizes 'the grind' and views sleep as wasted time. To maintain peak performance and long-term health, we must prioritize consistent, high-quality sleep of 7-9 hours.`,
    question: "What is the 'housekeeping' process mentioned in the passage?",
    options: [
      "Cleaning the house while asleep.",
      "The brain clearing waste and consolidating memories during sleep.",
      "Dreaming about work.",
      "Repairing muscles."
    ],
    correct: 1,
    explanation: "Stated in the second sentence."
  },
  {
    id: "nlat-5-q62",
    section: "Verbal Reasoning",
    passage: `Sleep is...`,
    question: "The glymphatic system is responsible for:",
    options: [
      "Digesting food.",
      "Flushing out brain toxins during deep sleep.",
      "Controlling heart rate.",
      "Consolidating emotions."
    ],
    correct: 1,
    explanation: "Explicitly mentioned as being active during deep sleep."
  },
  {
    id: "nlat-5-q63",
    section: "Verbal Reasoning",
    passage: `Sleep is...`,
    question: "What is one effect of chronic sleep deprivation mentioned?",
    options: ["Better memory", "Increased reactive to negative stimuli", "Weight loss", "Enhanced creativity"],
    correct: 1,
    explanation: "Passage says the brain becomes more reactive to negative stimuli."
  },
  {
    id: "nlat-5-q64",
    section: "Verbal Reasoning",
    passage: `Sleep is...`,
    question: "Modern society's view of sleep, according to the author, is:",
    options: ["Very respectful", "Incorrectly glamorizing 'the grind' at the expense of sleep", "Scientifically accurate", "Balanced"],
    correct: 1,
    explanation: "Author criticizes society for viewing sleep as wasted time."
  },
  {
    id: "nlat-5-q65",
    section: "Verbal Reasoning",
    passage: `Sleep is...`,
    question: "The recommended amount of sleep is:",
    options: ["4-5 hours", "7-9 hours", "10-12 hours", "Whatever you can get"],
    correct: 1,
    explanation: "Mentioned in the final sentence."
  },
  {
    id: "nlat-5-q66",
    section: "Verbal Reasoning",
    passage: `Sleep is...`,
    question: "The word 'consolidating' in the passage means:",
    options: ["Forgetting", "Strengthening or making solid", "Hiding", "Spreading out"],
    correct: 1,
    explanation: "Consolidating memories means making them permanent/strong."
  },

  // PASSAGE 2: RENEWABLE ENERGY
  {
    id: "nlat-5-q67",
    section: "Verbal Reasoning",
    passage: `The transition to renewable energy is no longer a choice; it is an existential imperative. Fossil fuels, while they powered the industrial revolution, are now the primary drivers of the climate crisis. Solar and wind energy have seen dramatic drops in cost, making them competitive with coal and gas in many parts of the world. However, the 'intermittency' of these sources remains a challenge. The sun doesn't always shine, and the wind doesn't always blow. This requires massive investment in battery storage technology and 'smart grids' that can balance supply and demand. Furthermore, the transition must be 'just'—ensuring that workers in the coal and oil industries are not left behind. A green economy offers the potential for millions of new jobs, but only if we invest in retraining and localized development.`,
    question: "Why is the transition to renewable energy called an 'existential imperative'?",
    options: [
      "Because it is cheap.",
      "Because it is necessary for human survival (due to the climate crisis).",
      "Because it is a new trend.",
      "Because fossil fuels are running out."
    ],
    correct: 1,
    explanation: "Existential imperative implies survival is at stake."
  },
  {
    id: "nlat-5-q68",
    section: "Verbal Reasoning",
    passage: `The transition...`,
    question: "What is the 'intermittency' challenge?",
    options: [
      "The high cost of solar panels.",
      "The fact that solar/wind power is not constantly available (sun sets, wind stops).",
      "The difficulty in mining minerals.",
      "The lack of public interest."
    ],
    correct: 1,
    explanation: "Defined as sun not always shining, etc."
  },
  {
    id: "nlat-5-q69",
    section: "Verbal Reasoning",
    passage: `The transition...`,
    question: "What is needed to solve the intermittency problem?",
    options: ["More coal plants", "Battery storage and smart grids", "Building more houses", "Increasing taxes"],
    correct: 1,
    explanation: "Explicitly stated in the passage."
  },
  {
    id: "nlat-5-q70",
    section: "Verbal Reasoning",
    passage: `The transition...`,
    question: "A 'just' transition means:",
    options: [
      "A fast transition.",
      "Ensuring workers in old energy industries are supported and retrained.",
      "Making sure the transition is only for the rich.",
      "Legalizing all energy types."
    ],
    correct: 1,
    explanation: "Defined as not leaving workers behind."
  },
  {
    id: "nlat-5-q71",
    section: "Verbal Reasoning",
    passage: `The transition...`,
    question: "The word 'imperative' in the passage means:",
    options: ["Optional", "Crucial or essential", "Boring", "Ancient"],
    correct: 1,
    explanation: "Imperative means absolutely necessary."
  },
  {
    id: "nlat-5-q72",
    section: "Verbal Reasoning",
    passage: `The transition...`,
    question: "The tone of the passage is:",
    options: ["Fearful", "Urgent and constructive", "Indifferent", "Aggressive"],
    correct: 1,
    explanation: "Author stresses urgency while proposing solutions like smart grids and retraining."
  },

  // GRAMMAR & VOCABULARY
  {
    id: "nlat-5-q73",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'GREGARIOUS':",
    options: ["Shy", "Sociable; fond of company", "Rude", "Hardworking"],
    correct: 1,
    explanation: "Gregarious means social."
  },
  {
    id: "nlat-5-q74",
    section: "Verbal Reasoning",
    question: "Identify the antonym for 'ALTRUISTIC':",
    options: ["Selfless", "Selfish", "Kind", "Helpful"],
    correct: 1,
    explanation: "Altruistic (selfless) vs Selfish."
  },
  {
    id: "nlat-5-q75",
    section: "Verbal Reasoning",
    question: "Fill in the blank: 'I wish I _____ a bird.'",
    options: ["was", "were", "am", "be"],
    correct: 1,
    explanation: "Subjunctive mood for wishes: 'I wish I were'."
  },
  {
    id: "nlat-5-q76",
    section: "Verbal Reasoning",
    question: "Choose the correct spelling:",
    options: ["Separate", "Seperate", "Seprate", "Saperate"],
    correct: 0,
    explanation: "Separate."
  },
  {
    id: "nlat-5-q77",
    section: "Verbal Reasoning",
    question: "Meaning of the idiom 'To take it with a grain of salt'?",
    options: ["To add salt to food", "To view something with skepticism", "To be very hungry", "To accept everything as true"],
    correct: 1,
    explanation: "Means not believing something completely."
  },
  {
    id: "nlat-5-q78",
    section: "Verbal Reasoning",
    question: "Identify the error: 'Each of (A) the boys (B) have (C) a pen (D).'",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "Should be 'has' (Each is singular)."
  },
  {
    id: "nlat-5-q79",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'METICULOUS':",
    options: ["Careless", "Thorough and precise", "Fast", "Brave"],
    correct: 1,
    explanation: "Meticulous means detailed/precise."
  },
  {
    id: "nlat-5-q80",
    section: "Verbal Reasoning",
    question: "What is a 'person who speaks many languages' called?",
    options: ["Polyglot", "Linguist", "Orator", "Introvert"],
    correct: 0,
    explanation: "Polyglot."
  },
  {
    id: "nlat-5-q81",
    section: "Verbal Reasoning",
    question: "Change to Passive Voice: 'Who wrote this book?'",
    options: ["By whom this book was written?", "By whom was this book written?", "Who was written by this book?", "Book was written by who?"],
    correct: 1,
    explanation: "Correct passive structure for 'Who' questions."
  },
  {
    id: "nlat-5-q82",
    section: "Verbal Reasoning",
    question: "Choose the correct preposition: 'She is married _____ a doctor.'",
    options: ["with", "to", "at", "on"],
    correct: 1,
    explanation: "Married TO someone."
  },
  {
    id: "nlat-5-q83",
    section: "Verbal Reasoning",
    question: "What does 'Prima facie' mean?",
    options: ["At the end", "On the face of it (at first sight)", "In total secret", "After many trials"],
    correct: 1,
    explanation: "Latin for 'at first appearance'."
  },
  {
    id: "nlat-5-q84",
    section: "Verbal Reasoning",
    question: "Identify the antonym of 'OPTIMISTIC':",
    options: ["Hopeful", "Pessimistic", "Cheerful", "Bright"],
    correct: 1,
    explanation: "Optimistic vs Pessimistic."
  },
  {
    id: "nlat-5-q85",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'CANDID':",
    options: ["Dishonest", "Frank and straightforward", "Sweet", "Fake"],
    correct: 1,
    explanation: "Candid means honest/open."
  },
  {
    id: "nlat-5-q86",
    section: "Verbal Reasoning",
    question: "What is 'the study of weather' called?",
    options: ["Meteorology", "Astrology", "Geology", "Ecology"],
    correct: 0,
    explanation: "Meteorology."
  },
  {
    id: "nlat-5-q87",
    section: "Verbal Reasoning",
    question: "Identify the error: 'I prefer (A) coffee (B) than (C) tea (D).'",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "Should be 'prefer coffee TO tea'."
  },
  {
    id: "nlat-5-q88",
    section: "Verbal Reasoning",
    question: "What does 'Mutatis mutandis' mean?",
    options: ["Changing everything", "With the necessary changes having been made", "Without any change", "By force"],
    correct: 1,
    explanation: "Latin used to say a rule applies with minor adjustments."
  },
  {
    id: "nlat-5-q89",
    section: "Verbal Reasoning",
    question: "Choose the correct spelling:",
    options: ["Jewellry", "Jewelry", "Jewellary", "Jewelery"],
    correct: 1,
    explanation: "Jewelry (American) or Jewellery (British). Jewelry is in the options."
  },
  {
    id: "nlat-5-q90",
    section: "Verbal Reasoning",
    question: "What is the synonym of 'ZENITH'?",
    options: ["Bottom", "Peak or highest point", "Middle", "End"],
    correct: 1,
    explanation: "Zenith means the highest point."
  },

  // SECTION 4: LOGICAL REASONING (30 QUESTIONS)
  {
    id: "nlat-5-q91",
    section: "Logical Reasoning",
    question: "If '1' is 'A', '2' is 'B', what is '1-2-3'?",
    options: ["ABC", "CBA", "BCA", "CAB"],
    correct: 0,
    explanation: "A=1, B=2, C=3."
  },
  {
    id: "nlat-5-q92",
    section: "Logical Reasoning",
    question: "Find the missing number: 10, 20, 40, 70, ?",
    options: ["100", "110", "120", "90"],
    correct: 1,
    explanation: "Difference: +10, +20, +30, so +40 = 110."
  },
  {
    id: "nlat-5-q93",
    section: "Logical Reasoning",
    question: "If 1st January 2024 is a Monday, what day is 31st December 2024?",
    options: ["Monday", "Tuesday", "Wednesday", "Sunday"],
    correct: 1,
    explanation: "Leap year starts and ends on different days (Mon -> Tues)."
  },
  {
    id: "nlat-5-q94",
    section: "Logical Reasoning",
    question: "Analogy: Hand : Finger :: Leg : ?",
    options: ["Foot", "Toe", "Knee", "Walk"],
    correct: 1,
    explanation: "Part-of-part relation."
  },
  {
    id: "nlat-5-q95",
    section: "Logical Reasoning",
    question: "Blood Relation: A's sister's husband's daughter is B. How is A related to B?",
    options: ["Uncle/Aunt", "Mother", "Cousin", "Grandmother"],
    correct: 0,
    explanation: "A is the sibling of B's mother."
  },
  {
    id: "nlat-5-q96",
    section: "Logical Reasoning",
    question: "Direction: Aman walks 10m East, 10m South, 10m West. Direction from start?",
    options: ["North", "South", "East", "West"],
    correct: 1,
    explanation: "Forms a partial square, ends 10m South of start."
  },
  {
    id: "nlat-5-q97",
    section: "Logical Reasoning",
    question: "Find the odd one out:",
    options: ["Apple", "Orange", "Potato", "Grapes"],
    correct: 2,
    explanation: "Potato is a vegetable, others are fruits."
  },
  {
    id: "nlat-5-q98",
    section: "Logical Reasoning",
    question: "If 'SUN' is 'TVO' (Each +1), how is 'MOON' coded?",
    options: ["NPPO", "NPPN", "NQPN", "NPOP"],
    correct: 0,
    explanation: "M+1=N, O+1=P, O+1=P, N+1=O."
  },
  {
    id: "nlat-5-q99",
    section: "Logical Reasoning",
    question: "Find the next term: 1, 1, 2, 3, 5, 8, ?",
    options: ["10", "12", "13", "15"],
    correct: 2,
    explanation: "Fibonacci series: 5+8=13."
  },
  {
    id: "nlat-5-q100",
    section: "Logical Reasoning",
    question: "Syllogism: All birds fly. Penguins are birds. Conclusion: Penguins fly.",
    options: ["True", "False", "Logically follows from statements", "None"],
    correct: 2,
    explanation: "In logic, we follow the premises even if factually wrong."
  },
  {
    id: "nlat-5-q101",
    section: "Logical Reasoning",
    question: "Find the missing term: AZ, BY, CX, ?",
    options: ["DW", "EV", "FU", "GT"],
    correct: 0,
    explanation: "First letter forward, second backward."
  },
  {
    id: "nlat-5-q102",
    section: "Logical Reasoning",
    question: "Aman is taller than B. B is shorter than C. Is Aman taller than C?",
    options: ["Yes", "No", "Cannot be determined", "They are equal"],
    correct: 2,
    explanation: "We don't know the relation between A and C."
  },
  {
    id: "nlat-5-q103",
    section: "Logical Reasoning",
    question: "Analogy: 10 : 100 :: 5 : ?",
    options: ["20", "25", "30", "50"],
    correct: 1,
    explanation: "Square."
  },
  {
    id: "nlat-5-q104",
    section: "Logical Reasoning",
    question: "If 'A' is 1, 'B' is 2, how is 'DEAD' coded?",
    options: ["4514", "4524", "4154", "4541"],
    correct: 0,
    explanation: "D=4, E=5, A=1, D=4."
  },
  {
    id: "nlat-5-q105",
    section: "Logical Reasoning",
    question: "Direction: Aman faces North. He turns 270° clockwise. Which direction?",
    options: ["East", "South", "West", "North"],
    correct: 2,
    explanation: "270° clockwise is same as 90° anti-clockwise (West)."
  },
  {
    id: "nlat-5-q106",
    section: "Logical Reasoning",
    question: "Clock: Angle at 9:00?",
    options: ["90", "180", "270", "0"],
    correct: 0,
    explanation: "Smallest angle is 90°."
  },
  {
    id: "nlat-5-q107",
    section: "Logical Reasoning",
    question: "Series: 10, 11, 13, 16, 20, ?",
    options: ["24", "25", "26", "30"],
    correct: 1,
    explanation: "Difference: +1, +2, +3, +4, +5."
  },
  {
    id: "nlat-5-q108",
    section: "Logical Reasoning",
    question: "Blood Relation: Father of my daughter is Aman. Who am I (if I am a woman)?",
    options: ["Aman's Wife", "Aman's Mother", "Aman's Daughter", "None"],
    correct: 0,
    explanation: "Self-explanatory."
  },
  {
    id: "nlat-5-q109",
    section: "Logical Reasoning",
    question: "Find the odd one out:",
    options: ["Red", "Green", "Blue", "Chair"],
    correct: 3,
    explanation: "Chair is an object, others are colors."
  },
  {
    id: "nlat-5-q110",
    section: "Logical Reasoning",
    question: "Analogy: Fire : Hot :: Ice : ?",
    options: ["Water", "Cold", "Solid", "Winter"],
    correct: 1,
    explanation: "Characteristic."
  },
  {
    id: "nlat-5-q111",
    section: "Logical Reasoning",
    question: "If 'APPLE' is 'ELPPA' (Reverse), what is 'MANGO'?",
    options: ["OGNAM", "GNOMA", "NOGMA", "OMAGN"],
    correct: 0,
    explanation: "Reverse of MANGO."
  },
  {
    id: "nlat-5-q112",
    section: "Logical Reasoning",
    question: "Direction: North-West faces South-East (180°). North faces?",
    options: ["East", "West", "South", "North-East"],
    correct: 2,
    explanation: "Opposite of North is South."
  },
  {
    id: "nlat-5-q113",
    section: "Logical Reasoning",
    question: "Syllogism: All pens are tools. All tools are useful. Conclusion: All pens are useful.",
    options: ["True", "False", "Maybe", "None"],
    correct: 0,
    explanation: "Transitive logic."
  },
  {
    id: "nlat-5-q114",
    section: "Logical Reasoning",
    question: "Analogy: 1 : 1 :: 2 : 4 :: 3 : ?",
    options: ["6", "9", "12", "5"],
    correct: 1,
    explanation: "Square."
  },
  {
    id: "nlat-5-q115",
    section: "Logical Reasoning",
    question: "Find missing number: 2, 6, 12, 20, ?",
    options: ["25", "30", "35", "40"],
    correct: 1,
    explanation: "Difference: 4, 6, 8, 10."
  },
  {
    id: "nlat-5-q116",
    section: "Logical Reasoning",
    question: "Blood Relation: My mother's only son is Aman. How am I related to Aman (if I am a man)?",
    options: ["Self", "Brother", "Cousin", "Father"],
    correct: 0,
    explanation: "My mother's only son must be me."
  },
  {
    id: "nlat-5-q117",
    section: "Logical Reasoning",
    question: "Odd one out:",
    options: ["Addition", "Subtraction", "Division", "Number"],
    correct: 3,
    explanation: "Others are operations."
  },
  {
    id: "nlat-5-q118",
    section: "Logical Reasoning",
    question: "Statement: 'Should students wear uniforms?' Argument: I. Yes, it promotes equality. II. No, it suppresses individuality.",
    options: ["Only I", "Only II", "Both", "None"],
    correct: 2,
    explanation: "Both present valid social/personal points."
  },
  {
    id: "nlat-5-q119",
    section: "Logical Reasoning",
    question: "Direction: North-East becomes West. What does South-East become?",
    options: ["North", "South", "East", "North-East"],
    correct: 0,
    explanation: "Rotation of 135° anti-clockwise. SE turns to North."
  },
  {
    id: "nlat-5-q120",
    section: "Logical Reasoning",
    question: "Find next term: 1, 2, 6, 24, ?",
    options: ["100", "120", "150", "200"],
    correct: 1,
    explanation: "Factorials: 1!, 2!, 3!, 4!, 5! = 120."
  },

  // SECTION 5: QUANTITATIVE REASONING (30 QUESTIONS)
  {
    id: "nlat-5-q121",
    section: "Quantitative Reasoning",
    question: "Find the average of 5, 10, 15, 20, 25.",
    options: ["10", "15", "20", "25"],
    correct: 1,
    explanation: "Middle value of AP is 15."
  },
  {
    id: "nlat-5-q122",
    section: "Quantitative Reasoning",
    question: "If 2x + 5 = 15, x = ?",
    options: ["5", "10", "15", "20"],
    correct: 0,
    explanation: "2x = 10, x = 5."
  },
  {
    id: "nlat-5-q123",
    section: "Quantitative Reasoning",
    question: "What is 40% of 500?",
    options: ["100", "200", "250", "300"],
    correct: 1,
    explanation: "0.4 * 500 = 200."
  },
  {
    id: "nlat-5-q124",
    section: "Quantitative Reasoning",
    question: "Volume of a cube with side 3?",
    options: ["9", "18", "27", "36"],
    correct: 2,
    explanation: "3^3 = 27."
  },
  {
    id: "nlat-5-q125",
    section: "Quantitative Reasoning",
    question: "Find the area of a rectangle: L=10, W=5.",
    options: ["15", "25", "50", "100"],
    correct: 2,
    explanation: "10 * 5 = 50."
  },
  {
    id: "nlat-5-q126",
    section: "Quantitative Reasoning",
    question: "If a bike travels 80km in 2 hours, what is speed in km/h?",
    options: ["30", "40", "50", "60"],
    correct: 1,
    explanation: "80 / 2 = 40."
  },
  {
    id: "nlat-5-q127",
    section: "Quantitative Reasoning",
    question: "Square root of 625?",
    options: ["15", "25", "35", "45"],
    correct: 1,
    explanation: "25 * 25 = 625."
  },
  {
    id: "nlat-5-q128",
    section: "Quantitative Reasoning",
    question: "Probability of getting an even number on a die?",
    options: ["1/2", "1/3", "1/6", "2/3"],
    correct: 0,
    explanation: "2, 4, 6 out of 6 is 3/6 = 1/2."
  },
  {
    id: "nlat-5-q129",
    section: "Quantitative Reasoning",
    question: "Solve: 10 + 10 / 10 * 10.",
    options: ["20", "10", "100", "11"],
    correct: 0,
    explanation: "10 + (1 * 10) = 20."
  },
  {
    id: "nlat-5-q130",
    section: "Quantitative Reasoning",
    question: "What is 1% of 1000?",
    options: ["1", "10", "100", "0.1"],
    correct: 1,
    explanation: "10."
  },
  {
    id: "nlat-5-q131",
    section: "Quantitative Reasoning",
    question: "HCF of 12 and 16?",
    options: ["2", "4", "6", "8"],
    correct: 1,
    explanation: "4."
  },
  {
    id: "nlat-5-q132",
    section: "Quantitative Reasoning",
    question: "Area of a triangle: b=10, h=8.",
    options: ["80", "40", "20", "100"],
    correct: 1,
    explanation: "0.5 * 10 * 8 = 40."
  },
  {
    id: "nlat-5-q133",
    section: "Quantitative Reasoning",
    question: "If 1/2 of x is 50, x = ?",
    options: ["25", "50", "100", "200"],
    correct: 2,
    explanation: "x = 100."
  },
  {
    id: "nlat-5-q134",
    section: "Quantitative Reasoning",
    question: "LCM of 4, 5, 6?",
    options: ["30", "60", "120", "20"],
    correct: 1,
    explanation: "60."
  },
  {
    id: "nlat-5-q135",
    section: "Quantitative Reasoning",
    question: "Find next term: 1, 8, 27, 64, ?",
    options: ["100", "125", "150", "200"],
    correct: 1,
    explanation: "Cubes."
  },
  {
    id: "nlat-5-q136",
    section: "Quantitative Reasoning",
    question: "Solve: 1/2 + 1/4.",
    options: ["3/4", "1/6", "2/6", "1/2"],
    correct: 0,
    explanation: "0.5 + 0.25 = 0.75."
  },
  {
    id: "nlat-5-q137",
    section: "Quantitative Reasoning",
    question: "Convert 0.2 to percentage.",
    options: ["2%", "20%", "0.2%", "200%"],
    correct: 1,
    explanation: "20%."
  },
  {
    id: "nlat-5-q138",
    section: "Quantitative Reasoning",
    question: "Sum of angles in a triangle?",
    options: ["90", "180", "360", "270"],
    correct: 1,
    explanation: "180."
  },
  {
    id: "nlat-5-q139",
    section: "Quantitative Reasoning",
    question: "What is 10^0?",
    options: ["0", "1", "10", "undefined"],
    correct: 1,
    explanation: "Anything^0 is 1."
  },
  {
    id: "nlat-5-q140",
    section: "Quantitative Reasoning",
    question: "Mode of 1, 2, 2, 3, 3, 3, 4?",
    options: ["1", "2", "3", "4"],
    correct: 2,
    explanation: "3 occurs most often."
  },
  {
    id: "nlat-5-q141",
    section: "Quantitative Reasoning",
    question: "Largest 2 digit prime number?",
    options: ["91", "93", "97", "99"],
    correct: 2,
    explanation: "97."
  },
  {
    id: "nlat-5-q142",
    section: "Quantitative Reasoning",
    question: "Solve: 100 - 50 / 2.",
    options: ["25", "75", "50", "100"],
    correct: 1,
    explanation: "100 - 25 = 75."
  },
  {
    id: "nlat-5-q143",
    section: "Quantitative Reasoning",
    question: "Radius of a circle with circumference 44? (pi=22/7)",
    options: ["7", "14", "21", "3.5"],
    correct: 0,
    explanation: "2*pi*r = 44; 2*22/7*r = 44; r = 7."
  },
  {
    id: "nlat-5-q144",
    section: "Quantitative Reasoning",
    question: "How many minutes in 2 hours?",
    options: ["60", "100", "120", "150"],
    correct: 2,
    explanation: "2 * 60 = 120."
  },
  {
    id: "nlat-5-q145",
    section: "Quantitative Reasoning",
    question: "Profit if CP=100, SP=120?",
    options: ["20", "10", "30", "50"],
    correct: 0,
    explanation: "120 - 100 = 20."
  },
  {
    id: "nlat-5-q146",
    section: "Quantitative Reasoning",
    question: "Sum of first 4 natural numbers?",
    options: ["6", "10", "15", "4"],
    correct: 1,
    explanation: "1+2+3+4 = 10."
  },
  {
    id: "nlat-5-q147",
    section: "Quantitative Reasoning",
    question: "If a box has 4 sides equal and 90°, it is a:",
    options: ["Rectangle", "Square", "Both", "Circle"],
    correct: 2,
    explanation: "A square is a type of rectangle."
  },
  {
    id: "nlat-5-q148",
    section: "Quantitative Reasoning",
    question: "Value of sqrt(16) + sqrt(9)?",
    options: ["25", "7", "5", "12"],
    correct: 1,
    explanation: "4 + 3 = 7."
  },
  {
    id: "nlat-5-q149",
    section: "Quantitative Reasoning",
    question: "Convert 0.75 to fraction.",
    options: ["1/4", "1/2", "3/4", "4/5"],
    correct: 2,
    explanation: "3/4."
  },
  {
    id: "nlat-5-q150",
    section: "Quantitative Reasoning",
    question: "Probability of picking 'A' from 'APPLE'?",
    options: ["1/5", "2/5", "1/4", "1/3"],
    correct: 0,
    explanation: "1 'A' out of 5 letters."
  }
];
