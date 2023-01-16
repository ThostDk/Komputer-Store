import bank from "./bank.js"
import fetchJsonPosts from "./api/post.js";
import product from "./product.js"

//Connecting HTML Buttons to the javascript
const getALoanBtnElement = document.getElementById("getALoanBtn");
const bankBtnElement = document.getElementById("bankBtn");
const repayLoanBtnElement = document.getElementById("repayLoanBtn");
const workBtnElement = document.getElementById("workBtn");

//Post variables
const initialPosts = await fetchJsonPosts();

product.initializePosts(initialPosts);
product.filterPostByLaptopId(2);
product.fillDropdown();
product.updateSelectedLaptopHTML()
// button Click events
workBtnElement.addEventListener("click", () => {
    bank.work();
})
getALoanBtnElement.addEventListener("click", () => {
    bank.takeLoan();
});
repayLoanBtnElement.addEventListener("click", () => {
    bank.repayLoan();
});
bankBtnElement.addEventListener("click", () => {
    bank.bankSalary();
});










