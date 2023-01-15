import bank from "./bank.js"
import fetchJsonPosts from "./api/post.js";
import postView from "./post/postView.js";

//Connecting HTML Buttons to the javascript
const getALoanBtnElement = document.getElementById("getALoanBtn");
const bankBtnElement = document.getElementById("bankBtn");
const repayLoanBtnElement = document.getElementById("repayLoanBtn");
const workBtnElement = document.getElementById("workBtn");

const lapTopDropdownIdElement = document.getElementById("laptopIdSelection")
const featuresTextElement = document.getElementById("featuresText");


//Post variables
const initialPosts = await fetchJsonPosts();
postView.initializePosts(initialPosts);
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
lapTopDropdownIdElement.addEventListener("click", () => {
    lapTopDropdownIdElement.ch
    click()
});
lapTopDropdownIdElement.addEventListener('show.bs.dropdown', event => {
    lapTopDropdownIdElement.ch
    click()
});

lapTopDropdownIdElement.onclick = console.log("clicking")
// post content
renderActivePosts();
function renderActivePosts(){
    
}




