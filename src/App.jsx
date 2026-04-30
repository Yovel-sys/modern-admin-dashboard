import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardHome from "./pages/DashboardHome";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import {Toaster} from "react-hot-toast";
import Settings from "./pages/Settings";
import {useApp} from "./context/AppContext";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import {AnimatePresence} from "framer-motion";
import {useLocation} from "react-router-dom";
import PageTransition from "./components/PageTransition";

function App() {
  const {isAuthenticated} = useApp();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // אם המשתמש לא מחובר - תציג רק את דף ההתחברות
  if (!isAuthenticated) {
    return (
      <Router>
        <Toaster position="top-center" />
        <Login />
      </Router>
    );
  }

  // אם הוא מחובר - תציג את כל האפליקציה כרגיל

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-left" dir="ltr">
      <Toaster position="top-center" reverseOrder={false} />
      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header
          title="Admin System"
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />

        <div className="flex-1 p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <DashboardHome />
                  </PageTransition>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageTransition>
                    <Projects />
                  </PageTransition>
                }
              />
              <Route
                path="/orders"
                element={
                  <PageTransition>
                    <Orders />
                  </PageTransition>
                }
              />
              <Route
                path="/settings"
                element={
                  <PageTransition>
                    <Settings />
                  </PageTransition>
                }
              />
              <Route
                path="/customers"
                element={
                  <PageTransition>
                    <Customers />
                  </PageTransition>
                }
              />
              <Route
                path="/projects/:id"
                element={
                  <PageTransition>
                    <ProjectDetails />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default App;
