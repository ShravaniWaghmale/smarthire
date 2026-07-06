import express from "express";

import protect from "../middleware/authMiddleware.js";
import uploadResume from "../middleware/uploadResume.js";

import { analyzeResume } from "../controllers/resumeController.js";

const router = express.Router();

/*
POST
/api/resume/analyze
*/

router.post(
  "/analyze",
  protect,
  uploadResume.single("resume"),
  analyzeResume
);

export default router;