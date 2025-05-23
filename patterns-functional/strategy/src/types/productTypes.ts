export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface IStrategyDiscount {
  (product: Product): number;
}