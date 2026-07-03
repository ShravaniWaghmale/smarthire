export default function StatusBadge({ status }) {
  const styles = {
    Applied:
      "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",

    Interview:
      "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",

    Offer:
      "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",

    Rejected:
      "bg-red-500/15 text-red-400 border border-red-500/30",
  };

  return (
    <span
      className={`inline-flex rounded-full px-4 py-1.5 text-xs font-semibold ${
        styles[status] ||
        "bg-gray-700 text-gray-300 border border-gray-600"
      }`}
    >
      {status}
    </span>
  );
}