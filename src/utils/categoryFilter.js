export const categoryFilter = (products, selectedCategories) => {
  if (selectedCategories.length === 0) {
    return products;
  }
  return products.filter((items) =>
    selectedCategories.includes(items.category),
  );
};
