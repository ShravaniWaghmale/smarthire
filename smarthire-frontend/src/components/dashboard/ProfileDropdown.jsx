import { AnimatePresence, motion } from "framer-motion";
import {
  User,
  Settings,
  LogOut,
  CircleHelp,
  ChevronRight,
} from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function ProfileDropdown({ open, setOpen }) {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const fullName =
    user?.name ||
    user?.fullName ||
    "User";

  const firstName = fullName.split(" ")[0];

  const avatar = firstName.charAt(0).toUpperCase();

  const menuItems = [
    {
      title: "My Profile",
      icon: User,
      path: "/profile",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
    {
      title: "Help Center",
      icon: CircleHelp,
      path: "/help",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 14,
            scale: 0.97,
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute right-0 top-16 z-[999] w-80 overflow-hidden rounded-[28px] border border-white/10 bg-[#09111f]/95 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
        >

          {/* User Info */}

          <div className="p-6 border-b border-white/10">

            <div className="flex items-center gap-4">

              <div className="flex items-center justify-center text-xl font-bold text-white h-14 w-14 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500">

                {avatar}

              </div>

              <div>

                <h2 className="text-lg font-semibold text-white">

                  {fullName}

                </h2>

                <p className="mt-1 text-sm text-gray-400">

                  Welcome back 👋

                </p>

              </div>

            </div>

          </div>

          {/* Menu */}

          <div className="p-3">

            {menuItems.map((item) => {

              const Icon = item.icon;

              return (

                <button
                  key={item.title}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between w-full px-4 py-4 text-gray-300 transition-all duration-300 group rounded-2xl hover:bg-white/5 hover:text-white"
                >

                  <div className="flex items-center gap-4">

                    <Icon
                      size={19}
                      className="text-cyan-400"
                    />

                    <span className="font-medium">

                      {item.title}

                    </span>

                  </div>

                  <ChevronRight
                    size={17}
                    className="transition-all duration-300 translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  />

                </button>

              );

            })}

            <div className="h-px my-3 bg-white/10" />

            {/* Logout */}

            <button
              onClick={handleLogout}
              className="flex items-center w-full gap-4 px-4 py-4 text-red-400 transition-all duration-300 rounded-2xl hover:bg-red-500/10"
            >

              <LogOut size={19} />

              <span className="font-medium">

                Logout

              </span>

            </button>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}