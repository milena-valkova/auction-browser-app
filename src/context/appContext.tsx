import { createContext, useState, type ReactNode } from "react";

const AppContext = createContext({
  loading: false,
  setLoading: (arg: boolean) => {}, //type is React.Dispatch<React.SetStateAction<string>>,
  categories: [],
  setCategories: (arg: string[]) => {},
});

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        categories,
        setCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
