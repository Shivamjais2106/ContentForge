export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl" />
      </div>
      {/* Card */}
      <div>
        {children}
      </div>
    </div>
  );
}