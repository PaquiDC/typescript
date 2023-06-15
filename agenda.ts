import { Person } from './person';

export class Agenda {
  private persons: Person[];

  constructor() {
    this.persons = [];
  }

  addPerson(person: Person): void {
    this.persons.push(person);
  }

  getPersons(): Person[] {
    return this.persons;
  }

  findPersonByDNI(dni: string): Person | undefined {
    return this.persons.find(person => person.getDNI() === dni);
  }
}
