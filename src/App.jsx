import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardHome from "./pages/DashboardHome";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100 font-sans text-left" dir="ltr">
        <Sidebar />

        <main className="flex-1 flex flex-col overflow-hidden">
          <Header title="Admin System" />

          <div className="flex-1 p-8 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
