import {Link, useLocation} from "react-router-dom";

export default function Sidebar({isOpen, setIsOpen}) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 p-4 transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-blue-600">MyDash</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-2 text-gray-500"
          >
            ✕
          </button>
        </div>

        <nav className="space-y-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block p-2 rounded ${isActive("/") ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600"}`}
          >
            Dashboard
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={`block p-2 rounded ${isActive("/projects") ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600"}`}
          >
            Projects
          </Link>
          <Link
            to="/orders"
            onClick={() => setIsOpen(false)}
            className={`block p-2 rounded ${isActive("/orders") ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600"}`}
          >
            Orders
          </Link>
          <Link
            to="/customers"
            onClick={() => setIsOpen(false)}
            className={`block p-2 rounded ${isActive("/customers") ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600"}`}
          >
            Customers
          </Link>
          <Link
            to="/settings"
            onClick={() => setIsOpen(false)}
            className={`block p-2 rounded ${isActive("/settings") ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600"}`}
          >
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
}
