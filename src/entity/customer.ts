import Adress from "./address";

export default class Customer {

  _id: string;
  _name: string;
  _address!: Adress;
  _active: boolean = false; 

  constructor(id: string, name: string) {
    this._id = id;  
    this._name = name;  
    this.validate();
  }

  changeName(name: string){
    this._name = name;
    this.validate();
  }

  validate(){
    if(this._name.length  === 0){
      throw new Error("Name is required");
    }
    if(this._id.length === 0){
      throw new Error("Id is required");
    }
  }

  activate() {
    if(this._address === undefined){
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  set Address(address: Adress){
    this._address = address;
  }

}