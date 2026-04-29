function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:flex flex-col">
      <h1 className="text-xl font-bold text-blue-600 mb-6">MyDash</h1>
      <nav className="space-y-2">
        <div className="p-2 bg-blue-50 text-blue-700 rounded cursor-pointer font-medium">
          Dashboard
        </div>
        <div className="p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer transition-colors">
          Orders
        </div>
        <div className="p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer transition-colors">
          Customers
        </div>
        <div className="p-2 text-gray-600 hover:bg-gray-50 rounded cursor-pointer transition-colors">
          Settings
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
