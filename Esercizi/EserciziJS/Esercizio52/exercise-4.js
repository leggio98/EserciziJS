const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};


function numberFilter(key, value){
  if(typeof value === 'string'){
    return
  } else {
  return value}
}



const json = JSON.stringify(person, numberFilter);


console.log(json); // Should return: { id: 1, age: 25 }