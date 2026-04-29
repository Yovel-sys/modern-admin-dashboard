export default function Header({title, onMenuClick}) {
  return (
    <header className="px-8 py-6 flex justify-between items-center bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        {/* כפתור המבורגר - מופיע רק ב-mobile */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500 hidden sm:inline">
          Welcome, Yovel
        </span>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
          YA
        </div>
      </div>
    </header>
  );
}
