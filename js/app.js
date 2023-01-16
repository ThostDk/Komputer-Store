import bank from "./bank.js"
import fetchJsonPosts from "./api/post.js";
import productHandler from "./productHandler.js"

//Connecting HTML Buttons to the javascript
const getALoanBtnElement = document.getElementById("getALoanBtn");
const bankBtnElement = document.getElementById("bankBtn");
const repayLoanBtnElement = document.getElementById("repayLoanBtn");
const workBtnElement = document.getElementById("workBtn");
const buyNowBtnElement = document.getElementById("buyNowBtn");

//grabs the Jsonfile
const ProductsPost = await fetchJsonPosts();

productHandler.transferJsonToPosts(ProductsPost);
productHandler.filterPostByLaptopId(0);
productHandler.fillDropdown();
productHandler.updateSelectedLaptopHTML()

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
buyNowBtnElement.addEventListener("click", () => {
    bank.buyNow(productHandler.getPostPrice());
});










