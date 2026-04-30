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

  return (
    <AppContext.Provider
      value={{
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
