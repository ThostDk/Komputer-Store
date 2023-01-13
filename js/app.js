import bank from "./bank.js"
const getALoanElement = document.getElementById("balanceBtn")
const bankBalanceElement = document.getElementById("balanceAmount")

getALoanElement.addEventListener("click", () => {
    addToBalance()
})

function loanPrompt() {
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}

function addToBalance() {
    let loanTmp = "";
    while (true){
        loanTmp = Number(prompt("how much do you want to loan?"));
        if (isNaN(loanTmp) && loanTmp < 0 ){
            loanTmp = Number(prompt("how much do you want to loan? (Write a Number bigger than zero)"));
        }
        break;
    }
    loanBalance += loanTmp;
    bank.bankBalance += bank.loanBalance;
    bankBalanceElement.textContent = bank.bankBalance + " kr";
}