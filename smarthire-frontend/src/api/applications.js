import axios from "./axios";

export const getApplications = async () => {
  const { data } = await axios.get("/applications");
  return data;
};

export const createApplication = async (application) => {
  const { data } = await axios.post("/applications", application);
  return data;
};

export const updateApplication = async (id, application) => {
  const { data } = await axios.put(`/applications/${id}`, application);
  return data;
};

export const deleteApplication = async (id) => {
  const { data } = await axios.delete(`/applications/${id}`);
  return data;
};

export const applyJob = async (jobId) => {
  const { data } = await axios.post(`/applications/apply/${jobId}`);
  return data;
};