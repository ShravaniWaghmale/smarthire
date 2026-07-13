import { motion } from "framer-motion";

export default function AnalyticsChart() {
  const data = [
    { label: "Applied", value: 80, color: "bg-cyan-400" },
    { label: "Interview", value: 55, color: "bg-blue-400" },
    { label: "Offer", value: 35, color: "bg-emerald-400" },
    { label: "Rejected", value: 25, color: "bg-red-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 border rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <h2 className="mb-8 text-2xl font-bold text-white">
        Application Analytics
      </h2>

      <div className="space-y-7">
        {data.map((item) => (
          <div key={item.label}>

            <div className="flex justify-between mb-2">

              <span className="text-gray-300">
                {item.label}
              </span>

              <span className="font-semibold text-white">
                {item.value}%
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`h-full rounded-full ${item.color}`}
              />

            </div>

          </div>
        ))}
      </div>
    </motion.div>
  );
}