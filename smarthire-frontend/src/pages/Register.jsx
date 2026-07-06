import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);

      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      login(res.data.token);

      toast.success("Registration Successful 🎉");

      navigate("/dashboard");
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#07111f]">

      <div className="w-full max-w-md p-8 border rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">

        <h1 className="text-4xl font-bold text-center text-white">
          Create Account
        </h1>

        <p className="mt-2 text-sm text-center text-gray-400">
          Join SmartHire
        </p>

        <div className="mt-8 space-y-5">

          <input
            className="w-full p-3 text-white border rounded-xl border-white/10 bg-white/5"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full p-3 text-white border rounded-xl border-white/10 bg-white/5"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-3 pr-12 text-white border rounded-xl border-white/10 bg-white/5"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-gray-400 -translate-y-1/2 right-4 top-1/2 hover:text-cyan-400"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          <button
            disabled={loading}
            onClick={handleRegister}
            className="w-full py-3 font-semibold text-black rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 disabled:opacity-50"
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>

        </div>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}