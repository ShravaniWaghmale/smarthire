import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10 bg-[#0b1220]/80 backdrop-blur text-white">
      {/* LEFT SIDE LOGO */}
      <div className="text-xl font-bold">
        SmartHire 🚀
      </div>

      {/* RIGHT SIDE NAV LINKS (UPDATED) */}
      <div className="flex items-center gap-8 text-sm text-white/70">
        <Link className="hover:text-white" to="/">
          Home
        </Link>

        {user && (
          <>
            <Link className="hover:text-white" to="/dashboard">
              Dashboard
            </Link>

            <Link className="hover:text-white" to="/jobs">
              Jobs
            </Link>

            <Link className="hover:text-white" to="/applications">
              Applications
            </Link>

            {user.role === "admin" && (
              <Link className="hover:text-white" to="/admin">
                Admin
              </Link>
            )}
          </>
        )}

        {!user ? (
          <>
            <Link className="hover:text-white" to="/login">
              Login
            </Link>

            <Link className="hover:text-white" to="/register">
              Register
            </Link>
          </>
        ) : (
          <ProfileDropdown />
        )}
      </div>
    </nav>
  );
}