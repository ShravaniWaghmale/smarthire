import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220]">

      <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">

        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-center text-white/60 mt-2">
          Join SmartHire
        </p>

        <div className="mt-6 space-y-4">

          <input
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <button
          onClick={handleRegister}
          className="w-full mt-6 p-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-semibold"
        >
          Register
        </button>

        <p className="text-center text-white/60 mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}