import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let orderItem = new OrderItem("", "ProductId", "ItemName", 10, 2);
    }).toThrowError("Id is required");
  });

  it("should throw error when productId is empty", () => {
    expect(() => {
      let orderItem = new OrderItem("ItemId", "", "ItemName", 10, 2);
    }).toThrowError("ProductId is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let orderItem = new OrderItem("ItemId", "ProductId", "", 10, 2);
    }).toThrowError("Name is required");
  });

  it("should throw error when price is less than zero", () => {
    expect(() => {
      let orderItem = new OrderItem("ItemId", "ProductId", "ItemName", -10, 2);
    }).toThrowError("Price can't be negative");
  });

  it("should throw error when quanity isn't greater than zero", () => {
    expect(() => {
      let orderItem = new OrderItem("ItemId", "ProductId", "ItemName", 10, 0);
    }).toThrowError("Quantity must be greater than zero");
  });

  it("should calculate subtotal", () => {
    let orderItem = new OrderItem("ItemId", "ProductId", "ItemName", 10, 2);    
    expect(orderItem.subtotal()).toBe(20);
  });
});
