export type SubjectId = 
  | 'math-lit-p1' 
  | 'math-lit-p2' 
  | 'accounting' 
  | 'business-studies' 
  | 'economics' 
  | 'english' 
  | 'afrikaans';

export type ExamCategory = 'nsc-paper' | 'mcq-test';

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  paper: string;
  grade: string;
  themeColor: string;
  lightRedAccent: string;
  totalMarks: number;
  timeMinutes: number;
  description: string;
  iconName: string;
}

export type QuestionType = 'mcq' | 'numeric' | 'step-by-step' | 'multi-part' | 'qualitative' | 'text';

export interface MarkSchemeStep {
  stepNumber: number;
  description: string;
  working: string;
  markCode: 'M' | 'A' | 'CA' | 'MA' | 'S' | 'O'; // Method, Accuracy, Consistent Accuracy, etc.
  markValue: number;
}

export interface AnnexureData {
  id: string;
  title: string;
  subtitle: string;
  type: 'tariff-table' | 'tax-brackets' | 'breakeven-chart' | 'financial-statement' | 'floor-plan';
  dataRows?: Array<{ [key: string]: string | number }>;
  notes?: string[];
  imageUrl?: string;
  chartDetails?: {
    xLabel: string;
    yLabel: string;
    points?: Array<{ x: number; y: number; label?: string }>;
  };
}

export interface QualitativeRubric {
  modelAnswer: string;
  keyPoints: string[];
  acceptedKeywords?: string[];
  sampleGoodResponse?: string;
}

export interface Question {
  id: string;
  numberStr: string; // e.g. "QUESTION 1.1", "QUESTION 2.3.1"
  topic: string;
  subtopic: string;
  marks: number;
  scenario: string;
  prompt: string;
  type: QuestionType;
  options?: string[]; // For MCQ
  correctOptionIndex?: number;
  correctNumericAnswer?: number;
  numericTolerance?: number; // e.g. +/- 0.5 for rounding
  unit?: string; // e.g. "Rands", "kL", "litres", "%"
  annexureId?: string; // Reference to Annexure
  hint: string;
  fullSolutionExplanation: string;
  markingGuide: MarkSchemeStep[];
  qualitativeRubric?: QualitativeRubric;
}

export interface ExamPaper {
  id: string;
  subjectId: SubjectId;
  year: number;
  session: 'November NSC' | 'June Exam' | 'Preparatory Trial';
  title: string;
  subtitle?: string;
  category?: ExamCategory;
  totalMarks: number;
  timeLimitMinutes: number;
  instructions: string[];
  annexures: AnnexureData[];
  questions: Question[];
}

export interface UserExamState {
  currentQuestionIndex: number;
  selectedAnswers: Record<string, number | string>; // questionId -> answer
  flaggedQuestionIds: string[];
  timeRemainingSeconds: number;
  isCompleted: boolean;
  isStudyMode: boolean; // false = strict timed exam, true = study with immediate solutions
  showSolutionForQuestion: Record<string, boolean>;
  scratchpadNotes: string;
  scoreTally?: {
    totalMarksAchieved: number;
    totalPossibleMarks: number;
    percentage: number;
    levelDescriptor: string; // e.g., "Level 7: Outstanding (80-100%)"
  };
}
