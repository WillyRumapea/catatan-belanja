import { createContext, useReducer } from "react";
import { BelanjaReducer, initialItem } from "./BelanjaReducer";
import { useState } from "react";

export const BelanjaContext = createContext();

export default function BelanjaProvider({ children }) {
  const [items, dispatch] = useReducer(BelanjaReducer, initialItem);
  const [filteredItems, setFilteredItems] = useState([]);

  return (
    <BelanjaContext.Provider
      value={{ items, dispatch, filteredItems, setFilteredItems }}
    >
      {children}
    </BelanjaContext.Provider>
  );
}
