'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Lock,
  ChevronRight,
  BookOpen,
  Headphones,
  FileText,
  Clock,
  ArrowRight,
  Zap,
  BookMarked
} from 'lucide-react';

interface MCQ {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface EditorialCard {
  id: string;
  source: 'The Hindu' | 'The Indian Express';
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
  mcqs: MCQ[];
}

const EDITORIALS: EditorialCard[] = [
  {
    id: '1',
    source: 'The Hindu',
    title: 'A delicate balance: On the Supreme Court verdict on the Governor\'s powers',
    date: 'April 7, 2026',
    readTime: '6 min',
    summary: 'The recent judgment clarifies the constitutional boundaries of gubernatorial authority in legislative matters, emphasizing the primacy of the elected government.',
    content: `The Supreme Court of India has once again stepped in to define the limits of gubernatorial authority, a recurring point of friction in Indian federalism. In its latest verdict, the Court emphasized that the Governor cannot sit on bills passed by the State Legislature indefinitely. The Constitution, under Article 200, provides the Governor with three options when a bill is presented: grant assent, withhold assent, or reserve the bill for the President's consideration.

    The Court clarified that if the Governor chooses to withhold assent, they must return the bill to the Legislature for reconsideration "as soon as possible." If the Legislature passes the bill again, with or without amendments, the Governor is constitutionally mandated to grant assent. This "delicate balance" ensures that the Governor, as a constitutional appointee, does not override the will of the elected representatives of the people.

    The judgment also touched upon the discretionary powers of the Governor, noting that such powers are not absolute and must be exercised in accordance with constitutional morality. This ruling is expected to reduce legislative stalemates in several states where Governors and state governments have been at loggerheads.`,
    tags: ['Polity', 'Judiciary', 'Constitution'],
    mcqs: [
      {
        question: "Under which Article of the Indian Constitution does the Governor have the power to grant assent to bills?",
        options: ["Article 161", "Article 200", "Article 213", "Article 356"],
        correctAnswer: 1,
        explanation: "Article 200 of the Constitution deals with the Governor's power regarding bills passed by the State Legislature."
      },
      {
        question: "What must the Governor do if they withhold assent to a bill, according to the Supreme Court's clarification?",
        options: [
          "Keep the bill indefinitely",
          "Refer it to the Supreme Court",
          "Return it to the Legislature for reconsideration as soon as possible",
          "Dismiss the State Government"
        ],
        correctAnswer: 2,
        explanation: "The Court clarified that withholding assent requires the Governor to return the bill to the Legislature for reconsideration 'as soon as possible'."
      }
    ]
  },
  {
    id: '2',
    source: 'The Hindu',
    title: 'Green shoots or mirage? Analyzing the latest industrial production data',
    date: 'April 7, 2026',
    readTime: '5 min',
    summary: 'While manufacturing shows signs of recovery, the volatility in capital goods suggests that private investment is yet to take full flight.',
    content: `The latest Index of Industrial Production (IIP) data presents a complex picture of the Indian economy. While the headline growth figure shows a modest uptick, a deeper dive into the sub-sectors reveals underlying vulnerabilities. Manufacturing, which accounts for the lion's share of the index, has shown resilience, particularly in the consumer durables segment.

    However, the capital goods sector remains a cause for concern. Capital goods are often seen as a proxy for investment activity in the economy. The continued volatility and sluggish growth in this segment suggest that private sector capital expenditure (capex) is still in a wait-and-watch mode. High interest rates and global economic uncertainty are likely weighing on investment decisions.

    On the positive side, the mining and electricity sectors have posted robust growth, driven by increased domestic demand. The government's focus on infrastructure spending is also providing some cushion. Yet, for a sustained and broad-based recovery, the private sector needs to step up its investment game. The 'green shoots' are visible, but whether they will blossom into a full-fledged recovery remains to be seen.`,
    tags: ['Economy', 'Industry', 'Data'],
    mcqs: [
      {
        question: "Which sector is considered a proxy for investment activity in the economy according to the passage?",
        options: ["Consumer Durables", "Mining", "Capital Goods", "Electricity"],
        correctAnswer: 2,
        explanation: "The passage states that capital goods are often seen as a proxy for investment activity."
      },
      {
        question: "What is cited as a likely reason for the sluggish growth in private sector capex?",
        options: [
          "Lack of government spending",
          "High interest rates and global uncertainty",
          "Decreased domestic demand for electricity",
          "Decline in the manufacturing sector"
        ],
        correctAnswer: 1,
        explanation: "The passage mentions high interest rates and global economic uncertainty as factors weighing on investment decisions."
      }
    ]
  },
  {
    id: '3',
    source: 'The Hindu',
    title: 'The AI frontier: Navigating the ethics of generative models',
    date: 'April 6, 2026',
    readTime: '8 min',
    summary: 'As AI integrates deeper into public discourse, the need for a robust regulatory framework that balances innovation with safety becomes urgent.',
    content: `The rapid advancement of generative AI models has brought us to a critical juncture. These models, capable of producing human-like text, images, and code, offer immense potential for productivity and creativity. However, they also pose significant ethical and societal risks, ranging from deepfakes and misinformation to algorithmic bias and job displacement.

    The challenge for policymakers is to create a regulatory framework that fosters innovation while ensuring safety and accountability. A 'one-size-fits-all' approach is unlikely to work given the diverse applications of AI. Instead, a risk-based approach, where high-risk applications are subject to stricter oversight, is being increasingly advocated.

    Transparency is another key pillar of ethical AI. Users should be aware when they are interacting with an AI system, and the data used to train these models should be subject to scrutiny to prevent the reinforcement of existing biases. As we navigate this AI frontier, the goal must be to ensure that technology serves humanity, not the other way around.`,
    tags: ['Tech', 'Ethics', 'Governance'],
    mcqs: [
      {
        question: "What approach is being advocated for AI regulation according to the passage?",
        options: ["A one-size-fits-all approach", "A total ban on generative models", "A risk-based approach", "No regulation at all"],
        correctAnswer: 2,
        explanation: "The passage mentions that a risk-based approach, with stricter oversight for high-risk applications, is being advocated."
      }
    ]
  },
  {
    id: '4',
    source: 'The Hindu',
    title: 'Climate crossroads: Why the next COP summit is critical for the Global South',
    date: 'April 6, 2026',
    readTime: '7 min',
    summary: 'Developing nations face a double whamability of climate change and debt, requiring a fundamental shift in global climate finance.',
    content: `As the world prepares for the next COP summit, the stakes have never been higher for the Global South. Developing nations are disproportionately affected by climate change, despite having contributed the least to historical emissions. They face a 'double whammy': the physical impacts of climate change, such as extreme weather events, and the financial burden of transitioning to a green economy while managing mounting debt.

    The current global climate finance architecture is widely seen as inadequate. The promised $100 billion per year from developed nations has been slow to materialize and often comes in the form of loans rather than grants, further exacerbating the debt crisis. There is an urgent need for a fundamental shift towards more equitable and accessible financing.

    The upcoming summit must address the issue of 'loss and damage'—the unavoidable impacts of climate change that cannot be adapted to. For the Global South, climate justice is not just a moral imperative but a prerequisite for sustainable development.`,
    tags: ['Environment', 'International Relations'],
    mcqs: [
      {
        question: "What is the 'double whammy' faced by developing nations according to the passage?",
        options: [
          "High emissions and low technology",
          "Climate change impacts and financial debt",
          "Lack of resources and overpopulation",
          "Political instability and economic sanctions"
        ],
        correctAnswer: 1,
        explanation: "The passage defines the 'double whammy' as the physical impacts of climate change and the financial burden of transition and debt."
      }
    ]
  },
  {
    id: '5',
    source: 'The Indian Express',
    title: 'The Middle East Maze: India\'s strategic tightrope walk',
    date: 'April 7, 2026',
    readTime: '6 min',
    summary: 'Escalating tensions in the region demand a nuanced diplomatic approach that protects India\'s energy security and diaspora interests.',
    content: `The Middle East remains a volatile but vital region for India's strategic interests. With over 8 million Indians living and working in the region, their safety and welfare are a top priority for New Delhi. Furthermore, the region is a critical source of India's energy imports, making regional stability essential for India's economic security.

    However, the escalating tensions between regional powers present a significant diplomatic challenge. India has traditionally maintained a policy of 'strategic autonomy,' engaging with all major players without taking sides in their internal rivalries. This tightrope walk is becoming increasingly difficult as the geopolitical landscape shifts.

    India's growing economic and security ties with the region, including through initiatives like the India-Middle East-Europe Economic Corridor (IMEC), signify its long-term commitment. Navigating this maze requires a nuanced approach that balances competing interests while upholding international law and regional peace.`,
    tags: ['IR', 'Diplomacy', 'Security'],
    mcqs: [
      {
        question: "Why is the Middle East region critical for India's economic security?",
        options: ["It is a major source of agricultural imports", "It is a critical source of energy imports", "It provides advanced technology", "It is India's largest export market"],
        correctAnswer: 1,
        explanation: "The passage states that the region is a critical source of India's energy imports."
      }
    ]
  },
  {
    id: '6',
    source: 'The Indian Express',
    title: 'Education for all: Bridging the digital divide in rural schools',
    date: 'April 7, 2026',
    readTime: '5 min',
    summary: 'Infrastructure alone isn\'t enough; teacher training and localized content are the real keys to unlocking digital education\'s potential.',
    content: `The digital divide in India's education system was starkly highlighted during the pandemic. While urban schools quickly pivoted to online learning, rural students were often left behind due to a lack of devices and reliable internet connectivity. Bridging this gap is essential for ensuring equitable access to education.

    However, providing hardware is only the first step. The real challenge lies in creating a holistic digital ecosystem. This includes training teachers to effectively use digital tools and developing high-quality, localized content that resonates with rural students. A top-down approach is unlikely to succeed; community involvement and local context are crucial.

    The government's 'Digital India' initiative has made significant strides, but more needs to be done at the grassroots level. Education is the most powerful tool for social mobility, and in the 21st century, digital literacy is a fundamental part of that tool.`,
    tags: ['Social Issues', 'Education', 'Tech'],
    mcqs: [
      {
        question: "According to the passage, what are the 'real keys' to unlocking digital education's potential?",
        options: [
          "High-speed internet and expensive laptops",
          "Teacher training and localized content",
          "Building more school buildings",
          "Increasing the number of students"
        ],
        correctAnswer: 1,
        explanation: "The passage states that teacher training and localized content are the real keys."
      }
    ]
  },
  {
    id: '7',
    source: 'The Indian Express',
    title: 'The Urban Challenge: Rethinking city planning for a hotter world',
    date: 'April 6, 2026',
    readTime: '7 min',
    summary: 'Heatwaves are no longer anomalies. Our cities must be redesigned with green corridors and heat-resilient materials.',
    content: `As global temperatures rise, Indian cities are increasingly becoming 'heat islands.' The combination of concrete structures, lack of green cover, and high population density exacerbates the impact of heatwaves. This is not just a matter of discomfort; it is a significant public health risk, particularly for the urban poor.

    Rethinking city planning is no longer an option but a necessity. We need to move away from the 'concrete jungle' model and embrace 'nature-based solutions.' This includes creating green corridors, restoring urban water bodies, and using heat-resilient building materials.

    Urban local bodies must also develop 'Heat Action Plans' that include early warning systems and public cooling centers. A hotter world demands cooler cities, and that requires a fundamental shift in how we design and live in our urban spaces.`,
    tags: ['Urbanization', 'Climate Change'],
    mcqs: [
      {
        question: "What contributes to Indian cities becoming 'heat islands'?",
        options: [
          "Concrete structures and lack of green cover",
          "Abundance of parks and water bodies",
          "Low population density",
          "Use of traditional building materials"
        ],
        correctAnswer: 0,
        explanation: "The passage mentions concrete structures, lack of green cover, and high population density as factors."
      }
    ]
  },
  {
    id: '8',
    source: 'The Indian Express',
    title: 'Justice delayed: The urgent need for judicial vacancies to be filled',
    date: 'April 6, 2026',
    readTime: '6 min',
    summary: 'A staggering backlog of cases threatens the very foundation of the rule of law. The collegium and government must find common ground.',
    content: `The Indian judiciary is facing a crisis of pendency. With millions of cases languishing in courts for years, the promise of 'justice for all' is becoming increasingly hollow. One of the primary reasons for this backlog is the large number of vacancies in the judiciary, from the lower courts to the High Courts and the Supreme Court.

    The process of judicial appointments has often been a bone of contention between the judiciary (the Collegium) and the executive (the Government). While the Collegium recommends names, the Government often takes a long time to clear them, leading to prolonged vacancies. This institutional friction is ultimately hurting the common litigant.

    Filling vacancies is not a silver bullet, but it is a necessary first step. Alongside this, we need structural reforms, such as the use of technology for case management and the promotion of alternative dispute resolution mechanisms. A functional and efficient judiciary is the backbone of a vibrant democracy.`,
    tags: ['Polity', 'Judiciary', 'Governance'],
    mcqs: [
      {
        question: "What is cited as a primary reason for the backlog of cases in the Indian judiciary?",
        options: [
          "Lack of interest from lawyers",
          "Large number of judicial vacancies",
          "Too many structural reforms",
          "Excessive use of technology"
        ],
        correctAnswer: 1,
        explanation: "The passage states that one of the primary reasons for the backlog is the large number of vacancies in the judiciary."
      }
    ]
  }
];

const ARCHIVE_DATES = [
  { month: 'APR', date: '7', day: 'Tue', active: true, locked: false },
  { month: 'APR', date: '6', day: 'Mon', active: false, locked: false },
  { month: 'APR', date: '5', day: 'Sun', active: false, locked: true },
  { month: 'APR', date: '4', day: 'Sat', active: false, locked: true },
  { month: 'APR', date: '3', day: 'Fri', active: false, locked: true },
  { month: 'APR', date: '2', day: 'Thu', active: false, locked: true },
  { month: 'APR', date: '1', day: 'Wed', active: false, locked: true },
  { month: 'MAR', date: '31', day: 'Tue', active: false, locked: true },
  { month: 'MAR', date: '30', day: 'Mon', active: false, locked: true },
  { month: 'MAR', date: '29', day: 'Sun', active: false, locked: true },
  { month: 'MAR', date: '28', day: 'Sat', active: false, locked: true },
  { month: 'MAR', date: '27', day: 'Fri', active: false, locked: true },
];

export default function Editorial() {
  const [selectedDate, setSelectedDate] = React.useState('7');
  const [selectedEditorial, setSelectedEditorial] = React.useState<EditorialCard | null>(null);

  const filteredEditorials = React.useMemo(() => {
    return EDITORIALS.filter(e => e.date.includes(`April ${selectedDate}, 2026`) || e.date.includes(`March ${selectedDate}, 2026`));
  }, [selectedDate]);

  if (selectedEditorial) {
    return <DetailedEditorial item={selectedEditorial} onBack={() => setSelectedEditorial(null)} />;
  }

  return (
    <div className="space-y-12">
      {/* Daily Archives Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <Clock size={14} />
            Daily Archives
          </h3>
          <span className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest bg-[#F59E0B]/10 px-2 py-0.5 rounded">
            (First 2 Days Free)
          </span>
        </div>

        <div className="relative group">
          <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar mask-fade-right">
            {ARCHIVE_DATES.map((item) => (
              <motion.button
                key={`${item.month}-${item.date}`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => !item.locked && setSelectedDate(item.date)}
                className={`flex-shrink-0 w-24 h-32 rounded-3xl flex flex-col items-center justify-center gap-1 transition-all relative border-2 ${
                  selectedDate === item.date
                    ? 'bg-[#F59E0B] border-[#F59E0B] text-[#060818] shadow-lg shadow-[#F59E0B]/20'
                    : 'bg-white dark:bg-[#060818] border-gray-100 dark:border-white/10 text-gray-400 dark:text-gray-500 hover:border-[#F59E0B]/50'
                } ${item.locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {item.locked && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#F59E0B]/20 text-[#F59E0B] text-[8px] font-black px-1.5 py-0.5 rounded uppercase">PRO</span>
                  </div>
                )}
                <span className={`text-[10px] font-black uppercase tracking-widest ${selectedDate === item.date ? 'text-[#060818]/60' : ''}`}>
                  {item.month}
                </span>
                <span className={`text-3xl font-black ${selectedDate === item.date ? 'text-[#060818]' : 'text-[#060818] dark:text-white'}`}>
                  {item.locked ? <Lock size={20} className="mb-1" /> : item.date}
                </span>
                <span className={`text-[10px] font-bold ${selectedDate === item.date ? 'text-[#060818]/60' : ''}`}>
                  {item.day}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Custom Scrollbar Indicator */}
          <div className="flex items-center gap-4 mt-2">
            <div className="h-1 bg-gray-100 dark:bg-white/5 rounded-full flex-1 max-w-[200px] overflow-hidden">
              <motion.div
                className="h-full bg-[#F59E0B]"
                initial={{ width: '20%' }}
                animate={{ width: '15%' }}
              />
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              <button className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors">
                <BookMarked size={14} /> April Summary <ChevronRight size={12} />
              </button>
              <button className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors">
                <Zap size={14} /> Weekly Quiz <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Editorials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* The Hindu Column */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
            <h2 className="text-2xl font-black text-[#060818] dark:text-white flex items-center gap-3">
              <div className="w-2 h-8 bg-[#F59E0B] rounded-full" />
              The Hindu
            </h2>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {filteredEditorials.filter(e => e.source === 'The Hindu').length} Editorials
            </span>
          </div>

          <div className="space-y-6">
            {filteredEditorials.filter(e => e.source === 'The Hindu').map((item) => (
              <EditorialItem key={item.id} item={item} onOpen={() => setSelectedEditorial(item)} />
            ))}
            {filteredEditorials.filter(e => e.source === 'The Hindu').length === 0 && (
              <p className="text-gray-500 font-medium py-8 text-center">No editorials found for this date.</p>
            )}
          </div>
        </div>

        {/* Indian Express Column */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
            <h2 className="text-2xl font-black text-[#060818] dark:text-white flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full" />
              The Indian Express
            </h2>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {filteredEditorials.filter(e => e.source === 'The Indian Express').length} Editorials
            </span>
          </div>

          <div className="space-y-6">
            {filteredEditorials.filter(e => e.source === 'The Indian Express').map((item) => (
              <EditorialItem key={item.id} item={item} onOpen={() => setSelectedEditorial(item)} />
            ))}
            {filteredEditorials.filter(e => e.source === 'The Indian Express').length === 0 && (
              <p className="text-gray-500 font-medium py-8 text-center">No editorials found for this date.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const EditorialItem: React.FC<{ item: EditorialCard; onOpen: () => void }> = ({ item, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onOpen}
      className="group bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/10 hover:shadow-2xl hover:shadow-[#F59E0B]/5 transition-all duration-300 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
          <Clock size={12} /> {item.readTime}
        </div>
      </div>

      <h3 className="text-xl font-black text-[#060818] dark:text-white mb-4 group-hover:text-[#F59E0B] transition-colors leading-tight">
        {item.title}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 line-clamp-2 font-medium">
        {item.summary}
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          className="flex-1 bg-[#060818] dark:bg-white/10 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all flex items-center justify-center gap-2"
        >
          <BookOpen size={16} /> Read
        </button>
        <button
          onClick={(e) => e.stopPropagation()}
          className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 text-[#060818] dark:text-white hover:bg-[#F59E0B] hover:text-[#060818] transition-all"
        >
          <Headphones size={20} />
        </button>
        <button
          onClick={(e) => e.stopPropagation()}
          className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 text-[#060818] dark:text-white hover:bg-[#F59E0B] hover:text-[#060818] transition-all"
        >
          <FileText size={20} />
        </button>
      </div>
    </motion.div>
  );
}

function DetailedEditorial({ item, onBack }: { item: EditorialCard; onBack: () => void }) {
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [showExplanation, setShowExplanation] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false);

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === item.mcqs[currentQuestion].correctAnswer) {
      setScore(s => s + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < item.mcqs.length) {
      setCurrentQuestion(c => c + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-[#F59E0B] transition-colors font-bold uppercase text-[10px] tracking-widest"
      >
        <ChevronRight size={16} className="rotate-180" /> Back to Editorials
      </button>

      <div className="bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-gray-100 dark:border-white/10 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
              item.source === 'The Hindu' ? 'bg-[#F59E0B]/10 text-[#F59E0B]' : 'bg-blue-500/10 text-blue-500'
            }`}>
              {item.source}
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
          </div>
          <h1 className="text-3xl font-black text-[#060818] dark:text-white leading-tight">
            {item.title}
          </h1>
          <div className="flex gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line font-medium">
            {item.content}
          </p>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-4">
    0       <button className="flex items-center gap-2 text-[#060818] dark:text-white font-bold hover:text-[#F59E0B] transition-colors">
              <Headphones size={20} /> Listen to Audio
            </button>
            <button className="flex items-center gap-2 text-[#060818] dark:text-white font-bold hover:text-[#F59E0B] transition-colors">
              <FileText size={20} /> Download PDF
            </button>
          </div>
          <button
            onClick={() => setShowQuiz(true)}
            className="bg-[#F59E0B] text-[#060818] px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#F59E0B]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Zap size={18} fill="currentColor" /> Take Passage Quiz
          </button>
        </div>
      </div>

      {showQuiz && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-[100] bg-[#060818]/90 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <div className="bg-white dark:bg-[#060818] w-full max-w-2xl rounded-[3rem] p-10 shadow-2xl border border-white/10 relative overflow-hidden">
            <button
              onClick={() => setShowQuiz(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors"
            >
              <Zap size={24} className="rotate-45" />
            </button>

            {!quizFinished ? (
              <div className="space-y-8">
     0          <div className="space-y-2">
                  <p className="text-[10px] font-black text-[#F59E0B] uppercase tracking-widest">Question {currentQuestion + 1} of {item.mcqs.length}</p>
                  <h3 className="text-xl font-black text-[#060818] dark:text-white">
                    {item.mcqs[currentQuestion].question}
                  </h3>
                </div>

                <div className="grid gap-4">
                  {item.mcqs[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={selectedOption !== null}
                      className={`w-full p-6 rounded-2xl text-left font-bold transition-all border-2 ${
                        selectedOption === idx
                          ? idx === item.mcqs[currentQuestion].correctAnswer
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'bg-red-500 border-red-500 text-white'
                          : selectedOption !== null && idx === item.mcqs[currentQuestion].correctAnswer
                            ? 'bg-green-500/20 border-green-500 text-green-500'
                            : 'bg-gray-50 dark:bg-white/5 border-transparent text-gray-600 dark:text-gray-300 hover:border-[#F59E0B]/50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {showExplanation && (
      0           <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-[#F59E0B]/10 rounded-2xl border border-[#F59E0B]/20"
                  >
                    <p className="text-sm font-bold text-[#F59E0B] mb-2 uppercase tracking-widest">Explanation</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      {item.mcqs[currentQuestion].explanation}
                    </p>
                    <button
                      onClick={nextQuestion}
                      className="mt-6 w-full bg-[#F59E0B] text-[#060818] py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                    >
                      {currentQuestion + 1 < item.mcqs.length ? 'Next Question' : 'Finish Quiz'} <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="text-center space-y-8 py-10">
                <div className="w-24 h-24 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap size={48} className="text-[#F59E0B]" fill="currentColor" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-[#060818] dark:text-white">Quiz Completed!</h3>
                  <p className="text-gray-500 font-bold">You scored {score} out of {item.mcqs.length}</p>
                </div>
                <button
                  onClick={() => setShowQuiz(false)}
                  className="bg-[#F59E0B] text-[#060818] px-10 py-4 rounded-2xl font-black text-sm shadow-xl shadow-[#F59E0B]/20"
                >
                  Back to Editorial
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
