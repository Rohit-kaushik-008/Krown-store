import useFilters from "../Contexts/FilterContext";

const RatingFilter = () => {
  const ratings = [
    {
      id: 0,
      value: 0,
      label: "All Ratings",
    },
    {
      id: 1,
      value: 2,
      label: "Above 2★",
    },
    {
      id: 2,
      value: 3,
      label: "Above 3★",
    },
    {
      id: 3,
      value: 4,
      label: "Above 4★",
    },
  ];
  const { filters, setFilters } = useFilters();

  const applyRating = (e) => {
    const rating = parseInt(e.target.value);
    setFilters(filters.rating === rating ? { ...filters, rating: null } : { ...filters, rating });
  };

  return (
    <div>
      <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4 flex gap-2 items-center">
        <img src="/icons/rateIcon.svg" alt="" />
        Rating
      </h1>

      <div className="flex flex-col items-start px-6 py-2 gap-4 text-lg">
        {ratings.map((item) => (
          <label
            key={item.id}
            className="flex gap-4 justify-start items-center cursor-pointer"
          >
            <input
              onChange={(e) => {
                applyRating(e);
              }}
              className="w-4 h-4 accent-theme-main cursor-pointer"
              type="radio"
              name="rating"
              value={item.value}
              checked={filters.rating === item.value}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;
