"use client";

import { useState } from "react";
import { IoSend } from "react-icons/io5";

export default function ChatWindow({ selectedChat }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, welcome to ChatzKeep!",
      sender: "other",
      time: "10:20 AM",
    },
    {
      id: 2,
      text: "Hi doctor, I wanted to discuss an opportunity.",
      sender: "me",
      time: "10:21 AM",
    },
    {
      id: 3,
      text: "Sure, please send the details.",
      sender: "other",
      time: "10:22 AM",
    },
  ]);

  const [message, setMessage] = useState("");

  const sendDemoMessage = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: message,
        sender: "me",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setMessage("");
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-950">
      <div className="h-20 bg-slate-900 border-b border-slate-800 px-6 flex items-center gap-4">
        <img
          src={selectedChat.avatar}
          alt={selectedChat.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h2 className="text-white font-bold text-lg">{selectedChat.name}</h2>
          <p className="text-sm text-green-400">
            {selectedChat.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[radial-gradient(circle_at_top,_#0f766e22,_transparent_35%)]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl shadow ${
                msg.sender === "me"
                  ? "bg-cyan-500 text-white rounded-br-none"
                  : "bg-slate-800 text-slate-100 rounded-bl-none"
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-[11px] mt-1 opacity-70 text-right">
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-900 border-t border-slate-800 flex gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendDemoMessage();
          }}
          placeholder="Type your message..."
          className="flex-1 bg-slate-800 text-white px-5 py-3 rounded-xl outline-none placeholder-slate-400"
        />

        <button
          onClick={sendDemoMessage}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 rounded-xl flex items-center justify-center"
        >
          <IoSend size={22} />
        </button>
      </div>
    </div>
  );
}