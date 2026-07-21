import ProductCard from "./ProductCard";
import useProduct from "../Contexts/ProductContext";
import useFilters from "../Contexts/FilterContext";
// import { filterProducts } from "../utils/filteredProducts";
import { applyProductPipeline } from "../utils/applyProductPipeline";

const FilterGrid = () => {
  const { products, loading, error } = useProduct();
  const { search, filters, sorting } = useFilters();

  const processedProducts = applyProductPipeline(products, search, filters, sorting);


  if (loading) {
    return (
      <h1 className="font-semibold text-2xl text-center my-8">Loading...</h1>
    );
  }

  if (error) {
    return (
      <h1 className="font-semibold text-2xl text-center my-8 underline cursor-pointer">
        {error}
      </h1>
    );
  }

  if (processedProducts.length === 0) {
    return (
      <h1 className="absolute top-80 left-1/2 -translate-x-1/2 font-semibold text-4xl text-center my-8">Product Not Found</h1>
    )
  }

  return (
    <div className="flex flex-wrap justify-around items-between gap-2 px-4 py-4">
      {processedProducts.map((item) => {
        return (
          <div className="my-4" key={item.id}>
            <ProductCard products={item} />
          </div>
        );
      })}
    </div>
  );
};

export default FilterGrid;
