import API from "./axios";

// Get all jobs
export const getJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};

// Get one job
export const getJob = async (id) => {
  const res = await API.get(`/jobs/${id}`);
  return res.data;
};

// Create job
export const createJob = async (job) => {
  const res = await API.post("/jobs", job);
  return res.data;
};

// Update job
export const updateJob = async (id, job) => {
  const res = await API.put(`/jobs/${id}`, job);
  return res.data;
};

// Delete job
export const deleteJob = async (id) => {
  const res = await API.delete(`/jobs/${id}`);
  return res.data;
};