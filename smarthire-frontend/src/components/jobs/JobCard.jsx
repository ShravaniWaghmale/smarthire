import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  IndianRupee,
  Briefcase,
  Clock3,
  CheckCircle,
} from "lucide-react";

export default function JobCard({
  job,
  onView,
  applications = [],
}) {

  const alreadyApplied = applications.some((app) => {
    const appliedJobId =
      typeof app.job === "object"
        ? app.job?._id
        : app.job;

    return String(appliedJobId) === String(job._id);
  });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A]/95 backdrop-blur-xl transition hover:border-cyan-500/40 hover:shadow-xl"
    >

      <div className="flex items-start justify-between p-6">

        <div className="flex gap-4">

          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500">
            <Building2 size={28} className="text-white"/>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              {job.title}
            </h2>

            <p className="mt-1 text-gray-400">
              {job.company}
            </p>
          </div>

        </div>

        {alreadyApplied ? (
          <span className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-400">
            <CheckCircle size={14}/>
            Applied
          </span>
        ) : (
          <span className="px-4 py-2 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-400">
            {job.type}
          </span>
        )}

      </div>

      <div className="px-6 space-y-3">

        <div className="flex items-center gap-2 text-gray-400">
          <MapPin size={16}/>
          {job.location}
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <IndianRupee size={16}/>
          {job.salary}
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <Briefcase size={16}/>
          {job.experience}
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <Clock3 size={16}/>
          Posted Recently
        </div>

      </div>

      <div className="flex flex-wrap gap-2 px-6 mt-6">

        {job.skills?.slice(0,4).map((skill)=>(
          <span
            key={skill}
            className="px-3 py-1 text-xs border rounded-full border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
          >
            {skill}
          </span>
        ))}

      </div>

      <p className="px-6 mt-6 text-sm leading-7 text-gray-400 line-clamp-3">
        {job.description}
      </p>

      <div className="flex justify-end p-6 mt-8 border-t border-white/10">

        <button
          onClick={() => onView(job)}
          className="font-semibold text-cyan-400 hover:text-cyan-300"
        >
          View Details →
        </button>

      </div>

    </motion.div>
  );
}