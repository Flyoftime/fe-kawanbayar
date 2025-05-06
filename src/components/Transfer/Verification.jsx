'use client';
import { useRouter } from 'next/navigation';
import { Fingerprint } from 'lucide-react';

export default function VerificationPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <Fingerprint className="h-20 w-20 text-purple-600 mb-6" />
      <p className="mb-8 text-center text-gray-700">Use Fingerprint or Face ID to verify</p>
      <button onClick={() => router.push('/success')} className="py-3 px-6 bg-purple-600 text-white rounded-lg">Confirm</button>
    </div>
  );
}
