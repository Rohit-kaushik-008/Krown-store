import useProduct from "../Contexts/ProductContext";

const CategoryList = () => {
  const { products } = useProduct();

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
                className="flex gap-3 justify-start items-center cursor-pointer"
              >
                <input
                  className="w-4 h-4 p-2 accent-theme-main cursor-pointer "
                  type="checkbox"
                  value={category}
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
