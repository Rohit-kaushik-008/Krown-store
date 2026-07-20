export const ratingFilter = (products, selectedRating) => {

  if (selectedRating === null) {
    return products;
  }
  return products.filter((items) =>
    items.rating > selectedRating
  );
};
