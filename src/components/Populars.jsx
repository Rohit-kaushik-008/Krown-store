import useProduct from "../Contexts/ProductContext.jsx";
import ProductCard from "./ProductCard.jsx";

const Populars = () => {
  const { products, loading, error } = useProduct();

  const hotDeals = products.filter((product) => product.rating > 4.5);

  if (loading) {
    return <h1 className="font-semibold text-2xl text-center my-8">Loading...</h1>;
  }

  if (error) {
    return <h1 className="font-semibold text-2xl text-center my-8 underline cursor-pointer">{error}</h1>;
  }

  return (
    <div>
      {/* Heading */}

      <div>
        <h2 className="text-2xl lg:text-3xl font-heading-1 text-white px-6 pt-4 mt-6 font-semibold">
          Popular Products
        </h2>
      </div>

      <div className="flex gap-3 md:gap-4 items-center overflow-x-scroll w-full px-6 flex-nowrap mb-8 py-4">
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
