import { createContext } from "react";

const FavoritesContext = createContext();

export default function FavoritesContextProvider({ children }) {
  return (
    <FavoritesContext.Provider value={{}}>{children}</FavoritesContext.Provider>
  );
}
