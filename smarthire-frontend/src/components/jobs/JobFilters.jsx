import { Search } from "lucide-react";

export default function JobFilters({
  search,
  setSearch,
  location,
  setLocation,
  type,
  setType,
}) {
  return (
    <div className="mb-8 grid gap-4 rounded-3xl border border-white/10 bg-[#0F172A]/95 p-6 md:grid-cols-3">

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
          className="w-full py-3 pl-12 pr-4 text-white border outline-none rounded-2xl border-white/10 bg-white/5 focus:border-cyan-500"
        />

      </div>

      {/* Location */}

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-4 py-3 text-white border outline-none rounded-2xl border-white/10 bg-white/5 focus:border-cyan-500"
      >
        <option value="">All Locations</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Remote">Remote</option>
      </select>

      {/* Job Type */}

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-3 text-white border outline-none rounded-2xl border-white/10 bg-white/5 focus:border-cyan-500"
      >
        <option value="">All Types</option>
        <option value="Full Time">Full Time</option>
        <option value="Internship">Internship</option>
        <option value="Remote">Remote</option>
      </select>

    </div>
  );
}