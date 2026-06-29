import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
  try {
    const res = await API.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    setUser(res.data.user); // ✅ add this line
    navigate("/dashboard");
  } catch {
    alert("Invalid credentials");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220]">

      <div className="w-full max-w-md p-8 border rounded-2xl bg-white/5 border-white/10 backdrop-blur">

        <h1 className="text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-white/60">
          Login to SmartHire
        </p>

        <div className="mt-6 space-y-4">

          <input
            className="w-full p-3 border rounded-lg bg-white/5 border-white/10"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full p-3 border rounded-lg bg-white/5 border-white/10"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <button
          onClick={handleLogin}
          className="w-full p-3 mt-6 font-semibold text-black rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-white/60">
          Don’t have an account?{" "}
          <Link to="/register" className="text-cyan-400">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}