"use client";

const users = [
  {
    name: "Dr Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    online: true,
  },
  {
    name: "Dr David Wilson",
    avatar: "https://i.pravatar.cc/150?img=2",
    online: false,
  },
  {
    name: "Dr Emily Brown",
    avatar: "https://i.pravatar.cc/150?img=3",
    online: true,
  },
];

export default function ChatSidebar() {
  return (
    <div className="w-full md:w-80 border-r border-slate-700 bg-slate-900">

      <div className="p-5 border-b border-slate-700">
        <h2 className="text-xl font-bold text-white">
          Messages
        </h2>
      </div>

      <div className="p-4 border-b border-slate-700">
        <input
          type="text"
          placeholder="Search doctors..."
          className="w-full bg-slate-800 text-white rounded-xl px-4 py-3 outline-none"
        />
      </div>

      {users.map((user, index) => (
        <div
          key={index}
          className="p-4 hover:bg-slate-800 cursor-pointer border-b border-slate-800 transition"
        >
          <div className="flex items-center gap-3">

            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />

              {user.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-slate-900"></div>
              )}
            </div>

            <div>
              <h3 className="text-white font-medium">
                {user.name}
              </h3>

              <p className="text-slate-400 text-sm">
                Last message...
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>
  );
}