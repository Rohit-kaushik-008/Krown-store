const PriceFilter = () => {
  const prices = [
    {
      id: 1,
      min: 0,
      max: 100,
      label: "$0 - $100",
    },
    {
      id: 2,
      min: 100,
      max: 500,
      label: "$100 - $500",
    },
    {
      id: 3,
      min: 500,
      max: 1000,
      label: "$500 - $1000",
    },
    {
      id: 4,
      min: 1000,
      max: Infinity,
      label: "$1000 +",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4 flex gap-2 items-center">
        <img className="h-7" src="/icons/price.svg" alt="" />
        Price
      </h1>
      <div className="flex flex-col items-start px-6 py-2 gap-4 text-lg">
        {prices.map((item) => (
          <label
            key={item.id}
            className="flex gap-4 justify-start items-center cursor-pointer"
          >
            <input
              className="w-4 h-4 accent-theme-main cursor-pointer"
              type="radio"
              name="price"
              value={item.id}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;
