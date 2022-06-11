export default class Adress{
    _street: string;
    _number: number;
    _zipcode: string;
    _city: string; 

    constructor(street: string, city: string, number: number, zipcode: string){
        this._street = street; 
        this._number = number;    
        this._zipcode = zipcode;    
        this._city = city; 
        this.validate();
    }

    validate(){
        if(this._street.length == 0){
            throw new Error("Street is required");
        }
        if(this._city.length == 0){
            throw new Error("City is required");
        }
        if(this._number == 0){ 
            throw new Error("Number is required");  
        }
        if(this._zipcode.length == 0){ 
            throw new Error("Zipcode is required");
        }
    }

    toString(){
        return `${this._street} ${this._number} ${this._zipcode}`
    }
}