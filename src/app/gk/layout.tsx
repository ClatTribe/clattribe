import './gk.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CLAT Tribe GK Portal',
  description: 'Master GK & Legal Reasoning for CLAT with daily editorials, flashcards, testing engine and more.',
};

export default function GKLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
