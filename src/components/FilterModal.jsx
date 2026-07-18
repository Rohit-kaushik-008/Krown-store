const FilterModal = () => {
  return (
    <div className="border-2 border-theme-light rounded-sm bg-bg-light fixed left-0 top-0 z-10 w-full h-screen hidden">
      {/* Heading */}
      <div className="bg-bg-dark rounded">
        <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4 border-b flex gap-2 justify-start items-center">
          <button className="hover:bg-bg-light p-2 rounded-full transition-all duration-200 ease-in cursor-pointer active:-translate-x-4">
            <img className="h-6 invert" src="/actions/arrow-left.svg" alt="" />
          </button>
          Filters
        </h1>
      </div>

      {/* Actual Filters */}
      <div>
        <div>
          <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4">
            Categories
          </h1>
        </div>

        <div>
          <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4">
            Price
          </h1>
        </div>

        <div>
          <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4">
            Rating
          </h1>
          <div className="flex flex-col items-start px-6 py-2 gap-2">
            <div className="flex justify-center items-center gap-2">
              <input type="checkbox" name="" id="" />
              <h1>above 4</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <input type="checkbox" name="" id="" />
              <h1>above 3</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
              <input type="checkbox" name="" id="" />
              <h1>above 2</h1>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4">
            Discount
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
