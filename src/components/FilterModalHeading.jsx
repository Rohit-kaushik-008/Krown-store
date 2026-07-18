const FilterModalHeading = ({ openFilter}) => {
  const handleFilterToggle = (e) => {
    e.stopPropagation();
    openFilter(false);
  };

  return (
    <div className="bg-bg-main rounded sticky top-0 cursor-default z-10">
      <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4 border-b flex gap-2 justify-start items-center ">
        <button
          onClick={handleFilterToggle}
          className="hover:bg-bg-light p-2 rounded-full transition-all duration-200 ease-in active:-translate-x-4 cursor-pointer">
          <img className="h-6 invert" src="/actions/arrow-left.svg" alt="" />
        </button>
        Filters
      </h1>
    </div>
  );
};

export default FilterModalHeading;
