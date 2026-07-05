import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ApplicationsFilters({
  search,
  setSearch,
  status,
  setStatus,
  sort,
  setSort,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mb-8"
    >
      <div className="grid gap-4 rounded-3xl border border-white/10 bg-[#0F172A]/95 p-6 lg:grid-cols-3">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2"
          />

          <input
            type="text"
            placeholder="Search company or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-12 pr-4 text-white transition border outline-none rounded-2xl border-white/10 bg-white/5 focus:border-cyan-500"
          />

        </div>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-cyan-500"
        >
          <option className="bg-[#111827] text-white" value="All">
            All Status
          </option>
          <option className="bg-[#111827] text-white" value="Applied">
            Applied
          </option>
          <option className="bg-[#111827] text-white" value="Interview">
            Interview
          </option>
          <option className="bg-[#111827] text-white" value="Offer">
            Offer
          </option>
          <option className="bg-[#111827] text-white" value="Rejected">
            Rejected
          </option>
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-cyan-500"
        >
          <option className="bg-[#111827] text-white" value="Newest">
            Newest First
          </option>
          <option className="bg-[#111827] text-white" value="Oldest">
            Oldest First
          </option>
          <option className="bg-[#111827] text-white" value="Company">
            Company A-Z
          </option>
          <option className="bg-[#111827] text-white" value="Salary">
            Highest Salary
          </option>
        </select>

      </div>
    </motion.div>
  );
}