"use client";

const demoChats = [
  {
    id: "demo-user-1",
    name: "Dr Sarah Johnson",
    role: "Senior Cardiologist",
    avatar: "https://i.pravatar.cc/150?img=1",
    online: true,
    lastMessage: "Hello, how can I help you?",
  },
  {
    id: "demo-user-2",
    name: "Dr David Wilson",
    role: "Recruiter",
    avatar: "https://i.pravatar.cc/150?img=2",
    online: false,
    lastMessage: "Please share your resume.",
  },
  {
    id: "demo-user-3",
    name: "Dr Emily Brown",
    role: "HR Manager",
    avatar: "https://i.pravatar.cc/150?img=3",
    online: true,
    lastMessage: "Interview scheduled tomorrow.",
  },
];

export default function ChatSidebar({ selectedChat, setSelectedChat }) {
  return (
    <div className="w-96 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col">
      <div className="p-5 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-white">ChatzKeep</h1>
        <p className="text-slate-400 text-sm">Messages</p>
      </div>

      <div className="p-4">
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl outline-none placeholder-slate-400"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {demoChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChat(chat)}
            className={`p-4 cursor-pointer border-b border-slate-800 transition ${
              selectedChat?.id === chat.id
                ? "bg-cyan-500/20"
                : "hover:bg-slate-800"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {chat.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900" />
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-white font-semibold">{chat.name}</h3>
                <p className="text-slate-400 text-sm truncate">
                  {chat.lastMessage}
                </p>
              </div>

              <span className="text-xs text-slate-500">Now</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}