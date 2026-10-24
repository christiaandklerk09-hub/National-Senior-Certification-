import { Question } from '@/types/quiz';

/**
 * Checks whether a question is fundamentally qualitative / descriptive / conceptual,
 * requiring a written text response rather than a numeric calculation.
 */
export function isQualitativeQuestion(question: Question): boolean {
  if (!question) return false;

  // Explicit type declarations
  if (question.type === 'qualitative' || question.type === 'text') {
    return true;
  }

  // MCQs are never open-ended qualitative studios
  if (question.type === 'mcq') {
    return false;
  }

  // If question has no correct numeric answer and is not MCQ, it must be qualitative
  if (question.correctNumericAnswer === undefined || question.correctNumericAnswer === null) {
    return true;
  }

  const prompt = (question.prompt || '').trim().toLowerCase();
  const scenario = (question.scenario || '').toLowerCase();

  // Action verbs that indicate qualitative explanation, naming, identification, or interpretation
  const qualitativeVerbRegex = /^(identify|explain|describe|define|state|give\s+(?:a|two|three)?\s*reason|why|what\s+is\s+meant|name|which\s+(?:country|factor|item|household|option)|arrange|list|compare|discuss|verify\s+whether|justify|suggest|distinguish|comment\s+on|write\s+down\s+the\s+(?:name|reason|term))/i;
  
  // Math calculation verbs
  const calculationVerbRegex = /^(calculate|determine\s+the\s+(?:cost|amount|total|value|price|iqr|boundary|tax|interest|profit|percentage|rate)|compute|work\s+out)/i;

  if (qualitativeVerbRegex.test(prompt) && !calculationVerbRegex.test(prompt)) {
    return true;
  }

  return false;
}

export interface QualitativeEvaluation {
  isAcceptable: boolean;
  marksAwarded: number;
  feedback: string;
  matchedKeyPoints: string[];
  missingKeyPoints: string[];
}

/**
 * Fast local deterministic evaluation fallback when server or API is unavailable.
 * Evaluates student written responses based on keyword overlap and conceptual coverage.
 */
export function evaluateQualitativeLocally(
  studentAnswer: string,
  question: Question
): QualitativeEvaluation {
  const cleanAnswer = (studentAnswer || '').trim().toLowerCase();
  const maxMarks = question.marks || 2;

  if (cleanAnswer.length < 5) {
    return {
      isAcceptable: false,
      marksAwarded: 0,
      feedback: 'Please provide a more detailed written response explaining your reasoning or identifying the required items.',
      matchedKeyPoints: [],
      missingKeyPoints: question.qualitativeRubric?.keyPoints || ['Key concepts not yet addressed'],
    };
  }

  const keyPoints = question.qualitativeRubric?.keyPoints || [];
  const acceptedKeywords = question.qualitativeRubric?.acceptedKeywords || [];
  const modelAnswer = question.qualitativeRubric?.modelAnswer || question.fullSolutionExplanation || '';

  // Extract reference terms
  const referenceWords = [
    ...acceptedKeywords.map(k => k.toLowerCase()),
    ...modelAnswer.toLowerCase().split(/[\s,.;:()]+/).filter(w => w.length > 4),
  ];

  const matchedPoints: string[] = [];
  const missingPoints: string[] = [];

  keyPoints.forEach((point) => {
    const pointKeywords = point.toLowerCase().split(/[\s,.;:()]+/).filter(w => w.length > 3);
    const hasOverlap = pointKeywords.some(keyword => cleanAnswer.includes(keyword));
    if (hasOverlap) {
      matchedPoints.push(point);
    } else {
      missingPoints.push(point);
    }
  });

  // Count matching words from accepted keywords
  const matchedKeywordCount = acceptedKeywords.filter(kw => cleanAnswer.includes(kw.toLowerCase())).length;

  let marks = 0;
  if (matchedPoints.length > 0) {
    marks = Math.min(maxMarks, Math.ceil((matchedPoints.length / Math.max(1, keyPoints.length)) * maxMarks));
  } else if (matchedKeywordCount >= 2 || cleanAnswer.length > 50) {
    marks = Math.max(1, Math.floor(maxMarks * 0.5));
  } else if (cleanAnswer.length > 20) {
    marks = 1;
  }

  const isAcceptable = marks >= Math.ceil(maxMarks * 0.5);

  let feedback = '';
  if (marks === maxMarks) {
    feedback = 'Excellent response! Your written answer accurately covers the core DBE National Senior Certificate marking criteria.';
  } else if (marks > 0) {
    feedback = `Good attempt! You earned ${marks} of ${maxMarks} marks. Review the official DBE model answer to ensure all required memorandum points are addressed.`;
  } else {
    feedback = 'Your response did not sufficiently address the key criteria expected in the DBE memorandum. Review the model answer and try again.';
  }

  return {
    isAcceptable,
    marksAwarded: marks,
    feedback,
    matchedKeyPoints: matchedPoints,
    missingKeyPoints: missingPoints,
  };
}
