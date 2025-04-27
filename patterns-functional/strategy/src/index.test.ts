import {DiscountStrategies} from "./strategy/discountStrategy";
import {IStrategyDiscount, Product} from "./types/productTypes";

describe('Strategy Pattern', () => {
  const sampleProduct = {
    id: "1",
    name: "Product 1",
    price: 100,
  } as Product;
  
  const applyDiscount = ( fn: IStrategyDiscount ) => {
    return fn(sampleProduct);
  }

  it('should apply fixed discount', async () => {
    const result = applyDiscount(DiscountStrategies.fixedDiscount(10));
    expect(result).toBe(90);
  })

  it('should apply percentage discount', async () => {
    const result = applyDiscount(DiscountStrategies.percentageDiscount(20));
    expect(result).toBe(80);
  })
  
  it('should apply promotional discount', async () => {
    const result = applyDiscount(DiscountStrategies.promotionalDiscount);
    expect(result).toBe(80);
  })
});