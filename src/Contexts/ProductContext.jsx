import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../api/productAPI";

// Create Context
export const ProductContext = createContext();

// Create Provider Component
export function ProductProvider({ children }) {
  // States
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    // Runs once when Provider mounts
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

// Custome Hook
export default function useProduct() {
  return useContext(ProductContext);
}
