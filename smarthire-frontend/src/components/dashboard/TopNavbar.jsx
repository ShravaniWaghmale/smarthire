import {
  Bell,
  Search,
  Plus,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { AuthContext } from "../../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Applications",
    path: "/applications",
  },
  {
    name: "Resume AI",
    path: "/resume-ai",
  },
  {
    name: "Analytics",
    path: "/analytics",
  },
];

export default function TopNavbar() {
  const location = useLocation();

  const { user } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  const fullName =
    user?.name ||
    user?.fullName ||
    "User";

  const firstName = fullName.split(" ")[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">

      <div className="mx-auto max-w-[1450px] px-8 pt-8 lg:px-12 xl:px-16">

        <div className="flex h-20 items-center justify-between rounded-3xl border border-white/10 bg-white/[0.03] px-8 backdrop-blur-2xl">

          {/* Logo */}

          <Link
            to="/dashboard"
            className="text-3xl font-black tracking-tight text-white"
          >
            SmartHire
          </Link>

          {/* Navigation */}

          <nav className="items-center hidden gap-10 lg:flex">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-[15px] font-medium transition ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}

                {location.pathname === item.path && (
                  <span className="absolute -bottom-3 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                )}

              </Link>
            ))}

          </nav>

          {/* Right */}

          <div className="flex items-center gap-4">

            {/* Search */}

            <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:bg-white/10">

              <Search size={18} />

            </button>

            {/* Notifications */}

            <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:bg-white/10">

              <Bell size={18} />

              <span className="absolute w-2 h-2 rounded-full right-3 top-3 bg-cyan-400" />

            </button>

            {/* Add Job */}

            <button className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-5 py-2.5 font-medium text-white transition duration-300 hover:scale-105 lg:flex">

              <Plus size={18} />

              Add Job

            </button>

            {/* Avatar */}

            <div
              ref={dropdownRef}
              className="relative"
            >

              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center font-semibold text-white transition duration-300 rounded-full h-11 w-11 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 hover:scale-105"
              >

                {firstName.charAt(0).toUpperCase()}

              </button>

              <ProfileDropdown
                open={open}
                setOpen={setOpen}
              />

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}