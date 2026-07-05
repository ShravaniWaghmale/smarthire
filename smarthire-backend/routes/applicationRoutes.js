import express from "express";

import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
  applyJob,
} from "../controllers/applicationController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getApplications);

router.post("/", protect, createApplication);

router.post("/apply/:jobId", protect, applyJob);

router.put("/:id", protect, updateApplication);

router.delete("/:id", protect, deleteApplication);

export default router;