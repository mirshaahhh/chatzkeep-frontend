"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import socket from "@/lib/socket";
import MessageInput from "./MessageInput";

export default function ChatWindow({ receiverId }) {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      if (!receiverId) return;

      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat/${receiverId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessages(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [receiverId]);

  useEffect(() => {
    const handleMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("receiveMessage", handleMessage);

    return () => {
      socket.off("receiveMessage", handleMessage);
    };
  }, []);

  if (!receiverId) {
    return (
      <div className="flex-1 flex items-center justify-center text-white">
        Select a user to start chatting
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className="bg-slate-800 text-white px-4 py-2 rounded-xl mb-2 w-fit"
          >
            {msg.text}
          </div>
        ))}
      </div>

      <MessageInput
        receiverId={receiverId}
        refreshMessages={fetchMessages}
      />
    </div>
  );
}