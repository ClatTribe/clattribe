import { Metadata } from 'next';
import MonthlySummaryClient from './MonthlySummaryClient';

type Props = {
  params: Promise<{ month: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { month } = await params;

  // Expected format: YYYY-MM
  const [year, mon] = month.split('-');
  const monthName = new Date(`${year}-${mon}-01T00:00:00`).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  return {
    title: `CLAT GK Monthly Summary - ${monthName} | CLAT Tribe`,
    description: `Complete monthly GK compilation for ${monthName}. All current affairs topics, flashcards, and key highlights for CLAT preparation in one place.`,
    openGraph: {
      title: `CLAT GK Monthly Summary - ${monthName}`,
      description: `Monthly GK compilation for CLAT preparation - ${monthName}`,
      type: 'article',
      url: `https://clattribe.com/clat-gk-vault/monthly/${month}`,
    },
    alternates: {
      canonical: `https://clattribe.com/clat-gk-vault/monthly/${month}`,
    },
  };
}

export default async function MonthlyPage({ params }: Props) {
  const { month } = await params;
  return <MonthlySummaryClient month={month} />;
}
