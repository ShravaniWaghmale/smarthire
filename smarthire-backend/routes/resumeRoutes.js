import express from "express";

import protect from "../middleware/authMiddleware.js";
import uploadResume from "../middleware/uploadResume.js";

import { analyzeResume } from "../controllers/resumeController.js";
import { jobMatchAnalysis } from "../controllers/jobMatchController.js";

const router = express.Router();

router.post(
  "/analyze",
  protect,
  uploadResume.single("resume"),
  analyzeResume
);

router.post(
  "/job-match",
  protect,
  jobMatchAnalysis
);

export default router;