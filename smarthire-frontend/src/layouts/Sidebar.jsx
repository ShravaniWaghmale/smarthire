import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext, useRef, useEffect } from "react";

import {
  LayoutDashboard,
  BriefcaseBusiness,
  ClipboardList,
  FileText,
  BarChart3,
  Sparkles,
  ChevronUp,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import LogoutModal from "../components/modals/LogoutModal";

const navigation = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Jobs",
    path: "/jobs",
    icon: BriefcaseBusiness,
  },
  {
    name: "My Applications",
    path: "/my-applications",
    icon: ClipboardList,
  },
  {
    name: "Resume AI",
    path: "/resume",
    icon: FileText,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const { logout, user } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const firstLetter = (user?.name || "U").charAt(0).toUpperCase();
  
  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully 👋");

    navigate("/login");
  };

  return (
    <aside className="sticky top-0 flex h-screen w-[280px] flex-col border-r border-white/10 bg-[#0A1020]/95 backdrop-blur-3xl">

      {/* Logo */}

        <div className="flex items-center gap-3 px-8 py-8 group">

          <div className="flex items-center justify-center transition-all duration-300 shadow-lg h-11 w-11 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-cyan-500/30 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-cyan-500/50">

            <BriefcaseBusiness className="text-white" size={22} />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
              SmartHire
            </h1>

            <p className="text-xs text-gray-400">
              AI Career Platform
            </p>

          </div>

        </div>

      {/* Navigation */}

      <nav className="flex-1 px-5">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">

          AI Career Platform

        </p>

        <div className="space-y-2">

          {navigation.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative flex items-center gap-4 rounded-2xl px-4 py-3 transition ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/15 to-violet-500/15 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="indicator"
                        className="absolute left-0 w-1 rounded-full top-2 bottom-2 bg-gradient-to-b from-cyan-400 to-violet-500"
                      />
                    )}

                    <Icon size={20} />

                    <span className="font-medium">

                      {item.name}

                    </span>

                  </>
                )}
              </NavLink>
            );

          })}

        </div>

      </nav>

      {/* Bottom User */}

      <div
        ref={menuRef}
        className="relative p-6 border-t border-white/10"
      >

        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-4 rounded-3xl bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
        >

          <div className="flex items-center justify-center text-xl font-bold text-white rounded-full h-14 w-14 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500">

            {firstLetter}

          </div>

          <div className="flex-1 min-w-0 text-left">

            <h3 className="truncate text-[15px] font-semibold text-white">

              {user?.name || "User"}

            </h3>

            <p className="text-xs text-gray-400 truncate">

              {user?.email}

            </p>

          </div>

          <ChevronUp
            size={18}
            className={`text-gray-500 transition duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />

        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 12,
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute bottom-[108px] left-6 right-6 overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-2xl"
            >
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/profile");
                }}
                className="w-full px-5 py-3 text-left text-gray-300 transition hover:bg-white/5"
              >
                Profile
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/settings");
                }}
                className="w-full px-5 py-3 text-left text-gray-300 transition hover:bg-white/5"
              >
                Settings
              </button>

              <div className="border-t border-white/10" />

              <button
                onClick={() => {
                  setOpen(false);
                  setShowLogoutModal(true);
                }}
                className="w-full px-5 py-3 text-left text-red-400 transition hover:bg-red-500/10"
              >
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <LogoutModal
        open={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />

    </aside>
  );
}