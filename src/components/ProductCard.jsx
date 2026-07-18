const ProductCard = ({ products }) => {
  return (
    <div className="shadow-container rounded-xl bg-bg-dark shrink-0 justify-center items-center flex flex-col w-40 h-75 border-gray-800 hover:border-theme-dark border-2 hover:scale-105 transition-all duration-200 ease-in cursor-pointer">
      <div className="relative">
        <img
          className="w-full px-4 bg-bg-light overflow-hidden rounded-t-sm"
          src={products.thumbnail}
          alt=""
        />
        <h2 className="absolute top-1 right-1 bg-theme-main rounded-lg py-1 px-2">
          -{Math.round(products.discountPercentage)}%
        </h2>
      </div>

      <div className="flex flex-col justify-center items-start w-full px-4 py-3 gap-2">
        <h1 className="text-lg font-semibold font-body-3 truncate w-full">
          {products.title}
        </h1>
        <p className="flex gap-1 justify-center items-center text-sm text-white-2">
          <img className="h-4 object-contain" src="/icons/rating.svg" alt="" />
          {products.rating} ({products.minimumOrderQuantity})
        </p>
        <p className="font-bold font-body-2 text-lg">${products.price}</p>

        <div className="flex gap-2 justify-center items-center w-full">
          <button className="w-full rounded-lg py-2 px-4 bg-theme-dark flex justify-center items-center cursor-pointer active:translate-y-1 active:bg-theme-main transition-all duration-100 ease-in">
            <img className="h-4 invert" src="/actions/cart.svg" alt="" />
          </button>

          <button className="w-full rounded-lg py-2 px-4 bg-bg-lighter flex justify-center items-center cursor-pointer active:translate-y-1 active:bg-bg-dark transition-all duration-100 ease-in">
            <img className="h-4 invert" src="/actions/wishlist.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
