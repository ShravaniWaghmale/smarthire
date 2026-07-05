import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      default: "Not Disclosed",
    },

    experience: {
      type: String,
      default: "0-2 Years",
    },

    type: {
      type: String,
      enum: ["Full Time", "Internship", "Part Time", "Remote"],
      default: "Full Time",
    },

    description: {
      type: String,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    deadline: Date,

    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Job", jobSchema);