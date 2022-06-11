import Customer from "./entity/customer";
import Address from "./entity/address";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", "Caio Henrique");
const address = new Address("Av Itália", 252, "12345", "Taubaté");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 20);
const order = new Order(customer._id, "123", [item1, item2]);
