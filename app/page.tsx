'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { TopicSelector } from '@/components/TopicSelector';
import { QuestionCard } from '@/components/QuestionCard';
import { QuestionPalette } from '@/components/QuestionPalette';
import { AnnexureViewer } from '@/components/AnnexureViewer';
import { FormulaSheetModal } from '@/components/FormulaSheetModal';
import { ScratchpadModal } from '@/components/ScratchpadModal';
import { ExamResults } from '@/components/ExamResults';
import { MATH_LIT_P1_EXAM, getExamForSubject, ALL_EXAM_PAPERS } from '@/lib/exam-data';
import { ExamPaper, SubjectId } from '@/types/quiz';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<'home' | 'exam' | 'results'>('home');
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('math-lit-p1');
  const [exam, setExam] = useState<ExamPaper>(MATH_LIT_P1_EXAM);

  // Exam state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | string>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [isStudyMode, setIsStudyMode] = useState(true); // Default to study mode for comfortable practice
  const [showSolutions, setShowSolutions] = useState<Record<string, boolean>>({});
  const [scratchpadNotes, setScratchpadNotes] = useState('');
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(60 * 60);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState(0);

  // Modals state
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);
  const [isScratchpadModalOpen, setIsScratchpadModalOpen] = useState(false);
  const [activeAnnexureId, setActiveAnnexureId] = useState<string | undefined>(undefined);

  const handleFinishExam = React.useCallback(() => {
    // Show all solutions in review
    const allSolutions: Record<string, boolean> = {};
    exam.questions.forEach(q => {
      allSolutions[q.id] = true;
    });
    setShowSolutions(allSolutions);
    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [exam.questions]);

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (currentView === 'exam' && !isStudyMode && timeRemainingSeconds > 0) {
      timer = setInterval(() => {
        setTimeRemainingSeconds(prev => {
          if (prev <= 1) {
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
        setTimeSpentSeconds(prev => prev + 1);
      }, 1000);
    } else if (currentView === 'exam') {
      timer = setInterval(() => {
        setTimeSpentSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [currentView, isStudyMode, timeRemainingSeconds, handleFinishExam]);

  // Handle subject change from TopicSelector
  const handleSelectSubject = (id: SubjectId) => {
    setSelectedSubjectId(id);
    const newExam = getExamForSubject(id);
    setExam(newExam);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setFlaggedIds([]);
    setShowSolutions({});
    setTimeRemainingSeconds(newExam.timeLimitMinutes * 60);
    setTimeSpentSeconds(0);
    setActiveAnnexureId(newExam.annexures[0]?.id);
  };

  const handleSelectPaper = (paperId: string) => {
    const target = ALL_EXAM_PAPERS.find(p => p.id === paperId);
    if (target) {
      setSelectedSubjectId(target.subjectId);
      setExam(target);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setFlaggedIds([]);
      setShowSolutions({});
      setTimeRemainingSeconds(target.timeLimitMinutes * 60);
      setTimeSpentSeconds(0);
      setActiveAnnexureId(target.annexures[0]?.id);
    }
  };

  // Handlers
  const handleStartExam = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setFlaggedIds([]);
    setShowSolutions({});
    setTimeRemainingSeconds(exam.timeLimitMinutes * 60);
    setTimeSpentSeconds(0);
    setActiveAnnexureId(exam.annexures[0]?.id);
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswerChange = (questionId: string, answer: string | number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleToggleFlag = (questionId: string) => {
    setFlaggedIds(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId) 
        : [...prev, questionId]
    );
  };

  const handleToggleSolution = (questionId: string) => {
    setShowSolutions(prev => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleResetExam = () => {
    setCurrentView('home');
  };

  const handleReviewQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentQuestion = exam.questions[currentQuestionIndex] || exam.questions[0];

  return (
    <div className="min-h-screen bg-exam-grid flex flex-col text-gray-900 selection:bg-rose-200 selection:text-rose-900">
      {/* Top Navbar */}
      <Navbar
        exam={exam}
        timeRemainingSeconds={timeRemainingSeconds}
        isStudyMode={isStudyMode}
        onToggleStudyMode={() => setIsStudyMode(!isStudyMode)}
        onOpenFormulaSheet={() => setIsFormulaModalOpen(true)}
        onOpenScratchpad={() => setIsScratchpadModalOpen(true)}
        onFinishExam={handleFinishExam}
        onResetExam={handleResetExam}
        answeredCount={Object.keys(selectedAnswers).length}
        totalQuestions={exam.questions.length}
        isCompleted={currentView === 'results'}
      />

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {currentView === 'home' && (
          <TopicSelector
            selectedSubjectId={selectedSubjectId}
            selectedPaperId={exam.id}
            onSelectSubject={handleSelectSubject}
            onSelectPaper={handleSelectPaper}
            isStudyMode={isStudyMode}
            onToggleStudyMode={setIsStudyMode}
            onStartExam={handleStartExam}
          />
        )}

        {currentView === 'exam' && currentQuestion && (
          <div className="space-y-6">
            {/* Top Return to Dashboard bar with Light Red Accents */}
            <div className="flex items-center justify-between text-xs text-gray-600 bg-white/80 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-rose-200 shadow-2xs">
              <button
                onClick={() => setCurrentView('home')}
                className="font-bold text-rose-700 hover:text-rose-900 transition-colors flex items-center gap-1.5"
              >
                ← Back to Subject Papers
              </button>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200">
                  {isStudyMode ? '✨ Study Mode Active' : '⏱️ Timed Examination'}
                </span>
                <span className="text-rose-300">|</span>
                <span className="font-semibold text-gray-700">Question {currentQuestionIndex + 1} of {exam.questions.length}</span>
              </div>
            </div>

            {/* Split layout: Annexure Reference & Question / Palette */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Official Annexures (5 cols on lg) */}
              <div className="lg:col-span-5 space-y-4">
                <AnnexureViewer
                  annexures={exam.annexures}
                  selectedAnnexureId={currentQuestion?.annexureId || activeAnnexureId}
                />
              </div>

              {/* Right Column: Question Card & Question Palette (7 cols on lg) */}
              <div className="lg:col-span-7 space-y-6">
                <QuestionCard
                  key={currentQuestion.id}
                  question={currentQuestion}
                  questionIndex={currentQuestionIndex}
                  totalQuestions={exam.questions.length}
                  userAnswer={selectedAnswers[currentQuestion.id]}
                  onAnswerChange={handleAnswerChange}
                  isFlagged={flaggedIds.includes(currentQuestion.id)}
                  onToggleFlag={handleToggleFlag}
                  isStudyMode={isStudyMode}
                  showSolution={Boolean(showSolutions[currentQuestion.id])}
                  onToggleSolution={handleToggleSolution}
                  onNextQuestion={() => {
                    if (currentQuestionIndex < exam.questions.length - 1) {
                      setCurrentQuestionIndex(prev => prev + 1);
                    }
                  }}
                  onPrevQuestion={() => {
                    if (currentQuestionIndex > 0) {
                      setCurrentQuestionIndex(prev => prev - 1);
                    }
                  }}
                  onJumpToAnnexure={(annexureId) => setActiveAnnexureId(annexureId)}
                />

                <QuestionPalette
                  questions={exam.questions}
                  currentIndex={currentQuestionIndex}
                  onSelectIndex={setCurrentQuestionIndex}
                  selectedAnswers={selectedAnswers}
                  flaggedIds={flaggedIds}
                />
              </div>
            </div>
          </div>
        )}

        {currentView === 'results' && (
          <ExamResults
            exam={exam}
            selectedAnswers={selectedAnswers}
            timeSpentSeconds={timeSpentSeconds}
            onRetry={handleStartExam}
            onReviewQuestion={handleReviewQuestion}
          />
        )}
      </main>

      {/* Official DBE Formula Sheet Modal */}
      <FormulaSheetModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
      />

      {/* Candidate Scratchpad Modal with Signature Light Red Margin Rule */}
      <ScratchpadModal
        isOpen={isScratchpadModalOpen}
        onClose={() => setIsScratchpadModalOpen(false)}
        notes={scratchpadNotes}
        onNotesChange={setScratchpadNotes}
      />
    </div>
  );
}
