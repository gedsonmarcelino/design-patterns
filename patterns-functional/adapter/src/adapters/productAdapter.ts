import {Product, RawProduct} from "../types/productTypes";

export const productAdapter = (rawProduct: RawProduct): Product => {
  return {
    id: rawProduct.product_id,
    name: rawProduct.product_name,
    price: rawProduct.product_price,
  };
}