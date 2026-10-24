'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  BookOpen, 
  ChevronDown, 
  ChevronUp,
  Send
} from 'lucide-react';
import { Question } from '@/types/quiz';
import { evaluateQualitativeLocally, QualitativeEvaluation } from '@/lib/questionUtils';

interface QualitativeAnswerStudioProps {
  question: Question;
  userAnswer?: string | number;
  onAnswerChange: (questionId: string, answer: string) => void;
  isStudyMode: boolean;
  showSolution: boolean;
  onToggleSolution: (questionId: string) => void;
}

export function QualitativeAnswerStudio({
  question,
  userAnswer,
  onAnswerChange,
  isStudyMode,
  showSolution,
  onToggleSolution,
}: QualitativeAnswerStudioProps) {
  const [textInput, setTextInput] = useState<string>(
    userAnswer !== undefined ? String(userAnswer) : ''
  );
  const [isGrading, setIsGrading] = useState(false);
  const [evaluation, setEvaluation] = useState<QualitativeEvaluation | null>(null);
  const [isModelAnswerOpen, setIsModelAnswerOpen] = useState(false);

  // Sync state if question or external answer changes
  useEffect(() => {
    setTextInput(userAnswer !== undefined ? String(userAnswer) : '');
    setEvaluation(null);
    setIsModelAnswerOpen(false);
  }, [question.id, userAnswer]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setTextInput(val);
    if (evaluation) {
      setEvaluation(null);
    }
  };

  const handleRecordAnswer = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!textInput.trim()) return;
    onAnswerChange(question.id, textInput.trim());
  };

  const handleEvaluate = async () => {
    if (!textInput.trim() || isGrading) return;
    setIsGrading(true);
    onAnswerChange(question.id, textInput.trim());

    try {
      const res = await fetch('/api/evaluate-qualitative', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionPrompt: question.prompt,
          scenario: question.scenario,
          studentAnswer: textInput.trim(),
          marks: question.marks,
          modelAnswer: question.qualitativeRubric?.modelAnswer || question.fullSolutionExplanation,
          keyPoints: question.qualitativeRubric?.keyPoints || [],
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const data: QualitativeEvaluation = await res.json();
      setEvaluation(data);
    } catch (err) {
      console.warn('Network evaluation error, evaluating via local DBE rubric:', err);
      const localEval = evaluateQualitativeLocally(textInput, question);
      setEvaluation(localEval);
    } finally {
      setIsGrading(false);
    }
  };

  const handleClear = () => {
    setTextInput('');
    setEvaluation(null);
    onAnswerChange(question.id, '');
  };

  const maxMarks = question.marks || 2;
  const isAnswerRecorded = userAnswer !== undefined && String(userAnswer).trim().length > 0;

  return (
    <div className="space-y-4 rounded-2xl bg-white border border-rose-200/90 p-4 sm:p-5 shadow-xs transition-all">
      {/* Qualitative Studio Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-rose-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-rose-900">
              <span>Descriptive &amp; Conceptual Response Studio</span>
              <span className="text-gray-300">·</span>
              <span className="text-rose-600 font-semibold">{maxMarks} Marks Available</span>
            </div>
            <p className="text-[11px] text-gray-500">
              Formulate your written explanation, reasoning, or list of identified items.
            </p>
          </div>
        </div>

        {/* Clear Action */}
        {textInput && (
          <button
            type="button"
            onClick={handleClear}
            className="text-xs text-gray-400 hover:text-rose-600 font-medium transition-colors flex items-center gap-1 cursor-pointer"
            title="Clear current text"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Clear</span>
          </button>
        )}
      </div>

      {/* Main Textarea Input */}
      <div className="space-y-2">
        <div className="relative">
          <textarea
            rows={4}
            value={textInput}
            onChange={handleTextChange}
            placeholder="Type your explanation, state key reasons, or list items here in full sentences..."
            className="w-full p-3.5 rounded-xl border border-rose-200/90 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-rose-50/20 leading-relaxed resize-y transition-all"
            disabled={isGrading}
          />
        </div>

        {/* Bottom Bar: Character Count & Guidelines */}
        <div className="flex items-center justify-between text-[11px] text-gray-500 px-1">
          <span>
            {textInput.trim().length} characters
            {textInput.trim().length > 0 && ` (approx. ${textInput.trim().split(/\s+/).length} words)`}
          </span>
          <span className="text-rose-700/80 font-medium hidden sm:inline">
            Official DBE standard: state clear facts, reasons, or comparisons.
          </span>
        </div>
      </div>

      {/* Action Buttons: Record & Evaluate */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
        <button
          type="button"
          onClick={handleRecordAnswer}
          disabled={!textInput.trim()}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all flex items-center justify-center gap-1.5 ${
            isAnswerRecorded
              ? 'bg-rose-50 text-rose-800 border-rose-300'
              : 'bg-white text-gray-700 border-gray-300 hover:border-rose-300 hover:text-rose-700'
          } disabled:opacity-40 disabled:cursor-not-allowed`}
        >
          <Send className="w-3.5 h-3.5" />
          <span>{isAnswerRecorded ? 'Answer Saved in Exam' : 'Save Answer'}</span>
        </button>

        <button
          type="button"
          onClick={handleEvaluate}
          disabled={!textInput.trim() || isGrading}
          className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-rose-600 via-rose-500 to-red-500 hover:from-rose-700 hover:to-red-600 text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGrading ? (
            <>
              <span className="w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin"></span>
              <span>Evaluating against DBE Rubric...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-rose-200" />
              <span>Grade Written Response</span>
            </>
          )}
        </button>
      </div>

      {/* Revealed Evaluation Feedback Panel */}
      {evaluation && (
        <div className={`p-4 rounded-xl border transition-all text-xs sm:text-sm space-y-3 ${
          evaluation.isAcceptable
            ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
            : evaluation.marksAwarded > 0
            ? 'bg-amber-50/70 border-amber-300 text-amber-950'
            : 'bg-rose-50/70 border-rose-300 text-rose-950'
        }`}>
          {/* Top evaluation score bar */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-bold">
              {evaluation.isAcceptable ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : evaluation.marksAwarded > 0 ? (
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
              )}
              <span>
                {evaluation.isAcceptable
                  ? 'Criteria Satisfied'
                  : evaluation.marksAwarded > 0
                  ? 'Partially Correct'
                  : 'Needs Revision'}
              </span>
            </div>

            <span className={`px-2.5 py-0.5 rounded-lg text-xs font-black shadow-2xs ${
              evaluation.marksAwarded === maxMarks
                ? 'bg-emerald-600 text-white'
                : evaluation.marksAwarded > 0
                ? 'bg-amber-600 text-white'
                : 'bg-rose-600 text-white'
            }`}>
              {evaluation.marksAwarded} / {maxMarks} Marks
            </span>
          </div>

          {/* Feedback description */}
          <p className="leading-relaxed font-medium">
            {evaluation.feedback}
          </p>

          {/* Key Rubric Points Status */}
          {evaluation.matchedKeyPoints.length > 0 && (
            <div className="space-y-1 pt-1 text-xs">
              <span className="font-bold block text-emerald-800">
                ✓ Points Awarded:
              </span>
              <ul className="list-disc list-inside space-y-0.5 text-emerald-900">
                {evaluation.matchedKeyPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          )}

          {evaluation.missingKeyPoints.length > 0 && (
            <div className="space-y-1 pt-1 text-xs">
              <span className="font-bold block text-rose-800">
                Missing Syllabus Points to Consider:
              </span>
              <ul className="list-disc list-inside space-y-0.5 text-rose-900">
                {evaluation.missingKeyPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* DBE Official Memorandum Accordion Drawer */}
      {(isStudyMode || showSolution || evaluation !== null) && (
        <div className="pt-2 border-t border-rose-100">
          <button
            type="button"
            onClick={() => setIsModelAnswerOpen(!isModelAnswerOpen)}
            className="w-full flex items-center justify-between text-xs font-bold text-rose-800 hover:text-rose-950 py-1.5 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-rose-600" />
              <span>Official DBE Memorandum &amp; Model Answer</span>
            </div>
            {isModelAnswerOpen ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>

          {isModelAnswerOpen && (
            <div className="mt-2 p-3.5 rounded-xl bg-rose-50/40 border border-rose-200/80 text-xs sm:text-sm text-gray-800 space-y-2 leading-relaxed animate-in fade-in duration-200">
              <div className="font-bold text-rose-900 flex items-center gap-1.5">
                <span>Model Answer / Key Points:</span>
              </div>
              <p className="whitespace-pre-line font-medium text-gray-900">
                {question.qualitativeRubric?.modelAnswer || question.fullSolutionExplanation}
              </p>

              {question.qualitativeRubric?.keyPoints && question.qualitativeRubric.keyPoints.length > 0 && (
                <div className="pt-2 border-t border-rose-100 text-xs">
                  <span className="font-bold text-rose-900 block mb-1">Mark Allocation Criteria:</span>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {question.qualitativeRubric.keyPoints.map((kp, idx) => (
                      <li key={idx}>{kp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
