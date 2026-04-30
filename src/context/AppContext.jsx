import {createContext, useState, useContext} from "react";

const AppContext = createContext();

export function AppProvider({children}) {
  const rates = {
    USD: 1,
    ILS: 3.1,
    EUR: 0.9,
  };

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [appSettings, setAppSettings] = useState(() => {
    const savedName = localStorage.getItem("userName");
    return {
      userName: savedName || "",
      emailNotifications: true,
      currency: "USD",
    };
  });

  const login = (name) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", name);
    setAppSettings((prev) => ({...prev, userName: name}));
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    setAppSettings((prev) => ({...prev, userName: ""}));
    setIsAuthenticated(false);
  };

  const updateSettings = (newSettings) => {
    setAppSettings((prev) => ({...prev, ...newSettings}));
  };

  const formatValue = (value, currency) => {
    const converted = value * rates[currency];
    const symbol = currency === "ILS" ? "₪" : currency === "EUR" ? "€" : "$";
    return `${symbol}${converted.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;
  };

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "E-commerce App",
      client: "Fashion Store",
      progress: 75,
      status: "Active",
      budget: 12000,
    },
    {
      id: 2,
      name: "Cybersecurity Audit",
      client: "Bank Secure",
      progress: 100,
      status: "Completed",
      budget: 8500,
    },
    {
      id: 3,
      name: "Landing Page",
      client: "Startup X",
      progress: 30,
      status: "Review",
      budget: 2400,
    },
  ]);

  const addProject = (newProj) => {
    setProjects([{id: Date.now(), ...newProj}, ...projects]);
  };

  return (
    <AppContext.Provider
      value={{
        projects,
        addProject, // מוסיפים את אלו ל-Provider
        isAuthenticated,
        login,
        logout,
        appSettings,
        updateSettings,
        formatValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
