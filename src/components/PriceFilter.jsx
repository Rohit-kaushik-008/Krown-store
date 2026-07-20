import useFilters from "../Contexts/FilterContext";
const PriceFilter = () => {
  const prices = [
    {
      id: 0,
      min: 0,
      max: 1000000,
      label: "All Prices",  
    },
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
  ];

  const { filters, setFilters } = useFilters();

  const applyPrice = (e) => {
    const selectedPrice = JSON.parse(e.target.value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: selectedPrice,
    }));
  };  

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
              onChange={(e) => {
                applyPrice(e);
              }}
              className="w-4 h-4 accent-theme-main cursor-pointer"
              type="radio"
              name="price"
              value={JSON.stringify({ min: item.min, max: item.max })}
              checked={
                filters.price.min === item.min && 
                filters.price.max === item.max}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;
