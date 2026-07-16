import axios from "axios";

export async function fetchProducts() {
  const data = await axios.get("https://dummyjson.com/products?limit=194");
  return data.data.products;
}
