import bank from "./bank.js"
import fetchJsonPost from "./api/post.js";
import postView from "./post/postView.js";

//Connecting HTML Buttons to the javascript
const getALoanBtnElement = document.getElementById("getALoanBtn");
const bankBtnElement = document.getElementById("bankBtn");
const repayLoanBtnElement = document.getElementById("repayLoanBtn");
const workBtnElement = document.getElementById("workBtn");

//Post variables
const initialPosts = await fetchJsonPost();
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

// post content
renderActivePosts();
function renderActivePosts(){
    postContainerElement.innerHTML = "";
    const userIdElementText = userIdElement.value.Trim();

    if(userIdElementText !== "") {
        postView.filterPostByUserId(Number(userIdElementText))
    }

    const activePosts = postView.getPosts()

    for (const activePost of activePosts) {
        const newPostElement = document.createElement("p")
        newPostElement.innerText = activePost.title
        postContainerElement.append(newPostElement)
    }
}

filterButtonElement.addEventListener("click", () => {
    renderActivePosts();
})

