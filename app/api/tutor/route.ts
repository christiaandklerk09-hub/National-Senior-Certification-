import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { questionPrompt, scenario, userWorking, topic } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({
        text: "Tutor hint: Break the problem down into standard DBE steps. Identify the given values, state the formula explicitly (e.g. Total = Base + Rate × Excess), substitute carefully, and state units (R, kL, %) clearly."
      });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const prompt = `You are an expert South African Department of Basic Education (DBE) National Senior Certificate (NSC) Mathematical Literacy Grade 12 examiner and tutor.
A student is asking for a hint or feedback on this exam problem:

TOPIC: ${topic || 'Mathematical Literacy Paper 1'}
SCENARIO: ${scenario || 'General question'}
QUESTION PROMPT: ${questionPrompt}
STUDENT WORKING / QUESTION: ${userWorking || 'None provided'}

Provide a clear, pedagogical response (maximum 3 concise bullet points or 150 words):
1. Explain the key mathematical concept or South African DBE standard method (Method mark [M], Accuracy mark [A], or Consistent Accuracy [CA]).
2. Guide them on which formula or table row from the annexure to use WITHOUT directly spoiling the final number if they haven't finished.
3. Warn them about common DBE matric exam traps (e.g., forgetting 15% VAT, applying rebates to taxable income instead of calculated tax, or rounding off too early).

Keep tone encouraging, professional, and clear.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    return NextResponse.json({ text: response.text });
  } catch (err: any) {
    console.error('Error in tutor route:', err);
    return NextResponse.json(
      { 
        text: "Tutor guidance: Remember to read all tables in the Annexure carefully. When calculating stepped tariffs, make sure each bracket is calculated independently up to its maximum capacity." 
      },
      { status: 200 }
    );
  }
}
