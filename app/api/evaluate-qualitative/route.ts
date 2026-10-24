import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { questionPrompt, scenario, studentAnswer, marks = 2, modelAnswer, keyPoints = [] } = await req.json();

    if (!studentAnswer || typeof studentAnswer !== 'string') {
      return NextResponse.json(
        { error: 'Missing studentAnswer' },
        { status: 400 }
      );
    }

    const cleanAnswer = studentAnswer.trim();
    const maxMarks = Number(marks) || 2;

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });

        const prompt = `You are a strict and encouraging official South African Department of Basic Education (DBE) National Senior Certificate (NSC) Senior Examiner and Grader.

ASSESSMENT QUESTION:
${questionPrompt}

SCENARIO / CONTEXT:
${scenario || 'None'}

OFFICIAL MEMORANDUM MODEL ANSWER:
${modelAnswer || 'Use standard DBE Grade 12 syllabus knowledge.'}

KEY RUBRIC POINTS EXPECTED (each corresponds to DBE marks):
${Array.isArray(keyPoints) && keyPoints.length > 0 ? keyPoints.map((p, i) => `${i + 1}. ${p}`).join('\n') : 'Evaluate for sound reasoning, clear identification, and correct terminology.'}

MAXIMUM MARKS ALLOCATED:
${maxMarks} Marks

STUDENT'S WRITTEN ANSWER:
"${cleanAnswer}"

MARKING INSTRUCTIONS:
1. "isAcceptable": Set to true if the student demonstrates genuine conceptual understanding and earns at least 50% of available marks.
2. "marksAwarded": An integer between 0 and ${maxMarks} based on how many key points or valid explanations the student articulated. Give partial credit where due (e.g. 1 out of 2, 2 out of 4).
3. "feedback": A constructive, 1 to 2 sentence commentary in clear South African educational tone. Highlight what was accurate and specify what details or terminology were omitted according to the memorandum.
4. "matchedKeyPoints": List of rubric key points successfully addressed by the student.
5. "missingKeyPoints": List of rubric key points that the student failed to mention or explain.

Respond strictly in valid JSON matching this schema:
{
  "isAcceptable": boolean,
  "marksAwarded": number,
  "feedback": "string",
  "matchedKeyPoints": string[],
  "missingKeyPoints": string[]
}`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
          },
        });

        const parsed = JSON.parse(response.text || '{}');
        const awarded = typeof parsed.marksAwarded === 'number' ? Math.min(maxMarks, Math.max(0, parsed.marksAwarded)) : (parsed.isAcceptable ? maxMarks : 0);

        return NextResponse.json({
          isAcceptable: Boolean(parsed.isAcceptable ?? (awarded >= Math.ceil(maxMarks * 0.5))),
          marksAwarded: awarded,
          feedback: parsed.feedback || (awarded > 0 ? 'Good response aligned with the official memorandum.' : 'Incomplete response. Please review the official marking guideline.'),
          matchedKeyPoints: Array.isArray(parsed.matchedKeyPoints) ? parsed.matchedKeyPoints : [],
          missingKeyPoints: Array.isArray(parsed.missingKeyPoints) ? parsed.missingKeyPoints : [],
        });
      } catch (aiErr) {
        console.warn('Gemini qualitative grading error, using deterministic rubric grader:', aiErr);
      }
    }

    // Deterministic fallback if API key not available or model throttles
    const matched: string[] = [];
    const missing: string[] = [];
    const lowerAns = cleanAnswer.toLowerCase();

    if (Array.isArray(keyPoints)) {
      keyPoints.forEach((kp: string) => {
        const words = String(kp).toLowerCase().split(/\s+/).filter((w: string) => w.length > 3);
        if (words.some((w: string) => lowerAns.includes(w))) {
          matched.push(kp);
        } else {
          missing.push(kp);
        }
      });
    }

    let marksCalculated = 0;
    if (cleanAnswer.length > 40 || matched.length > 0) {
      marksCalculated = Math.min(maxMarks, Math.max(1, matched.length > 0 ? Math.ceil((matched.length / Math.max(1, keyPoints.length)) * maxMarks) : Math.floor(maxMarks * 0.6)));
    }

    const isAcceptable = marksCalculated >= Math.ceil(maxMarks * 0.5);

    return NextResponse.json({
      isAcceptable,
      marksAwarded: marksCalculated,
      feedback: isAcceptable
        ? 'Well stated! Your written answer accurately covers the core memorandum criteria.'
        : 'Your answer needs further detail or key terminology from the DBE syllabus. Review the model answer below.',
      matchedKeyPoints: matched,
      missingKeyPoints: missing,
    });
  } catch (error: any) {
    console.error('Fatal qualitative evaluation route error:', error);
    return NextResponse.json(
      {
        isAcceptable: false,
        marksAwarded: 0,
        feedback: 'Unable to grade response at this moment. Please check your network.',
        matchedKeyPoints: [],
        missingKeyPoints: [],
      },
      { status: 200 }
    );
  }
}
