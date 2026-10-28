import { createContext, useContext, useState, type ReactNode } from "react";
import type { GlobalContextInterface } from "../Interfaces/ContextInterfaces";
import type { ThemeType } from "../Types/GlobalTypes";

export const GlobalContext = createContext<GlobalContextInterface | undefined>(
  undefined,
);

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
}
