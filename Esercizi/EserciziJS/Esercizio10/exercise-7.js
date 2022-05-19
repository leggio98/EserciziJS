function sumUntil(maxValue) {
  let sum = 0;
  for(let i = 1; i <= maxValue; i++) {
    sum += i;
  }
  return sum;
}

//Provo con la matematica

function sumUntilAgain(maxValue) {
  return maxValue * (maxValue + 1) / 2
}

console.log(sumUntil(5));
console.log(sumUntil(10));

console.log(sumUntilAgain(5));
console.log(sumUntilAgain(10));