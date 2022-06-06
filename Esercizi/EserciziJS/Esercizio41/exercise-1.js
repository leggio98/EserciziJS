class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    this.#amount += amount;
    if (amount < 0) {
      throw 'You cannot deposit a negative amount';
    }
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    this.#amount -= amount;
    if (amount < 0){
      throw 'You cannot withdraw a negative amount'
    } else if (amount > this.#amount) {
      throw "Should be cool, but you cant withdraw more than your bank's amount, go to work.";
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();