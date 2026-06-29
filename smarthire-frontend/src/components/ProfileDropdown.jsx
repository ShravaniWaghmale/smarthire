import { useState, useContext, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown() {
  const { user, setUser } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const ref = useRef();

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const initial =
    user?.email?.charAt(0)?.toUpperCase() || "U";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 font-bold text-black rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
      >
        {initial}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-64 rounded-xl border border-white/10 bg-[#111827] shadow-xl p-4">
          <p className="text-sm font-medium text-white">
            {user?.email}
          </p>

          <div className="my-3 border-t border-white/10" />

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full py-2 text-left text-white/80 hover:text-white"
          >
            Dashboard
          </button>

          <button
            onClick={logout}
            className="w-full py-2 text-left text-red-400 hover:text-red-300"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}