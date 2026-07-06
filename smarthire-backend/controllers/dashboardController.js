import Application from "../models/Application.js";

export const getDashboardStats = async (req, res) => {
  try {
    // Only fetch logged-in user's applications
    const applications = await Application.find({
      user: req.user.id,
    })
      .populate("job")
      .sort({ createdAt: -1 });

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

    const underReview = applications.filter(
      (app) => app.status === "Under Review"
    ).length;

    const responseRate =
      total === 0
        ? 0
        : Math.round(((interview + offer) / total) * 100);

    const recentApplications = applications.slice(0, 5);

    res.json({
      total,
      applied,
      interview,
      offer,
      rejected,
      underReview,
      responseRate,
      recentApplications,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};