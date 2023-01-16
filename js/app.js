import bank from "./bank.js"
import fetchJsonPosts from "./api/post.js";
import postHandler from "./post/postHandler.js";

let selectedLaptop = 0;

//Connecting HTML Buttons to the javascript
const getALoanBtnElement = document.getElementById("getALoanBtn");
const bankBtnElement = document.getElementById("bankBtn");
const repayLoanBtnElement = document.getElementById("repayLoanBtn");
const workBtnElement = document.getElementById("workBtn");


const selectedLaptopDescriptionElement = document.getElementById("selectedLaptopDescription")
const selectedLaptopTitleElement = document.getElementById("selectedLaptopTitle")
const selectedLaptopFeaturesElement = document.getElementById("featuresText")
const selectedLaptopPriceElement = document.getElementById("productPrice")
const selectedLaptopImageElement = document.getElementById("laptopImage")




//Post variables
const initialPosts = await fetchJsonPosts();

postHandler.initializePosts(initialPosts);
postHandler.filterPostByLaptopId(1);
postHandler.fillDropdown();
selectedLaptopImageElement.src = postHandler.getPostImage();
selectedLaptopTitleElement.textContent = postHandler.getPostTitle();
selectedLaptopDescriptionElement.textContent = postHandler.getPostDescription();
selectedLaptopFeaturesElement.textContent = postHandler.getPostSpecs();
selectedLaptopPriceElement.textContent = postHandler.getPostPrice();
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

const handleLaptopSelection = e => {
    const selectedLaptop = selectedLaptop[e.target.selectedIndex];
    console.log("test:" +selectedLaptop[e.target.selectedIndex])
}







