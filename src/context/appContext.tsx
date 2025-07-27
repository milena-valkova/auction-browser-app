import React from "react";
import { createContext, useState, type ReactNode } from "react";

const AppContext = createContext({
  loading: false,
  setLoading: React.Dispatch<React.SetStateAction<string>>,
});

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
