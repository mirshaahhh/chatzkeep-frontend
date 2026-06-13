"use client";

import ChatSidebar from "../../components/chat/ChatSidebar";
import ChatWindow from "../../components/chat/ChatWindow";
import NotificationPanel from "../../components/chat/NotificationPanel";

export default function ChatPage() {
  return (
    <div className="h-screen flex flex-col md:flex-row bg-slate-950">
      <ChatSidebar />
      <ChatWindow />
      <NotificationPanel />
    </div>
  );
}