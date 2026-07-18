const PriceFilter = () => {
  return (
    <div>
      <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4 flex gap-2 items-center">
        <img className="h-7" src="/icons/price.svg" alt="" />
        Price
      </h1>
      <div className="flex flex-col items-start px-6 py-2 gap-4 text-lg">
        <label
          key="Price-100"
          className="flex gap-2 justify-start items-center cursor-pointer"
        >
          <input
            className="w-4 h-4 p-2 accent-theme-main cursor-pointer"
            type="checkbox"
            value="Price-100"
          />
          $0 - $100
          
        </label>
        <label
          key="Price-500"
          className="flex gap-2 justify-start items-center cursor-pointer"
        >
          <input
            className="w-4 h-4 p-2 accent-theme-main cursor-pointer"
            type="checkbox"
            value="Price-500"
          />
          $100 - $500
        </label>
        <label
          key="Price-1000"
          className="flex gap-2 justify-start items-center cursor-pointer"
        >
          <input
            className="w-4 h-4 p-2 accent-theme-main cursor-pointer"
            type="checkbox"
            value="Price-1000"
          />
          $500 - $1000
        </label>
        <label
          key="Price+1000"
          className="flex gap-2 justify-start items-center cursor-pointer"
        >
          <input
            className="w-4 h-4 p-2 accent-theme-main cursor-pointer"
            type="checkbox"
            value="Price+1000"
          />
          $1000 +
        </label>
      </div>
    </div>
  );
};

export default PriceFilter;
