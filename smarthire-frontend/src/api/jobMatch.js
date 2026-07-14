import API from "./axios";

export const analyzeJobMatch = async (resumeText, jobDescription) => {
  const { data } = await API.post("/resume/job-match", {
    resumeText,
    jobDescription,
  });

  return data;
};