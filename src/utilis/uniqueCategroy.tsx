import { TProduct } from "@/type";

export const uniqueCategories = (products: TProduct[]) => {
  const categories = products.map((product) => product.category);
  return [...new Set(categories)];
};