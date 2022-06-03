const calculator = (initialValue) => {
    return {
      result: initialValue,
      init(a) {
        this.result = Number(a);
        return this;
      },
      sum(a) {
        this.result += a;
        return this;
      },
      subtract(a) {
        this.result -= a;
        return this;
      },
      multiply(a) {
        this.result *= a;
        return this;
      },
      divide(a) {
        this.result /= a;
        return this;
      },
      getResult() {
        return Number(this.result);
      },
      printResult() {
        console.log(this.result);
        return this;
      }
    }
  };
  
  // ((2 + 4) * (5 + 2) - 2) / 5
  
  calculator(calculator(2).sum(4).getResult())
    .multiply(calculator(5).sum(2).getResult())
    .subtract(2)
    .divide(5)
    .printResult();