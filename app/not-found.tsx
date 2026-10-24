import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowLeft, Home, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-rose-50/40 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-2xl border border-rose-200/80 shadow-lg shadow-rose-900/5 p-8 relative overflow-hidden">
        {/* Exam paper red header accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-600 via-rose-500 to-red-600" />
        
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-700 shadow-inner">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>DBE NSC Exam Practice</span>
        </div>

        <h1 className="text-3xl font-black text-neutral-900 tracking-tight mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-neutral-600 mb-6">
          The requested exam section or question could not be located in the current National Senior Certificate syllabus.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-medium text-sm shadow-md shadow-rose-600/20 transition-all hover:shadow-lg active:scale-[0.98]"
        >
          <Home className="w-4 h-4" />
          <span>Return to Exam Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
