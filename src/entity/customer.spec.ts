import Customer from "./customer";
import Address from "./address";


describe("Customer unit tests", () => {

  it("should throw error when id is empty", () => {
    expect(() => {
        let customer = new Customer("", "John");
    }).toThrowError("Id is required");
  });

  it("should throw error when changes name to empty", () => {
    expect(() => {
        let customer = new Customer("123", "John");
        customer.changeName("");
    }).toThrowError("Name is required");
  })

  it("should change name", () => {
    let customer = new Customer("123", "John");
    customer.changeName("Jane");
    expect(customer.name).toBe("Jane");
  })

  it("should throw error when changes name to empty", () => {
    expect(() => {
        let customer = new Customer("123", "John");
        customer.changeName("");
    }).toThrowError("Name is required");
  })

  it("should activate customer", () => {
    let customer = new Customer("123", "Caio Henrique");
    const address = new Address("Av Itália", 252, "12345", "Taubaté");
    customer.Address = address;
    customer.activate();
    expect(customer.isActive()).toBe(true);
  })

  it("should deactivate customer", () => {
    let customer = new Customer("123", "Caio Henrique");
    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  })

  it("should throw error when activates a customer without address", () => {
    expect(() => {
        let customer = new Customer("123", "John");
        customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  })

});
