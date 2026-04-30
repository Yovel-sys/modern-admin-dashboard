import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardHome from "./pages/DashboardHome";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import {Toaster} from "react-hot-toast";
import Settings from "./pages/Settings";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 font-sans text-left" dir="ltr">
        <Toaster position="top-center" reverseOrder={false} />
        <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

        <main className="flex-1 flex flex-col overflow-hidden">
          <Header
            title="Admin System"
            onMenuClick={() => setIsMobileMenuOpen(true)}
          />

          <div className="flex-1 p-8 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
