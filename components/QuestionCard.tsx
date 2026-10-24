'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Bookmark, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  Lightbulb,
  ExternalLink
} from 'lucide-react';
import { Question } from '@/types/quiz';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  userAnswer?: string | number;
  onAnswerChange: (questionId: string, answer: string | number) => void;
  isFlagged: boolean;
  onToggleFlag: (questionId: string) => void;
  isStudyMode: boolean;
  showSolution: boolean;
  onToggleSolution: (questionId: string) => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  onJumpToAnnexure?: (annexureId: string) => void;
}

export function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  userAnswer,
  onAnswerChange,
  isFlagged,
  onToggleFlag,
  isStudyMode,
  showSolution,
  onToggleSolution,
  onNextQuestion,
  onPrevQuestion,
  onJumpToAnnexure,
}: QuestionCardProps) {
  const [numericInputValue, setNumericInputValue] = useState<string>(
    userAnswer !== undefined ? String(userAnswer) : ''
  );
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiTutorHint, setAiTutorHint] = useState<string | null>(null);

  // State is reset cleanly per question when keyed by question.id in parent

  const handleNumericSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const parsed = parseFloat(numericInputValue.replace(/[^0-9.-]/g, ''));
    if (!isNaN(parsed)) {
      onAnswerChange(question.id, parsed);
    }
  };

  const isNumericCorrect = () => {
    if (userAnswer === undefined || question.correctNumericAnswer === undefined) return null;
    const userNum = Number(userAnswer);
    const target = question.correctNumericAnswer;
    const tolerance = question.numericTolerance || 0.1;
    return Math.abs(userNum - target) <= tolerance;
  };

  const isMcqCorrect = () => {
    if (userAnswer === undefined || question.correctOptionIndex === undefined) return null;
    return Number(userAnswer) === question.correctOptionIndex;
  };

  const isCorrect = question.type === 'mcq' ? isMcqCorrect() : isNumericCorrect();

  // Request AI tutor hint
  const handleAskAiTutor = async () => {
    setIsAiLoading(true);
    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionPrompt: question.prompt,
          scenario: question.scenario,
          userWorking: numericInputValue,
          topic: question.topic,
        }),
      });
      const data = await res.json();
      setAiTutorHint(data.text);
    } catch {
      setAiTutorHint('Remember to verify the unit of measurement and apply the official annexure formula.');
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-rose-200/90 shadow-xs overflow-hidden flex flex-col transition-all">
      {/* Question Header Bar with Signature Light Red Highlights */}
      <div className="bg-gradient-to-r from-rose-50/70 via-white to-rose-50/40 p-4 sm:p-5 border-b border-rose-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5">
          <span className="font-extrabold text-sm sm:text-base text-rose-800 bg-rose-100/80 px-2.5 py-1 rounded-lg border border-rose-200">
            {question.numberStr}
          </span>
          <span className="text-xs text-gray-500 font-medium">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Marks allocation badge in light red */}
          <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200 shadow-2xs">
            [{question.marks} MARKS]
          </span>

          {/* Flag question button */}
          <button
            onClick={() => onToggleFlag(question.id)}
            className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 transition-colors ${
              isFlagged 
                ? 'bg-amber-50 text-amber-700 border-amber-300' 
                : 'bg-white text-gray-500 border-gray-200 hover:border-rose-200 hover:text-rose-600'
            }`}
            title="Flag question to review before submitting"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span className="hidden sm:inline">{isFlagged ? 'Flagged' : 'Flag'}</span>
          </button>
        </div>
      </div>

      {/* Topic and Subtopic tags */}
      <div className="px-5 pt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="font-semibold text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200/80">
          📌 {question.topic}
        </span>
        <span className="text-gray-500 font-medium">
          • {question.subtopic}
        </span>
        {question.annexureId && onJumpToAnnexure && (
          <button
            onClick={() => onJumpToAnnexure(question.annexureId!)}
            className="ml-auto text-xs font-semibold text-rose-600 hover:text-rose-800 hover:underline flex items-center gap-1"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Refer to {question.annexureId.toUpperCase()}</span>
          </button>
        )}
      </div>

      {/* Scenario Context Box with light red left border */}
      <div className="p-5 space-y-4">
        {question.scenario && (
          <div className="bg-rose-50/40 p-4 rounded-xl border-l-4 border-rose-500 border-y border-r border-rose-100/80 text-xs sm:text-sm text-gray-800 leading-relaxed">
            <span className="font-bold text-rose-900 block mb-1">
              Examination Context / Scenario:
            </span>
            <p className="whitespace-pre-line">{question.scenario}</p>
          </div>
        )}

        {/* Question Prompt */}
        <div className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed">
          {question.prompt}
        </div>

        {/* Input Interface based on Question Type */}
        <div className="pt-2">
          {question.type === 'mcq' && question.options ? (
            <div className="space-y-2.5">
              {question.options.map((option, idx) => {
                const isSelected = userAnswer !== undefined && Number(userAnswer) === idx;
                const isCorrectOption = idx === question.correctOptionIndex;
                const showFeedback = (isStudyMode && userAnswer !== undefined) || showSolution;

                let cardStyle = "border-gray-200 hover:border-rose-300 hover:bg-rose-50/30";
                if (isSelected) {
                  cardStyle = "border-rose-500 bg-rose-50/50 text-rose-950 font-medium shadow-2xs";
                }
                if (showFeedback) {
                  if (isCorrectOption) {
                    cardStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-medium";
                  } else if (isSelected && !isCorrectOption) {
                    cardStyle = "border-red-500 bg-red-50 text-red-950";
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onAnswerChange(question.id, idx)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${cardStyle}`}
                  >
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                      isSelected 
                        ? 'bg-rose-600 border-rose-600 text-white' 
                        : 'border-gray-300 text-gray-600 bg-white'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-snug">{option}</span>
                    {showFeedback && isCorrectOption && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {showFeedback && isSelected && !isCorrectOption && (
                      <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          ) : (
            /* Numeric / Working Answer Input */
            <form onSubmit={handleNumericSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={numericInputValue}
                    onChange={(e) => setNumericInputValue(e.target.value)}
                    placeholder="Enter your final calculated value..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 num-tabular"
                  />
                  {question.unit && (
                    <span className="absolute right-3 top-2.5 text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                      {question.unit}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white shadow-xs transition-colors shrink-0"
                >
                  Record Answer
                </button>
              </div>

              {/* Instant feedback badge in study mode */}
              {isStudyMode && userAnswer !== undefined && isNumericCorrect() !== null && (
                <div className={`p-3 rounded-xl border flex items-center justify-between text-xs font-medium ${
                  isNumericCorrect() 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}>
                  <div className="flex items-center gap-2">
                    {isNumericCorrect() ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                    <span>
                      {isNumericCorrect() 
                        ? `Correct! Answer: ${question.correctNumericAnswer} ${question.unit || ''}`
                        : `Your answer (${userAnswer}) differs from target. Check your steps below.`}
                    </span>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>

        {/* AI Tutor Hint & Examiner Guidance Section */}
        <div className="pt-2 border-t border-rose-100 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleAskAiTutor}
              disabled={isAiLoading}
              className="text-xs px-3 py-1.5 rounded-lg font-medium bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>{isAiLoading ? 'Analyzing...' : 'Ask AI Examiner Hint'}</span>
            </button>

            {/* In study mode or when submitted, toggle solution memorandum */}
            <button
              onClick={() => onToggleSolution(question.id)}
              className="text-xs px-3 py-1.5 rounded-lg font-medium text-gray-700 hover:text-rose-700 hover:bg-rose-50 transition-colors flex items-center gap-1"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-rose-500" />
              <span>{showSolution ? 'Hide DBE Marking Scheme' : 'View DBE Marking Scheme'}</span>
              {showSolution ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          <span className="text-[11px] text-gray-500">
            {question.hint && `Hint available in Study Mode`}
          </span>
        </div>

        {/* AI Tutor Hint Display */}
        {aiTutorHint && (
          <div className="p-3.5 bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl border border-rose-200 text-xs text-rose-950 space-y-1 animate-in fade-in">
            <div className="font-bold flex items-center gap-1.5 text-rose-800">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Examiner Feedback & Guidance:</span>
            </div>
            <p className="whitespace-pre-line text-gray-700 pl-5">{aiTutorHint}</p>
          </div>
        )}

        {/* DBE Official Marking Guideline Breakdown (Memorandum) */}
        {showSolution && (
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-rose-200 space-y-3 animate-in fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-rose-600" />
                Official DBE Memorandum & Mark Allocation:
              </span>
              <span className="text-[11px] font-semibold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                Total: {question.marks} Marks
              </span>
            </div>

            {/* Explanation text */}
            <div className="bg-white p-3 rounded-lg border border-rose-100 text-xs font-mono text-gray-800 whitespace-pre-line leading-relaxed">
              {question.fullSolutionExplanation}
            </div>

            {/* Marking Table with Authentic Red Marks */}
            <div className="overflow-x-auto rounded-lg border border-rose-200">
              <table className="w-full text-left text-xs bg-white">
                <thead className="bg-rose-100/60 text-rose-900 font-bold border-b border-rose-200">
                  <tr>
                    <th className="px-3 py-2">Step</th>
                    <th className="px-3 py-2">DBE Working & Explanation</th>
                    <th className="px-3 py-2">Mark Code</th>
                    <th className="px-3 py-2 text-right">Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-100">
                  {question.markingGuide.map((step, sIdx) => (
                    <tr key={sIdx} className="hover:bg-rose-50/30">
                      <td className="px-3 py-2 font-bold text-gray-600">
                        {step.stepNumber}
                      </td>
                      <td className="px-3 py-2 text-gray-800">
                        <span className="font-semibold block">{step.description}</span>
                        <code className="text-rose-700 font-mono text-[11px]">{step.working}</code>
                      </td>
                      <td className="px-3 py-2">
                        <span className="font-bold text-white bg-rose-600 px-1.5 py-0.5 rounded text-[10px]" title={
                          step.markCode === 'M' ? 'Method Mark' :
                          step.markCode === 'A' ? 'Accuracy Mark' :
                          step.markCode === 'CA' ? 'Consistent Accuracy' :
                          step.markCode === 'MA' ? 'Method with Accuracy' : 'Step mark'
                        }>
                          {step.markCode}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-right font-bold text-gray-900">
                        {step.markValue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <button
          onClick={onPrevQuestion}
          disabled={questionIndex === 0}
          className="px-3 py-2 rounded-xl text-xs font-medium text-gray-700 border border-gray-200 bg-white hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous Question</span>
        </button>

        <button
          onClick={onNextQuestion}
          disabled={questionIndex === totalQuestions - 1}
          className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white shadow-2xs disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1.5"
        >
          <span>Next Question</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
