import { createContext, useReducer } from "react";
import { BelanjaReducer, initialItem } from "./BelanjaReducer";

export const BelanjaContext = createContext();

export default function BelanjaProvider({ children }) {
  const [items, dispatch] = useReducer(BelanjaReducer, initialItem);

  return (
    <BelanjaContext.Provider value={{ items, dispatch }}>
      {children}
    </BelanjaContext.Provider>
  );
}
