export const handleSearch = (products, search) => {
  let searchItem = [...products];

  if (search === "") {
    return searchItem;
  } else {
    return products.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
  }
};
