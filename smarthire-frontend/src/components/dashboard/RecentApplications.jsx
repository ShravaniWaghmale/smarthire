import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  MapPin,
  Trash2,
} from "lucide-react";

const badgeColors = {
  Applied: "bg-cyan-500/20 text-cyan-400",
  Interview: "bg-blue-500/20 text-blue-400",
  Offer: "bg-emerald-500/20 text-emerald-400",
  Rejected: "bg-red-500/20 text-red-400",
};

export default function RecentApplications({
  jobs = [],
  onDelete,
}) {
  return (
    <div className="mt-10">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Recent Applications
        </h2>

        <button className="text-cyan-400 hover:text-cyan-300">
          View All
        </button>

      </div>

      <div className="space-y-5">

        {jobs.length === 0 ? (

          <div className="p-12 text-center border border-dashed rounded-3xl border-white/10 bg-white/5">

            <BriefcaseBusiness
              size={45}
              className="mx-auto mb-5 text-cyan-400"
            />

            <h3 className="text-2xl font-semibold">
              No Applications Yet
            </h3>

            <p className="mt-3 text-gray-400">
              Start by adding your first job application.
            </p>

          </div>

        ) : (

          jobs.map((job, index) => (

            <motion.div
              key={job._id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="flex items-center justify-between p-6 border rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl"
            >

              <div>

                <h3 className="text-xl font-semibold">

                  {job.title}

                </h3>

                <p className="mt-2 text-gray-400">

                  {job.company}

                </p>

                <div className="flex items-center gap-4 mt-3">

                  <span className="flex items-center gap-2 text-gray-400">

                    <MapPin size={15} />

                    {job.location}

                  </span>

                  <span
                    className={`rounded-full px-4 py-1 text-sm ${
                      badgeColors[job.status]
                    }`}
                  >

                    {job.status}

                  </span>

                </div>

              </div>

              <button
                onClick={() => onDelete(job._id)}
                className="p-3 text-red-400 transition rounded-xl bg-red-500/10 hover:bg-red-500/20"
              >

                <Trash2 size={18} />

              </button>

            </motion.div>

          ))

        )}

      </div>

    </div>
  );
}