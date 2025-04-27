import { Product } from '../types/productTypes';

export const DiscountStrategies = {
  // Função de desconto fixo
  fixedDiscount: (discountAmount: number) => (product: Product): number => {
    return product.price - discountAmount;
  },
  
  // Função de desconto percentual
  percentageDiscount: (discountPercentage: number) => (product: Product): number => {
    return product.price * (1 - discountPercentage / 100);
  },

  // Função de desconto promocional (exemplo fictício)
  promotionalDiscount: (product: Product): number => {
    if (product.price >= 100) {
      return product.price * 0.8; // 20% de desconto para produtos acima de 100
    }
    return product.price;
  }
};