import { redirect } from 'next/navigation';

export default function GKVaultPage() {
  const today = new Date().toISOString().split('T')[0];
  redirect(`/clat-gk-vault/${today}`);
}
