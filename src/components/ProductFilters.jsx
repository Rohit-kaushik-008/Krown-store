import FilterModal from "./FilterModal";
import SortingModal from "./SortingModal";

const ProductFilters = () => {
  return (
    <div className="h-16 border flex justify-between items-center px-8 py-2">
      <div className="w-full flex gap-2 justify-center items-center cursor-pointer">
        <h1 className="text-lg font-body-3">Filters</h1>
        <div>
          <FilterModal />
        </div>
      </div>

      <div className="border h-full w-0 opacity-40"></div>

      <div className="w-full flex gap-2 justify-center items-center cursor-pointer">
        <h1 className="text-lg font-body-3">Sort</h1>
        <img className="invert h-7" src="/actions/arrow-down.svg" alt="" />
        <div>
          <SortingModal />
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
