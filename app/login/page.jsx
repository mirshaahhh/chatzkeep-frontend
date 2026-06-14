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
    <div className="min-h-screen flex bg-slate-950">
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000"
          alt="Hospital"
          className="w-full h-full object-cover scale-110 hover:scale-125 transition duration-[4000ms]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/80 to-blue-950/50"></div>

        <div className="absolute bottom-12 left-10 text-white max-w-md">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to ChatzKeep
          </h1>

          <p className="text-lg text-slate-200">
            Connect healthcare professionals, recruiters and candidates on one
            secure platform.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-slate-950 to-blue-950"></div>

        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-xl opacity-30 animate-pulse"></div>

          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white floating-card">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold text-cyan-700">
                ChatzKeep
              </h1>

              <p className="text-gray-500 mt-2">
                Healthcare Recruitment Platform
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-cyan-600 hover:underline font-medium"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-300"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <span
                onClick={() => router.push("/register")}
                className="text-cyan-600 cursor-pointer hover:underline font-semibold"
              >
                Register
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}