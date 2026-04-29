import {Link, useLocation} from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:flex flex-col">
      <h1 className="text-xl font-bold text-blue-600 mb-6">MyDash</h1>
      <nav className="space-y-2">
        <Link
          to="/"
          className={`block p-2 rounded transition-colors ${isActive("/") ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
        >
          Dashboard
        </Link>
        <Link
          to="/orders"
          className={`block p-2 rounded transition-colors ${isActive("/orders") ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
        >
          Orders
        </Link>
        <Link
          to="/customers"
          className={`block p-2 rounded transition-colors ${isActive("/customers") ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
        >
          Customers
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
