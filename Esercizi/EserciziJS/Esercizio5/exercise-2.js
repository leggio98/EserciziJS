// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (role) {
    case `ceo`:
      return "ceo salary = 2200€";
    break; 
    case `manager`:
      return "manager salary = 1800€";
    break;
    case `cto`:
      return "cto salary = 1800€";
    break;
    case `developer`:
      return "developer salary = 1500€";
    break; 
    case `other`:                     
      return "other salaries = 1000€";
    /*Le ultime due righe sarebbero potute essere del tipo:
    default:
      return "other salaries = 1000€"; */
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);