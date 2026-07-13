import path from "path";
import fs from "fs";

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

    const absolutePath = path.resolve(req.file.path);

    console.log("========== FILE DEBUG ==========");
    console.log("Uploaded File:", req.file);
    console.log("Absolute Path:", absolutePath);
    console.log("Exists:", fs.existsSync(absolutePath));
    console.log("================================");

    const resumeUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    res.json({
      success: true,
      analysis,
      resumeUrl,
    });

  } catch (error) {
    console.error("Resume Analysis Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Resume analysis failed.",
    });
  }
};