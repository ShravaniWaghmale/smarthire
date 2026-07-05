import Application from "../models/Application.js";

export const getDashboardStats = async (req, res) => {
  try {
    const applications = await Application.find().sort({
      createdAt: -1,
    });

    const total = applications.length;

    const applied = applications.filter(
      (app) => app.status === "Applied"
    ).length;

    const interview = applications.filter(
      (app) => app.status === "Interview"
    ).length;

    const offer = applications.filter(
      (app) => app.status === "Offer"
    ).length;

    const rejected = applications.filter(
      (app) => app.status === "Rejected"
    ).length;

    const recentApplications = applications.slice(0, 5);

    const responseRate =
      total === 0
        ? 0
        : Math.round(((interview + offer) / total) * 100);

    res.json({
      total,
      applied,
      interview,
      offer,
      rejected,
      responseRate,
      recentApplications,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};