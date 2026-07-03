import { Search, ChevronDown } from "lucide-react";
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
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        delay: 0.1,
      }}
      className="flex flex-col gap-4 mb-8 lg:flex-row lg:items-center lg:justify-between"
    >
      {/* Search */}

      <div className="relative w-full lg:max-w-md">

        <Search
          size={18}
          className="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2"
        />

        <input
          type="text"
          placeholder="Search company or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-12 w-full rounded-2xl border border-white/10 bg-[#111827] pl-12 pr-4 text-white outline-none transition focus:border-cyan-500"
        />

      </div>

      {/* Filters */}

      <div className="flex flex-wrap items-center gap-4">

        {/* Status */}

        <div className="relative">

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="h-12 appearance-none rounded-2xl border border-white/10 bg-[#111827] px-5 pr-10 text-white outline-none transition focus:border-cyan-500"
          >
            <option value="All">All Status</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2"
          />

        </div>

        {/* Sort */}

        <div className="relative">

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-12 appearance-none rounded-2xl border border-white/10 bg-[#111827] px-5 pr-10 text-white outline-none transition focus:border-cyan-500"
          >
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
            <option value="Company">Company A-Z</option>
            <option value="Salary">Highest Salary</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2"
          />

        </div>

      </div>

    </motion.div>
  );
}