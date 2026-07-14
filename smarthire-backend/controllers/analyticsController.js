import Application from "../models/Application.js";

export const getAnalytics = async (req, res) => {
  try {
    const applications = await Application.find({
      user: req.user.id,
    });

    const total = applications.length;

    const applied = applications.filter(
      (a) => a.status === "Applied"
    ).length;

    const interview = applications.filter(
      (a) => a.status === "Interview"
    ).length;

    const offer = applications.filter(
      (a) => a.status === "Offer"
    ).length;

    const rejected = applications.filter(
      (a) => a.status === "Rejected"
    ).length;

    // Monthly Chart

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthlyChart = monthNames.map((month) => ({
      month,
      applications: 0,
    }));

    applications.forEach((app) => {
      const month = new Date(app.createdAt).getMonth();
      monthlyChart[month].applications++;
    });

    // Pie Chart

    const statusChart = [
      {
        name: "Applied",
        value: applied,
      },
      {
        name: "Interview",
        value: interview,
      },
      {
        name: "Offer",
        value: offer,
      },
      {
        name: "Rejected",
        value: rejected,
      },
    ];

    // Top Companies

    const companyMap = {};

    applications.forEach((app) => {
      companyMap[app.company] =
        (companyMap[app.company] || 0) + 1;
    });

    const companies = Object.entries(companyMap)
      .map(([company, count]) => ({
        company,
        count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    res.json({
      stats: {
        total,
        interview,
        offer,
        rejected,
      },
      monthlyChart,
      statusChart,
      companies,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};