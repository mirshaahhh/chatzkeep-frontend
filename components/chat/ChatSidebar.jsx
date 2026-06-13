"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ChatSidebar({ selectedUser, setSelectedUser }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(res.data.data);
    } catch (error) {
      console.error("Fetch users error:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="w-full md:w-80 border-r border-slate-700 bg-slate-900">
      <div className="p-5 border-b border-slate-700">
        <h2 className="text-xl font-bold text-white">Messages</h2>
      </div>

      <div className="p-4 border-b border-slate-700">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full bg-slate-800 text-white rounded-xl px-4 py-3 outline-none"
        />
      </div>

      {users.map((user) => (
        <div
          key={user._id}
          onClick={() => setSelectedUser(user)}
          className={`p-4 cursor-pointer border-b border-slate-800 transition ${
            selectedUser?._id === user._id
              ? "bg-slate-800"
              : "hover:bg-slate-800"
          }`}
        >
          <div className="flex items-center gap-3">
            <img
              src={
                user.profileImage ||
                "https://i.pravatar.cc/150?img=12"
              }
              alt={user.fullName}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h3 className="text-white font-medium">
                {user.fullName}
              </h3>

              <p className="text-slate-400 text-sm">
                {user.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}