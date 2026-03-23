import { Metadata } from 'next';
import GKVaultClient from '../components/GKVaultClient';

type Props = {
  params: Promise<{ date: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;

  // Validate date format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    return {
      title: 'CLAT GK Vault | Daily Current Affairs for CLAT Preparation',
      description: 'Daily GK current affairs with audio summaries, flashcards, and key highlights from The Hindu and Times of India for CLAT preparation.',
    };
  }

  const parsed = new Date(date + 'T00:00:00');
  const formatted = parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return {
    title: `CLAT GK Vault - ${formatted} | Daily Current Affairs`,
    description: `CLAT GK current affairs for ${formatted}. Audio summaries, flashcards, and key highlights from The Hindu and Times of India for CLAT preparation.`,
    openGraph: {
      title: `CLAT GK Vault - ${formatted} | Daily Current Affairs`,
      description: `Master GK for CLAT with daily current affairs for ${formatted}. Audio briefings, smart flashcards, and key highlights.`,
      type: 'article',
      url: `https://clattribe.com/clat-gk-vault/${date}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `CLAT GK Vault - ${formatted}`,
      description: `Daily current affairs for CLAT preparation - ${formatted}`,
    },
    alternates: {
      canonical: `https://clattribe.com/clat-gk-vault/${date}`,
    },
  };
}

function BreadcrumbJsonLd({ date, formatted }: { date: string; formatted: string }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://clattribe.com' },
      { '@type': 'ListItem', position: 2, name: 'CLAT GK Vault', item: 'https://clattribe.com/clat-gk-vault' },
      { '@type': 'ListItem', position: 3, name: formatted, item: `https://clattribe.com/clat-gk-vault/${date}` },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

export default async function GKVaultDatePage({ params }: Props) {
  const { date } = await params;

  const parsed = new Date(date + 'T00:00:00');
  const formatted = parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <>
      <BreadcrumbJsonLd date={date} formatted={formatted} />
      <GKVaultClient initialDate={date} />
    </>
  );
}
