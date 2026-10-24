'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log client error to console
    console.error('App error caught by error boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-rose-50/40 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-2xl border border-rose-200 shadow-lg shadow-rose-900/5 p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-rose-500 to-rose-600" />
        
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-700 shadow-inner">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Something went wrong</h2>
        <p className="text-sm text-neutral-600 mb-6">
          An unexpected issue occurred while rendering the examination paper. You can try reloading the section.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-medium text-sm shadow-md hover:from-rose-700 hover:to-red-700 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-rose-200 bg-rose-50/50 hover:bg-rose-100/60 text-rose-900 font-medium text-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
