'use client';

import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Compass, 
  Receipt, 
  Briefcase,
  TrendingUp, 
  BookOpen,
  Languages,
  Clock, 
  Award, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  FileText,
  CheckSquare,
  Search,
  Filter,
  Layers
} from 'lucide-react';
import { ALL_EXAM_PAPERS, SUBJECT_LIST } from '@/lib/exam-data';
import { SubjectId, ExamCategory, ExamPaper } from '@/types/quiz';

interface TopicSelectorProps {
  selectedSubjectId?: SubjectId;
  selectedPaperId?: string;
  onSelectSubject?: (id: SubjectId) => void;
  onSelectPaper?: (paperId: string) => void;
  isStudyMode: boolean;
  onToggleStudyMode: (val: boolean) => void;
  onStartExam: () => void;
}

export function TopicSelector({
  selectedSubjectId,
  selectedPaperId,
  onSelectSubject,
  onSelectPaper,
  isStudyMode,
  onToggleStudyMode,
  onStartExam,
}: TopicSelectorProps) {
  const [activeTab, setActiveTab] = useState<ExamCategory>('nsc-paper');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Find currently selected paper
  const currentPaper = useMemo(() => {
    if (selectedPaperId) {
      const match = ALL_EXAM_PAPERS.find(p => p.id === selectedPaperId);
      if (match) return match;
    }
    if (selectedSubjectId) {
      const match = ALL_EXAM_PAPERS.find(p => p.subjectId === selectedSubjectId);
      if (match) return match;
    }
    return ALL_EXAM_PAPERS[0] || null;
  }, [selectedPaperId, selectedSubjectId]);

  const handleChoosePaper = (paper: ExamPaper) => {
    if (onSelectPaper) onSelectPaper(paper.id);
    if (onSelectSubject) onSelectSubject(paper.subjectId);
  };

  // Subject icon helper
  const getSubjectIcon = (subjectId: SubjectId) => {
    switch (subjectId) {
      case 'math-lit-p1':
        return <Calculator className="w-4 h-4" />;
      case 'math-lit-p2':
        return <Compass className="w-4 h-4" />;
      case 'accounting':
        return <Receipt className="w-4 h-4" />;
      case 'business-studies':
        return <Briefcase className="w-4 h-4" />;
      case 'economics':
        return <TrendingUp className="w-4 h-4" />;
      case 'english':
        return <BookOpen className="w-4 h-4" />;
      case 'afrikaans':
        return <Languages className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getSubjectName = (subjectId: SubjectId) => {
    const meta = SUBJECT_LIST.find(s => s.id === subjectId);
    return meta ? meta.name : subjectId;
  };

  // Filter papers based on category tab, subject filter, and search query
  const filteredPapers = useMemo(() => {
    return ALL_EXAM_PAPERS.filter(paper => {
      // 1. Category tab match
      if (paper.category !== activeTab) return false;

      // 2. Subject filter
      if (selectedSubjectFilter !== 'all') {
        if (selectedSubjectFilter === 'math-lit') {
          if (paper.subjectId !== 'math-lit-p1' && paper.subjectId !== 'math-lit-p2') return false;
        } else if (paper.subjectId !== selectedSubjectFilter) {
          return false;
        }
      }

      // 3. Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = paper.title.toLowerCase().includes(q);
        const matchesSub = paper.subtitle ? paper.subtitle.toLowerCase().includes(q) : false;
        const matchesSubject = getSubjectName(paper.subjectId).toLowerCase().includes(q);
        const matchesTopics = paper.questions.some(qn => 
          qn.topic.toLowerCase().includes(q) || 
          qn.subtopic.toLowerCase().includes(q) ||
          qn.prompt.toLowerCase().includes(q)
        );
        if (!matchesTitle && !matchesSub && !matchesSubject && !matchesTopics) return false;
      }

      return true;
    });
  }, [activeTab, selectedSubjectFilter, searchQuery]);

  const nscCount = ALL_EXAM_PAPERS.filter(p => p.category === 'nsc-paper').length;
  const mcqCount = ALL_EXAM_PAPERS.filter(p => p.category === 'mcq-test').length;

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-4">
      {/* Light Red Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-br from-rose-50 via-white to-red-50/60 border border-rose-200/90 p-6 sm:p-10 shadow-sm overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/80 text-rose-800 border border-rose-200 text-xs font-bold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            Grade 12 Matric Examination Library
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            National Senior Certificate <span className="text-rose-600">Exam Portal</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Practice official South African DBE NSC examination papers and rapid objective MCQ revision tests. Featuring interactive stepped municipal tariffs, SARS tax brackets, financial statements, and the intelligent Qualitative Answer Studio with official memorandum rubrics.
          </p>

          {/* Quick Stats Highlights */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-medium text-gray-700">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-rose-200/80 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
              <span>7 Official Past Papers</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-rose-200/80 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
              <span>12 Speed MCQ Tests</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-rose-200/80 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
              <span>Qualitative Answer Studio</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-rose-200/80 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
              <span>DBE Method & Accuracy Codes</span>
            </span>
          </div>
        </div>
      </div>

      {/* Tabs & Filters Navigation */}
      <div className="space-y-4">
        {/* Main Category Tabs: NSC Papers vs MCQ Tests */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-rose-200 pb-4">
          <div className="flex items-center bg-rose-50/80 p-1 rounded-2xl border border-rose-200/80">
            <button
              onClick={() => setActiveTab('nsc-paper')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'nsc-paper'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-rose-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Official DBE NSC Papers</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                activeTab === 'nsc-paper' ? 'bg-rose-700 text-white' : 'bg-rose-200/60 text-rose-800'
              }`}>
                {nscCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('mcq-test')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'mcq-test'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-rose-700'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Objective MCQ Practice Tests</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                activeTab === 'mcq-test' ? 'bg-rose-700 text-white' : 'bg-rose-200/60 text-rose-800'
              }`}>
                {mcqCount}
              </span>
            </button>
          </div>

          {/* Search bar */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search topic, question or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-rose-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
            />
          </div>
        </div>

        {/* Subject Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-gray-400 font-semibold flex items-center gap-1 pr-1 shrink-0">
            <Filter className="w-3.5 h-3.5 text-rose-500" /> Filter:
          </span>
          <button
            onClick={() => setSelectedSubjectFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 transition-all ${
              selectedSubjectFilter === 'all'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-rose-50/50 hover:border-rose-200'
            }`}
          >
            All Subjects
          </button>
          <button
            onClick={() => setSelectedSubjectFilter('math-lit')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 transition-all ${
              selectedSubjectFilter === 'math-lit'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-rose-50/50 hover:border-rose-200'
            }`}
          >
            Mathematical Literacy
          </button>
          <button
            onClick={() => setSelectedSubjectFilter('accounting')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 transition-all ${
              selectedSubjectFilter === 'accounting'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-rose-50/50 hover:border-rose-200'
            }`}
          >
            Accounting
          </button>
          <button
            onClick={() => setSelectedSubjectFilter('business-studies')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 transition-all ${
              selectedSubjectFilter === 'business-studies'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-rose-50/50 hover:border-rose-200'
            }`}
          >
            Business Studies
          </button>
          <button
            onClick={() => setSelectedSubjectFilter('economics')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 transition-all ${
              selectedSubjectFilter === 'economics'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-rose-50/50 hover:border-rose-200'
            }`}
          >
            Economics
          </button>
          <button
            onClick={() => setSelectedSubjectFilter('english')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 transition-all ${
              selectedSubjectFilter === 'english'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-rose-50/50 hover:border-rose-200'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setSelectedSubjectFilter('afrikaans')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 transition-all ${
              selectedSubjectFilter === 'afrikaans'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-rose-50/50 hover:border-rose-200'
            }`}
          >
            Afrikaans
          </button>
        </div>
      </div>

      {/* Grid of Papers */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>
            Showing <strong className="text-gray-900 font-bold">{filteredPapers.length}</strong> available papers
          </span>
          <span className="text-rose-700 font-semibold bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
            {activeTab === 'nsc-paper' ? 'Comprehensive Past Exams' : '15-Minute Objective Quizzes'}
          </span>
        </div>

        {filteredPapers.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-rose-200 p-8 space-y-3">
            <Layers className="w-8 h-8 text-rose-300 mx-auto" />
            <h3 className="font-bold text-gray-800 text-sm">No examination papers match your filter</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Try resetting your search query or choosing &quot;All Subjects&quot; to see available tests.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubjectFilter('all');
              }}
              className="px-4 py-2 bg-rose-100 text-rose-800 rounded-xl text-xs font-bold hover:bg-rose-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPapers.map((paper) => {
              const isSelected = currentPaper ? paper.id === currentPaper.id : false;
              const questionCount = paper.questions.length;
              const hasAnnexures = paper.annexures && paper.annexures.length > 0;
              const hasQualitative = paper.questions.some(q => q.type === 'qualitative');

              return (
                <div
                  key={paper.id}
                  onClick={() => handleChoosePaper(paper)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                    isSelected
                      ? 'border-rose-500 bg-gradient-to-br from-rose-50/70 via-white to-rose-50/40 shadow-md shadow-rose-100 ring-2 ring-rose-400/25'
                      : 'border-gray-200 bg-white hover:border-rose-300 hover:bg-rose-50/15 shadow-2xs hover:shadow-xs'
                  }`}
                >
                  {/* Selected Tag */}
                  {isSelected && (
                    <span className="absolute top-3.5 right-3.5 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-200">
                      Selected
                    </span>
                  )}

                  <div className="space-y-3">
                    {/* Header with icon and subject */}
                    <div className="flex items-center space-x-2.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white shrink-0 ${
                        isSelected ? 'bg-rose-600 shadow-2xs shadow-rose-200' : 'bg-rose-500/85'
                      }`}>
                        {getSubjectIcon(paper.subjectId)}
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wide block truncate">
                          {getSubjectName(paper.subjectId)}
                        </span>
                        <span className="text-[10px] text-gray-500 block">
                          {paper.session} · {paper.year}
                        </span>
                      </div>
                    </div>

                    {/* Paper Title and Subtitle */}
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm leading-snug">
                        {paper.title}
                      </h3>
                      {paper.subtitle && (
                        <p className="text-xs text-gray-600 leading-relaxed mt-1 line-clamp-2">
                          {paper.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Feature badges */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px]">
                      {hasAnnexures && (
                        <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md font-medium">
                          DBE Annexures
                        </span>
                      )}
                      {hasQualitative && (
                        <span className="bg-rose-50 text-rose-800 border border-rose-200 px-2 py-0.5 rounded-md font-medium">
                          Qualitative Studio
                        </span>
                      )}
                      {paper.category === 'mcq-test' && (
                        <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md font-medium">
                          Instant Feedback
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="mt-4 pt-3 border-t border-rose-100/80 flex items-center justify-between text-xs font-medium text-gray-500">
                    <div className="flex items-center space-x-3 text-[11px]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-rose-500" />
                        {paper.timeLimitMinutes}m
                      </span>
                      <span className="flex items-center gap-1">
                        <Award className="w-3 h-3 text-rose-500" />
                        {paper.totalMarks} Marks
                      </span>
                      <span className="text-gray-400">
                        {questionCount} Qs
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChoosePaper(paper);
                        onStartExam();
                      }}
                      className="text-[11px] font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 hover:underline"
                    >
                      <span>Start</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Practice Style Selection & Start Exam Banner */}
      <div className="bg-white rounded-2xl border border-rose-200/90 shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700">Currently Selected:</span>
            <span className="text-xs font-semibold text-gray-900 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200">
              {currentPaper?.title || 'Selected Paper'}
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 pt-1">
            <button
              onClick={() => onToggleStudyMode(true)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                isStudyMode
                  ? 'bg-rose-100 text-rose-800 border-rose-300 shadow-xs'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              ✨ Study Mode (Immediate Solutions)
            </button>
            <button
              onClick={() => onToggleStudyMode(false)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                !isStudyMode
                  ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              ⏱️ Timed Exam Mode ({currentPaper?.timeLimitMinutes || 60} Mins)
            </button>
          </div>
        </div>

        <button
          onClick={onStartExam}
          className="w-full md:w-auto px-8 py-3.5 rounded-xl font-extrabold text-sm sm:text-base bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 hover:from-rose-700 hover:to-rose-600 text-white shadow-md shadow-rose-200/80 transition-all flex items-center justify-center gap-2 group shrink-0"
        >
          <span>Begin Selected Paper</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
