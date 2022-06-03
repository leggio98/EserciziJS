const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person1.firstName = 'Simon'; 

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);

/*Perché assegnando l'oggetto person1 a person2, vengono passate
tutte le proprietà/chiavi dell'oggetto con i relativi valori, perciò
andandone a cambiare uno, verrà cambiato anche l'altro */