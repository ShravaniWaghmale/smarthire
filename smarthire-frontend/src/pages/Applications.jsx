import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      const res = await API.get("/applications");
      setApplications(res.data);
    };

    fetchApps();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1220] text-white p-8">
      <h1 className="mb-6 text-3xl font-bold">
        My Applications 📋
      </h1>

      {applications.length === 0 ? (
        <p className="text-white/60">
          No applications yet.
        </p>
      ) : (
        <div className="space-y-3">
          {applications.map((app) => (
            <div
              key={app._id}
              className="p-4 border rounded-lg border-white/10 bg-white/5"
            >
              <h2 className="font-semibold">
                {app.jobId?.title}
              </h2>

              <p className="text-sm text-white/60">
                {app.jobId?.company} • {app.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}