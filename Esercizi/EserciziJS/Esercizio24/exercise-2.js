const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.values

Object.values(person).forEach(value => {
  console.log(`${value}`);
})