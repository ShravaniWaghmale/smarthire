import API from "./axios";

export const analyzeResume = async (file) => {
  const formData = new FormData();

  formData.append("resume", file);

  const { data } = await API.post(
    "/resume/analyze",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};