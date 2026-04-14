import { WeeklyQuiz } from '../types';

// ─────────────────────────────────────────────────────────────
//  WEEKLY QUIZ — WEEK 1 | APRIL 1–7, 2026
//  Coverage: Current Affairs, GK & Legal GK
//  Target: CLAT, AILET, NLAT & other law entrance exams
// ─────────────────────────────────────────────────────────────

const week01: WeeklyQuiz = {
  id: 'wq-2026-04-w1',
  title: 'Weekly Quiz — Week 1: April 1–7, 2026',
  description:
    'Current affairs, GK, Legal GK and Important Days from the first week of April 2026. Covers national & international events relevant for CLAT, AILET, NLAT and other law entrance exams.',
  week: 1,
  month: 'April',
  year: 2026,
  dateRange: 'April 1–7, 2026',
  totalQuestions: 30,
  questions: [

    // ─── NATIONAL CURRENT AFFAIRS (Q1–Q10) ───────────────────

    {
      id: 1,
      category: 'current_affairs_national',
      question_text:
        'Which new fuel policy came into effect with a nationwide rollout on April 1, 2026, as part of India\'s National Biofuel Policy?',
      options: [
        'E10 ethanol-blended petrol',
        'E20 ethanol-blended petrol',
        'E30 methanol-blended diesel',
        'Compressed Biogas (CBG) mandate',
      ],
      correct: 1,
      explanation:
        'E20 fuel — a blend of 20% ethanol and 80% petrol — was rolled out nationwide from April 1, 2026. This initiative is part of India\'s National Biofuel Policy 2018, aimed at reducing crude-oil import dependence, boosting farm income through sugarcane and grain-based ethanol, and cutting vehicular carbon emissions.',
      difficulty: 'Easy',
      tags: ['E20', 'ethanol blending', 'biofuel', 'energy'],
    },

    {
      id: 2,
      category: 'current_affairs_national',
      question_text:
        'The Jan Vishwas (Amendment of Provisions) Bill, 2026, passed on April 2, 2026, amended how many legal provisions across various Acts to decriminalise minor offences and boost ease of doing business?',
      options: ['484', '584', '784', '884'],
      correct: 2,
      explanation:
        'The Jan Vishwas Amendment Bill 2026, passed on April 2, 2026, amended 784 legal provisions spread across multiple central Acts, converting minor/technical violations from criminal offences to civil penalties. The objective is to reduce unnecessary criminal litigation and improve India\'s ease-of-doing-business environment.',
      difficulty: 'Medium',
      tags: ['Jan Vishwas', 'ease of doing business', 'decriminalisation', 'Parliament'],
    },

    {
      id: 3,
      category: 'current_affairs_national',
      question_text:
        'On April 3, 2026, which national educational body received \'Deemed University\' status, enabling it to award its own degrees and undertake independent research?',
      options: [
        'CBSE (Central Board of Secondary Education)',
        'NCERT (National Council of Educational Research and Training)',
        'NTA (National Testing Agency)',
        'AICTE (All India Council for Technical Education)',
      ],
      correct: 1,
      explanation:
        'NCERT was granted Deemed University status on April 3, 2026, under Section 3 of the UGC Act, 1956. This allows NCERT to independently award degrees and expand its academic programmes, marking a significant upgrade from its earlier status as an autonomous advisory body under the Ministry of Education.',
      difficulty: 'Easy',
      tags: ['NCERT', 'deemed university', 'education', 'UGC'],
    },

    {
      id: 4,
      category: 'current_affairs_national',
      question_text:
        'On April 3, 2026, CBSE introduced a curriculum on computational thinking and Artificial Intelligence for which set of classes?',
      options: ['Classes 1–5', 'Classes 6–10', 'Classes 3–8', 'Classes 9–12'],
      correct: 2,
      explanation:
        'CBSE launched an AI and computational thinking curriculum for Classes 3–8 on April 3, 2026, in line with the National Education Policy (NEP) 2020\'s emphasis on integrating technology-based learning from an early age. The curriculum focuses on coding fundamentals, logical reasoning, and applied AI concepts.',
      difficulty: 'Easy',
      tags: ['CBSE', 'AI curriculum', 'NEP 2020', 'education'],
    },

    {
      id: 5,
      category: 'current_affairs_national',
      question_text:
        'The Western Dedicated Freight Corridor (WDFC), completed on April 6, 2026, runs between which two terminal points?',
      options: [
        'Ludhiana (Punjab) to Howrah (West Bengal)',
        'Dadri (Uttar Pradesh) to Jawaharlal Nehru Port (Mumbai)',
        'Delhi to Chennai (via Nagpur)',
        'Ahmedabad to Kolkata',
      ],
      correct: 1,
      explanation:
        'The Western Dedicated Freight Corridor (WDFC) stretches approximately 1,504 km from Dadri in Uttar Pradesh to Jawaharlal Nehru Port Trust (JNPT) in Mumbai. Operated by DFCCIL (Dedicated Freight Corridor Corporation of India Limited), it is designed to move heavy goods trains off the congested main railway lines, cutting freight transit time and costs significantly.',
      difficulty: 'Medium',
      tags: ['WDFC', 'dedicated freight corridor', 'DFCCIL', 'railways', 'infrastructure'],
    },

    {
      id: 6,
      category: 'current_affairs_national',
      question_text:
        '\'Sadhana Saptah 2026\', launched on April 6, 2026, is a seven-day government initiative aimed at:',
      options: [
        'Promoting yoga and wellness in government offices',
        'Boosting governance quality and improving citizen service delivery',
        'Celebrating India\'s seven classical art forms',
        'Running a national afforestation and tree-plantation drive',
      ],
      correct: 1,
      explanation:
        'Sadhana Saptah (literally "Week of Dedication") 2026 was launched on April 6, 2026, as a week-long initiative to improve governance quality and enhance service delivery to citizens. It aligns with the government\'s "Reform, Perform, Transform" vision and aims to create measurable improvements in public administration at all levels.',
      difficulty: 'Medium',
      tags: ['Sadhana Saptah', 'governance', 'service delivery', 'government initiative'],
    },

    {
      id: 7,
      category: 'current_affairs_national',
      question_text:
        'On April 7, 2026, Parliament rejected the impeachment motion against which Chief Election Commissioner of India?',
      options: ['Rajiv Kumar', 'Sushil Chandra', 'Gyanesh Kumar', 'Nasim Zaidi'],
      correct: 2,
      explanation:
        'Parliament rejected the impeachment motion against Chief Election Commissioner Gyanesh Kumar on April 7, 2026. Under Article 324(5) of the Constitution, the CEC can only be removed in the same manner as a Judge of the Supreme Court — through a presidential order following an address by both Houses of Parliament passed with a special majority — making removal extremely rare.',
      difficulty: 'Medium',
      tags: ['CEC', 'Gyanesh Kumar', 'Election Commission', 'impeachment', 'Article 324'],
    },

    {
      id: 8,
      category: 'current_affairs_national',
      question_text:
        'The BIRAC-BioNEST Incubation Centre, inaugurated on April 4, 2026, by Union MoS Dr. Jitendra Singh, is located at CFTRI. In which city is CFTRI situated?',
      options: [
        'Pune, Maharashtra',
        'Mysuru, Karnataka',
        'Hyderabad, Telangana',
        'Lucknow, Uttar Pradesh',
      ],
      correct: 1,
      explanation:
        'The Central Food Technological Research Institute (CFTRI) is located in Mysuru (formerly Mysore), Karnataka. BIRAC stands for Biotechnology Industry Research Assistance Council, and BioNEST refers to Bio Incubators Nurturing Entrepreneurship for Scaling Technologies. The centre supports biotech startups focused on food science and biotechnology.',
      difficulty: 'Hard',
      tags: ['BIRAC', 'BioNEST', 'CFTRI', 'Mysuru', 'biotechnology'],
    },

    {
      id: 9,
      category: 'science_tech',
      question_text:
        'NASA\'s Artemis II mission, launched on April 1, 2026, was the first crewed flight beyond low Earth orbit since which historic Apollo mission?',
      options: [
        'Apollo 11 (July 1969)',
        'Apollo 13 (April 1970)',
        'Apollo 17 (December 1972)',
        'Skylab 4 (November 1973)',
      ],
      correct: 2,
      explanation:
        'Artemis II, launched on April 1, 2026, was the first crewed mission beyond low Earth orbit since Apollo 17 (December 1972), the last time humans travelled to the Moon. Artemis II performed a lunar flyby — it did not land on the Moon — but carried the first woman and a diverse crew as a precursor to the Artemis III lunar landing mission.',
      difficulty: 'Easy',
      tags: ['NASA', 'Artemis II', 'Apollo 17', 'moon mission', 'space exploration'],
    },

    {
      id: 10,
      category: 'science_tech',
      question_text:
        'On April 6, 2026, the Artemis II crew set a new record for the farthest distance humans have ever been from Earth. Approximately how far did the crew travel?',
      options: [
        '186,411 miles (299,992 km)',
        '222,000 miles (357,250 km)',
        '248,655 miles (400,171 km)',
        '252,756 miles (406,771 km)',
      ],
      correct: 3,
      explanation:
        'The Artemis II crew reached approximately 252,756 miles (406,771 km) from Earth on April 6, 2026, as they looped around the far side of the Moon. This broke the previous record of 248,655 miles (400,171 km) set by the Apollo 13 crew in April 1970. The journey demonstrated the viability of the Orion spacecraft for deep-space missions.',
      difficulty: 'Hard',
      tags: ['Artemis II', 'NASA', 'distance record', 'Apollo 13', 'deep space'],
    },

    // ─── INTERNATIONAL CURRENT AFFAIRS (Q11–Q15) ─────────────

    {
      id: 11,
      category: 'current_affairs_international',
      question_text:
        'Who was re-elected as President of Vietnam by the National Assembly in early April 2026 for the 2026–2031 term?',
      options: [
        'Nguyễn Phú Trọng',
        'Tô Lâm',
        'Lê Minh Hưng',
        'Phạm Minh Chính',
      ],
      correct: 1,
      explanation:
        'The National Assembly of Vietnam re-elected Tô Lâm — who also serves as General Secretary of the Communist Party of Vietnam — as President for the 2026–2031 term. Lê Minh Hưng was simultaneously elected as Prime Minister. This election consolidated leadership under Tô Lâm, making him the most powerful figure in Vietnamese politics.',
      difficulty: 'Medium',
      tags: ['Vietnam', 'Tô Lâm', 'president', 'Southeast Asia', 'international'],
    },

    {
      id: 12,
      category: 'current_affairs_international',
      question_text:
        'Bangladesh launched an emergency MMR vaccination campaign in the first week of April 2026 following a measles outbreak. At least how many children were reported dead from measles in the preceding six weeks?',
      options: ['30', '70', '100', '130'],
      correct: 3,
      explanation:
        'Bangladesh launched an emergency MMR (Measles, Mumps, Rubella) vaccination campaign after health data revealed that at least 130 children had died from measles in the six weeks prior to April 2026. The outbreak raised serious concerns about declining vaccination coverage in parts of Bangladesh and drew international attention to public health infrastructure gaps.',
      difficulty: 'Medium',
      tags: ['Bangladesh', 'measles', 'MMR vaccine', 'public health', 'international'],
    },

    {
      id: 13,
      category: 'current_affairs_international',
      question_text:
        'The US-Iran ceasefire agreed on April 8, 2026 was partly conditioned on Iran reopening the Strait of Hormuz. Approximately what percentage of global oil trade passes through the Strait of Hormuz?',
      options: ['5%', '10%', '20%', '35%'],
      correct: 2,
      explanation:
        'Approximately 20% of the world\'s total oil trade — roughly 17 million barrels per day — passes through the Strait of Hormuz, which lies between Iran and Oman/UAE. Its closure or threat of disruption causes immediate spikes in global oil prices. This is why India, as a major oil importer, closely monitors any conflict affecting the Strait.',
      difficulty: 'Easy',
      tags: ['Strait of Hormuz', 'Iran', 'oil', 'US-Iran war', 'geopolitics'],
    },

    {
      id: 14,
      category: 'current_affairs_international',
      question_text:
        'The US-Iran ceasefire of April 8, 2026, was mediated by which country\'s Prime Minister and military chief?',
      options: ['Qatar', 'Oman', 'Turkey', 'Pakistan'],
      correct: 3,
      explanation:
        'Pakistan\'s Prime Minister and military chief mediated the US-Iran ceasefire that was agreed on April 8, 2026. The ceasefire was conditioned on Iran reopening the Strait of Hormuz to international shipping. Pakistan\'s role highlighted its continuing diplomatic importance as a bridge between the West and the Islamic world.',
      difficulty: 'Medium',
      tags: ['Pakistan', 'US-Iran ceasefire', 'Strait of Hormuz', 'diplomacy', 'mediation'],
    },

    {
      id: 15,
      category: 'current_affairs_international',
      question_text:
        'How did India\'s Ministry of External Affairs formally respond to the US-Iran ceasefire of April 8, 2026?',
      options: [
        'Criticised the ceasefire as insufficient and called for UN intervention',
        'Welcomed the ceasefire and called for unimpeded trade through the Strait of Hormuz',
        'Demanded independent verification of the ceasefire terms',
        'Remained silent citing India\'s traditional policy of non-alignment',
      ],
      correct: 1,
      explanation:
        'India\'s Ministry of External Affairs officially welcomed the US-Iran ceasefire and called for an early, permanent end to the conflict to ensure "unimpeded" trade and energy flow through the Strait of Hormuz. This reflects India\'s significant dependence on Gulf energy imports and its large diaspora in the region.',
      difficulty: 'Medium',
      tags: ['India foreign policy', 'MEA', 'US-Iran ceasefire', 'Strait of Hormuz', 'energy security'],
    },

    // ─── IMPORTANT DAYS (Q16–Q20) ─────────────────────────────

    {
      id: 16,
      category: 'important_days',
      question_text: 'World Health Day is observed every year on which date?',
      options: ['April 5', 'April 7', 'April 10', 'April 12'],
      correct: 1,
      explanation:
        'World Health Day is observed on April 7 every year to mark the anniversary of the founding of the World Health Organization (WHO) in 1948. It is an opportunity to draw global attention to a specific health theme chosen by WHO. In 2026, the theme focused on universal health coverage and the importance of primary healthcare systems.',
      difficulty: 'Easy',
      tags: ['World Health Day', 'WHO', 'April 7', 'important days'],
    },

    {
      id: 17,
      category: 'important_days',
      question_text: 'World Autism Awareness Day is observed on which date every year?',
      options: ['April 1', 'April 2', 'April 4', 'April 6'],
      correct: 1,
      explanation:
        'World Autism Awareness Day is observed on April 2 every year, as designated by the United Nations General Assembly through Resolution 62/139 in 2007. The day promotes acceptance, understanding and inclusion of individuals with autism spectrum disorder (ASD) in society.',
      difficulty: 'Easy',
      tags: ['World Autism Awareness Day', 'UN', 'April 2', 'important days'],
    },

    {
      id: 18,
      category: 'important_days',
      question_text:
        'Odisha Day (Utkal Divas), celebrated on April 1, commemorates which historical event?',
      options: [
        'Liberation of Odisha from colonial rule in 1947',
        'Formation of Odisha as a separate province on a linguistic basis on April 1, 1936',
        'Merger of Odisha with the Indian Union in 1949',
        'Enactment of the Odisha Reorganisation Act in 1956',
      ],
      correct: 1,
      explanation:
        'Odisha Day (Utkal Divas) is observed on April 1 to commemorate the formation of Odisha as a separate province on April 1, 1936, carved out of the Bengal Presidency on linguistic grounds. Odisha was the first province in British India to be carved out specifically on the basis of language — setting a precedent for linguistic reorganisation of states after Independence.',
      difficulty: 'Medium',
      tags: ['Odisha Day', 'Utkal Divas', 'April 1', 'state formation', 'history'],
    },

    {
      id: 19,
      category: 'important_days',
      question_text: 'In 2026, Good Friday fell on which date?',
      options: ['April 1', 'April 3', 'April 5', 'April 6'],
      correct: 1,
      explanation:
        'Good Friday in 2026 fell on April 3, two days before Easter Sunday (April 5, 2026). Good Friday commemorates the crucifixion of Jesus Christ and is a gazetted public holiday in India. The date of Good Friday changes every year as it is calculated based on the lunisolar calendar (the Friday before Easter Sunday).',
      difficulty: 'Easy',
      tags: ['Good Friday', 'Easter', 'April 3', 'public holiday', 'important days'],
    },

    {
      id: 20,
      category: 'important_days',
      question_text: 'Hanuman Jayanti 2026 was celebrated on April 2. This festival marks:',
      options: [
        'The day Lord Hanuman defeated the demon Mahiravana',
        'The birth anniversary of Lord Hanuman',
        'The day Lord Hanuman carried the Sanjeevani herb to save Lakshmana',
        'The day Lord Hanuman first met Lord Rama',
      ],
      correct: 1,
      explanation:
        'Hanuman Jayanti is the Hindu festival celebrating the birth anniversary of Lord Hanuman, one of the most revered figures in Hinduism. In 2026, it was observed on April 2 (Chaitra Purnima — the full moon day of the Chaitra month). It is widely celebrated across India, especially in North and Central India, with special prayers, processions, and recitations of the Hanuman Chalisa.',
      difficulty: 'Easy',
      tags: ['Hanuman Jayanti', 'April 2', 'Hindu festival', 'Chaitra Purnima', 'important days'],
    },

    // ─── STATIC GK (Q21–Q25) ──────────────────────────────────

    {
      id: 21,
      category: 'static_gk',
      question_text:
        'In E20 blended petrol, what exactly does the \'20\' signify?',
      options: [
        '20% methanol content by volume',
        '20% ethanol content by volume',
        '20% compressed natural gas by weight',
        'Octane rating of 20 above standard petrol',
      ],
      correct: 1,
      explanation:
        'In E20 blended fuel, the "E" stands for Ethanol and "20" represents 20% ethanol content by volume (mixed with 80% petrol). Similarly, E10 = 10% ethanol, E100 = pure ethanol. India\'s National Biofuel Policy 2018 set a target of 20% ethanol blending by 2025–26, a goal achieved with the April 1, 2026 nationwide rollout.',
      difficulty: 'Easy',
      tags: ['E20', 'ethanol', 'biofuel', 'fuel blending', 'static GK'],
    },

    {
      id: 22,
      category: 'static_gk',
      question_text:
        'DFCCIL, which operates India\'s Dedicated Freight Corridors, stands for:',
      options: [
        'Dedicated Freight Corridor Corporation of India Limited',
        'Department of Freight Control and Container Infrastructure of India Limited',
        'Digital Freight Coordination and Commerce of India Limited',
        'Directorate of Freight Corridors and Container Infrastructure of India',
      ],
      correct: 0,
      explanation:
        'DFCCIL — Dedicated Freight Corridor Corporation of India Limited — is a Special Purpose Vehicle set up by the Ministry of Railways in 2006 to plan, build, commission, operate and maintain the Eastern and Western Dedicated Freight Corridors. The Eastern DFC runs from Ludhiana (Punjab) to Sonnagar (Jharkhand), while the Western DFC runs from Dadri (UP) to JNPT (Mumbai).',
      difficulty: 'Easy',
      tags: ['DFCCIL', 'freight corridor', 'railways', 'full form', 'infrastructure'],
    },

    {
      id: 23,
      category: 'science_tech',
      question_text:
        'NASA\'s Artemis program is named after the Greek goddess Artemis. What is the primary goal of the Artemis program?',
      options: [
        'Deploy a permanent crewed space station around Mars by 2035',
        'Return humans to the Moon and establish a sustainable lunar presence as a stepping stone to Mars',
        'Launch robotic missions to explore Jupiter\'s moon Europa for signs of life',
        'Create a network of solar observatories at the Sun-Earth Lagrange points',
      ],
      correct: 1,
      explanation:
        'NASA\'s Artemis program aims to return humans to the Moon — specifically the lunar south pole — and establish a sustainable human presence both on the lunar surface and in lunar orbit (via the Gateway station), using this as a proving ground for eventual crewed missions to Mars. Artemis is named after Apollo\'s twin sister in Greek mythology, symbolising the inclusion of women astronauts.',
      difficulty: 'Easy',
      tags: ['NASA', 'Artemis program', 'Moon', 'Mars', 'space exploration'],
    },

    {
      id: 24,
      category: 'sports',
      question_text:
        'The Asian Weightlifting Championships 2026 were held in which Indian city?',
      options: ['New Delhi', 'Mumbai', 'Ahmedabad', 'Bengaluru'],
      correct: 2,
      explanation:
        'The Asian Weightlifting Championships 2026 were held in Ahmedabad, Gujarat. Organised under the aegis of the Asian Weightlifting Federation, this is one of the premier continental weightlifting events, serving as an important qualifier and ranking event ahead of the Asian Games and Commonwealth Games.',
      difficulty: 'Medium',
      tags: ['Asian Weightlifting Championships', 'Ahmedabad', 'sports', 'Gujarat'],
    },

    {
      id: 25,
      category: 'static_gk',
      question_text:
        'NCERT, which received Deemed University status in April 2026, was established in which year?',
      options: ['1950', '1956', '1961', '1968'],
      correct: 2,
      explanation:
        'NCERT (National Council of Educational Research and Training) was established on September 1, 1961, by the Government of India. It functions as an autonomous organisation under the Ministry of Education and advises the central and state governments on school education policies, develops textbooks, curricula, and conducts educational research.',
      difficulty: 'Medium',
      tags: ['NCERT', 'history', 'establishment', 'education', 'static GK'],
    },

    // ─── LEGAL GK & POLITY (Q26–Q30) ─────────────────────────

    {
      id: 26,
      category: 'legal_gk',
      question_text:
        'Under Article 324(5) of the Indian Constitution, the Chief Election Commissioner can be removed from office only:',
      options: [
        'By the President on the advice of the Prime Minister',
        'By an address of both Houses of Parliament, in the same manner as a Judge of the Supreme Court',
        'By a two-thirds majority vote of the Lok Sabha alone',
        'By the President on recommendation of the Union Public Service Commission',
      ],
      correct: 1,
      explanation:
        'Article 324(5) protects the independence of the Chief Election Commissioner by stating that they shall not be removed from office "except in like manner and on the like grounds as a Judge of the Supreme Court of India." This means removal requires a special majority address passed by both Houses of Parliament under Article 124(4), making it extremely difficult. This provision insulates the CEC from political pressure.',
      difficulty: 'Medium',
      tags: ['Article 324', 'CEC', 'Election Commission', 'removal', 'constitutional law'],
    },

    {
      id: 27,
      category: 'legal_gk',
      question_text:
        'Which Constitutional Amendment Act inserted Article 21A, making free and compulsory education a Fundamental Right for children aged 6–14 years?',
      options: [
        '83rd Constitutional Amendment Act, 2000',
        '84th Constitutional Amendment Act, 2001',
        '86th Constitutional Amendment Act, 2002',
        '93rd Constitutional Amendment Act, 2005',
      ],
      correct: 2,
      explanation:
        'The 86th Constitutional Amendment Act, 2002, inserted Article 21A into Part III of the Constitution, making the Right to Education a Fundamental Right for children between the ages of 6 and 14. The Right of Children to Free and Compulsory Education (RTE) Act, 2009, was subsequently enacted to give legislative effect to this constitutional right.',
      difficulty: 'Medium',
      tags: ['Article 21A', 'Right to Education', 'RTE Act', '86th Amendment', 'Fundamental Rights'],
    },

    {
      id: 28,
      category: 'legal_gk',
      question_text:
        'Under which Section of the University Grants Commission (UGC) Act, 1956, can the Central Government declare an institution of higher education as a \'Deemed University\'?',
      options: ['Section 2', 'Section 3', 'Section 12', 'Section 20'],
      correct: 1,
      explanation:
        'Under Section 3 of the UGC Act, 1956, the Central Government may, on the advice of the UGC, declare any institution of higher education (other than a university) to be a Deemed University. Such institutions enjoy the same academic status and privileges as a university, including the power to award degrees. NCERT was granted this status in April 2026.',
      difficulty: 'Hard',
      tags: ['Deemed University', 'Section 3', 'UGC Act 1956', 'NCERT', 'education law'],
    },

    {
      id: 29,
      category: 'polity',
      question_text:
        'Which article of the Indian Constitution empowers the President to establish an Election Commission and make appointments thereto?',
      options: ['Article 312', 'Article 315', 'Article 324', 'Article 326'],
      correct: 2,
      explanation:
        'Article 324 of the Indian Constitution deals with the Election Commission of India. It vests the superintendence, direction, and control of the preparation of electoral rolls and the conduct of elections to Parliament, State Legislatures, and the offices of President and Vice-President in the Election Commission. The President appoints the Chief Election Commissioner and other Election Commissioners.',
      difficulty: 'Easy',
      tags: ['Article 324', 'Election Commission', 'President', 'appointments', 'polity'],
    },

    {
      id: 30,
      category: 'legal_gk',
      question_text:
        'The Jan Vishwas (Amendment of Provisions) Act primarily amends offences under various Central Acts from criminal penalties to civil penalties. This approach is best described as:',
      options: [
        'Criminalisation of civil disputes',
        'Decriminalisation of minor regulatory offences',
        'Abolition of all penalties for business violations',
        'Transfer of jurisdiction from civil courts to criminal courts',
      ],
      correct: 1,
      explanation:
        'The Jan Vishwas Act\'s core philosophy is "decriminalisation" — converting minor, technical, or regulatory offences (e.g., procedural non-compliance) from criminal offences carrying jail time into civil penalties (fines). This reduces the fear of arbitrary arrest for minor business infractions, improves India\'s ease-of-doing-business environment, and decongests criminal courts. It does not abolish penalties altogether, but changes their nature.',
      difficulty: 'Medium',
      tags: ['Jan Vishwas Act', 'decriminalisation', 'ease of doing business', 'legal reform'],
    },

  ],
};

export default week01;
