export class Person {
    private name: string;
    private dni: string;
    private addresses: string[];
    private phones: string[];
    private emails: string[];
  
    constructor(name: string, dni: string) {
      this.name = name;
      this.dni = dni;
      this.addresses = [];
      this.phones = [];
      this.emails = [];
    }
  
    getName(): string {
      return this.name;
    }
  
    getDNI(): string {
      return this.dni;
    }
  
    getAddresses(): string[] {
      return this.addresses;
    }
  
    addAddress(address: string): void {
      this.addresses.push(address);
    }
  
    getPhones(): string[] {
      return this.phones;
    }
  
    addPhone(phone: string): void {
      this.phones.push(phone);
    }
  
    getEmails(): string[] {
      return this.emails;
    }
  
    addEmail(email: string): void {
      this.emails.push(email);
    }
  }
  