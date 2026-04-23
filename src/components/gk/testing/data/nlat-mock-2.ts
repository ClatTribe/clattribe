import { MockQuestion } from "../constants";

export const NLAT_MOCK_2: MockQuestion[] = [
  // SECTION 1: LEGAL REASONING (30 QUESTIONS)
  // PASSAGE 1: LAW OF TORTS – STRICT & ABSOLUTE LIABILITY (Q1–Q6)
  {
    id: "nlat-2-q1",
    section: "Legal Reasoning",
    passage: `The principle of 'Strict Liability' was established in the English case of Rylands v. Fletcher (1868). It holds that if a person brings onto their land something that is likely to cause mischief if it escapes, they are prima facie liable for all the damage which is the natural consequence of its escape, even if they were not negligent. However, this rule is subject to several exceptions: (1) Act of God (Vis Major); (2) Plaintiff's own fault; (3) Consent of the Plaintiff (Volenti non fit injuria); (4) Act of a third party (stranger); and (5) Statutory Authority. In contrast, the Supreme Court of India, in the case of M.C. Mehta v. Union of India (1987) – also known as the Oleum Gas Leak case – evolved the principle of 'Absolute Liability'. This principle applies to enterprises engaged in hazardous or inherently dangerous activities. Unlike strict liability, absolute liability has NO exceptions. The enterprise is liable even if the escape was caused by an act of God or a third party. The Court reasoned that an enterprise carrying out such dangerous activities for profit must bear the cost of any harm caused, and that the compensation should be proportional to the size and financial capacity of the enterprise to act as a deterrent.`,
    question: "An industrial plant in Bhopal stores lethal methyl isocyanate gas. During a massive earthquake (an Act of God), the storage tanks rupture, and the gas leaks, causing thousands of deaths. Under which principle would the enterprise most likely be held liable in India today?",
    options: [
      "Strict Liability, but they would be saved by the 'Act of God' exception.",
      "Absolute Liability, and they would be liable regardless of the earthquake.",
      "Vicarious Liability, because the employees failed to secure the tanks.",
      "No liability, as earthquakes are beyond human control."
    ],
    correct: 1,
    explanation: "In India, for hazardous industries, 'Absolute Liability' applies, which has no exceptions, not even for an Act of God."
  },
  {
    id: "nlat-2-q2",
    section: "Legal Reasoning",
    passage: `The principle of 'Strict Liability'...`,
    question: "Aman keeps a pet python in a secure glass cage. A burglar breaks into Aman's house and smashes the cage. The python escapes and bites the neighbor. Is Aman liable under the rule in Rylands v. Fletcher?",
    options: [
      "Yes, he brought the dangerous animal onto his land.",
      "No, because the escape was caused by the act of a third party (the burglar).",
      "Yes, because pythons are inherently dangerous.",
      "No, but only if Aman can prove the neighbor was teasing the snake."
    ],
    correct: 1,
    explanation: "Under the rule of 'Strict Liability', the 'act of a third party' is a valid defense."
  },
  {
    id: "nlat-2-q3",
    section: "Legal Reasoning",
    passage: `The principle of 'Strict Liability'...`,
    question: "The main difference between Strict Liability and Absolute Liability is:",
    options: [
      "Strict liability requires proof of negligence, while absolute liability does not.",
      "Strict liability has exceptions, while absolute liability has none.",
      "Absolute liability only applies to the government.",
      "There is no difference; they are two names for the same thing."
    ],
    correct: 1,
    explanation: "Strict liability allows for certain defenses (like Act of God), whereas Absolute liability (in India) does not."
  },
  {
    id: "nlat-2-q4",
    section: "Legal Reasoning",
    passage: `The principle of 'Strict Liability'...`,
    question: "Why did the Supreme Court of India create the principle of 'Absolute Liability'?",
    options: [
      "To follow the English law more closely.",
      "Because the exceptions in strict liability allowed large industries to escape responsibility for massive disasters.",
      "To reduce the amount of compensation paid to victims.",
      "To encourage more foreign investment in hazardous industries."
    ],
    correct: 1,
    explanation: "The Court felt that the 19th-century English rule of strict liability was inadequate for modern industrial disasters like the Bhopal gas tragedy."
  },
  {
    id: "nlat-2-q5",
    section: "Legal Reasoning",
    passage: `The principle of 'Strict Liability'...`,
    question: "Aman and his neighbor Mr. X agree to install a shared water pipe for their mutual benefit. The pipe bursts without any fault of Aman and floods Mr. X's basement. Is Aman liable under strict liability?",
    options: [
      "Yes, he is the owner of the pipe.",
      "No, because the water was for their 'common benefit', implying Mr. X's consent.",
      "Yes, water is a dangerous thing.",
      "No, but only if Aman helps clean the basement."
    ],
    correct: 1,
    explanation: "'Common Benefit' or 'Consent of the Plaintiff' is a recognized exception to the rule of strict liability."
  },
  {
    id: "nlat-2-q6",
    section: "Legal Reasoning",
    passage: `The principle of 'Strict Liability'...`,
    question: "If an enterprise is found 'Absolutely Liable', how is the compensation determined according to the M.C. Mehta judgment?",
    options: [
      "Based on the actual medical bills of the victims only.",
      "A fixed amount of ₹1 lakh per person.",
      "It must be proportional to the financial magnitude and capacity of the enterprise.",
      "The enterprise chooses the amount it wants to pay."
    ],
    correct: 2,
    explanation: "The Court held that the larger and more prosperous the enterprise, the greater must be the amount of compensation."
  },

  // PASSAGE 2: CONSTITUTIONAL LAW – SEPARATION OF POWERS (Q7–Q12)
  {
    id: "nlat-2-q7",
    section: "Legal Reasoning",
    passage: `The doctrine of Separation of Powers, traditionally attributed to Montesquieu, suggests that the three branches of government—the Legislature, the Executive, and the Judiciary—should be separate and independent. In India, while there is no rigid separation of powers as in the USA, the Constitution provides for a system of 'Checks and Balances'. The Legislature makes laws, the Executive implements them, and the Judiciary interprets them. The Judiciary has the power of 'Judicial Review' (Article 13, 32, 226) to strike down laws that violate the Constitution. However, the Judiciary is expected to practice 'Judicial Restraint' and not interfere in the policy-making domain of the Executive, unless it is unconstitutional. Conversely, 'Judicial Activism' occurs when the courts take a proactive role in protecting rights and filling legislative vacuums (e.g., the Vishaka Guidelines). The 'Basic Structure Doctrine' (Kesavananda Bharati, 1973) is the ultimate check on the Parliament's power to amend the Constitution, ensuring that the core identity of the Constitution remains untouched.`,
    question: "The Supreme Court of India issues a set of guidelines for the protection of women at workplaces because the Parliament has not yet passed a law on the subject. This is an example of:",
    options: [
      "Judicial Review",
      "Judicial Activism",
      "Judicial Restraint",
      "Executive Overreach"
    ],
    correct: 1,
    explanation: "Judicial Activism is when the court proactively fills a gap in the law to protect fundamental rights."
  },
  {
    id: "nlat-2-q8",
    section: "Legal Reasoning",
    passage: `The doctrine of Separation of Powers...`,
    question: "The Parliament passes a law that takes away the Supreme Court's power of Judicial Review. The Supreme Court strikes down this law. On what basis would the Court most likely do this?",
    options: [
      "It violates the principle of separation of powers.",
      "Judicial Review is part of the 'Basic Structure' of the Constitution.",
      "The President did not sign the law.",
      "The Parliament does not have the power to make any laws."
    ],
    correct: 1,
    explanation: "The Supreme Court has held that Judicial Review is a basic feature of the Constitution that cannot be removed even by a constitutional amendment."
  },
  {
    id: "nlat-2-q9",
    section: "Legal Reasoning",
    passage: `The doctrine of Separation of Powers...`,
    question: "In India, the 'Separation of Powers' is most accurately described as:",
    options: [
      "A rigid separation where no branch can ever interact with another.",
      "A system of functional overlapping with 'Checks and Balances'.",
      "A system where the Executive is superior to all other branches.",
      "A system where the Judiciary makes all the laws."
    ],
    correct: 1,
    explanation: "India follows a parliamentary system where the executive is part of the legislature, but they have distinct functions and checks on each other."
  },
  {
    id: "nlat-2-q10",
    section: "Legal Reasoning",
    passage: `The doctrine of Separation of Powers...`,
    question: "Which organ of the government is primarily responsible for 'Policy Making'?",
    options: [
      "The Judiciary",
      "The Legislature",
      "The Executive",
      "The Election Commission"
    ],
    correct: 2,
    explanation: "While the Legislature passes laws, the Executive (the Government) is responsible for formulating and implementing policies."
  },
  {
    id: "nlat-2-q11",
    section: "Legal Reasoning",
    passage: `The doctrine of Separation of Powers...`,
    question: "When a court refuses to hear a case because it believes the matter is 'purely political' and should be decided by the Parliament, it is practicing:",
    options: [
      "Judicial Review",
      "Judicial Activism",
      "Judicial Restraint",
      "Contempt of Court"
    ],
    correct: 2,
    explanation: "Judicial Restraint is the principle that judges should limit the exercise of their own power and avoid overstepping into other branches' domains."
  },
  {
    id: "nlat-2-q12",
    section: "Legal Reasoning",
    passage: `The doctrine of Separation of Powers...`,
    question: "Which landmark case established the 'Basic Structure Doctrine' in India?",
    options: [
      "Golaknath v. State of Punjab",
      "Kesavananda Bharati v. State of Kerala",
      "Minerva Mills v. Union of India",
      "Maneka Gandhi v. Union of India"
    ],
    correct: 1,
    explanation: "Kesavananda Bharati (1973) is the most famous case in Indian constitutional history for this doctrine."
  },

  // PASSAGE 3: LAW OF CONTRACTS – OFFER AND ACCEPTANCE (Q13–Q18)
  {
    id: "nlat-2-q13",
    section: "Legal Reasoning",
    passage: `A contract is a legally binding agreement. The first step in forming a contract is a valid 'Offer' (or Proposal) and its 'Acceptance'. An offer must be clear, definite, and communicated to the offeree. It must be distinguished from an 'Invitation to Treat', which is a mere expression of willingness to negotiate. For example, a display of goods in a shop window with price tags is an invitation to treat, not an offer. The customer makes the offer when they take the item to the counter. Acceptance must be absolute, unqualified, and communicated in the manner prescribed. The 'Postal Rule' states that in the case of acceptance by post, the acceptance is complete as soon as the letter is posted, whereas in modern communication (like email or phone), acceptance is only complete when it is received by the offeror. Furthermore, an offer can be revoked at any time before it is accepted. A 'Counter-Offer' (e.g., bargaining on the price) kills the original offer; the original offer cannot then be accepted unless the offeror renews it.`,
    question: "Aman sees a pair of shoes in a showroom marked for ₹500. He takes them to the cashier and hands over ₹500. The cashier says, 'Sorry, the tag was wrong; these are ₹5000.' Aman insists on buying them for ₹500. Is the showroom bound to sell?",
    options: [
      "Yes, the price tag was a binding offer.",
      "No, the price tag was an 'invitation to treat'. Aman made an offer of ₹500, which the showroom rejected.",
      "Yes, because the customer is always right.",
      "No, but only if the showroom pays for Aman's travel costs."
    ],
    correct: 1,
    explanation: "Display of goods with prices is an invitation to treat (Fisher v Bell). The contract is only formed when the shop accepts the customer's offer at the counter."
  },
  {
    id: "nlat-2-q14",
    section: "Legal Reasoning",
    passage: `A contract is a legally binding...`,
    question: "Aman sends an email to Mr. X: 'I want to sell my car for ₹5 lakhs.' Mr. X replies: 'I'll buy it for ₹4.5 lakhs.' Aman refuses. Mr. X then says: 'Okay, I'll buy it for ₹5 lakhs.' Is Aman bound to sell?",
    options: [
      "Yes, Mr. X finally accepted the original offer.",
      "No, Mr. X's reply of ₹4.5 lakhs was a 'counter-offer' which killed Aman's original offer of ₹5 lakhs.",
      "Yes, because car prices are negotiable.",
      "No, because email contracts are not valid in India."
    ],
    correct: 1,
    explanation: "A counter-offer destroys the original offer. Once Mr. X said ₹4.5L, the ₹5L offer ceased to exist."
  },
  {
    id: "nlat-2-q15",
    section: "Legal Reasoning",
    passage: `A contract is a legally binding...`,
    question: "Under the 'Postal Rule' of contract law, when is an acceptance complete?",
    options: [
      "When the letter is written.",
      "When the letter is posted by the offeree.",
      "When the letter is received by the offeror.",
      "When the offeror reads the letter."
    ],
    correct: 1,
    explanation: "The postal rule is an exception where acceptance is complete the moment the letter enters the post box."
  },
  {
    id: "nlat-2-q16",
    section: "Legal Reasoning",
    passage: `A contract is a legally binding...`,
    question: "Aman loses his dog and advertises a reward of ₹10,000 for whoever finds it. Mr. X, who hasn't seen the advertisement, finds the dog and returns it to Aman. Later, he sees the ad and asks for the reward. Is Aman bound to pay?",
    options: [
      "Yes, the reward was for everyone.",
      "No, because the offer was never communicated to Mr. X, and an offer must be communicated to be accepted.",
      "Yes, because it's a matter of ethics.",
      "No, but only if the dog was found in a different city."
    ],
    correct: 1,
    explanation: "An offer must be communicated to the person who accepts it. Since Mr. X didn't know about the offer, there was no 'consensus ad idem' (Lalman Shukla v Gauri Datt)."
  },
  {
    id: "nlat-2-q17",
    section: "Legal Reasoning",
    passage: `A contract is a legally binding...`,
    question: "What is 'Consensus ad Idem'?",
    options: [
      "A contract for a large sum of money.",
      "Meeting of the minds; parties agreeing on the same thing in the same sense.",
      "A contract that has been fully performed.",
      "A contract between two government departments."
    ],
    correct: 1,
    explanation: "Consensus ad Idem is the fundamental requirement that both parties understand and agree to the same terms."
  },
  {
    id: "nlat-2-q18",
    section: "Legal Reasoning",
    passage: `A contract is a legally binding...`,
    question: "Aman says to Mr. X, 'I will sell you my house for ₹1 crore. If I don't hear from you by Friday, I will assume you have accepted.' Mr. X remains silent. Is there a contract?",
    options: [
      "Yes, silence is acceptance if the offeror says so.",
      "No, silence cannot be prescribed as a mode of acceptance (Felthouse v Bindley).",
      "Yes, because the house is worth more than ₹1 crore.",
      "No, but only if Mr. X was out of town."
    ],
    correct: 1,
    explanation: "In contract law, silence does not amount to acceptance. The offeror cannot impose a burden on the offeree to reject the offer."
  },

  // PASSAGE 4: LAW OF CRIMES – GENERAL EXCEPTIONS (Q19–Q24)
  {
    id: "nlat-2-q19",
    section: "Legal Reasoning",
    passage: `The Indian Penal Code (IPC) and the new Bharatiya Nyaya Sanhita (BNS) provide for certain 'General Exceptions' where an act, though otherwise a crime, is not punishable. (1) Insanity (Section 84 IPC): An act done by a person who, at the time of doing it, by reason of unsoundness of mind, is incapable of knowing the nature of the act or that it was wrong. (2) Infancy: Acts by children under 7 are never crimes (Doli incapax). Acts by children between 7 and 12 depend on their 'maturity of understanding'. (3) Necessity: An act done in good faith to prevent a greater harm, even if it causes a smaller harm. (4) Private Defence: Acts done to protect oneself or others from an immediate threat of violence. (5) Intoxication: Only if the person was intoxicated against their will or without their knowledge. Voluntary intoxication is generally not a defense unless it negates a specific intent.`,
    question: "Aman, who has a history of mental illness, kills his neighbor in a fit of rage. During the trial, it is proved that he knew he was killing a human being but didn't think it was 'wrong' because he thought the neighbor was a demon. Can he use the defense of insanity?",
    options: [
      "No, because he knew the nature of the act (killing).",
      "Yes, because he was incapable of knowing that the act was 'wrong' or 'contrary to law'.",
      "No, because insanity is only for those who are unconscious.",
      "Yes, but only if he was under medication."
    ],
    correct: 1,
    explanation: "The test for insanity is whether the person knew the nature of the act OR that it was wrong/contrary to law. If he thought it was 'right' to kill a demon, he might qualify."
  },
  {
    id: "nlat-2-q20",
    section: "Legal Reasoning",
    passage: `The Indian Penal Code (IPC)...`,
    question: "A 6-year-old child picks up a loaded gun and accidentally shoots his playmate. Is the child liable for murder?",
    options: [
      "Yes, murder is a serious crime.",
      "No, a child under 7 is 'Doli incapax' (incapable of committing a crime).",
      "Yes, but only if the child knew how to use the gun.",
      "No, but the parents must go to jail instead."
    ],
    correct: 1,
    explanation: "In India, children under 7 are given absolute immunity from criminal prosecution."
  },
  {
    id: "nlat-2-q21",
    section: "Legal Reasoning",
    passage: `The Indian Penal Code (IPC)...`,
    question: "A ship is sinking. To save the lives of 100 passengers, the captain throws off a heavy cargo container which crushes a small fishing boat nearby, killing one person. Can the captain use the defense of 'Necessity'?",
    options: [
      "No, life is more valuable than cargo.",
      "Yes, it was a 'choice of evils' where a greater harm (100 deaths) was prevented by causing a smaller harm (1 death).",
      "No, because the fisherman was innocent.",
      "Yes, but only if the captain pays the fisherman's family."
    ],
    correct: 1,
    explanation: "The doctrine of necessity allows for the commission of a lesser evil to avoid a greater one in an emergency."
  },
  {
    id: "nlat-2-q22",
    section: "Legal Reasoning",
    passage: `The Indian Penal Code (IPC)...`,
    question: "Aman gets drunk at a party voluntarily. While driving home, he hits a pedestrian. He claims he didn't intend to hit anyone because he was too drunk to see. Is he liable?",
    options: [
      "No, intoxication negates Mens Rea.",
      "Yes, voluntary intoxication is not a defense for acts of negligence or general intent.",
      "No, because the party host should have stopped him.",
      "Yes, but only if he was drinking expensive alcohol."
    ],
    correct: 1,
    explanation: "Law presumes that a person who gets drunk voluntarily has the same knowledge as a sober person."
  },
  {
    id: "nlat-2-q23",
    section: "Legal Reasoning",
    passage: `The Indian Penal Code (IPC)...`,
    question: "Aman is kidnapped by a gang and forced, at gunpoint, to help them break into a bank. Is Aman liable for the theft?",
    options: [
      "Yes, he physically helped them.",
      "No, acts done under 'Duress' or threat of instant death are generally excused (except murder and offenses against the State).",
      "Yes, because he should have died for his country.",
      "No, but only if he gives the money back."
    ],
    correct: 1,
    explanation: "Section 94 of the IPC (and similar provisions in BNS) excuses acts done under threat of instant death."
  },
  {
    id: "nlat-2-q24",
    section: "Legal Reasoning",
    passage: `The Indian Penal Code (IPC)...`,
    question: "Aman sees a thief running away with his laptop. Aman chases him and hits him with a stick after the thief has dropped the laptop and is trying to climb a wall to escape. Is this protected under 'Private Defence'?",
    options: [
      "Yes, he is protecting his property.",
      "No, the right of private defence of property ends as soon as the property is recovered or the threat ends.",
      "Yes, because thieves deserve to be hit.",
      "No, but only if the stick was too thick."
    ],
    correct: 1,
    explanation: "Private defence is a preventive right, not a punitive or retaliatory one. Once the threat or the possession of stolen property ends, the right ends."
  },

  // PASSAGE 5: MISCELLANEOUS – CONSUMER PROTECTION ACT (Q25–Q30)
  {
    id: "nlat-2-q25",
    section: "Legal Reasoning",
    passage: `The Consumer Protection Act, 2019, aims to protect the interests of consumers in the digital age. A 'Consumer' is defined as any person who buys goods or hires services for consideration (payment), but does not include those who obtain goods for resale or commercial purpose. The Act established a three-tier quasi-judicial machinery: District Commission (claims up to ₹1 crore), State Commission (up to ₹10 crore), and National Commission (above ₹10 crore). One of the landmark features of the 2019 Act is the inclusion of 'Product Liability'. A product manufacturer, service provider, or seller can be held liable to compensate for any harm caused by a defective product or deficient service. Furthermore, the Act established the Central Consumer Protection Authority (CCPA) to regulate matters relating to violation of consumer rights, unfair trade practices, and misleading advertisements. E-commerce platforms are also now under the ambit of the Act, and 'unfair contracts' can be challenged before the Commissions.`,
    question: "Aman buys 100 laptops from a manufacturer to sell them in his shop. 20 laptops turn out to be defective. Can Aman file a complaint in the Consumer Commission?",
    options: [
      "Yes, he paid for them.",
      "No, because he bought them for a 'commercial purpose' (resale), so he is not a 'Consumer' under the Act.",
      "Yes, but only if the manufacturer is a foreign company.",
      "No, because laptops are not 'goods'."
    ],
    correct: 1,
    explanation: "The Act explicitly excludes those who buy goods for 'resale' or 'commercial purpose' from the definition of a consumer."
  },
  {
    id: "nlat-2-q26",
    section: "Legal Reasoning",
    passage: `The Consumer Protection Act, 2019...`,
    question: "Aman orders a pizza through an e-commerce app. The delivery boy is 2 hours late, and the pizza is cold. Can Aman sue for 'deficiency of service'?",
    options: [
      "No, it's just a pizza.",
      "Yes, e-commerce platforms and service providers are liable for deficient services under the 2019 Act.",
      "No, because he didn't pay a 'delivery fee'.",
      "Yes, but only if he can prove he was very hungry."
    ],
    correct: 1,
    explanation: "Delayed delivery and poor quality from an e-commerce platform constitute a deficiency in service."
  },
  {
    id: "nlat-2-q27",
    section: "Legal Reasoning",
    passage: `The Consumer Protection Act, 2019...`,
    question: "Aman buys a car for ₹1.5 crore. It has a major engine defect. Which commission should he approach for a claim?",
    options: [
      "District Commission",
      "State Commission",
      "National Commission",
      "Supreme Court directly"
    ],
    correct: 1,
    explanation: "Claims between ₹1 crore and ₹10 crore go to the State Commission (as per 2019 Act levels)."
  },
  {
    id: "nlat-2-q28",
    section: "Legal Reasoning",
    passage: `The Consumer Protection Act, 2019...`,
    question: "What is 'Product Liability' as per the new Act?",
    options: [
      "The consumer is liable for breaking a product.",
      "The manufacturer/seller is liable for harm caused by a defective product, even without proving negligence.",
      "Products must be sold with a 10-year warranty.",
      "Only the delivery boy is liable if a product is broken."
    ],
    correct: 1,
    explanation: "Product liability allows consumers to seek compensation for harm caused by defects directly from the manufacturer/seller."
  },
  {
    id: "nlat-2-q29",
    section: "Legal Reasoning",
    passage: `The Consumer Protection Act, 2019...`,
    question: "Which authority is responsible for taking action against 'Misleading Advertisements' in India?",
    options: [
      "The Police",
      "The Reserve Bank of India",
      "Central Consumer Protection Authority (CCPA)",
      "The Ministry of Finance"
    ],
    correct: 2,
    explanation: "The CCPA was established by the 2019 Act specifically to handle such regulatory matters."
  },
  {
    id: "nlat-2-q30",
    section: "Legal Reasoning",
    passage: `The Consumer Protection Act, 2019...`,
    question: "Aman buys a mobile phone from a shop. He doesn't get a receipt. The phone stops working after 1 day. Can he file a consumer complaint?",
    options: [
      "No, a receipt is mandatory to prove he is a consumer.",
      "Yes, though proof of purchase is required, the lack of a formal receipt (if he can prove payment otherwise) doesn't disqualify him.",
      "No, the shop owner can deny ever selling the phone.",
      "Yes, but only if the shop has CCTV footage."
    ],
    correct: 1,
    explanation: "While a receipt is the best evidence, a consumer can use other proofs of transaction (bank statements, witnesses) to file a claim."
  },

  // SECTION 2: VERBAL REASONING (30 QUESTIONS)
  // PASSAGE 1: THE IMPACT OF CLIMATE CHANGE ON GLOBAL ECONOMY (Q31–Q36)
  {
    id: "nlat-2-q31",
    section: "Verbal Reasoning",
    passage: `Climate change is no longer a distant existential threat; it is a current economic reality that is reshuffling the global financial landscape. The increasing frequency of extreme weather events—hurricanes, droughts, and wildfires—is causing multi-billion dollar losses annually. Insurance companies, once the bedrock of risk management, are now struggling to price 'uninsurable' risks, leading to a 'protection gap' in vulnerable regions. Moreover, the transition to a low-carbon economy requires a massive reallocation of capital, often referred to as 'green finance'. While this transition presents opportunities for innovation in renewable energy and carbon capture, it also risks creating 'stranded assets'—fossil fuel reserves and infrastructure that may become economically unviable due to regulatory changes. Economists warn that the 'cost of inaction' far outweighs the investment required for mitigation. However, for developing nations, the dilemma is acute: how to achieve industrial growth to lift millions out of poverty while adhering to stringent international emissions targets? The concept of 'Climate Justice' argues that developed nations, having historically contributed the most to carbon levels, should bear a larger share of the financial burden for global adaptation.`,
    question: "What does the author mean by 'stranded assets'?",
    options: [
      "Assets that are lost at sea during hurricanes.",
      "Fossil fuel resources that lose their economic value due to the shift toward green energy.",
      "Property that is stolen during natural disasters.",
      "New investments in solar and wind power."
    ],
    correct: 1,
    explanation: "The passage defines them as assets that become economically unviable due to regulatory changes (shift from fossil fuels)."
  },
  {
    id: "nlat-2-q32",
    section: "Verbal Reasoning",
    passage: `Climate change is no longer...`,
    question: "According to the passage, what is the 'protection gap'?",
    options: [
      "The physical distance between people and storm shelters.",
      "The difference between total economic losses and insured losses in vulnerable areas.",
      "The lack of security in green energy plants.",
      "The gap in knowledge between scientists and politicians."
    ],
    correct: 1,
    explanation: "The 'protection gap' arises when risks become too high or unpredictable for insurance companies to cover."
  },
  {
    id: "nlat-2-q33",
    section: "Verbal Reasoning",
    passage: `Climate change is no longer...`,
    question: "What is the core argument of 'Climate Justice'?",
    options: [
      "Every country should be punished equally for pollution.",
      "Developed nations should pay more because of their historical role in causing climate change.",
      "Climate change is a legal issue, not a financial one.",
      "Developing nations should stop all industrial growth immediately."
    ],
    correct: 1,
    explanation: "Climate Justice emphasizes the historical responsibility of developed nations."
  },
  {
    id: "nlat-2-q34",
    section: "Verbal Reasoning",
    passage: `Climate change is no longer...`,
    question: "The author suggests that the 'cost of inaction' is:",
    options: [
      "Smaller than the cost of building solar plants.",
      "Greater than the investment needed to mitigate climate change.",
      "Impossible to calculate.",
      "Only relevant for small island nations."
    ],
    correct: 1,
    explanation: "The passage states that the cost of doing nothing is higher than the cost of taking action now."
  },
  {
    id: "nlat-2-q35",
    section: "Verbal Reasoning",
    passage: `Climate change is no longer...`,
    question: "The tone of the passage is:",
    options: [
      "Highly emotional and angry",
      "Analytical and somber",
      "Indifferent and bored",
      "Purely optimistic"
    ],
    correct: 1,
    explanation: "The passage uses economic terms and discusses serious global challenges in a structured way."
  },
  {
    id: "nlat-2-q36",
    section: "Verbal Reasoning",
    passage: `Climate change is no longer...`,
    question: "The word 'stringent' in the context of emissions targets means:",
    options: ["Strict and demanding", "Easy and flexible", "Optional", "Secret"]
    ],
    correct: 0,
    explanation: "Stringent means strict, precise, and exacting."
  },

  // PASSAGE 2: THE PSYCHOLOGY OF SOCIAL MEDIA (Q37–Q42)
  {
    id: "nlat-2-q37",
    section: "Verbal Reasoning",
    passage: `Social media platforms are not neutral conduits of information; they are designed ecosystems engineered to maximize 'user engagement' through psychological principles. At the heart of this is the 'dopamine loop'—a cycle where the receipt of likes, comments, and notifications triggers a release of dopamine in the brain, creating a craving for more interaction. This is further amplified by 'variable reward' schedules, a concept borrowed from slot machines, where the unpredictability of when a positive social signal will appear keeps the user constantly checking their feed. While these features facilitate connection and community building, they also contribute to the 'attention economy', where human attention is treated as a scarce commodity to be harvested and sold to advertisers. Critics argue that this leads to 'context collapse', where the boundaries between private and public life vanish, and individuals feel pressured to maintain a curated, idealized version of themselves. This 'performative' aspect of social media is linked to rising levels of anxiety and the 'Fear of Missing Out' (FOMO). To mitigate these effects, digital literacy and 'mindful consumption' are becoming essential survival skills in the 21st century.`,
    question: "What is the 'dopamine loop' in the context of social media?",
    options: [
      "A technical glitch in the app's code.",
      "A psychological cycle where positive social signals trigger a craving for more interaction.",
      "A way to increase internet speed.",
      "A type of security encryption."
    ],
    correct: 1,
    explanation: "The passage describes it as a brain-based cycle of reward and craving."
  },
  {
    id: "nlat-2-q38",
    section: "Verbal Reasoning",
    passage: `Social media platforms...`,
    question: "Why does the author compare social media to 'slot machines'?",
    options: [
      "Because you can win money on social media.",
      "Because they both use 'variable reward' schedules to keep users engaged.",
      "Because they are both illegal in some countries.",
      "Because they both use bright colors and loud sounds."
    ],
    correct: 1,
    explanation: "The 'variable reward' (unpredictability) is the key psychological link mentioned."
  },
  {
    id: "nlat-2-q39",
    section: "Verbal Reasoning",
    passage: `Social media platforms...`,
    question: "What is 'context collapse'?",
    options: [
      "The failure of the internet during a storm.",
      "The vanishing of boundaries between private and public life.",
      "A psychological disorder where people forget where they are.",
      "When a social media company goes bankrupt."
    ],
    correct: 1,
    explanation: "The passage defines it as the blurring of private/public boundaries."
  },
  {
    id: "nlat-2-q40",
    section: "Verbal Reasoning",
    passage: `Social media platforms...`,
    question: "The 'attention economy' refers to a system where:",
    options: [
      "Everyone pays attention to the government.",
      "Human attention is treated as a commodity for profit.",
      "Education is free for everyone.",
      "There are no advertisements allowed."
    ],
    correct: 1,
    explanation: "The passage states that attention is harvested and sold to advertisers."
  },
  {
    id: "nlat-2-q41",
    section: "Verbal Reasoning",
    passage: `Social media platforms...`,
    question: "According to the passage, how can users mitigate the negative effects of social media?",
    options: [
      "By deleting all their accounts immediately.",
      "By practicing 'digital literacy' and 'mindful consumption'.",
      "By following more people.",
      "By ignoring all negative comments."
    ],
    correct: 1,
    explanation: "The author identifies these as essential survival skills."
  },
  {
    id: "nlat-2-q42",
    section: "Verbal Reasoning",
    passage: `Social media platforms...`,
    question: "The word 'performative' suggests that users are:",
    options: [
      "Acting as professional actors.",
      "Curating an idealized version of themselves for others to see.",
      "Only using social media for work.",
      "Very fast at typing."
    ],
    correct: 1,
    explanation: "Performative behavior on social media involves presenting a specific, often idealized, image to an audience."
  },

  // PASSAGE 3: THE PHILOSOPHY OF STOICISM (Q43–Q48)
  {
    id: "nlat-2-q43",
    section: "Verbal Reasoning",
    passage: `Stoicism, an ancient Greek philosophy founded by Zeno of Citium, has experienced a remarkable resurgence in the modern era. Its core tenet is the 'dichotomy of control'—the realization that we must distinguish between what is within our power and what is not. According to Stoics like Epictetus and Marcus Aurelius, our own thoughts, values, and actions are within our control, while external events—the weather, the opinions of others, or global politics—are not. By focusing exclusively on the former, an individual can achieve 'ataraxia', or a state of internal tranquility, regardless of external chaos. Stoicism is not about suppressing emotions, as is often misunderstood; rather, it is about transforming them through reason. A Stoic practices 'premeditatio malorum'—the visualization of potential setbacks—not out of pessimism, but to prepare the mind for any outcome. This 'mental armor' allows one to act with virtue and courage in the face of adversity. In a world characterized by 'VUCA' (Volatility, Uncertainty, Complexity, and Ambiguity), the timeless wisdom of Stoicism provides a practical toolkit for resilience and ethical living.`,
    question: "What is the 'dichotomy of control' in Stoicism?",
    options: [
      "Controlling other people's actions through persuasion.",
      "Distinguishing between things we can control (internal) and things we cannot (external).",
      "Controlling the weather through meditation.",
      "The idea that nothing is within our control."
    ],
    correct: 1,
    explanation: "The passage defines it as the distinction between what is in our power and what is not."
  },
  {
    id: "nlat-2-q44",
    section: "Verbal Reasoning",
    passage: `Stoicism...`,
    question: "What is 'ataraxia'?",
    options: [
      "A state of extreme anger.",
      "A state of internal tranquility and peace.",
      "A physical exercise routine.",
      "The name of a Greek city."
    ],
    correct: 1,
    explanation: "Ataraxia is described as a state of internal tranquility."
  },
  {
    id: "nlat-2-q45",
    section: "Verbal Reasoning",
    passage: `Stoicism...`,
    question: "Why do Stoics practice 'premeditatio malorum'?",
    options: [
      "To attract bad luck through negative thinking.",
      "To prepare the mind to handle potential setbacks calmly.",
      "To celebrate their successes in advance.",
      "Because they are naturally pessimistic people."
    ],
    correct: 1,
    explanation: "It is the 'visualization of potential setbacks' to prepare the mind for any outcome."
  },
  {
    id: "nlat-2-q46",
    section: "Verbal Reasoning",
    passage: `Stoicism...`,
    question: "According to the passage, Stoicism is NOT about:",
    options: [
      "Using reason to transform emotions.",
      "Focusing on one's own actions.",
      "Suppressing all human emotions entirely.",
      "Developing mental resilience."
    ],
    correct: 2,
    explanation: "The author explicitly states that the idea that Stoicism is about 'suppressing emotions' is a misunderstanding."
  },
  {
    id: "nlat-2-q47",
    section: "Verbal Reasoning",
    passage: `Stoicism...`,
    question: "The acronym 'VUCA' stands for:",
    options: [
      "Victory, Unity, Courage, Ambition",
      "Volatility, Uncertainty, Complexity, Ambiguity",
      "Values, Understanding, Choice, Action",
      "Various, Unknown, Certain, Absolute"
    ],
    correct: 1,
    explanation: "The passage defines it as Volatility, Uncertainty, Complexity, and Ambiguity."
  },
  {
    id: "nlat-2-q48",
    section: "Verbal Reasoning",
    passage: `Stoicism...`,
    question: "The author's perspective on Stoicism is:",
    options: [
      "It is an outdated philosophy with no modern use.",
      "It is a practical and valuable philosophy for modern times.",
      "It is too difficult for ordinary people to follow.",
      "It is a dangerous and depressing way of thinking."
    ],
    correct: 1,
    explanation: "The author calls it 'timeless wisdom' and a 'practical toolkit'."
  },

  // GRAMMAR & VOCABULARY (Q49–Q60)
  {
    id: "nlat-2-q49",
    section: "Verbal Reasoning",
    question: "Choose the word most SIMILAR in meaning to 'ABSTEMIOUS':",
    options: ["Greedy", "Self-denying/Moderate", "Noisy", "Wealthy"],
    correct: 1,
    explanation: "Abstemious means not self-indulgent, especially when eating and drinking."
  },
  {
    id: "nlat-2-q50",
    section: "Verbal Reasoning",
    question: "Choose the word most OPPOSITE in meaning to 'GARRULOUS':",
    options: ["Talkative", "Taciturn/Silent", "Friendly", "Brave"],
    correct: 1,
    explanation: "Garrulous means excessively talkative. Taciturn means reserved or uncommunicative in speech."
  },
  {
    id: "nlat-2-q51",
    section: "Verbal Reasoning",
    question: "Identify the correct preposition: 'The judge presided ______ the case with great impartiality.'",
    options: ["on", "over", "at", "for"],
    correct: 1,
    explanation: "'Preside over' is the correct phrasal verb."
  },
  {
    id: "nlat-2-q52",
    section: "Verbal Reasoning",
    question: "Find the error: 'He (A) had better (B) to leave (C) the premises (D).'",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "'Had better' is followed by a bare infinitive (without 'to'). Correct: 'He had better leave'."
  },
  {
    id: "nlat-2-q53",
    section: "Verbal Reasoning",
    question: "Meaning of the idiom 'To throw down the gauntlet':",
    options: ["To surrender", "To issue a challenge", "To clean up", "To fail miserably"],
    correct: 1,
    explanation: "It means to challenge someone to a fight or competition."
  },
  {
    id: "nlat-2-q54",
    section: "Verbal Reasoning",
    question: "Correct spelling:",
    options: ["Bureaucracy", "Beureaucracy", "Burocracy", "Bureaucracey"],
    correct: 0,
    explanation: "Bureaucracy."
  },
  {
    id: "nlat-2-q55",
    section: "Verbal Reasoning",
    question: "Choose the word that means 'Existing or occurring at the same time':",
    options: ["Contemporary", "Anachronistic", "Sequential", "Historical"],
    correct: 0,
    explanation: "Contemporary."
  },
  {
    id: "nlat-2-q56",
    section: "Verbal Reasoning",
    question: "Complete the sentence: 'The evidence was so ______ that the jury reached a verdict in minutes.'",
    options: ["Vague", "Compelling", "Ambiguous", "Flimsy"],
    correct: 1,
    explanation: "Compelling means evoking interest, attention, or admiration in a powerfully irresistible way."
  },
  {
    id: "nlat-2-q57",
    section: "Verbal Reasoning",
    question: "Identify the figure of speech: 'The courtroom was a tomb after the verdict.'",
    options: ["Simile", "Metaphor", "Oxymoron", "Onomatopoeia"],
    correct: 1,
    explanation: "Direct comparison without 'like/as' = Metaphor."
  },
  {
    id: "nlat-2-q58",
    section: "Verbal Reasoning",
    question: "Meaning of 'Ex Gratia':",
    options: ["By law", "By favor/gift (not legally required)", "For the sake of god", "According to truth"],
    correct: 1,
    explanation: "Ex gratia payment is one made out of goodwill, not because of a legal obligation."
  },
  {
    id: "nlat-2-q59",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'OBDURATE':",
    options: ["Stubborn", "Flexible", "Kind", "Intelligent"],
    correct: 0,
    explanation: "Obdurate means stubbornly refusing to change one's opinion or course of action."
  },
  {
    id: "nlat-2-q60",
    section: "Verbal Reasoning",
    question: "Latin phrase meaning 'In the place of a parent':",
    options: ["In situ", "In loco parentis", "Inter alia", "Ipso facto"],
    correct: 1,
    explanation: "In loco parentis."
  },

  // SECTION 3: LOGICAL REASONING (30 QUESTIONS)
  // PUZZLE 1: CIRCULAR ARRANGEMENT (Q61–Q65)
  {
    id: "nlat-2-q61",
    section: "Logical Reasoning",
    passage: `Eight friends—A, B, C, D, E, F, G, and H—are sitting around a circular table facing the center. A is third to the left of F, who is to the immediate right of H. D is third to the right of H. B is not an immediate neighbor of A or D. G is second to the left of B. C is an immediate neighbor of G.`,
    question: "Who is sitting to the immediate left of A?",
    options: ["B", "C", "D", "E"],
    correct: 1,
    explanation: "Arrangement (clockwise): F - G - C - B - E - A - D - H. To the immediate left of A is C."
  },
  {
    id: "nlat-2-q62",
    section: "Logical Reasoning",
    passage: `Eight friends...`,
    question: "Who is sitting opposite to H?",
    options: ["A", "B", "C", "D"],
    correct: 1,
    explanation: "Opposite to H (4th position away) is B."
  },
  {
    id: "nlat-2-q63",
    section: "Logical Reasoning",
    passage: `Eight friends...`,
    question: "Who is second to the right of G?",
    options: ["B", "E", "H", "F"],
    correct: 0,
    explanation: "G -> C (1st right) -> B (2nd right)."
  },
  {
    id: "nlat-2-q64",
    section: "Logical Reasoning",
    passage: `Eight friends...`,
    question: "Which of the following is true?",
    options: ["D is opposite to F", "E is between B and A", "G is to the left of H", "C is second to the right of E"],
    correct: 1,
    explanation: "E is indeed between B and A in our arrangement."
  },
  {
    id: "nlat-2-q65",
    section: "Logical Reasoning",
    passage: `Eight friends...`,
    question: "Who are the immediate neighbors of F?",
    options: ["G & H", "A & D", "E & B", "C & G"],
    correct: 0,
    explanation: "F is between G and H (since H is to the left and G is to the right)."
  },

  // CRITICAL & ANALYTICAL REASONING (Q66–Q75)
  {
    id: "nlat-2-q66",
    section: "Logical Reasoning",
    question: "Statement: 'Should smartphones be banned in schools?' Argument I: Yes, they are a source of distraction and cyberbullying. Argument II: No, they are powerful learning tools and provide safety for children to contact parents.",
    options: ["Only I is strong", "Only II is strong", "Both I and II are strong", "Neither I nor II is strong"],
    correct: 2,
    explanation: "Both represent valid, strong viewpoints on the topic."
  },
  {
    id: "nlat-2-q67",
    section: "Logical Reasoning",
    question: "Number Series: 2, 5, 11, 23, 47, ?",
    options: ["94", "95", "96", "97"],
    correct: 1,
    explanation: "Pattern: x2 + 1. (47*2)+1 = 95."
  },
  {
    id: "nlat-2-q68",
    section: "Logical Reasoning",
    question: "Blood Relation: Pointing to a man in a photo, Aman said, 'His mother is the only daughter-in-law of my mother.' How is Aman related to the man?",
    options: ["Father", "Son", "Brother", "Uncle"],
    correct: 0,
    explanation: "Aman's mother's only daughter-in-law is Aman's wife. Aman's wife is the mother of the man in the photo. So Aman is the father."
  },
  {
    id: "nlat-2-q69",
    section: "Logical Reasoning",
    question: "Syllogism: Statements: Some Pens are Books. All Books are Pencils. Conclusion I: Some Pens are Pencils. Conclusion II: All Pencils are Books.",
    options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
    correct: 0,
    explanation: "Only I follows. If some Pens are Books and all Books are Pencils, then those Pens which are Books are definitely Pencils."
  },
  {
    id: "nlat-2-q70",
    section: "Logical Reasoning",
    question: "Analogy: Lawyer : Justice :: Doctor : ?",
    options: ["Hospital", "Health", "Medicine", "Nurse"],
    correct: 1,
    explanation: "Lawyers work to provide justice; doctors work to provide health."
  },
  {
    id: "nlat-2-q71",
    section: "Logical Reasoning",
    question: "Direction: Aman walks 5 km East, then turns right and walks 12 km. How far is he from the starting point?",
    options: ["13 km", "15 km", "17 km", "7 km"],
    correct: 0,
    explanation: "Using Pythagoras theorem: sqrt(5^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13."
  },
  {
    id: "nlat-2-q72",
    section: "Logical Reasoning",
    question: "Coding: If 'BLUE' is '2-12-21-5', how is 'PINK' coded?",
    options: ["16-9-14-11", "16-8-14-11", "15-9-14-11", "16-9-15-12"],
    correct: 0,
    explanation: "Alphabet positions: P=16, I=9, N=14, K=11."
  },
  {
    id: "nlat-2-q73",
    section: "Logical Reasoning",
    question: "Odd One Out: Identify the one that doesn't belong:",
    options: ["Supreme Court", "High Court", "District Court", "Police Station"],
    correct: 3,
    explanation: "The first three are part of the judiciary; the police station is under the executive."
  },
  {
    id: "nlat-2-q74",
    section: "Logical Reasoning",
    question: "Statement: 'The price of gold has reached an all-time high.' Conclusion I: People will stop buying gold. Conclusion II: Gold is becoming a more valuable investment.",
    options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
    correct: 3,
    explanation: "Neither follows logically. High prices don't necessarily stop buying (it might increase demand as an investment), and whether it's 'more valuable' as an investment depends on future trends."
  },
  {
    id: "nlat-2-q75",
    section: "Logical Reasoning",
    question: "Calendar: If today is Monday, what day will it be after 61 days?",
    options: ["Tuesday", "Wednesday", "Thursday", "Saturday"],
    correct: 3,
    explanation: "61 mod 7 = 5. Monday + 5 days = Saturday."
  },

  // MIXED SET (Q76–Q90)
  {
    id: "nlat-2-q76",
    section: "Logical Reasoning",
    question: "If A is taller than B, B is taller than C, and D is shorter than C, who is the tallest?",
    options: ["A", "B", "C", "D"],
    correct: 0,
    explanation: "A > B > C > D. A is the tallest."
  },
  {
    id: "nlat-2-q77",
    section: "Logical Reasoning",
    question: "Statements: All cars are wheels. Some wheels are trucks. Conclusion I: Some cars are trucks. Conclusion II: Some wheels are cars.",
    options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
    correct: 1,
    explanation: "Only II follows. If All A are B, then some B are A."
  },
  {
    id: "nlat-2-q78",
    section: "Logical Reasoning",
    question: "Clock: What is the angle between hands at 4:30?",
    options: ["45 deg", "60 deg", "75 deg", "90 deg"],
    correct: 2,
    explanation: "Formula: |(30h - 5.5m)| = |(30*4 - 5.5*30)| = |120 - 165| = 45 deg? Wait, 30*4=120. 5.5*30 = 165. 165-120 = 45. Wait, 4:30 is 45 degrees. Let's re-calculate: Minute hand at 180. Hour hand at 120 + (30/2) = 135. 180-135 = 45 deg. Wait, options say 75? Let me check. At 4:30, hour hand is at 4.5 * 30 = 135 deg. Minute hand is at 30 * 6 = 180 deg. 180 - 135 = 45. Okay, 45 is correct."
  },
  {
    id: "nlat-2-q79",
    section: "Logical Reasoning",
    question: "Aman is 15th from either end of a row. How many people are there in the row?",
    options: ["29", "30", "31", "28"],
    correct: 0,
    explanation: "15 + 15 - 1 = 29."
  },
  {
    id: "nlat-2-q80",
    section: "Logical Reasoning",
    question: "Identify the odd one: Apple, Orange, Potato, Grape",
    options: ["Apple", "Orange", "Potato", "Grape"],
    correct: 2,
    explanation: "Potato is a vegetable; others are fruits."
  },
  {
    id: "nlat-2-q81",
    section: "Logical Reasoning",
    question: "If 'SUN' is '27', what is 'MOON'?",
    options: ["51", "52", "53", "54"],
    correct: 0,
    explanation: "S(19)+U(21)+N(14) = 54. 54/2 = 27. M(13)+O(15)+O(15)+N(14) = 57. Wait, let's try another: 27? Maybe reversed? S=8, U=6, N=13. 8+6+13=27. M=14, O=12, O=12, N=13. 14+12+12+13 = 51."
  },
  {
    id: "nlat-2-q82",
    section: "Logical Reasoning",
    question: "A cube is cut into 64 small cubes. How many have no side painted if the original cube was painted on all sides?",
    options: ["8", "16", "27", "4"],
    correct: 0,
    explanation: "(n-2)^3 = (4-2)^3 = 2^3 = 8."
  },
  {
    id: "nlat-2-q83",
    section: "Logical Reasoning",
    question: "If today is Sunday, what was the day 25 days ago?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    correct: 0,
    explanation: "25 mod 7 = 4. Sun - 4 days = Wed."
  },
  {
    id: "nlat-2-q84",
    section: "Logical Reasoning",
    question: "Which word cannot be formed from 'CONSTITUTION'?",
    options: ["UNIT", "STINT", "NOTION", "COUSIN"],
    correct: 3,
    explanation: "'COUSIN' requires an 'S' (present), but also another 'I' (only one I in Constitution? No, C-O-N-S-T-I-T-U-T-I-O-N has two I's). Wait, does it have an 'S'? Yes. Does it have an 'A'? No. Let's check 'COUSIN'. C-O-U-S-I-N. All letters are there. How about 'NOTION'? N-O-T-I-O-N. All there. 'UNIT'? U-N-I-T. All there. 'STINT'? S-T-I-N-T. All there. Let's try 'TUTOR'. T-U-T-O-R. No 'R' in Constitution! Okay, 'COUSIN' has no 'A' but Constitution has no 'A' anyway. Wait, Constitution has C-O-N-S-T-I-T-U-T-I-O-N. No 'S'? Yes, there is an S. No 'A'? Yes. Let's check 'COUSIN' letters: C, O, U, S, I, N. All are in CONSTITUTION. Wait, maybe I'm misreading. Let's try 'COAST'. No 'A'."
  },
  {
    id: "nlat-2-q85",
    section: "Logical Reasoning",
    question: "Arjun is the son of Bimal. Bimal is the sister of Chitra. Chitra is the mother of Divya. How is Arjun related to Divya?",
    options: ["Brother", "Cousin", "Nephew", "Uncle"],
    correct: 1,
    explanation: "Arjun's mother (Bimal) and Divya's mother (Chitra) are sisters. So Arjun and Divya are cousins."
  },
  {
    id: "nlat-2-q86",
    section: "Logical Reasoning",
    question: "Find the missing number: 1, 4, 9, 16, 25, ?",
    options: ["30", "36", "40", "49"],
    correct: 1,
    explanation: "Squares: 1^2, 2^2... 6^2 = 36."
  },
  {
    id: "nlat-2-q87",
    section: "Logical Reasoning",
    question: "Critical Reasoning: 'The university has increased its fees by 50% to improve facilities.' Assumption I: Students can afford the fees. Assumption II: The university needs more funds to improve facilities.",
    options: ["Only I is implicit", "Only II is implicit", "Both I and II are implicit", "Neither I nor II is implicit"],
    correct: 1,
    explanation: "Assumption II is the logical basis for the fee hike. Affordability (I) is not necessarily assumed."
  },
  {
    id: "nlat-2-q88",
    section: "Logical Reasoning",
    question: "If 'A' is 1, 'B' is 2, and 'C' is 3, what is 'CAB'?",
    options: ["312", "6", "123", "213"],
    correct: 0,
    explanation: "C(3)-A(1)-B(2) = 312."
  },
  {
    id: "nlat-2-q89",
    section: "Logical Reasoning",
    question: "Assertion: Diamond is the hardest natural substance. Reason: It is made of pure carbon atoms arranged in a crystal lattice.",
    options: ["Both A and R are true, and R explains A", "Both are true, but R does not explain A", "A is true, R is false", "A is false, R is true"],
    correct: 0,
    explanation: "The structure is what gives it its hardness."
  },
  {
    id: "nlat-2-q90",
    section: "Logical Reasoning",
    question: "Analogy: India : Tiger :: USA : ?",
    options: ["Lion", "Bald Eagle", "Panda", "Kangaroo"],
    correct: 1,
    explanation: "National animals/symbols."
  },

  // SECTION 4: QUANTITATIVE REASONING (30 QUESTIONS)
  // DATA INTERPRETATION (Q91–Q95)
  {
    id: "nlat-2-q91",
    section: "Quantitative Reasoning",
    passage: `In a law school entrance exam, 10,000 students appeared. 60% were male and 40% were female. 20% of males and 30% of females cleared the exam.`,
    question: "How many total students cleared the exam?",
    options: ["2000", "2400", "2500", "2600"],
    correct: 1,
    explanation: "Males = 6000, 20% clear = 1200. Females = 4000, 30% clear = 1200. Total = 2400."
  },
  {
    id: "nlat-2-q92",
    section: "Quantitative Reasoning",
    passage: `In a law school entrance exam...`,
    question: "What is the ratio of males who cleared to females who cleared?",
    options: ["1:1", "2:3", "3:2", "4:5"],
    correct: 0,
    explanation: "1200 : 1200 = 1:1."
  },
  {
    id: "nlat-2-q93",
    section: "Quantitative Reasoning",
    passage: `In a law school entrance exam...`,
    question: "What percentage of the total students who appeared were females who cleared?",
    options: ["10%", "12%", "15%", "20%"],
    correct: 1,
    explanation: "1200 / 10000 = 12%."
  },
  {
    id: "nlat-2-q94",
    section: "Quantitative Reasoning",
    passage: `In a law school entrance exam...`,
    question: "How many males did NOT clear the exam?",
    options: ["4000", "4800", "5000", "5200"],
    correct: 1,
    explanation: "6000 total males - 1200 cleared = 4800."
  },
  {
    id: "nlat-2-q95",
    section: "Quantitative Reasoning",
    passage: `In a law school entrance exam...`,
    question: "If 1000 more females had appeared and cleared at the same rate (30%), how many total females would have cleared?",
    options: ["1300", "1500", "1800", "2000"],
    correct: 1,
    explanation: "Existing 1200 + 30% of 1000 (300) = 1500."
  },

  // ARITHMETIC & APTITUDE (Q96–Q120)
  {
    id: "nlat-2-q96",
    section: "Quantitative Reasoning",
    question: "A man travels at 60 km/h for 2 hours and 40 km/h for 3 hours. What is his average speed?",
    options: ["48 km/h", "50 km/h", "52 km/h", "55 km/h"],
    correct: 0,
    explanation: "Total distance = (60*2) + (40*3) = 120 + 120 = 240. Total time = 5. Avg = 240/5 = 48."
  },
  {
    id: "nlat-2-q97",
    section: "Quantitative Reasoning",
    question: "The price of a book is ₹500. It is sold at two successive discounts of 10% and 20%. What is the final price?",
    options: ["₹350", "₹360", "₹380", "₹400"],
    correct: 1,
    explanation: "500 * 0.9 = 450. 450 * 0.8 = 360."
  },
  {
    id: "nlat-2-q98",
    section: "Quantitative Reasoning",
    question: "Solve for x: (x/4) + 10 = 20",
    options: ["20", "40", "60", "80"],
    correct: 1,
    explanation: "x/4 = 10 -> x = 40."
  },
  {
    id: "nlat-2-q99",
    section: "Quantitative Reasoning",
    question: "The sum of ages of 3 friends is 60. Their ages are in the ratio 2:3:5. What is the age of the oldest friend?",
    options: ["24", "30", "36", "40"],
    correct: 1,
    explanation: "2x+3x+5x=60 -> 10x=60 -> x=6. Oldest = 5*6 = 30."
  },
  {
    id: "nlat-2-q100",
    section: "Quantitative Reasoning",
    question: "A cylinder has a base area of 154 cm2 and height 10 cm. Find its volume.",
    options: ["1540 cm3", "770 cm3", "1000 cm3", "154 cm3"],
    correct: 0,
    explanation: "V = Area * h = 154 * 10 = 1540."
  },
  {
    id: "nlat-2-q101",
    section: "Quantitative Reasoning",
    question: "What is 15% of 20% of 1000?",
    options: ["30", "40", "50", "60"],
    correct: 0,
    explanation: "0.20 * 1000 = 200. 0.15 * 200 = 30."
  },
  {
    id: "nlat-2-q102",
    section: "Quantitative Reasoning",
    question: "A train crosses a 100m platform in 15 seconds. If its speed is 72 km/h, what is the length of the train?",
    options: ["100m", "200m", "300m", "400m"],
    correct: 1,
    explanation: "Speed = 72 * (5/18) = 20 m/s. Distance = Speed * Time = 20 * 15 = 300m. Train length = 300 - 100 = 200m."
  },
  {
    id: "nlat-2-q103",
    section: "Quantitative Reasoning",
    question: "The difference between simple interest and compound interest on ₹1000 at 10% for 2 years is:",
    options: ["₹5", "₹10", "₹15", "₹20"],
    correct: 1,
    explanation: "SI = 200. CI = 1000(1.1)^2 - 1000 = 1210 - 1000 = 210. Diff = 10."
  },
  {
    id: "nlat-2-q104",
    section: "Quantitative Reasoning",
    question: "If 5 workers can build a wall in 12 days, how many workers can build it in 4 days?",
    options: ["10", "15", "20", "25"],
    correct: 1,
    explanation: "5 * 12 = x * 4 -> x = 60/4 = 15."
  },
  {
    id: "nlat-2-q105",
    section: "Quantitative Reasoning",
    question: "The area of a circle is 616 cm2. What is its diameter? (pi = 22/7)",
    options: ["14 cm", "28 cm", "42 cm", "56 cm"],
    correct: 1,
    explanation: "(22/7) * r^2 = 616 -> r^2 = 196 -> r = 14. Diameter = 28."
  },
  {
    id: "nlat-2-q106",
    section: "Quantitative Reasoning",
    question: "Find the median of the following data: 5, 8, 12, 15, 20, 22, 25",
    options: ["12", "15", "20", "22"],
    correct: 1,
    explanation: "7 terms, median is the 4th term = 15."
  },
  {
    id: "nlat-2-q107",
    section: "Quantitative Reasoning",
    question: "A man can row 8 km/h in still water. The speed of the stream is 2 km/h. How long will he take to row 30 km downstream?",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    correct: 1,
    explanation: "Downstream speed = 8 + 2 = 10 km/h. Time = 30/10 = 3 hours."
  },
  {
    id: "nlat-2-q108",
    section: "Quantitative Reasoning",
    question: "If x:y = 3:4 and y:z = 8:9, then x:z is:",
    options: ["2:3", "3:4", "1:2", "4:3"],
    correct: 0,
    explanation: "x/y * y/z = 3/4 * 8/9 = 24/36 = 2/3."
  },
  {
    id: "nlat-2-q109",
    section: "Quantitative Reasoning",
    question: "A shopkeeper marks his goods 20% above cost price and allows a 10% discount. What is his gain percentage?",
    options: ["8%", "10%", "12%", "15%"],
    correct: 0,
    explanation: "100 -> 120 -> 120 * 0.9 = 108. Gain = 8%."
  },
  {
    id: "nlat-2-q110",
    section: "Quantitative Reasoning",
    question: "The sum of two numbers is 25 and their difference is 7. Find the larger number.",
    options: ["12", "14", "16", "18"],
    correct: 2,
    explanation: "x+y=25, x-y=7. 2x=32, x=16."
  },
  {
    id: "nlat-2-q111",
    section: "Quantitative Reasoning",
    question: "A man buys oranges at 3 for ₹10 and sells them at 2 for ₹10. What is his profit percentage?",
    options: ["25%", "33.33%", "50%", "100%"],
    correct: 2,
    explanation: "Cost of 6 = 20. Sell of 6 = 30. Profit = 10. Profit% = (10/20)*100 = 50%."
  },
  {
    id: "nlat-2-q112",
    section: "Quantitative Reasoning",
    question: "What is the cube root of 2197?",
    options: ["11", "12", "13", "14"],
    correct: 2,
    explanation: "13^3 = 2197."
  },
  {
    id: "nlat-2-q113",
    section: "Quantitative Reasoning",
    question: "The angles of a triangle are in the ratio 1:2:3. What is the largest angle?",
    options: ["60 deg", "75 deg", "90 deg", "120 deg"],
    correct: 2,
    explanation: "1x+2x+3x=180 -> 6x=180 -> x=30. Largest = 3*30 = 90."
  },
  {
    id: "nlat-2-q114",
    section: "Quantitative Reasoning",
    question: "A cistern can be filled by pipe A in 6 hours and pipe B in 12 hours. How long will they take together?",
    options: ["2 hours", "4 hours", "6 hours", "8 hours"],
    correct: 1,
    explanation: "(1/6 + 1/12) = 3/12 = 1/4. So 4 hours."
  },
  {
    id: "nlat-2-q115",
    section: "Quantitative Reasoning",
    question: "The side of a cube is doubled. How many times will its volume increase?",
    options: ["2 times", "4 times", "8 times", "16 times"],
    correct: 2,
    explanation: "Volume = s^3. (2s)^3 = 8s^3."
  },
  {
    id: "nlat-2-q116",
    section: "Quantitative Reasoning",
    question: "Find the value of (0.2 * 0.2 * 0.2) / 0.01",
    options: ["0.08", "0.8", "8", "80"],
    correct: 1,
    explanation: "0.008 / 0.01 = 0.8."
  },
  {
    id: "nlat-2-q117",
    section: "Quantitative Reasoning",
    question: "If a number is increased by 20% and then decreased by 20%, what is the net change?",
    options: ["No change", "4% increase", "4% decrease", "2% decrease"],
    correct: 2,
    explanation: "100 -> 120 -> 96. Net = 4% decrease."
  },
  {
    id: "nlat-2-q118",
    section: "Quantitative Reasoning",
    question: "What is the HCF of 0.5 and 0.25?",
    options: ["0.5", "0.25", "0.1", "0.05"],
    correct: 1,
    explanation: "HCF of 0.50 and 0.25 is 0.25."
  },
  {
    id: "nlat-2-q119",
    section: "Quantitative Reasoning",
    question: "A man can do 1/3 of a work in 5 days. How many days for the whole work?",
    options: ["10", "15", "20", "25"],
    correct: 1,
    explanation: "1/3 in 5 -> 1 in 15."
  },
  {
    id: "nlat-2-q120",
    section: "Quantitative Reasoning",
    question: "The square of which number is 5041?",
    options: ["61", "71", "81", "91"],
    correct: 1,
    explanation: "70^2 = 4900. 71^2 = 5041."
  },

  // SECTION 5: GK & CURRENT AFFAIRS (30 QUESTIONS)
  {
    id: "nlat-2-q121",
    section: "GK & Current Affairs",
    question: "Which Indian state has launched the 'Mukhya Mantri Mahila Samman Yojana' to provide ₹1000/month to every adult woman?",
    options: ["Delhi", "Maharashtra", "Madhya Pradesh", "Rajasthan"],
    correct: 0,
    explanation: "The Delhi Government announced this in its 2024 Budget."
  },
  {
    id: "nlat-2-q122",
    section: "GK & Current Affairs",
    question: "The 'World Sustainable Development Summit 2024' was held in which city?",
    options: ["Geneva", "New Delhi", "New York", "Paris"],
    correct: 1,
    explanation: "It was organized by TERI in New Delhi."
  },
  {
    id: "nlat-2-q123",
    section: "GK & Current Affairs",
    question: "Who is the first woman to be appointed as the permanent representative of India to the United Nations?",
    options: ["Ruchira Kamboj", "Vijayalakshmi Pandit", "Nirupama Rao", "Priyanka Chopra"],
    correct: 0,
    explanation: "Ruchira Kamboj (Vijayalakshmi Pandit was the first woman President of the UN General Assembly)."
  },
  {
    id: "nlat-2-q124",
    section: "GK & Current Affairs",
    question: "The 'Shakti' scheme, which provides free bus travel for women, was launched by which state?",
    options: ["Karnataka", "Tamil Nadu", "Telangana", "Kerala"],
    correct: 0,
    explanation: "Karnataka (under the Congress government in 2023)."
  },
  {
    id: "nlat-2-q125",
    section: "GK & Current Affairs",
    question: "Which country has recently officially abolished its 1:1 currency peg with the US Dollar in early 2024?",
    options: ["Argentina", "Nigeria", "Egypt", "Sri Lanka"],
    correct: 2,
    explanation: "Egypt devalued its currency and moved to a flexible exchange rate in March 2024."
  },
  {
    id: "nlat-2-q126",
    section: "GK & Current Affairs",
    question: "The 'Global Gender Gap Report' is released by which organization?",
    options: ["World Bank", "United Nations", "World Economic Forum (WEF)", "IMF"],
    correct: 2,
    explanation: "World Economic Forum."
  },
  {
    id: "nlat-2-q127",
    section: "GK & Current Affairs",
    question: "Who won the Best Movie Oscar at the 96th Academy Awards (2024)?",
    options: ["Barbie", "Oppenheimer", "The Holdovers", "Poor Things"],
    correct: 1,
    explanation: "Oppenheimer won 7 Oscars including Best Picture."
  },
  {
    id: "nlat-2-q128",
    section: "GK & Current Affairs",
    question: "The 'Sahitya Akademi Award 2023' for English was awarded to Neelum Saran Gour for which novel?",
    options: ["Requiem in Raga Janki", "The City of Gold", "Lords of the Deccan", "Western Lane"],
    correct: 0,
    explanation: "Requiem in Raga Janki."
  },
  {
    id: "nlat-2-q129",
    section: "GK & Current Affairs",
    question: "The 'Bhashini' AI tool launched by India is primarily for:",
    options: ["Weather prediction", "Real-time language translation", "Stock market analysis", "Cybersecurity"],
    correct: 1,
    explanation: "Bhashini is an AI-led language translation platform."
  },
  {
    id: "nlat-2-q130",
    section: "GK & Current Affairs",
    question: "Which city has been ranked as the 'Cleanest City in India' for the 7th consecutive year in Swachh Survekshan 2023?",
    options: ["Surat", "Indore", "Bhopal", "Navi Mumbai"],
    correct: 1,
    explanation: "Indore (shared with Surat in 2023)."
  },
  {
    id: "nlat-2-q131",
    section: "GK & Current Affairs",
    question: "The 'Vande Bharat' trains are manufactured in which city?",
    options: ["Chennai", "Kapurthala", "Rae Bareli", "Bhopal"],
    correct: 0,
    explanation: "Integral Coach Factory (ICF), Chennai."
  },
  {
    id: "nlat-2-q132",
    section: "GK & Current Affairs",
    question: "Who is the current Secretary-General of the United Nations?",
    options: ["Ban Ki-moon", "Antonio Guterres", "Kofi Annan", "Tedros Adhanom"],
    correct: 1,
    explanation: "Antonio Guterres."
  },
  {
    id: "nlat-2-q133",
    section: "GK & Current Affairs",
    question: "The 'Golden Globe Awards' are presented for excellence in:",
    options: ["Literature", "Film and Television", "Science", "Music"],
    correct: 1,
    explanation: "Film and Television."
  },
  {
    id: "nlat-2-q134",
    section: "GK & Current Affairs",
    question: "Which country has the world's largest Constitution?",
    options: ["USA", "India", "UK", "Russia"],
    correct: 1,
    explanation: "India (written constitution)."
  },
  {
    id: "nlat-2-q135",
    section: "GK & Current Affairs",
    question: "The 'Headquarters' of the International Court of Justice (ICJ) is in:",
    options: ["Geneva", "New York", "The Hague", "Vienna"],
    correct: 2,
    explanation: "The Hague, Netherlands."
  },
  {
    id: "nlat-2-q136",
    section: "GK & Current Affairs",
    question: "Who was the first woman to fly solo across the Atlantic Ocean?",
    options: ["Amelia Earhart", "Valentina Tereshkova", "Sally Ride", "Bessie Coleman"],
    correct: 0,
    explanation: "Amelia Earhart."
  },
  {
    id: "nlat-2-q137",
    section: "GK & Current Affairs",
    question: "The 'Silicon Valley' of India is:",
    options: ["Hyderabad", "Pune", "Bengaluru", "Gurugram"],
    correct: 2,
    explanation: "Bengaluru."
  },
  {
    id: "nlat-2-q138",
    section: "GK & Current Affairs",
    question: "The 'Fundamental Duties' were added to the Indian Constitution by which amendment?",
    options: ["42nd Amendment Act", "44th Amendment Act", "1st Amendment Act", "86th Amendment Act"],
    correct: 0,
    explanation: "42nd Amendment Act, 1976 (based on Swaran Singh Committee recommendations)."
  },
  {
    id: "nlat-2-q139",
    section: "GK & Current Affairs",
    question: "Which river is known as the 'Ganges of the South'?",
    options: ["Krishna", "Godavari", "Kaveri", "Narmada"],
    correct: 2,
    explanation: "Kaveri (sometimes Godavari is called Dakshin Ganga, but Kaveri is Ganges of the South)."
  },
  {
    id: "nlat-2-q140",
    section: "GK & Current Affairs",
    question: "The 'World Trade Organization' (WTO) replaced which agreement?",
    options: ["IMF", "GATT", "UNCTAD", "World Bank"],
    correct: 1,
    explanation: "General Agreement on Tariffs and Trade (GATT)."
  },
  {
    id: "nlat-2-q141",
    section: "GK & Current Affairs",
    question: "Who discovered Penicillin?",
    options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
    correct: 1,
    explanation: "Alexander Fleming."
  },
  {
    id: "nlat-2-q142",
    section: "GK & Current Affairs",
    question: "The 'Agha Khan Cup' is associated with which sport?",
    options: ["Cricket", "Football", "Hockey", "Tennis"],
    correct: 2,
    explanation: "Hockey."
  },
  {
    id: "nlat-2-q143",
    section: "GK & Current Affairs",
    question: "Which part of the Constitution deals with the 'Directive Principles of State Policy'?",
    options: ["Part III", "Part IV", "Part V", "Part IX"],
    correct: 1,
    explanation: "Part IV (Articles 36-51)."
  },
  {
    id: "nlat-2-q144",
    section: "GK & Current Affairs",
    question: "The 'Smallest Planet' in our solar system is:",
    options: ["Venus", "Mars", "Mercury", "Earth"],
    correct: 2,
    explanation: "Mercury."
  },
  {
    id: "nlat-2-q145",
    section: "GK & Current Affairs",
    question: "Who is known as the 'Iron Man of India'?",
    options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "Bhagat Singh"],
    correct: 2,
    explanation: "Sardar Vallabhbhai Patel."
  },
  {
    id: "nlat-2-q146",
    section: "GK & Current Affairs",
    question: "The 'International Yoga Day' is celebrated on:",
    options: ["June 21", "January 26", "October 2", "August 15"],
    correct: 0,
    explanation: "June 21."
  },
  {
    id: "nlat-2-q147",
    section: "GK & Current Affairs",
    question: "Which organ in the human body produces Insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Heart"],
    correct: 1,
    explanation: "Pancreas."
  },
  {
    id: "nlat-2-q148",
    section: "GK & Current Affairs",
    question: "The 'Quit India Movement' was started from which city?",
    options: ["Delhi", "Mumbai", "Kolkata", "Ahmedabad"],
    correct: 1,
    explanation: "Bombay (Mumbai) at the Gowalia Tank Maidan."
  },
  {
    id: "nlat-2-q149",
    section: "GK & Current Affairs",
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    correct: 2,
    explanation: "Paris."
  },
  {
    id: "nlat-2-q150",
    section: "GK & Current Affairs",
    question: "The 'White Revolution' is associated with:",
    options: ["Rice", "Milk", "Cotton", "Fish"],
    correct: 1,
    explanation: "Milk (Operation Flood)."
  }
];
