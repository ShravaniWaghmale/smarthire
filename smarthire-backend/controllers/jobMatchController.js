import { analyzeResumeJobMatch } from "../services/geminiService.js";

export const jobMatchAnalysis = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    if (!resumeText || !jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Resume text and Job Description are required.",
      });
    }

    const analysis = await analyzeResumeJobMatch(
      resumeText,
      jobDescription
    );

    res.json({
      success: true,
      analysis,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};