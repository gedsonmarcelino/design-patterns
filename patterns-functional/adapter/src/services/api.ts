import {productAdapter} from "../adapters/productAdapter";
import {Product, RawProduct} from "../types/productTypes";


export const loadData = async (): Promise<Product[]> => {
  const response = await Promise.resolve([{
    product_id: "1",
    product_name: "Product 1",
    product_price: 100,
  }] as RawProduct[]);

  return response.map((rawProduct: RawProduct) => {
    return productAdapter(rawProduct);
  })
}