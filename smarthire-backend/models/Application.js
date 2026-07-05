import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    // Candidate
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Job
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "Remote",
    },

    salary: {
      type: String,
    },

    status: {
      type: String,
      enum: [
        "Applied",
        "Under Review",
        "Interview",
        "Offer",
        "Rejected",
      ],
      default: "Applied",
    },

    coverLetter: {
      type: String,
      default: "",
    },

    resumeUrl: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Application", applicationSchema);