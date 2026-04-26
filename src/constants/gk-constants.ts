export const GK_BRAND_COLORS = {
  NAVY_BLUE: '#060818',
  AMBER: '#F59E0B',
  WHITE: '#FFFFFF',
  GRAY_LIGHT: '#F3F4F6',
  GRAY_DARK: '#4B5563',
};

export const GK_CATEGORIES = [
  'Legal Current Affairs',
  'International Relations',
  'National News',
  'Economy',
  'Science & Technology',
  'Sports',
  'Awards & Honors',
];

// Program start date — same anchor used by the weekly quiz system (Jan 5, 2026 = Week 1)
const _PROGRAM_START = new Date(2026, 0, 5);

function _getCurrentWeekNumber(): number {
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const elapsed = Date.now() - _PROGRAM_START.getTime();
  return Math.max(1, Math.floor(elapsed / msPerWeek) + 1);
}

function _formatToday(): string {
  return new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Returns daily targets with descriptions derived from today's date — no stale text. */
export function getDailyTargets() {
  const weekNum = _getCurrentWeekNumber();
  const today = _formatToday();
  return [
    {
      id: '1',
      title: "Read Today's Hindu Editorial",
      description: `${today} — pick out the legal and polity angles that CLAT could passage-test.`,
      type: 'Reading',
      is_completed: false,
    },
    {
      id: '2',
      title: `Attempt Week ${weekNum} Quiz`,
      description: `This week's current affairs quiz is live — 20 questions, 20 minutes.`,
      type: 'Quiz',
      is_completed: false,
    },
    {
      id: '3',
      title: 'Review Bookmarked Passages',
      description: 'Go through your saved passages and re-check the explanations you missed.',
      type: 'Reading',
      is_completed: false,
    },
  ];
}

export const GK_LEADERBOARD_DATA = [
  { id: '1', name: 'Rahul Sharma', score: 2850, rank: 1, avatar: 'RS' },
  { id: '2', name: 'Priya Singh', score: 2720, rank: 2, avatar: 'PS' },
  { id: '3', name: 'Sneha Kapoor', score: 2680, rank: 3, avatar: 'SK' },
  { id: '4', name: 'Abhinav (You)', score: 2540, rank: 4, avatar: 'AY', is_user: true },
  { id: '5', name: 'Vikram Aditya', score: 2410, rank: 5, avatar: 'VA' },
  { id: '6', name: 'Ananya Iyer', score: 2350, rank: 6, avatar: 'AI' },
  { id: '7', name: 'Rohan Mehta', score: 2290, rank: 7, avatar: 'RM' },
  { id: '8', name: 'Ishita Gupta', score: 2180, rank: 8, avatar: 'IG' },
  { id: '9', name: 'Karan Malhotra', score: 2050, rank: 9, avatar: 'KM' },
  { id: '10', name: 'Tanvi Verma', score: 1980, rank: 10, avatar: 'TV' },
];