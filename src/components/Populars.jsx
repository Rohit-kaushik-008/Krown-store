import useProduct from "../Contexts/ProductContext.jsx";
import ProductCard from "./ProductCard.jsx";

const Populars = () => {
  const { products, loading, error } = useProduct();

  const hotDeals = products.filter((product) => product.rating > 4.5);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {/* Heading */}

      <div>
        <h2 className="text-2xl lg:text-3xl font-heading-1 text-white px-6 py-2 mt-6 font-semibold">
          Popular Products
        </h2>
      </div>

      <div className="flex gap-3 md:gap-4 items-center overflow-x-scroll w-full py-2 px-4 flex-nowrap mb-8">
        {hotDeals.map((items, key) => {
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

export default Populars;
