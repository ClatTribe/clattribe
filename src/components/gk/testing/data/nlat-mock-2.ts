import { MockQuestion } from "../constants";

export const NLAT_MOCK_2: MockQuestion[] = [
  // SECTION 1: LEGAL REASONING (30 QUESTIONS)
  // PASSAGE 1: LAW OF CONTRACTS (PROMISSORY ESTOPPEL)
  {
    id: "nlat-2-q1",
    section: "Legal Reasoning",
    passage: `Principle: The doctrine of Promissory Estoppel states that if one party makes a clear and unambiguous promise to another, intending to create a legal relationship, and the other party acts upon that promise to their detriment, the first party cannot later go back on that promise. This is even if there was no formal contract or "consideration" involved. However, the promise must be definite, and the person relying on it must show they suffered a loss or changed their position significantly because of it.`,
    question: "Aman is a regular customer at a bookstore. The owner, Mr. Gupta, tells Aman, \"I'll give you a 50% discount on all books for the next year because you're such a loyal customer.\" Based on this, Aman cancels his subscription to a rival online library. Two months later, Mr. Gupta starts charging full price. Can Aman sue Mr. Gupta?",
    options: [
      "No, because Aman didn't pay anything for the discount promise (no consideration).",
      "Yes, under Promissory Estoppel, because Aman relied on the promise to his detriment (canceling his library sub).",
      "No, discounts are never legally binding.",
      "Yes, but only if he can prove Mr. Gupta was lying."
    ],
    correct: 1,
    explanation: "Aman relied on a clear promise and suffered a detriment (lost his library sub), so Promissory Estoppel applies."
  },
  {
    id: "nlat-2-q2",
    section: "Legal Reasoning",
    passage: `Principle: The doctrine of Promissory Estoppel...`,
    question: "The Government announces a scheme promising tax tax exemptions for 5 years to any company setting up a factory in a rural district. Reliance Industries builds a massive plant there. After 2 years, the Government withdraws the scheme. Is the Government bound by its promise?",
    options: [
      "No, the Government has the power to change its policies at any time.",
      "Yes, the doctrine of Promissory Estoppel applies to the State as well.",
      "Only if Reliance paid the Government a fee for the scheme.",
      "No, tax laws are exempt from all legal principles."
    ],
    correct: 1,
    explanation: "Promissory Estoppel is highly effective against the State when a private party has changed their position based on a government promise."
  },
  {
    id: "nlat-2-q3",
    section: "Legal Reasoning",
    passage: `Principle: The doctrine of Promissory Estoppel...`,
    question: "Aman's father promises to buy him a car if he scores above 90% in his exams. Aman studies hard and scores 95%. His father refuses to buy the car. Can Aman sue using Promissory Estoppel?",
    options: [
      "Yes, he worked hard (detriment) based on the promise.",
      "No, in family matters, there is usually no intention to create a legal relationship.",
      "Yes, because 95% is a significant achievement.",
      "No, because a car is too expensive for a legal claim."
    ],
    correct: 1,
    explanation: "Family promises generally lack the 'intention to create legal relations' required for Promissory Estoppel."
  },
  {
    id: "nlat-2-q4",
    section: "Legal Reasoning",
    passage: `Principle: The doctrine of Promissory Estoppel...`,
    question: "A company promises an employee a bonus of ₹1 lakh at the end of the year. The employee continues working as usual. At the end of the year, the company refuses. Can the employee use Promissory Estoppel?",
    options: [
      "Yes, he stayed at the job because of the promise.",
      "No, because he didn't suffer any 'detriment' or change his position—he just did his normal job.",
      "Yes, all promises by employers are binding.",
      "No, bonuses are always optional."
    ],
    correct: 1,
    explanation: "To use Promissory Estoppel, the party must show a 'detriment'. Merely doing what you were already supposed to do (normal job) is not enough."
  },
  {
    id: "nlat-2-q5",
    section: "Legal Reasoning",
    passage: `Principle: The doctrine of Promissory Estoppel...`,
    question: "Mr. X owes Mr. Y ₹10,000. Mr. Y says, \"If you pay me ₹7,000 today, I'll forgive the rest.\" Mr. X pays. Later, Mr. Y sues for the remaining ₹3,000. Under Promissory Estoppel, can Mr. Y succeed?",
    options: [
      "Yes, because there was no consideration for the forgiveness of ₹3,000.",
      "No, Mr. Y is estopped from claiming the balance after making a clear promise.",
      "Yes, because ₹10,000 is a larger amount than ₹7,000.",
      "No, but only if the agreement was on stamp paper."
    ],
    correct: 1,
    explanation: "Promissory Estoppel prevents Mr. Y from going back on his promise once Mr. X acted on it by paying the ₹7,000."
  },
  {
    id: "nlat-2-q6",
    section: "Legal Reasoning",
    passage: `Principle: The doctrine of Promissory Estoppel...`,
    question: "A landlord tells a tenant, \"You can pay half rent for the next 6 months because of the lockdown.\" After 3 months, the landlord demands full rent for those months. Is he allowed to do so?",
    options: [
      "Yes, he is the owner of the property.",
      "No, he made a promise that the tenant relied on.",
      "Yes, if the landlord himself is in financial trouble.",
      "No, because the government banned rent collection during lockdown."
    ],
    correct: 1,
    explanation: "The landlord's promise is binding under Promissory Estoppel for the duration specified."
  },
  // PASSAGE 2: CRIMINAL LAW (ATTEMPT)
  {
    id: "nlat-2-q7",
    section: "Legal Reasoning",
    passage: `Principle: Every crime has four stages: (1) Intention, (2) Preparation, (3) Attempt, and (4) Completion. Intention and Preparation are generally not punishable (except in cases like dacoity or waging war against the State). An "Attempt" is a direct movement towards the commission of a crime after the preparation is made. If a person does an act with the intent to commit an offense, and that act fails to achieve its purpose due to circumstances independent of the person's will, the person is liable for "Attempt."`,
    question: "Aman wants to kill Mr. X. He buys a gun and some bullets. He cleans the gun and loads it. Before he can leave his house to find Mr. X, the police arrest him. Is he liable for attempted murder?",
    options: [
      "Yes, he had the intent and the weapon.",
      "No, he was still in the stage of Preparation.",
      "Yes, loading a gun is a direct movement toward the crime.",
      "No, because Mr. X was not even present."
    ],
    correct: 1,
    explanation: "Buying and loading a gun is still Preparation. He hasn't made a 'direct movement' towards killing Mr. X yet."
  },
  {
    id: "nlat-2-q8",
    section: "Legal Reasoning",
    passage: `Principle: Every crime has four stages...`,
    question: "Aman wants to poison Mr. X. He puts poison in Mr. X's tea. However, Mr. X knocks the cup over accidentally before drinking it. Is Aman liable for attempted murder?",
    options: [
      "No, because Mr. X didn't die.",
      "Yes, placing the poison in the cup was a direct movement toward the crime (Attempt).",
      "No, it was just an accident by Mr. X.",
      "Yes, but only if the poison was strong enough to kill."
    ],
    correct: 1,
    explanation: "Aman did everything in his power to commit the crime. The failure was due to independent circumstances (the cup falling)."
  },
  {
    id: "nlat-2-q9",
    section: "Legal Reasoning",
    passage: `Principle: Every crime has four stages...`,
    question: "Aman reaches into Mr. X's pocket to steal his wallet. The pocket is empty. Is Aman liable for attempted theft?",
    options: [
      "No, because there was nothing to steal.",
      "Yes, he committed an act toward the crime of theft with the necessary intent.",
      "No, theft requires a 'taking' of property.",
      "Yes, but only if he also hit Mr. X."
    ],
    correct: 1,
    explanation: "An attempt to commit a crime is punishable even if the crime is impossible (like stealing from an empty pocket)."
  },
  {
    id: "nlat-2-q10",
    section: "Legal Reasoning",
    passage: `Principle: Every crime has four stages...`,
    question: "Aman intends to burn down a building. He brings a container of petrol and matches to the site. He pours the petrol on the walls. Just as he is about to strike the match, he sees a police officer and runs away. Is he liable for attempted arson?",
    options: [
      "No, because he didn't light the fire.",
      "Yes, pouring the petrol was a direct movement beyond mere preparation.",
      "No, because he abandoned the crime voluntarily.",
      "Yes, but only if the building was occupied."
    ],
    correct: 1,
    explanation: "Pouring petrol is a significant step beyond preparation. Running away at the last second doesn't erase the attempt."
  },
  {
    id: "nlat-2-q11",
    section: "Legal Reasoning",
    passage: `Principle: Every crime has four stages...`,
    question: "Aman hates his neighbor. He writes in his diary, \"I will kill my neighbor tomorrow.\" The police find the diary. Can they charge him with attempt?",
    options: [
      "Yes, the intent is clear.",
      "No, this is only the stage of Intention, which is not punishable.",
      "Yes, writing it down is a movement towards the crime.",
      "No, unless the neighbor also saw the diary."
    ],
    correct: 1,
    explanation: "Mere intention is never punishable in criminal law (with very few exceptions)."
  },
  {
    id: "nlat-2-q12",
    section: "Legal Reasoning",
    passage: `Principle: Every crime has four stages...`,
    question: "Aman fires a gun at a person whom he believes is Mr. X. It turns out to be a wooden mannequin. Is Aman liable for attempted murder?",
    options: [
      "No, you can't kill a mannequin.",
      "Yes, he had the intent and committed the act; the impossibility of the crime doesn't matter.",
      "No, because he made a mistake of fact.",
      "Yes, but only if the mannequin was life-sized."
    ],
    correct: 1,
    explanation: "This is a classic case of an 'impossible attempt,' which is still punishable."
  },
  // PASSAGE 3: LAW OF TORTS (NEGLIGENCE - RES IPSA LOQUITUR)
  {
    id: "nlat-2-q13",
    section: "Legal Reasoning",
    passage: `Principle: "Res Ipsa Loquitur" means "the thing speaks for itself." It is a legal rule that allows a court to infer negligence even without direct evidence of how the accident happened, provided that: (1) the thing that caused the injury was under the exclusive control of the defendant, and (2) the accident is such that it would not ordinarily happen if those in control used proper care. In such cases, the burden of proof shifts to the defendant to prove they were NOT negligent.`,
    question: "Aman is walking past a flour mill when a barrel of flour falls out of a window and hits him. Aman cannot prove exactly why the barrel fell. Who is liable?",
    options: [
      "Aman must prove the owner was careless.",
      "The flour mill owner is liable under Res Ipsa Loquitur as barrels don't just fall out of windows without negligence.",
      "No one is liable; it's an accident.",
      "Only the person who physically pushed the barrel is liable."
    ],
    correct: 1,
    explanation: "Barrels falling from windows is a classic example of Res Ipsa Loquitur."
  },
  {
    id: "nlat-2-q14",
    section: "Legal Reasoning",
    passage: `Principle: "Res Ipsa Loquitur"...`,
    question: "Aman undergoes a minor surgery on his leg. When he wakes up, he has a burn on his shoulder. The doctors cannot explain how it happened. Can Aman use Res Ipsa Loquitur?",
    options: [
      "No, he must find the specific nurse who caused it.",
      "Yes, because a shoulder burn doesn't happen during leg surgery unless someone was negligent.",
      "No, surgery is too complex for this principle.",
      "Yes, but only if he can prove the doctors were tired."
    ],
    correct: 1,
    explanation: "The injury was in a completely different area and under exclusive control of the surgical team."
  },
  {
    id: "nlat-2-q15",
    section: "Legal Reasoning",
    passage: `Principle: "Res Ipsa Loquitur"...`,
    question: "Aman is a passenger on a train. The train suddenly derails and crashes. The railway company says Aman must prove exactly what caused the derailment. Is this correct?",
    options: [
      "Yes, the plaintiff always carries the burden of proof.",
      "No, Res Ipsa Loquitur applies; trains don't derail if the tracks and engines are properly maintained.",
      "Yes, because derailments can be caused by sabotage.",
      "No, but only if the train was overspeeding."
    ],
    correct: 1,
    explanation: "A derailment is an event that ordinarily doesn't happen without negligence in maintenance or operation."
  },
  {
    id: "nlat-2-q16",
    section: "Legal Reasoning",
    passage: `Principle: "Res Ipsa Loquitur"...`,
    question: "Aman is walking under a construction crane. A heavy metal beam falls and crushes his car. The construction company says it was a \"freak wind.\" Can Res Ipsa Loquitur be used?",
    options: [
      "No, because the wind is an Act of God.",
      "Yes, cranes and beams are under exclusive control, and beams don't fall if properly secured.",
      "No, Aman should have seen the crane and avoided it.",
      "Yes, but only if the crane operator was drunk."
    ],
    correct: 1,
    explanation: "Construction companies must secure their equipment; beams falling is indicative of negligence."
  },
  {
    id: "nlat-2-q17",
    section: "Legal Reasoning",
    passage: `Principle: "Res Ipsa Loquitur"...`,
    question: "Aman eats at a restaurant and finds a rusted bolt inside his burger. He suffers a broken tooth. The restaurant says he must prove how the bolt got there. What is the legal position?",
    options: [
      "Aman must find the supplier of the burger bun.",
      "Res Ipsa Loquitur applies; bolts don't end up in burgers without negligence in the kitchen.",
      "It's the chef's personal liability, not the restaurant's.",
      "Aman should have chewed more carefully."
    ],
    correct: 1,
    explanation: "Food preparation is under the restaurant's control, and foreign objects are evidence of negligence."
  },
  {
    id: "nlat-2-q18",
    section: "Legal Reasoning",
    passage: `Principle: "Res Ipsa Loquitur"...`,
    question: "An airplane disappears over the ocean without any distress signal. The weather was perfect. Can the families of the passengers use Res Ipsa Loquitur against the airline?",
    options: [
      "No, because the wreckage hasn't been found.",
      "Yes, modern planes don't just disappear in good weather without negligence or maintenance failure.",
      "No, it could be a hidden design flaw in the plane.",
      "Yes, but only if the pilot had a history of illness."
    ],
    correct: 1,
    explanation: "The absence of external factors (like bad weather) makes negligence the most likely inference."
  },
  // PASSAGE 4: CONSTITUTIONAL LAW (FREEDOM OF RELIGION)
  {
    id: "nlat-2-q19",
    section: "Legal Reasoning",
    passage: `Principle: Article 25 of the Indian Constitution guarantees the freedom of conscience and the right to freely profess, practice, and propagate religion. However, this right is subject to: (1) Public order, (2) Morality, and (3) Health. The State can also regulate economic, financial, or political activities associated with religious practices. Furthermore, Article 26 allows religious denominations to manage their own affairs in matters of religion, but again, subject to public order, morality, and health.`,
    question: "A religious group wants to hold a massive gathering in the middle of a busy highway, claiming it's an essential part of their religious practice. The police deny permission. Is this a violation of Article 25?",
    options: [
      "Yes, religious rights are absolute.",
      "No, the right is subject to 'Public Order,' and blocking a highway disrupts public order.",
      "Yes, because the highway is a public place.",
      "No, because only established religions have rights."
    ],
    correct: 1,
    explanation: "Public order is a valid ground for restricting religious gatherings."
  },
  {
    id: "nlat-2-q20",
    section: "Legal Reasoning",
    passage: `Principle: Article 25...`,
    question: "A particular sect practices a ritual that involves animal sacrifice in a public park. The State bans this practice citing hygiene and public health concerns. Is this valid?",
    options: [
      "No, rituals are core to religious freedom.",
      "Yes, the right to practice religion is subject to 'Health' and 'Morality'.",
      "No, because the park belongs to everyone.",
      "Yes, but only if the animals were endangered."
    ],
    correct: 1,
    explanation: "Health and morality are specific constitutional grounds for restricting religious practices."
  },
  {
    id: "nlat-2-q21",
    section: "Legal Reasoning",
    passage: `Principle: Article 25...`,
    question: "A religious organization runs a profitable hospital. The Government wants to audit the hospital's financial records. The organization refuses, citing Article 26. What is the legal position?",
    options: [
      "The Government cannot audit religious institutions.",
      "The Government can regulate financial activities associated with religious practices.",
      "Only the Supreme Court can audit them.",
      "They are exempt from all taxes and audits."
    ],
    correct: 1,
    explanation: "Article 25 allows the State to regulate financial/economic activities associated with religion."
  },
  {
    id: "nlat-2-q22",
    section: "Legal Reasoning",
    passage: `Principle: Article 25...`,
    question: "A school run by a religious minority group refuses to allow a student to wear a specific religious symbol that is mandatory in her faith. The school says it violates their uniform code. Does the student have a right under Article 25?",
    options: [
      "No, the school's rules are final.",
      "Yes, unless wearing the symbol violates public order, morality, or health.",
      "Only if the student is from a majority religion.",
      "No, Article 25 only applies in temples/churches."
    ],
    correct: 1,
    explanation: "The right to 'practice' religion includes wearing mandatory symbols, provided they don't violate the three restrictions."
  },
  {
    id: "nlat-2-q23",
    section: "Legal Reasoning",
    passage: `Principle: Article 25...`,
    question: "A State law prohibits loud music during religious festivals after 10 PM. A temple committee argues this violates their right to propagate religion. Is the law valid?",
    options: [
      "No, the Gods don't have a time limit.",
      "Yes, the restriction is in the interest of 'Public Order' and the 'Health' of residents (noise pollution).",
      "No, Article 25 is above local laws.",
      "Yes, but only for certain religions."
    ],
    correct: 1,
    explanation: "Noise pollution regulations fall under 'Health' and 'Public Order' restrictions."
  },
  {
    id: "nlat-2-q24",
    section: "Legal Reasoning",
    passage: `Principle: Article 25...`,
    question: "A person tries to forcibly convert people to his religion by offering them money and free housing. The State passes a law banning such 'induced' conversions. Is the law constitutional?",
    options: [
      "No, everyone has the right to 'propagate' their religion.",
      "Yes, the right to propagate does not include the right to convert others through force or allurement.",
      "Only if the person is from another country.",
      "No, because the State cannot interfere with faith."
    ],
    correct: 1,
    explanation: "The Supreme Court has held that the right to propagate does not include the right to convert by force or fraud."
  },
  // PASSAGE 5: MISCELLANEOUS LEGAL MAXIMS
  {
    id: "nlat-2-q25",
    section: "Legal Reasoning",
    passage: `Principle: (1) "Volenti Non Fit Injuria" (To a willing person, no injury is done) - If a person voluntarily consents to a known risk, they cannot later sue for damages. (2) "Damnum Sine Injuria" (Damage without injury) - If a person suffers actual loss but no legal right is violated, no action lies in law. (3) "Injuria Sine Damno" (Injury without damage) - If a legal right is violated, the person can sue even if no actual financial loss occurred.`,
    question: "Aman goes to watch a cricket match at a stadium. A batsman hits a six, and the ball hits Aman in the face, breaking his nose. Can Aman sue the stadium or the batsman?",
    options: [
      "Yes, they should have ensured safety.",
      "No, under Volenti Non Fit Injuria, Aman consented to the inherent risks of watching the match.",
      "Yes, because he suffered a physical injury.",
      "Only if the batsman did it on purpose."
    ],
    correct: 1,
    explanation: "Spectators at sports events are assumed to consent to the normal risks of the game."
  },
  {
    id: "nlat-2-q26",
    section: "Legal Reasoning",
    passage: `Principle: Volenti Non Fit Injuria...`,
    question: "Aman opens a high-quality coffee shop next to Mr. X's existing coffee shop. Because Aman's coffee is better, all of Mr. X's customers move to Aman's shop. Mr. X suffers heavy financial loss. Can Mr. X sue Aman?",
    options: [
      "Yes, Aman deliberately caused him loss.",
      "No, this is a case of Damnum Sine Injuria—loss occurred, but no legal right was violated.",
      "Yes, because Aman was 'trespassing' on his business territory.",
      "Only if Aman's prices were lower."
    ],
    correct: 1,
    explanation: "Lawful competition is not a violation of legal rights, even if it causes financial loss."
  },
  {
    id: "nlat-2-q27",
    section: "Legal Reasoning",
    passage: `Principle: Volenti Non Fit Injuria...`,
    question: "Aman is a registered voter. He goes to the polling station, but the officer wrongly prevents him from voting. Aman's preferred candidate wins anyway. Aman sues the officer. Will he succeed?",
    options: [
      "No, because he didn't suffer any damage (his candidate won).",
      "Yes, this is Injuria Sine Damno—his legal right to vote was violated, so he can sue regardless of actual loss.",
      "No, because it was a human error.",
      "Only if the candidate had lost by one vote."
    ],
    correct: 1,
    explanation: "Violating a fundamental legal right (like voting) is actionable even without financial or physical damage (Ashby v. White)."
  },
  {
    id: "nlat-2-q28",
    section: "Legal Reasoning",
    passage: `Principle: Volenti Non Fit Injuria...`,
    question: "Aman agrees to be part of a medical experiment. He signs a form acknowledging that the drug may have side effects. He suffers a skin rash. Can he sue for damages?",
    options: [
      "Yes, doctors must always be careful.",
      "No, Volenti Non Fit Injuria applies because he consented to the known risk.",
      "Yes, because side effects are not 'natural'.",
      "No, but only if the drug was free."
    ],
    correct: 1,
    explanation: "Signed consent to a known risk bars a claim for damages when that risk manifests."
  },
  {
    id: "nlat-2-q29",
    section: "Legal Reasoning",
    passage: `Principle: Volenti Non Fit Injuria...`,
    question: "Aman builds a wall on his own land that blocks the beautiful sunset view from his neighbor's balcony. The neighbor's property value drops. Can the neighbor sue?",
    options: [
      "Yes, it's a violation of his 'right to light'.",
      "No, this is Damnum Sine Injuria; there is no legal right to an uninterrupted view.",
      "Yes, because the wall was built out of spite.",
      "No, but only if the wall is less than 10 feet high."
    ],
    correct: 1,
    explanation: "A view is a luxury, not a legal right. Blocking it is not an 'injury' in the legal sense."
  },
  {
    id: "nlat-2-q30",
    section: "Legal Reasoning",
    passage: `Principle: Volenti Non Fit Injuria...`,
    question: "Aman is walking on a narrow footpath. A cyclist, trying to avoid a child, accidentally bumps into Aman. Aman falls into a puddle but is not injured. Can Aman sue?",
    options: [
      "No, because there was no injury.",
      "Yes, any unauthorized contact is a 'technical' injury (battery) under Injuria Sine Damno.",
      "No, because the cyclist was saving a child.",
      "Yes, but only for the cost of cleaning his clothes."
    ],
    correct: 1,
    explanation: "Unauthorized physical contact is a violation of the right to bodily integrity, actionable even without injury."
  },

  // SECTION 2: GK & CURRENT AFFAIRS (30 QUESTIONS)
  {
    id: "nlat-2-q31",
    section: "GK & Current Affairs",
    question: "Which country's lunar lander 'Peregrine' failed to reach the Moon in January 2024?",
    options: ["Japan", "USA", "Russia", "India"],
    correct: 1,
    explanation: "USA (private mission by Astrobotic)"
  },
  {
    id: "nlat-2-q32",
    section: "GK & Current Affairs",
    question: "Who won the Best Actor award at the 69th Filmfare Awards (2024)?",
    options: ["Shah Rukh Khan", "Ranbir Kapoor", "Vicky Kaushal", "Ranveer Singh"],
    correct: 1,
    explanation: "Ranbir Kapoor (for Animal)"
  },
  {
    id: "nlat-2-q33",
    section: "GK & Current Affairs",
    question: "The 'Smart Food' initiative is primarily focused on which group of crops?",
    options: ["Wheat and Rice", "Millets", "Pulses", "Oilseeds"],
    correct: 1,
    explanation: "Millets (to promote nutrition and sustainability)"
  },
  {
    id: "nlat-2-q34",
    section: "GK & Current Affairs",
    question: "Which city is known as the 'Electronic City of India'?",
    options: ["Hyderabad", "Bengaluru", "Chennai", "Pune"],
    correct: 1,
    explanation: "Bengaluru"
  },
  {
    id: "nlat-2-q35",
    section: "GK & Current Affairs",
    question: "The 'Pravasi Bharatiya Divas' is celebrated on January 9 to commemorate whose return to India?",
    options: ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
    correct: 1,
    explanation: "Mahatma Gandhi (returned from South Africa in 1915)"
  },
  {
    id: "nlat-2-q36",
    section: "GK & Current Affairs",
    question: "In 2024, which country officially pulled out of the 'Treaty on Conventional Armed Forces in Europe' (CFE)?",
    options: ["Ukraine", "Russia", "USA", "Germany"],
    correct: 1,
    explanation: "Russia"
  },
  {
    id: "nlat-2-q37",
    section: "GK & Current Affairs",
    question: "Which Indian public sector bank recently launched the 'Green Rupee Term Deposit'?",
    options: ["HDFC Bank", "State Bank of India (SBI)", "Punjab National Bank", "Bank of Baroda"],
    correct: 1,
    explanation: "SBI"
  },
  {
    id: "nlat-2-q38",
    section: "GK & Current Affairs",
    question: "The 'G-20' group includes 19 countries and which other entity as a permanent member?",
    options: ["United Nations", "European Union", "African Union", "ASEAN"],
    correct: 1,
    explanation: "European Union (and now African Union joined in 2023)"
  },
  {
    id: "nlat-2-q39",
    section: "GK & Current Affairs",
    question: "Who is the author of the book 'The Idea of India'?",
    options: ["Shashi Tharoor", "Sunil Khilnani", "Amartya Sen", "Ramachandra Guha"],
    correct: 1,
    explanation: "Sunil Khilnani"
  },
  {
    id: "nlat-2-q40",
    section: "GK & Current Affairs",
    question: "The 'Narmada River' flows into which water body?",
    options: ["Bay of Bengal", "Arabian Sea", "Indian Ocean", "Gulf of Mannar"],
    correct: 1,
    explanation: "Arabian Sea"
  },
  {
    id: "nlat-2-q41",
    section: "GK & Current Affairs",
    question: "Which article of the Indian Constitution empowers the President to impose President's Rule in a State?",
    options: ["Article 352", "Article 356", "Article 360", "Article 370"],
    correct: 1,
    explanation: "Article 356"
  },
  {
    id: "nlat-2-q42",
    section: "GK & Current Affairs",
    question: "Who was the first woman to be appointed as the CEO and Chairperson of the Railway Board?",
    options: ["Jaya Varma Sinha", "Soma Mondal", "Madhabi Puri Buch", "Nirmala Sitharaman"],
    correct: 0,
    explanation: "Jaya Varma Sinha"
  },
  {
    id: "nlat-2-q43",
    section: "GK & Current Affairs",
    question: "The 'Kaziranga National Park' is famous for which animal?",
    options: ["Royal Bengal Tiger", "One-horned Rhinoceros", "Asiatic Lion", "Snow Leopard"],
    correct: 1,
    explanation: "One-horned Rhinoceros"
  },
  {
    id: "nlat-2-q44",
    section: "GK & Current Affairs",
    question: "What is the capital of Ukraine?",
    options: ["Warsaw", "Kyiv", "Moscow", "Budapest"],
    correct: 1,
    explanation: "Kyiv"
  },
  {
    id: "nlat-2-q45",
    section: "GK & Current Affairs",
    question: "Which Indian sportsperson is known as 'The Payyoli Express'?",
    options: ["P.T. Usha", "Hima Das", "Neeraj Chopra", "Milkha Singh"],
    correct: 0,
    explanation: "P.T. Usha"
  },
  {
    id: "nlat-2-q46",
    section: "GK & Current Affairs",
    question: "The 'Blue Revolution' is related to the production of:",
    options: ["Indigo", "Fish", "Milk", "Petroleum"],
    correct: 1,
    explanation: "Fish"
  },
  {
    id: "nlat-2-q47",
    section: "GK & Current Affairs",
    question: "Who is the current Governor of the Reserve Bank of India (as of 2024)?",
    options: ["Raghuram Rajan", "Shaktikanta Das", "Urjit Patel", "Nirmala Sitharaman"],
    correct: 1,
    explanation: "Shaktikanta Das"
  },
  {
    id: "nlat-2-q48",
    section: "GK & Current Affairs",
    question: "The 'World Environment Day' is celebrated on:",
    options: ["April 22", "June 5", "September 16", "December 1"],
    correct: 1,
    explanation: "June 5"
  },
  {
    id: "nlat-2-q49",
    section: "GK & Current Affairs",
    question: "Which country launched the 'World's first 4th-generation nuclear reactor' in 2023?",
    options: ["USA", "China", "Russia", "France"],
    correct: 1,
    explanation: "China"
  },
  {
    id: "nlat-2-q50",
    section: "GK & Current Affairs",
    question: "The 'International Day of Yoga' is observed on:",
    options: ["June 21", "January 26", "October 2", "August 15"],
    correct: 0,
    explanation: "June 21"
  },
  {
    id: "nlat-2-q51",
    section: "GK & Current Affairs",
    question: "Who won the ICC Men's Cricket World Cup 2023?",
    options: ["India", "Australia", "England", "South Africa"],
    correct: 1,
    explanation: "Australia"
  },
  {
    id: "nlat-2-q52",
    section: "GK & Current Affairs",
    question: "The 'Pradhan Mantri Jan Dhan Yojana' was launched for:",
    options: ["Women Empowerment", "Financial Inclusion", "Housing for All", "Digital Literacy"],
    correct: 1,
    explanation: "Financial Inclusion"
  },
  {
    id: "nlat-2-q53",
    section: "GK & Current Affairs",
    question: "Which city is the headquarters of the World Health Organization (WHO)?",
    options: ["New York", "Geneva", "Paris", "London"],
    correct: 1,
    explanation: "Geneva"
  },
  {
    id: "nlat-2-q54",
    section: "GK & Current Affairs",
    question: "The 'Quit India Movement' was launched in which year?",
    options: ["1920", "1930", "1942", "1947"],
    correct: 2,
    explanation: "1942"
  },
  {
    id: "nlat-2-q55",
    section: "GK & Current Affairs",
    question: "Who was the first woman to win a Nobel Prize?",
    options: ["Mother Teresa", "Marie Curie", "Indira Gandhi", "Malala Yousafzai"],
    correct: 1,
    explanation: "Marie Curie"
  },
  {
    id: "nlat-2-q56",
    section: "GK & Current Affairs",
    question: "The 'Great Barrier Reef' is located in which country?",
    options: ["Brazil", "Australia", "Mexico", "South Africa"],
    correct: 1,
    explanation: "Australia"
  },
  {
    id: "nlat-2-q57",
    section: "GK & Current Affairs",
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1,
    explanation: "Mars"
  },
  {
    id: "nlat-2-q58",
    section: "GK & Current Affairs",
    question: "The 'Suez Canal' connects the Mediterranean Sea with which other sea?",
    options: ["Black Sea", "Red Sea", "Caspian Sea", "Dead Sea"],
    correct: 1,
    explanation: "Red Sea"
  },
  {
    id: "nlat-2-q59",
    section: "GK & Current Affairs",
    question: "Who is the Chief Minister of Uttar Pradesh (as of 2024)?",
    options: ["Akhilesh Yadav", "Yogi Adityanath", "Mayawati", "Rajnath Singh"],
    correct: 1,
    explanation: "Yogi Adityanath"
  },
  {
    id: "nlat-2-q60",
    section: "GK & Current Affairs",
    question: "The 'Right to Education' became a Fundamental Right in India in which year?",
    options: ["2002", "2005", "2009", "2010"],
    correct: 3,
    explanation: "2010 (though the amendment was in 2002, the Act came into effect in 2010)"
  },

  // SECTION 3: VERBAL REASONING (30 QUESTIONS)
  // PASSAGE 1: THE POWER OF HABIT
  {
    id: "nlat-2-q61",
    section: "Verbal Reasoning",
    passage: `Habits are the invisible architecture of our daily lives. According to neurological research, a habit is a brain-based loop consisting of three parts: a cue, a routine, and a reward. The cue is a trigger that tells your brain to go into automatic mode. The routine is the behavior itself. The reward is the positive reinforcement that helps your brain figure out if this particular loop is worth remembering for the future. Over time, this loop becomes more and more automatic. The cue and the reward become intertwined until a powerful sense of anticipation and craving emerges. Eventually, a habit is born. While we often think of habits as negative, they are actually essential for cognitive efficiency. Without habits, our brains would be overwhelmed by the hundreds of small decisions we make every day—from which foot to lead with while walking to how to brush our teeth. However, the same mechanism that allows us to function efficiently also makes it difficult to change bad behaviors. To change a habit, one must identify the underlying cue and reward, and then consciously insert a new routine. It is a process of 'rewiring' the brain's pathways.`,
    question: "What is the primary function of the 'cue' in the habit loop?",
    options: [
      "To provide the reward.",
      "To act as a trigger for the brain to start a specific routine.",
      "To stop the habit from forming.",
      "To analyze the behavior."
    ],
    correct: 1,
    explanation: "The passage states the cue is a trigger that tells your brain to go into automatic mode."
  },
  {
    id: "nlat-2-q62",
    section: "Verbal Reasoning",
    passage: `Habits are the invisible architecture...`,
    question: "According to the passage, why are habits 'essential for cognitive efficiency'?",
    options: [
      "They make us smarter.",
      "They help us avoid making any decisions.",
      "They prevent the brain from being overwhelmed by small, repetitive decisions.",
      "They are always positive."
    ],
    correct: 2,
    explanation: "The passage says without habits, our brains would be overwhelmed by hundreds of small decisions."
  },
  {
    id: "nlat-2-q63",
    section: "Verbal Reasoning",
    passage: `Habits are the invisible architecture...`,
    question: "The word 'intertwined' in the passage most nearly means:",
    options: ["Separated", "Connected closely", "Ignored", "Weakened"],
    correct: 1,
    explanation: "Intertwined means twisted together or closely connected."
  },
  {
    id: "nlat-2-q64",
    section: "Verbal Reasoning",
    passage: `Habits are the invisible architecture...`,
    question: "How can one change a habit according to the author?",
    options: [
      "By using pure willpower.",
      "By identifying the cue and reward and replacing the routine.",
      "By ignoring the craving.",
      "It is impossible to change a habit once it is born."
    ],
    correct: 1,
    explanation: "The author suggests identifying the cue/reward and inserting a new routine."
  },
  {
    id: "nlat-2-q65",
    section: "Verbal Reasoning",
    passage: `Habits are the invisible architecture...`,
    question: "The tone of the passage is:",
    options: ["Critical", "Scientific and informative", "Emotional", "Sarcastic"],
    correct: 1,
    explanation: "The passage uses neurological research and a neutral tone to explain a concept."
  },
  {
    id: "nlat-2-q66",
    section: "Verbal Reasoning",
    passage: `Habits are the invisible architecture...`,
    question: "Which of the following is an example of a 'routine' in the habit loop?",
    options: ["Feeling hungry", "Brushing your teeth", "Feeling clean after brushing", "Seeing your toothbrush"],
    correct: 1,
    explanation: "Brushing is the behavior (routine)."
  },
  // PASSAGE 2: THE FUTURE OF CITIES
  {
    id: "nlat-2-q67",
    section: "Verbal Reasoning",
    passage: `By 2050, more than two-thirds of the world's population will live in cities. This massive urban migration presents both an opportunity and a crisis. Modern cities are the engines of economic growth, innovation, and cultural exchange. However, they are also the largest contributors to carbon emissions and waste. To survive the 21st century, cities must undergo a 'green' transformation. This involves not just planting more trees, but redesigning urban infrastructure to prioritize public transport, renewable energy, and efficient waste management. The concept of the '15-minute city'—where every essential service is within a 15-minute walk or bike ride—is gaining traction in Europe. Such a model reduces the need for cars, lowers pollution, and fosters stronger community bonds. Yet, for developing nations, the challenge is different. In cities like Mumbai or Lagos, the priority is often basic infrastructure—water, sanitation, and housing—rather than high-tech green solutions. A 'one-size-fits-all' approach to urban planning is bound to fail. The cities of the future must be resilient, inclusive, and deeply connected to their local contexts.`,
    question: "What is the '15-minute city' concept?",
    options: [
      "A city that can be built in 15 minutes.",
      "A city where services are available within a 15-minute walk or bike ride.",
      "A city with very fast public transport.",
      "A city where everyone works only 15 minutes a day."
    ],
    correct: 1,
    explanation: "Defined in the passage as services within 15 mins walk/bike."
  },
  {
    id: "nlat-2-q68",
    section: "Verbal Reasoning",
    passage: `By 2050...`,
    question: "Why does the author state that a 'one-size-fits-all' approach will fail?",
    options: [
      "Because all cities are the same.",
      "Because developed and developing nations have different priorities and challenges.",
      "Because urban planning is useless.",
      "Because 2050 is too far away."
    ],
    correct: 1,
    explanation: "The author contrasts European models with the basic infrastructure needs of cities like Mumbai/Lagos."
  },
  {
    id: "nlat-2-q69",
    section: "Verbal Reasoning",
    passage: `By 2050...`,
    question: "The word 'resilient' in the context of the passage means:",
    options: ["Fragile", "Able to recover quickly from difficulties", "Very large", "Old-fashioned"],
    correct: 1,
    explanation: "Resilient means tough or able to bounce back."
  },
  {
    id: "nlat-2-q70",
    section: "Verbal Reasoning",
    passage: `By 2050...`,
    question: "Which of the following is NOT mentioned as a requirement for the 'green' transformation of cities?",
    options: [
      "Public transport",
      "Renewable energy",
      "Expanding city borders indefinitely",
      "Efficient waste management"
    ],
    correct: 2,
    explanation: "Expansion is not mentioned; infrastructure redesign is."
  },
  {
    id: "nlat-2-q71",
    section: "Verbal Reasoning",
    passage: `By 2050...`,
    question: "What percentage of the world population is expected to be urban by 2050?",
    options: ["50%", "Over 66%", "90%", "Two-thirds of the current population"],
    correct: 1,
    explanation: "Passage says 'more than two-thirds'."
  },
  {
    id: "nlat-2-q72",
    section: "Verbal Reasoning",
    passage: `By 2050...`,
    question: "The main idea of the passage is:",
    options: [
      "Cities are bad for the environment.",
      "Urbanization is a global trend that requires localized and sustainable planning.",
      "Everyone should move back to villages.",
      "Mumbai is a better city than Lagos."
    ],
    correct: 1,
    explanation: "The passage discusses the trend and the need for localized resilient planning."
  },
  // PASSAGE 3: THE ETHICS OF AI
  {
    id: "nlat-2-q73",
    section: "Verbal Reasoning",
    passage: `As AI systems become more autonomous, the question of accountability becomes paramount. When a self-driving car crashes, who is to blame? The programmer, the manufacturer, or the car itself? This 'responsibility gap' is a major hurdle in the ethical deployment of AI. Current legal systems are built on human agency; they assume that a person with intent or negligence is behind every action. AI, however, functions based on complex algorithms that can evolve in ways their creators did not predict. Another concern is algorithmic bias. If an AI is trained on data that reflects societal prejudices, it will likely replicate and even amplify those biases in its decisions—whether in hiring, policing, or loan approvals. Proponents argue that AI can be more objective than humans, but this 'objectivity' is only as good as the data it is fed. Transparency, or the 'black box' problem, is the third major issue. We often don't know *why* an AI made a certain decision. Without explainability, trust in AI will remain low. We must ensure that AI serves humanity, rather than the other way around.`,
    question: "What is the 'responsibility gap' in AI?",
    options: [
      "The distance between the car and the road.",
      "The difficulty in assigning blame when an autonomous system causes harm.",
      "The lack of memory in AI systems.",
      "The difference in salary between programmers and engineers."
    ],
    correct: 1,
    explanation: "Passage defines it as the hurdle in accountability for autonomous crashes."
  },
  {
    id: "nlat-2-q74",
    section: "Verbal Reasoning",
    passage: `As AI systems...`,
    question: "According to the passage, algorithmic bias occurs because:",
    options: [
      "The AI is sentient and dislikes certain groups.",
      "The training data reflects existing societal prejudices.",
      "The computer is broken.",
      "Programmers make mistakes on purpose."
    ],
    correct: 1,
    explanation: "Passage states AI replicates biases in the data it is fed."
  },
  {
    id: "nlat-2-q75",
    section: "Verbal Reasoning",
    passage: `As AI systems...`,
    question: "The 'black box' problem refers to:",
    options: [
      "A physical box inside a computer.",
      "The lack of transparency in how AI arrives at its decisions.",
      "A storage device for data.",
      "The color of the computer casing."
    ],
    correct: 1,
    explanation: "Passage links 'black box' to the lack of explainability."
  },
  {
    id: "nlat-2-q76",
    section: "Verbal Reasoning",
    passage: `As AI systems...`,
    question: "Which of the following is NOT an ethical issue mentioned in the passage?",
    options: ["Accountability", "Bias", "Energy consumption", "Transparency"],
    correct: 2,
    explanation: "Energy consumption is not mentioned; the other three are."
  },
  {
    id: "nlat-2-q77",
    section: "Verbal Reasoning",
    passage: `As AI systems...`,
    question: "The author's attitude towards AI can be described as:",
    options: ["Enthusiastic", "Cautious and critical", "Indifferent", "Hostile"],
    correct: 1,
    explanation: "The author raises serious ethical concerns while discussing deployment."
  },
  {
    id: "nlat-2-q78",
    section: "Verbal Reasoning",
    passage: `As AI systems...`,
    question: "The word 'paramount' in the passage means:",
    options: ["Small", "Of supreme importance", "Unnecessary", "Old"],
    correct: 1,
    explanation: "Paramount means most important."
  },
  // GRAMMAR & VOCABULARY (Remaining 12)
  {
    id: "nlat-2-q79",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'ELOQUENT':",
    options: ["Silent", "Fluent and persuasive", "Rude", "Confused"],
    correct: 1,
    explanation: "Eloquent means well-spoken."
  },
  {
    id: "nlat-2-q80",
    section: "Verbal Reasoning",
    question: "Identify the antonym for 'FRAGILE':",
    options: ["Brittle", "Robust", "Weak", "Small"],
    correct: 1,
    explanation: "Robust means strong/sturdy."
  },
  {
    id: "nlat-2-q81",
    section: "Verbal Reasoning",
    question: "Fill in the blank: 'He was accused _____ theft.'",
    options: ["with", "of", "for", "on"],
    correct: 1,
    explanation: "Accused OF something."
  },
  {
    id: "nlat-2-q82",
    section: "Verbal Reasoning",
    question: "Choose the correct spelling:",
    options: ["Accomodation", "Accommodation", "Acommodation", "Accomodasion"],
    correct: 1,
    explanation: "Accommodation (double c, double m)."
  },
  {
    id: "nlat-2-q83",
    section: "Verbal Reasoning",
    question: "What is the meaning of the idiom 'A piece of cake'?",
    options: ["Something delicious", "Something very easy", "A birthday gift", "A difficult task"],
    correct: 1,
    explanation: "Means very easy."
  },
  {
    id: "nlat-2-q84",
    section: "Verbal Reasoning",
    question: "Identify the error: 'If I (A) was (B) you, I would (C) go (D).'",
    options: ["A", "B", "C", "D"],
    correct: 1,
    explanation: "Should be 'were' (subjunctive mood: 'If I were you')."
  },
  {
    id: "nlat-2-q85",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'OBSTINATE':",
    options: ["Stubborn", "Flexible", "Kind", "Helpful"],
    correct: 0,
    explanation: "Obstinate means stubborn."
  },
  {
    id: "nlat-2-q86",
    section: "Verbal Reasoning",
    question: "What is a 'person who hates mankind' called?",
    options: ["Philanthropist", "Misanthrope", "Misogynist", "Optimist"],
    correct: 1,
    explanation: "Misanthrope."
  },
  {
    id: "nlat-2-q87",
    section: "Verbal Reasoning",
    question: "Change to Indirect Speech: 'He said, \"I am busy.\"'",
    options: ["He said that he is busy.", "He said that he was busy.", "He said I was busy.", "He said he busy."],
    correct: 1,
    explanation: "Tense changes from present to past in indirect speech."
  },
  {
    id: "nlat-2-q88",
    section: "Verbal Reasoning",
    question: "Choose the correct article: 'She is _____ honorable woman.'",
    options: ["a", "an", "the", "no article"],
    correct: 1,
    explanation: "'Honorable' starts with a vowel sound (silent 'h')."
  },
  {
    id: "nlat-2-q89",
    section: "Verbal Reasoning",
    question: "What does 'Posthumous' mean?",
    options: ["After death", "During life", "Very fast", "Illegal"],
    correct: 0,
    explanation: "Occurring after death."
  },
  {
    id: "nlat-2-q90",
    section: "Verbal Reasoning",
    question: "Identify the antonym of 'VIGILANT':",
    options: ["Watchful", "Careless", "Alert", "Sharp"],
    correct: 1,
    explanation: "Vigilant means watchful; antonym is careless."
  },

  // SECTION 4: LOGICAL REASONING (30 QUESTIONS)
  {
    id: "nlat-2-q91",
    section: "Logical Reasoning",
    question: "If 'BREAD' is coded as 'CSFBE', how is 'FLOUR' coded?",
    options: ["GMPSV", "GMPVT", "GMPSU", "GLPSV"],
    correct: 0,
    explanation: "Each letter +1 (F+1=G, L+1=M, O+1=P, U+1=V, R+1=S... wait, R+1 is S. FLOUR -> GMPSV)."
  },
  {
    id: "nlat-2-q92",
    section: "Logical Reasoning",
    question: "Aman is 10th from the top and 20th from the bottom in a class. How many students are there in the class?",
    options: ["30", "29", "31", "28"],
    correct: 1,
    explanation: "10 + 20 - 1 = 29."
  },
  {
    id: "nlat-2-q93",
    section: "Logical Reasoning",
    question: "Find the missing number: 4, 9, 16, 25, ?",
    options: ["30", "36", "49", "40"],
    correct: 1,
    explanation: "Squares: 2², 3², 4², 5², so 6² = 36."
  },
  {
    id: "nlat-2-q94",
    section: "Logical Reasoning",
    question: "Blood Relation: A's mother is B's sister and C's daughter. D is B's son and E's brother. How is C related to E?",
    options: ["Father", "Grandfather", "Brother", "Uncle"],
    correct: 1,
    explanation: "C is the mother/father of B, and B is the father of E. So C is grandparent."
  },
  {
    id: "nlat-2-q95",
    section: "Logical Reasoning",
    question: "If 'WHITE' is called 'BLACK', 'BLACK' is called 'RED', 'RED' is called 'BLUE', what is the color of human blood?",
    options: ["RED", "BLUE", "BLACK", "WHITE"],
    correct: 1,
    explanation: "Blood is RED, and RED is called BLUE."
  },
  {
    id: "nlat-2-q96",
    section: "Logical Reasoning",
    question: "Direction: Aman walks 10m North, then 10m East, then 10m South. How far is he from the start?",
    options: ["0m", "10m", "20m", "30m"],
    correct: 1,
    explanation: "He forms 3 sides of a square; the distance is the 4th side (10m East)."
  },
  {
    id: "nlat-2-q97",
    section: "Logical Reasoning",
    question: "Analogy: Moon : Satellite :: Earth : ?",
    options: ["Sun", "Planet", "Star", "Solar System"],
    correct: 1,
    explanation: "Earth is a planet."
  },
  {
    id: "nlat-2-q98",
    section: "Logical Reasoning",
    question: "Find the odd one out:",
    options: ["January", "March", "May", "June"],
    correct: 3,
    explanation: "June has 30 days, others have 31."
  },
  {
    id: "nlat-2-q99",
    section: "Logical Reasoning",
    question: "Syllogism: All pens are pencils. No pencil is an eraser. Conclusion: No pen is an eraser.",
    options: ["True", "False", "Can't say", "Some pens are erasers"],
    correct: 0,
    explanation: "Since all pens are within pencils, and pencils are separate from erasers, pens must be separate too."
  },
  {
    id: "nlat-2-q100",
    section: "Logical Reasoning",
    question: "Find the next term: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    correct: 1,
    explanation: "Skip one letter: A (b) C (d) E (f) G (h) I."
  },
  {
    id: "nlat-2-q101",
    section: "Logical Reasoning",
    question: "If 1st January 2023 was a Sunday, what day was 1st January 2024?",
    options: ["Monday", "Tuesday", "Sunday", "Saturday"],
    correct: 0,
    explanation: "Non-leap year adds 1 day."
  },
  {
    id: "nlat-2-q102",
    section: "Logical Reasoning",
    question: "In a code, '123' means 'Cold Weather Ahead', '345' means 'Ahead of Time'. Which digit means 'Ahead'?",
    options: ["1", "2", "3", "4"],
    correct: 2,
    explanation: "3 is common to both."
  },
  {
    id: "nlat-2-q103",
    section: "Logical Reasoning",
    question: "Aman is taller than B. B is taller than C. D is taller than A. Who is the shortest?",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "D > A > B > C."
  },
  {
    id: "nlat-2-q104",
    section: "Logical Reasoning",
    question: "Statements: Some apples are mangoes. Some mangoes are red. Conclusion: Some apples are red.",
    options: ["Follows", "Does not follow", "Maybe", "None"],
    correct: 1,
    explanation: "No direct link between apples and red."
  },
  {
    id: "nlat-2-q105",
    section: "Logical Reasoning",
    question: "Clock: What is the angle at 4:00?",
    options: ["90°", "120°", "150°", "100°"],
    correct: 1,
    explanation: "4 * 30 = 120°."
  },
  {
    id: "nlat-2-q106",
    section: "Logical Reasoning",
    question: "Blood Relation: A man said, 'This boy's mother is the only daughter of my mother-in-law.' Who is the boy?",
    options: ["Son", "Nephew", "Brother", "Cousin"],
    correct: 0,
    explanation: "Only daughter of mother-in-law is wife. Boy's mother is wife, so boy is son."
  },
  {
    id: "nlat-2-q107",
    section: "Logical Reasoning",
    question: "Series: 2, 6, 18, 54, ?",
    options: ["108", "162", "150", "200"],
    correct: 1,
    explanation: "Multiply by 3."
  },
  {
    id: "nlat-2-q108",
    section: "Logical Reasoning",
    question: "Direction: Aman faces North. He turns 90° right, then 180° left. Which direction is he facing?",
    options: ["North", "South", "East", "West"],
    correct: 3,
    explanation: "N -> E -> W."
  },
  {
    id: "nlat-2-q109",
    section: "Logical Reasoning",
    question: "Analogy: Bird : Wing :: Fish : ?",
    options: ["Gills", "Fin", "Tail", "Water"],
    correct: 1,
    explanation: "Wings move birds, fins move fish."
  },
  {
    id: "nlat-2-q110",
    section: "Logical Reasoning",
    question: "Number of triangles in a square with both diagonals drawn?",
    options: ["4", "6", "8", "10"],
    correct: 2,
    explanation: "4 small, 4 large (formed by diagonals)."
  },
  {
    id: "nlat-2-q111",
    section: "Logical Reasoning",
    question: "If A=1, B=2, how is 'CAB' coded?",
    options: ["312", "6", "5", "123"],
    correct: 0,
    explanation: "C=3, A=1, B=2."
  },
  {
    id: "nlat-2-q112",
    section: "Logical Reasoning",
    question: "Statement: 'Smoking is injurious to health.' Assumption: I. People read warnings. II. Cigarettes cause harm.",
    options: ["Only I", "Only II", "Both", "None"],
    correct: 2,
    explanation: "Warning implies people read it, and content implies harm."
  },
  {
    id: "nlat-2-q113",
    section: "Logical Reasoning",
    question: "Odd one out:",
    options: ["Litre", "Gram", "Metre", "Distance"],
    correct: 3,
    explanation: "Others are units; Distance is the quantity."
  },
  {
    id: "nlat-2-q114",
    section: "Logical Reasoning",
    question: "Find the next term: 10, 15, 25, 40, ?",
    options: ["50", "60", "55", "70"],
    correct: 1,
    explanation: "Difference increases by 5: +5, +10, +15, +20."
  },
  {
    id: "nlat-2-q115",
    section: "Logical Reasoning",
    question: "Analogy: 5 : 25 :: 10 : ?",
    options: ["50", "100", "200", "500"],
    correct: 1,
    explanation: "Square of the number."
  },
  {
    id: "nlat-2-q116",
    section: "Logical Reasoning",
    question: "If '+' means 'x' and '-' means '÷', find: 10 + 5 - 2.",
    options: ["25", "15", "50", "10"],
    correct: 0,
    explanation: "10 * 5 / 2 = 25."
  },
  {
    id: "nlat-2-q117",
    section: "Logical Reasoning",
    question: "Rank: In a queue of 11, Aman is in the middle. What is his rank?",
    options: ["5", "6", "7", "8"],
    correct: 1,
    explanation: "6th (5 before, 5 after)."
  },
  {
    id: "nlat-2-q118",
    section: "Logical Reasoning",
    question: "Logical Venn: Dog, Pet, Animal.",
    options: ["3 separate", "Pet inside Dog inside Animal", "Dog and Pet overlap, both inside Animal", "All separate"],
    correct: 2,
    explanation: "Some dogs are pets, some pets are dogs, both are animals."
  },
  {
    id: "nlat-2-q119",
    section: "Logical Reasoning",
    question: "Pattern: 1, 8, 27, 64, ?",
    options: ["80", "100", "125", "150"],
    correct: 2,
    explanation: "Cubes: 1³, 2³, 3³, 4³, 5³."
  },
  {
    id: "nlat-2-q120",
    section: "Logical Reasoning",
    question: "Aman is older than B. C is older than A. B is older than D. Who is the oldest?",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "C > A > B > D."
  },

  // SECTION 5: QUANTITATIVE REASONING (30 QUESTIONS)
  {
    id: "nlat-2-q121",
    section: "Quantitative Reasoning",
    question: "What is the HCF of 24 and 36?",
    options: ["6", "12", "18", "24"],
    correct: 1,
    explanation: "Highest common factor is 12."
  },
  {
    id: "nlat-2-q122",
    section: "Quantitative Reasoning",
    question: "Find the value of x: 3x - 10 = 20.",
    options: ["5", "10", "15", "30"],
    correct: 1,
    explanation: "3x = 30, so x = 10."
  },
  {
    id: "nlat-2-q123",
    section: "Quantitative Reasoning",
    question: "What is 25% of 400?",
    options: ["50", "100", "150", "200"],
    correct: 1,
    explanation: "0.25 * 400 = 100."
  },
  {
    id: "nlat-2-q124",
    section: "Quantitative Reasoning",
    question: "Average of 10, 20, 30, 40, 50?",
    options: ["25", "30", "35", "40"],
    correct: 1,
    explanation: "Middle value of AP is average: 30."
  },
  {
    id: "nlat-2-q125",
    section: "Quantitative Reasoning",
    question: "Area of a triangle with base 10cm and height 5cm?",
    options: ["50 cm²", "25 cm²", "15 cm²", "30 cm²"],
    correct: 1,
    explanation: "0.5 * 10 * 5 = 25."
  },
  {
    id: "nlat-2-q126",
    section: "Quantitative Reasoning",
    question: "If a car travels 300km in 5 hours, what is its speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    correct: 1,
    explanation: "300 / 5 = 60."
  },
  {
    id: "nlat-2-q127",
    section: "Quantitative Reasoning",
    question: "Find the cube root of 216.",
    options: ["4", "5", "6", "7"],
    correct: 2,
    explanation: "6 * 6 * 6 = 216."
  },
  {
    id: "nlat-2-q128",
    section: "Quantitative Reasoning",
    question: "A bag has 5 red and 5 black balls. Probability of red?",
    options: ["1/2", "1/5", "1/10", "1/4"],
    correct: 0,
    explanation: "5 / 10 = 0.5."
  },
  {
    id: "nlat-2-q129",
    section: "Quantitative Reasoning",
    question: "What is the sum of first 10 natural numbers?",
    options: ["45", "55", "65", "100"],
    correct: 1,
    explanation: "n(n+1)/2 = 10*11/2 = 55."
  },
  {
    id: "nlat-2-q130",
    section: "Quantitative Reasoning",
    question: "A chair is bought for 500 and sold for 600. Profit %?",
    options: ["10%", "20%", "25%", "15%"],
    correct: 1,
    explanation: "100/500 * 100 = 20%."
  },
  {
    id: "nlat-2-q131",
    section: "Quantitative Reasoning",
    question: "2^3 * 2^2 = ?",
    options: ["2^5 (32)", "2^6 (64)", "10", "12"],
    correct: 0,
    explanation: "Add powers: 2^5 = 32."
  },
  {
    id: "nlat-2-q132",
    section: "Quantitative Reasoning",
    question: "Circumference of a circle with radius 7? (pi=22/7)",
    options: ["22", "44", "88", "154"],
    correct: 1,
    explanation: "2 * 22/7 * 7 = 44."
  },
  {
    id: "nlat-2-q133",
    section: "Quantitative Reasoning",
    question: "Convert 3/4 to percentage.",
    options: ["34%", "75%", "60%", "80%"],
    correct: 1,
    explanation: "0.75 * 100 = 75%."
  },
  {
    id: "nlat-2-q134",
    section: "Quantitative Reasoning",
    question: "Find the LCM of 8 and 12.",
    options: ["16", "24", "48", "96"],
    correct: 1,
    explanation: "Smallest common multiple is 24."
  },
  {
    id: "nlat-2-q135",
    section: "Quantitative Reasoning",
    question: "If 10 pens cost 100, how much for 15 pens?",
    options: ["150", "120", "200", "180"],
    correct: 0,
    explanation: "10 per pen * 15 = 150."
  },
  {
    id: "nlat-2-q136",
    section: "Quantitative Reasoning",
    question: "Area of a square with perimeter 40?",
    options: ["40", "80", "100", "160"],
    correct: 2,
    explanation: "Side = 10, Area = 10 * 10 = 100."
  },
  {
    id: "nlat-2-q137",
    section: "Quantitative Reasoning",
    question: "Solve: (10 + 20) * 2 / 5.",
    options: ["12", "6", "10", "15"],
    correct: 0,
    explanation: "30 * 2 / 5 = 60 / 5 = 12."
  },
  {
    id: "nlat-2-q138",
    section: "Quantitative Reasoning",
    question: "A man earns 10,000 and spends 7,000. Saving %?",
    options: ["70%", "30%", "25%", "40%"],
    correct: 1,
    explanation: "3000/10000 * 100 = 30%."
  },
  {
    id: "nlat-2-q139",
    section: "Quantitative Reasoning",
    question: "Volume of a box 10x5x2?",
    options: ["50", "100", "150", "200"],
    correct: 1,
    explanation: "10 * 5 * 2 = 100."
  },
  {
    id: "nlat-2-q140",
    section: "Quantitative Reasoning",
    question: "Median of 1, 2, 3, 4, 100?",
    options: ["3", "4", "22", "50"],
    correct: 0,
    explanation: "Middle value is 3."
  },
  {
    id: "nlat-2-q141",
    section: "Quantitative Reasoning",
    question: "Find x: x/5 = 10.",
    options: ["2", "50", "15", "5"],
    correct: 1,
    explanation: "x = 10 * 5 = 50."
  },
  {
    id: "nlat-2-q142",
    section: "Quantitative Reasoning",
    question: "If an angle is 90°, it is called:",
    options: ["Acute", "Obtuse", "Right", "Straight"],
    correct: 2,
    explanation: "Definition of right angle."
  },
  {
    id: "nlat-2-q143",
    section: "Quantitative Reasoning",
    question: "Compound Interest on 1000 at 10% for 2 years?",
    options: ["200", "210", "1210", "100"],
    correct: 1,
    explanation: "1000 * 1.1 * 1.1 = 1210; Interest = 210."
  },
  {
    id: "nlat-2-q144",
    section: "Quantitative Reasoning",
    question: "Next prime number after 11?",
    options: ["12", "13", "15", "17"],
    correct: 1,
    explanation: "13 is prime."
  },
  {
    id: "nlat-2-q145",
    section: "Quantitative Reasoning",
    question: "What is 0.5 * 0.5?",
    options: ["0.25", "2.5", "0.5", "0.05"],
    correct: 0,
    explanation: "0.25."
  },
  {
    id: "nlat-2-q146",
    section: "Quantitative Reasoning",
    question: "Degrees in a circle?",
    options: ["180", "270", "360", "90"],
    correct: 2,
    explanation: "360 degrees."
  },
  {
    id: "nlat-2-q147",
    section: "Quantitative Reasoning",
    question: "If a shirt is 50% off of 1000, what is the price?",
    options: ["500", "400", "600", "750"],
    correct: 0,
    explanation: "1000 - 500 = 500."
  },
  {
    id: "nlat-2-q148",
    section: "Quantitative Reasoning",
    question: "Sides in a hexagon?",
    options: ["5", "6", "7", "8"],
    correct: 1,
    explanation: "Hex = 6."
  },
  {
    id: "nlat-2-q149",
    section: "Quantitative Reasoning",
    question: "Solve for x: x^2 = 144.",
    options: ["10", "12", "14", "16"],
    correct: 1,
    explanation: "12 * 12 = 144."
  },
  {
    id: "nlat-2-q150",
    section: "Quantitative Reasoning",
    question: "Probability of picking a vowel from 'HELLO'?",
    options: ["1/5", "2/5", "3/5", "4/5"],
    correct: 1,
    explanation: "E and O are vowels (2 out of 5)."
  }
];
