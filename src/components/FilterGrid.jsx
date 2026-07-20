import ProductCard from "./ProductCard";
import useProduct from "../Contexts/ProductContext";
import { filterProducts } from "../utils/filteredProducts";

const FilterGrid = () => {
  const { loading, error } = useProduct();

  const filteredProducts = filterProducts();


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

  return (
    <div className="flex flex-wrap justify-around items-between gap-2 px-4 py-4">
      {filteredProducts.map((item) => {
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
