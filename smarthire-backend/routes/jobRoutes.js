import express from "express";

import {
  getJobs,
  getJob,
  seedJobs,
} from "../controllers/jobController.js";

const router = express.Router();

router.get("/", getJobs);

router.get("/:id", getJob);

router.post("/seed", seedJobs);

export default router;