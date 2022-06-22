class BankAccount {
    #residuo = 0

    constructor (residuo){
        this.#residuo = residuo;
    }

    deposit(value){
        let res = this.#residuo + value;
        this.#residuo = res;
        console.log(this.#residuo);
    }

    view(){
       console.log(this.#residuo);
    }

    withdraw(value){
        let res = this.#residuo - value;
        this.#residuo = res;
    }
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
console.log(bankAccount)
bankAccount.view();

console.log(bankAccount);