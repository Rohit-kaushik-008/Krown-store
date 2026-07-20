import { createContext, useContext, useState } from "react";

// Create Context
export const FilterContext = createContext();

// Create Provider Component
export function FilterProvider({ children }) {
  // states
  const [filters, setFilters] = useState({
    categories: [],
    rating: null,
    price: {
      min:null,
      max:null,
    },
    discount: null,
  });
  const [sorting, setSorting] = useState("default");
  const [search, setSearch] = useState("");

  const clearSearch = () => setSearch("");

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,

        sorting,
        setSorting,

        search,
        setSearch,

        clearSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

// Custome Hook
export default function useFilters() {
  return useContext(FilterContext);
}
