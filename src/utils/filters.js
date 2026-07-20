import { categoryFilter } from "../utils/categoryFilter.js";
import { discountFilter } from "../utils/discountFilter.js";
import { priceFilter } from "../utils/priceFilter.js";
import { ratingFilter } from "../utils/ratingFilter.js";

export const handleFilter = (products, filters) => {
  let filteredProducts = products;

  filteredProducts = categoryFilter(filteredProducts, filters.categores);

  filteredProducts = priceFilter(filteredProducts, filters.price);

  filteredProducts = ratingFilter(filteredProducts, filters.rating);

  filteredProducts = discountFilter(
    filteredProducts,
    filters.discountPercentage,
  );

  return filteredProducts;
};
