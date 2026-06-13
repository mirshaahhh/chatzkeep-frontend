"use client";

import { useState } from "react";
import ChatSidebar from "../../components/chat/ChatSidebar";
import ChatWindow from "../../components/chat/ChatWindow";
import NotificationPanel from "../../components/chat/NotificationPanel";

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="h-screen flex flex-col md:flex-row bg-slate-950">
      <ChatSidebar
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />

      <ChatWindow receiverId={selectedUser?._id} />

      <NotificationPanel />
    </div>
  );
}