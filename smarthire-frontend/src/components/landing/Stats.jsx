import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Users,
  Sparkles,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    number: "25K+",
    label: "Jobs Tracked",
  },
  {
    icon: Users,
    number: "8K+",
    label: "Active Users",
  },
  {
    icon: Sparkles,
    number: "95%",
    label: "Resume Match Accuracy",
  },
  {
    icon: Trophy,
    number: "1200+",
    label: "Offers Received",
  },
];

export default function Stats() {
  return (
    <section className="px-6 py-12">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="relative overflow-hidden text-center transition-all duration-500 border shadow-xl rounded-3xl border-white/10 bg-white/5 p-7 backdrop-blur-xl hover:-translate-y-3 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20 group"
              >

                {/* Glow */}

                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 group-hover:opacity-100" />

                {/* Icon */}

                <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-5 transition-all duration-500 shadow-lg rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-6">

                  <Icon size={30} />

                </div>

                {/* Number */}

                <h2 className="relative text-4xl font-bold tracking-tight text-white">

                  {item.number}

                </h2>

                {/* Label */}

                <p className="relative mt-2 text-gray-400">

                  {item.label}

                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}