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

  // Filters
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

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

  // Apply Filters
  useEffect(() => {
    let result = [...jobs];

    if (search.trim()) {
      result = result.filter(
        (job) =>
          job.company.toLowerCase().includes(search.toLowerCase()) ||
          job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (location) {
      result = result.filter(
        (job) => job.location === location
      );
    }

    if (type) {
      result = result.filter(
        (job) => job.type === type
      );
    }

    setFilteredJobs(result);
  }, [search, location, type, jobs]);

  return (
    <AppShell>
      <div className="space-y-8">

        <section className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Jobs
          </p>

          <h1 className="mt-3 text-5xl font-black text-white">
            Apply to your Dream Jobs
          </h1>

          <p className="max-w-2xl mt-4 text-lg leading-8 text-gray-400">
            Browse opportunities tailored for you.
          </p>
        </section>

        <JobFilters
          search={search}
          setSearch={setSearch}
          location={location}
          setLocation={setLocation}
          type={type}
          setType={setType}
        />

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <JobSkeleton key={i} />
            ))}
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="py-20 text-center border border-dashed rounded-3xl border-white/10 bg-white/[0.02]">
            <h2 className="text-2xl font-bold text-white">
              No Jobs Found
            </h2>

            <p className="mt-3 text-gray-400">
              Try changing your filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.map((job) => (
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