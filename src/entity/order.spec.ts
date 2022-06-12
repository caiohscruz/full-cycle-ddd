import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("should throw error when order hasn't items", () => {
    expect(() => {
      let order = new Order("123", "1", []);
    }).toThrowError("Order must have at least one ite");
  });

  it("should calculate total", () => {
    const item1 = new OrderItem("1", "123", "Item 1", 10, 4);
    const item2 = new OrderItem("2", "321","Item 2", 20, 3);
    const order = new Order("1", "123", [item1, item2]);
    expect(order.total()).toBe(100);
  });
});
