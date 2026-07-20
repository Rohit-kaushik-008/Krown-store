import useFilters from "../Contexts/FilterContext";
const DiscountFilter = () => {
  const discounts = [
    {
      id: 0,
      value: 0,
      label: "All Discounts",
    },
    {
      id: 1,
      value: 15,
      label: "15% & Above",
    },
    {
      id: 2,
      value: 10,
      label: "10% & Above",
    },
    {
      id: 3,
      value: 5,
      label: "5% & Above",
    },
  ];

  const { filters, setFilters } = useFilters();

  const applyDiscount = (e) => {
    const discount = parseInt(e.target.value);
    setFilters(filters.discount === discount ? { ...filters, discount: null } : { ...filters, discount });
  }

  return (
    <div>
      <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4 cursor-default flex gap-2 items-center">
        <img src="/icons/Discount.svg" alt="" />
        Discount
      </h1>

      <div className="flex flex-col items-start px-6 py-2 gap-4 text-lg">
        {discounts.map((item) => (
          <label
            key={item.id}
            className="flex gap-4 justify-start items-center cursor-pointer"
          >
            <input
              onChange={(e) => {
                applyDiscount(e);
              }}
              className="w-4 h-4 accent-theme-main cursor-pointer"
              type="radio"
              name="discount"
              value={item.value}
              checked={filters.discount === item.value}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default DiscountFilter;
