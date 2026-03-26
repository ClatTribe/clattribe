import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function GKVaultPage() {
  const today = new Date().toISOString().split('T')[0];
  redirect(`/clat-gk-vault/${today}`);
}
