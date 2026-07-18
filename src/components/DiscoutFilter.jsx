const DiscoutFilter = () => {
  return (
    <div>
      <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4 cursor-default flex gap-2 items-center">
        <img src="/icons/Discount.svg" alt="" />
        Discount
      </h1>
      <div className="flex flex-col items-start px-6 py-2 gap-4 text-lg">
        <label
          key="Discount-15"
          className="flex gap-2 justify-start items-center cursor-pointer"
        >
          <input
            className="w-4 h-4 p-2 accent-theme-main cursor-pointer"
            type="checkbox"
            value="Discount-15"
          />
          15% & Above
        </label>
        <label
          key="Discount-10"
          className="flex gap-2 justify-start items-center cursor-pointer"
        >
          <input
            className="w-4 h-4 p-2 accent-theme-main cursor-pointer"
            type="checkbox"
            value="Discount-10"
          />
          10% & Above
        </label>
        <label
          key="Discount-5"
          className="flex gap-2 justify-start items-center cursor-pointer"
        >
          <input
            className="w-4 h-4 p-2 accent-theme-main cursor-pointer"
            type="checkbox"
            value="Discount-5"
          />
          5% & Above
        </label>

      </div>
    </div>
  );
};

export default DiscoutFilter;
