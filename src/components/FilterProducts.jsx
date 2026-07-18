import ProductCard from "../components/ProductCard";
import useProduct from "../Contexts/ProductContext";

const FilterProducts = () => {
  const { products, loading, error } = useProduct();

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
      {products.map((item) => {
        return (
          <div className="my-4" key={item.id}>
            <ProductCard products={item} />
          </div>
        );
      })}
    </div>
  );
};

export default FilterProducts;
