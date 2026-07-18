export const hotDeals = (products) => {
  return products.filter(
    (product) => product.discountPercentage >= 18 && product.stock > 40,
  );
};

export const topRatedDeals = (products) => {
  return products.filter(
    (product) => product.discountPercentage >= 16 && product.rating >= 4.5,
  );
};

export const limitedDeals = (products) => {
  return products.filter(
    (product) => product.discountPercentage >= 15 && product.stock <= 10,
  );
};
