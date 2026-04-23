import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <AlertCircle className="w-16 h-16 text-orange-600" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It might have been removed or the URL might be incorrect.
        </p>
        
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/demo"
            className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-900 font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
