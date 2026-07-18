import useProduct from "../Contexts/ProductContext";
import ProductCard from "../components/ProductCard";
import { hotDeals, topRatedDeals, limitedDeals } from "../utils/deals";

const DealsOffers = () => {
  const { products } = useProduct();

  const hotItems = hotDeals(products);
  const topRatedItems = topRatedDeals(products);
  const limitedItems = limitedDeals(products);


  return (
    <div className="bg-bg-dark pb-20">
      <div>
        <img
          className="w-full object-contain"
          src="/images/DealsHeroBanner.png"
          alt=""
        />
      </div>

      {/* Hot Deals */}
      <div className="md:px-8">
        <h1 className="text-3xl font-semibold font-heading-1 px-6 py-2 pt-8 w-full md:text-4xl flex items-center gap-4 justify-start">
          <img className="h-9" src="/icons/hotIcon.png" alt="" />
          Hot Deals
        </h1>
        <div className="flex flex-nowrap overflow-scroll justify-around items-between gap-4 px-2 py-4 mx-4">
          {hotItems.map((item) => {
            return (
              <div key={item.id}>
                <ProductCard products={item} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Rated Deals */}

      <div className="md:px-8">
        <h1 className="text-3xl font-semibold font-heading-5 px-6 py-2 pt-16 w-full flex justify-start gap-4 md:text-4xl">
          <img className="h-10" src="/icons/limitedIcon.svg" alt="" />
          Top Rated Deals
        </h1>
        <div className="flex flex-nowrap overflow-scroll justify-around items-between gap-4 px-2 py-4 mx-4">
          {topRatedItems.map((item) => {
            return (
              <div key={item.id}>
                <ProductCard products={item} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Limited Deals */}
      <div className="md:px-8">
        <h1 className="text-3xl font-semibold font-heading-5 px-6 py-2 pt-16 w-full flex justify-start gap-4 md:text-4xl">
          <img className="h-10" src="/icons/topRatedIcon.png" alt="" />
          Limited Deals
        </h1>

        <div className="flex flex-nowrap overflow-scroll justify-around items-between gap-4 px-2 py-4 mx-4">
          {limitedItems.map((item) => {
            return (
              <div key={item.id}>
                <ProductCard products={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DealsOffers;
