import { Person } from './person';
import { Agenda } from './agenda';

// Crear instancias de personas
const person1 = new Person('John Doe', '123456789');
const person2 = new Person('Jane Smith', '987654321');
const person3 = new Person('Alice Johnson', '456789123');

// Agregar direcciones, teléfonos y correos electrónicos a las personas
person1.addAddress('Calle Pez 2');
person1.addPhone('666 000 000');
person1.addEmail('jose@yo.com');

person2.addAddress('Calle del Cine');
person2.addPhone('678123123');
person2.addEmail('bruno@tu.com');

person3.addAddress('Avenida de los poblados 56');
person3.addPhone('654123789');
person3.addEmail('carmen@el.com');

// Crear una agenda y agregar las personas
const agenda = new Agenda();
agenda.addPerson(person1);
agenda.addPerson(person2);
agenda.addPerson(person3);

// Mostrar los registros de personas en la consola
console.log('Registros de personas:');
agenda.getPersons().forEach(person => {
  console.log('Nombre:', person.getName());
  console.log('DNI:', person.getDNI());
  console.log('Direcciones:', person.getAddresses());
  console.log('Teléfonos:', person.getPhones());
  console.log('Correos electrónicos:', person.getEmails());
  console.log('------------------------');
});

// Modificar un registro de persona por DNI
const personToModify = agenda.findPersonByDNI('123456789');
if (personToModify) {
  personToModify.addAddress('calle Galicia 5');
  personToModify.addPhone('623456345');
  personToModify.addEmail('jorge@eso.com');
}

// Mostrar los registros de personas actualizados en la consola
console.log('Registros de personas actualizados:');
agenda.getPersons().forEach(person => {
  console.log('Nombre:', person.getName());
  console.log('DNI:', person.getDNI());
  console.log('Direcciones:', person.getAddresses());
  console.log('Teléfonos:', person.getPhones());
  console.log('Correos electrónicos:', person.getEmails());
  console.log('------------------------');
});
