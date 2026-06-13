"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      router.push("/login");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1580281657527-47f249e8f2a6"
          alt="Healthcare"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-teal-900/60 flex flex-col justify-center items-center text-white p-10">
          <h1 className="text-4xl font-bold">Join MediCare</h1>
          <p className="mt-3 text-center text-lg">
            Create your patient account in seconds
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-100">
        <div className="backdrop-blur-xl bg-white/70 shadow-2xl p-10 rounded-2xl w-[90%] max-w-md border border-white">
          <h2 className="text-3xl font-bold text-teal-700 text-center mb-2">
            Create Account
          </h2>

          <p className="text-center text-gray-600 mb-6">
            Register as a patient
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              className="w-full p-3 rounded-lg border bg-white text-black placeholder-gray-500"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              className="w-full p-3 rounded-lg border bg-white text-black placeholder-gray-500"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              className="w-full p-3 rounded-lg border bg-white text-black placeholder-gray-500"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              className="w-full p-3 rounded-lg border bg-white text-black placeholder-gray-500"
              onChange={handleChange}
            />

            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg">
              Register
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-700">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-teal-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}