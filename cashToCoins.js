const dollarAmount = 0.10
const piggyBank = {}

var inPennies = dollarAmount * 100;
piggyBank.quarters = Math.floor(inPennies / 25);
// console.log(piggyBank.quarters);
piggyBank.dimes = Math.floor((inPennies % 25) / 10);
// console.log(piggyBank.dimes);
piggyBank.nickels = Math.floor(((inPennies % 25) % 10) / 5);
// console.log(piggyBank.nickels);
piggyBank.pennies = Math.floor(((inPennies % 25) % 10) % 5);
// console.log(piggyBank.pennies);
console.log(piggyBank);

