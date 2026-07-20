import useProduct from "../Contexts/ProductContext";
import useFilters from "../Contexts/FilterContext";

const CategoryList = () => {
  const { products } = useProduct();
  const { filters, setFilters } = useFilters();

  const applyCategory = (e) => {
    const category = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setFilters((prev) => ({
        ...prev,
        categories: [...prev.categories, category],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        categories: prev.categories.filter((item) => item != category),
      }));
    }
  };

  const categories = [...new Set(products.map((item) => item.category))];

  return (
    <div className="mb-20">
      <h1 className="text-2xl font-heading-2 font-semibold px-4 py-4 flex gap-2 items-center">
        <img src="/icons/category.svg" alt="" />
        Categories
      </h1>
      <div className="flex flex-col gap-4 py-2 px-6 text-lg">
        {categories.map((category, idx) => {
          return (
            <div key={idx}>
              <label
                key={category}
                className="flex gap-4 justify-start items-center cursor-pointer"
              >
                <input
                  onChange={(e) => {
                    applyCategory(e);
                  }}
                  className="w-5 h-5 p-2 accent-theme-main cursor-pointer bg-bg-light border-theme-light checked:bg-theme-main checked:border-theme-main"
                  type="checkbox"
                  value={category}
                  checked={filters.categories.includes(category)}
                />
                <span className="capitalize">{category.replace("-", " ")}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
