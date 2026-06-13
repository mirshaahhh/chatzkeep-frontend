"use client";

import { useState } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import socket from "@/lib/socket";

export default function MessageInput({ receiverId, refreshMessages }) {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;
    if (!receiverId) {
      alert("Please select a user first");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat/send`,
        {
          receiver: receiverId,
          text: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      socket.emit("sendMessage", res.data.data);

      setMessage("");

      if (refreshMessages) refreshMessages();
    } catch (error) {
      console.error("Send message error:", error);
      alert(error.response?.data?.message || "Message send failed");
    }
  };

  return (
    <div className="flex gap-3 p-4 border-t border-slate-800">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
        className="flex-1 bg-slate-800 text-white rounded-xl px-4 py-3 outline-none"
        placeholder="Type message..."
      />

      <button
        onClick={sendMessage}
        className="bg-cyan-500 hover:bg-cyan-600 p-4 rounded-xl text-white"
      >
        <IoSend />
      </button>
    </div>
  );
}