function Header({title}) {
  return (
    <header className="mb-8 px-8 py-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">Welcome back, Yovel</span>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          YA
        </div>
      </div>
    </header>
  );
}

export default Header;
