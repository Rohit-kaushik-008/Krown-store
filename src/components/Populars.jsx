import axios from "axios";
import { useState, useEffect } from "react";

const Populars = () => {
  const [products, setProducts] = useState([]);

  async function handleAPI() {
    const { data } = await axios.get(
      "https://dummyjson.com/products?limit=194",
    );

    setProducts(data.products);
  }

  function App() {
    useEffect(() => {
      handleAPI();
    }, []);
  }

  App();

  const hotDeals = products.filter((product) => product.rating > 4.5);

  return (
    <div>
      {/* Heading */}

      <div>
        <h2 className="text-2xl lg:text-3xl font-heading-1 text-white px-6 py-2 mt-6 font-semibold">
          Popular Products
        </h2>
      </div>

      <div className="flex gap-3 md:gap-4 items-center overflow-x-scroll w-full py-2 px-4 flex-nowrap mb-8">
        {hotDeals.map((product) => (
          <div
            key={product.id}
            className="shadow-container rounded-xl bg-bg-dark shrink-0 justify-center items-center flex flex-col w-40 h-75 border-gray-800 border-2 hover:scale-105 transition-all duration-200 ease-in cursor-pointer"
          >
            <img
              className="w-full px-4 bg-bg-light"
              src={product.thumbnail}
              alt=""
            />

            <div className="flex flex-col justify-center items-start w-full px-4 py-2 gap-2">
              <h1 className="text-lg font-semibold font-body-3 truncate w-full">
                {product.title}
              </h1>
              <p className="flex gap-1 justify-center items-center text-sm text-white-2">
                <img className="h-4" src="/icons/rating.svg" alt="" />
                {product.rating} ({product.minimumOrderQuantity})
              </p>
              <p className="font-bold font-body-2 text-lg">${product.price}</p>

              <div className="flex gap-2 justify-center items-center w-full">
                <button className="w-full rounded-lg py-2 px-4 bg-theme-dark flex justify-center items-center cursor-pointer active:translate-y-1 active:bg-theme-main transition-all duration-100 ease-in">
                  <img className="h-4 invert" src="/actions/cart.svg" alt="" />
                </button>

                <button className="w-full rounded-lg py-2 px-4 bg-theme-dark flex justify-center items-center cursor-pointer active:translate-y-1 active:bg-theme-main transition-all duration-100 ease-in">
                  <img
                    className="h-4 invert"
                    src="/actions/wishlist.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Populars;
