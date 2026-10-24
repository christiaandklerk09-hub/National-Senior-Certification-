'use client';

import React from 'react';
import { 
  BookOpen, 
  Clock, 
  FileText, 
  Edit3, 
  Award, 
  RotateCcw,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { ExamPaper } from '@/types/quiz';

interface NavbarProps {
  exam: ExamPaper;
  timeRemainingSeconds: number;
  isStudyMode: boolean;
  onToggleStudyMode: () => void;
  onOpenFormulaSheet: () => void;
  onOpenScratchpad: () => void;
  onFinishExam: () => void;
  onResetExam: () => void;
  answeredCount: number;
  totalQuestions: number;
  isCompleted: boolean;
}

export function Navbar({
  exam,
  timeRemainingSeconds,
  isStudyMode,
  onToggleStudyMode,
  onOpenFormulaSheet,
  onOpenScratchpad,
  onFinishExam,
  onResetExam,
  answeredCount,
  totalQuestions,
  isCompleted
}: NavbarProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime = !isStudyMode && timeRemainingSeconds < 300 && timeRemainingSeconds > 0;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-200/80 shadow-xs">
      {/* South African DBE Light Red Official Top Ribbon */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-red-500 text-white px-4 py-1 text-xs font-medium flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="bg-white/20 px-2 py-0.5 rounded-sm font-semibold tracking-wider text-[11px] uppercase">
            DBE NSC 2024
          </span>
          <span className="hidden sm:inline text-rose-100">
            Department of Basic Education • Republic of South Africa
          </span>
        </div>
        <div className="flex items-center space-x-3 text-[11px]">
          <span className="bg-rose-700/60 px-2 py-0.5 rounded text-rose-100 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Past Paper Practice
          </span>
          <span className="font-semibold text-rose-50">Total: {exam.totalMarks} Marks</span>
        </div>
      </div>

      {/* Main App Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand & Subject Title with Light Red Accents */}
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white shadow-sm shadow-rose-200">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-gray-900 text-base sm:text-lg truncate">
                Apex Papers
              </h1>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200">
                Grade 12
              </span>
            </div>
            <p className="text-xs text-rose-700/90 font-medium truncate">
              {exam.title}
            </p>
          </div>
        </div>

        {/* Action Controls & Utilities */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Study Mode vs Timed Exam Toggle */}
          {!isCompleted && (
            <button
              onClick={onToggleStudyMode}
              className={`text-xs px-2.5 py-1.5 rounded-lg font-medium border transition-colors flex items-center gap-1.5 ${
                isStudyMode 
                  ? 'bg-rose-50 text-rose-700 border-rose-300 hover:bg-rose-100'
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
              }`}
              title="Toggle between Study Mode (instant marking guide) and Exam Mode (strict countdown)"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span className="hidden md:inline">{isStudyMode ? 'Study Mode' : 'Exam Mode'}</span>
            </button>
          )}

          {/* Timer Widget */}
          {!isStudyMode && !isCompleted && (
            <div className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold num-tabular ${
              isLowTime 
                ? 'bg-red-50 text-red-600 border-red-300 animate-pulse'
                : 'bg-rose-50 text-rose-800 border-rose-200'
            }`}>
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              <span>{formatTime(timeRemainingSeconds)}</span>
            </div>
          )}

          {/* Quick Formula Sheet Button */}
          <button
            onClick={onOpenFormulaSheet}
            className="text-xs px-2.5 py-1.5 rounded-lg font-medium bg-white text-gray-700 border border-gray-200 hover:border-rose-300 hover:bg-rose-50/50 hover:text-rose-700 transition-colors flex items-center gap-1.5 shadow-2xs"
            title="Open official DBE formula sheet"
          >
            <FileText className="w-3.5 h-3.5 text-rose-500" />
            <span className="hidden sm:inline">Formulas</span>
          </button>

          {/* Scratchpad Button */}
          <button
            onClick={onOpenScratchpad}
            className="text-xs px-2.5 py-1.5 rounded-lg font-medium bg-white text-gray-700 border border-gray-200 hover:border-rose-300 hover:bg-rose-50/50 hover:text-rose-700 transition-colors flex items-center gap-1.5 shadow-2xs"
            title="Open digital exam working sheet with light-red margin rule"
          >
            <Edit3 className="w-3.5 h-3.5 text-rose-500" />
            <span className="hidden sm:inline">Working Pad</span>
          </button>

          {/* Finish or Reset Exam */}
          {!isCompleted ? (
            <button
              onClick={onFinishExam}
              className="text-xs px-3.5 py-1.5 rounded-lg font-semibold bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white shadow-xs shadow-rose-200 flex items-center gap-1.5 transition-all"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Submit Exam ({answeredCount}/{totalQuestions})</span>
            </button>
          ) : (
            <button
              onClick={onResetExam}
              className="text-xs px-3 py-1.5 rounded-lg font-medium bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Paper</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
