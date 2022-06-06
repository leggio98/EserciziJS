function sum(...num) {
  return num.reduce((total, current) => 
  total + current, 0)
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

//Penso di aver sbagliato, mi sembra uguale a qualche esercizio
//passato