import { Search, ArrowUpDown, Filter } from "lucide-react";
import { motion } from "framer-motion";

const statuses = [
  "All",
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
];

const sortOptions = [
  "Newest",
  "Oldest",
  "Company (A-Z)",
  "Company (Z-A)",
];

export default function ApplicationsToolbar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between"
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
          className="h-12 w-full rounded-2xl border border-white/10 bg-[#0F172A]/60 pl-12 pr-4 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-500"
        />
      </div>

      {/* Filters */}

      <div className="flex flex-col gap-4 sm:flex-row">
        {/* Status */}

        <div className="relative">
          <Filter
            size={16}
            className="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-12 min-w-[180px] appearance-none rounded-2xl border border-white/10 bg-[#0F172A]/60 pl-11 pr-10 text-white outline-none transition focus:border-cyan-500"
          >
            {statuses.map((status) => (
              <option
                key={status}
                value={status}
                className="bg-[#111827]"
              >
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}

        <div className="relative">
          <ArrowUpDown
            size={16}
            className="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-12 min-w-[190px] appearance-none rounded-2xl border border-white/10 bg-[#0F172A]/60 pl-11 pr-10 text-white outline-none transition focus:border-cyan-500"
          >
            {sortOptions.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-[#111827]"
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
}