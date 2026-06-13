"use client";

import { useState } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import socket from "@/lib/socket";

export default function MessageInput({ receiverId, refreshMessages }) {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      const token = localStorage.getItem("token");

      const newMsg = {
        receiver: receiverId,
        text: message,
      };

      // 1. Save to DB
      await axios.post(
        "http://localhost:5000/api/chat/send",
        newMsg,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // 2. REAL-TIME EMIT (IMPORTANT)
      socket.emit("sendMessage", newMsg);

      setMessage("");

      if (refreshMessages) refreshMessages();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-3 p-4">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 bg-slate-800 text-white rounded-xl px-4 py-3"
        placeholder="Type message..."
      />

      <button
        onClick={sendMessage}
        className="bg-cyan-500 p-4 rounded-xl text-white"
      >
        <IoSend />
      </button>
    </div>
  );
}