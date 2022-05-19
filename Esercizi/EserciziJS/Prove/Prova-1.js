function memoize(fn) {
  let cache = {};
  return (numerofattoriale) =>{
    if(numerofattoriale in cache){
    return `Fetching from cache for ${cache[numerofattoriale]}`
    }else{
      let result = fn(numerofattoriale);
      cache[numerofattoriale] = result;
      return result;
    }
  }
}



function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));