function calculateAverageAge(persons) {
   let array = persons.map(persons =>
    persons.age);

   let reducedArray = array.reduce(
     (sum, current) => sum + current, 0);
   
   return (reducedArray / array.length);

} //Avrei potuto fare anche direttamente reduce, ma mi sembra più schematico e leggibile in questo modo

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

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);