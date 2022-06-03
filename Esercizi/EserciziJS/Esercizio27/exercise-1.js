const person = {
  firstName: 'John',
  lastName: 'Doe'
};
if (person.address?.city){
  console.log(person.address.city);
} else if (person.address){
  console.log('La proprietà city non esiste!');
} else {
  console.log ('La proprietà address non esiste!');
}

if (person.fullName) {
  console.log(person.fullName());
} else {
  console.log('Il metodo fullName non esiste!');
}

//L'esercizio ci dava questi due console.log sottostanti, non ho ben
// capito se dovessimo modificare solo questi o fare come sopra
// in tal caso comunque per la prima riga avevo pensato
// console.log(person.address?.city); e non riporta errori.
//Per la seconda riga non so se esiste una soluzione simile

console.log(person.address.city); // Argh! Cannot read property 'city' of undefined
console.log(person.fullName()); // Argh! Cannot read property 'fullName()' of undefined