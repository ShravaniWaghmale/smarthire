import path from "path";

import { extractResumeText } from "../utils/extractResumeText.js";
import { analyzeResumeWithAI } from "../services/geminiService.js";

export const analyzeResume = async (req, res) => {
  try {
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

    const extractedText = await extractResumeText(
      req.file.path,
      extension
    );

    if (!extractedText || extractedText.trim().length < 20) {
      return res.status(400).json({
        success: false,
        message: "Unable to extract enough text from this resume.",
      });
    }

    const analysis = await analyzeResumeWithAI(extractedText);

    res.json({
      success: true,
      analysis,
      resumeUrl: `http://localhost:5000/uploads/${req.file.filename}`,
      originalName: req.file.originalname,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message || "Resume analysis failed.",
    });
  }
};