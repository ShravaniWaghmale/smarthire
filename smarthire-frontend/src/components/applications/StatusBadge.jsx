export default function StatusBadge({ status }) {
  const styles = {
    Applied:
      "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20",

    Interview:
      "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20",

    Offer:
      "bg-green-500/15 text-green-400 border border-green-500/20",

    Rejected:
      "bg-red-500/15 text-red-400 border border-red-500/20",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] ||
        "bg-gray-500/15 text-gray-300 border border-gray-500/20"
      }`}
    >
      {status}
    </span>
  );
}