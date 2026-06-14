"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://chatzkeep-backend.onrender.com";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data));

      router.push("/profile");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070"
          alt="Healthcare"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-cyan-950/80" />
      </div>

      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl overflow-hidden">
        <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-cyan-500/30 to-blue-600/20">
          <div>
            <h1 className="text-5xl font-extrabold text-white">
              ChatzKeep
            </h1>
            <p className="text-cyan-100 mt-4 text-lg">
              Healthcare recruitment and messaging platform.
            </p>
          </div>

          <div className="space-y-4 text-white">
            <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
              ✅ Secure candidate login
            </div>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
              💬 Chat with recruiters
            </div>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
              🏥 Healthcare job connections
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Welcome Back
            </h2>
            <p className="text-slate-500 mt-2">
              Sign in to continue to your account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                required
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-slate-600">
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
              disabled={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 text-white font-semibold py-3 rounded-xl transition"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-slate-600">
            Don&apos;t have an account?{" "}
            <span
              onClick={() => router.push("/register")}
              className="text-cyan-600 cursor-pointer hover:underline font-semibold"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}