import {createContext, useState, useContext} from "react";

const AppContext = createContext();

export function AppProvider({children}) {
  const [appSettings, setAppSettings] = useState({
    userName: "Yovel",
    emailNotifications: true,
    currency: "USD", // ברירת מחדל
  });

  const updateSettings = (newSettings) => {
    setAppSettings((prev) => ({...prev, ...newSettings}));
  };

  return (
    <AppContext.Provider value={{appSettings, updateSettings}}>
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
