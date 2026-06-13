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
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );
router.push("/profile");;
    } catch (error) {
  alert(error.response?.data?.message);
}
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070"
          alt="Healthcare"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-700">
            ChatzKeep
          </h1>

          <p className="text-gray-500 mt-2">
            Healthcare Recruitment Platform
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Email Address
            </label>

           <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="auth-input"
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
  className="auth-input"
/>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() =>
              router.push("/register")
            }
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
}