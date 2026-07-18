const RatingFilter = () => {
  return (
    <div>
      <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4 flex gap-2 items-center">
        <img src="/icons/rateIcon.svg" alt="" />
        Rating
      </h1>
      <div className="flex flex-col items-start px-6 py-2 gap-4 text-lg">
        <label
          key="Rating-4"
          className="flex gap-2 justify-start items-center cursor-pointer"
        >
          <input
            className="w-4 h-4 p-2 accent-theme-main cursor-pointer"
            type="checkbox"
            value="Rating-4"
          />
          Above 4
        </label>
        <label
          key="Rating-3"
          className="flex gap-2 justify-start items-center cursor-pointer"
        >
          <input
            className="w-4 h-4 p-2 accent-theme-main cursor-pointer"
            type="checkbox"
            value="Rating-3"
          />
          Above 3
        </label>
        <label
          key="Rating-2"
          className="flex gap-2 justify-start items-center cursor-pointer"
        >
          <input
            className="w-4 h-4 p-2 accent-theme-main cursor-pointer"
            type="checkbox"
            value="Rating-2"
          />
          Above 2
        </label>
      </div>
    </div>
  );
};

export default RatingFilter;
