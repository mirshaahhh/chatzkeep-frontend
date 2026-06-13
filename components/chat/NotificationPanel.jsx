"use client";

import { useEffect, useState } from "react";
import socket from "@/lib/socket";

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const handleNotification = (data) => {
      setNotifications((prev) => [data, ...prev]);
    };

    socket.on("newNotification", handleNotification);

    return () => {
      socket.off("newNotification", handleNotification);
    };
  }, []);

  return (
    <div className="w-full md:w-80 bg-slate-900 border-l border-slate-700 text-white">
      <div className="p-5 border-b border-slate-700">
        <h2 className="text-xl font-bold">
          Notifications ({notifications.length})
        </h2>
      </div>

      <div className="p-4 space-y-3 overflow-y-auto">
        {notifications.length === 0 ? (
          <p className="text-slate-400 text-sm">
            No notifications yet
          </p>
        ) : (
          notifications.map((n, index) => (
            <div
              key={index}
              className="bg-slate-800 p-3 rounded-xl"
            >
              <p className="text-sm">{n.text}</p>

              <p className="text-xs text-slate-400 mt-1">
                {new Date(n.time).toLocaleTimeString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}