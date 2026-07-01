import { useEffect, useState } from "react";

import API from "../../api/axios";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import DashboardHero from "../../components/dashboard/DashboardHero";
import StatsGrid from "../../components/dashboard/StatsGrid";
import AnalyticsSection from "../../components/dashboard/AnalyticsSection";
import ApplicationsTable from "../../components/dashboard/ApplicationsTable";
import RightPanel from "../../components/dashboard/RightPanel";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const deleteJob = async (id) => {
    try {
      await API.delete(`/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>

      <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-12">

        {/* Hero */}

        <DashboardHero />

        {/* Stats */}

        <StatsGrid jobs={jobs} />

        {/* Analytics + Right Panel */}

        <section className="grid items-start gap-8 xl:grid-cols-[2.2fr_320px]">

          <AnalyticsSection />

          <div className="sticky self-start top-28">

            <RightPanel jobs={jobs} />

          </div>

        </section>

        {/* Applications */}

        <ApplicationsTable
          jobs={jobs}
          onDelete={deleteJob}
        />

      </div>

    </DashboardLayout>
  );
}