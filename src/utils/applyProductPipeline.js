import { handleFilter } from "./filters";
import { handleSearch } from "./handleSearch";
import { handleSorting } from "./sorting";

export function applyProductPipeline(products, search, filters, sorting) {
  let result = [...products];

  result = handleSearch(result, search);
  result = handleFilter(result, filters);
  result = handleSorting(result, sorting);

  return result;
}
