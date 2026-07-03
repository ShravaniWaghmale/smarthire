import AppShell from "../../layouts/AppShell";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  CalendarDays,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const stats = [
    {
      title: "Applications",
      value: "18",
      icon: BriefcaseBusiness,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Interviews",
      value: "6",
      icon: CalendarDays,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Resume Score",
      value: "89%",
      icon: FileText,
      color: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <AppShell>

      <div className="mx-auto max-w-7xl">

        {/* Hero */}

        <section className="mb-10">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">

            Dashboard

          </p>

          <h1 className="mt-3 text-5xl font-black text-white">

            Welcome back 👋

          </h1>

          <p className="max-w-2xl mt-4 text-lg leading-8 text-gray-400">

            Track applications, prepare for interviews and improve your
            resume—all from one place.

          </p>

        </section>

        {/* Quick Actions */}

        <section className="flex flex-wrap gap-4 mb-10">

          <Link
            to="/applications"
            className="px-6 py-3 font-semibold text-white transition rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 hover:scale-105"
          >

            <div className="flex items-center gap-2">

              <Plus size={18} />

              Add Application

            </div>

          </Link>

          <Link
            to="/resume"
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >

            Improve Resume

          </Link>

        </section>

        {/* Stats */}

        <section className="grid gap-6 md:grid-cols-3">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/[0.05]"
              >

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
                >

                  <Icon size={24} className="text-white" />

                </div>

                <h2 className="mt-8 text-4xl font-black text-white">

                  {item.value}

                </h2>

                <p className="mt-2 text-gray-400">

                  {item.title}

                </p>

              </div>

            );

          })}

        </section>

        {/* Two Column */}

        <section className="grid gap-6 mt-10 lg:grid-cols-2">

          {/* Recent Applications */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-2xl font-bold text-white">

                  Recent Applications

                </h2>

                <p className="mt-2 text-gray-400">

                  Your latest job applications.

                </p>

              </div>

              <Link
                to="/applications"
                className="transition text-cyan-400 hover:text-cyan-300"
              >

                <ArrowUpRight />

              </Link>

            </div>

            <div className="space-y-5">

              {[
                {
                  company: "Google",
                  role: "Frontend Intern",
                },
                {
                  company: "Amazon",
                  role: "SDE Intern",
                },
                {
                  company: "Microsoft",
                  role: "Software Engineer",
                },
              ].map((job) => (

                <div
                  key={job.company}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111827]/60 p-5"
                >

                  <div>

                    <h3 className="font-semibold text-white">

                      {job.company}

                    </h3>

                    <p className="mt-1 text-sm text-gray-400">

                      {job.role}

                    </p>

                  </div>

                  <span className="px-4 py-2 text-sm rounded-full bg-cyan-500/10 text-cyan-400">

                    Applied

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Weekly Goal */}

          <div className="p-8 border rounded-3xl border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10">

            <h2 className="text-2xl font-bold text-white">

              Weekly Goal

            </h2>

            <p className="mt-3 text-gray-400">

              Apply to 10 companies this week.

            </p>

            <div className="mt-10">

              <div className="flex items-center justify-between mb-3">

                <span className="text-gray-300">

                  Progress

                </span>

                <span className="font-semibold text-white">

                  7 / 10

                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />

              </div>

            </div>

            <p className="mt-10 text-sm leading-7 text-gray-400">

              You're doing great! Three more applications and you'll complete
              your weekly target.

            </p>

          </div>

        </section>

      </div>

    </AppShell>
  );
}