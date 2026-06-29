const express = require("express");
const router = express.Router();

const Job = require("../models/Job");
const auth = require("../middleware/auth");

// CREATE JOB
router.post("/", auth, async (req, res) => {
  try {
    const job = await Job.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET ALL JOBS
router.get("/", auth, async (req, res) => {
  try {
    const jobs = await Job.find({
      createdBy: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE JOB
router.delete("/:id", auth, async (req, res) => {
  try {
    await Job.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    res.json({
      message: "Job deleted",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE JOB
router.put("/:id", auth, async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user.id,
      },
      req.body,
      { new: true }
    );

    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;