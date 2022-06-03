function calculate() {
    let result = [0];
    return {
      add(Addizione) {
         value = result[0] + Addizione;
        result[0] = value;
        console.log(result);
      },
      multiply(moltiplicazione) {
        value = result * moltiplicazione;
        result[0] = value;
        console.log(result);
      },
      sub(sottrazione) {
        result = result - sottrazione;
        return this;
      },
      divide(divisione) {
        result = result / divisione;
        return this;
      },
      printResult(){
        console.log("Il risultato sarà " + result);
      },
    }
  }
  
  const calculator = calculate();
  calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7