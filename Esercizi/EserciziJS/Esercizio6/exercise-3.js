/*function adultFilter(persons = []) {
  const arrayAdults = [];
  for (let i=0; i<persons.length; i++) {
    const person = persons[i];
    if (person.age>=18) {
      arrayAdults.push(person)
    }
  }
  return arrayAdults; 
} */   

/*function adultFilter(persons = []) {
  const arrayAdults = [];
  persons.forEach(function (person, i) {
    if (person.age>=18) {
      arrayAdults.push(person)
    }
  }) 
  return arrayAdults;
} */ 

/*function adultFilter(persons = []) {
  const arrayAdults = persons.filter(function (person, i) {
    if (person.age>=18) {
      return person;
    }
  })
  return arrayAdults; 
} */

/*function adultFilter(persons = []) {
  return persons.filter(function (person, i) {
    if (person.age>=18) {
      return person;
    }
  }) 
} */

function adultFilter(persons) {
  let arraymaggiorenni = [];
  for(let i=0; i<persons.length; i++){
  if(persons[i].age>=18){
    arraymaggiorenni.push(persons[i]);
  }
}
return arraymaggiorenni;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);