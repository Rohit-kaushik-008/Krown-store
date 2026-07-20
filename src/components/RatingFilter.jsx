const RatingFilter = () => {
  const ratings = [
    {
      id: 1,
      value: 4,
      label: "Above 4★",
    },
    {
      id: 2,
      value: 3,
      label: "Above 3★",
    },
    {
      id: 3,
      value: 2,
      label: "Above 2★",
    },
  ];

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
              className="w-4 h-4 accent-theme-main cursor-pointer"
              type="radio"
              name="rating"
              value={item.value}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;