import type { Metadata } from 'next';
import NLUPredictor from '../components/NLUpredcitor';

export const metadata: Metadata = {
  title: 'CLAT 2026 NLU Predictor | Check Your Admission Chances',
  description: 'Enter your estimated CLAT score to instantly see which National Law Universities are within your reach. Get personalized predictions for CLAT 2026.',
  keywords: 'CLAT predictor, NLU admission, law university, CLAT 2026, National Law University',
  openGraph: {
    title: 'CLAT 2026 NLU Predictor',
    description: 'Discover which National Law Universities you can get into based on your CLAT score',
  }
};

export default function Page() {
  return <NLUPredictor />;
}