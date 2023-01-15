import bank from "./bank.js"
//Connecting HTML Buttons to the javascript
const getALoanBtnElement = document.getElementById("getALoanBtn");
const bankBtnElement = document.getElementById("bankBtn");
const repayLoanBtnElement = document.getElementById("repayLoanBtn");



getALoanBtnElement.addEventListener("click", () => {
    bank.takeLoan();
});
repayLoanBtnElement.addEventListener("click", () => {
    bank.repayLoan();
});
bankBtnElement.addEventListener("click", () => {
    bank.bankSalary();
});

