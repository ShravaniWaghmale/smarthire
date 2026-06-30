import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

import {
  UserPlus,
  FileUp,
  BriefcaseBusiness,
  BrainCircuit,
  CircleCheckBig,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up securely and create your personalized SmartHire workspace in seconds.",
    icon: UserPlus,
    color: "from-blue-500 to-cyan-500",
  },

  {
    number: "02",
    title: "Upload Your Resume",
    description:
      "Manage multiple resume versions and prepare them for ATS-friendly applications.",
    icon: FileUp,
    color: "from-cyan-500 to-violet-500",
  },

  {
    number: "03",
    title: "Track Every Application",
    description:
      "Organize every application, interview, offer and rejection from one dashboard.",
    icon: BriefcaseBusiness,
    color: "from-violet-500 to-fuchsia-500",
  },

  {
    number: "04",
    title: "Receive AI Insights",
    description:
      "Get personalized resume recommendations and application analytics powered by AI.",
    icon: BrainCircuit,
    color: "from-emerald-500 to-cyan-500",
  },

  {
    number: "05",
    title: "Land Your Dream Job",
    description:
      "Stay organized, confident and focused throughout your placement journey.",
    icon: CircleCheckBig,
    color: "from-orange-500 to-red-500",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative px-6 overflow-hidden py-14 lg:py-16"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] top-0 left-0" />

        <div className="absolute w-[450px] h-[450px] bg-violet-500/10 rounded-full blur-[140px] bottom-0 right-0" />

      </div>

      <div className="max-w-5xl mx-auto">

        <SectionTitle
          badge="Simple Workflow"
          title="How SmartHire Works"
          description="A streamlined process designed to simplify your job search from application to offer letter."
        />

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-8 top-3 bottom-3 w-[2px] rounded-full bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500 opacity-70" />

          <div className="space-y-10 lg:space-y-12">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative flex gap-8"
                >

                  {/* Circle */}

                  <div
                    className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${step.color} shadow-xl`}
                  >

                    <Icon size={28} />

                  </div>

                  {/* Card */}

                  <motion.div
                    whileHover={{
                        y: -6,
                    }}
                    className="relative flex-1 overflow-hidden transition-all duration-500 border p-7 group rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20"
                    >

                    {/* Glow */}

                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 group-hover:opacity-100" />

                    <span className="relative inline-flex px-3 py-1 text-xs font-semibold tracking-[0.25em] uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">

                        Step {step.number}

                    </span>

                    <h3 className="relative mt-5 text-2xl font-bold text-white">

                        {step.title}

                    </h3>

                    <p className="relative mt-4 leading-7 text-gray-400">

                        {step.description}

                    </p>

                    </motion.div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}