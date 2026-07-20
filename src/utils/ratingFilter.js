export const ratingFilter = (products, selectedRating) => {

  if (selectedRating.length === 0) {
    return products;
  }
  return products.filter((items) =>
    items.rating > selectedRating
  );
};
