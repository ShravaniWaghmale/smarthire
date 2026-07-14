import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function analyzeResumeWithAI(resumeText) {
  const prompt = `
You are an ATS Resume Reviewer.

Analyze the resume and return ONLY valid JSON.

{
  "atsScore":0,
  "grammarScore":0,
  "strengths":[],
  "suggestions":[],
  "professionalSummary":""
}

Resume:

${resumeText}
`;

  const MAX_RETRIES = 3;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await model.generateContent(prompt);

      const text = result.response.text();

      console.log("===== GEMINI RAW RESPONSE =====");
      console.log(text);

      const jsonMatch = text.match(/\{[\s\S]*\}/);

      if (!jsonMatch) {
        throw new Error("Gemini did not return valid JSON.");
      }

      return JSON.parse(jsonMatch[0]);

    } catch (err) {
      console.log(`Gemini Attempt ${attempt} failed`);

      // Retry only on 503
      if (err.status === 503 && attempt < MAX_RETRIES) {
        console.log("Retrying in 3 seconds...");
        await sleep(3000);
        continue;
      }

      if (err.status === 503) {
        throw new Error(
          "Gemini AI is currently busy. Please try again after a few seconds."
        );
      }

      throw err;
    }
  }
}

export async function analyzeResumeJobMatch(
  resumeText,
  jobDescription
) {
  const prompt = `
You are an ATS recruiter.

Compare the following Resume with the Job Description.

Return ONLY valid JSON.

{
  "matchScore":0,
  "missingSkills":[],
  "matchingSkills":[],
  "suggestions":[]
}

Resume:

${resumeText}

========================

Job Description:

${jobDescription}
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  console.log("===== JOB MATCH RESPONSE =====");
  console.log(text);

  const jsonMatch = text.match(/\{[\s\S]*\}/);

  if (!jsonMatch) {
    throw new Error("Gemini returned invalid JSON.");
  }

  return JSON.parse(jsonMatch[0]);
}