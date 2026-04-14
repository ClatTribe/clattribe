import { WeeklyQuiz } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
//  WEEKLY QUIZ — WEEK 2 | APRIL 8–14, 2026
//  Coverage: Current Affairs, GK & Legal GK
//  Target: CLAT / AILET aspirants (Classes 11–12 + Droppers)
//  Difficulty mix: 10 Easy · 12 Medium · 8 Hard
// ─────────────────────────────────────────────────────────────────────────────

const week02_april2026: WeeklyQuiz = {
  id: 'week02-april-2026',
  title: 'Weekly Quiz \u2014 Week 2: April 8\u201314, 2026',
  description: 'Current affairs, GK, Legal GK & Static GK from April 8\u201314, 2026.',
  dateRange: 'April 8\u201314, 2026',
  year: 2026,
  week: 2,
  questions: [

    // ── Q1 · NATIONAL CURRENT AFFAIRS · Easy ─────────────────────────────────
    {
      id: 'w02-q01',
      category: 'NATIONAL CURRENT AFFAIRS',
      question:
        'India\'s Finance Ministry announced the launch of which digital platform in April 2026 to streamline grievance redressal for taxpayers under the Income Tax Department?',
      options: [
        'e-Nivaran 2.0',
        'CPGRAMS Plus',
        'Tax Saathi Portal',
        'AaykarSetu',
      ],
      correct: 0,
      explanation:
        'The Finance Ministry launched e-Nivaran 2.0 in April 2026, a revamped grievance redressal platform for income tax filers. It integrates AI-based triage to route complaints faster and provides real-time status updates to taxpayers. The upgrade was announced as part of the government\'s push to make tax administration more citizen-friendly ahead of the new Assessment Year.',
      difficulty: 'Easy',
      tags: ['Income Tax', 'e-Nivaran', 'Finance Ministry', 'grievance redressal'],
    },

    // ── Q2 · NATIONAL CURRENT AFFAIRS · Medium ───────────────────────────────
    {
      id: 'w02-q02',
      category: 'NATIONAL CURRENT AFFAIRS',
      question:
        'The Supreme Court of India, in April 2026, delivered a landmark ruling holding that silent protests and sit-ins on public roads cannot be indefinitely prolonged. This ruling cited which earlier judgment as precedent?',
      options: [
        'Ramlila Maidan Incident v. Home Secretary (2012)',
        'Shaheen Bagh v. Amit Sahni (2020)',
        'Mazdoor Kisan Shakti Sangathan v. UoI (2018)',
        'In Re: Destruction of Public & Private Properties (2009)',
      ],
      correct: 1,
      explanation:
        'The Supreme Court relied on the 2020 Shaheen Bagh ruling (Amit Sahni v. Commissioner of Police) which established that the right to protest under Article 19(1)(b) does not extend to occupying public thoroughfares indefinitely, as this imposes an unreasonable restriction on the rights of other citizens. The 2026 ruling reaffirmed this principle and directed authorities to clear prolonged blockages after due notice.',
      difficulty: 'Medium',
      tags: ['Supreme Court', 'right to protest', 'Shaheen Bagh', 'Article 19'],
    },

    // ── Q3 · NATIONAL CURRENT AFFAIRS · Hard ─────────────────────────────────
    {
      id: 'w02-q03',
      category: 'NATIONAL CURRENT AFFAIRS',
      question:
        'In April 2026, the Cabinet approved the National Cooperative Exports Limited (NCEL) being granted "mini-ratna" status. Under DPE guidelines, a Mini-Ratna Category-I CPSE must have made profit in the last three years and have a pre-tax profit of at least how much in one of those three years?',
      options: [
        '\u20b930 crore',
        '\u20b950 crore',
        '\u20b9100 crore',
        '\u20b9200 crore',
      ],
      correct: 2,
      explanation:
        'Under the Department of Public Enterprises (DPE) guidelines, a Mini-Ratna Category-I status is granted to a CPSE that has made profit in the last three consecutive years and earned a pre-tax profit of at least \u20b9100 crore in at least one of those three years. NCEL, set up under the cooperative sector, was granted this status to empower it to expand exports of agricultural and food commodities without requiring government approval for each investment up to specified limits.',
      difficulty: 'Hard',
      tags: ['Mini Ratna', 'NCEL', 'DPE', 'CPSE', 'cooperatives'],
    },

    // ── Q4 · NATIONAL CURRENT AFFAIRS · Easy ─────────────────────────────────
    {
      id: 'w02-q04',
      category: 'NATIONAL CURRENT AFFAIRS',
      question:
        'Which state launched the "Mukhyamantri Bal Seva Yojana 2.0" in April 2026, extending monthly financial assistance to children orphaned due to causes other than COVID-19?',
      options: [
        'Rajasthan',
        'Uttar Pradesh',
        'Madhya Pradesh',
        'Gujarat',
      ],
      correct: 1,
      explanation:
        'Uttar Pradesh launched Mukhyamantri Bal Seva Yojana 2.0 in April 2026, broadening the scope of its earlier COVID-era scheme. The 2.0 version provides \u20b94,000 per month to children who lost both parents due to any cause (accidents, illness, natural disasters), not just COVID-19. It also includes provisions for free education up to Class 12 and priority in government hostels.',
      difficulty: 'Easy',
      tags: ['Uttar Pradesh', 'Mukhyamantri Bal Seva Yojana', 'child welfare', 'orphan'],
    },

    // ── Q5 · INTERNATIONAL CURRENT AFFAIRS · Medium ──────────────────────────
    {
      id: 'w02-q05',
      category: 'INTERNATIONAL CURRENT AFFAIRS',
      question:
        'In April 2026, the International Court of Justice (ICJ) issued provisional measures in a case filed by Nicaragua against Germany, accusing Germany of complicity in genocide by supplying arms to which country?',
      options: [
        'Saudi Arabia',
        'Israel',
        'Ukraine',
        'Myanmar',
      ],
      correct: 1,
      explanation:
        'Nicaragua filed a case at the ICJ against Germany in 2024, alleging that Germany\'s arms exports to Israel amounted to complicity in genocide in Gaza, violating the Genocide Convention. By April 2026, procedural developments on provisional measures continued to be heard. The case is significant as it tests the extraterritorial application of the Genocide Convention to arms-supplying states, alongside the parallel South Africa v. Israel case.',
      difficulty: 'Medium',
      tags: ['ICJ', 'Nicaragua', 'Germany', 'Genocide Convention', 'international law'],
    },

    // ── Q6 · INTERNATIONAL CURRENT AFFAIRS · Easy ────────────────────────────
    {
      id: 'w02-q06',
      category: 'INTERNATIONAL CURRENT AFFAIRS',
      question:
        'Which country assumed the rotating Presidency of the United Nations Security Council for April 2026?',
      options: [
        'France',
        'Japan',
        'Republic of Korea',
        'Slovenia',
      ],
      correct: 3,
      explanation:
        'Slovenia held the rotating presidency of the UN Security Council for April 2026. As a non-permanent member elected for the 2024\u20132025 term, Slovenia chaired Security Council meetings and set the agenda for the month. The rotating presidency cycles through all 15 members (5 permanent + 10 non-permanent) alphabetically in English.',
      difficulty: 'Easy',
      tags: ['UN Security Council', 'Slovenia', 'rotating presidency', 'international organisations'],
    },

    // ── Q7 · INTERNATIONAL CURRENT AFFAIRS · Hard ────────────────────────────
    {
      id: 'w02-q07',
      category: 'INTERNATIONAL CURRENT AFFAIRS',
      question:
        'The "Artemis Accords," to which India acceded in 2023, are administered by which agency and are based on the principles of which foundational space law treaty?',
      options: [
        'UNOOSA; Moon Agreement (1979)',
        'NASA; Outer Space Treaty (1967)',
        'ESA; Liability Convention (1972)',
        'ISRO; Registration Convention (1976)',
      ],
      correct: 1,
      explanation:
        'The Artemis Accords are a set of bilateral agreements administered by NASA (on behalf of the US government) for peaceful, sustainable, and transparent lunar and deep-space exploration. They are explicitly grounded in the principles of the 1967 Outer Space Treaty (OST), including peaceful purposes, transparency, interoperability, and release of scientific data. India signed the Accords in June 2023 during PM Modi\'s US visit.',
      difficulty: 'Hard',
      tags: ['Artemis Accords', 'NASA', 'Outer Space Treaty', 'space law', 'India-US'],
    },

    // ── Q8 · NATIONAL CURRENT AFFAIRS · Medium ───────────────────────────────
    {
      id: 'w02-q08',
      category: 'NATIONAL CURRENT AFFAIRS',
      question:
        'The National Green Tribunal (NGT) in April 2026 directed the Central Pollution Control Board (CPCB) to submit an action-taken report on violations of which standard by municipal solid waste processing plants across India?',
      options: [
        'Solid Waste Management Rules, 2016',
        'Hazardous and Other Wastes Rules, 2016',
        'E-Waste Management Rules, 2022',
        'Bio-Medical Waste Management Rules, 2016',
      ],
      correct: 0,
      explanation:
        'The NGT directed the CPCB to report compliance with the Solid Waste Management (SWM) Rules, 2016, after noting widespread violations by urban local bodies and waste-processing plants. Key issues included non-segregation at source, illegal dumpsites, and non-processing of wet waste. The SWM Rules 2016 mandate segregation at source into wet, dry, and domestic hazardous waste and prescribe timelines for cities to achieve zero-landfill targets.',
      difficulty: 'Medium',
      tags: ['NGT', 'CPCB', 'Solid Waste Management Rules', 'environment', 'pollution'],
    },

    // ── Q9 · LEGAL GK · Medium ───────────────────────────────────────────────
    {
      id: 'w02-q09',
      category: 'LEGAL GK',
      question:
        'The Bharatiya Nyaya Sanhita (BNS), 2023, which replaced the Indian Penal Code, was enforced from which date?',
      options: [
        '1 January 2024',
        '1 April 2024',
        '1 July 2024',
        '26 January 2025',
      ],
      correct: 2,
      explanation:
        'The Bharatiya Nyaya Sanhita (BNS), 2023 — along with the Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Sakshya Adhiniyam (BSA) — came into force on 1 July 2024, replacing the Indian Penal Code (1860), the Code of Criminal Procedure (1973), and the Indian Evidence Act (1872) respectively. This was the most comprehensive overhaul of India\'s criminal justice framework since independence.',
      difficulty: 'Medium',
      tags: ['BNS', 'Bharatiya Nyaya Sanhita', 'IPC replacement', 'criminal law reform'],
    },

    // ── Q10 · LEGAL GK · Hard ────────────────────────────────────────────────
    {
      id: 'w02-q10',
      category: 'LEGAL GK',
      question:
        'Under the Bharatiya Nyaya Sanhita (BNS), 2023, the offence of "sedition" as it existed in Section 124A of the IPC has been:',
      options: [
        'Retained with the same punishment',
        'Renamed "acts endangering sovereignty" with a higher punishment of life imprisonment',
        'Completely removed with no equivalent provision',
        'Replaced by two separate offences — one for armed rebellion and one for secession',
      ],
      correct: 1,
      explanation:
        'The BNS does not retain "sedition" by name but introduces Section 152, titled "Act endangering sovereignty, unity and integrity of India," which criminalises armed rebellion, subversive activities, or separatism encouraged by words, signs, or conduct. The maximum punishment is life imprisonment, higher than the original Section 124A (which had a maximum of life imprisonment but was rarely invoked at that level). Critics note that while the colonial label is gone, the substantive offence has arguably been widened.',
      difficulty: 'Hard',
      tags: ['BNS', 'sedition', 'Section 152', 'sovereignty', 'criminal law'],
    },

    // ── Q11 · LEGAL GK · Easy ────────────────────────────────────────────────
    {
      id: 'w02-q11',
      category: 'LEGAL GK',
      question:
        'Which Article of the Indian Constitution grants the Supreme Court original jurisdiction in disputes between states or between states and the Union?',
      options: [
        'Article 131',
        'Article 136',
        'Article 141',
        'Article 143',
      ],
      correct: 0,
      explanation:
        'Article 131 grants the Supreme Court exclusive original jurisdiction in disputes (i) between the Government of India and one or more states, (ii) between two or more states. "Original" means the Supreme Court hears the matter at first instance, not as an appeal. This differs from Article 136 (special leave petitions / appellate jurisdiction) and Article 143 (advisory jurisdiction).',
      difficulty: 'Easy',
      tags: ['Article 131', 'Supreme Court', 'original jurisdiction', 'Constitution'],
    },

    // ── Q12 · STATIC GK · Easy ───────────────────────────────────────────────
    {
      id: 'w02-q12',
      category: 'STATIC GK',
      question:
        'The "Doctrine of Basic Structure," which holds that Parliament cannot amend the Constitution to destroy its basic features, was established by the Supreme Court in which landmark case?',
      options: [
        'Golak Nath v. State of Punjab (1967)',
        'Kesavananda Bharati v. State of Kerala (1973)',
        'Minerva Mills v. Union of India (1980)',
        'Indira Gandhi v. Raj Narain (1975)',
      ],
      correct: 1,
      explanation:
        'The Basic Structure doctrine was established in Kesavananda Bharati v. State of Kerala (1973) by a 13-judge bench in a 7:6 majority. The Court held that while Parliament has wide amending powers under Article 368, it cannot alter the "basic structure" or "essential features" of the Constitution. Features identified as basic structure include supremacy of the Constitution, rule of law, judicial review, federalism, democracy, and secularism.',
      difficulty: 'Easy',
      tags: ['Basic Structure doctrine', 'Kesavananda Bharati', 'Article 368', 'constitutional law'],
    },

    // ── Q13 · STATIC GK · Medium ─────────────────────────────────────────────
    {
      id: 'w02-q13',
      category: 'STATIC GK',
      question:
        'The Pradhan Mantri MUDRA Yojana (PMMY) classifies loans into three categories. Which of the following correctly matches the category with its loan limit?',
      options: [
        'Shishu: up to \u20b950,000 | Kishore: \u20b950,001\u20135 lakh | Tarun: \u20b95\u201310 lakh',
        'Shishu: up to \u20b91 lakh | Kishore: \u20b91\u20135 lakh | Tarun: \u20b95\u201320 lakh',
        'Shishu: up to \u20b950,000 | Kishore: \u20b950,001\u20135 lakh | Tarun: \u20b95\u201320 lakh',
        'Shishu: up to \u20b925,000 | Kishore: \u20b925,001\u20132 lakh | Tarun: \u20b92\u201310 lakh',
      ],
      correct: 2,
      explanation:
        'PMMY classifies micro-enterprise loans into Shishu (up to \u20b950,000), Kishore (\u20b950,001 to \u20b95 lakh), and Tarun (\u20b95 lakh to \u20b920 lakh). In 2024, the government raised the Tarun limit from \u20b910 lakh to \u20b920 lakh to cover growing micro-enterprises. Loans under PMMY are collateral-free and provided through scheduled commercial banks, RRBs, MFIs, and NBFCs.',
      difficulty: 'Medium',
      tags: ['PMMY', 'MUDRA', 'Shishu Kishore Tarun', 'financial inclusion'],
    },

    // ── Q14 · NATIONAL CURRENT AFFAIRS · Medium ──────────────────────────────
    {
      id: 'w02-q14',
      category: 'NATIONAL CURRENT AFFAIRS',
      question:
        'India\'s first indigenously developed Quantum Computing system, demonstrated at IIT Delhi in April 2026, operates using which physical principle for qubits?',
      options: [
        'Trapped ion technology',
        'Superconducting Josephson junctions',
        'Photonic waveguides',
        'Topological qubits',
      ],
      correct: 1,
      explanation:
        'IIT Delhi\'s prototype quantum computer uses superconducting Josephson junctions as the basis for qubits — the same approach used by IBM and Google. In this design, superconducting circuits cooled to near absolute zero (milli-Kelvin temperatures) behave as quantum two-state systems. The National Quantum Mission (NQM), launched in 2023 with \u20b96,003 crore outlay, targets 50\u2013100 qubit systems by 2026 and 1000+ qubit systems by 2031.',
      difficulty: 'Medium',
      tags: ['quantum computing', 'IIT Delhi', 'National Quantum Mission', 'superconducting qubits'],
    },

    // ── Q15 · INTERNATIONAL CURRENT AFFAIRS · Medium ─────────────────────────
    {
      id: 'w02-q15',
      category: 'INTERNATIONAL CURRENT AFFAIRS',
      question:
        'The "Comprehensive and Progressive Agreement for Trans-Pacific Partnership" (CPTPP) is a trade bloc. Which of the following major economies is NOT a member of CPTPP as of April 2026?',
      options: [
        'Canada',
        'United Kingdom',
        'China',
        'Vietnam',
      ],
      correct: 2,
      explanation:
        'China is not a member of the CPTPP as of April 2026, though it applied for membership in 2021. The CPTPP (formerly TPP, before the US withdrew in 2017) includes Australia, Brunei, Canada, Chile, Japan, Malaysia, Mexico, New Zealand, Peru, Singapore, Vietnam, and — following its ratification in 2023 — the United Kingdom. China\'s application requires consensus from all existing members, which has not been achieved.',
      difficulty: 'Medium',
      tags: ['CPTPP', 'trade bloc', 'China', 'UK', 'international trade'],
    },

    // ── Q16 · NATIONAL CURRENT AFFAIRS · Hard ────────────────────────────────
    {
      id: 'w02-q16',
      category: 'NATIONAL CURRENT AFFAIRS',
      question:
        'In April 2026, the RBI released its Annual Report noting that India\'s Gross NPA ratio of scheduled commercial banks fell to a multi-year low. Under RBI\'s prudential norms, an asset is classified as a "Non-Performing Asset" if interest or principal remains overdue for how many days?',
      options: [
        '30 days',
        '60 days',
        '90 days',
        '180 days',
      ],
      correct: 2,
      explanation:
        'Under RBI\'s Income Recognition and Asset Classification (IRAC) norms, a loan is classified as a Non-Performing Asset (NPA) if interest or principal payment remains overdue for more than 90 days. For agriculture loans, the threshold is one or two crop seasons (depending on the crop duration). NPAs are further categorised as Sub-Standard (up to 12 months as NPA), Doubtful (12+ months), and Loss assets. India\'s Gross NPA ratio fell from a peak of ~11.5% (2018) to below 3% by early 2026.',
      difficulty: 'Hard',
      tags: ['RBI', 'NPA', 'IRAC norms', 'banking', 'non-performing assets'],
    },

    // ── Q17 · IMPORTANT DAYS · Easy ──────────────────────────────────────────
    {
      id: 'w02-q17',
      category: 'IMPORTANT DAYS',
      question:
        'World Homeopathy Day is observed every year on 10 April to commemorate the birth anniversary of which founder of homeopathy?',
      options: [
        'Samuel Hahnemann',
        'James Tyler Kent',
        'Constantine Hering',
        'Christian Friedrich Samuel',
      ],
      correct: 0,
      explanation:
        'World Homeopathy Day is observed on 10 April to mark the birthday of Dr. Samuel Hahnemann (1755\u20131843), a German physician who founded homeopathy. His seminal work, "Organon of Medicine" (1810), laid the philosophical and practical basis of homeopathic treatment. In India, the Ministry of AYUSH organises events on this day to promote homeopathy as part of the country\'s traditional medicine systems.',
      difficulty: 'Easy',
      tags: ['World Homeopathy Day', 'Samuel Hahnemann', 'AYUSH', 'important days'],
    },

    // ── Q18 · IMPORTANT DAYS · Easy ──────────────────────────────────────────
    {
      id: 'w02-q18',
      category: 'IMPORTANT DAYS',
      question:
        'World Health Day is observed every year on 7 April. The theme for World Health Day 2026 was:',
      options: [
        '"Our Planet, Our Health"',
        '"Universal Health Coverage: Leaving No One Behind"',
        '"Healthy Beginnings, Hopeful Futures"',
        '"Health for All: Time to Deliver"',
      ],
      correct: 2,
      explanation:
        'The theme for World Health Day 2026 (observed on 7 April) was "Healthy Beginnings, Hopeful Futures," focusing on maternal and newborn health and reducing preventable deaths during pregnancy and childbirth. WHO used the occasion to call attention to the global target of reducing maternal mortality to fewer than 70 per 100,000 live births by 2030, as part of SDG 3.',
      difficulty: 'Easy',
      tags: ['World Health Day', 'WHO', '7 April', 'maternal health'],
    },

    // ── Q19 · STATIC GK · Medium ─────────────────────────────────────────────
    {
      id: 'w02-q19',
      category: 'STATIC GK',
      question:
        'The "Marginal Standing Facility" (MSF) rate at which scheduled commercial banks can borrow overnight funds from the RBI is typically fixed at what spread above the repo rate?',
      options: [
        '0.10%',
        '0.25%',
        '0.50%',
        '1.00%',
      ],
      correct: 1,
      explanation:
        'The Marginal Standing Facility (MSF) rate is set 25 basis points (0.25%) above the repo rate. It allows scheduled commercial banks to borrow up to 1% of their Net Demand and Time Liabilities (NDTL) overnight from the RBI against eligible government securities, even when they have no excess SLR securities. MSF acts as the ceiling of the LAF (Liquidity Adjustment Facility) corridor, while the reverse repo rate (now the Standing Deposit Facility or SDF rate) acts as the floor.',
      difficulty: 'Medium',
      tags: ['MSF', 'RBI', 'monetary policy', 'LAF corridor', 'repo rate'],
    },

    // ── Q20 · LEGAL GK · Hard ────────────────────────────────────────────────
    {
      id: 'w02-q20',
      category: 'LEGAL GK',
      question:
        'In April 2026, the Supreme Court reiterated that "bail is the rule, jail is the exception." This principle flows from which constitutional provision and landmark judgment?',
      options: [
        'Article 20(3); Maneka Gandhi v. Union of India (1978)',
        'Article 21; Sanjay Chandra v. CBI (2011)',
        'Article 22(2); Hussainara Khatoon v. State of Bihar (1979)',
        'Article 14; Arnab Goswami v. State of Maharashtra (2020)',
      ],
      correct: 1,
      explanation:
        'The principle "bail is the rule, jail is the exception" is rooted in Article 21 (right to life and personal liberty) and was articulated in Sanjay Chandra v. CBI (2011), where the Supreme Court held that liberty should not be curtailed pending trial unless there are compelling reasons such as flight risk, tampering with evidence, or threat to witnesses. The Court emphasised that pre-trial detention is punitive and violates the presumption of innocence.',
      difficulty: 'Hard',
      tags: ['bail', 'Article 21', 'Sanjay Chandra', 'personal liberty', 'criminal procedure'],
    },

    // ── Q21 · NATIONAL CURRENT AFFAIRS · Easy ────────────────────────────────
    {
      id: 'w02-q21',
      category: 'NATIONAL CURRENT AFFAIRS',
      question:
        'Which ministry launched the "PM Vishwakarma Skill Development Scheme 2.0" in April 2026, expanding the artisan support programme to cover more traditional craft categories?',
      options: [
        'Ministry of Skill Development & Entrepreneurship',
        'Ministry of Micro, Small and Medium Enterprises',
        'Ministry of Textiles',
        'Ministry of Labour & Employment',
      ],
      correct: 1,
      explanation:
        'PM Vishwakarma is a Central Sector Scheme under the Ministry of Micro, Small and Medium Enterprises (MoMSME) launched on 17 September 2023. The 2.0 expansion in April 2026 added more craft categories and increased the collateral-free loan limit under the scheme. The scheme targets traditional artisans and craftspeople from 18 specified trades, offering recognition, skill training, modern tools, and credit support.',
      difficulty: 'Easy',
      tags: ['PM Vishwakarma', 'MSME', 'artisan', 'skill development'],
    },

    // ── Q22 · INTERNATIONAL CURRENT AFFAIRS · Hard ───────────────────────────
    {
      id: 'w02-q22',
      category: 'INTERNATIONAL CURRENT AFFAIRS',
      question:
        'The "Budapest Convention on Cybercrime," to which India has not yet formally acceded, was adopted by the Council of Europe. What is the primary legal significance of this convention for non-member states of the Council of Europe?',
      options: [
        'Non-members cannot be signatories under any circumstances',
        'Non-members may be invited to accede under Article 37, making it a global treaty framework',
        'Non-members can only observe proceedings but not receive mutual legal assistance',
        'Non-members must ratify all Council of Europe conventions before acceding to Budapest',
      ],
      correct: 1,
      explanation:
        'The Budapest Convention (2001) allows non-Council of Europe member states to accede under its Article 37 (open to non-members upon invitation). Countries like the US, Japan, and Australia have acceded. India has not, citing sovereignty concerns over data localisation requirements and extraterritorial provisions. The Convention establishes a framework for mutual legal assistance, extradition, and the criminalisation of cybercrimes like hacking, child pornography online, and cyber fraud across borders.',
      difficulty: 'Hard',
      tags: ['Budapest Convention', 'cybercrime', 'Council of Europe', 'India cyber law', 'Article 37'],
    },

    // ── Q23 · STATIC GK · Medium ─────────────────────────────────────────────
    {
      id: 'w02-q23',
      category: 'STATIC GK',
      question:
        'The "Palk Strait" separates India from Sri Lanka. On the Indian side, it is bounded by which two bodies of water?',
      options: [
        'Arabian Sea and Lakshadweep Sea',
        'Bay of Bengal and Gulf of Mannar',
        'Indian Ocean and Gulf of Khambhat',
        'Bay of Bengal and Arabian Sea',
      ],
      correct: 1,
      explanation:
        'The Palk Strait is a narrow channel between the southeastern coast of India (Tamil Nadu) and the northern tip of Sri Lanka. It connects the Bay of Bengal to the north with the Gulf of Mannar to the south. The Adam\'s Bridge (Ram Setu) \u2014 a chain of limestone shoals \u2014 partially separates the Palk Strait from the Gulf of Mannar. The strait is important for fisheries and was the subject of the Katchatheevu Island agreement (1974).',
      difficulty: 'Medium',
      tags: ['Palk Strait', 'Bay of Bengal', 'Gulf of Mannar', 'geography', 'India-Sri Lanka'],
    },

    // ── Q24 · NATIONAL CURRENT AFFAIRS · Medium ──────────────────────────────
    {
      id: 'w02-q24',
      category: 'NATIONAL CURRENT AFFAIRS',
      question:
        'India\'s Defence Acquisition Council (DAC) cleared a major procurement of Light Combat Helicopters (LCH) "Prachand" in April 2026. The LCH Prachand is manufactured by which entity and is notable for being the world\'s lightest attack helicopter capable of operating at high altitude?',
      options: [
        'DRDO, Hyderabad',
        'Hindustan Aeronautics Limited (HAL), Bengaluru',
        'Bharat Electronics Limited (BEL)',
        'Indian Space Research Organisation (ISRO)',
      ],
      correct: 1,
      explanation:
        'The Light Combat Helicopter (LCH) "Prachand" is designed and manufactured by Hindustan Aeronautics Limited (HAL) in Bengaluru. It is a multi-role combat helicopter capable of operating at altitudes up to 6,500 metres (above sea level), making it ideal for operations in the Himalayas. Prachand was inducted into both the Indian Army and Indian Air Force. It is equipped with a 20mm turret gun, air-to-air missiles (Mistral-2), and rocket pods.',
      difficulty: 'Medium',
      tags: ['LCH Prachand', 'HAL', 'defence', 'helicopter', 'DAC'],
    },

    // ── Q25 · LEGAL GK · Medium ──────────────────────────────────────────────
    {
      id: 'w02-q25',
      category: 'LEGAL GK',
      question:
        'Under the Protection of Children from Sexual Offences (POCSO) Act, 2012, a "child" is defined as any person below the age of:',
      options: [
        '14 years',
        '16 years',
        '18 years',
        '21 years',
      ],
      correct: 2,
      explanation:
        'Under Section 2(d) of the POCSO Act, 2012, a "child" means any person below the age of 18 years. The Act provides for protection of children from offences of sexual assault, sexual harassment, and pornography, and establishes Special Courts for the trial of such offences. The 2019 amendment introduced the death penalty as an option for aggravated penetrative sexual assault on a child below 16 years.',
      difficulty: 'Medium',
      tags: ['POCSO', 'child protection', 'sexual offences', 'definition of child'],
    },

    // ── Q26 · STATIC GK · Hard ───────────────────────────────────────────────
    {
      id: 'w02-q26',
      category: 'STATIC GK',
      question:
        'The "Doctrine of Promissory Estoppel" in Indian contract and administrative law prevents the government from going back on a promise if a party has acted upon it to its detriment. In which case did the Supreme Court first apply this doctrine against the government?',
      options: [
        'Central London Property Trust Ltd. v. High Trees House Ltd. (1947)',
        'Union of India v. Anglo-Afghan Agencies (1968)',
        'Motilal Padampat Sugar Mills v. State of UP (1979)',
        'M.C. Mehta v. Union of India (1987)',
      ],
      correct: 1,
      explanation:
        'In Union of India v. Anglo-Afghan Agencies (1968), the Supreme Court of India first applied the doctrine of promissory estoppel against the government, holding that the government could not resile from a promise to give full import entitlements when the party had acted upon that promise. The doctrine was further consolidated in Motilal Padampat Sugar Mills v. State of UP (1979), where the Court held promissory estoppel applicable against the State even without consideration, based on equity.',
      difficulty: 'Hard',
      tags: ['promissory estoppel', 'administrative law', 'Anglo-Afghan Agencies', 'contract law', 'government liability'],
    },

    // ── Q27 · NATIONAL CURRENT AFFAIRS · Medium ──────────────────────────────
    {
      id: 'w02-q27',
      category: 'NATIONAL CURRENT AFFAIRS',
      question:
        'The "One Nation One Subscription" (ONOS) scheme, launched by the Government of India, provides free access to research journals to which category of institutions?',
      options: [
        'Only central government ministries and departments',
        'All higher education institutions and research bodies funded by the central government',
        'All schools from Classes 6\u201312 across India',
        'Private universities and deemed universities only',
      ],
      correct: 1,
      explanation:
        'The ONOS scheme, launched in January 2025 under the Department of Science & Technology, provides free access to 13,000+ international research journals to over 6,300 government-funded higher education institutions and research bodies, including IITs, IISc, NITs, and central universities. It replaced the fragmented individual subscription model, saving significant costs and democratising access to cutting-edge research for faculty and students across India.',
      difficulty: 'Medium',
      tags: ['ONOS', 'One Nation One Subscription', 'research journals', 'higher education', 'DST'],
    },

    // ── Q28 · INTERNATIONAL CURRENT AFFAIRS · Easy ───────────────────────────
    {
      id: 'w02-q28',
      category: 'INTERNATIONAL CURRENT AFFAIRS',
      question:
        'In April 2026, which country successfully conducted the first test of its "Harop-2" loitering munition (kamikaze drone), reported to have a range of over 1,000 km?',
      options: [
        'Turkey',
        'Iran',
        'Israel',
        'South Korea',
      ],
      correct: 2,
      explanation:
        'Israel\'s Israel Aerospace Industries (IAI) conducted tests of the Harop-2, an advanced version of the Harop loitering munition (also known as a "suicide drone" or "kamikaze drone"). The Harop-2 is designed to autonomously detect, track, and destroy radar and air-defence systems. India is one of the major export customers for the original Harop system and has used it operationally. Loitering munitions became strategically prominent in the Russia-Ukraine conflict.',
      difficulty: 'Easy',
      tags: ['Harop-2', 'Israel', 'loitering munition', 'drone', 'defence technology'],
    },

    // ── Q29 · LEGAL GK · Easy ────────────────────────────────────────────────
    {
      id: 'w02-q29',
      category: 'LEGAL GK',
      question:
        'A Public Interest Litigation (PIL) can be filed in India by:',
      options: [
        'Only the affected party who has suffered a legal injury',
        'Any citizen or organisation acting in the public interest, even without personal injury',
        'Only the Attorney General or Solicitor General on behalf of the public',
        'Only registered NGOs with at least five years of existence',
      ],
      correct: 1,
      explanation:
        'A PIL can be filed by any citizen or organisation acting bona fide in the public interest, even if they have not suffered a direct personal injury. The concept was developed by Justice P.N. Bhagwati and Justice V.R. Krishna Iyer in the late 1970s\u20131980s to make justice accessible to the poor and marginalised. PILs have been instrumental in cases involving bonded labour, prison conditions, environmental protection, and electoral reforms in India.',
      difficulty: 'Easy',
      tags: ['PIL', 'Public Interest Litigation', 'locus standi', 'judicial activism'],
    },

    // ── Q30 · STATIC GK · Hard ───────────────────────────────────────────────
    {
      id: 'w02-q30',
      category: 'STATIC GK',
      question:
        'The "Directive Principles of State Policy" (DPSPs) in Part IV of the Constitution are characterised by which of the following in terms of judicial enforceability and constitutional relationship with Fundamental Rights?',
      options: [
        'DPSPs are fully justiciable and override Fundamental Rights in case of conflict',
        'DPSPs are non-justiciable but the State must try to apply them; post-42nd Amendment, they cannot be used to abridge Fundamental Rights under Articles 14 and 19',
        'DPSPs are non-justiciable guidelines; but courts have read DPSPs as supplementing and harmonising with Fundamental Rights rather than conflicting, and laws implementing DPSPs get some protection even against FR challenges',
        'DPSPs are justiciable only in the High Courts under Article 226, not the Supreme Court',
      ],
      correct: 2,
      explanation:
        'Under Article 37, DPSPs are "fundamental in the governance of the country" but are non-justiciable (cannot be enforced by courts). The correct characterisation, post-Minerva Mills (1980) and the harmonisation doctrine from State of Kerala v. NM Thomas, is that DPSPs and Fundamental Rights must be read harmoniously. The 42nd Amendment (1976) had tried to give DPSPs primacy over Articles 14, 19, and 31C, but Minerva Mills struck down those provisions as violating the Basic Structure. Laws implementing DPSPs get Article 31C protection against Articles 14/19 only for specified DPSPs, not all.',
      difficulty: 'Hard',
      tags: ['DPSP', 'Directive Principles', 'Article 37', 'justiciability', 'Minerva Mills', 'Fundamental Rights'],
    },

  ],
};

export default week02_april2026;
