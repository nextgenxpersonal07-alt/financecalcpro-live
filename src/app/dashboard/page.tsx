import { redirect } from 'next/navigation';

export default function DashboardPage() {
  // Since authentication is removed, redirect users to the calculators page
  redirect('/calculators');
}
