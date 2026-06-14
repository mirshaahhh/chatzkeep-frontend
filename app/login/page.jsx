"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://chatzkeep-backend.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data));

      router.push("/profile");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950 overflow-hidden">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000"
          alt="Hospital"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent"></div>

        <div className="absolute bottom-16 left-12 max-w-lg">
          <h1 className="text-6xl font-black text-white leading-tight">
            ChatzKeep
          </h1>

          <p className="text-slate-300 text-xl mt-4">
            Connect healthcare professionals,
            recruiters and candidates in one
            powerful platform.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">

        {/* Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        {/* Card */}
        <div className="relative w-full max-w-md">

          <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur opacity-40 animate-pulse"></div>

          <div className="relative bg-slate-900/70 backdrop-blur-2xl rounded-[32px] border border-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

            {/* Logo */}
            <div className="text-center mb-8">

              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl">
                🏥
              </div>

              <h1 className="text-4xl font-black text-white">
                ChatzKeep
              </h1>

              <p className="text-slate-400 mt-2">
                Healthcare Recruitment Platform
              </p>

            </div>

            {/* Form */}
            <form
              onSubmit={handleLogin}
              className="space-y-4"
            >

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full h-14 px-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full h-14 px-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
              />

              <div className="flex justify-between text-sm">
                <span className="text-slate-400">
                  Remember me
                </span>

                <span className="text-cyan-400 cursor-pointer">
                  Forgot Password?
                </span>
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-2xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all duration-300"
              >
                Sign In
              </button>

            </form>

            <p className="text-center text-slate-400 mt-6">
              Don't have an account?{" "}
              <span
                onClick={() =>
                  router.push("/register")
                }
                className="text-cyan-400 cursor-pointer hover:text-cyan-300"
              >
                Register
              </span>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}