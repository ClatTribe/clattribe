import { MockQuestion } from "../constants";

export const NLAT_MOCK_3: MockQuestion[] = [
  // SECTION 1: LEGAL REASONING (30 QUESTIONS)
  // PASSAGE 1: CRIMINAL LAW (PRIVATE DEFENCE)
  {
    id: "nlat-3-q1",
    section: "Legal Reasoning",
    passage: `Principle: The right of private defence is based on the idea that the State cannot always protect every citizen at every moment. Every person has the right to defend their own body and property, as well as the body and property of others, against an unlawful attack. However, this right is subject to three main limitations: (1) There is no right of private defence against an act which does not reasonably cause the apprehension of death or grievous hurt, (2) The force used must be proportional to the threat, and (3) There is no right of private defence when there is time to have recourse to the protection of public authorities.`,
    question: "Aman sees a thief running away with his neighbor's bicycle. Aman chases him, catches him, and starts beating him with a rod even after the thief drops the bicycle and surrenders. Is Aman protected by the right of private defence?",
    options: [
      "Yes, he was protecting his neighbor's property.",
      "No, because the right of private defence ends once the threat has passed (thief surrendered) and the force used was disproportionate.",
      "Yes, thieves deserve to be punished instantly.",
      "No, but only because it wasn't Aman's own bicycle."
    ],
    correct: 1,
    explanation: "Private defence ends when the threat is over. Beating a surrendering person is also disproportionate force."
  },
  {
    id: "nlat-3-q2",
    section: "Legal Reasoning",
    passage: `Principle: The right of private defence...`,
    question: "A person breaks into Aman's house at midnight with a loaded gun. Aman, fearing for his life, hits the intruder with a heavy flower vase, killing him. Can Aman claim private defence?",
    options: [
      "No, killing a person is always a crime.",
      "Yes, because there was a reasonable apprehension of death or grievous hurt.",
      "No, he should have called 100 first.",
      "Yes, but only if he can prove the gun was actually loaded."
    ],
    correct: 1,
    explanation: "An armed intruder at night creates a reasonable apprehension of death, justifying the use of lethal force in self-defence."
  },
  {
    id: "nlat-3-q3",
    section: "Legal Reasoning",
    passage: `Principle: The right of private defence...`,
    question: "Aman is attacked by a person with a stick. Aman pulls out a knife and stabs the person multiple times. The person dies. Is this proportional force?",
    options: [
      "Yes, a knife is a better weapon.",
      "No, stabbing multiple times in response to a stick attack is likely disproportionate.",
      "Yes, because the attacker started the fight.",
      "No, unless the stick was made of iron."
    ],
    correct: 1,
    explanation: "Proportionality is key. Escalating from a stick to multiple stabs is generally considered exceeding the right of private defence."
  },
  {
    id: "nlat-3-q4",
    section: "Legal Reasoning",
    passage: `Principle: The right of private defence...`,
    question: "Aman knows that a group of people is planning to attack his house tomorrow. Instead of going to the police, he gathers his friends and weapons to 'ambush' them. Can he claim private defence?",
    options: [
      "Yes, he is defending his home.",
      "No, because he had time to have recourse to public authorities (the police).",
      "Yes, if the police are known to be slow.",
      "No, because he used more than one person for defence."
    ],
    correct: 1,
    explanation: "If there is time to seek police help, the right of private defence does not arise."
  },
  {
    id: "nlat-3-q5",
    section: "Legal Reasoning",
    passage: `Principle: The right of private defence...`,
    question: "A person slaps Aman in a public market. Aman, in response, breaks the person's arm. Is this valid private defence?",
    options: [
      "Yes, a slap is an unlawful attack.",
      "No, breaking an arm in response to a slap is grossly disproportionate force.",
      "Yes, it teaches the attacker a lesson.",
      "No, because the market was crowded."
    ],
    correct: 1,
    explanation: "Force used must be proportional to the harm threatened. A slap does not justify breaking an arm."
  },
  {
    id: "nlat-3-q6",
    section: "Legal Reasoning",
    passage: `Principle: The right of private defence...`,
    question: "Aman is being chased by a wild tiger that escaped from a circus. He enters a stranger's house without permission to save himself. Is he liable for trespass?",
    options: [
      "Yes, trespass is an absolute crime.",
      "No, the right of private defence extends to saving one's life from any unlawful harm, including animal attacks.",
      "Yes, because the stranger didn't cause the tiger attack.",
      "No, but he must pay for any damage he caused to the door."
    ],
    correct: 1,
    explanation: "Private defence (and the doctrine of necessity) protects actions taken to save life from imminent danger."
  },

  // PASSAGE 2: CONSTITUTIONAL LAW (BASIC STRUCTURE)
  {
    id: "nlat-3-q7",
    section: "Legal Reasoning",
    passage: `Principle: The 'Basic Structure Doctrine', established in the Kesavananda Bharati case (1973), states that while Parliament has the power to amend the Constitution under Article 368, it cannot alter or destroy the 'Basic Structure' of the Constitution. Elements of the Basic Structure include Judicial Review, Secularism, Federalism, the Rule of Law, and Free and Fair Elections. Any amendment that violates these principles can be declared unconstitutional by the Supreme Court.`,
    question: "Parliament passes an amendment that completely removes the Supreme Court's power to review any laws passed by the government. Is this amendment valid?",
    options: [
      "Yes, Parliament is supreme in a democracy.",
      "No, because Judicial Review is a part of the Basic Structure of the Constitution.",
      "Yes, if it was passed by a two-thirds majority.",
      "No, but only if the President refuses to sign it."
    ],
    correct: 1,
    explanation: "Judicial Review is a core part of the Basic Structure and cannot be removed."
  },
  {
    id: "nlat-3-q8",
    section: "Legal Reasoning",
    passage: `Principle: Basic Structure Doctrine...`,
    question: "The Government passes an amendment declaring India to be a 'Theocratic State' (a state with an official religion). Is this constitutional?",
    options: [
      "Yes, the people's representatives can choose a state religion.",
      "No, Secularism is part of the Basic Structure of the Constitution.",
      "Yes, if 90% of the population agrees.",
      "No, but only if the minority groups protest."
    ],
    correct: 1,
    explanation: "Secularism is a fundamental feature of the Indian Constitution's Basic Structure."
  },
  {
    id: "nlat-3-q9",
    section: "Legal Reasoning",
    passage: `Principle: Basic Structure Doctrine...`,
    question: "An amendment is passed that says the Prime Minister will be chosen by the outgoing Prime Minister, rather than through elections. Is this valid?",
    options: [
      "Yes, it ensures stability and continuity.",
      "No, 'Free and Fair Elections' and the 'Democracy' are part of the Basic Structure.",
      "Yes, if the Cabinet approves it.",
      "No, but only if the election commission objects."
    ],
    correct: 1,
    explanation: "Democratic election processes are central to the Basic Structure."
  },
  {
    id: "nlat-3-q10",
    section: "Legal Reasoning",
    passage: `Principle: Basic Structure Doctrine...`,
    question: "Parliament amends Article 368 to state that 'Parliament has absolute power to amend any part of the Constitution and no court can question it.' Is this amendment valid?",
    options: [
      "Yes, this is the meaning of parliamentary sovereignty.",
      "No, the power to amend does not include the power to destroy the Basic Structure (limited amending power is itself a basic feature).",
      "Yes, if it was ratified by all State legislatures.",
      "No, because it wasn't signed by the Chief Justice."
    ],
    correct: 1,
    explanation: "Parliament cannot give itself 'absolute' power to destroy the Constitution's core (Minerva Mills case)."
  },
  {
    id: "nlat-3-q11",
    section: "Legal Reasoning",
    passage: `Principle: Basic Structure Doctrine...`,
    question: "The Government passes a law that prevents any citizen from approaching the courts if their Fundamental Rights are violated. Which Basic Structure principle does this violate?",
    options: [
      "Federalism",
      "Judicial Review and the Rule of Law",
      "Secularism",
      "Sovereignty"
    ],
    correct: 1,
    explanation: "The right to move courts for enforcement of rights is fundamental to the Rule of Law and Judicial Review."
  },
  {
    id: "nlat-3-q12",
    section: "Legal Reasoning",
    passage: `Principle: Basic Structure Doctrine...`,
    question: "Which landmark case is considered the origin of the Basic Structure Doctrine?",
    options: [
      "Golaknath v. State of Punjab",
      "Kesavananda Bharati v. State of Kerala",
      "Maneka Gandhi v. Union of India",
      "A.K. Gopalan v. State of Madras"
    ],
    correct: 1,
    explanation: "Kesavananda Bharati (1973) is the primary case."
  },

  // PASSAGE 3: LAW OF TORTS (NUISANCE)
  {
    id: "nlat-3-q13",
    section: "Legal Reasoning",
    passage: `Principle: Nuisance is the unlawful interference with a person's use or enjoyment of land. There are two types: (1) Public Nuisance - An act that affects the general public (e.g., blocking a public road), and (2) Private Nuisance - An act that specifically affects the owner/occupier of a particular land (e.g., excessive noise, smoke, or vibrations from a neighbor). To be actionable as a private nuisance, the interference must be unreasonable and continuous.`,
    question: "Aman's neighbor, Mr. X, plays heavy metal music at maximum volume every night from 2 AM to 5 AM. Aman cannot sleep and his health is suffering. Is this a private nuisance?",
    options: [
      "No, Mr. X has the right to listen to music in his own house.",
      "Yes, this is an unreasonable and continuous interference with Aman's enjoyment of his home.",
      "No, Aman should use earplugs.",
      "Yes, but only if the music is bad."
    ],
    correct: 1,
    explanation: "Loud noise at night is a classic case of unreasonable interference with the use of property."
  },
  {
    id: "nlat-3-q14",
    section: "Legal Reasoning",
    passage: `Principle: Nuisance...`,
    question: "A factory near Aman's house emits thick black smoke and a foul smell that makes it impossible for Aman to sit in his garden. Is this a nuisance?",
    options: [
      "No, factories are necessary for the economy.",
      "Yes, smoke and smell that significantly interfere with property use constitute private nuisance.",
      "No, Aman moved there knowing the factory was there.",
      "Yes, but only if the factory is illegal."
    ],
    correct: 1,
    explanation: "Interference with physical comfort (smell/smoke) is a valid ground for a nuisance claim."
  },
  {
    id: "nlat-3-q15",
    section: "Legal Reasoning",
    passage: `Principle: Nuisance...`,
    question: "Aman's neighbor has a large tree whose branches overhang into Aman's yard and drop leaves into his swimming pool every day. Aman has asked him to trim it, but he refuses. Is this a nuisance?",
    options: [
      "No, trees are natural.",
      "Yes, overhanging branches and falling debris can constitute a private nuisance.",
      "No, Aman should be happy to have more shade.",
      "Yes, but only if the tree is poisonous."
    ],
    correct: 1,
    explanation: "Physical interference with property (branches/leaves) is a nuisance."
  },
  {
    id: "nlat-3-q16",
    section: "Legal Reasoning",
    passage: `Principle: Nuisance...`,
    question: "A person parks a large truck on a busy public road, blocking traffic for several hours. What type of nuisance is this?",
    options: [
      "Private Nuisance",
      "Public Nuisance",
      "Both Private and Public",
      "Neither, it's just a traffic violation"
    ],
    correct: 1,
    explanation: "Blocking a public way affects the general public, making it a Public Nuisance."
  },
  {
    id: "nlat-3-q17",
    section: "Legal Reasoning",
    passage: `Principle: Nuisance...`,
    question: "Aman is extremely sensitive to noise and cannot stand the sound of his neighbor's air conditioner, which is of a standard brand and volume. Is this a nuisance?",
    options: [
      "Yes, because Aman is suffering.",
      "No, the law does not protect 'abnormal sensitivity'; the interference must be unreasonable to an ordinary person.",
      "Yes, the neighbor should buy a quieter one.",
      "No, because air conditioners are modern necessities."
    ],
    correct: 1,
    explanation: "Nuisance is judged by the standard of an ordinary, reasonable person, not a hypersensitive one."
  },
  {
    id: "nlat-3-q18",
    section: "Legal Reasoning",
    passage: `Principle: Nuisance...`,
    question: "Mr. X starts a construction project on his land. The noise is loud during the day (9 AM to 5 PM) but stops at night. Can Aman sue for nuisance?",
    options: [
      "Yes, the noise is loud.",
      "No, reasonable construction activity during daytime is generally considered a necessary part of social life and not an 'unreasonable' nuisance.",
      "Yes, because construction takes too long.",
      "No, but only if the construction is for a hospital."
    ],
    correct: 1,
    explanation: "Temporary and reasonable interference (like daytime construction) is usually not actionable."
  },

  // PASSAGE 4: LAW OF CONTRACTS (CAPACITY TO CONTRACT)
  {
    id: "nlat-3-q19",
    section: "Legal Reasoning",
    passage: `Principle: For a contract to be valid, the parties must have the legal capacity to enter into it. This means they must: (1) Be of the age of majority (18 years), (2) Be of sound mind (capable of understanding the terms and forming a rational judgment), and (3) Not be disqualified by any law. A contract with a person of unsound mind is void. However, if a person is usually of unsound mind but occasionally of sound mind, they can contract during those lucid intervals.`,
    question: "Aman, who suffers from severe dementia and often doesn't recognize his own family, signs a contract to sell his house for half its value. Is the contract valid?",
    options: [
      "Yes, he signed it voluntarily.",
      "No, the contract is void as Aman was of unsound mind at the time.",
      "Yes, because the buyer didn't know about the dementia.",
      "No, but only if his family objects in court."
    ],
    correct: 1,
    explanation: "Lack of sound mind at the time of contracting makes the agreement void."
  },
  {
    id: "nlat-3-q20",
    section: "Legal Reasoning",
    passage: `Principle: Capacity to Contract...`,
    question: "Aman is a chronic alcoholic. One night, while heavily intoxicated and unable to understand what he is doing, he enters into a contract to buy a luxury yacht. Is he bound by it?",
    options: [
      "Yes, being drunk is a choice.",
      "No, if the intoxication was so severe that he couldn't understand the contract, he lacked the capacity at that moment.",
      "Yes, but he can return it the next day for a 50% refund.",
      "No, but only if the seller was also drunk."
    ],
    correct: 1,
    explanation: "Severe intoxication that prevents rational judgment is treated similarly to unsoundness of mind."
  },
  {
    id: "nlat-3-q21",
    section: "Legal Reasoning",
    passage: `Principle: Capacity to Contract...`,
    question: "Aman suffers from a mental illness but has 'lucid intervals' where he is perfectly clear and rational. During one such interval, he signs a business agreement. Is it valid?",
    options: [
      "No, a person with a mental illness can never contract.",
      "Yes, a contract made during a lucid interval is legally binding.",
      "No, because he might fall ill again.",
      "Yes, but only if a doctor was present."
    ],
    correct: 1,
    explanation: "The principle specifically allows contracts during lucid intervals."
  },
  {
    id: "nlat-3-q22",
    section: "Legal Reasoning",
    passage: `Principle: Capacity to Contract...`,
    question: "An 85-year-old man who is physically weak but mentally sharp signs a will. A relative challenges it saying he is too old to have capacity. What is the legal position?",
    options: [
      "Old age automatically reduces mental capacity.",
      "Mental capacity depends on the soundness of mind, not physical strength or age.",
      "He needs his children's permission to sign.",
      "A person over 80 is legally considered of unsound mind."
    ],
    correct: 1,
    explanation: "Soundness of mind is the criterion, not physical health or age."
  },
  {
    id: "nlat-3-q23",
    section: "Legal Reasoning",
    passage: `Principle: Capacity to Contract...`,
    question: "Aman is an undischarged insolvent (declared bankrupt by court and not yet cleared). He enters into a contract to take a huge loan. Is this valid?",
    options: [
      "Yes, everyone can take a loan.",
      "No, an undischarged insolvent is 'disqualified by law' from entering into certain financial contracts.",
      "Yes, because the bank agreed to give it.",
      "No, but only if he doesn't have a job."
    ],
    correct: 1,
    explanation: "Disqualification by law is a ground for lack of capacity."
  },
  {
    id: "nlat-3-q24",
    section: "Legal Reasoning",
    passage: `Principle: Capacity to Contract...`,
    question: "A person of sound mind signs a contract while in extreme pain from an injury. Later, they claim they weren't in their 'right mind.' Will they succeed?",
    options: [
      "Yes, pain impairs judgment.",
      "No, unless the pain was so severe that it actually rendered them of 'unsound mind' (unable to understand the terms).",
      "Yes, because the contract was signed in a hospital.",
      "No, pain has no relation to legal capacity."
    ],
    correct: 1,
    explanation: "The bar for 'unsound mind' is high; the person must be unable to understand the transaction's nature."
  },

  // PASSAGE 5: VICARIOUS LIABILITY (MASTER-SERVANT)
  {
    id: "nlat-3-q25",
    section: "Legal Reasoning",
    passage: `Principle: Vicarious Liability is a legal principle where one person is held liable for the wrongful acts of another. The most common form is 'Master-Servant' liability, which states that a master (employer) is liable for the torts committed by their servant (employee) during the 'course of employment.' For liability to arise: (1) There must be a master-servant relationship, and (2) The act must be committed while the servant was doing the work they were employed to do.`,
    question: "Aman is a delivery driver for a pizza company. While driving to deliver a pizza, he accidentally hits a pedestrian. Who is liable?",
    options: [
      "Only Aman is liable.",
      "Both Aman and the Pizza company are liable (the company vicariously).",
      "Only the pedestrian is liable for being on the road.",
      "The pizza company is liable only if they gave Aman a broken car."
    ],
    correct: 1,
    explanation: "The accident happened during the course of employment (delivering pizza), so the employer is liable."
  },
  {
    id: "nlat-3-q26",
    section: "Legal Reasoning",
    passage: `Principle: Vicarious Liability...`,
    question: "Aman is a driver for Mr. X. Mr. X tells Aman to drive him to the airport. After dropping Mr. X, Aman decides to take a 50km 'joyride' to visit his friend in another city. During this joyride, he hits another car. Is Mr. X liable?",
    options: [
      "Yes, because Aman is still Mr. X's driver.",
      "No, this was a 'frolic of his own' and not in the course of employment.",
      "Yes, because Mr. X should have supervised him better.",
      "No, but only if Mr. X didn't give him petrol money for the joyride."
    ],
    correct: 1,
    explanation: "A significant detour for personal reasons ('frolic of one's own') is outside the course of employment."
  },
  {
    id: "nlat-3-q27",
    section: "Legal Reasoning",
    passage: `Principle: Vicarious Liability...`,
    question: "A bank clerk, whose job is to accept deposits, takes money from a customer but instead of depositing it, he keeps it for himself. Is the bank liable?",
    options: [
      "No, the bank didn't tell him to steal.",
      "Yes, the act was committed during the course of his employment in a position of trust given by the bank.",
      "No, theft is a personal act.",
      "Yes, but only if the customer has a receipt."
    ],
    correct: 1,
    explanation: "Employers are liable for fraudulent acts of employees if they are committed within the scope of their apparent authority."
  },
  {
    id: "nlat-3-q28",
    section: "Legal Reasoning",
    passage: `Principle: Vicarious Liability...`,
    question: "Aman hires a private taxi from an app. The driver gets into a fight with a passerby and hits him. Is the app company vicariously liable?",
    options: [
      "Yes, they provided the driver.",
      "No, the act of fighting is not part of the 'course of employment' of a driver.",
      "Yes, if the app has a 'safety' rating.",
      "No, but only if the driver used his own phone."
    ],
    correct: 1,
    explanation: "Assault is generally considered outside the course of employment unless it was somehow related to the job (e.g., a bouncer)."
  },
  {
    id: "nlat-3-q29",
    section: "Legal Reasoning",
    passage: `Principle: Vicarious Liability...`,
    question: "A hospital's surgeon accidentally leaves a needle inside a patient. Is the hospital liable?",
    options: [
      "No, the surgeon is a highly skilled professional, not a 'servant'.",
      "Yes, hospitals are vicariously liable for the negligence of the medical staff they employ.",
      "Only if the needle was low quality.",
      "No, surgery is too risky for liability."
    ],
    correct: 1,
    explanation: "The 'control test' has evolved; hospitals are now held liable for the negligence of their staff (servants)."
  },
  {
    id: "nlat-3-q30",
    section: "Legal Reasoning",
    passage: `Principle: Vicarious Liability...`,
    question: "Aman is an independent contractor hired by Mr. X to fix his roof. Aman drops a tile and hits a neighbor. Is Mr. X vicariously liable?",
    options: [
      "Yes, Mr. X hired him.",
      "No, an employer is generally not liable for the torts of an 'independent contractor'.",
      "Yes, because it happened on Mr. X's property.",
      "No, but only if Aman has his own insurance."
    ],
    correct: 1,
    explanation: "Vicarious liability applies to 'servants' (employees), not 'independent contractors' who control their own work."
  },

  // SECTION 2: GK & CURRENT AFFAIRS (30 QUESTIONS)
  {
    id: "nlat-3-q31",
    section: "GK & Current Affairs",
    question: "Which country launched the 'X-ray Imaging and Spectroscopy Mission' (XRISM) in September 2023?",
    options: ["India", "USA", "Japan", "China"],
    correct: 2,
    explanation: "Japan (JAXA)"
  },
  {
    id: "nlat-3-q32",
    section: "GK & Current Affairs",
    question: "The 'Bharat Drone Shakti 2023' exhibition was inaugurated in which city?",
    options: ["Ghaziabad", "Bengaluru", "Hyderabad", "New Delhi"],
    correct: 0,
    explanation: "Ghaziabad (Hindan Air Force Station)"
  },
  {
    id: "nlat-3-q33",
    section: "GK & Current Affairs",
    question: "Who is the first female officer to be deployed at a frontline post in Siachen?",
    options: ["Captain Shiva Chouhan", "Captain Avani Chaturvedi", "Captain Bhawana Kanth", "Captain Gunjan Saxena"],
    correct: 0,
    explanation: "Captain Shiva Chouhan"
  },
  {
    id: "nlat-3-q34",
    section: "GK & Current Affairs",
    question: "The 'Statue of Oneness', dedicated to Adi Shankaracharya, was unveiled in which state?",
    options: ["Kerala", "Madhya Pradesh", "Uttarakhand", "Tamil Nadu"],
    correct: 1,
    explanation: "Madhya Pradesh (Omkareshwar)"
  },
  {
    id: "nlat-3-q35",
    section: "GK & Current Affairs",
    question: "Which country's cricket team won the Asia Cup 2023?",
    options: ["Pakistan", "Sri Lanka", "India", "Bangladesh"],
    correct: 2,
    explanation: "India"
  },
  {
    id: "nlat-3-q36",
    section: "GK & Current Affairs",
    question: "The 'World Heritage Site' status was recently (2023) granted to Santiniketan. In which state is it located?",
    options: ["Odisha", "West Bengal", "Bihar", "Assam"],
    correct: 1,
    explanation: "West Bengal"
  },
  {
    id: "nlat-3-q37",
    section: "GK & Current Affairs",
    question: "Who was awarded the 'Satyajit Ray Lifetime Achievement Award' at IFFI 2023?",
    options: ["Martin Scorsese", "Michael Douglas", "Steven Spielberg", "Christopher Nolan"],
    correct: 1,
    explanation: "Michael Douglas"
  },
  {
    id: "nlat-3-q38",
    section: "GK & Current Affairs",
    question: "The 'Global Biofuels Alliance' (GBA) was launched during which summit?",
    options: ["COP28", "G20 New Delhi Summit", "BRICS Summit", "G7 Summit"],
    correct: 1,
    explanation: "G20 New Delhi Summit"
  },
  {
    id: "nlat-3-q39",
    section: "GK & Current Affairs",
    question: "Which Indian state launched the 'Mukhya Mantri Ladli Behna Yojana'?",
    options: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Bihar"],
    correct: 1,
    explanation: "Madhya Pradesh"
  },
  {
    id: "nlat-3-q40",
    section: "GK & Current Affairs",
    question: "The 'Exercise Bright Star-23' was a multilateral tri-service exercise held in which country?",
    options: ["Egypt", "India", "USA", "Saudi Arabia"],
    correct: 0,
    explanation: "Egypt"
  },
  {
    id: "nlat-3-q41",
    section: "GK & Current Affairs",
    question: "Which film won the 'Palme d'Or' at the 2023 Cannes Film Festival?",
    options: ["Anatomy of a Fall", "The Zone of Interest", "Oppenheimer", "Poor Things"],
    correct: 0,
    explanation: "Anatomy of a Fall"
  },
  {
    id: "nlat-3-q42",
    section: "GK & Current Affairs",
    question: "Who is the author of the novel 'Western Lane', which was shortlisted for the 2023 Booker Prize?",
    options: ["Chetna Maroo", "Shehan Karunatilaka", "Paul Lynch", "Sarah Bernstein"],
    correct: 0,
    explanation: "Chetna Maroo"
  },
  {
    id: "nlat-3-q43",
    section: "GK & Current Affairs",
    question: "The 'Dada Saheb Phalke Lifetime Achievement Award' for 2023 was conferred upon:",
    options: ["Waheeda Rehman", "Rekha", "Hema Malini", "Asha Parekh"],
    correct: 0,
    explanation: "Waheeda Rehman"
  },
  {
    id: "nlat-3-q44",
    section: "GK & Current Affairs",
    question: "Which country hosted the '18th G20 Summit' in September 2023?",
    options: ["Indonesia", "India", "Brazil", "South Africa"],
    correct: 1,
    explanation: "India"
  },
  {
    id: "nlat-3-q45",
    section: "GK & Current Affairs",
    question: "The 'Prime Minister's Museum and Library Society' was formerly known as:",
    options: ["Nehru Memorial Museum and Library", "Gandhi Smriti", "Teen Murti House", "Swaraj Bhavan"],
    correct: 0,
    explanation: "Nehru Memorial Museum and Library (NMML)"
  },
  {
    id: "nlat-3-q46",
    section: "GK & Current Affairs",
    question: "Which organization launched the 'Bima Sugam' online platform for insurance?",
    options: ["RBI", "SEBI", "IRDAI", "LIC"],
    correct: 2,
    explanation: "IRDAI"
  },
  {
    id: "nlat-3-q47",
    section: "GK & Current Affairs",
    question: "The 'Operation Sajag' was conducted by which Indian force in 2023?",
    options: ["Indian Navy", "Indian Coast Guard", "Indian Army", "BSF"],
    correct: 1,
    explanation: "Indian Coast Guard (coastal security drill)"
  },
  {
    id: "nlat-3-q48",
    section: "GK & Current Affairs",
    question: "Who is the current Prime Minister of United Kingdom (as of early 2024)?",
    options: ["Boris Johnson", "Liz Truss", "Rishi Sunak", "Keir Starmer"],
    correct: 2,
    explanation: "Rishi Sunak"
  },
  {
    id: "nlat-3-q49",
    section: "GK & Current Affairs",
    question: "The 'National Space Day' in India will be celebrated on which date starting 2024?",
    options: ["August 15", "August 23", "July 14", "September 2"],
    correct: 1,
    explanation: "August 23 (to commemorate Chandrayaan-3 landing)"
  },
  {
    id: "nlat-3-q50",
    section: "GK & Current Affairs",
    question: "Which Indian state has the highest forest cover as a percentage of its total area?",
    options: ["Madhya Pradesh", "Mizoram", "Arunachal Pradesh", "Chhattisgarh"],
    correct: 1,
    explanation: "Mizoram (Madhya Pradesh has highest area, but Mizoram has highest percentage)"
  },
  {
    id: "nlat-3-q51",
    section: "GK & Current Affairs",
    question: "The 'Global Innovation Index 2023' ranked India at which position?",
    options: ["40th", "46th", "52nd", "81st"],
    correct: 0,
    explanation: "40th"
  },
  {
    id: "nlat-3-q52",
    section: "GK & Current Affairs",
    question: "Which city is the headquarters of the 'New Development Bank' (BRICS Bank)?",
    options: ["Shanghai", "Beijing", "Mumbai", "Johannesburg"],
    correct: 0,
    explanation: "Shanghai"
  },
  {
    id: "nlat-3-q53",
    section: "GK & Current Affairs",
    question: "The 'OSIRIS-REx' mission, which returned asteroid samples in 2023, belongs to:",
    options: ["ISRO", "NASA", "ESA", "JAXA"],
    correct: 1,
    explanation: "NASA"
  },
  {
    id: "nlat-3-q54",
    section: "GK & Current Affairs",
    question: "Which Indian artist was commissioned to paint the original copies of the Indian Constitution?",
    options: ["M.F. Husain", "Nandalal Bose", "Raja Ravi Varma", "Amrita Sher-Gil"],
    correct: 1,
    explanation: "Nandalal Bose"
  },
  {
    id: "nlat-3-q55",
    section: "GK & Current Affairs",
    question: "The 'Treaty of Seringapatam' was signed after which war?",
    options: ["First Anglo-Maratha War", "Third Anglo-Mysore War", "Second Anglo-Sikh War", "Carnatic War"],
    correct: 1,
    explanation: "Third Anglo-Mysore War"
  },
  {
    id: "nlat-3-q56",
    section: "GK & Current Affairs",
    question: "Which gas is primarily responsible for global warming?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    correct: 1,
    explanation: "Carbon Dioxide"
  },
  {
    id: "nlat-3-q57",
    section: "GK & Current Affairs",
    question: "The 'Khangchendzonga National Park' is in which state?",
    options: ["Sikkim", "Himachal Pradesh", "Uttarakhand", "Assam"],
    correct: 0,
    explanation: "Sikkim"
  },
  {
    id: "nlat-3-q58",
    section: "GK & Current Affairs",
    question: "Who was the first Indian woman to win an Olympic medal?",
    options: ["Saina Nehwal", "Karnam Malleswari", "Mary Kom", "P.V. Sindhu"],
    correct: 1,
    explanation: "Karnam Malleswari"
  },
  {
    id: "nlat-3-q59",
    section: "GK & Current Affairs",
    question: "The 'World Refugee Day' is observed on:",
    options: ["June 20", "May 1", "March 8", "July 11"],
    correct: 0,
    explanation: "June 20"
  },
  {
    id: "nlat-3-q60",
    section: "GK & Current Affairs",
    question: "Which city is known as the 'Pink City' of India?",
    options: ["Jodhpur", "Jaipur", "Udaipur", "Bikaner"],
    correct: 1,
    explanation: "Jaipur"
  },

  // SECTION 3: VERBAL REASONING (30 QUESTIONS)
  // PASSAGE 1: MINDFULNESS
  {
    id: "nlat-3-q61",
    section: "Verbal Reasoning",
    passage: `Mindfulness is the psychological process of purposely bringing one's attention to experiences occurring in the present moment without judgment. In recent decades, it has moved from ancient Buddhist traditions into mainstream psychology and medicine. Research shows that mindfulness-based interventions can significantly reduce stress, anxiety, and depression. At its core, mindfulness is about developing a 'witnessing' mind—the ability to observe your thoughts and feelings as they arise, rather than being swept away by them. By creating a space between the stimulus and the response, individuals can choose how to react, rather than following automatic, often negative, patterns. However, mindfulness is not a quick fix. It requires consistent practice, often through meditation or mindful movement. Some critics argue that it has been over-commercialized, often marketed as a productivity tool rather than a path to inner peace. Despite this, its benefits for mental health and emotional regulation are well-documented.`,
    question: "What is the core definition of mindfulness according to the passage?",
    options: [
      "Forgetting the past.",
      "Bringing attention to the present moment without judgment.",
      "Solving all mental problems instantly.",
      "Learning Buddhist chants."
    ],
    correct: 1,
    explanation: "Defined in the first sentence."
  },
  {
    id: "nlat-3-q62",
    section: "Verbal Reasoning",
    passage: `Mindfulness is...`,
    question: "The 'witnessing' mind allows a person to:",
    options: [
      "Ignore all thoughts.",
      "Judge their thoughts harshly.",
      "Observe thoughts and feelings without being swept away by them.",
      "Control other people's minds."
    ],
    correct: 2,
    explanation: "Defined as observing thoughts/feelings as they arise."
  },
  {
    id: "nlat-3-q63",
    section: "Verbal Reasoning",
    passage: `Mindfulness is...`,
    question: "Why does the author mention that mindfulness is not a 'quick fix'?",
    options: [
      "Because it doesn't work.",
      "Because it requires consistent practice over time.",
      "Because it is too expensive.",
      "Because doctors don't like it."
    ],
    correct: 1,
    explanation: "The passage states it requires consistent practice."
  },
  {
    id: "nlat-3-q64",
    section: "Verbal Reasoning",
    passage: `Mindfulness is...`,
    question: "What is one criticism of mindfulness mentioned in the passage?",
    options: [
      "It causes more stress.",
      "It is too difficult to learn.",
      "It has been over-commercialized and marketed as a productivity tool.",
      "It is illegal in some countries."
    ],
    correct: 2,
    explanation: "Mentioned toward the end of the passage."
  },
  {
    id: "nlat-3-q65",
    section: "Verbal Reasoning",
    passage: `Mindfulness is...`,
    question: "The word 'stimulus' in the passage refers to:",
    options: [
      "The response to a thought.",
      "An external event or internal thought that triggers a reaction.",
      "A medical drug.",
      "A type of meditation."
    ],
    correct: 1,
    explanation: "In psychology, stimulus is the trigger for a response."
  },
  {
    id: "nlat-3-q66",
    section: "Verbal Reasoning",
    passage: `Mindfulness is...`,
    question: "The tone of the passage is:",
    options: ["Highly skeptical", "Balanced and informative", "Overly aggressive", "Romantic"],
    correct: 1,
    explanation: "The passage discusses benefits and criticisms neutrally."
  },

  // PASSAGE 2: SPACE EXPLORATION
  {
    id: "nlat-3-q67",
    section: "Verbal Reasoning",
    passage: `Space exploration is entering a new golden age, driven not by the Cold War rivalries of the 20th century, but by a combination of government ambition and private sector innovation. Companies like SpaceX, Blue Origin, and Rocket Lab have drastically reduced the cost of launching payloads into orbit. This has opened the door for missions that were previously deemed too expensive, including lunar exploration, asteroid mining, and eventually, the colonization of Mars. However, this new 'Space Race' also brings significant challenges. The most pressing is 'Kessler Syndrome'—the risk that the accumulation of space debris in Earth's orbit will lead to a cascade of collisions, eventually making certain orbits unusable. Additionally, the legal status of extraterrestrial resources remains murky. The 1967 Outer Space Treaty states that no nation can claim sovereignty over celestial bodies, but it is silent on whether private companies can own the minerals they extract. As we reach for the stars, we must ensure that space remains a 'global commons' for the benefit of all humanity, rather than a new frontier for conflict.`,
    question: "What has primarily reduced the cost of space launches?",
    options: [
      "Government subsidies.",
      "Private sector innovation.",
      "New fuel types.",
      "Better weather prediction."
    ],
    correct: 1,
    explanation: "Passage cites companies like SpaceX and private sector innovation."
  },
  {
    id: "nlat-3-q68",
    section: "Verbal Reasoning",
    passage: `Space exploration...`,
    question: "What is 'Kessler Syndrome'?",
    options: [
      "A disease caught in space.",
      "The risk of space debris causing a chain reaction of collisions.",
      "The failure of a rocket engine.",
      "A psychological disorder among astronauts."
    ],
    correct: 1,
    explanation: "Defined in the passage as space debris risk."
  },
  {
    id: "nlat-3-q69",
    section: "Verbal Reasoning",
    passage: `Space exploration...`,
    question: "According to the 1967 Outer Space Treaty:",
    options: [
      "Private companies can own the Moon.",
      "No nation can claim sovereignty over celestial bodies.",
      "Space travel is banned.",
      "Only the USA and Russia can go to space."
    ],
    correct: 1,
    explanation: "Explicitly stated in the passage."
  },
  {
    id: "nlat-3-q70",
    section: "Verbal Reasoning",
    passage: `Space exploration...`,
    question: "The word 'murky' in the passage means:",
    options: ["Clear", "Unclear or vague", "Dirty", "Dangerous"],
    correct: 1,
    explanation: "Used to describe the 'murky' legal status of resources."
  },
  {
    id: "nlat-3-q71",
    section: "Verbal Reasoning",
    passage: `Space exploration...`,
    question: "What does the author suggest space should remain?",
    options: ["A private property", "A global commons", "A military zone", "A restricted area"],
    correct: 1,
    explanation: "Mentioned in the final sentence."
  },
  {
    id: "nlat-3-q72",
    section: "Verbal Reasoning",
    passage: `Space exploration...`,
    question: "The passage implies that:",
    options: [
      "Space exploration is useless.",
      "We need new international laws to govern space resources.",
      "The Cold War was better for space travel.",
      "Asteroid mining is impossible."
    ],
    correct: 1,
    explanation: "The 'murky' legal status implies a need for clarity and new laws."
  },

  // GRAMMAR & VOCABULARY
  {
    id: "nlat-3-q73",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'AMBIGUOUS':",
    options: ["Clear", "Unclear; open to more than one interpretation", "Very large", "Ancient"],
    correct: 1,
    explanation: "Ambiguous means vague or double-meaning."
  },
  {
    id: "nlat-3-q74",
    section: "Verbal Reasoning",
    question: "Identify the antonym for 'EBULLIENT':",
    options: ["Excited", "Cheerful", "Depressed or low-spirited", "Energetic"],
    correct: 2,
    explanation: "Ebullient means cheerful/energetic; antonym is depressed."
  },
  {
    id: "nlat-3-q75",
    section: "Verbal Reasoning",
    question: "Fill in the blank: 'The jury _____ yet to reach a verdict.'",
    options: ["has", "have", "is", "are"],
    correct: 0,
    explanation: "Jury as a collective unit takes singular 'has'."
  },
  {
    id: "nlat-3-q76",
    section: "Verbal Reasoning",
    question: "Choose the correct spelling:",
    options: ["Maintenance", "Maintanance", "Maintenence", "Maintinance"],
    correct: 0,
    explanation: "Maintenance."
  },
  {
    id: "nlat-3-q77",
    section: "Verbal Reasoning",
    question: "What is the meaning of the idiom 'Under the weather'?",
    options: ["To be in the rain", "To feel sick or unwell", "To be successful", "To be angry"],
    correct: 1,
    explanation: "Means feeling unwell."
  },
  {
    id: "nlat-3-q78",
    section: "Verbal Reasoning",
    question: "Identify the error: 'None of (A) the students (B) have (C) finished the test (D).'",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "Strictly speaking, 'none' should take singular 'has'."
  },
  {
    id: "nlat-3-q79",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'PRAGMATIC':",
    options: ["Idealistic", "Practical", "Stubborn", "Rude"],
    correct: 1,
    explanation: "Pragmatic means dealing with things realistically/practically."
  },
  {
    id: "nlat-3-q80",
    section: "Verbal Reasoning",
    question: "What is a 'person who eats both plants and meat' called?",
    options: ["Herbivore", "Carnivore", "Omnivore", "Cannibal"],
    correct: 2,
    explanation: "Omnivore."
  },
  {
    id: "nlat-3-q81",
    section: "Verbal Reasoning",
    question: "Change to Passive Voice: 'Aman wrote a letter.'",
    options: ["A letter is written by Aman.", "A letter was written by Aman.", "A letter has been written.", "A letter write by Aman."],
    correct: 1,
    explanation: "Past tense 'wrote' becomes 'was written'."
  },
  {
    id: "nlat-3-q82",
    section: "Verbal Reasoning",
    question: "Choose the correct preposition: 'I am looking forward _____ meeting you.'",
    options: ["to", "for", "on", "at"],
    correct: 0,
    explanation: "Look forward TO something/doing something."
  },
  {
    id: "nlat-3-q83",
    section: "Verbal Reasoning",
    question: "What does 'Extempore' mean?",
    options: ["Planned", "Spoken or done without preparation", "Very long", "Boring"],
    correct: 1,
    explanation: "Impromptu/without prep."
  },
  {
    id: "nlat-3-q84",
    section: "Verbal Reasoning",
    question: "Identify the antonym of 'BENEVOLENT':",
    options: ["Kind", "Malevolent", "Generous", "Helpful"],
    correct: 1,
    explanation: "Benevolent (kind) vs Malevolent (evil/hostile)."
  },
  {
    id: "nlat-3-q85",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'MITIGATE':",
    options: ["Increase", "Reduce or lessen", "Stop", "Ignore"],
    correct: 1,
    explanation: "Mitigate means to make less severe."
  },
  {
    id: "nlat-3-q86",
    section: "Verbal Reasoning",
    question: "What is 'study of ancient things' called?",
    options: ["Biology", "Archaeology", "Geology", "Sociology"],
    correct: 1,
    explanation: "Archaeology."
  },
  {
    id: "nlat-3-q87",
    section: "Verbal Reasoning",
    question: "Identify the error: 'The bread and butter (A) are (B) my favorite (C) breakfast (D).'",
    options: ["A", "B", "C", "D"],
    correct: 1,
    explanation: "'Bread and butter' is treated as a single unit, so 'is' instead of 'are'."
  },
  {
    id: "nlat-3-q88",
    section: "Verbal Reasoning",
    question: "What does 'Ex gratia' mean?",
    options: ["By right", "As a favor (without legal obligation)", "By force", "Slowly"],
    correct: 1,
    explanation: "A payment made as a favor, not a legal right."
  },
  {
    id: "nlat-3-q89",
    section: "Verbal Reasoning",
    question: "Choose the correct spelling:",
    options: ["Harrassment", "Harassment", "Harassmant", "Harrassmant"],
    correct: 1,
    explanation: "Harassment (one 'r', two 's')."
  },
  {
    id: "nlat-3-q90",
    section: "Verbal Reasoning",
    question: "What is the synonym of 'QUASH'?",
    options: ["Support", "Cancel or reject", "Create", "Hide"],
    correct: 1,
    explanation: "Quash means to reject or void (e.g., quash an order)."
  },

  // SECTION 4: LOGICAL REASONING (30 QUESTIONS)
  {
    id: "nlat-3-q91",
    section: "Logical Reasoning",
    question: "If 'CAT' is coded as '24-26-7' (Opposite alphabet positions: C=3 -> 24), how is 'DOG' coded?",
    options: ["23-12-20", "22-11-19", "24-13-21", "25-14-22"],
    correct: 0,
    explanation: "D=4 -> 23, O=15 -> 12, G=7 -> 20 (sum = 27)."
  },
  {
    id: "nlat-3-q92",
    section: "Logical Reasoning",
    question: "Find the missing number in the series: 3, 5, 9, 17, ?",
    options: ["25", "33", "30", "40"],
    correct: 1,
    explanation: "Differences are 2, 4, 8, so next is 16. 17+16 = 33."
  },
  {
    id: "nlat-3-q93",
    section: "Logical Reasoning",
    question: "Aman is taller than B, but shorter than C. D is shorter than B. Who is the tallest?",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "C > A > B > D."
  },
  {
    id: "nlat-3-q94",
    section: "Logical Reasoning",
    question: "Analogy: Court : Justice :: School : ?",
    options: ["Student", "Education", "Teacher", "Book"],
    correct: 1,
    explanation: "Court provides Justice, School provides Education."
  },
  {
    id: "nlat-3-q95",
    section: "Logical Reasoning",
    question: "Blood Relation: If A is B's brother, B is C's sister, and C is D's father, how is A related to D?",
    options: ["Uncle", "Grandfather", "Brother", "Nephew"],
    correct: 0,
    explanation: "A is the brother of D's father (C)."
  },
  {
    id: "nlat-3-q96",
    section: "Logical Reasoning",
    question: "Direction: Aman faces West. He turns 45° clockwise, then 180° clockwise. Which direction is he facing now?",
    options: ["South-East", "North-East", "South-West", "North-West"],
    correct: 0,
    explanation: "W -> NW -> SE."
  },
  {
    id: "nlat-3-q97",
    section: "Logical Reasoning",
    question: "Find the odd one out:",
    options: ["Square", "Circle", "Triangle", "Cube"],
    correct: 3,
    explanation: "Cube is 3D, others are 2D."
  },
  {
    id: "nlat-3-q98",
    section: "Logical Reasoning",
    question: "If '123' means 'Red is Hot' and '456' means 'Cold is Blue', which digit means 'is'?",
    options: ["No common digit", "Data inadequate", "1 or 2", "1"],
    correct: 1,
    explanation: "No common digit between 123 and 456, so we can't find 'is'."
  },
  {
    id: "nlat-3-q99",
    section: "Logical Reasoning",
    question: "Find the next term: Z, X, V, T, ?",
    options: ["S", "R", "Q", "P"],
    correct: 1,
    explanation: "Skip one letter backwards."
  },
  {
    id: "nlat-3-q100",
    section: "Logical Reasoning",
    question: "If 15th August 2023 was a Tuesday, what day was 15th August 2024?",
    options: ["Wednesday", "Thursday", "Friday", "Tuesday"],
    correct: 1,
    explanation: "2024 is a leap year, so add 2 days (Tues -> Thurs)."
  },
  {
    id: "nlat-3-q101",
    section: "Logical Reasoning",
    question: "Syllogism: All A are B. Some B are C. Conclusion: Some A are C.",
    options: ["Follows", "Does not follow", "Maybe", "None"],
    correct: 1,
    explanation: "No direct link between A and C."
  },
  {
    id: "nlat-3-q102",
    section: "Logical Reasoning",
    question: "Analogy: 11 : 121 :: 13 : ?",
    options: ["144", "169", "196", "131"],
    correct: 1,
    explanation: "Square of the number."
  },
  {
    id: "nlat-3-q103",
    section: "Logical Reasoning",
    question: "Find the missing term: 1, 4, 9, 16, ?",
    options: ["20", "25", "30", "36"],
    correct: 1,
    explanation: "Squares."
  },
  {
    id: "nlat-3-q104",
    section: "Logical Reasoning",
    question: "In a row, A is 5th from left and B is 6th from right. If they swap, A becomes 11th from left. How many people in total?",
    options: ["15", "16", "17", "18"],
    correct: 1,
    explanation: "11 + 6 - 1 = 16."
  },
  {
    id: "nlat-3-q105",
    section: "Logical Reasoning",
    question: "Clock: At what time between 1 and 2 are the hands together?",
    options: ["1:05", "1:05 5/11", "1:10", "1:06"],
    correct: 1,
    explanation: "M = (5 * 12/11) = 60/11 = 5 5/11."
  },
  {
    id: "nlat-3-q106",
    section: "Logical Reasoning",
    question: "Blood Relation: A is B's mother. B is C's daughter. C is D's brother. How is A related to D?",
    options: ["Sister", "Wife", "Sister-in-law", "Mother"],
    correct: 2,
    explanation: "A is B's mother and C is B's father. So A and C are married. A is the wife of D's brother."
  },
  {
    id: "nlat-3-q107",
    section: "Logical Reasoning",
    question: "If 'FISH' is 'GHTI' (F+1, I-1, S+1, H+1... no, let's say F+1, I-1, S+1, H+1? No). If F+1=G, I-1=H, S+1=T, H+1=I. How is 'CAKE' coded?",
    options: ["DBLF", "DBJD", "DBLD", "EBKE"],
    correct: 0,
    explanation: "C+1=D, A-1=B? No, A+1=B. K+1=L, E+1=F."
  },
  {
    id: "nlat-3-q108",
    section: "Logical Reasoning",
    question: "Analogy: Ocean : Water :: Desert : ?",
    options: ["Sand", "Camel", "Sun", "Cactus"],
    correct: 0,
    explanation: "Primary substance."
  },
  {
    id: "nlat-3-q109",
    section: "Logical Reasoning",
    question: "Odd one out:",
    options: ["Gold", "Silver", "Diamond", "Platinum"],
    correct: 2,
    explanation: "Diamond is carbon (non-metal), others are metals."
  },
  {
    id: "nlat-3-q110",
    section: "Logical Reasoning",
    question: "Statement: 'The government should ban junk food in schools.' Argument: I. Yes, it improves child health. II. No, children should have choice.",
    options: ["Only I strong", "Only II strong", "Both strong", "Neither"],
    correct: 2,
    explanation: "Both present valid social/health and personal liberty arguments."
  },
  {
    id: "nlat-3-q111",
    section: "Logical Reasoning",
    question: "Direction: Aman walks 5km South, turns left and walks 5km, then turns left again and walks 5km. In which direction is he from the start?",
    options: ["North", "South", "East", "West"],
    correct: 2,
    explanation: "East."
  },
  {
    id: "nlat-3-q112",
    section: "Logical Reasoning",
    question: "Find the next term: 2, 5, 11, 23, ?",
    options: ["46", "47", "45", "48"],
    correct: 1,
    explanation: "Multiply by 2 and add 1."
  },
  {
    id: "nlat-3-q113",
    section: "Logical Reasoning",
    question: "If 'APPLE' is 5, 'ORANGE' is 6, what is 'MANGO'?",
    options: ["5", "6", "4", "7"],
    correct: 0,
    explanation: "Number of letters."
  },
  {
    id: "nlat-3-q114",
    section: "Logical Reasoning",
    question: "Analogy: Lawyer : Client :: Doctor : ?",
    options: ["Hospital", "Medicine", "Patient", "Nurse"],
    correct: 2,
    explanation: "Professional-service recipient relation."
  },
  {
    id: "nlat-3-q115",
    section: "Logical Reasoning",
    question: "If 1=3, 2=5, 3=7, what is 4?",
    options: ["8", "9", "10", "11"],
    correct: 1,
    explanation: "2n + 1."
  },
  {
    id: "nlat-3-q116",
    section: "Logical Reasoning",
    question: "What is the missing letter? A, D, I, P, ?",
    options: ["X", "Y", "Z", "W"],
    correct: 1,
    explanation: "Positions: 1, 4, 9, 16 -> 25 (Y)."
  },
  {
    id: "nlat-3-q117",
    section: "Logical Reasoning",
    question: "Odd one out:",
    options: ["Rose", "Lotus", "Jasmine", "Apple"],
    correct: 3,
    explanation: "Apple is a fruit, others are flowers."
  },
  {
    id: "nlat-3-q118",
    section: "Logical Reasoning",
    question: "If 'A' is North of 'B', and 'C' is West of 'A', what is B's direction from C?",
    options: ["North-East", "South-East", "North-West", "South-West"],
    correct: 1,
    explanation: "Draw it: A is top of B, C is left of A. B is bottom-right of C."
  },
  {
    id: "nlat-3-q119",
    section: "Logical Reasoning",
    question: "Find the next number: 100, 90, 70, 40, ?",
    options: ["0", "10", "20", "30"],
    correct: 0,
    explanation: "Difference: -10, -20, -30, -40."
  },
  {
    id: "nlat-3-q120",
    section: "Logical Reasoning",
    question: "Statement: All mangoes are golden. All golden things are expensive. Conclusion: All mangoes are expensive.",
    options: ["True", "False", "Maybe", "None"],
    correct: 0,
    explanation: "Valid transitive syllogism."
  },

  // SECTION 5: QUANTITATIVE REASONING (30 QUESTIONS)
  {
    id: "nlat-3-q121",
    section: "Quantitative Reasoning",
    question: "What is 15% of 300?",
    options: ["30", "45", "60", "75"],
    correct: 1,
    explanation: "0.15 * 300 = 45."
  },
  {
    id: "nlat-3-q122",
    section: "Quantitative Reasoning",
    question: "Average of first 5 even numbers?",
    options: ["4", "5", "6", "7"],
    correct: 2,
    explanation: "2,4,6,8,10. Sum=30, Avg=6."
  },
  {
    id: "nlat-3-q123",
    section: "Quantitative Reasoning",
    question: "A car covers 120km in 2 hours. Speed in m/s?",
    options: ["60 m/s", "16.67 m/s", "30 m/s", "20 m/s"],
    correct: 1,
    explanation: "60 km/h = 60 * 5/18 = 16.67 m/s."
  },
  {
    id: "nlat-3-q124",
    section: "Quantitative Reasoning",
    question: "What is the value of (2^3)^2?",
    options: ["32", "64", "16", "12"],
    correct: 1,
    explanation: "2^(3*2) = 2^6 = 64."
  },
  {
    id: "nlat-3-q125",
    section: "Quantitative Reasoning",
    question: "If 12 articles cost 60, what is the cost of 5 articles?",
    options: ["20", "25", "30", "15"],
    correct: 1,
    explanation: "5 per article * 5 = 25."
  },
  {
    id: "nlat-3-q126",
    section: "Quantitative Reasoning",
    question: "Find the area of a circle with diameter 14cm. (pi=22/7)",
    options: ["154", "44", "616", "77"],
    correct: 0,
    explanation: "r=7, Area = 22/7 * 7 * 7 = 154."
  },
  {
    id: "nlat-3-q127",
    section: "Quantitative Reasoning",
    question: "What is the square of 15?",
    options: ["125", "225", "625", "250"],
    correct: 1,
    explanation: "15 * 15 = 225."
  },
  {
    id: "nlat-3-q128",
    section: "Quantitative Reasoning",
    question: "Probability of picking a King from a deck of 52 cards?",
    options: ["1/13", "1/4", "1/52", "4/13"],
    correct: 0,
    explanation: "4 / 52 = 1 / 13."
  },
  {
    id: "nlat-3-q129",
    section: "Quantitative Reasoning",
    question: "Next number in 1, 3, 6, 10, 15, ?",
    options: ["20", "21", "25", "30"],
    correct: 1,
    explanation: "Add 2, 3, 4, 5, so next add 6."
  },
  {
    id: "nlat-3-q130",
    section: "Quantitative Reasoning",
    question: "If a shirt is 800 after 20% discount, what was original price?",
    options: ["1000", "900", "1200", "1100"],
    correct: 0,
    explanation: "800 is 80% of original. 800/0.8 = 1000."
  },
  {
    id: "nlat-3-q131",
    section: "Quantitative Reasoning",
    question: "Sum of angles in a quadrilateral?",
    options: ["180", "270", "360", "450"],
    correct: 2,
    explanation: "360 degrees."
  },
  {
    id: "nlat-3-q132",
    section: "Quantitative Reasoning",
    question: "Ratio of 200ml to 1 Litre?",
    options: ["1:5", "1:4", "2:1", "1:10"],
    correct: 0,
    explanation: "200:1000 = 1:5."
  },
  {
    id: "nlat-3-q133",
    section: "Quantitative Reasoning",
    question: "Find x: 5x + 3 = 18.",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "5x = 15, x = 3."
  },
  {
    id: "nlat-3-q134",
    section: "Quantitative Reasoning",
    question: "Volume of a cylinder: r=7, h=10. (pi=22/7)",
    options: ["1540", "770", "2200", "1100"],
    correct: 0,
    explanation: "pi*r^2*h = 154 * 10 = 1540."
  },
  {
    id: "nlat-3-q135",
    section: "Quantitative Reasoning",
    question: "Number of factors of 12?",
    options: ["4", "6", "8", "12"],
    correct: 1,
    explanation: "1,2,3,4,6,12."
  },
  {
    id: "nlat-3-q136",
    section: "Quantitative Reasoning",
    question: "If side of square is 8, what is diagonal?",
    options: ["16", "8", "8*sqrt(2)", "64"],
    correct: 2,
    explanation: "a * sqrt(2)."
  },
  {
    id: "nlat-3-q137",
    section: "Quantitative Reasoning",
    question: "Average of 0, 10, 20?",
    options: ["10", "15", "0", "30"],
    correct: 0,
    explanation: "30 / 3 = 10."
  },
  {
    id: "nlat-3-q138",
    section: "Quantitative Reasoning",
    question: "What is 0.1 * 0.1?",
    options: ["0.1", "0.01", "1.0", "0.001"],
    correct: 1,
    explanation: "0.01."
  },
  {
    id: "nlat-3-q139",
    section: "Quantitative Reasoning",
    question: "Convert 0.333... to fraction.",
    options: ["1/2", "1/3", "1/4", "3/10"],
    correct: 1,
    explanation: "1/3."
  },
  {
    id: "nlat-3-q140",
    section: "Quantitative Reasoning",
    question: "Sides of a pentagon?",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "5."
  },
  {
    id: "nlat-3-q141",
    section: "Quantitative Reasoning",
    question: "Find the smallest prime number.",
    options: ["0", "1", "2", "3"],
    correct: 2,
    explanation: "2 is the smallest prime."
  },
  {
    id: "nlat-3-q142",
    section: "Quantitative Reasoning",
    question: "Solve: (100 / 2) + (5 * 4).",
    options: ["70", "50", "20", "100"],
    correct: 0,
    explanation: "50 + 20 = 70."
  },
  {
    id: "nlat-3-q143",
    section: "Quantitative Reasoning",
    question: "HCF of 15, 25, 30?",
    options: ["1", "5", "10", "15"],
    correct: 1,
    explanation: "5 is common to all."
  },
  {
    id: "nlat-3-q144",
    section: "Quantitative Reasoning",
    question: "How many seconds in 1 hour?",
    options: ["60", "360", "3600", "36000"],
    correct: 2,
    explanation: "60 * 60 = 3600."
  },
  {
    id: "nlat-3-q145",
    section: "Quantitative Reasoning",
    question: "Area of rectangle: L=12, W=8?",
    options: ["96", "40", "20", "80"],
    correct: 0,
    explanation: "12 * 8 = 96."
  },
  {
    id: "nlat-3-q146",
    section: "Quantitative Reasoning",
    question: "Sum of first 5 odd numbers?",
    options: ["20", "25", "30", "15"],
    correct: 1,
    explanation: "1,3,5,7,9. Sum=25."
  },
  {
    id: "nlat-3-q147",
    section: "Quantitative Reasoning",
    question: "If a car travels 60 miles in 1 hour, how far in 15 minutes?",
    options: ["10 miles", "15 miles", "20 miles", "25 miles"],
    correct: 1,
    explanation: "1/4 of an hour = 1/4 of 60 miles = 15."
  },
  {
    id: "nlat-3-q148",
    section: "Quantitative Reasoning",
    question: "Degrees in a triangle?",
    options: ["180", "360", "90", "270"],
    correct: 0,
    explanation: "180."
  },
  {
    id: "nlat-3-q149",
    section: "Quantitative Reasoning",
    question: "Square root of 1.44?",
    options: ["1.2", "0.12", "12", "1.4"],
    correct: 0,
    explanation: "1.2 * 1.2 = 1.44."
  },
  {
    id: "nlat-3-q150",
    section: "Quantitative Reasoning",
    question: "What is 10% of 10% of 100?",
    options: ["10", "1", "0.1", "0.01"],
    correct: 1,
    explanation: "10% of 100 = 10. 10% of 10 = 1."
  }
];
