import { useEffect, useState } from "react";

import { getJobs } from "../../api/jobs";
import { getApplications } from "../../api/applications";

import JobCard from "../../components/jobs/JobCard";
import JobFilters from "../../components/jobs/JobFilters";
import JobSkeleton from "../../components/jobs/JobSkeleton";
import JobDetailsModal from "../../components/jobs/JobDetailsModal";

import AppShell from "../../layouts/AppShell";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  const [filteredJobs, setFilteredJobs] = useState([]);

  const [applications, setApplications] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selectedJob, setSelectedJob] = useState(null);

  const refreshApplications = async () => {
    const data = await getApplications();
    setApplications(data);
  };

  useEffect(() => {
    async function loadData() {
      try {
        const [jobsData, applicationsData] = await Promise.all([
          getJobs(),
          getApplications(),
        ]);

        setJobs(jobsData);

        setFilteredJobs(jobsData);

        setApplications(applicationsData);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <AppShell>
      <div className="space-y-8">

        <JobFilters
          jobs={jobs}
          setFilteredJobs={setFilteredJobs}
        />

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1,2,3,4,5,6].map((i)=>(
              <JobSkeleton key={i}/>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.map((job)=>(
              <JobCard
                key={job._id}
                job={job}
                applications={applications}
                onView={setSelectedJob}
              />
            ))}
          </div>
        )}

        <JobDetailsModal
          job={selectedJob}
          applications={applications}
          onApplied={refreshApplications}
          onClose={() => setSelectedJob(null)}
        />

      </div>
    </AppShell>
  );
}