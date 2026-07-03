import { AnimatePresence, motion } from "framer-motion";
import {
  User,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function ProfileDropdown({ open, setOpen }) {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  const firstLetter = (user?.name || "U").charAt(0).toUpperCase();

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, [setOpen]);

  const menu = [
    {
      icon: User,
      title: "My Profile",
      path: "/profile",
    },
    {
      icon: Settings,
      title: "Settings",
      path: "/settings",
    },
  ];

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          ref={dropdownRef}
          initial={{
            opacity: 0,
            y: 12,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 12,
            scale: 0.96,
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute right-0 mt-4 w-80 overflow-hidden rounded-3xl border border-white/10 bg-[#0E1628]/95 shadow-2xl backdrop-blur-3xl"
        >

          {/* User */}

          <div className="p-6 border-b border-white/10">

            <div className="flex items-center gap-4">

              <div className="flex items-center justify-center text-lg font-bold text-white h-14 w-14 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500">

                {firstLetter}

              </div>

              <div>

                <h2 className="font-semibold text-white">

                  {user?.name || "User"}

                </h2>

                <p className="text-sm text-gray-400">

                  {user?.email}

                </p>

              </div>

            </div>

          </div>

          {/* Menu */}

          <div className="p-3">

            {menu.map((item) => {

              const Icon = item.icon;

              return (

                <button
                  key={item.title}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between w-full px-4 py-3 transition group rounded-2xl hover:bg-white/5"
                >

                  <div className="flex items-center gap-3">

                    <Icon
                      size={19}
                      className="text-gray-400 group-hover:text-cyan-400"
                    />

                    <span className="font-medium text-white">

                      {item.title}

                    </span>

                  </div>

                  <ChevronRight
                    size={17}
                    className="text-gray-500"
                  />

                </button>

              );

            })}

          </div>

          <div className="h-px mx-4 bg-white/10" />

          {/* Logout */}

          <div className="p-3">

            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="flex items-center w-full gap-3 px-4 py-3 text-red-400 transition rounded-2xl hover:bg-red-500/10"
            >

              <LogOut size={19} />

              Logout

            </button>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}