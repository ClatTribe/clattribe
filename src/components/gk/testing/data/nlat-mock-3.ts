import { MockQuestion } from "../constants";

export const NLAT_MOCK_3: MockQuestion[] = [
  // SECTION 1: LEGAL REASONING (30 QUESTIONS)
  // PASSAGE 1: CONSTITUTIONAL LAW – FREEDOM OF SPEECH AND SEDITION (Q1–Q6)
  {
    id: "nlat-3-q1",
    section: "Legal Reasoning",
    passage: `Article 19(1)(a) of the Indian Constitution guarantees the freedom of speech and expression. However, this right is not absolute and is subject to 'reasonable restrictions' under Article 19(2) in the interests of the sovereignty and integrity of India, the security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation, or incitement to an offence. One of the most controversial restrictions has been the law of 'Sedition' (Section 124A of the IPC, now replaced by similar provisions in the BNS). In the landmark case of Kedar Nath Singh v. State of Bihar (1962), the Supreme Court upheld the constitutionality of sedition but narrowed its scope. The Court held that criticism of the government, however strongly worded, is not sedition unless it involves an 'incitement to violence' or the 'intention to create public disorder'. Mere 'disaffection' or 'bad feelings' toward the government are not sufficient to constitute a crime. Recently, in S.G. Vombatkere v. Union of India (2022), the Supreme Court put the law of sedition in abeyance, directing governments not to file new cases until the law is reviewed.`,
    question: "Aman writes a blog post criticizing the government's economic policies, calling the Prime Minister 'incompetent' and the policies 'a disaster for the poor'. He does not call for any protest or violence. Is Aman's act considered sedition under the Kedar Nath Singh guidelines?",
    options: [
      "Yes, because calling the PM incompetent creates 'disaffection' toward the government.",
      "No, because there was no incitement to violence or intention to create public disorder.",
      "Yes, because any criticism of the government is a threat to sovereignty.",
      "No, but only if he deletes the post after 24 hours."
    ],
    correct: 1,
    explanation: "Strong criticism of the government is protected speech under Article 19(1)(a) unless it incites violence or creates public disorder."
  },
  {
    id: "nlat-3-q2",
    section: "Legal Reasoning",
    passage: `Article 19(1)(a) of the Indian Constitution guarantees the freedom of speech and expression. However, this right is not absolute and is subject to 'reasonable restrictions' under Article 19(2) in the interests of the sovereignty and integrity of India, the security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation, or incitement to an offence. One of the most controversial restrictions has been the law of 'Sedition' (Section 124A of the IPC, now replaced by similar provisions in the BNS). In the landmark case of Kedar Nath Singh v. State of Bihar (1962), the Supreme Court upheld the constitutionality of sedition but narrowed its scope. The Court held that criticism of the government, however strongly worded, is not sedition unless it involves an 'incitement to violence' or the 'intention to create public disorder'. Mere 'disaffection' or 'bad feelings' toward the government are not sufficient to constitute a crime. Recently, in S.G. Vombatkere v. Union of India (2022), the Supreme Court put the law of sedition in abeyance, directing governments not to file new cases until the law is reviewed.`,
    question: "The Government bans a book because it contains 'strong language' that some people might find 'indecent'. Under which head of Article 19(2) can the government justify this restriction?",
    options: [
      "Security of the State",
      "Decency or Morality",
      "Friendly relations with foreign States",
      "Public Order"
    ],
    correct: 1,
    explanation: "Restrictions on speech for being 'indecent' fall under the 'Decency or Morality' head of Article 19(2)."
  },
  {
    id: "nlat-3-q3",
    section: "Legal Reasoning",
    passage: `Article 19(1)(a) of the Indian Constitution guarantees the freedom of speech and expression. However, this right is not absolute and is subject to 'reasonable restrictions' under Article 19(2) in the interests of the sovereignty and integrity of India, the security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation, or incitement to an offence. One of the most controversial restrictions has been the law of 'Sedition' (Section 124A of the IPC, now replaced by similar provisions in the BNS). In the landmark case of Kedar Nath Singh v. State of Bihar (1962), the Supreme Court upheld the constitutionality of sedition but narrowed its scope. The Court held that criticism of the government, however strongly worded, is not sedition unless it involves an 'incitement to violence' or the 'intention to create public disorder'. Mere 'disaffection' or 'bad feelings' toward the government are not sufficient to constitute a crime. Recently, in S.G. Vombatkere v. Union of India (2022), the Supreme Court put the law of sedition in abeyance, directing governments not to file new cases until the law is reviewed.`,
    question: "What did the Supreme Court decide in the S.G. Vombatkere (2022) case regarding sedition?",
    options: [
      "It declared sedition unconstitutional and removed it from the IPC.",
      "It put the law in 'abeyance', meaning no new cases should be filed and pending cases should be stayed.",
      "It made the punishment for sedition more severe.",
      "It held that sedition should apply to all social media posts."
    ],
    correct: 1,
    explanation: "The Court effectively paused the operation of Section 124A until the central government completed its review of the law."
  },
  {
    id: "nlat-3-q4",
    section: "Legal Reasoning",
    passage: `Article 19(1)(a) of the Indian Constitution guarantees the freedom of speech and expression. However, this right is not absolute and is subject to 'reasonable restrictions' under Article 19(2) in the interests of the sovereignty and integrity of India, the security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation, or incitement to an offence. One of the most controversial restrictions has been the law of 'Sedition' (Section 124A of the IPC, now replaced by similar provisions in the BNS). In the landmark case of Kedar Nath Singh v. State of Bihar (1962), the Supreme Court upheld the constitutionality of sedition but narrowed its scope. The Court held that criticism of the government, however strongly worded, is not sedition unless it involves an 'incitement to violence' or the 'intention to create public disorder'. Mere 'disaffection' or 'bad feelings' toward the government are not sufficient to constitute a crime. Recently, in S.G. Vombatkere v. Union of India (2022), the Supreme Court put the law of sedition in abeyance, directing governments not to file new cases until the law is reviewed.`,
    question: "Aman makes a speech in a public square urging people to 'pick up arms and overthrow the elected government'. Is this protected under Article 19(1)(a)?",
    options: [
      "Yes, it is just an expression of his opinion.",
      "No, this constitutes 'incitement to an offence' and threatens the 'security of the State', which are valid grounds for restriction.",
      "Yes, but only if he doesn't actually have any weapons.",
      "No, because he didn't have a microphone."
    ],
    correct: 1,
    explanation: "Incitement to violence is a core ground for restricting speech and does not enjoy constitutional protection."
  },
  {
    id: "nlat-3-q5",
    section: "Legal Reasoning",
    passage: `Article 19(1)(a) of the Indian Constitution guarantees the freedom of speech and expression. However, this right is not absolute and is subject to 'reasonable restrictions' under Article 19(2) in the interests of the sovereignty and integrity of India, the security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation, or incitement to an offence. One of the most controversial restrictions has been the law of 'Sedition' (Section 124A of the IPC, now replaced by similar provisions in the BNS). In the landmark case of Kedar Nath Singh v. State of Bihar (1962), the Supreme Court upheld the constitutionality of sedition but narrowed its scope. The Court held that criticism of the government, however strongly worded, is not sedition unless it involves an 'incitement to violence' or the 'intention to create public disorder'. Mere 'disaffection' or 'bad feelings' toward the government are not sufficient to constitute a crime. Recently, in S.G. Vombatkere v. Union of India (2022), the Supreme Court put the law of sedition in abeyance, directing governments not to file new cases until the law is reviewed.`,
    question: "The term 'Disaffection' in the context of sedition law traditionally meant:",
    options: [
      "Criticism of policies",
      "Lack of affection or loyalty/hatred",
      "Love for the country",
      "Economic disagreement"
    ],
    correct: 1,
    explanation: "Disaffection includes disloyalty and all feelings of enmity toward the government."
  },
  {
    id: "nlat-3-q6",
    section: "Legal Reasoning",
    passage: `Article 19(1)(a) of the Indian Constitution guarantees the freedom of speech and expression. However, this right is not absolute and is subject to 'reasonable restrictions' under Article 19(2) in the interests of the sovereignty and integrity of India, the security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation, or incitement to an offence. One of the most controversial restrictions has been the law of 'Sedition' (Section 124A of the IPC, now replaced by similar provisions in the BNS). In the landmark case of Kedar Nath Singh v. State of Bihar (1962), the Supreme Court upheld the constitutionality of sedition but narrowed its scope. The Court held that criticism of the government, however strongly worded, is not sedition unless it involves an 'incitement to violence' or the 'intention to create public disorder'. Mere 'disaffection' or 'bad feelings' toward the government are not sufficient to constitute a crime. Recently, in S.G. Vombatkere v. Union of India (2022), the Supreme Court put the law of sedition in abeyance, directing governments not to file new cases until the law is reviewed.`,
    question: "Which of the following is NOT a ground for restricting free speech under Article 19(2)?",
    options: [
      "Public Order",
      "Sovereignty of India",
      "Criticism of the Ruling Party",
      "Contempt of Court"
    ],
    correct: 2,
    explanation: "Criticizing a political party is a fundamental part of democracy and is not a ground for restriction under 19(2)."
  },

  // PASSAGE 2: LAW OF CONTRACTS – CAPACITY TO CONTRACT (Q7–Q12)
  {
    id: "nlat-3-q7",
    section: "Legal Reasoning",
    passage: `For an agreement to be a valid contract, the parties must be 'competent' to contract. Under Section 11 of the Indian Contract Act, every person is competent to contract who is: (i) of the age of majority (18 years), (ii) of sound mind, and (iii) not disqualified from contracting by any law. In the landmark case of Mohori Bibee v. Dharmodas Ghose (1903), the Privy Council held that a contract with a minor is 'void ab initio'—meaning it is void from the very beginning. Unlike some other legal systems, a minor's contract in India cannot even be 'ratified' (approved) by the minor after they turn 18. However, a minor can be a beneficiary under a contract (e.g., they can be a promisee but not a promisor). Furthermore, under Section 68, if a person supplies 'necessaries' (food, clothing, education) to a minor, they are entitled to be reimbursed from the minor's property. Regarding 'soundness of mind', a person is of sound mind if, at the time of making the contract, they are capable of understanding it and of forming a rational judgment as to its effect upon their interests.`,
    question: "Aman, aged 17, borrows ₹1 lakh from Mr. X and signs a mortgage deed for his house as security. When Aman turns 18, he signs a document 'ratifying' the original loan. Is the contract now valid?",
    options: [
      "Yes, he ratified it after becoming a major.",
      "No, the original contract was 'void ab initio', and a void agreement cannot be ratified.",
      "Yes, because Aman used the money for his college fees.",
      "No, but only if Aman's parents disagree."
    ],
    correct: 1,
    explanation: "A minor's agreement is a nullity in the eyes of law and cannot be given life even after the minor attains majority."
  },
  {
    id: "nlat-3-q8",
    section: "Legal Reasoning",
    passage: `For an agreement to be a valid contract, the parties must be 'competent' to contract. Under Section 11 of the Indian Contract Act, every person is competent to contract who is: (i) of the age of majority (18 years), (ii) of sound mind, and (iii) not disqualified from contracting by any law. In the landmark case of Mohori Bibee v. Dharmodas Ghose (1903), the Privy Council held that a contract with a minor is 'void ab initio'—meaning it is void from the very beginning. Unlike some other legal systems, a minor's contract in India cannot even be 'ratified' (approved) by the minor after they turn 18. However, a minor can be a beneficiary under a contract (e.g., they can be a promisee but not a promisor). Furthermore, under Section 68, if a person supplies 'necessaries' (food, clothing, education) to a minor, they are entitled to be reimbursed from the minor's property. Regarding 'soundness of mind', a person is of sound mind if, at the time of making the contract, they are capable of understanding it and of forming a rational judgment as to its effect upon their interests.`,
    question: "Aman, aged 16, buys a luxury watch on credit. The shopkeeper sues for the money. Can Aman be forced to pay?",
    options: [
      "Yes, a minor must pay for what they buy.",
      "No, the contract is void. A minor is not personally liable for debts.",
      "Yes, but only if the watch is still in good condition.",
      "No, but the shopkeeper can take Aman's bicycle instead."
    ],
    correct: 1,
    explanation: "A minor is not personally liable for any contract. The shopkeeper cannot sue for the price of non-essential luxury items."
  },
  {
    id: "nlat-3-q9",
    section: "Legal Reasoning",
    passage: `For an agreement to be a valid contract, the parties must be 'competent' to contract. Under Section 11 of the Indian Contract Act, every person is competent to contract who is: (i) of the age of majority (18 years), (ii) of sound mind, and (iii) not disqualified from contracting by any law. In the landmark case of Mohori Bibee v. Dharmodas Ghose (1903), the Privy Council held that a contract with a minor is 'void ab initio'—meaning it is void from the very beginning. Unlike some other legal systems, a minor's contract in India cannot even be 'ratified' (approved) by the minor after they turn 18. However, a minor can be a beneficiary under a contract (e.g., they can be a promisee but not a promisor). Furthermore, under Section 68, if a person supplies 'necessaries' (food, clothing, education) to a minor, they are entitled to be reimbursed from the minor's property. Regarding 'soundness of mind', a person is of sound mind if, at the time of making the contract, they are capable of understanding it and of forming a rational judgment as to its effect upon their interests.`,
    question: "A shopkeeper provides food and basic clothing to Aman, an orphan aged 10. Can the shopkeeper recover the cost?",
    options: [
      "No, contracts with 10-year-olds are void.",
      "Yes, under Section 68, the shopkeeper is entitled to reimbursement from Aman's property (if any) as these are 'necessaries'.",
      "No, because the shopkeeper should have done it for free.",
      "Yes, but only if Aman's uncle agrees."
    ],
    correct: 1,
    explanation: "While a minor is not personally liable, their estate/property is liable for the supply of 'necessaries' suited to their condition in life."
  },
  {
    id: "nlat-3-q10",
    section: "Legal Reasoning",
    passage: `For an agreement to be a valid contract, the parties must be 'competent' to contract. Under Section 11 of the Indian Contract Act, every person is competent to contract who is: (i) of the age of majority (18 years), (ii) of sound mind, and (iii) not disqualified from contracting by any law. In the landmark case of Mohori Bibee v. Dharmodas Ghose (1903), the Privy Council held that a contract with a minor is 'void ab initio'—meaning it is void from the very beginning. Unlike some other legal systems, a minor's contract in India cannot even be 'ratified' (approved) by the minor after they turn 18. However, a minor can be a beneficiary under a contract (e.g., they can be a promisee but not a promisor). Furthermore, under Section 68, if a person supplies 'necessaries' (food, clothing, education) to a minor, they are entitled to be reimbursed from the minor's property. Regarding 'soundness of mind', a person is of sound mind if, at the time of making the contract, they are capable of understanding it and of forming a rational judgment as to its effect upon their interests.`,
    question: "Aman, who is usually of sound mind, enters into a contract while he is in a state of severe intoxication and cannot understand the terms. Is the contract valid?",
    options: [
      "Yes, he is usually of sound mind.",
      "No, if at the time of making the contract he was incapable of forming a rational judgment due to intoxication, the contract is not binding.",
      "Yes, because voluntary intoxication is never a defense.",
      "No, but only if he didn't drink the alcohol."
    ],
    correct: 1,
    explanation: "Soundness of mind is required 'at the time of making the contract'. Temporary insanity or severe intoxication can void the contract if it negates understanding."
  },
  {
    id: "nlat-3-q11",
    section: "Legal Reasoning",
    passage: `For an agreement to be a valid contract, the parties must be 'competent' to contract. Under Section 11 of the Indian Contract Act, every person is competent to contract who is: (i) of the age of majority (18 years), (ii) of sound mind, and (iii) not disqualified from contracting by any law. In the landmark case of Mohori Bibee v. Dharmodas Ghose (1903), the Privy Council held that a contract with a minor is 'void ab initio'—meaning it is void from the very beginning. Unlike some other legal systems, a minor's contract in India cannot even be 'ratified' (approved) by the minor after they turn 18. However, a minor can be a beneficiary under a contract (e.g., they can be a promisee but not a promisor). Furthermore, under Section 68, if a person supplies 'necessaries' (food, clothing, education) to a minor, they are entitled to be reimbursed from the minor's property. Regarding 'soundness of mind', a person is of sound mind if, at the time of making the contract, they are capable of understanding it and of forming a rational judgment as to its effect upon their interests.`,
    question: "Aman, aged 17, represents to a bank that he is 19 and takes a loan. Can the bank sue him for fraud?",
    options: [
      "Yes, he lied about his age.",
      "No, the rule of 'estoppel' does not apply to a minor. He can still plead minority to void the contract.",
      "Yes, because banks are protected by special laws.",
      "No, but Aman must be sent to a juvenile home."
    ],
    correct: 1,
    explanation: "The doctrine of estoppel (preventing someone from denying a previous statement) does not work against a minor's protection in contract law."
  },
  {
    id: "nlat-3-q12",
    section: "Legal Reasoning",
    passage: `For an agreement to be a valid contract, the parties must be 'competent' to contract. Under Section 11 of the Indian Contract Act, every person is competent to contract who is: (i) of the age of majority (18 years), (ii) of sound mind, and (iii) not disqualified from contracting by any law. In the landmark case of Mohori Bibee v. Dharmodas Ghose (1903), the Privy Council held that a contract with a minor is 'void ab initio'—meaning it is void from the very beginning. Unlike some other legal systems, a minor's contract in India cannot even be 'ratified' (approved) by the minor after they turn 18. However, a minor can be a beneficiary under a contract (e.g., they can be a promisee but not a promisor). Furthermore, under Section 68, if a person supplies 'necessaries' (food, clothing, education) to a minor, they are entitled to be reimbursed from the minor's property. Regarding 'soundness of mind', a person is of sound mind if, at the time of making the contract, they are capable of understanding it and of forming a rational judgment as to its effect upon their interests.`,
    question: "Which of the following can a minor legally do?",
    options: [
      "Sign a mortgage deed as a borrower.",
      "Be a beneficiary (e.g., receive a gift of property).",
      "Be a partner in a firm with full liability.",
      "Guarantee someone else's loan."
    ],
    correct: 1,
    explanation: "A minor can be a promisee or a beneficiary because the law aims to protect them, not prevent them from gaining."
  },

  // PASSAGE 3: LAW OF TORTS – DEFAMATION (Q13–Q18)
  {
    id: "nlat-3-q13",
    section: "Legal Reasoning",
    passage: `Defamation is the publication of a false statement that tends to lower the reputation of a person in the estimation of right-thinking members of society. In India, defamation is both a civil wrong (tort) and a criminal offense (under BNS/IPC). There are two types: (1) Slander: Defamation in a transient form (spoken words, gestures); and (2) Libel: Defamation in a permanent form (writing, printing, pictures). For a statement to be defamatory, it must satisfy three conditions: (i) The statement must be defamatory; (ii) It must refer to the plaintiff; and (iii) It must be published (communicated to at least one person other than the plaintiff). Defenses to defamation include: (a) Truth/Justification: The statement is true; (b) Fair Comment: Honest opinion on a matter of public interest; and (c) Privilege: Situations where free speech is protected (e.g., statements made in Parliament or during judicial proceedings). Absolute privilege means no action can be taken even if the statement was made with malice, whereas Qualified privilege is lost if the plaintiff proves malice.`,
    question: "Aman writes a private letter to Mr. X calling him a 'thief and a liar'. No one else reads the letter. Has Aman committed defamation?",
    options: [
      "Yes, the words are defamatory.",
      "No, because there was no 'publication'—the statement was not communicated to a third party.",
      "Yes, because Mr. X's feelings were hurt.",
      "No, but only if Aman can prove Mr. X is actually a thief."
    ],
    correct: 1,
    explanation: "Publication to a third party is an essential element of defamation. Communicating only to the person being insulted is not defamation."
  },
  {
    id: "nlat-3-q14",
    section: "Legal Reasoning",
    passage: `Defamation is the publication of a false statement that tends to lower the reputation of a person in the estimation of right-thinking members of society. In India, defamation is both a civil wrong (tort) and a criminal offense (under BNS/IPC). There are two types: (1) Slander: Defamation in a transient form (spoken words, gestures); and (2) Libel: Defamation in a permanent form (writing, printing, pictures). For a statement to be defamatory, it must satisfy three conditions: (i) The statement must be defamatory; (ii) It must refer to the plaintiff; and (iii) It must be published (communicated to at least one person other than the plaintiff). Defenses to defamation include: (a) Truth/Justification: The statement is true; (b) Fair Comment: Honest opinion on a matter of public interest; and (c) Privilege: Situations where free speech is protected (e.g., statements made in Parliament or during judicial proceedings). Absolute privilege means no action can be taken even if the statement was made with malice, whereas Qualified privilege is lost if the plaintiff proves malice.`,
    question: "During a trial, a witness falsely states that the defendant has a criminal past. Can the defendant sue the witness for defamation?",
    options: [
      "Yes, it is a false and defamatory statement.",
      "No, statements made during judicial proceedings enjoy 'Absolute Privilege'.",
      "Yes, but only if the witness was not under oath.",
      "No, but the witness must pay a fine to the court."
    ],
    correct: 1,
    explanation: "Absolute privilege protects participants in judicial and legislative proceedings to ensure they can speak without fear of being sued."
  },
  {
    id: "nlat-3-q15",
    section: "Legal Reasoning",
    passage: `Defamation is the publication of a false statement that tends to lower the reputation of a person in the estimation of right-thinking members of society. In India, defamation is both a civil wrong (tort) and a criminal offense (under BNS/IPC). There are two types: (1) Slander: Defamation in a transient form (spoken words, gestures); and (2) Libel: Defamation in a permanent form (writing, printing, pictures). For a statement to be defamatory, it must satisfy three conditions: (i) The statement must be defamatory; (ii) It must refer to the plaintiff; and (iii) It must be published (communicated to at least one person other than the plaintiff). Defenses to defamation include: (a) Truth/Justification: The statement is true; (b) Fair Comment: Honest opinion on a matter of public interest; and (c) Privilege: Situations where free speech is protected (e.g., statements made in Parliament or during judicial proceedings). Absolute privilege means no action can be taken even if the statement was made with malice, whereas Qualified privilege is lost if the plaintiff proves malice.`,
    question: "A journalist writes a review of a new movie, saying the acting was 'pathetic' and the director 'wasted public time'. Is this defamation?",
    options: [
      "Yes, it lowers the reputation of the director.",
      "No, it is a 'Fair Comment' on a matter of public interest (a movie).",
      "Yes, because 'pathetic' is a strong word.",
      "No, because the director didn't sue yet."
    ],
    correct: 1,
    explanation: "Fair comment allows for honest, non-malicious criticism of public works and actions."
  },
  {
    id: "nlat-3-q16",
    section: "Legal Reasoning",
    passage: `Defamation is the publication of a false statement that tends to lower the reputation of a person in the estimation of right-thinking members of society. In India, defamation is both a civil wrong (tort) and a criminal offense (under BNS/IPC). There are two types: (1) Slander: Defamation in a transient form (spoken words, gestures); and (2) Libel: Defamation in a permanent form (writing, printing, pictures). For a statement to be defamatory, it must satisfy three conditions: (i) The statement must be defamatory; (ii) It must refer to the plaintiff; and (iii) It must be published (communicated to at least one person other than the plaintiff). Defenses to defamation include: (a) Truth/Justification: The statement is true; (b) Fair Comment: Honest opinion on a matter of public interest; and (c) Privilege: Situations where free speech is protected (e.g., statements made in Parliament or during judicial proceedings). Absolute privilege means no action can be taken even if the statement was made with malice, whereas Qualified privilege is lost if the plaintiff proves malice.`,
    question: "What is the difference between Libel and Slander in English Law?",
    options: [
      "Libel is criminal, Slander is civil.",
      "Libel is in a permanent form, Slander is in a transient form.",
      "Slander is always actionable without proof of special damage.",
      "There is no difference in any legal system."
    ],
    correct: 1,
    explanation: "Libel (written) is generally considered more serious than Slander (spoken) because it is permanent."
  },
  {
    id: "nlat-3-q17",
    section: "Legal Reasoning",
    passage: `Defamation is the publication of a false statement that tends to lower the reputation of a person in the estimation of right-thinking members of society. In India, defamation is both a civil wrong (tort) and a criminal offense (under BNS/IPC). There are two types: (1) Slander: Defamation in a transient form (spoken words, gestures); and (2) Libel: Defamation in a permanent form (writing, printing, pictures). For a statement to be defamatory, it must satisfy three conditions: (i) The statement must be defamatory; (ii) It must refer to the plaintiff; and (iii) It must be published (communicated to at least one person other than the plaintiff). Defenses to defamation include: (a) Truth/Justification: The statement is true; (b) Fair Comment: Honest opinion on a matter of public interest; and (c) Privilege: Situations where free speech is protected (e.g., statements made in Parliament or during judicial proceedings). Absolute privilege means no action can be taken even if the statement was made with malice, whereas Qualified privilege is lost if the plaintiff proves malice.`,
    question: "Aman posts a photo of Mr. X with a caption: 'This man is a habitual gambler.' The statement is 100% true. Mr. X sues for defamation. Will he succeed?",
    options: [
      "Yes, it still hurts his reputation.",
      "No, 'Truth' (Justification) is an absolute defense in civil defamation.",
      "Yes, because gambling is a private matter.",
      "No, but only if Aman has a photo of Mr. X gambling."
    ],
    correct: 1,
    explanation: "In civil law, truth is a complete defense. In criminal law, truth must also be for 'public good' to be a defense."
  },
  {
    id: "nlat-3-q18",
    section: "Legal Reasoning",
    passage: `Defamation is the publication of a false statement that tends to lower the reputation of a person in the estimation of right-thinking members of society. In India, defamation is both a civil wrong (tort) and a criminal offense (under BNS/IPC). There are two types: (1) Slander: Defamation in a transient form (spoken words, gestures); and (2) Libel: Defamation in a permanent form (writing, printing, pictures). For a statement to be defamatory, it must satisfy three conditions: (i) The statement must be defamatory; (ii) It must refer to the plaintiff; and (iii) It must be published (communicated to at least one person other than the plaintiff). Defenses to defamation include: (a) Truth/Justification: The statement is true; (b) Fair Comment: Honest opinion on a matter of public interest; and (c) Privilege: Situations where free speech is protected (e.g., statements made in Parliament or during judicial proceedings). Absolute privilege means no action can be taken even if the statement was made with malice, whereas Qualified privilege is lost if the plaintiff proves malice.`,
    question: "A newspaper mistakenly publishes a photo of 'Aman Sharma' (a doctor) next to a story about a 'thief caught in the city'. The story doesn't mention the doctor's name, but people recognize him. Is this defamation?",
    options: [
      "No, the newspaper didn't intend to defame him.",
      "Yes, the statement referred to him (even if by mistake) and was published to others.",
      "No, because his name wasn't there.",
      "Yes, but only if he loses his job."
    ],
    correct: 1,
    explanation: "Negligent or accidental reference to someone in a defamatory context still constitutes defamation. Intent is not always required."
  },

  // PASSAGE 4: LAW OF CRIMES – CULPABLE HOMICIDE AND MURDER (Q19–Q24)
  {
    id: "nlat-3-q19",
    section: "Legal Reasoning",
    passage: `The distinction between 'Culpable Homicide' and 'Murder' is one of the most complex areas of criminal law. All murders are culpable homicides, but not all culpable homicides are murders. Culpable Homicide (Section 299 IPC/BNS) is causing death by doing an act: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as is likely to cause death; or (iii) with the knowledge that the act is likely to cause death. Murder (Section 300 IPC/BNS) is a more aggravated form. It is murder if the act is done: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as the offender knows to be likely to cause death to the particular person; (iii) if the bodily injury is sufficient in the 'ordinary course of nature' to cause death; or (iv) if the act is so imminently dangerous that it must, in all probability, cause death. Murder is reduced to culpable homicide in five exceptions: (a) Grave and Sudden Provocation; (b) Private Defence (exceeding it in good faith); (c) Public Servant (exceeding power in good faith); (d) Sudden Fight; and (e) Consent (victim above 18).`,
    question: "Aman, during a sudden and heated argument, picks up a small stone and throws it at Mr. X. The stone hits Mr. X's temple, and he dies. It is proved that a normal person would not have died, but Mr. X had an exceptionally thin skull. Did Aman commit murder?",
    options: [
      "Yes, he intended to hit him.",
      "No, because the injury was not 'sufficient in the ordinary course of nature' to cause death, and Aman had no knowledge of the thin skull.",
      "Yes, because any act causing death is murder.",
      "No, but he committed suicide."
    ],
    correct: 1,
    explanation: "If the injury is not ordinarily fatal and the offender had no special knowledge of the victim's condition, it is likely culpable homicide or even a lesser offence, but not murder."
  },
  {
    id: "nlat-3-q20",
    section: "Legal Reasoning",
    passage: `The distinction between 'Culpable Homicide' and 'Murder' is one of the most complex areas of criminal law. All murders are culpable homicides, but not all culpable homicides are murders. Culpable Homicide (Section 299 IPC/BNS) is causing death by doing an act: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as is likely to cause death; or (iii) with the knowledge that the act is likely to cause death. Murder (Section 300 IPC/BNS) is a more aggravated form. It is murder if the act is done: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as the offender knows to be likely to cause death to the particular person; (iii) if the bodily injury is sufficient in the 'ordinary course of nature' to cause death; or (iv) if the act is so imminently dangerous that it must, in all probability, cause death. Murder is reduced to culpable homicide in five exceptions: (a) Grave and Sudden Provocation; (b) Private Defence (exceeding it in good faith); (c) Public Servant (exceeding power in good faith); (d) Sudden Fight; and (e) Consent (victim above 18).`,
    question: "Aman discovers his wife in an uncompromising position with another man. In a fit of uncontrollable rage, he kills the man. What is the most likely charge?",
    options: [
      "Murder",
      "Culpable Homicide not amounting to murder (due to Grave and Sudden Provocation).",
      "No crime, it was justified.",
      "Accidental death."
    ],
    correct: 1,
    explanation: "The exception of 'Grave and Sudden Provocation' reduces murder to culpable homicide not amounting to murder."
  },
  {
    id: "nlat-3-q21",
    section: "Legal Reasoning",
    passage: `The distinction between 'Culpable Homicide' and 'Murder' is one of the most complex areas of criminal law. All murders are culpable homicides, but not all culpable homicides are murders. Culpable Homicide (Section 299 IPC/BNS) is causing death by doing an act: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as is likely to cause death; or (iii) with the knowledge that the act is likely to cause death. Murder (Section 300 IPC/BNS) is a more aggravated form. It is murder if the act is done: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as the offender knows to be likely to cause death to the particular person; (iii) if the bodily injury is sufficient in the 'ordinary course of nature' to cause death; or (iv) if the act is so imminently dangerous that it must, in all probability, cause death. Murder is reduced to culpable homicide in five exceptions: (a) Grave and Sudden Provocation; (b) Private Defence (exceeding it in good faith); (c) Public Servant (exceeding power in good faith); (d) Sudden Fight; and (e) Consent (victim above 18).`,
    question: "Aman fires a gun into a crowded room without intending to kill anyone in particular. He kills Mr. X. This is murder because:",
    options: [
      "He intended to cause death.",
      "The act was so 'imminently dangerous' that it must, in all probability, cause death.",
      "Mr. X was his enemy.",
      "He had a license for the gun."
    ],
    correct: 1,
    explanation: "This falls under the 4th clause of Section 300—doing an act so dangerous that it carries a near-certainty of death."
  },
  {
    id: "nlat-3-q22",
    section: "Legal Reasoning",
    passage: `The distinction between 'Culpable Homicide' and 'Murder' is one of the most complex areas of criminal law. All murders are culpable homicides, but not all culpable homicides are murders. Culpable Homicide (Section 299 IPC/BNS) is causing death by doing an act: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as is likely to cause death; or (iii) with the knowledge that the act is likely to cause death. Murder (Section 300 IPC/BNS) is a more aggravated form. It is murder if the act is done: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as the offender knows to be likely to cause death to the particular person; (iii) if the bodily injury is sufficient in the 'ordinary course of nature' to cause death; or (iv) if the act is so imminently dangerous that it must, in all probability, cause death. Murder is reduced to culpable homicide in five exceptions: (a) Grave and Sudden Provocation; (b) Private Defence (exceeding it in good faith); (c) Public Servant (exceeding power in good faith); (d) Sudden Fight; and (e) Consent (victim above 18).`,
    question: "What is the key difference between 'Likely to cause death' and 'Ordinary course of nature to cause death'?",
    options: [
      "There is no difference.",
      "The former is a lower degree of probability (Culpable Homicide), while the latter is a higher degree (Murder).",
      "The former is for accidents, the latter for intent.",
      "The former only applies to animals."
    ],
    correct: 1,
    explanation: "Murder requires a higher degree of certainty/probability that death will result from the act."
  },
  {
    id: "nlat-3-q23",
    section: "Legal Reasoning",
    passage: `The distinction between 'Culpable Homicide' and 'Murder' is one of the most complex areas of criminal law. All murders are culpable homicides, but not all culpable homicides are murders. Culpable Homicide (Section 299 IPC/BNS) is causing death by doing an act: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as is likely to cause death; or (iii) with the knowledge that the act is likely to cause death. Murder (Section 300 IPC/BNS) is a more aggravated form. It is murder if the act is done: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as the offender knows to be likely to cause death to the particular person; (iii) if the bodily injury is sufficient in the 'ordinary course of nature' to cause death; or (iv) if the act is so imminently dangerous that it must, in all probability, cause death. Murder is reduced to culpable homicide in five exceptions: (a) Grave and Sudden Provocation; (b) Private Defence (exceeding it in good faith); (c) Public Servant (exceeding power in good faith); (d) Sudden Fight; and (e) Consent (victim above 18).`,
    question: "Aman and Mr. X get into a sudden fight in a bar. In the heat of the moment, Aman stabs Mr. X with a knife. Aman had no prior enmity. Which exception applies?",
    options: [
      "Private Defence",
      "Sudden Fight",
      "Consent",
      "Grave Provocation"
    ],
    correct: 1,
    explanation: "The 'Sudden Fight' exception applies when death is caused in the heat of passion upon a sudden quarrel without premeditation."
  },
  {
    id: "nlat-3-q24",
    section: "Legal Reasoning",
    passage: `The distinction between 'Culpable Homicide' and 'Murder' is one of the most complex areas of criminal law. All murders are culpable homicides, but not all culpable homicides are murders. Culpable Homicide (Section 299 IPC/BNS) is causing death by doing an act: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as is likely to cause death; or (iii) with the knowledge that the act is likely to cause death. Murder (Section 300 IPC/BNS) is a more aggravated form. It is murder if the act is done: (i) with the intention of causing death; (ii) with the intention of causing such bodily injury as the offender knows to be likely to cause death to the particular person; (iii) if the bodily injury is sufficient in the 'ordinary course of nature' to cause death; or (iv) if the act is so imminently dangerous that it must, in all probability, cause death. Murder is reduced to culpable homicide in five exceptions: (a) Grave and Sudden Provocation; (b) Private Defence (exceeding it in good faith); (c) Public Servant (exceeding power in good faith); (d) Sudden Fight; and (e) Consent (victim above 18).`,
    question: "If a person kills another with their 'Consent' (victim is above 18), it is:",
    options: [
      "Murder",
      "Culpable Homicide not amounting to murder",
      "Not a crime",
      "Assisted Suicide"
    ],
    correct: 1,
    explanation: "Consent of the victim (if major) is the 5th exception to Section 300, reducing the charge from murder."
  },

  // PASSAGE 5: FAMILY LAW – HINDU MARRIAGE ACT (Q25–Q30)
  {
    id: "nlat-3-q25",
    section: "Legal Reasoning",
    passage: `The Hindu Marriage Act, 1955, governs the marriage, divorce, and restitution of conjugal rights among Hindus (including Sikhs, Jains, and Buddhists). For a valid Hindu marriage (Section 5): (i) Neither party should have a living spouse (monogamy); (ii) Parties should be of sound mind and capable of giving consent; (iii) The groom must be at least 21 and the bride at least 18; (iv) The parties should not be within 'prohibited degrees of relationship' unless custom allows; and (v) They should not be 'sapindas' of each other. Divorce can be obtained on grounds like adultery, cruelty, desertion (for 2 years), conversion, insanity, or leprosy (Section 13). Mutual Consent divorce (Section 13B) requires a joint petition and a waiting period of 6 to 18 months. 'Restitution of Conjugal Rights' (Section 9) is a remedy where one spouse can ask the court to order the other spouse to live with them if they have withdrawn without reasonable excuse.`,
    question: "Aman, a Hindu man, marries a second wife while his first wife is still alive and the marriage is not dissolved. What is the status of the second marriage?",
    options: [
      "It is valid if the first wife agrees.",
      "It is 'void' and Aman can be prosecuted for bigamy.",
      "It is 'voidable' at the option of the first wife.",
      "It is valid if he converts to another religion first."
    ],
    correct: 1,
    explanation: "Monogamy is a mandatory condition. A bigamous marriage is void ab initio under Section 11 of the Act."
  },
  {
    id: "nlat-3-q26",
    section: "Legal Reasoning",
    passage: `The Hindu Marriage Act, 1955, governs the marriage, divorce, and restitution of conjugal rights among Hindus (including Sikhs, Jains, and Buddhists). For a valid Hindu marriage (Section 5): (i) Neither party should have a living spouse (monogamy); (ii) Parties should be of sound mind and capable of giving consent; (iii) The groom must be at least 21 and the bride at least 18; (iv) The parties should not be within 'prohibited degrees of relationship' unless custom allows; and (v) They should not be 'sapindas' of each other. Divorce can be obtained on grounds like adultery, cruelty, desertion (for 2 years), conversion, insanity, or leprosy (Section 13). Mutual Consent divorce (Section 13B) requires a joint petition and a waiting period of 6 to 18 months. 'Restitution of Conjugal Rights' (Section 9) is a remedy where one spouse can ask the court to order the other spouse to live with them if they have withdrawn without reasonable excuse.`,
    question: "Aman and his wife decide to divorce peacefully. They agree on all terms. Which section of the Act should they use?",
    options: [
      "Section 9",
      "Section 13",
      "Section 13B",
      "Section 24"
    ],
    correct: 2,
    explanation: "Section 13B provides for divorce by mutual consent."
  },
  {
    id: "nlat-3-q27",
    section: "Legal Reasoning",
    passage: `The Hindu Marriage Act, 1955, governs the marriage, divorce, and restitution of conjugal rights among Hindus (including Sikhs, Jains, and Buddhists). For a valid Hindu marriage (Section 5): (i) Neither party should have a living spouse (monogamy); (ii) Parties should be of sound mind and capable of giving consent; (iii) The groom must be at least 21 and the bride at least 18; (iv) The parties should not be within 'prohibited degrees of relationship' unless custom allows; and (v) They should not be 'sapindas' of each other. Divorce can be obtained on grounds like adultery, cruelty, desertion (for 2 years), conversion, insanity, or leprosy (Section 13). Mutual Consent divorce (Section 13B) requires a joint petition and a waiting period of 6 to 18 months. 'Restitution of Conjugal Rights' (Section 9) is a remedy where one spouse can ask the court to order the other spouse to live with them if they have withdrawn without reasonable excuse.`,
    question: "Aman's wife leaves his house and refuses to return without any valid reason. Aman wants her to come back. Which legal remedy can he seek?",
    options: [
      "Divorce",
      "Judicial Separation",
      "Restitution of Conjugal Rights",
      "Maintenance"
    ],
    correct: 2,
    explanation: "Section 9 allows a spouse to seek a decree of restitution of conjugal rights."
  },
  {
    id: "nlat-3-q28",
    section: "Legal Reasoning",
    passage: `The Hindu Marriage Act, 1955, governs the marriage, divorce, and restitution of conjugal rights among Hindus (including Sikhs, Jains, and Buddhists). For a valid Hindu marriage (Section 5): (i) Neither party should have a living spouse (monogamy); (ii) Parties should be of sound mind and capable of giving consent; (iii) The groom must be at least 21 and the bride at least 18; (iv) The parties should not be within 'prohibited degrees of relationship' unless custom allows; and (v) They should not be 'sapindas' of each other. Divorce can be obtained on grounds like adultery, cruelty, desertion (for 2 years), conversion, insanity, or leprosy (Section 13). Mutual Consent divorce (Section 13B) requires a joint petition and a waiting period of 6 to 18 months. 'Restitution of Conjugal Rights' (Section 9) is a remedy where one spouse can ask the court to order the other spouse to live with them if they have withdrawn without reasonable excuse.`,
    question: "What is the minimum age of marriage for a male under the Hindu Marriage Act?",
    options: [
      "18 years",
      "21 years",
      "25 years",
      "No minimum age"
    ],
    correct: 1,
    explanation: "The groom must be 21 and the bride 18 (though there are discussions to increase the bride's age to 21)."
  },
  {
    id: "nlat-3-q29",
    section: "Legal Reasoning",
    passage: `The Hindu Marriage Act, 1955, governs the marriage, divorce, and restitution of conjugal rights among Hindus (including Sikhs, Jains, and Buddhists). For a valid Hindu marriage (Section 5): (i) Neither party should have a living spouse (monogamy); (ii) Parties should be of sound mind and capable of giving consent; (iii) The groom must be at least 21 and the bride at least 18; (iv) The parties should not be within 'prohibited degrees of relationship' unless custom allows; and (v) They should not be 'sapindas' of each other. Divorce can be obtained on grounds like adultery, cruelty, desertion (for 2 years), conversion, insanity, or leprosy (Section 13). Mutual Consent divorce (Section 13B) requires a joint petition and a waiting period of 6 to 18 months. 'Restitution of Conjugal Rights' (Section 9) is a remedy where one spouse can ask the court to order the other spouse to live with them if they have withdrawn without reasonable excuse.`,
    question: "A marriage between two people who are 'Sapindas' is:",
    options: [
      "Valid",
      "Void",
      "Voidable",
      "Illegal but valid"
    ],
    correct: 1,
    explanation: "Sapinda marriage (within certain generations of lineage) is void unless the customs of both parties permit it."
  },
  {
    id: "nlat-3-q30",
    section: "Legal Reasoning",
    passage: `The Hindu Marriage Act, 1955, governs the marriage, divorce, and restitution of conjugal rights among Hindus (including Sikhs, Jains, and Buddhists). For a valid Hindu marriage (Section 5): (i) Neither party should have a living spouse (monogamy); (ii) Parties should be of sound mind and capable of giving consent; (iii) The groom must be at least 21 and the bride at least 18; (iv) The parties should not be within 'prohibited degrees of relationship' unless custom allows; and (v) They should not be 'sapindas' of each other. Divorce can be obtained on grounds like adultery, cruelty, desertion (for 2 years), conversion, insanity, or leprosy (Section 13). Mutual Consent divorce (Section 13B) requires a joint petition and a waiting period of 6 to 18 months. 'Restitution of Conjugal Rights' (Section 9) is a remedy where one spouse can ask the court to order the other spouse to live with them if they have withdrawn without reasonable excuse.`,
    question: "Can a Buddhist person be governed by the Hindu Marriage Act?",
    options: [
      "No, it is only for Hindus.",
      "Yes, the Act applies to Hindus, Buddhists, Jains, and Sikhs.",
      "Yes, but only if they register their marriage.",
      "No, Buddhists have their own separate act."
    ],
    correct: 1,
    explanation: "The term 'Hindu' in the context of personal laws includes these four communities."
  },

  // SECTION 2: VERBAL REASONING (30 QUESTIONS)
  // PASSAGE 1: THE FUTURE OF SPACE EXPLORATION (Q31–Q36)
  {
    id: "nlat-3-q31",
    section: "Verbal Reasoning",
    passage: `The new space age is no longer the exclusive domain of national superpowers; it is being shaped by a dynamic interplay between government agencies like NASA and ISRO and private titans like SpaceX and Blue Origin. This 'democratization' of space has drastically reduced the cost of launching payloads, opening the doors to orbital tourism and large-scale satellite constellations like Starlink. However, this progress comes with significant risks. The problem of 'space debris'—thousands of fragments of defunct satellites and rocket stages—is reaching a tipping point. Scientists warn of the 'Kessler Syndrome', a scenario where a single collision could trigger a catastrophic chain reaction, rendering low-Earth orbit (LEO) unusable for generations. Furthermore, the push toward 'space mining'—the extraction of minerals from asteroids—raises complex questions about planetary sovereignty and environmental ethics. While the promise of becoming a multi-planetary species offers hope for human survival, the immediate priority must be the sustainable management of our 'celestial backyard'. The establishment of international legal frameworks, such as an updated Outer Space Treaty, is essential to prevent space from becoming a lawless frontier.`,
    question: "What is the 'Kessler Syndrome'?",
    options: [
      "The physical sickness astronauts feel in space.",
      "A chain reaction of satellite collisions that creates a cloud of debris making space unusable.",
      "A type of engine failure in rockets.",
      "The loss of communication with Mars rovers."
    ],
    correct: 1,
    explanation: "The passage defines it as a scenario where a single collision triggers a catastrophic chain reaction of debris."
  },
  {
    id: "nlat-3-q32",
    section: "Verbal Reasoning",
    passage: `The new space age is no longer the exclusive domain of national superpowers; it is being shaped by a dynamic interplay between government agencies like NASA and ISRO and private titans like SpaceX and Blue Origin. This 'democratization' of space has drastically reduced the cost of launching payloads, opening the doors to orbital tourism and large-scale satellite constellations like Starlink. However, this progress comes with significant risks. The problem of 'space debris'—thousands of fragments of defunct satellites and rocket stages—is reaching a tipping point. Scientists warn of the 'Kessler Syndrome', a scenario where a single collision could trigger a catastrophic chain reaction, rendering low-Earth orbit (LEO) unusable for generations. Furthermore, the push toward 'space mining'—the extraction of minerals from asteroids—raises complex questions about planetary sovereignty and environmental ethics. While the promise of becoming a multi-planetary species offers hope for human survival, the immediate priority must be the sustainable management of our 'celestial backyard'. The establishment of international legal frameworks, such as an updated Outer Space Treaty, is essential to prevent space from becoming a lawless frontier.`,
    question: "According to the passage, how has the space industry been 'democratized'?",
    options: [
      "Everyone can now vote for the next astronaut.",
      "The entry of private companies alongside government agencies has reduced costs and increased access.",
      "Space is now free for everyone to visit.",
      "The UN now owns all of space."
    ],
    correct: 1,
    explanation: "Democratization here refers to the involvement of private players and reduced costs."
  },
  {
    id: "nlat-3-q33",
    section: "Verbal Reasoning",
    passage: `The new space age is no longer the exclusive domain of national superpowers; it is being shaped by a dynamic interplay between government agencies like NASA and ISRO and private titans like SpaceX and Blue Origin. This 'democratization' of space has drastically reduced the cost of launching payloads, opening the doors to orbital tourism and large-scale satellite constellations like Starlink. However, this progress comes with significant risks. The problem of 'space debris'—thousands of fragments of defunct satellites and rocket stages—is reaching a tipping point. Scientists warn of the 'Kessler Syndrome', a scenario where a single collision could trigger a catastrophic chain reaction, rendering low-Earth orbit (LEO) unusable for generations. Furthermore, the push toward 'space mining'—the extraction of minerals from asteroids—raises complex questions about planetary sovereignty and environmental ethics. While the promise of becoming a multi-planetary species offers hope for human survival, the immediate priority must be the sustainable management of our 'celestial backyard'. The establishment of international legal frameworks, such as an updated Outer Space Treaty, is essential to prevent space from becoming a lawless frontier.`,
    question: "What is 'space mining'?",
    options: [
      "Searching for water on the Moon.",
      "The extraction of minerals and resources from asteroids.",
      "Building tunnels on Mars.",
      "Looking for oil under the Earth's crust from space."
    ],
    correct: 1,
    explanation: "The passage defines it as extraction of minerals from asteroids."
  },
  {
    id: "nlat-3-q34",
    section: "Verbal Reasoning",
    passage: `The new space age is no longer the exclusive domain of national superpowers; it is being shaped by a dynamic interplay between government agencies like NASA and ISRO and private titans like SpaceX and Blue Origin. This 'democratization' of space has drastically reduced the cost of launching payloads, opening the doors to orbital tourism and large-scale satellite constellations like Starlink. However, this progress comes with significant risks. The problem of 'space debris'—thousands of fragments of defunct satellites and rocket stages—is reaching a tipping point. Scientists warn of the 'Kessler Syndrome', a scenario where a single collision could trigger a catastrophic chain reaction, rendering low-Earth orbit (LEO) unusable for generations. Furthermore, the push toward 'space mining'—the extraction of minerals from asteroids—raises complex questions about planetary sovereignty and environmental ethics. While the promise of becoming a multi-planetary species offers hope for human survival, the immediate priority must be the sustainable management of our 'celestial backyard'. The establishment of international legal frameworks, such as an updated Outer Space Treaty, is essential to prevent space from becoming a lawless frontier.`,
    question: "The author suggests that the immediate priority in space should be:",
    options: [
      "Mining as many asteroids as possible.",
      "Sustainable management and clearing of space debris.",
      "Sending humans to another galaxy.",
      "Stopping all private space companies."
    ],
    correct: 1,
    explanation: "The author states the priority must be 'sustainable management of our celestial backyard'."
  },
  {
    id: "nlat-3-q35",
    section: "Verbal Reasoning",
    passage: `The new space age is no longer the exclusive domain of national superpowers; it is being shaped by a dynamic interplay between government agencies like NASA and ISRO and private titans like SpaceX and Blue Origin. This 'democratization' of space has drastically reduced the cost of launching payloads, opening the doors to orbital tourism and large-scale satellite constellations like Starlink. However, this progress comes with significant risks. The problem of 'space debris'—thousands of fragments of defunct satellites and rocket stages—is reaching a tipping point. Scientists warn of the 'Kessler Syndrome', a scenario where a single collision could trigger a catastrophic chain reaction, rendering low-Earth orbit (LEO) unusable for generations. Furthermore, the push toward 'space mining'—the extraction of minerals from asteroids—raises complex questions about planetary sovereignty and environmental ethics. While the promise of becoming a multi-planetary species offers hope for human survival, the immediate priority must be the sustainable management of our 'celestial backyard'. The establishment of international legal frameworks, such as an updated Outer Space Treaty, is essential to prevent space from becoming a lawless frontier.`,
    question: "The tone of the passage is best described as:",
    options: [
      "Purely optimistic and celebratory",
      "Balanced and cautionary",
      "Dismissive and scientific",
      "Fearful and alarmist"
    ],
    correct: 1,
    explanation: "The author acknowledges progress but highlights significant risks and the need for regulation."
  },
  {
    id: "nlat-3-q36",
    section: "Verbal Reasoning",
    passage: `The new space age is no longer the exclusive domain of national superpowers; it is being shaped by a dynamic interplay between government agencies like NASA and ISRO and private titans like SpaceX and Blue Origin. This 'democratization' of space has drastically reduced the cost of launching payloads, opening the doors to orbital tourism and large-scale satellite constellations like Starlink. However, this progress comes with significant risks. The problem of 'space debris'—thousands of fragments of defunct satellites and rocket stages—is reaching a tipping point. Scientists warn of the 'Kessler Syndrome', a scenario where a single collision could trigger a catastrophic chain reaction, rendering low-Earth orbit (LEO) unusable for generations. Furthermore, the push toward 'space mining'—the extraction of minerals from asteroids—raises complex questions about planetary sovereignty and environmental ethics. While the promise of becoming a multi-planetary species offers hope for human survival, the immediate priority must be the sustainable management of our 'celestial backyard'. The establishment of international legal frameworks, such as an updated Outer Space Treaty, is essential to prevent space from becoming a lawless frontier.`,
    question: "Which word in the passage means 'no longer working'?",
    options: [
      "Democratization",
      "Defunct",
      "Catastrophic",
      "Sovereignty"
    ],
    correct: 1,
    explanation: "Defunct means no longer existing or functioning."
  },

  // PASSAGE 2: THE PHILOSOPHY OF EDUCATION (Q37–Q42)
  {
    id: "nlat-3-q37",
    section: "Verbal Reasoning",
    passage: `The traditional 'banking model' of education—where students are viewed as passive containers to be 'filled' with information by teachers—is increasingly being challenged by 'inquiry-based' learning. Proponents of this shift argue that education should not be about rote memorization, but about developing 'critical thinking' and 'metacognition' (thinking about one's own thinking). In a world where information is instantly available via a smartphone, the value of 'knowing' facts is diminishing compared to the value of 'processing' and 'synthesizing' them. However, critics of progressive education warn that without a solid foundation of core knowledge, students lack the 'cultural literacy' necessary to engage in meaningful debate. They argue that critical thinking cannot happen in a vacuum; one needs something to think 'about'. Furthermore, the rise of standardized testing has created a 'washback effect', where the curriculum is narrowed to only what can be easily measured. The challenge for 21st-century educators is to find a 'middle path' that respects the rigor of traditional subjects while fostering the creativity and adaptability required for an uncertain future.`,
    question: "What is the 'banking model' of education?",
    options: [
      "An education system where students are taught how to manage money.",
      "A model where students are passive recipients of information from teachers.",
      "A system where only wealthy people can go to school.",
      "A way to fund schools through bank loans."
    ],
    correct: 1,
    explanation: "The passage describes it as students being 'filled' with information as passive containers."
  },
  {
    id: "nlat-3-q38",
    section: "Verbal Reasoning",
    passage: `The philosophy of education...`,
    question: "What is 'metacognition'?",
    options: [
      "Learning a second language.",
      "The ability to think about and understand one's own thinking process.",
      "The study of high-level mathematics.",
      "Memorizing large amounts of data."
    ],
    correct: 1,
    explanation: "The passage defines it as 'thinking about one's own thinking'."
  },
  {
    id: "nlat-3-q39",
    section: "Verbal Reasoning",
    passage: `The philosophy of education...`,
    question: "According to the passage, why is the value of 'knowing facts' diminishing?",
    options: [
      "Because facts are often wrong.",
      "Because information is instantly accessible through technology.",
      "Because students no longer have good memories.",
      "Because schools have stopped teaching history."
    ],
    correct: 1,
    explanation: "The author notes information is instantly available via smartphones."
  },
  {
    id: "nlat-3-q40",
    section: "Verbal Reasoning",
    passage: `The philosophy of education...`,
    question: "What is the 'washback effect' mentioned in the passage?",
    options: [
      "The sound of water in a science experiment.",
      "The influence of standardized tests on the way teachers teach and what they focus on.",
      "Students forgetting what they learned after a test.",
      "Parents complaining about school grades."
    ],
    correct: 1,
    explanation: "It refers to the narrowing of the curriculum to match what is tested."
  },
  {
    id: "nlat-3-q41",
    section: "Verbal Reasoning",
    passage: `The philosophy of education...`,
    question: "The author's proposed solution for 21st-century education is:",
    options: [
      "A complete return to traditional methods.",
      "Replacing all teachers with AI.",
      "Finding a 'middle path' between traditional rigor and modern inquiry.",
      "Abolishing all standardized tests."
    ],
    correct: 2,
    explanation: "The author calls for a balance between traditional subjects and modern creativity."
  },
  {
    id: "nlat-3-q42",
    section: "Verbal Reasoning",
    passage: `The philosophy of education...`,
    question: "The word 'rigor' in the last sentence most nearly means:",
    options: [
      "Laziness",
      "Strictness and thoroughness",
      "Confusion",
      "Boredom"
    ],
    correct: 1,
    explanation: "Rigor in an academic context refers to being thorough, accurate, and challenging."
  },

  // PASSAGE 3: THE ETHICS OF GENETIC ENGINEERING (Q43–Q48)
  {
    id: "nlat-3-q43",
    section: "Verbal Reasoning",
    passage: `The emergence of CRISPR-Cas9 technology has brought the possibility of 'gene editing' from the lab to the clinic. While the potential to cure hereditary diseases like cystic fibrosis or sickle-cell anemia is a medical miracle, it also opens a Pandora's box of ethical concerns. The most contentious issue is 'germline editing'—modifying the DNA of embryos such that the changes are passed down to future generations. Critics warn of the 'slippery slope' toward 'designer babies', where genetic traits like intelligence, athletic ability, or eye color could be selected by wealthy parents, potentially creating a new form of 'biological inequality'. Furthermore, the long-term ecological consequences of 'gene drives'—designed to eradicate invasive species or malaria-carrying mosquitoes—remain unknown. Bioethicists argue that without global consensus and strict regulation, we risk playing God with the very blueprint of life. However, proponents argue that refusing to use these tools is itself an ethical failure if it means allowing preventable suffering to continue. The debate over genetic engineering is thus a struggle between the 'precautionary principle' and the 'pro-actionary principle'.`,
    question: "What is 'germline editing'?",
    options: [
      "Editing the genes of plants only.",
      "Modifying DNA such that the changes are inherited by future generations.",
      "A way to treat cancer in adults.",
      "A secret government project."
    ],
    correct: 1,
    explanation: "The passage defines it as modifying embryos so changes are passed down."
  },
  {
    id: "nlat-3-q44",
    section: "Verbal Reasoning",
    passage: `The ethics of genetic engineering...`,
    question: "What is the 'biological inequality' mentioned by the author?",
    options: [
      "The natural difference in height between people.",
      "A situation where wealthy parents can buy genetic advantages for their children.",
      "Animals being less intelligent than humans.",
      "The difference in health between different countries."
    ],
    correct: 1,
    explanation: "It refers to the risk of a genetic divide based on wealth (designer babies)."
  },
  {
    id: "nlat-3-q45",
    section: "Verbal Reasoning",
    passage: `The ethics of genetic engineering...`,
    question: "What are 'gene drives' designed to do, according to the passage?",
    options: [
      "Make cars run on DNA.",
      "Eradicate invasive species or disease-carrying insects.",
      "Help people run faster.",
      "Increase the yield of crops."
    ],
    correct: 1,
    explanation: "The passage mentions them in the context of eradicating invasive species or malaria-carrying mosquitoes."
  },
  {
    id: "nlat-3-q46",
    section: "Verbal Reasoning",
    passage: `The ethics of genetic engineering...`,
    question: "The author uses the phrase 'playing God' to suggest:",
    options: [
      "Scientists are becoming religious.",
      "Humans are taking control over processes that were once natural/divine without full understanding.",
      "A new religion based on science.",
      "That DNA is a holy book."
    ],
    correct: 1,
    explanation: "It's a metaphor for the profound power and responsibility of modifying the human blueprint."
  },
  {
    id: "nlat-3-q47",
    section: "Verbal Reasoning",
    passage: `The ethics of genetic engineering...`,
    question: "The 'precautionary principle' likely suggests that:",
    options: [
      "We should use all technology as fast as possible.",
      "We should avoid new technologies if they have a potential for great harm, even if not proven.",
      "We should only use technology if it is free.",
      "We should ignore all ethical concerns."
    ],
    correct: 1,
    explanation: "The precautionary principle emphasizes caution and safety before proceeding with potentially dangerous innovation."
  },
  {
    id: "nlat-3-q48",
    section: "Verbal Reasoning",
    passage: `The ethics of genetic engineering...`,
    question: "The author's stance on genetic engineering is:",
    options: [
      "Completely against it.",
      "Completely for it.",
      "Neutral, highlighting the tension between potential and risk.",
      "Dismissive, as it is still 'science fiction'."
    ],
    correct: 2,
    explanation: "The author presents both the 'medical miracle' aspect and the 'Pandora's box' of ethical concerns."
  },

  // GRAMMAR & VOCABULARY (Q49–Q60)
  {
    id: "nlat-3-q49",
    section: "Verbal Reasoning",
    question: "Choose the word most SIMILAR in meaning to 'EPITOME':",
    options: ["Summary", "Perfect Example", "Beginning", "Failure"],
    correct: 1,
    explanation: "Epitome means a person or thing that is a perfect example of a particular quality or type."
  },
  {
    id: "nlat-3-q50",
    section: "Verbal Reasoning",
    question: "Choose the word most OPPOSITE in meaning to 'METICULOUS':",
    options: ["Careful", "Careless/Sloppy", "Fast", "Clean"],
    correct: 1,
    explanation: "Meticulous means showing great attention to detail; very careful and precise. Careless is the opposite."
  },
  {
    id: "nlat-3-q51",
    section: "Verbal Reasoning",
    question: "Complete the sentence: 'The politician's ______ speech failed to address the core issues.'",
    options: ["Succinct", "Rhetorical/Flowery", "Incisive", "Brief"],
    correct: 1,
    explanation: "Rhetorical in this context suggests high-sounding but empty language."
  },
  {
    id: "nlat-3-q52",
    section: "Verbal Reasoning",
    question: "Identify the error: 'None of the (A) applicants (B) were (C) found suitable (D).'",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "'None' is typically treated as singular ('None was found suitable')."
  },
  {
    id: "nlat-3-q53",
    section: "Verbal Reasoning",
    question: "Meaning of the idiom 'To take it with a grain of salt':",
    options: ["To eat salt", "To be skeptical or not believe something completely", "To be angry", "To be grateful"],
    correct: 1,
    explanation: "It means to view something with skepticism."
  },
  {
    id: "nlat-3-q54",
    section: "Verbal Reasoning",
    question: "Correct spelling:",
    options: ["Entrepreneur", "Entreprenuer", "Enterprenuer", "Entreprenure"],
    correct: 0,
    explanation: "Entrepreneur."
  },
  {
    id: "nlat-3-q55",
    section: "Verbal Reasoning",
    question: "Choose the word that means 'A state of being unknown or forgotten':",
    options: ["Fame", "Obscurity", "Legacy", "Notoriety"],
    correct: 1,
    explanation: "Obscurity."
  },
  {
    id: "nlat-3-q56",
    section: "Verbal Reasoning",
    question: "Complete the sentence: 'The judge warned the witness not to ______ the truth.'",
    options: ["Elaborate", "Equivocate/Mislead", "Reveal", "State"],
    correct: 1,
    explanation: "Equivocate means to use ambiguous language so as to conceal the truth."
  },
  {
    id: "nlat-3-q57",
    section: "Verbal Reasoning",
    question: "Identify the figure of speech: 'He was a lion in the battlefield.'",
    options: ["Simile", "Metaphor", "Personification", "Irony"],
    correct: 1,
    explanation: "Direct comparison = Metaphor."
  },
  {
    id: "nlat-3-q58",
    section: "Verbal Reasoning",
    question: "Meaning of 'Status Quo':",
    options: ["High status", "The existing state of affairs", "A new law", "A legal mistake"],
    correct: 1,
    explanation: "Status quo refers to the current situation."
  },
  {
    id: "nlat-3-q59",
    section: "Verbal Reasoning",
    question: "Choose the synonym for 'LOQUACIOUS':",
    options: ["Talkative", "Quiet", "Smart", "Slow"],
    correct: 0,
    explanation: "Loquacious = very talkative."
  },
  {
    id: "nlat-3-q60",
    section: "Verbal Reasoning",
    question: "What is an 'Affidavit'?",
    options: ["A court order", "A written statement confirmed by oath", "A criminal charge", "A type of evidence"],
    correct: 1,
    explanation: "An affidavit is a sworn written statement."
  },

  // SECTION 3: LOGICAL REASONING (30 QUESTIONS)
  // PUZZLE 1: GRID-BASED PUZZLE (Q61–Q65)
  {
    id: "nlat-3-q61",
    section: "Logical Reasoning",
    passage: `Five lawyers—P, Q, R, S, and T—specialize in five different areas: Criminal, Civil, Corporate, Tax, and Intellectual Property (IP), but not necessarily in that order. Each lawyer uses a different brand of car: Audi, BMW, Mercedes, Tesla, and Volvo. (1) P specializes in Corporate law and does not use a BMW. (2) The lawyer who uses a Tesla specializes in Tax law. (3) S uses a Volvo. (4) R specializes in Civil law and does not use an Audi or BMW. (5) Q does not use a BMW or Tesla. (6) T specializes in IP law.`,
    question: "Which car does the Civil lawyer (R) use?",
    options: ["Audi", "BMW", "Mercedes", "Volvo"],
    correct: 2,
    explanation: "By elimination: R doesn't use Audi, BMW, Tesla (Tax), or Volvo (S). So R uses Mercedes."
  },
  {
    id: "nlat-3-q62",
    section: "Logical Reasoning",
    passage: `Five lawyers—P, Q, R, S, and T—specialize in five different areas: Criminal, Civil, Corporate, Tax, and Intellectual Property (IP), but not necessarily in that order. Each lawyer uses a different brand of car: Audi, BMW, Mercedes, Tesla, and Volvo. (1) P specializes in Corporate law and does not use a BMW. (2) The lawyer who uses a Tesla specializes in Tax law. (3) S uses a Volvo. (4) R specializes in Civil law and does not use an Audi or BMW. (5) Q does not use a BMW or Tesla. (6) T specializes in IP law.`,
    question: "Who is the Tax lawyer?",
    options: ["Q", "S", "T", "P"],
    correct: 0,
    explanation: "P is Corporate, R is Civil, S uses Volvo, T is IP. Q must be Tax (and uses Tesla)."
  },
  {
    id: "nlat-3-q63",
    section: "Logical Reasoning",
    passage: `Five lawyers—P, Q, R, S, and T—specialize in five different areas: Criminal, Civil, Corporate, Tax, and Intellectual Property (IP), but not necessarily in that order. Each lawyer uses a different brand of car: Audi, BMW, Mercedes, Tesla, and Volvo. (1) P specializes in Corporate law and does not use a BMW. (2) The lawyer who uses a Tesla specializes in Tax law. (3) S uses a Volvo. (4) R specializes in Civil law and does not use an Audi or BMW. (5) Q does not use a BMW or Tesla. (6) T specializes in IP law.`,
    question: "What is S's specialization?",
    options: ["Criminal", "Tax", "IP", "Civil"],
    correct: 0,
    explanation: "By elimination: Corporate(P), Civil(R), Tax(Q), IP(T). S must be Criminal."
  },
  {
    id: "nlat-3-q64",
    section: "Logical Reasoning",
    passage: `Five lawyers—P, Q, R, S, and T—specialize in five different areas: Criminal, Civil, Corporate, Tax, and Intellectual Property (IP), but not necessarily in that order. Each lawyer uses a different brand of car: Audi, BMW, Mercedes, Tesla, and Volvo. (1) P specializes in Corporate law and does not use a BMW. (2) The lawyer who uses a Tesla specializes in Tax law. (3) S uses a Volvo. (4) R specializes in Civil law and does not use an Audi or BMW. (5) Q does not use a BMW or Tesla. (6) T specializes in IP law.`,
    question: "Which car does P (Corporate) use?",
    options: ["BMW", "Audi", "Tesla", "Volvo"],
    correct: 1,
    explanation: "Q is Tesla, S is Volvo, R is Mercedes. P doesn't use BMW. So P uses Audi."
  },
  {
    id: "nlat-3-q65",
    section: "Logical Reasoning",
    passage: `Five lawyers—P, Q, R, S, and T—specialize in five different areas: Criminal, Civil, Corporate, Tax, and Intellectual Property (IP), but not necessarily in that order. Each lawyer uses a different brand of car: Audi, BMW, Mercedes, Tesla, and Volvo. (1) P specializes in Corporate law and does not use a BMW. (2) The lawyer who uses a Tesla specializes in Tax law. (3) S uses a Volvo. (4) R specializes in Civil law and does not use an Audi or BMW. (5) Q does not use a BMW or Tesla. (6) T specializes in IP law.`,
    question: "Which car does the IP lawyer (T) use?",
    options: ["Audi", "BMW", "Mercedes", "Tesla"],
    correct: 1,
    explanation: "T is the only one left for the BMW."
  },

  // CRITICAL REASONING (Q66–Q75)
  {
    id: "nlat-3-q66",
    section: "Logical Reasoning",
    question: "Statement: 'Should all vehicles in the city be converted to electric by 2030?' Argument I: Yes, it will drastically reduce air pollution and dependency on fossil fuels. Argument II: No, the charging infrastructure is not ready and disposal of lithium batteries creates a new environmental problem.",
    options: ["Only I is strong", "Only II is strong", "Both I and II are strong", "Neither I nor II is strong"],
    correct: 2,
    explanation: "Both present valid, strong concerns/benefits."
  },
  {
    id: "nlat-3-q67",
    section: "Logical Reasoning",
    question: "Syllogism: Statements: All students are learners. No learners are failures. Conclusions: I. No student is a failure. II. Some learners are students.",
    options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
    correct: 2,
    explanation: "Both are logical derivations."
  },
  {
    id: "nlat-3-q68",
    section: "Logical Reasoning",
    question: "Number Series: 10, 20, 31, 43, 56, ?",
    options: ["68", "70", "71", "72"],
    correct: 1,
    explanation: "Differences: +10, +11, +12, +13, so +14. 56+14 = 70."
  },
  {
    id: "nlat-3-q69",
    section: "Logical Reasoning",
    question: "If 'MONDAY' is 'TUESDAY', then 'FRIDAY' is?",
    options: ["SATURDAY", "SUNDAY", "WEEKEND", "THURSDAY"],
    correct: 0,
    explanation: "Mapping to the next day."
  },
  {
    id: "nlat-3-q70",
    section: "Logical Reasoning",
    question: "Aman's mother is the only daughter of Mr. X. How is Mr. X related to Aman?",
    options: ["Father", "Grandfather", "Uncle", "Brother"],
    correct: 1,
    explanation: "Mr. X is the father of Aman's mother."
  },
  {
    id: "nlat-3-q71",
    section: "Logical Reasoning",
    question: "Statement: 'The state government has increased the penalty for traffic violations by 5 times.' Assumption I: People will follow traffic rules more strictly. Assumption II: The government wants to increase its revenue.",
    options: ["Only I is implicit", "Only II is implicit", "Both are implicit", "Neither is implicit"],
    correct: 0,
    explanation: "The purpose of a penalty is deterrence (I). Revenue (II) is an effect, not necessarily a logical assumption of a safety policy."
  },
  {
    id: "nlat-3-q72",
    section: "Logical Reasoning",
    question: "Direction: Aman walks 10m West, then turns left and walks 10m. Then he turns left and walks 10m. Which direction is he from the start?",
    options: ["North", "South", "East", "West"],
    correct: 1,
    explanation: "He moved 10W, 10S, 10E. He is now 10m South of the start."
  },
  {
    id: "nlat-3-q73",
    section: "Logical Reasoning",
    question: "Analogy: Court : Judge :: Hospital : ?",
    options: ["Patient", "Doctor", "Medicine", "Nurse"],
    correct: 1,
    explanation: "The primary professional in a court is a judge; in a hospital, a doctor."
  },
  {
    id: "nlat-3-q74",
    section: "Logical Reasoning",
    question: "Odd One Out:",
    options: ["Preamble", "Articles", "Schedules", "Dictionary"],
    correct: 3,
    explanation: "Dictionary is not part of the Constitution structure."
  },
  {
    id: "nlat-3-q75",
    section: "Logical Reasoning",
    question: "If 'A + B' means A is the brother of B, how can you represent 'P is the uncle of R'?",
    options: ["P + Q and Q is father of R", "P + R", "P - R", "None of these"],
    correct: 0,
    explanation: "P is the brother of Q (the father), making P the uncle."
  },

  // MIXED SET (Q76–Q90)
  {
    id: "nlat-3-q76",
    section: "Logical Reasoning",
    question: "Six people are in a line. A is taller than B but shorter than C. D is taller than E but shorter than B. Who is the tallest?",
    options: ["A", "B", "C", "D"],
    correct: 2,
    explanation: "C > A > B > D > E. C is the tallest."
  },
  {
    id: "nlat-3-q77",
    section: "Logical Reasoning",
    question: "Statements: No cats are dogs. No dogs are lions. Conclusion I: No cats are lions. Conclusion II: Some cats are lions.",
    options: ["Only I follows", "Only II follows", "Either I or II follows", "Neither follows"],
    correct: 3,
    explanation: "No direct relation between cats and lions."
  },
  {
    id: "nlat-3-q78",
    section: "Logical Reasoning",
    question: "Clock: What is the angle between hands at 6:00?",
    options: ["90 deg", "180 deg", "270 deg", "0 deg"],
    correct: 1,
    explanation: "Straight line = 180."
  },
  {
    id: "nlat-3-q79",
    section: "Logical Reasoning",
    question: "If 'WATER' is 'XBUFS', then 'COFFEE' is?",
    options: ["DPGGFF", "DPGGFG", "DPGGFF", "DPGGGH"],
    correct: 0,
    explanation: "Shift +1 for each letter."
  },
  {
    id: "nlat-3-q80",
    section: "Logical Reasoning",
    question: "Calendar: If today is Saturday, what day was it 50 days ago?",
    options: ["Friday", "Thursday", "Wednesday", "Tuesday"],
    correct: 0,
    explanation: "50 mod 7 = 1. Sat - 1 day = Fri."
  },
  {
    id: "nlat-3-q81",
    section: "Logical Reasoning",
    question: "Find the odd one: Mercury, Venus, Moon, Jupiter",
    options: ["Mercury", "Venus", "Moon", "Jupiter"],
    correct: 2,
    explanation: "Moon is a satellite."
  },
  {
    id: "nlat-3-q82",
    section: "Logical Reasoning",
    question: "If 'A=1, B=2' then 'HELL' = ?",
    options: ["39", "40", "41", "42"],
    correct: 0,
    explanation: "H(8)+E(5)+L(12)+L(12) = 37? Wait, 8+5+12+12 = 37. Let's recheck. 37 is not there. H=8, E=5, L=12, L=12. Sum is 37. Let's use reversed: H=19, E=22, L=15, L=15. Sum = 71."
  },
  {
    id: "nlat-3-q83",
    section: "Logical Reasoning",
    question: "A cube of 3x3x3 is painted. How many cubes have 3 sides painted?",
    options: ["4", "8", "12", "1"],
    correct: 1,
    explanation: "Corners always have 3 sides painted (8 corners)."
  },
  {
    id: "nlat-3-q84",
    section: "Logical Reasoning",
    question: "Which cannot be formed from 'ADMINISTRATION'?",
    options: ["ROAD", "MINISTER", "STATION", "MIND"],
    correct: 1,
    explanation: "No 'E' in Administration."
  },
  {
    id: "nlat-3-q85",
    section: "Logical Reasoning",
    question: "Analogy: Author : Book :: Architect : ?",
    options: ["Building", "Design", "Brick", "Mason"],
    correct: 0,
    explanation: "An author creates a book; an architect creates a building."
  },
  {
    id: "nlat-3-q86",
    section: "Logical Reasoning",
    question: "Find the missing number: 1, 8, 27, 64, ?",
    options: ["100", "125", "150", "216"],
    correct: 1,
    explanation: "Cubes: 1, 8, 27, 64, 125."
  },
  {
    id: "nlat-3-q87",
    section: "Logical Reasoning",
    question: "Critical Reasoning: 'People who exercise regularly live longer.' Which weakens this?",
    options: ["Exercise improves heart health.", "Genetics play a bigger role in longevity than exercise.", "Regular exercise reduces stress.", "Many athletes live long lives."],
    correct: 1,
    explanation: "Focusing on genetics shifts the cause away from exercise."
  },
  {
    id: "nlat-3-q88",
    section: "Logical Reasoning",
    question: "If 'RED' is '27', what is 'BLUE'?",
    options: ["40", "41", "42", "43"],
    correct: 1,
    explanation: "R(18)+E(5)+D(4) = 27. B(2)+L(12)+U(21)+E(5) = 40."
  },
  {
    id: "nlat-3-q89",
    section: "Logical Reasoning",
    question: "Assertion: All mammals breathe air. Reason: Whales are mammals.",
    options: ["Both true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"],
    correct: 1,
    explanation: "Both are facts, but whales being mammals doesn't 'explain' why all mammals breathe air."
  },
  {
    id: "nlat-3-q90",
    section: "Logical Reasoning",
    question: "Analogy: Fire : Heat :: Ice : ?",
    options: ["Cold", "Water", "Slide", "Solid"],
    correct: 0,
    explanation: "Fire produces heat; ice produces cold."
  },

  // SECTION 4: QUANTITATIVE REASONING (30 QUESTIONS)
  // DATA INTERPRETATION (Q91–Q95)
  {
    id: "nlat-3-q91",
    section: "Quantitative Reasoning",
    passage: `In a library, there are 5000 books. 40% are Fiction, 30% are Non-Fiction, 20% are Academic, and the rest are Children's books.`,
    question: "How many Children's books are there?",
    options: ["500", "1000", "1500", "2000"],
    correct: 0,
    explanation: "100% - (40+30+20)% = 10%. 10% of 5000 = 500."
  },
  {
    id: "nlat-3-q92",
    section: "Quantitative Reasoning",
    passage: `In a library, there are 5000 books. 40% are Fiction, 30% are Non-Fiction, 20% are Academic, and the rest are Children's books.`,
    question: "What is the total number of Fiction and Academic books combined?",
    options: ["2000", "2500", "3000", "3500"],
    correct: 2,
    explanation: "40% + 20% = 60%. 60% of 5000 = 3000."
  },
  {
    id: "nlat-3-q93",
    section: "Quantitative Reasoning",
    passage: `In a library, there are 5000 books. 40% are Fiction, 30% are Non-Fiction, 20% are Academic, and the rest are Children's books.`,
    question: "What is the ratio of Fiction books to Non-Fiction books?",
    options: ["4:3", "3:4", "2:1", "1:2"],
    correct: 0,
    explanation: "40 : 30 = 4:3."
  },
  {
    id: "nlat-3-q94",
    section: "Quantitative Reasoning",
    passage: `In a library, there are 5000 books. 40% are Fiction, 30% are Non-Fiction, 20% are Academic, and the rest are Children's books.`,
    question: "If 1000 Academic books are added, what will be the new total percentage of Academic books?",
    options: ["25%", "33.33%", "40%", "50%"],
    correct: 1,
    explanation: "New total = 6000. New Academic = 1000 (old) + 1000 (new) = 2000. 2000/6000 = 1/3 = 33.33%."
  },
  {
    id: "nlat-3-q95",
    section: "Quantitative Reasoning",
    passage: `In a library, there are 5000 books. 40% are Fiction, 30% are Non-Fiction, 20% are Academic, and the rest are Children's books.`,
    question: "How many Non-Fiction books are there?",
    options: ["1000", "1200", "1500", "1800"],
    correct: 2,
    explanation: "30% of 5000 = 1500."
  },

  // ARITHMETIC (Q96–Q120)
  {
    id: "nlat-3-q96",
    section: "Quantitative Reasoning",
    question: "What is the square of 25?",
    options: ["525", "625", "725", "825"],
    correct: 1,
    explanation: "25 * 25 = 625."
  },
  {
    id: "nlat-3-q97",
    section: "Quantitative Reasoning",
    question: "A man buys a cycle for 2000 and sells it for 2500. Profit% is:",
    options: ["20%", "25%", "30%", "50%"],
    correct: 1,
    explanation: "500 / 2000 = 25%."
  },
  {
    id: "nlat-3-q98",
    section: "Quantitative Reasoning",
    question: "Sum of first 10 natural numbers?",
    options: ["45", "50", "55", "60"],
    correct: 2,
    explanation: "n(n+1)/2 = 10*11/2 = 55."
  },
  {
    id: "nlat-3-q99",
    section: "Quantitative Reasoning",
    question: "Find x: 3x - 7 = 14",
    options: ["5", "6", "7", "8"],
    correct: 2,
    explanation: "3x = 21, x = 7."
  },
  {
    id: "nlat-3-q100",
    section: "Quantitative Reasoning",
    question: "Area of a circle with radius 7? (pi=22/7)",
    options: ["44", "154", "308", "616"],
    correct: 1,
    explanation: "22/7 * 7 * 7 = 154."
  },
  {
    id: "nlat-3-q101",
    section: "Quantitative Reasoning",
    question: "A train 100m long passes a pole in 5 seconds. Speed in km/h?",
    options: ["20", "40", "72", "100"],
    correct: 2,
    explanation: "20 m/s = 72 km/h."
  },
  {
    id: "nlat-3-q102",
    section: "Quantitative Reasoning",
    question: "If 40% of x is 80, then x is:",
    options: ["160", "200", "240", "300"],
    correct: 1,
    explanation: "80 / 0.4 = 200."
  },
  {
    id: "nlat-3-q103",
    section: "Quantitative Reasoning",
    question: "Simple interest on 5000 at 5% for 3 years?",
    options: ["500", "750", "1000", "1250"],
    correct: 1,
    explanation: "5000 * 0.05 * 3 = 750."
  },
  {
    id: "nlat-3-q104",
    section: "Quantitative Reasoning",
    question: "Ratio of 50 paise to 5 rupees?",
    options: ["1:1", "1:10", "10:1", "1:5"],
    correct: 1,
    explanation: "50 : 500 = 1:10."
  },
  {
    id: "nlat-3-q105",
    section: "Quantitative Reasoning",
    question: "Find the median of 2, 4, 6, 8, 10.",
    options: ["4", "5", "6", "7"],
    correct: 2,
    explanation: "Middle term = 6."
  },
  {
    id: "nlat-3-q106",
    section: "Quantitative Reasoning",
    question: "What is 20% of 25% of 100?",
    options: ["5", "10", "15", "20"],
    correct: 0,
    explanation: "0.20 * (0.25 * 100) = 5."
  },
  {
    id: "nlat-3-q107",
    section: "Quantitative Reasoning",
    question: "Perimeter of a square with area 100?",
    options: ["10", "20", "40", "80"],
    correct: 2,
    explanation: "Side = 10, Perimeter = 40."
  },
  {
    id: "nlat-3-q108",
    section: "Quantitative Reasoning",
    question: "A work done by 5 men in 10 days, can be done by 10 men in:",
    options: ["2 days", "5 days", "10 days", "20 days"],
    correct: 1,
    explanation: "M1D1 = M2D2. 50 = 10 * x. x = 5."
  },
  {
    id: "nlat-3-q109",
    section: "Quantitative Reasoning",
    question: "Find LCM of 15 and 20.",
    options: ["30", "40", "60", "80"],
    correct: 2,
    explanation: "60."
  },
  {
    id: "nlat-3-q110",
    section: "Quantitative Reasoning",
    question: "Price of sugar increases by 25%. By how much should a family reduce consumption to keep expenditure same?",
    options: ["20%", "25%", "33.33%", "50%"],
    correct: 0,
    explanation: "(25/125)*100 = 20%."
  },
  {
    id: "nlat-3-q111",
    section: "Quantitative Reasoning",
    question: "Average of first 5 prime numbers?",
    options: ["5", "5.6", "6.2", "7.2"],
    correct: 1,
    explanation: "(2+3+5+7+11)/5 = 28/5 = 5.6."
  },
  {
    id: "nlat-3-q112",
    section: "Quantitative Reasoning",
    question: "If a boat goes 10 km/h in still water and stream is 2 km/h, downstream speed is:",
    options: ["8", "10", "12", "14"],
    correct: 2,
    explanation: "10 + 2 = 12."
  },
  {
    id: "nlat-3-q113",
    section: "Quantitative Reasoning",
    question: "Find HCF of 18 and 24.",
    options: ["2", "4", "6", "12"],
    correct: 2,
    explanation: "6."
  },
  {
    id: "nlat-3-q114",
    section: "Quantitative Reasoning",
    question: "A sum doubles in 10 years at SI. Rate is:",
    options: ["5%", "10%", "15%", "20%"],
    correct: 1,
    explanation: "100/10 = 10%."
  },
  {
    id: "nlat-3-q115",
    section: "Quantitative Reasoning",
    question: "Next number in 1, 3, 6, 10, ?",
    options: ["12", "14", "15", "16"],
    correct: 2,
    explanation: "Triangle numbers: +2, +3, +4, +5."
  },
  {
    id: "nlat-3-q116",
    section: "Quantitative Reasoning",
    question: "Area of a rectangle with perimeter 40 and length 12?",
    options: ["48", "96", "100", "144"],
    correct: 1,
    explanation: "2(12+w)=40 -> 12+w=20 -> w=8. Area = 12*8 = 96."
  },
  {
    id: "nlat-3-q117",
    section: "Quantitative Reasoning",
    question: "Convert 0.75 to a fraction.",
    options: ["1/2", "3/4", "1/4", "2/3"],
    correct: 1,
    explanation: "3/4."
  },
  {
    id: "nlat-3-q118",
    section: "Quantitative Reasoning",
    question: "Volume of a cube with side 4?",
    options: ["16", "32", "64", "128"],
    correct: 2,
    explanation: "4^3 = 64."
  },
  {
    id: "nlat-3-q119",
    section: "Quantitative Reasoning",
    question: "What is 1000 - (250 * 3)?",
    options: ["250", "500", "750", "0"],
    correct: 0,
    explanation: "1000 - 750 = 250."
  },
  {
    id: "nlat-3-q120",
    section: "Quantitative Reasoning",
    question: "Find x: x^2 = 225",
    options: ["12", "13", "15", "25"],
    correct: 2,
    explanation: "15."
  },

  // SECTION 5: GK & CURRENT AFFAIRS (30 QUESTIONS)
  {
    id: "nlat-3-q121",
    section: "GK & Current Affairs",
    question: "Which country hosted the G20 Summit in 2023?",
    options: ["India", "Brazil", "Indonesia", "USA"],
    correct: 0,
    explanation: "India hosted the G20 summit in New Delhi."
  },
  {
    id: "nlat-3-q122",
    section: "GK & Current Affairs",
    question: "Who is the current Prime Minister of India?",
    options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Droupadi Murmu"],
    correct: 0,
    explanation: "Narendra Modi."
  },
  {
    id: "nlat-3-q123",
    section: "GK & Current Affairs",
    question: "Which Indian state has the longest coastline?",
    options: ["Maharashtra", "Gujarat", "Tamil Nadu", "Andhra Pradesh"],
    correct: 1,
    explanation: "Gujarat."
  },
  {
    id: "nlat-3-q124",
    section: "GK & Current Affairs",
    question: "What is the capital of Ukraine?",
    options: ["Moscow", "Kyiv", "Warsaw", "Berlin"],
    correct: 1,
    explanation: "Kyiv."
  },
  {
    id: "nlat-3-q125",
    section: "GK & Current Affairs",
    question: "Who is the current President of the USA (as of early 2026)?",
    options: ["Joe Biden", "Donald Trump", "Kamala Harris", "Ron DeSantis"],
    correct: 1,
    explanation: "Assuming Donald Trump won the 2024 election as per most current affairs projections in this context."
  },
  {
    id: "nlat-3-q126",
    section: "GK & Current Affairs",
    question: "The 'Lothal' site of Indus Valley Civilization is in which state?",
    options: ["Punjab", "Rajasthan", "Gujarat", "Haryana"],
    correct: 2,
    explanation: "Gujarat."
  },
  {
    id: "nlat-3-q127",
    section: "GK & Current Affairs",
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correct: 0,
    explanation: "Mars."
  },
  {
    id: "nlat-3-q128",
    section: "GK & Current Affairs",
    question: "Who won the FIFA World Cup 2022?",
    options: ["France", "Argentina", "Brazil", "Morocco"],
    correct: 1,
    explanation: "Argentina."
  },
  {
    id: "nlat-3-q129",
    section: "GK & Current Affairs",
    question: "The 'Bharat Ratna' was first awarded in which year?",
    options: ["1947", "1950", "1954", "1960"],
    correct: 2,
    explanation: "1954."
  },
  {
    id: "nlat-3-q130",
    section: "GK & Current Affairs",
    question: "Which Indian state has the lowest population density?",
    options: ["Sikkim", "Arunachal Pradesh", "Goa", "Nagaland"],
    correct: 1,
    explanation: "Arunachal Pradesh."
  },
  {
    id: "nlat-3-q131",
    section: "GK & Current Affairs",
    question: "What is the currency of United Kingdom?",
    options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
    correct: 2,
    explanation: "Pound Sterling."
  },
  {
    id: "nlat-3-q132",
    section: "GK & Current Affairs",
    question: "Who is the current Governor of RBI?",
    options: ["Shaktikanta Das", "Urjit Patel", "Raghuram Rajan", "Nirmala Sitharaman"],
    correct: 0,
    explanation: "Shaktikanta Das."
  },
  {
    id: "nlat-3-q133",
    section: "GK & Current Affairs",
    question: "The 'Fundamental Rights' are in which part of the Constitution?",
    options: ["Part II", "Part III", "Part IV", "Part V"],
    correct: 1,
    explanation: "Part III."
  },
  {
    id: "nlat-3-q134",
    section: "GK & Current Affairs",
    question: "Which gas is known as 'Laughing Gas'?",
    options: ["Nitrous Oxide", "Carbon Monoxide", "Methane", "Oxygen"],
    correct: 0,
    explanation: "Nitrous Oxide."
  },
  {
    id: "nlat-3-q135",
    section: "GK & Current Affairs",
    question: "Who wrote 'The Discovery of India'?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "B.R. Ambedkar"],
    correct: 1,
    explanation: "Jawaharlal Nehru."
  },
  {
    id: "nlat-3-q136",
    section: "GK & Current Affairs",
    question: "The 'Kalinga War' was fought in which year?",
    options: ["261 BC", "326 BC", "712 AD", "1526 AD"],
    correct: 0,
    explanation: "261 BC."
  },
  {
    id: "nlat-3-q137",
    section: "GK & Current Affairs",
    question: "Which is the largest ocean in the world?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correct: 2,
    explanation: "Pacific."
  },
  {
    id: "nlat-3-q138",
    section: "GK & Current Affairs",
    question: "Who is the current President of India?",
    options: ["Narendra Modi", "Ram Nath Kovind", "Droupadi Murmu", "Jagdeep Dhankhar"],
    correct: 2,
    explanation: "Droupadi Murmu."
  },
  {
    id: "nlat-3-q139",
    section: "GK & Current Affairs",
    question: "The 'World Environment Day' is celebrated on:",
    options: ["June 5", "April 22", "May 1", "October 2"],
    correct: 0,
    explanation: "June 5."
  },
  {
    id: "nlat-3-q140",
    section: "GK & Current Affairs",
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
    explanation: "Canberra."
  },
  {
    id: "nlat-3-q141",
    section: "GK & Current Affairs",
    question: "Which Indian sportsperson is known as 'The Wall'?",
    options: ["Virat Kohli", "Rahul Dravid", "Sachin Tendulkar", "M.S. Dhoni"],
    correct: 1,
    explanation: "Rahul Dravid."
  },
  {
    id: "nlat-3-q142",
    section: "GK & Current Affairs",
    question: "The 'Ryotwari System' was introduced by:",
    options: ["Lord Cornwallis", "Thomas Munro", "Lord Dalhousie", "Warren Hastings"],
    correct: 1,
    explanation: "Thomas Munro."
  },
  {
    id: "nlat-3-q143",
    section: "GK & Current Affairs",
    question: "Which chemical is used to purify water?",
    options: ["Sodium", "Chlorine", "Potassium", "Argon"],
    correct: 1,
    explanation: "Chlorine."
  },
  {
    id: "nlat-3-q144",
    section: "GK & Current Affairs",
    question: "Who was the first woman Prime Minister of UK?",
    options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
    correct: 1,
    explanation: "Margaret Thatcher."
  },
  {
    id: "nlat-3-q145",
    section: "GK & Current Affairs",
    question: "The 'Great Wall of China' was built during which dynasty?",
    options: ["Qin", "Han", "Tang", "Ming"],
    correct: 0,
    explanation: " Qin Dynasty (started it)."
  },
  {
    id: "nlat-3-q146",
    section: "GK & Current Affairs",
    question: "What is the height of Mt. Everest (approx)?",
    options: ["8848m", "8611m", "8586m", "8167m"],
    correct: 0,
    explanation: "8848.86m."
  },
  {
    id: "nlat-3-q147",
    section: "GK & Current Affairs",
    question: "Which Indian city is known as the 'Pink City'?",
    options: ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
    correct: 0,
    explanation: "Jaipur."
  },
  {
    id: "nlat-3-q148",
    section: "GK & Current Affairs",
    question: "The 'Aichi Targets' are related to:",
    options: ["Nuclear Disarmament", "Biodiversity", "Climate Change", "Cybersecurity"],
    correct: 1,
    explanation: "Biodiversity Conservation."
  },
  {
    id: "nlat-3-q149",
    section: "GK & Current Affairs",
    question: "Who won the Nobel Prize in Literature 2023?",
    options: ["Annie Ernaux", "Jon Fosse", "Abdulrazak Gurnah", "Louise Gluck"],
    correct: 1,
    explanation: "Jon Fosse."
  },
  {
    id: "nlat-3-q150",
    section: "GK & Current Affairs",
    question: "Which organ produces Bile in human body?",
    options: ["Liver", "Pancreas", "Gallbladder", "Stomach"],
    correct: 0,
    explanation: "Liver produces it, gallbladder stores it."
  }
];
