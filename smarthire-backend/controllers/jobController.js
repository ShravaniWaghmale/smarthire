const Job = require("../models/Job");

// CREATE JOB
exports.createJob = async (req, res) => {
  try {
    const job = await Job.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.json(job);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// GET JOBS
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      createdBy: req.user.id,
    });
    res.json(jobs);
  } catch (err) {
    res.status(500).json(err.message);
  }
};