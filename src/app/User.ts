export class User {
  id: number;
  name: string;
  phone: number;
  city:string;
  address: string;
  constructor(id, name, phone, address,city) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.city = city;
    this.address = address;
  }
}
