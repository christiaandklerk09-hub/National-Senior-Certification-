'use client';

import React from 'react';
import { Bookmark, CheckCircle2, Circle } from 'lucide-react';
import { Question } from '@/types/quiz';

interface QuestionPaletteProps {
  questions: Question[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  selectedAnswers: Record<string, number | string>;
  flaggedIds: string[];
}

export function QuestionPalette({
  questions,
  currentIndex,
  onSelectIndex,
  selectedAnswers,
  flaggedIds,
}: QuestionPaletteProps) {
  const answeredCount = questions.filter(q => selectedAnswers[q.id] !== undefined).length;
  const flaggedCount = flaggedIds.length;
  const totalMarks = questions.reduce((acc, q) => acc + q.marks, 0);

  return (
    <div className="bg-white rounded-2xl border border-rose-200/90 shadow-xs p-4 sm:p-5 space-y-4">
      {/* Palette Header */}
      <div className="flex items-center justify-between border-b border-rose-100 pb-3">
        <div>
          <h3 className="font-bold text-gray-900 text-sm">
            Question Palette
          </h3>
          <p className="text-xs text-gray-500">
            {answeredCount} of {questions.length} answered ({totalMarks} Total Marks)
          </p>
        </div>

        <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
          {Math.round((answeredCount / questions.length) * 100)}% Complete
        </span>
      </div>

      {/* Grid of Questions */}
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-2">
        {questions.map((q, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered = selectedAnswers[q.id] !== undefined && String(selectedAnswers[q.id]).trim().length > 0;
          const isFlagged = flaggedIds.includes(q.id);

          let buttonStyle = "bg-rose-50/50 border-rose-200 text-gray-700 hover:bg-rose-100/70";
          if (isAnswered) {
            buttonStyle = "bg-emerald-50 border-emerald-300 text-emerald-800 font-bold";
          }
          if (isFlagged) {
            buttonStyle = "bg-amber-50 border-amber-300 text-amber-800 font-bold";
          }
          if (isCurrent) {
            buttonStyle = "bg-rose-600 border-rose-600 text-white font-extrabold shadow-xs shadow-rose-200";
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectIndex(idx)}
              className={`relative p-2 rounded-xl border text-xs flex flex-col items-center justify-center transition-all ${buttonStyle}`}
              title={`${q.numberStr} - ${q.topic} (${q.marks} Marks)`}
            >
              {isFlagged && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white"></span>
              )}
              <span className="font-mono text-[11px] leading-tight">
                {q.numberStr.replace('QUESTION ', 'Q')}
              </span>
              <span className={`text-[10px] mt-0.5 ${isCurrent ? 'text-rose-100' : 'text-gray-400'}`}>
                {q.marks}m
              </span>
            </button>
          );
        })}
      </div>

      {/* Legend with light red accents */}
      <div className="pt-2 border-t border-rose-100/80 flex flex-wrap items-center gap-3 text-[11px] text-gray-500">
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
          <span>Current</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span>Answered</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <span>Flagged</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-100 border border-rose-300"></span>
          <span>Unanswered</span>
        </div>
      </div>
    </div>
  );
}
