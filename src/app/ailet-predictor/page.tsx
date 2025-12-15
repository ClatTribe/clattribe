import type { Metadata } from 'next';
import AILETpredictor from '../components/AILETpredictor';

// import AILETpre
export const metadata: Metadata = {
  title: 'CLAT 2026 AILET Predictor | Check Your Admission Chances',
  description: 'Enter your estimated AILET score to instantly check your chances of admission to the National Law University, Delhi. Get a personalized prediction for AILET 2026.',
  keywords: 'CLAT predictor, AILET admission, law university, CLAT 2026, National Law University',
  openGraph: {
    title: 'CLAT 2026 AILET Predictor',
    description: 'Check whether your AILET score is enough for admission to National Law University, Delhi',
  }
};

export default function Page() {
  return <AILETpredictor />;
}