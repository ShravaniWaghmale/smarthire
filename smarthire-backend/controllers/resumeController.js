import path from "path";

import { extractResumeText } from "../utils/extractResumeText.js";

export const analyzeResume = async (req, res) => {
  try {
    // ============================
    // Validate Upload
    // ============================

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a PDF or DOCX resume.",
      });
    }

    const extension = path
      .extname(req.file.originalname)
      .replace(".", "")
      .toLowerCase();

    // ============================
    // Extract Resume Text
    // ============================

    const extractedText = await extractResumeText(
      req.file.path,
      extension
    );

    if (!extractedText || extractedText.trim().length < 20) {
      return res.status(400).json({
        success: false,
        message:
          "Unable to extract enough text from this resume.",
      });
    }

    // ============================
    // Temporary Mock Response
    // (Next we'll replace this with AI)
    // ============================

    res.json({
      success: true,

      extractedText,

      analysis: {
        atsScore: 78,

        grammarScore: 91,

        strengths: [
          "Good project descriptions",
          "Clean formatting",
          "Technical skills are visible",
        ],

        missingSkills: [
          "TypeScript",
          "Docker",
          "CI/CD",
        ],

        suggestions: [
          "Add measurable achievements.",
          "Improve professional summary.",
          "Use stronger action verbs.",
          "Include more ATS keywords.",
        ],
      },
    });
  } catch (error) {
    console.error("Resume Analysis Error:", error);

    return res.status(500).json({
      success: false,
      message: "Resume analysis failed.",
    });
  }
};