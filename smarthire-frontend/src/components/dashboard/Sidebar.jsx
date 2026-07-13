import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  BrainCircuit,
  ChartColumn,
  Settings,
  LogOut,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";

const menu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Applications",
    icon: BriefcaseBusiness,
    path: "/applications",
  },
  {
    name: "Resume AI",
    icon: BrainCircuit,
    path: "/resume-ai",
  },
  {
    name: "Resume Manager",
    icon: FileText,
    path: "/resumes",
  },
  {
    name: "Analytics",
    icon: ChartColumn,
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-72 border-r border-white/10 bg-[#050B16]/80 backdrop-blur-2xl lg:flex lg:flex-col">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      </div>

      {/* Logo */}

      <div className="px-8 py-8 border-b border-white/10">

        <div className="flex items-center gap-4">

          <motion.div
            whileHover={{ rotate: 10, scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center shadow-lg h-14 w-14 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/30"
          >
            <BriefcaseBusiness size={26} />
          </motion.div>

          <div>

            <h2 className="text-2xl font-bold tracking-wide text-white">
              SmartHire
            </h2>

            <p className="flex items-center gap-1 text-xs text-cyan-400">
              <Sparkles size={12} />
              Premium Career Platform
            </p>

          </div>

        </div>

      </div>

      {/* User */}

      <div className="px-6 py-6">

        <div className="p-5 border rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="flex items-center justify-center text-xl font-bold shadow-lg h-14 w-14 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/20">

              {(user?.name || user?.email || "U")
                .charAt(0)
                .toUpperCase()}

            </div>

            <div className="flex-1 min-w-0">

              <h3 className="text-lg font-semibold text-white truncate">
                {user?.name || "User"}
              </h3>

              <p className="text-sm text-gray-400 truncate">
                {user?.email}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5">

        <div className="space-y-2">

          {menu.map((item) => {
            const Icon = item.icon;

            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                  active
                    ? "border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 text-white shadow-lg shadow-cyan-500/10"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-4">

                  <Icon
                    size={21}
                    className={`transition-all duration-300 ${
                      active
                        ? "scale-110 text-cyan-400"
                        : "group-hover:scale-110"
                    }`}
                  />

                  <span className="font-medium">
                    {item.name}
                  </span>

                </div>

                <ChevronRight
                  size={18}
                  className={`transition-all ${
                    active
                      ? "translate-x-1 text-cyan-400"
                      : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                  }`}
                />

              </Link>
            );
          })}

        </div>

      </nav>

      {/* Upgrade Card */}

      <div className="px-6 pb-5">

        <div className="p-5 overflow-hidden border rounded-3xl border-cyan-500/20 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-violet-500/15">

          <p className="text-xs uppercase tracking-[3px] text-cyan-400">
            SmartHire AI
          </p>

          <h3 className="mt-2 text-lg font-bold text-white">
            AI Career Assistant
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-300">
            Resume reviews, interview preparation and personalized career
            insights powered by AI.
          </p>

        </div>

      </div>

      {/* Logout */}

      <div className="p-6 border-t border-white/10">

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 font-medium text-red-300 transition-all duration-300 hover:scale-[1.02] hover:bg-red-500/20"
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
}