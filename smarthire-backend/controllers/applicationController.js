import Application from "../models/Application.js";
import Job from "../models/Job.js";

export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(applications);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const createApplication = async (req, res) => {
  try {
    const application = await Application.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const updateApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(application);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);

    res.json({
      message: "Application deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const applyJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    const exists = await Application.findOne({
      user: req.user.id,
      job: job._id,
    });

    if (exists) {
      return res.status(400).json({
        message: "Already Applied",
      });
    }

    const application = await Application.create({
      user: req.user.id,
      job: job._id,
      company: job.company,
      role: job.title,
      location: job.location,
      salary: job.salary,
      status: "Applied",
    });

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};