import useFilters from "../Contexts/FilterContext";
const SortingModal = ({ setDropdown }) => {
  const sortItems = [
    {
      id: 1,
      title: "Default",
      value: "default",
    },
    {
      id: 2,
      title: "Price: Low to High",
      value: "price-low-high",
    },
    {
      id: 3,
      title: "Price: High to Low",
      value: "price-high-low",
    },
    {
      id: 4,
      title: "A - Z",
      value: "name-asc",
    },
    {
      id: 5,
      title: "Z - A",
      value: "name-desc",
    },
  ];

  const { setSorting } = useFilters();

  const sortFilter = (item) => {
    setSorting(item.value);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  return (
    <div className="border border-theme-light rounded-lg px-2 py-2 bg-bg-dark">
      {sortItems.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              sortFilter(item);
            }}
            className="py-2 px-4 hover:bg-bg-light rounded-lg cursor-pointer transition-all duration-100 ease-out active:bg-bg-lighter"
          >
            <button
              onClick={() => {
                closeDropdown();
              }}
              className="cursor-pointer text-start font-semibold font-body-3"
            >
              {item.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SortingModal;
