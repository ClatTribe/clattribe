import type { Metadata } from 'next';
import NLUPreference from '../components/NLUPreference/NLUPreference';

export const metadata: Metadata = {
  title: 'CLAT 2026 NLU Preference List | Arrange NLUs as Per Your Choice',
  description: 'Create and customize your CLAT 2026 NLU Preference List by arranging National Law Universities based on what matters most to you—ranking, location, placements, and more.',
  keywords: 'CLAT 2026 NLU preference list, NLU choice filling, CLAT counselling, National Law University ranking, law college preference',
  openGraph: {
    title: 'CLAT 2026 NLU Preference List',
    description: 'Build your ideal CLAT 2026 NLU Preference List by ordering National Law Universities according to your personal priorities.',
  }
};

export default function Page() {
  return <NLUPreference />;
}