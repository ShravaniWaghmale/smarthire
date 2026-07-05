import API from "./axios";

export const getJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};

export const getJob = async (id) => {
  const res = await API.get(`/jobs/${id}`);
  return res.data;
};