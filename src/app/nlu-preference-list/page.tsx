import type { Metadata } from 'next';
import NLUPreference from '../components/NLUPreference/NLUPreference';

export const metadata: Metadata = {
  title: 'CLAT 2026 NLU Preference List Builder | Customize Your ideal NLUs', // Refined title
  description: 'Design and customize your ideal CLAT 2026 NLU Preference List by arranging National Law Universities based on what matters most to you—ranking, location, placements, and more.', // Refined description
  keywords: 'CLAT 2026 NLU preference list, NLU choice filling, CLAT counselling, National Law University ranking, law college preference, customize NLU list', // Refined keywords
  openGraph: {
    title: 'CLAT 2026 NLU Preference List Builder',
    description: 'Build your ideal CLAT 2026 NLU Preference List by ordering National Law Universities according to your personal priorities.',
  },
  alternates: { // <-- Added this block for SEO clarity
    canonical: 'www.clattribe.com',
  },
};

export default function Page() {
  return <NLUPreference />;
}
