import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
  it("should place a order", () => {
    let item = new OrderItem("1", "ProductId", "ItemName", 100, 2);
    let custumer = new Customer("CustomerId", "CustomerName");

    let order = OrderService.placeOrder(custumer, [item]);

    expect(custumer.rewardPoints).toBe(100);
    expect(order.total()).toBe(200);
  });

  it("should get the total of all orders", () => {
    let item1 = new OrderItem("1", "ProductId", "ItemName", 100, 2);
    let item2 = new OrderItem("2", "ProductId", "ItemName", 100, 3);

    let order1 = new Order("1", "1", [item1]);
    let order2 = new Order("2", "1", [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(500);
  });
});
