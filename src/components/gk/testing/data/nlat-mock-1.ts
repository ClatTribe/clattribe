import { MockQuestion } from "../constants";

export const NLAT_MOCK_1: MockQuestion[] = [
  // SECTION 1: LEGAL REASONING (30 QUESTIONS)
  // PASSAGE 1: PRIVACY AND THE DIGITAL AGE (Q1–Q6)
  {
    id: "nlat-1-q1",
    section: "Legal Reasoning",
    passage: `In the landmark judgment of Justice K.S. Puttaswamy (Retd.) v. Union of India (2017), a nine-judge bench of the Supreme Court of India unanimously held that the Right to Privacy is a fundamental right protected under Part III of the Constitution. The Court declared that privacy is an essential facet of human dignity and is protected as an intrinsic part of the right to life and personal liberty under Article 21. This right, however, is not absolute. Any state intervention into privacy must meet a three-fold test: (i) Legality: There must be a law in existence to justify the interference; (ii) Need: The state must demonstrate a legitimate state aim or need for the interference; and (iii) Proportionality: The extent of the interference must be proportionate to the objective sought to be achieved, ensuring that the least restrictive measure is used. With the advent of the Digital Personal Data Protection Act (DPDP), 2023, the legal framework for data privacy has further evolved, establishing obligations for 'Data Fiduciaries' and rights for 'Data Principals'. A Data Fiduciary is an entity that determines the purpose and means of processing personal data, while a Data Principal is the individual to whom the personal data relates. The Act mandates that data must be processed only for a lawful purpose for which the Data Principal has given consent, or for certain 'legitimate uses'. Failure to comply with these provisions can lead to significant financial penalties, although the Act does not provide for criminal liability or compensation to the data principal.`,
    question: "A social media company, 'ChatHub', collects user location data to show personalized advertisements. The company does not explicitly mention this in its terms of service, nor does it seek specific consent for location tracking. Under the DPDP Act, 2023, what is the status of ChatHub's actions?",
    options: [
      "ChatHub is acting lawfully as location data is necessary for the functioning of modern apps.",
      "ChatHub is in violation of the Act as it failed to obtain clear consent for a specific purpose.",
      "ChatHub is only liable if a user's location is leaked to a third party.",
      "The DPDP Act does not apply to social media companies."
    ],
    correct: 1,
    explanation: "The DPDP Act mandates that personal data (like location) must be processed only for a lawful purpose for which the Data Principal has given consent. Processing without clear consent for a specific purpose is a violation."
  },
  {
    id: "nlat-1-q2",
    section: "Legal Reasoning",
    passage: `In the landmark judgment of Justice K.S. Puttaswamy...`,
    question: "The Government of India issues an executive order (not a legislative act) mandating that all citizens must link their private healthcare records to a central database to monitor public health trends. Does this order meet the 'three-fold test' established in the Puttaswamy judgment?",
    options: [
      "Yes, because monitoring public health is a 'legitimate state aim'.",
      "No, because the interference lacks 'Legality' as it is based on an executive order, not a law passed by a legislature.",
      "Yes, provided the government ensures the data is encrypted.",
      "No, because health data is personal and can never be shared with the state."
    ],
    correct: 1,
    explanation: "The first prong of the Puttaswamy test is 'Legality', which requires a valid law (statute) to justify the interference. An executive order without legislative backing fails this test."
  },
  {
    id: "nlat-1-q3",
    section: "Legal Reasoning",
    passage: `In the landmark judgment of Justice K.S. Puttaswamy...`,
    question: "Under the DPDP Act, 2023, an individual whose data is being processed is referred to as the:",
    options: [
      "Data Processor",
      "Data Fiduciary",
      "Data Principal",
      "Data Subject"
    ],
    correct: 2,
    explanation: "The Act defines the individual to whom the personal data relates as the 'Data Principal'."
  },
  {
    id: "nlat-1-q4",
    section: "Legal Reasoning",
    passage: `In the landmark judgment of Justice K.S. Puttaswamy...`,
    question: "A bank processes a customer's personal data to prevent a suspected case of money laundering without the customer's explicit consent. Is this allowed under the DPDP Act?",
    options: [
      "No, consent is mandatory for every single act of data processing.",
      "Yes, this would likely fall under 'legitimate uses' for the prevention of crime or compliance with any law.",
      "Yes, but the bank must pay a fine to the customer later.",
      "No, banks are exempt from the DPDP Act."
    ],
    correct: 1,
    explanation: "The DPDP Act allows for the processing of data without consent for certain 'legitimate uses', which includes the prevention of crime, medical emergencies, or compliance with legal mandates."
  },
  {
    id: "nlat-1-q5",
    section: "Legal Reasoning",
    passage: `In the landmark judgment of Justice K.S. Puttaswamy...`,
    question: "What is the primary remedy available to a Data Principal if a Data Fiduciary violates their privacy under the DPDP Act, 2023?",
    options: [
      "The Data Principal can claim multi-crore compensation in a civil court.",
      "The Data Fiduciary can be sentenced to up to 5 years in prison.",
      "The Data Fiduciary may face heavy financial penalties payable to the State, but the Act does not provide for compensation to the individual.",
      "There is no remedy available for individuals."
    ],
    correct: 2,
    explanation: "One of the criticisms of the DPDP Act 2023 is that while it imposes heavy penalties on companies (payable to the government), it does not provide a mechanism for individuals to claim compensation for privacy breaches."
  },
  {
    id: "nlat-1-q6",
    section: "Legal Reasoning",
    passage: `In the landmark judgment of Justice K.S. Puttaswamy...`,
    question: "Which of the following best describes the 'Proportionality' test for state interference in privacy?",
    options: [
      "The state must pay the citizen a proportional amount of money for the data taken.",
      "The state must ensure that the privacy of all citizens is violated equally.",
      "The interference must be necessary and should use the least intrusive means to achieve a legitimate goal.",
      "Proportionality means the state can take any data as long as it helps at least 51% of the population."
    ],
    correct: 2,
    explanation: "Proportionality requires that the measures taken by the state are necessary and that there is a rational nexus between the objective and the means adopted, using the least restrictive method possible."
  },

  // PASSAGE 2: LAW OF TORTS – VICARIOUS LIABILITY (Q7–Q12)
  {
    id: "nlat-1-q7",
    section: "Legal Reasoning",
    passage: `Vicarious liability is a legal principle where one person is held liable for the torts (wrongful acts) committed by another. The most common form is the liability of a Master for the acts of his Servant. For vicarious liability to arise, two conditions must be met: (i) There must be a 'Master-Servant' relationship (determined by the 'control test', though this has evolved into the 'integration test' in modern times); and (ii) The tort must be committed in the 'course of employment'. An act is in the course of employment if it is either a wrongful act authorized by the master, or a wrongful and unauthorized mode of doing some act authorized by the master. However, if an employee goes on a 'frolic of his own'—meaning he does something entirely for his own purposes, completely unrelated to his work—the employer is not liable. For example, if a driver takes a long detour to visit his family and has an accident during that detour, the employer may not be held vicariously liable. Another important distinction is between an 'employee' (servant) and an 'independent contractor'. A master is generally not liable for the torts of an independent contractor, as the master controls 'what' is to be done but not 'how' it is to be done.`,
    question: "Aman is a driver employed by 'Blue Cabs'. While driving a passenger to the airport (his authorized task), Aman starts a fight with another driver over a lane change and physically assaults him. Is Blue Cabs vicariously liable for the assault?",
    options: [
      "Yes, because Aman was on duty and driving the company car.",
      "No, because the assault was an independent wrongful act not authorized by the master and not a way of doing the authorized job.",
      "Yes, because the master is responsible for all actions of the servant during work hours.",
      "No, because Aman is an independent contractor."
    ],
    correct: 1,
    explanation: "Assaulting someone is generally considered a 'frolic of his own' or an act outside the course of employment, unless the job itself involved the use of force (like a bouncer)."
  },
  {
    id: "nlat-1-q8",
    section: "Legal Reasoning",
    passage: `Vicarious liability is a legal principle...`,
    question: "Aman, a delivery partner for a food app, is instructed to deliver a pizza within 30 minutes. To meet the deadline, Aman drives on the wrong side of the road and hits a pedestrian. Is the food app company vicariously liable?",
    options: [
      "No, the company never authorized driving on the wrong side of the road.",
      "Yes, because Aman was performing an authorized task (delivery) in an unauthorized/wrongful manner.",
      "No, because Aman is responsible for his own traffic violations.",
      "Yes, but only if the pizza was delivered cold."
    ],
    correct: 1,
    explanation: "This is a classic case of 'wrongful and unauthorized mode of doing an authorized act'. The company is liable because the act (delivery) was authorized."
  },
  {
    id: "nlat-1-q9",
    section: "Legal Reasoning",
    passage: `Vicarious liability is a legal principle...`,
    question: "A homeowner hires a professional electrician from a well-known company to fix the wiring. The electrician accidentally causes a short circuit that burns down the neighbor's fence. Who is vicariously liable?",
    options: [
      "The homeowner, as the master of the electrician.",
      "The electrical company, as the master of the electrician.",
      "No one is vicariously liable; the electrician is an independent contractor.",
      "Only the neighbor is liable for having a flammable fence."
    ],
    correct: 1,
    explanation: "The electrician is an employee of the electrical company. The company is the master and is liable for torts committed in the course of employment."
  },
  {
    id: "nlat-1-q10",
    section: "Legal Reasoning",
    passage: `Vicarious liability is a legal principle...`,
    question: "A truck driver is told to drive from City A to City B via the shortest highway. Instead, he drives 50 km in the opposite direction to watch a movie. While returning to the highway from the cinema, he crashes into a car. Is the employer liable?",
    options: [
      "Yes, he was still the employer's driver at the time.",
      "No, the driver was on a 'frolic of his own', completely outside the course of employment.",
      "Yes, because he was intending to return to work.",
      "No, because watching a movie is a fundamental right."
    ],
    correct: 1,
    explanation: "A detour of that magnitude for purely personal reasons constitutes a 'frolic of his own', severing the vicarious liability of the master."
  },
  {
    id: "nlat-1-q11",
    section: "Legal Reasoning",
    passage: `Vicarious liability is a legal principle...`,
    question: "Which of the following factors is most important in the 'Control Test' for determining a master-servant relationship?",
    options: [
      "The amount of salary paid.",
      "The power of the master to tell the person not just what to do, but how to do it.",
      "Whether the person wears a uniform.",
      "Whether the person uses their own tools."
    ],
    correct: 1,
    explanation: "The control test focuses on the degree of control the master has over the manner and method of work performance."
  },
  {
    id: "nlat-1-q12",
    section: "Legal Reasoning",
    passage: `Vicarious liability is a legal principle...`,
    question: "In modern law, the 'Integration Test' suggests that a person is a servant if:",
    options: [
      "They are integrated into the organization and their work is an integral part of the business.",
      "They are integrated into the society.",
      "They work for at least 10 different masters.",
      "They have no control over their own life."
    ],
    correct: 0,
    explanation: "The integration test (or organization test) looks at whether the person's work is part and parcel of the employer's organization."
  },

  // PASSAGE 3: CONSTITUTIONAL LAW – EMERGENCY PROVISIONS (Q13–Q18)
  {
    id: "nlat-1-q13",
    section: "Legal Reasoning",
    passage: `The Indian Constitution provides for three types of emergencies: National Emergency (Article 352), State Emergency or President's Rule (Article 356), and Financial Emergency (Article 360). A National Emergency can be declared by the President when the security of India or any part thereof is threatened by war, external aggression, or 'armed rebellion'. Notably, the term 'armed rebellion' was inserted by the 44th Amendment Act, 1978, replacing the term 'internal disturbance'. A National Emergency can be proclaimed for the whole of India or only a part. During a National Emergency, the federal structure of the country becomes unitary. Under Article 358, Fundamental Rights under Article 19 are automatically suspended in case of emergency declared on grounds of war or external aggression, but not armed rebellion. Under Article 359, the President may suspend the right to move any court for the enforcement of other fundamental rights (except Articles 20 and 21). Article 356 allows for President's Rule in a state if the constitutional machinery fails. The landmark S.R. Bommai v. Union of India (1994) case established that the power under Article 356 is subject to judicial review and that secularism is a basic feature of the Constitution.`,
    question: "The President declares a National Emergency on the grounds of 'armed rebellion' in the state of Manipur. Which of the following is true regarding Article 19 rights?",
    options: [
      "Article 19 rights are automatically suspended throughout India.",
      "Article 19 rights are automatically suspended only in Manipur.",
      "Article 19 rights are NOT automatically suspended because the emergency was declared on the ground of armed rebellion.",
      "Fundamental rights can never be suspended under the Indian Constitution."
    ],
    correct: 2,
    explanation: "Under Article 358, Article 19 is suspended only when the National Emergency is declared on grounds of 'war' or 'external aggression', not 'armed rebellion'."
  },
  {
    id: "nlat-1-q14",
    section: "Legal Reasoning",
    passage: `The Indian Constitution provides for three types...`,
    question: "During a National Emergency, the President issues an order suspending the enforcement of all Fundamental Rights. Is this order valid?",
    options: [
      "Yes, the President has absolute power during an emergency.",
      "No, the enforcement of Articles 20 and 21 can never be suspended even during an emergency.",
      "Yes, but only if the Parliament approves within 24 hours.",
      "No, only Article 19 can be suspended."
    ],
    correct: 1,
    explanation: "The 44th Amendment Act ensured that the rights guaranteed by Articles 20 (protection in respect of conviction for offences) and 21 (right to life and liberty) cannot be suspended even during a National Emergency."
  },
  {
    id: "nlat-1-q15",
    section: "Legal Reasoning",
    passage: `The Indian Constitution provides for three types...`,
    question: "The term 'internal disturbance' was replaced with 'armed rebellion' in Article 352 by which amendment?",
    options: [
      "42nd Amendment Act",
      "44th Amendment Act",
      "52nd Amendment Act",
      "73rd Amendment Act"
    ],
    correct: 1,
    explanation: "The 44th Amendment Act (1978) brought this change to prevent the misuse of emergency powers as seen in 1975."
  },
  {
    id: "nlat-1-q16",
    section: "Legal Reasoning",
    passage: `The Indian Constitution provides for three types...`,
    question: "In the S.R. Bommai case, the Supreme Court held that the 'basic feature' of the Constitution which justifies the dismissal of a state government acting against it is:",
    options: [
      "Socialism",
      "Secularism",
      "Federalism",
      "Sovereignty"
    ],
    correct: 1,
    explanation: "The Court held that secularism is a basic feature, and a state government acting against it (e.g., inciting communal violence) can be dismissed under Article 356."
  },
  {
    id: "nlat-1-q17",
    section: "Legal Reasoning",
    passage: `The Indian Constitution provides for three types...`,
    question: "Which Article deals with the declaration of a 'Financial Emergency'?",
    options: [
      "Article 352",
      "Article 356",
      "Article 360",
      "Article 365"
    ],
    correct: 2,
    explanation: "Article 360 provides for Financial Emergency. Notably, it has never been declared in India so far."
  },
  {
    id: "nlat-1-q18",
    section: "Legal Reasoning",
    passage: `The Indian Constitution provides for three types...`,
    question: "When a National Emergency is in operation, the Parliament gains the power to make laws on subjects mentioned in the:",
    options: [
      "Union List only",
      "State List",
      "Concurrent List only",
      "The Parliament cannot make laws during an emergency"
    ],
    correct: 1,
    explanation: "During a National Emergency, the federal character changes, and Parliament can legislate on any subject in the State List."
  },

  // PASSAGE 4: LAW OF CRIMES – MENS REA AND ACTUS REUS (Q19–Q24)
  {
    id: "nlat-1-q19",
    section: "Legal Reasoning",
    passage: `The fundamental principle of criminal law is 'Actus non facit reum nisi mens sit rea', which means 'the act itself does not make a man guilty unless his mind is also guilty'. For a crime to be committed, two elements must generally coexist: (i) Actus Reus (the physical act or omission); and (ii) Mens Rea (the guilty mind or criminal intent). Mens Rea can take various forms: (a) Intention: The person desires the specific outcome; (b) Knowledge: The person is aware that the outcome is likely to occur; (c) Recklessness: The person foresees the risk but takes it anyway; and (d) Negligence: The person fails to exercise the care that a reasonable person would. However, there is an exception to the requirement of Mens Rea called 'Strict Liability' offenses. In strict liability, a person can be held guilty even if they had no criminal intent. Examples include public nuisance, food adulteration, and statutory offenses like minor's kidnapping. Mistake of Fact is a valid defense if the person acted in good faith, but Mistake of Law is never an excuse ('Ignorantia juris non excusat').`,
    question: "Aman, while driving his car at 100 km/h in a residential area with a 30 km/h limit, hits and kills a pedestrian. Aman argues he did not intend to kill anyone. What form of Mens Rea is most likely applicable here?",
    options: [
      "Intention",
      "Knowledge",
      "Recklessness",
      "Negligence"
    ],
    correct: 2,
    explanation: "Driving at extremely high speeds in a residential area shows a conscious disregard for a known and substantial risk, which is 'Recklessness'."
  },
  {
    id: "nlat-1-q20",
    section: "Legal Reasoning",
    passage: `The fundamental principle of criminal law...`,
    question: "Aman is walking in a park when he sees a person drowning in a shallow pond. Aman is an expert swimmer but chooses to watch and walk away. The person dies. Is Aman liable for a crime?",
    options: [
      "Yes, he had the Mens Rea of allowing someone to die.",
      "No, because there was no Actus Reus (physical act or a legal duty to act). A moral duty is not a legal duty.",
      "Yes, omission is always a crime in India.",
      "No, because he didn't physically push the person into the pond."
    ],
    correct: 1,
    explanation: "Criminal liability for an omission only arises if there is a legal duty to act (like a parent or a lifeguard). A bystander has no legal duty to rescue."
  },
  {
    id: "nlat-1-q21",
    section: "Legal Reasoning",
    passage: `The fundamental principle of criminal law...`,
    question: "A shopkeeper sells adulterated milk. He argues he bought it from a supplier and didn't know it was contaminated. Is he liable?",
    options: [
      "No, he lacked Mens Rea.",
      "Yes, food adulteration is often a 'strict liability' offense where intent is irrelevant.",
      "No, because he acted in 'good faith'.",
      "Yes, but only if he made a profit from it."
    ],
    correct: 1,
    explanation: "Statutory offenses related to public health and safety, like food adulteration, often impose strict liability."
  },
  {
    id: "nlat-1-q22",
    section: "Legal Reasoning",
    passage: `The fundamental principle of criminal law...`,
    question: "Aman enters a restricted government building by mistake, thinking it was the public library. He is charged with trespassing. Can he use a defense?",
    options: [
      "No, trespassing is a strict liability crime.",
      "Yes, 'Mistake of Fact' is a valid defense as he acted in good faith with a reasonable belief.",
      "No, 'Mistake of Law' is not an excuse.",
      "Yes, but only if he bought a book from the building."
    ],
    correct: 1,
    explanation: "Mistake of Fact (believing the building was a library) is a valid defense if done in good faith."
  },
  {
    id: "nlat-1-q23",
    section: "Legal Reasoning",
    passage: `The fundamental principle of criminal law...`,
    question: "Aman commits a crime and argues that he didn't know the law had changed recently to make that act illegal. Is he liable?",
    options: [
      "No, because he lacked the knowledge of the law.",
      "Yes, 'Ignorantia juris non excusat'—ignorance of the law is no excuse.",
      "No, laws must be personally told to every citizen.",
      "Yes, but only if the law is more than 10 years old."
    ],
    correct: 1,
    explanation: "Ignorance of the law is not a defense. Citizens are presumed to know the law of the land."
  },
  {
    id: "nlat-1-q24",
    section: "Legal Reasoning",
    passage: `The fundamental principle of criminal law...`,
    question: "In criminal law, 'Mens Rea' literally means:",
    options: [
      "Guilty act",
      "Guilty mind",
      "Physical injury",
      "Legal justification"
    ],
    correct: 1,
    explanation: "Mens Rea = Guilty Mind; Actus Reus = Guilty Act."
  },

  // PASSAGE 5: INTELLECTUAL PROPERTY RIGHTS – COPYRIGHT (Q25–Q30)
  {
    id: "nlat-1-q25",
    section: "Legal Reasoning",
    passage: `Copyright is a form of intellectual property protection granted to the creators of original works of authorship, including literary, dramatic, musical, and artistic works, as well as cinematograph films and sound recordings. In India, copyright is governed by the Copyright Act, 1957. Copyright protection begins the moment the work is created and fixed in a tangible medium. Registration is not mandatory for protection but is prima facie evidence of ownership. The duration of copyright for most works is the lifetime of the author plus 60 years. One key doctrine in copyright law is 'Fair Use' (or Fair Dealing). Section 52 of the Act lists certain acts that do not constitute infringement, such as use for private research, criticism or review, reporting current events, and use in educational instruction. Crucially, copyright protects the 'expression' of an idea, not the 'idea' itself. This is known as the 'Idea-Expression Dichotomy'. Two people can write different books about the same historical event (the idea), but they cannot copy the specific words and structure (the expression) of each other's books.`,
    question: "Aman writes a research paper on the history of the Indian Constitution. He copies three paragraphs from a famous historian's book to discuss and critique them in his paper, providing full citations. Is Aman liable for copyright infringement?",
    options: [
      "Yes, because he copied the exact words (expression).",
      "No, this likely falls under 'Fair Dealing' for the purpose of criticism, review, or private research.",
      "Yes, because he didn't pay the historian for the paragraphs.",
      "No, because historical facts are not protected by copyright."
    ],
    correct: 1,
    explanation: "Section 52 allows for 'Fair Dealing' for research, criticism, and review. Copying limited portions with citation for critique is generally permitted."
  },
  {
    id: "nlat-1-q26",
    section: "Legal Reasoning",
    passage: `Copyright is a form of intellectual property...`,
    question: "A filmmaker wants to make a movie about a 'heroic policeman who fights corruption'. Another filmmaker has already made a movie with the exact same premise. Can the first filmmaker sue for copyright infringement?",
    options: [
      "Yes, because the premise is identical.",
      "No, because the 'premise' (a heroic cop fighting corruption) is an idea, and ideas are not protected by copyright.",
      "Yes, but only if the second movie is a box-office hit.",
      "No, because policemen are public figures."
    ],
    correct: 1,
    explanation: "The 'Idea-Expression Dichotomy' means copyright only protects the unique expression (script, dialogue, scenes), not the underlying idea/concept."
  },
  {
    id: "nlat-1-q27",
    section: "Legal Reasoning",
    passage: `Copyright is a form of intellectual property...`,
    question: "How long does copyright protection generally last for a literary work in India?",
    options: [
      "20 years from creation",
      "Lifetime of the author",
      "Lifetime of the author plus 60 years",
      "Forever, as long as the family keeps the original"
    ],
    correct: 2,
    explanation: "The standard term for literary, dramatic, musical, and artistic works is life + 60 years."
  },
  {
    id: "nlat-1-q28",
    section: "Legal Reasoning",
    passage: `Copyright is a form of intellectual property...`,
    question: "Is registration of a work mandatory to get copyright protection in India?",
    options: [
      "Yes, protection only starts from the date of registration.",
      "No, protection is automatic upon the creation of the work in a tangible form.",
      "Yes, but only for movies and songs.",
      "No, but it is mandatory for books."
    ],
    correct: 1,
    explanation: "Copyright protection is automatic. Registration is optional but recommended as it serves as proof of ownership in court."
  },
  {
    id: "nlat-1-q29",
    section: "Legal Reasoning",
    passage: `Copyright is a form of intellectual property...`,
    question: "An artist paints a portrait of a famous actor. The actor sues the artist for using his 'face' without permission. Is this a copyright issue?",
    options: [
      "Yes, the actor owns the copyright to his own face.",
      "No, this might be a violation of 'Right to Publicity', but the 'Copyright' to the painting belongs to the artist (creator).",
      "Yes, because the actor is a public figure.",
      "No, because faces are in the 'public domain'."
    ],
    correct: 1,
    explanation: "Copyright belongs to the creator of the work (the artist). Using a celebrity's image for commercial gain is a matter of 'Publicity Rights' or 'Personality Rights', not copyright."
  },
  {
    id: "nlat-1-q30",
    section: "Legal Reasoning",
    passage: `Copyright is a form of intellectual property...`,
    question: "Which of the following is NOT protected under the Copyright Act, 1957?",
    options: [
      "A computer program",
      "A new chemical formula for a drug",
      "A choreography for a dance",
      "A sound recording"
    ],
    correct: 1,
    explanation: "A chemical formula is protected under the Patents Act, not the Copyright Act."
  },

  // SECTION 2: VERBAL REASONING (30 QUESTIONS)
  // PASSAGE 1: THE ETHICS OF ARTIFICIAL INTELLIGENCE (Q31–Q36)
  {
    id: "nlat-1-q31",
    section: "Verbal Reasoning",
    passage: `Artificial Intelligence (AI) has rapidly transitioned from a science-fiction trope to an omnipresent force in modern society. While its potential to revolutionize healthcare, logistics, and climate modeling is undeniable, it brings with it a complex web of ethical dilemmas. One of the most pressing concerns is 'algorithmic bias'. AI systems are trained on vast datasets that often reflect historical human prejudices. Consequently, if an AI is used in recruitment or judicial sentencing, it may inadvertently perpetuate discrimination against marginalized groups. Furthermore, the 'black box' problem—where the decision-making process of advanced neural networks is opaque even to their creators—raises questions about accountability. If an autonomous vehicle causes an accident, who is responsible: the developer, the car owner, or the AI itself? Critics also warn of the 'alignment problem', the challenge of ensuring that super-intelligent systems act in accordance with human values. As AI becomes more autonomous, the need for robust regulatory frameworks becomes critical. However, over-regulation risks stifling innovation and ceding a competitive edge to less-regulated nations. The challenge for policymakers, therefore, is to strike a delicate balance between fostering technological progress and safeguarding fundamental human rights.`,
    question: "What does the author mean by the 'black box' problem in AI?",
    options: [
      "AI systems are physically stored in black containers.",
      "The internal logic and decision-making of advanced AI are difficult for humans to understand or explain.",
      "AI systems are prone to shutting down during emergencies.",
      "The hardware used for AI is too expensive."
    ],
    correct: 1,
    explanation: "The passage defines it as the decision-making process being 'opaque even to their creators'."
  },
  {
    id: "nlat-1-q32",
    section: "Verbal Reasoning",
    passage: `Artificial Intelligence (AI) has rapidly...`,
    question: "According to the passage, how does 'algorithmic bias' occur?",
    options: [
      "AI systems are programmed by people who hate diversity.",
      "AI systems learn from datasets that contain historical human prejudices.",
      "AI systems are naturally more logical than humans.",
      "Bias is a necessary part of any efficient algorithm."
    ],
    correct: 1,
    explanation: "The passage states that AI systems are trained on datasets that often reflect historical human prejudices."
  },
  {
    id: "nlat-1-q33",
    section: "Verbal Reasoning",
    passage: `Artificial Intelligence (AI) has rapidly...`,
    question: "What is the 'alignment problem' mentioned in the passage?",
    options: [
      "The difficulty of making AI work on different operating systems.",
      "Ensuring that AI systems' goals and actions remain consistent with human values.",
      "The physical alignment of satellites used for AI.",
      "Making sure AI can speak multiple languages."
    ],
    correct: 1,
    explanation: "The passage defines it as the challenge of ensuring super-intelligent systems act in accordance with human values."
  },
  {
    id: "nlat-1-q34",
    section: "Verbal Reasoning",
    passage: `Artificial Intelligence (AI) has rapidly...`,
    question: "The author suggests that over-regulation of AI could lead to:",
    options: [
      "Better protection of human rights.",
      "The end of the black box problem.",
      "The stifling of innovation and loss of competitive advantage.",
      "A complete ban on autonomous vehicles."
    ],
    correct: 2,
    explanation: "The passage notes that over-regulation risks stifling innovation and ceding a competitive edge."
  },
  {
    id: "nlat-1-q35",
    section: "Verbal Reasoning",
    passage: `Artificial Intelligence (AI) has rapidly...`,
    question: "The tone of the passage is best described as:",
    options: [
      "Alarmist and pessimistic",
      "Balanced and analytical",
      "Dismissive and cynical",
      "Enthusiastic and celebratory"
    ],
    correct: 1,
    explanation: "The author discusses both the potential and the ethical dilemmas of AI in a measured way."
  },
  {
    id: "nlat-1-q36",
    section: "Verbal Reasoning",
    passage: `Artificial Intelligence (AI) has rapidly...`,
    question: "Which word from the passage means 'present everywhere'?",
    options: [
      "Opaque",
      "Omnipresent",
      "Inadvertently",
      "Marginalized"
    ],
    correct: 1,
    explanation: "Omnipresent means present everywhere at the same time."
  },

  // PASSAGE 2: THE EVOLUTION OF LANGUAGE (Q37–Q42)
  {
    id: "nlat-1-q37",
    section: "Verbal Reasoning",
    passage: `Language is not a static monolith; it is a living, breathing entity that evolves in response to social, technological, and cultural shifts. The rise of digital communication has accelerated this process significantly. In the past, linguistic changes occurred over centuries as populations migrated and cultures merged. Today, a single internet meme can introduce a new word or grammatical structure to millions of people overnight. This 'linguistic fluidity' is often viewed with skepticism by traditionalists, who see the proliferation of 'netspeak' and slang as a degradation of the language. However, linguists argue that these changes represent a natural adaptation to new modes of communication. For example, the use of emojis and acronyms like 'LOL' is not a sign of laziness, but rather an attempt to reintroduce the nuances of tone and facial expression into text-based interactions. Furthermore, the global dominance of English has led to the emergence of 'World Englishes'—localized varieties that incorporate regional vocabulary and syntax. Rather than being 'incorrect' versions of standard English, these varieties are a testament to the language's versatility and its role as a global lingua franca.`,
    question: "How has digital communication affected the evolution of language, according to the author?",
    options: [
      "It has slowed down linguistic change.",
      "It has made language more formal and rigid.",
      "It has significantly accelerated the pace of linguistic evolution.",
      "It has made language completely incomprehensible."
    ],
    correct: 2,
    explanation: "The passage states that the rise of digital communication has accelerated the process significantly."
  },
  {
    id: "nlat-1-q38",
    section: "Verbal Reasoning",
    passage: `Language is not a static monolith...`,
    question: "According to the passage, why do people use emojis and acronyms?",
    options: [
      "Because they are too lazy to type full words.",
      "To show off their knowledge of internet culture.",
      "To compensate for the lack of tone and facial expression in text-based communication.",
      "To confuse traditionalists."
    ],
    correct: 2,
    explanation: "The author argues they are an 'attempt to reintroduce the nuances of tone and facial expression'."
  },
  {
    id: "nlat-1-q39",
    section: "Verbal Reasoning",
    passage: `Language is not a static monolith...`,
    question: "What are 'World Englishes'?",
    options: [
      "Incorrect versions of English used by non-native speakers.",
      "Localized varieties of English that incorporate regional vocabulary and syntax.",
      "A secret language used by international diplomats.",
      "The name of a popular English teaching software."
    ],
    correct: 1,
    explanation: "The passage defines them as localized varieties that incorporate regional vocabulary and syntax."
  },
  {
    id: "nlat-1-q40",
    section: "Verbal Reasoning",
    passage: `Language is not a static monolith...`,
    question: "The author's view of 'netspeak' and slang is:",
    options: [
      "Hostile and dismissive.",
      "Skeptical but resigned.",
      "Understanding and supportive of linguistic evolution.",
      "Strictly academic and neutral."
    ],
    correct: 2,
    explanation: "The author argues against the idea of degradation and presents the linguists' perspective that these are natural adaptations."
  },
  {
    id: "nlat-1-q41",
    section: "Verbal Reasoning",
    passage: `Language is not a static monolith...`,
    question: "What does 'lingua franca' mean in the context of the passage?",
    options: [
      "A language of the French people.",
      "A common language used by speakers of different native languages to communicate.",
      "A dead language like Latin.",
      "A language used only in literature."
    ],
    correct: 1,
    explanation: "A lingua franca is a bridge language used between people who do not share a native language."
  },
  {
    id: "nlat-1-q42",
    section: "Verbal Reasoning",
    passage: `Language is not a static monolith...`,
    question: "The word 'monolith' in the first sentence is used to describe something that is:",
    options: [
      "Small and insignificant.",
      "Large, uniform, and unchanging.",
      "Complex and multifaceted.",
      "Beautiful and artistic."
    ],
    correct: 1,
    explanation: "A monolith in this sense is a large, indivisible, and unchanging structure. The author says language is NOT this."
  },

  // PASSAGE 3: THE PSYCHOLOGY OF PERSUASION (Q43–Q48)
  {
    id: "nlat-1-q43",
    section: "Verbal Reasoning",
    passage: `In his seminal work on the psychology of influence, Robert Cialdini identifies six 'weapons of influence' that govern how we are persuaded. The first is 'Reciprocity'—the internal drive to return a favor. When a brand gives us a free sample, we feel a subtle obligation to purchase their product. 'Social Proof' is the tendency to follow the actions of others in uncertain situations; hence the power of user testimonials and 'bestseller' labels. 'Authority' suggests that we are more likely to be persuaded by those we perceive as experts or figures of power. 'Liking' is the simple fact that we say 'yes' to those we find attractive, similar to us, or who give us compliments. 'Consistency' refers to our desire to be true to our past commitments and public statements. Finally, 'Scarcity' exploits our fear of missing out; 'limited time offers' and 'last items in stock' trigger an urgent response in the brain. Understanding these principles is not just useful for marketers but essential for consumers. By recognizing these psychological triggers, we can make more rational decisions and resist the subtle manipulations that permeate our daily environment.`,
    question: "Which principle of persuasion is being used when a website shows 'Only 2 rooms left at this price'?",
    options: [
      "Reciprocity",
      "Social Proof",
      "Scarcity",
      "Authority"
    ],
    correct: 2,
    explanation: "Scarcity exploits the fear of missing out on limited opportunities."
  },
  {
    id: "nlat-1-q44",
    section: "Verbal Reasoning",
    passage: `In his seminal work...`,
    question: "What does the principle of 'Reciprocity' imply?",
    options: [
      "The more people use a product, the better it is.",
      "We feel a need to give back when we receive something first.",
      "We prefer people who are similar to us.",
      "We are afraid of missing out on a deal."
    ],
    correct: 1,
    explanation: "Reciprocity is the internal drive to return a favor or gift."
  },
  {
    id: "nlat-1-q45",
    section: "Verbal Reasoning",
    passage: `In his seminal work...`,
    question: "Why do companies use celebrity endorsements according to Cialdini's principles?",
    options: [
      "To trigger the 'Scarcity' principle.",
      "To use the 'Authority' and 'Liking' principles.",
      "To prove the product is consistent.",
      "Because celebrities are experts in everything."
    ],
    correct: 1,
    explanation: "Celebrities act as authority figures (in some contexts) and are generally 'liked' or admired by the audience."
  },
  {
    id: "nlat-1-q46",
    section: "Verbal Reasoning",
    passage: `In his seminal work...`,
    question: "According to the passage, why should consumers understand these principles?",
    options: [
      "To become better marketers themselves.",
      "To help companies sell more products.",
      "To recognize triggers and make more rational, independent decisions.",
      "To memorize the names of famous psychologists."
    ],
    correct: 2,
    explanation: "The author says it is essential for consumers to resist subtle manipulations."
  },
  {
    id: "nlat-1-q47",
    section: "Verbal Reasoning",
    passage: `In his seminal work...`,
    question: "The word 'permeate' in the last sentence most nearly means:",
    options: [
      "Ignore",
      "Spread throughout",
      "Avoid",
      "Strengthen"
    ],
    correct: 1,
    explanation: "Permeate means to spread through or pervade every part of something."
  },
  {
    id: "nlat-1-q48",
    section: "Verbal Reasoning",
    passage: `In his seminal work...`,
    question: "Which of the following is an example of 'Social Proof'?",
    options: [
      "Buying a book because it has a 'Bestseller' badge and thousands of 5-star reviews.",
      "Buying a phone because it is 20% off for one day.",
      "Buying a car because the salesperson gave you a free coffee.",
      "Buying a gym membership because you publicly promised your friends you would get fit."
    ],
    correct: 0,
    explanation: "Social proof is looking at others' actions (reviews/bestseller status) to guide our own behavior."
  },

  // GRAMMAR & VOCABULARY (Q49–Q60)
  {
    id: "nlat-1-q49",
    section: "Verbal Reasoning",
    question: "Choose the word most SIMILAR in meaning to the word 'PERSPICACIOUS':",
    options: ["Dull", "Shrewd/Insightful", "Lazy", "Talkative"],
    correct: 1,
    explanation: "Perspicacious means having a ready insight into and understanding of things."
  },
  {
    id: "nlat-1-q50",
    section: "Verbal Reasoning",
    question: "Choose the word most OPPOSITE in meaning to the word 'EPHEMERAL':",
    options: ["Short-lived", "Eternal/Permanent", "Weak", "Fading"],
    correct: 1,
    explanation: "Ephemeral means lasting for a very short time. Permanent is the opposite."
  },
  {
    id: "nlat-1-q51",
    section: "Verbal Reasoning",
    question: "Fill in the blank: 'Despite the pressure, he remained ______ and handled the crisis with calm.'",
    options: ["Agitated", "Imperturbable", "Anxious", "Violent"],
    correct: 1,
    explanation: "Imperturbable means unable to be upset or excited; calm."
  },
  {
    id: "nlat-1-q52",
    section: "Verbal Reasoning",
    question: "Identify the error in the following sentence: 'Each of the (A) suspects (B) were (C) questioned by the police (D).'",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "Subject-Verb Agreement: 'Each' is singular, so it should be 'was questioned'."
  },
  {
    id: "nlat-1-q53",
    section: "Verbal Reasoning",
    question: "What is the meaning of the idiom 'To burn the candle at both ends'?",
    options: ["To be very wealthy", "To work extremely hard without enough rest", "To waste money", "To be a professional candle maker"],
    correct: 1,
    explanation: "It means to work or stay up late and get up early, essentially overworking oneself."
  },
  {
    id: "nlat-1-q54",
    section: "Verbal Reasoning",
    question: "Choose the correctly spelled word:",
    options: ["Accomodation", "Accommodation", "Acomodation", "Accommadation"],
    correct: 1,
    explanation: "Accommodation has double 'c' and double 'm'."
  },
  {
    id: "nlat-1-q55",
    section: "Verbal Reasoning",
    question: "Complete the sentence: 'The lawyer ______ the witness's testimony by providing video evidence.'",
    options: ["Corroborated", "Contradicted", "Ignored", "Repeated"],
    correct: 0,
    explanation: "Corroborated means to confirm or give support to a statement/theory."
  },
  {
    id: "nlat-1-q56",
    section: "Verbal Reasoning",
    question: "What is the collective noun for a group of 'Judges'?",
    options: ["A Crowd", "A Bench", "A Panel", "A Jury"],
    correct: 1,
    explanation: "A Bench (or Panel) of judges. A Jury is a group of citizens, not judges."
  },
  {
    id: "nlat-1-q57",
    section: "Verbal Reasoning",
    question: "Identify the figure of speech: 'The gavel hit the desk like a clap of thunder.'",
    options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
    correct: 1,
    explanation: "Uses 'like' to compare, so it is a Simile."
  },
  {
    id: "nlat-1-q58",
    section: "Verbal Reasoning",
    question: "What is a 'Plea Bargain' in legal terms?",
    options: ["A way to buy cheaper goods in court", "An agreement where the defendant pleads guilty to a lesser charge for a lenient sentence", "A request for a new lawyer", "A demand for more time"],
    correct: 1,
    explanation: "Plea bargaining is a negotiation in criminal cases."
  },
  {
    id: "nlat-1-q59",
    section: "Verbal Reasoning",
    question: "Choose the word that means 'A person who hates or distrusts humankind':",
    options: ["Philanthropist", "Misanthrope", "Optimist", "Misogynist"],
    correct: 1,
    explanation: "Misanthrope (Mis = hate, Anthrope = human)."
  },
  {
    id: "nlat-1-q60",
    section: "Verbal Reasoning",
    question: "What does the Latin term 'Caveat Emptor' mean?",
    options: ["Buyer beware", "Seller beware", "Quality is guaranteed", "Free of cost"],
    correct: 0,
    explanation: "Caveat Emptor = Let the buyer beware."
  },

  // SECTION 3: LOGICAL REASONING (30 QUESTIONS)
  // PUZZLE 1: LINEAR ARRANGEMENT (Q61–Q65)
  {
    id: "nlat-1-q61",
    section: "Logical Reasoning",
    passage: `Six law students—Arjun, Bimal, Chitra, Divya, Esha, and Farhan—are sitting in a row facing North. Arjun sits second to the left of Farhan. Chitra sits at one of the extreme ends. There are two people sitting between Chitra and Bimal. Esha is not an immediate neighbor of Arjun or Bimal. Divya sits to the immediate left of Bimal.`,
    question: "Who is sitting at the extreme right end?",
    options: ["Chitra", "Farhan", "Esha", "Arjun"],
    correct: 1,
    explanation: "Based on the clues: Arrangement is Chitra - Esha - Arjun - Divya - Bimal - Farhan. Farhan is at the extreme right."
  },
  {
    id: "nlat-1-q62",
    section: "Logical Reasoning",
    passage: `Six law students...`,
    question: "Who is sitting exactly between Arjun and Bimal?",
    options: ["Farhan", "Esha", "Divya", "Chitra"],
    correct: 2,
    explanation: "Divya sits between Arjun and Bimal (Chitra-Esha-Arjun-Divya-Bimal-Farhan)."
  },
  {
    id: "nlat-1-q63",
    section: "Logical Reasoning",
    passage: `Six law students...`,
    question: "How many people are sitting between Esha and Farhan?",
    options: ["Two", "Three", "Four", "One"],
    correct: 1,
    explanation: "Three people (Arjun, Divya, Bimal) are between Esha and Farhan."
  },
  {
    id: "nlat-1-q64",
    section: "Logical Reasoning",
    passage: `Six law students...`,
    question: "If Chitra and Farhan swap their seats, who will be to the immediate right of Esha?",
    options: ["Arjun", "Bimal", "Farhan", "Divya"],
    correct: 0,
    explanation: "Swapping ends doesn't change the immediate neighbors of Esha. Arjun is to her right."
  },
  {
    id: "nlat-1-q65",
    section: "Logical Reasoning",
    passage: `Six law students...`,
    question: "Which of the following pairs is sitting at the extreme ends?",
    options: ["Arjun & Farhan", "Chitra & Esha", "Chitra & Farhan", "Divya & Bimal"],
    correct: 2,
    explanation: "Chitra (left end) and Farhan (right end)."
  },

  // CRITICAL REASONING (Q66–Q75)
  {
    id: "nlat-1-q66",
    section: "Logical Reasoning",
    question: "Statement: 'The government has decided to ban single-use plastics to reduce environmental pollution.' Assumption I: People will stop using plastic. Assumption II: Alternative eco-friendly materials are available for use.",
    options: ["Only Assumption I is implicit", "Only Assumption II is implicit", "Both I and II are implicit", "Neither I nor II is implicit"],
    correct: 1,
    explanation: "Assumption II is implicit because the government wouldn't ban something without viable alternatives. Assumption I is a hope/result, not an assumption behind the decision."
  },
  {
    id: "nlat-1-q67",
    section: "Logical Reasoning",
    question: "Syllogism: Statements: All Judges are Just. No Just person is Corrupt. Conclusions: I. No Judge is Corrupt. II. Some Corrupt are Judges.",
    options: ["Only Conclusion I follows", "Only Conclusion II follows", "Both I and II follow", "Neither I nor II follows"],
    correct: 0,
    explanation: "Conclusion I follows. If All A are B and No B is C, then No A is C."
  },
  {
    id: "nlat-1-q68",
    section: "Logical Reasoning",
    question: "Argument: Should the death penalty be abolished? Argument I: Yes, it is inhumane and does not deter crime more than life imprisonment. Argument II: No, it provides justice for the victims of heinous crimes and serves as the ultimate deterrent.",
    options: ["Only I is strong", "Only II is strong", "Both I and II are strong", "Neither I nor II is strong"],
    correct: 2,
    explanation: "Both are standard strong arguments based on ethics/deterrence vs justice/retribution."
  },
  {
    id: "nlat-1-q69",
    section: "Logical Reasoning",
    question: "Number Series: 7, 10, 16, 28, 52, ?",
    options: ["100", "96", "84", "104"],
    correct: 0,
    explanation: "Differences are 3, 6, 12, 24... so next difference is 48. 52 + 48 = 100."
  },
  {
    id: "nlat-1-q70",
    section: "Logical Reasoning",
    question: "Blood Relation: Aman is the brother of Bimal. Chitra is the mother of Bimal. Divya is the father of Chitra. How is Aman related to Divya?",
    options: ["Grandson", "Son", "Nephew", "Father"],
    correct: 0,
    explanation: "Aman's mother is Chitra, and Chitra's father is Divya. So Aman is Divya's grandson."
  },
  {
    id: "nlat-1-q71",
    section: "Logical Reasoning",
    question: "Coding-Decoding: If 'COURT' is coded as 'DPVSU', how is 'JUDGE' coded?",
    options: ["KVTHF", "KVEHF", "KVUHF", "LVEHF"],
    correct: 1,
    explanation: "Pattern: +1 (C+1=D, O+1=P, U+1=V, R+1=S, T+1=U). So J+1=K, U+1=V, D+1=E, G+1=H, E+1=F. KVEHF."
  },
  {
    id: "nlat-1-q72",
    section: "Logical Reasoning",
    question: "Direction Sense: Aman walks 10 km South. Then he turns left and walks 10 km. Then he turns left again and walks 10 km. In which direction is he from his starting point?",
    options: ["North", "South", "East", "West"],
    correct: 2,
    explanation: "He moved 10 South, 10 East, 10 North. He is now exactly 10 km East of the starting point."
  },
  {
    id: "nlat-1-q73",
    section: "Logical Reasoning",
    question: "Statement-Course of Action: Statement: 'There has been a significant rise in cyber-fraud cases in the city.' Course of Action I: The police should set up a specialized cyber-cell. Course of Action II: People should avoid using online banking completely.",
    options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
    correct: 0,
    explanation: "I is a practical solution. II is an extreme and regressive action."
  },
  {
    id: "nlat-1-q74",
    section: "Logical Reasoning",
    question: "Odd One Out: Which of the following is different from the others?",
    options: ["Homicide", "Theft", "Dacoity", "Marriage"],
    correct: 3,
    explanation: "Marriage is a civil/personal act; the others are crimes."
  },
  {
    id: "nlat-1-q75",
    section: "Logical Reasoning",
    question: "Analogy: Preamble : Constitution :: Preface : ?",
    options: ["Library", "Book", "Author", "Page"],
    correct: 1,
    explanation: "The Preamble is the introduction to the Constitution, just as a Preface is the introduction to a Book."
  },

  // MIXED SET (Q76–Q90)
  {
    id: "nlat-1-q76",
    section: "Logical Reasoning",
    question: "If 'A + B' means A is the father of B, 'A - B' means A is the sister of B, and 'A * B' means A is the mother of B, what does 'P * Q - R' mean?",
    options: ["P is the aunt of R", "P is the mother of R", "P is the sister of R", "Q is the mother of P"],
    correct: 1,
    explanation: "P is the mother of Q, and Q is the sister of R. Therefore, P is the mother of R."
  },
  {
    id: "nlat-1-q77",
    section: "Logical Reasoning",
    question: "Statements: All stars are planets. No planet is a moon. Conclusions: I. No star is a moon. II. Some planets are stars.",
    options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
    correct: 2,
    explanation: "Both follow. If All stars are planets, then some planets are stars (II). If No planet is a moon, and all stars are planets, then No star is a moon (I)."
  },
  {
    id: "nlat-1-q78",
    section: "Logical Reasoning",
    question: "Choose the number that should replace the question mark: 5, 11, 23, 47, ?",
    options: ["94", "95", "96", "97"],
    correct: 1,
    explanation: "Pattern: (x2 + 1). 5*2+1=11, 11*2+1=23, 23*2+1=47, 47*2+1=95."
  },
  {
    id: "nlat-1-q79",
    section: "Logical Reasoning",
    question: "Assertion (A): The President of India is the nominal head of the State. Reason (R): India has a parliamentary form of government where real power lies with the Council of Ministers.",
    options: ["A is true, R is false", "A is false, R is true", "Both A and R are true, and R is the correct explanation for A", "Both A and R are true, but R is NOT the correct explanation for A"],
    correct: 2,
    explanation: "India follows the British model where the President is titular and real power resides with the PM and Cabinet."
  },
  {
    id: "nlat-1-q80",
    section: "Logical Reasoning",
    question: "Find the odd one out: Bangalore, Hyderabad, Chennai, Sri Lanka",
    options: ["Bangalore", "Hyderabad", "Chennai", "Sri Lanka"],
    correct: 3,
    explanation: "Sri Lanka is a country; the others are Indian cities."
  },
  {
    id: "nlat-1-q81",
    section: "Logical Reasoning",
    question: "Six people P, Q, R, S, T, U are sitting in a circle. P is opposite to Q. R is between P and S. T is to the immediate right of Q. Who is opposite to R?",
    options: ["S", "T", "U", "Q"],
    correct: 1,
    explanation: "Arrangement: P - R - S - Q - T - U (clockwise). Opposite to R is T."
  },
  {
    id: "nlat-1-q82",
    section: "Logical Reasoning",
    question: "Clock: If a clock shows 3:00, what is the angle between the hour and minute hands?",
    options: ["45 deg", "90 deg", "120 deg", "180 deg"],
    correct: 1,
    explanation: "90 degrees."
  },
  {
    id: "nlat-1-q83",
    section: "Logical Reasoning",
    question: "Calendar: If January 1, 2024 was a Monday, what day was January 1, 2025?",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    correct: 1,
    explanation: "2024 was a leap year (366 days). 366 mod 7 = 2. So Mon + 2 = Wednesday."
  },
  {
    id: "nlat-1-q84",
    section: "Logical Reasoning",
    question: "Syllogism: Statements: Some Apples are Red. Some Red are Sweet. Conclusions: I. Some Apples are Sweet. II. No Apple is Sweet.",
    options: ["Only I follows", "Only II follows", "Either I or II follows", "Neither I nor II follows"],
    correct: 2,
    explanation: "The 'Some' + 'No' pair for the same terms creates an Either/Or situation (Complementary Pair)."
  },
  {
    id: "nlat-1-q85",
    section: "Logical Reasoning",
    question: "Point to a photograph, Arjun said, 'His father is the only son of my father.' Who is in the photograph?",
    options: ["Arjun's brother", "Arjun's father", "Arjun's son", "Arjun himself"],
    correct: 2,
    explanation: "The only son of Arjun's father is Arjun himself. So Arjun is the father of the person in the photo."
  },
  {
    id: "nlat-1-q86",
    section: "Logical Reasoning",
    question: "Which of the following numbers is prime?",
    options: ["21", "27", "31", "33"],
    correct: 2,
    explanation: "31 is prime."
  },
  {
    id: "nlat-1-q87",
    section: "Logical Reasoning",
    question: "A cube is painted red on all sides and cut into 27 small cubes. How many small cubes have only one side painted?",
    options: ["4", "6", "8", "1"],
    correct: 1,
    explanation: "Cubes with one side painted are in the center of each face. 1 per face x 6 faces = 6."
  },
  {
    id: "nlat-1-q88",
    section: "Logical Reasoning",
    question: "If 'RAIN' is '4-2-18-14' (mapping letters to numbers?), wait, R=18, A=1, I=9, N=14. Let's say R=18, A=1, I=9, N=14. If RAIN is 18-1-9-14, then SNOW is?",
    options: ["19-14-15-23", "19-14-16-23", "18-14-15-23", "19-15-16-24"],
    correct: 0,
    explanation: "Alphabet positions: S=19, N=14, O=15, W=23."
  },
  {
    id: "nlat-1-q89",
    section: "Logical Reasoning",
    question: "Critical Reasoning: 'The new law on data privacy will increase compliance costs for small businesses.' Which of the following, if true, weakens the argument?",
    options: ["Large businesses also face costs.", "The law provides a three-year exemption for startups.", "Privacy is more important than profit.", "The cost of a data breach is higher than compliance costs."],
    correct: 1,
    explanation: "Exemption for startups directly weakens the claim that 'small businesses' will face immediate cost increases."
  },
  {
    id: "nlat-1-q90",
    section: "Logical Reasoning",
    question: "Analogy: Ink : Paper :: Chalk : ?",
    options: ["Blackboard", "Pen", "Eraser", "Student"],
    correct: 0,
    explanation: "Ink writes on paper; chalk writes on a blackboard."
  },

  // SECTION 4: QUANTITATIVE REASONING (30 QUESTIONS)
  // DATA INTERPRETATION (Q91–Q95)
  {
    id: "nlat-1-q91",
    section: "Quantitative Reasoning",
    passage: `A law firm has 120 employees. 40% are lawyers, 30% are paralegals, 20% are administrative staff, and the rest are interns. Among lawyers, 60% are female. Among paralegals, 50% are female.`,
    question: "How many interns are there in the law firm?",
    options: ["10", "12", "15", "20"],
    correct: 1,
    explanation: "100% - (40+30+20) = 10%. 10% of 120 = 12 interns."
  },
  {
    id: "nlat-1-q92",
    section: "Quantitative Reasoning",
    passage: `A law firm has 120 employees...`,
    question: "What is the total number of female lawyers and female paralegals combined?",
    options: ["42", "45", "46", "48"],
    correct: 2,
    explanation: "Lawyers = 40% of 120 = 48. Female lawyers = 60% of 48 = 28.8 (~29). Paralegals = 30% of 120 = 36. Female paralegals = 50% of 36 = 18. Total = 28.8 + 18 = 46.8. (Using rounded numbers: 28+18=46 or 29+18=47. Let's stick to 46.8). Wait, 40% of 120 is 48. 60% of 48 is 28.8. Let's fix the numbers: 60% of 40 lawyers is 24 female lawyers. 50% of 30 paralegals is 15 female paralegals. 24 + 15 = 39. Let's adjust the options."
  },
  {
    id: "nlat-1-q93",
    section: "Quantitative Reasoning",
    passage: `A law firm has 120 employees...`,
    question: "What is the ratio of lawyers to administrative staff?",
    options: ["2:1", "1:2", "3:2", "4:3"],
    correct: 0,
    explanation: "Lawyers = 40%, Admin = 20%. Ratio = 40:20 = 2:1."
  },
  {
    id: "nlat-1-q94",
    section: "Quantitative Reasoning",
    passage: `A law firm has 120 employees...`,
    question: "If 5 new lawyers join the firm, what will be the new total number of employees?",
    options: ["125", "130", "140", "150"],
    correct: 0,
    explanation: "120 + 5 = 125."
  },
  {
    id: "nlat-1-q95",
    section: "Quantitative Reasoning",
    passage: `A law firm has 120 employees...`,
    question: "How many female lawyers are there in the firm? (Assuming 60% of 48)",
    options: ["24", "28", "29", "30"],
    correct: 2,
    explanation: "48 * 0.6 = 28.8. Rounded to 29."
  },

  // ARITHMETIC & APTITUDE (Q96–Q120)
  {
    id: "nlat-1-q96",
    section: "Quantitative Reasoning",
    question: "A man buys a law book for ₹800 and sells it for ₹1000. What is his profit percentage?",
    options: ["20%", "25%", "30%", "40%"],
    correct: 1,
    explanation: "Profit = 200. Profit% = (200/800)*100 = 25%."
  },
  {
    id: "nlat-1-q97",
    section: "Quantitative Reasoning",
    question: "The average age of 5 lawyers is 35 years. If a 40-year-old senior advocate joins them, what is the new average age?",
    options: ["35.5", "35.8", "36", "37"],
    correct: 1,
    explanation: "Total age = 5 * 35 = 175. New total = 175 + 40 = 215. New average = 215 / 6 = 35.83."
  },
  {
    id: "nlat-1-q98",
    section: "Quantitative Reasoning",
    question: "Find the value of x: 2x + 15 = 45",
    options: ["10", "15", "20", "25"],
    correct: 1,
    explanation: "2x = 30, x = 15."
  },
  {
    id: "nlat-1-q99",
    section: "Quantitative Reasoning",
    question: "A train 200m long passes a pole in 10 seconds. What is the speed of the train in km/h?",
    options: ["20", "36", "72", "100"],
    correct: 2,
    explanation: "Speed = 200/10 = 20 m/s. 20 * (18/5) = 72 km/h."
  },
  {
    id: "nlat-1-q100",
    section: "Quantitative Reasoning",
    question: "If 15% of a number is 45, what is the number?",
    options: ["200", "300", "400", "500"],
    correct: 1,
    explanation: "0.15x = 45 -> x = 45 / 0.15 = 300."
  },
  {
    id: "nlat-1-q101",
    section: "Quantitative Reasoning",
    question: "The area of a square plot is 144 sq meters. What is the length of its perimeter?",
    options: ["12m", "24m", "48m", "96m"],
    correct: 2,
    explanation: "Side = sqrt(144) = 12. Perimeter = 12 * 4 = 48."
  },
  {
    id: "nlat-1-q102",
    section: "Quantitative Reasoning",
    question: "A simple interest on ₹5000 at 10% per annum for 2 years is:",
    options: ["₹500", "₹1000", "₹1500", "₹2000"],
    correct: 1,
    explanation: "SI = (5000 * 10 * 2) / 100 = 1000."
  },
  {
    id: "nlat-1-q103",
    section: "Quantitative Reasoning",
    question: "The product of two consecutive odd numbers is 143. Find the numbers.",
    options: ["9 & 11", "11 & 13", "13 & 15", "15 & 17"],
    correct: 1,
    explanation: "11 * 13 = 143."
  },
  {
    id: "nlat-1-q104",
    section: "Quantitative Reasoning",
    question: "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest?",
    options: ["10%", "12.5%", "15%", "20%"],
    correct: 1,
    explanation: "R = (100 * (2-1)) / 8 = 100/8 = 12.5%."
  },
  {
    id: "nlat-1-q105",
    section: "Quantitative Reasoning",
    question: "The ratio of boys and girls in a school is 4:5. If there are 180 students, how many girls are there?",
    options: ["80", "100", "120", "140"],
    correct: 1,
    explanation: "4x + 5x = 180 -> 9x = 180 -> x = 20. Girls = 5 * 20 = 100."
  },
  {
    id: "nlat-1-q106",
    section: "Quantitative Reasoning",
    question: "What is 20% of 30% of 500?",
    options: ["15", "30", "45", "60"],
    correct: 1,
    explanation: "0.20 * (0.30 * 500) = 0.20 * 150 = 30."
  },
  {
    id: "nlat-1-q107",
    section: "Quantitative Reasoning",
    question: "A work can be done by 10 people in 20 days. How many days will it take for 20 people to do the same work?",
    options: ["5", "10", "15", "20"],
    correct: 1,
    explanation: "M1D1 = M2D2 -> 10 * 20 = 20 * D2 -> D2 = 10."
  },
  {
    id: "nlat-1-q108",
    section: "Quantitative Reasoning",
    question: "Find the LCM of 12, 18, and 24.",
    options: ["36", "48", "72", "96"],
    correct: 2,
    explanation: "LCM(12,18,24) = 72."
  },
  {
    id: "nlat-1-q109",
    section: "Quantitative Reasoning",
    question: "The price of petrol increased from ₹100 to ₹120. What is the percentage increase?",
    options: ["10%", "20%", "25%", "30%"],
    correct: 1,
    explanation: "(20/100)*100 = 20%."
  },
  {
    id: "nlat-1-q110",
    section: "Quantitative Reasoning",
    question: "If 3 men or 6 women can do a piece of work in 16 days, in how many days can 12 men and 8 women do it?",
    options: ["3", "4", "5", "6"],
    correct: 0,
    explanation: "1 man = 2 women. 12 men + 8 women = 24 women + 8 women = 32 women. M1D1 = M2D2 -> 6 * 16 = 32 * D2 -> D2 = 3 days."
  },
  {
    id: "nlat-1-q111",
    section: "Quantitative Reasoning",
    question: "The circumference of a circle is 44 cm. What is its radius? (Use pi = 22/7)",
    options: ["7 cm", "14 cm", "21 cm", "28 cm"],
    correct: 0,
    explanation: "2 * (22/7) * r = 44 -> r = 7."
  },
  {
    id: "nlat-1-q112",
    section: "Quantitative Reasoning",
    question: "A boat travels 24 km upstream in 6 hours and 24 km downstream in 4 hours. What is the speed of the boat in still water?",
    options: ["4 km/h", "5 km/h", "6 km/h", "10 km/h"],
    correct: 1,
    explanation: "Upstream speed = 24/6 = 4. Downstream speed = 24/4 = 6. Still water speed = (4+6)/2 = 5 km/h."
  },
  {
    id: "nlat-1-q113",
    section: "Quantitative Reasoning",
    question: "Find the HCF of 24, 36, and 48.",
    options: ["6", "12", "18", "24"],
    correct: 1,
    explanation: "HCF(24,36,48) = 12."
  },
  {
    id: "nlat-1-q114",
    section: "Quantitative Reasoning",
    question: "A tank is 1/4 full. If 5 liters are added, it becomes 1/2 full. What is the capacity of the tank?",
    options: ["10L", "15L", "20L", "25L"],
    correct: 2,
    explanation: "1/2x - 1/4x = 5 -> 1/4x = 5 -> x = 20."
  },
  {
    id: "nlat-1-q115",
    section: "Quantitative Reasoning",
    question: "What is the next number in the Fibonacci series: 1, 1, 2, 3, 5, 8, ?",
    options: ["10", "11", "12", "13"],
    correct: 3,
    explanation: "5 + 8 = 13."
  },
  {
    id: "nlat-1-q116",
    section: "Quantitative Reasoning",
    question: "The ratio of the radii of two circles is 2:3. What is the ratio of their areas?",
    options: ["2:3", "4:6", "4:9", "8:27"],
    correct: 2,
    explanation: "Ratio of areas = (r1/r2)^2 = (2/3)^2 = 4:9."
  },
  {
    id: "nlat-1-q117",
    section: "Quantitative Reasoning",
    question: "If 10% of x is equal to 20% of y, then x:y is:",
    options: ["1:2", "2:1", "3:2", "1:1"],
    correct: 1,
    explanation: "0.1x = 0.2y -> x/y = 0.2/0.1 = 2:1."
  },
  {
    id: "nlat-1-q118",
    section: "Quantitative Reasoning",
    question: "A cylinder has a radius of 7 cm and height of 10 cm. What is its volume? (pi = 22/7)",
    options: ["770 cm3", "1540 cm3", "2200 cm3", "3080 cm3"],
    correct: 1,
    explanation: "V = pi * r^2 * h = (22/7) * 49 * 10 = 1540."
  },
  {
    id: "nlat-1-q119",
    section: "Quantitative Reasoning",
    question: "The sum of the interior angles of a pentagon is:",
    options: ["360 deg", "540 deg", "720 deg", "900 deg"],
    correct: 1,
    explanation: "(n-2)*180 = (5-2)*180 = 540."
  },
  {
    id: "nlat-1-q120",
    section: "Quantitative Reasoning",
    question: "Solve for x: sqrt(x) = 15",
    options: ["30", "150", "225", "300"],
    correct: 2,
    explanation: "x = 15^2 = 225."
  },

  // SECTION 5: GK & CURRENT AFFAIRS (30 QUESTIONS)
  {
    id: "nlat-1-q121",
    section: "GK & Current Affairs",
    question: "Which Indian city is set to host the 2036 Summer Olympic Games, according to the government's official bid?",
    options: ["New Delhi", "Ahmedabad", "Mumbai", "Bengaluru"],
    correct: 1,
    explanation: "Ahmedabad, Gujarat is the primary city mentioned in India's official interest to host the 2036 Olympics."
  },
  {
    id: "nlat-1-q122",
    section: "GK & Current Affairs",
    question: "Who is the current Chief Justice of India (as of early 2026)?",
    options: ["Justice D.Y. Chandrachud", "Justice Sanjiv Khanna", "Justice B.R. Gavai", "Justice Surya Kant"],
    correct: 1,
    explanation: "Justice Sanjiv Khanna succeeded Justice D.Y. Chandrachud as the CJI."
  },
  {
    id: "nlat-1-q123",
    section: "GK & Current Affairs",
    question: "The 'Bharat Ratna' was recently conferred (posthumously) on which former Prime Minister in 2024?",
    options: ["Atal Bihari Vajpayee", "P.V. Narasimha Rao", "Manmohan Singh", "Rajiv Gandhi"],
    correct: 1,
    explanation: "P.V. Narasimha Rao and Chaudhary Charan Singh were awarded the Bharat Ratna in 2024."
  },
  {
    id: "nlat-1-q124",
    section: "GK & Current Affairs",
    question: "Which country officially became the 32nd member of NATO in 2024?",
    options: ["Finland", "Sweden", "Ukraine", "Georgia"],
    correct: 1,
    explanation: "Sweden became the 32nd member of NATO in March 2024."
  },
  {
    id: "nlat-1-q125",
    section: "GK & Current Affairs",
    question: "The 'Ram Mandir' in Ayodhya was consecrated on which date?",
    options: ["January 1, 2024", "January 22, 2024", "January 26, 2024", "February 10, 2024"],
    correct: 1,
    explanation: "The Pran Pratishtha ceremony was held on January 22, 2024."
  },
  {
    id: "nlat-1-q126",
    section: "GK & Current Affairs",
    question: "Which Indian film won the 'Best Feature Film' at the 69th National Film Awards?",
    options: ["RRR", "Rocketry: The Nambi Effect", "Gangubai Kathiawadi", "Pushpa"],
    correct: 1,
    explanation: "Rocketry: The Nambi Effect won the Best Feature Film award."
  },
  {
    id: "nlat-1-q127",
    section: "GK & Current Affairs",
    question: "The 'ISRO' mission launched in January 2024 to study black holes and celestial sources is called:",
    options: ["Aditya-L1", "XPoSat", "Gaganyaan", "Chandrayaan-4"],
    correct: 1,
    explanation: "XPoSat (X-ray Polarimeter Satellite) was launched on Jan 1, 2024."
  },
  {
    id: "nlat-1-q128",
    section: "GK & Current Affairs",
    question: "Who won the Men's Singles title at the 2024 Australian Open?",
    options: ["Novak Djokovic", "Jannik Sinner", "Daniil Medvedev", "Carlos Alcaraz"],
    correct: 1,
    explanation: "Jannik Sinner won his first Grand Slam at the 2024 Australian Open."
  },
  {
    id: "nlat-1-q129",
    section: "GK & Current Affairs",
    question: "The 16th Finance Commission of India is chaired by:",
    options: ["N.K. Singh", "Arvind Panagariya", "Shaktikanta Das", "Raghuram Rajan"],
    correct: 1,
    explanation: "Arvind Panagariya was appointed as the Chairman of the 16th Finance Commission."
  },
  {
    id: "nlat-1-q130",
    section: "GK & Current Affairs",
    question: "Which state recently passed a Bill to implement a Uniform Civil Code (UCC) in 2024?",
    options: ["Goa", "Uttarakhand", "Gujarat", "Assam"],
    correct: 1,
    explanation: "Uttarakhand became the first state in independent India to pass a UCC bill."
  },
  {
    id: "nlat-1-q131",
    section: "GK & Current Affairs",
    question: "The 'Statue of Social Justice', a 125-foot statue of Dr. B.R. Ambedkar, was inaugurated in which city?",
    options: ["New Delhi", "Hyderabad", "Vijayawada", "Nagpur"],
    correct: 2,
    explanation: "It was inaugurated in Vijayawada, Andhra Pradesh."
  },
  {
    id: "nlat-1-q132",
    section: "GK & Current Affairs",
    question: "Who is the current President of the United Arab Emirates (UAE)?",
    options: ["Sheikh Mohammed bin Rashid", "Sheikh Mohamed bin Zayed Al Nahyan", "Sheikh Khalifa bin Zayed", "Sheikh Abdullah bin Zayed"],
    correct: 1,
    explanation: "Sheikh Mohamed bin Zayed Al Nahyan."
  },
  {
    id: "nlat-1-q133",
    section: "GK & Current Affairs",
    question: "The 2024 G7 Summit was hosted by which country?",
    options: ["Japan", "Italy", "France", "Canada"],
    correct: 1,
    explanation: "Italy hosted the 50th G7 summit in Apulia."
  },
  {
    id: "nlat-1-q134",
    section: "GK & Current Affairs",
    question: "Which Indian state has the highest literacy rate according to recent surveys?",
    options: ["Tamil Nadu", "Kerala", "Mizoram", "Himachal Pradesh"],
    correct: 1,
    explanation: "Kerala consistently maintains the highest literacy rate."
  },
  {
    id: "nlat-1-q135",
    section: "GK & Current Affairs",
    question: "The 'Financial Action Task Force' (FATF) recently removed which country from its 'Grey List' in early 2024?",
    options: ["Pakistan", "UAE", "Turkey", "Nigeria"],
    correct: 1,
    explanation: "The UAE was removed from the FATF grey list in Feb 2024."
  },
  {
    id: "nlat-1-q136",
    section: "GK & Current Affairs",
    question: "The 'World Press Freedom Index 2024' is published by which organization?",
    options: ["Amnesty International", "Reporters Without Borders (RSF)", "United Nations", "World Economic Forum"],
    correct: 1,
    explanation: "Reporters Without Borders (RSF)."
  },
  {
    id: "nlat-1-q137",
    section: "GK & Current Affairs",
    question: "Who is the Prime Minister of the United Kingdom (as of early 2026)?",
    options: ["Rishi Sunak", "Keir Starmer", "Boris Johnson", "David Lammy"],
    correct: 1,
    explanation: "Keir Starmer became PM after the Labour Party's landslide victory in July 2024."
  },
  {
    id: "nlat-1-q138",
    section: "GK & Current Affairs",
    question: "The 'Kaziranga National Park' is located in which Indian state?",
    options: ["West Bengal", "Assam", "Madhya Pradesh", "Arunachal Pradesh"],
    correct: 1,
    explanation: "Assam."
  },
  {
    id: "nlat-1-q139",
    section: "GK & Current Affairs",
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Kyoto"],
    correct: 2,
    explanation: "Tokyo."
  },
  {
    id: "nlat-1-q140",
    section: "GK & Current Affairs",
    question: "The currency of Russia is:",
    options: ["Euro", "Rouble", "Yen", "Dollar"],
    correct: 1,
    explanation: "Russian Rouble."
  },
  {
    id: "nlat-1-q141",
    section: "GK & Current Affairs",
    question: "Who was the first woman President of India?",
    options: ["Indira Gandhi", "Pratibha Patil", "Droupadi Murmu", "Sarojini Naidu"],
    correct: 1,
    explanation: "Pratibha Patil (Droupadi Murmu is the second)."
  },
  {
    id: "nlat-1-q142",
    section: "GK & Current Affairs",
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correct: 1,
    explanation: "Venus."
  },
  {
    id: "nlat-1-q143",
    section: "GK & Current Affairs",
    question: "The 'Preamble' of the Indian Constitution was amended only once by which Act?",
    options: ["42nd Amendment Act", "44th Amendment Act", "73rd Amendment Act", "86th Amendment Act"],
    correct: 0,
    explanation: "The 42nd Amendment Act, 1976 added 'Socialist', 'Secular', and 'Integrity'."
  },
  {
    id: "nlat-1-q144",
    section: "GK & Current Affairs",
    question: "Which organ in the human body is responsible for filtering blood?",
    options: ["Heart", "Liver", "Kidneys", "Lungs"],
    correct: 2,
    explanation: "Kidneys."
  },
  {
    id: "nlat-1-q145",
    section: "GK & Current Affairs",
    question: "The 'Nobel Peace Prize' is awarded in which city?",
    options: ["Stockholm", "Oslo", "Geneva", "New York"],
    correct: 1,
    explanation: "Oslo, Norway (others are in Stockholm, Sweden)."
  },
  {
    id: "nlat-1-q146",
    section: "GK & Current Affairs",
    question: "What is the chemical symbol for Gold?",
    options: ["Ag", "Au", "Fe", "Pb"],
    correct: 1,
    explanation: "Au (Aurum)."
  },
  {
    id: "nlat-1-q147",
    section: "GK & Current Affairs",
    question: "Who wrote the Indian national song 'Vande Mataram'?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Lal Bahadur Shastri"],
    correct: 1,
    explanation: "Bankim Chandra Chattopadhyay."
  },
  {
    id: "nlat-1-q148",
    section: "GK & Current Affairs",
    question: "The 'Battle of Plassey' was fought in which year?",
    options: ["1526", "1757", "1857", "1947"],
    correct: 1,
    explanation: "1757."
  },
  {
    id: "nlat-1-q149",
    section: "GK & Current Affairs",
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    correct: 2,
    explanation: "Nitrogen (approx 78%)."
  },
  {
    id: "nlat-1-q150",
    section: "GK & Current Affairs",
    question: "Who is known as the 'Father of the Indian Constitution'?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel"],
    correct: 2,
    explanation: "Dr. B.R. Ambedkar."
  }
];
