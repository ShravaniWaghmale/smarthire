import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      login(res.data.token);

      toast.success("Welcome Back 👋");

      navigate("/dashboard");
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        "Invalid email or password.";

      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-[#07111f]">
      <div className="w-full max-w-md p-8 border shadow-2xl rounded-3xl bg-white/5 backdrop-blur-xl border-white/10">

        <h1 className="text-4xl font-bold text-center text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-sm text-center text-gray-400">
          Login to continue using SmartHire
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 text-white border rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pr-12 text-white border rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-cyan-400"
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
          </div>

          {error && (
            <div className="text-sm text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 font-semibold text-black rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-[1.02] disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="mt-6 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-cyan-400"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}