import useProduct from "../Contexts/ProductContext";
import useFilters from "../Contexts/FilterContext";
import { handleFilter } from "./filters";

export function filterProducts() {
  const { products } = useProduct();
  const { filters } = useFilters();

  const filteredProducts = handleFilter(products, filters);
  return filteredProducts;
}
