import { Metadata } from 'next';
import WeeklyQuizClient from './WeeklyQuizClient';

export const metadata: Metadata = {
  title: 'Weekly GK Quiz | CLAT Tribe GK Vault',
  description: 'Test your CLAT GK knowledge with our weekly quiz compiled from the past 7 days of current affairs. Track your score and identify weak areas.',
  openGraph: {
    title: 'Weekly GK Quiz | CLAT Tribe',
    description: 'Test your CLAT GK knowledge with our weekly current affairs quiz.',
    type: 'website',
    url: 'https://clattribe.com/clat-gk-vault/quiz',
  },
  alternates: {
    canonical: 'https://clattribe.com/clat-gk-vault/quiz',
  },
};

export default function QuizPage() {
  return <WeeklyQuizClient />;
}
