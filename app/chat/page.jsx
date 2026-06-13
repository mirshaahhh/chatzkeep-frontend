"use client";

import { useState } from "react";
import ChatSidebar from "../../components/chat/ChatSidebar";
import ChatWindow from "../../components/chat/ChatWindow";

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState({
    id: "demo-user-1",
    name: "Dr Sarah Johnson",
    role: "Senior Cardiologist",
    avatar: "https://i.pravatar.cc/150?img=1",
    online: true,
  });

  return (
    <div className="h-screen bg-slate-950 flex overflow-hidden">
      <ChatSidebar
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />

      <ChatWindow selectedChat={selectedChat} />
    </div>
  );
}