import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Microsoft",
    review:
      "SmartHire completely changed the way I managed my job search. The dashboard kept everything organized and I landed my dream role in just a few weeks.",
  },
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    company: "Amazon",
    review:
      "The AI resume insights helped me improve my resume significantly. Interview tracking and reminders made the whole process stress-free.",
  },
  {
    name: "Emily Carter",
    role: "Product Designer",
    company: "Google",
    review:
      "Beautiful UI, easy to use, and incredibly helpful. SmartHire became my personal career companion throughout the hiring process.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative px-6 overflow-hidden py-14 lg:py-16"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-600/15 blur-[140px] top-0 left-[-120px]" />

        <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-[140px] bottom-0 right-[-120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          badge="Testimonials"
          title="Trusted by Thousands of Job Seekers"
          subtitle="Students and professionals rely on SmartHire to organize applications, prepare for interviews, and land better opportunities."
        />

        <div className="grid gap-8 mt-14 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="relative p-8 overflow-hidden transition-all duration-500 border shadow-xl group rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-3 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Premium Hover Overlay */}

              <div className="absolute inset-0 transition duration-500 opacity-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Stars + Quote */}

                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="#FACC15"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>

                  <Quote
                    size={36}
                    className="transition-all duration-500 text-cyan-400 group-hover:rotate-12 group-hover:scale-110"
                  />
                </div>

                {/* Review */}

                <p className="italic leading-8 text-gray-300">
                  "{item.review}"
                </p>

                {/* User */}

                <div className="flex items-center gap-4 mt-8">
                  {/* Avatar */}

                  <div className="flex items-center justify-center w-16 h-16 text-lg font-bold transition-all duration-500 shadow-lg rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-6">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {item.role}
                    </p>

                    <span className="inline-block px-3 py-1 mt-2 text-xs font-semibold border rounded-full bg-cyan-500/10 border-cyan-500/20 text-cyan-400">
                      {item.company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}