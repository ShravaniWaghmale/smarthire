const express = require("express");
const router = express.Router();

const Application = require("../models/Application");
const Job = require("../models/Job");

const auth = require("../middleware/auth");


// APPLY FOR JOB
router.post("/", auth, async (req, res) => {
  try {
    const { jobId } = req.body;

    const existing = await Application.findOne({
      userId: req.user.id,
      jobId,
    });

    if (existing) {
      return res.status(400).json({
        message: "Already applied",
      });
    }

    const application =
      await Application.create({
        userId: req.user.id,
        jobId,
      });

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});


// MY APPLICATIONS
router.get("/", auth, async (req, res) => {
  try {
    const applications =
      await Application.find({
        userId: req.user.id,
      }).populate("jobId");

    res.json(applications);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;