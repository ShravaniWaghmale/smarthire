import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

dotenv.config();

const app = express();

// ============================
// Middleware
// ============================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ============================
// Routes
// ============================

app.use("/api/auth", authRoutes);

app.use("/api/jobs", jobRoutes);

app.use("/api/applications", applicationRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/resume", resumeRoutes);

// ============================
// Health Check
// ============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SmartHire Backend Running 🚀",
  });
});

// ============================
// Global Error Handler
// ============================

app.use((err, req, res, next) => {
  console.error(err);

  // Multer errors
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      message: "Resume size must be less than 5 MB.",
    });
  }

  if (err.message === "Only PDF and DOCX resumes are allowed.") {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ============================
// MongoDB
// ============================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `🚀 Server running on port ${process.env.PORT || 5000}`
      );
    });
  })
  .catch((err) => {
    console.error("MongoDB Error:", err);
  });