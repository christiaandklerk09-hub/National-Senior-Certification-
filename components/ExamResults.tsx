'use client';

import React from 'react';
import { 
  Award, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  FileText, 
  Clock, 
  Percent, 
  TrendingUp,
  BookmarkCheck,
  ChevronRight
} from 'lucide-react';
import { ExamPaper, Question } from '@/types/quiz';
import { isQualitativeQuestion, evaluateQualitativeLocally } from '@/lib/questionUtils';

interface ExamResultsProps {
  exam: ExamPaper;
  selectedAnswers: Record<string, number | string>;
  timeSpentSeconds: number;
  onRetry: () => void;
  onReviewQuestion: (index: number) => void;
}

export function ExamResults({
  exam,
  selectedAnswers,
  timeSpentSeconds,
  onRetry,
  onReviewQuestion,
}: ExamResultsProps) {
  // Calculate total marks achieved
  let earnedMarks = 0;
  const topicStats: Record<string, { total: number; earned: number }> = {};

  exam.questions.forEach((q) => {
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, earned: 0 };
    }
    topicStats[q.topic].total += q.marks;

    const answer = selectedAnswers[q.id];
    let questionAwarded = 0;

    if (q.type === 'mcq' && q.correctOptionIndex !== undefined) {
      if (answer !== undefined && Number(answer) === q.correctOptionIndex) {
        questionAwarded = q.marks;
      }
    } else if (isQualitativeQuestion(q)) {
      if (answer !== undefined && String(answer).trim().length > 0) {
        const evalResult = evaluateQualitativeLocally(String(answer), q);
        questionAwarded = evalResult.marksAwarded;
      }
    } else if (q.correctNumericAnswer !== undefined) {
      if (answer !== undefined) {
        const diff = Math.abs(Number(answer) - q.correctNumericAnswer);
        const tol = q.numericTolerance || 0.1;
        if (diff <= tol) {
          questionAwarded = q.marks;
        }
      }
    }

    earnedMarks += questionAwarded;
    topicStats[q.topic].earned += questionAwarded;
  });

  const percentage = Math.round((earnedMarks / exam.totalMarks) * 100);

  // South African DBE NSC Achievement Levels
  const getDbeLevel = (pct: number) => {
    if (pct >= 80) return { level: 7, desc: 'Outstanding Achievement (Distinction)', color: 'text-rose-700 bg-rose-50 border-rose-300' };
    if (pct >= 70) return { level: 6, desc: 'Meritorious Achievement', color: 'text-emerald-700 bg-emerald-50 border-emerald-300' };
    if (pct >= 60) return { level: 5, desc: 'Substantial Achievement', color: 'text-blue-700 bg-blue-50 border-blue-300' };
    if (pct >= 50) return { level: 4, desc: 'Adequate Achievement', color: 'text-amber-700 bg-amber-50 border-amber-300' };
    if (pct >= 40) return { level: 3, desc: 'Moderate Achievement', color: 'text-orange-700 bg-orange-50 border-orange-300' };
    if (pct >= 30) return { level: 2, desc: 'Elementary Achievement', color: 'text-red-700 bg-red-50 border-red-300' };
    return { level: 1, desc: 'Not Achieved', color: 'text-gray-700 bg-gray-50 border-gray-300' };
  };

  const dbeLevel = getDbeLevel(percentage);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}m ${rem}s`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Hero Achievement Card in Signature Light Red Styling */}
      <div className="bg-gradient-to-br from-rose-500 via-rose-600 to-red-600 rounded-3xl text-white p-6 sm:p-8 shadow-lg shadow-rose-200 relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
        <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-black/10 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-wider uppercase backdrop-blur-xs">
              NSC DBE Examination Report
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {percentage >= 50 ? 'Examination Completed Successfully!' : 'Paper Complete - Review Your Steps'}
            </h2>
            <p className="text-rose-100 text-xs sm:text-sm max-w-lg">
              Official South African National Senior Certificate Mathematical Literacy evaluation.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shrink-0">
            <span className="text-3xl sm:text-4xl font-black tracking-tight num-tabular">
              {percentage}%
            </span>
            <span className="text-xs font-semibold text-rose-100 mt-1">
              {earnedMarks} / {exam.totalMarks} Marks
            </span>
          </div>
        </div>

        {/* Matric Achievement Level Strip */}
        <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-amber-300" />
            <span className="font-bold">
              NSC Level {dbeLevel.level}: {dbeLevel.desc}
            </span>
          </div>

          <div className="flex items-center space-x-4 text-rose-100 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Time Spent: {formatTime(timeSpentSeconds)}
            </span>
            <span className="flex items-center gap-1">
              <BookmarkCheck className="w-3.5 h-3.5" />
              {Object.keys(selectedAnswers).length}/{exam.questions.length} Attempted
            </span>
          </div>
        </div>
      </div>

      {/* Topic Performance Analysis */}
      <div className="bg-white rounded-2xl border border-rose-200/90 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-rose-600" />
            Curriculum Topic Performance Breakdown
          </h3>
          <span className="text-xs text-rose-700 font-semibold bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
            DBE Diagnostic
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(topicStats).map(([topic, stats], idx) => {
            const topicPct = Math.round((stats.earned / stats.total) * 100);
            return (
              <div 
                key={idx}
                className="p-3.5 rounded-xl border border-rose-100 bg-rose-50/20 space-y-2 hover:border-rose-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 text-xs">
                  <span className="font-bold text-gray-800 leading-snug">
                    {topic}
                  </span>
                  <span className="font-bold text-rose-700 shrink-0 num-tabular">
                    {stats.earned}/{stats.total}m ({topicPct}%)
                  </span>
                </div>
                <div className="w-full bg-rose-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-rose-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${topicPct}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question by Question Detailed Review */}
      <div className="bg-white rounded-2xl border border-rose-200/90 shadow-xs p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <FileText className="w-4 h-4 text-rose-600" />
            Item-by-Item Marking Review
          </h3>
          <span className="text-xs text-gray-500">
            Click any question to view its detailed memorandum
          </span>
        </div>

        <div className="divide-y divide-rose-100">
          {exam.questions.map((q, idx) => {
            const answer = selectedAnswers[q.id];
            let isCorrect = false;
            let earned = 0;

            if (q.type === 'mcq' && q.correctOptionIndex !== undefined) {
              isCorrect = answer !== undefined && Number(answer) === q.correctOptionIndex;
              earned = isCorrect ? q.marks : 0;
            } else if (isQualitativeQuestion(q)) {
              if (answer !== undefined && String(answer).trim().length > 0) {
                const evalResult = evaluateQualitativeLocally(String(answer), q);
                earned = evalResult.marksAwarded;
                isCorrect = evalResult.isAcceptable;
              }
            } else if (q.correctNumericAnswer !== undefined) {
              if (answer !== undefined) {
                isCorrect = Math.abs(Number(answer) - q.correctNumericAnswer) <= (q.numericTolerance || 0.1);
                earned = isCorrect ? q.marks : 0;
              }
            }

            return (
              <div
                key={q.id}
                onClick={() => onReviewQuestion(idx)}
                className="py-3 flex items-center justify-between gap-3 hover:bg-rose-50/40 px-2 rounded-xl cursor-pointer transition-colors"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isCorrect ? 'bg-emerald-100 text-emerald-700' : earned > 0 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
                  }`}>
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-gray-900">
                        {q.numberStr}
                      </span>
                      <span className="text-[11px] text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                        {q.type === 'mcq' ? 'MCQ' : isQualitativeQuestion(q) ? 'Conceptual' : 'Calculation'} · {q.marks} Marks
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 truncate mt-0.5">
                      {q.prompt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <span className={`text-xs font-bold ${isCorrect ? 'text-emerald-700' : earned > 0 ? 'text-amber-700' : 'text-rose-700'}`}>
                    {earned > 0 ? `+${earned}/${q.marks}m` : `0/${q.marks}m`}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 pb-8">
        <button
          onClick={onRetry}
          className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake This Exam Paper</span>
        </button>
      </div>
    </div>
  );
}
