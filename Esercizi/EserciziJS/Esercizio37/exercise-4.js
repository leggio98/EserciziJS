
class BankAccount {
    value = 0;

    constructor(value){
        this.value = value;
    }

deposit(quantity) {
    this.value = this.value + quantity; //anche this.value += quantity;
}
withdraw(quantity) {
    this.value = this.value - quantity;
}
view() {
    console.log(this.value);
}
}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();