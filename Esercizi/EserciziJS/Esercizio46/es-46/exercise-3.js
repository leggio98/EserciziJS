//function isAdult(person) {
//  return person.age >= 18;
//}

//Il codice sopra viene dato dall'esercizio, ma sinceramente
//non capisco bene cosa richieda l'esercizio, per farlo
//diversamente l'ho fatto cosi con {age} = person, 
//ma mi sembra più semplice quello sopra.

function isAdult(person){
  let {age} = person;
  return age >= 18;
}
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));