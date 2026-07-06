import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function analyzeResumeWithAI(resumeText) {
  try {
    const prompt = `
You are an expert ATS Resume Reviewer and Career Coach.

Analyze the following resume.

Return ONLY valid JSON.

Use this EXACT format:

{
  "atsScore": 0,
  "grammarScore": 0,
  "strengths": [],
  "missingSkills": [],
  "suggestions": [],
  "summary": ""
}

Rules:

1. atsScore must be an integer from 0-100.
2. grammarScore must be an integer from 0-100.
3. strengths should contain 3-6 short bullet points.
4. missingSkills should contain important technologies or keywords missing from the resume.
5. suggestions should contain practical improvements.
6. summary should be a rewritten professional summary in 3-4 lines.
7. Return ONLY JSON.
8. Do NOT include markdown.
9. Do NOT include explanation.

Resume:

${resumeText}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text;

    // Remove markdown if Gemini wraps JSON

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(text);

  } catch (error) {
    console.error("Gemini Error:", error);

    throw new Error("Failed to analyze resume using AI.");
  }
}