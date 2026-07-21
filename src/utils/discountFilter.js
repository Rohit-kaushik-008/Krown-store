export const discountFilter = (products, selectedDiscount) => {
  if (selectedDiscount === null) {
    return products;
  }
  return products.filter(
    (items) => items.discountPercentage > selectedDiscount,
  );
};


