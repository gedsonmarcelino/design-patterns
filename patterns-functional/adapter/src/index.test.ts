import { loadData } from "./services/api";

describe('Adapter Pattern', () => {
  it('should result element must be instance from Product', async () => {
    const result = (await loadData());

    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('name');
    expect(result[0]).toHaveProperty('price');
    expect(result[0]).not.toHaveProperty('product_id');
    expect(result[0]).not.toHaveProperty('product_name');
    expect(result[0]).not.toHaveProperty('product_price');
  })

  it('should load all data', async () => {
    const result = (await loadData());

    expect(result[0].id).toBe("1");
    expect(result[0].name).toBe('Product 1');
    expect(result[0].price).toBe(100);
  })
  
});