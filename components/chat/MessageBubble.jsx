export default function MessageBubble({
  message,
  isOwn,
}) {
  return (
    <div
      className={`flex ${
        isOwn
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-sm px-4 py-3 rounded-2xl shadow-lg ${
          isOwn
            ? "bg-cyan-500 text-white rounded-br-md"
            : "bg-slate-800 text-white rounded-bl-md"
        }`}
      >
        {message}
      </div>
    </div>
  );
}