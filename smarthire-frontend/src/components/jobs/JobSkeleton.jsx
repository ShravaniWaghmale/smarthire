export default function JobSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A]/95">
      {/* Header */}

      <div className="flex items-start gap-4 p-6">
        <div className="w-16 h-16 rounded-2xl bg-white/10" />

        <div className="flex-1">
          <div className="w-40 h-5 rounded bg-white/10" />

          <div className="h-4 mt-3 rounded w-28 bg-white/10" />
        </div>
      </div>

      {/* Details */}

      <div className="px-6 space-y-3">
        <div className="h-4 rounded w-36 bg-white/10" />

        <div className="h-4 rounded w-28 bg-white/10" />

        <div className="w-32 h-4 rounded bg-white/10" />

        <div className="w-24 h-4 rounded bg-white/10" />
      </div>

      {/* Skills */}

      <div className="flex gap-2 px-6 mt-6">
        <div className="w-16 rounded-full h-7 bg-white/10" />

        <div className="w-20 rounded-full h-7 bg-white/10" />

        <div className="rounded-full h-7 w-14 bg-white/10" />
      </div>

      {/* Description */}

      <div className="p-6 space-y-3">
        <div className="w-full h-3 rounded bg-white/10" />

        <div className="w-11/12 h-3 rounded bg-white/10" />

        <div className="w-9/12 h-3 rounded bg-white/10" />
      </div>

      {/* Footer */}

      <div className="flex items-center justify-between p-6 border-t border-white/10">
        <div className="w-24 h-4 rounded bg-white/10" />

        <div className="w-32 h-11 rounded-2xl bg-white/10" />
      </div>
    </div>
  );
}