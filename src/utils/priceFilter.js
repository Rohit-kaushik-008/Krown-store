export const priceFilter = (products, selectedPrice) => {

  if (selectedPrice.length === 0) {
    return products;
  }
  return products.filter((items) =>
    items.price > selectedPrice
  );
};
