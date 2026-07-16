import ProductCard from "../components/ProductCard";
import useProduct from "../Contexts/ProductContext";

const Products = () => {
  const { products } = useProduct();

  return (
    <div className="">
      <div className="h-16 border flex justify-around items-center px-8 py-2">
        <div>
          <h1 className="text-lg font-body-3">Filters</h1>
        </div>

        <div>
          <h1 className="text-lg font-body-3">Sort</h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-around items-between gap-2 px-4 py-4">
        {products.map((items, key) => {
          return (
            <div key={key}>
              <ProductCard products={items} idx={key} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
