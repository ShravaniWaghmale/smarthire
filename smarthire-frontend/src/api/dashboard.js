import API from "./axios";

export async function getDashboardStats() {
  const { data } = await API.get("/dashboard/stats");
  return data;
}