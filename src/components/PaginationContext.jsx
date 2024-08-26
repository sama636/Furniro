import { createContext, useContext, useState } from "react";

// Create the context
const PaginationContext = createContext();

// Create a provider component
export function PaginationProvider({ children }) {
  const [productsPerPage, setProductsPerPage] = useState(8); // Default to 8 products per page
  const [currentPage, setCurrentPage] = useState(1);

  const value = {
    productsPerPage,
    setProductsPerPage,
    currentPage,
    setCurrentPage,
  };

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
}

// Custom hook to use the pagination context
export function usePagination() {
  return useContext(PaginationContext);
}
