import Product from '../entity/product'
import ProductService from './product.service';

describe("Product service unit tests", () => {
  it("should change the price of all products", () => {
    const product1 = new Product("productId", "productName", 10);
    const product2 = new Product("productId", "productName", 20);
    const products = [product1, product2];

    ProductService.increasePrice(products, 10);

    expect(product1.price).toBe(11);
    expect(product2.price).toBe(22);

  });
});
