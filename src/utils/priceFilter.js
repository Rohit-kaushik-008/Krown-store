export const priceFilter = (products, selectedPrice) => {
  if (selectedPrice.min === null && selectedPrice.max === null) {
    return products;
  }
  return products.filter(
    (items) =>
      items.price > selectedPrice.min && items.price < selectedPrice.max,
  );
};
