import { filterProducts } from "../utils/filteredProducts";
import useFilters from "../Contexts/FilterContext";

const FilterBarFooter = () => {

  const { setFilters } = useFilters();

  const resetFilters = () => {
    setFilters({
      categories: [],
      rating: null,
      price: {
        min: null,
        max: null,
      },
      discount: null,
    });
  } 

  const filteredProducts = filterProducts();
  return (
    <div className="sticky bottom-0 left-0 border w-full px-3 py-3 bg-bg-dark rounded-xl flex justify-between items-center gap-4">

      <div className="w-full rounded-sm text-center">
        <h1 className="text-2xl font-bold font-special-2">{filteredProducts.length}</h1>
        <p className="text-sm">{filteredProducts.length === 0 ? "No Products Found" : "Total Products"}</p>
      </div>
      <button onClick={resetFilters} className="w-full rounded-sm px-4 py-4 text-lg cursor-pointer bg-theme-dark active:bg-theme-light transition-all duration-200 ease-out flex gap-2 items-center justify-center font-semibold font-heading-1">
        <img className="invert" src="/icons/reset.svg" alt="" />
        Reset All
      </button>
    </div>
  )
}

export default FilterBarFooter
