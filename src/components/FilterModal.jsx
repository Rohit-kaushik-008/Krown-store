import FilterModalHeading from "../components/FilterModalHeading.jsx";
import CategoryList from "../components/CategoryList.jsx";
import DiscountFilter from "../components/DiscoutFilter.jsx";
import RatingFilter from "../components/RatingFilter.jsx";
import PriceFilter from "../components/PriceFilter.jsx";
import FilterBarFooter from "../components/FilterBarFooter.jsx";

const FilterModal = ({ openFilter }) => {
  return (
    <div>
      <FilterModalHeading openFilter={openFilter} />

      <div>
        <PriceFilter />

        <hr className="mx-4 my-4 opacity-40" />

        <RatingFilter />

        <hr className="mx-4 my-4 opacity-40" />

        <DiscountFilter />

        <hr className="mx-4 my-4 opacity-40" />

        <CategoryList />

        <FilterBarFooter />
      </div>
    </div>
  );
};

export default FilterModal;
