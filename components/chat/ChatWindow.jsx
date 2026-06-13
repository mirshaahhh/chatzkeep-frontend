import { useEffect, useState } from "react";
import socket from "@/lib/socket";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleMessage = (msg) => {
      console.log("Received message:", msg);

      setMessages((prev) => [...prev, msg]);
    };

    socket.on("receiveMessage", handleMessage);

    return () => {
      socket.off("receiveMessage", handleMessage);
    };
  }, []);

  return (
    <div>
      {messages.map((msg, i) => (
        <div key={i}>
          {msg.text}
        </div>
      ))}
    </div>
  );
}