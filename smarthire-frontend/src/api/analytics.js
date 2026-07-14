import API from "./axios";

export async function getAnalytics() {
  const { data } = await API.get("/analytics");
  return data;
}