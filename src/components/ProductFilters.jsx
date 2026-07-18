import { useState } from "react";
import FilterModal from "./FilterModal";
import SortingModal from "./SortingModal";

const ProductFilters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openFilter = () => {
    setIsOpen(true);
  };

  return (
    <div className="h-16 border flex justify-between items-center px-8 py-2">
      <div className="w-full flex gap-2 justify-center items-center">
        <h1 onClick={openFilter} className="text-lg font-body-3 cursor-pointer">
          Filters
        </h1>
        <div
          className={`border-2 border-theme-light rounded-sm bg-bg-light fixed left-0 top-0 z-10 w-full h-screen overflow-scroll transition-all ${isOpen ? "translate-x-0 " : "-translate-x-full"} duration-300 ease-in`}
        >
          <FilterModal openFilter={setIsOpen} />
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
