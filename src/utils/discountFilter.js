export const discountFilter = (products, selectedDiscount) => {

  if (selectedDiscount.length === 0) {
    return products;
  }
  return products.filter((items) =>
    items.discountPercentage > selectedDiscount
  );
};
