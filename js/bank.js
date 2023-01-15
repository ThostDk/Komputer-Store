let bankBalance = 500;
let loanDebt = 124;
let pay = 1020;

//Connecting HTML Text to the javascript
const balanceAmountTextElement = document.getElementById("balanceAmount")
const payAmountTextElement = document.getElementById("payAmount")
const loanDebtAmountTextElement = document.getElementById("loanDebtAmount")
const loanDebtDescriptionTextElement = document.getElementById("loanDebtDescription")

//Connecting HTML Buttons to the javascript
const repayLoanBtnElement = document.getElementById("repayLoanBtn")

//#region private  functions
// function for toggling between showing/hiding Loan HTML text & buttons (Boolean Parameter)
const toggleLoanHtmlDisplay = (displayHTML) => {
    if(displayHTML)
    {
        loanDebtDescriptionTextElement.style.display = "";
        loanDebtAmountTextElement.style.display = "";
        repayLoanBtnElement.hidden = false;
    }
    else
    {
        loanDebtDescriptionTextElement.style.display = "none";
        loanDebtAmountTextElement.style.display = "none";
        repayLoanBtnElement.hidden = true;
    }
}
// refreshes the bank details for the HTML text
const updateBankInfo = () => {
    loanDebtAmountTextElement.textContent   = `${loanDebt} kr`;
    balanceAmountTextElement.textContent    = `${bankBalance} kr` ;
    payAmountTextElement.textContent        = `${pay} kr`;
    if(loanDebt <= 0){
        toggleLoanHtmlDisplay(false)
    }
    else{
        toggleLoanHtmlDisplay(true)
    }
}
//#endregion private functions



//#region public functions
const work = () => {
    pay+=100;
    updateBankInfo();
}
const repayLoan = () => {
    if(loanDebt > 0 && pay > 0)
    {
        pay -=loanDebt
        if(pay > 0)
        {
            bankBalance += pay;
            loanDebt = 0;
        }
        else
        {
            loanDebt = Math.abs(pay)
            pay = 0;
        }
        updateBankInfo();
    }
    else if(pay <= 0 && loanDebt > 0){
        alert(`Insufficient funds to pay your loan`);
    }
}


const takeLoan = () => {
    if(loanDebt <= 0)
    {
        let loanTmp = "";
        while (true){
            loanTmp = Number(prompt(`how much do you want to loan? max ${bankBalance*2}`));
            if (isNaN(loanTmp) || loanTmp < 0 || loanTmp > bankBalance*2){
                loanTmp = Number(prompt(`Write a Number that is bigger than zero & max ${bankBalance*2}`));
            }
            break;
        }
        loanDebt += loanTmp;
        bankBalance += loanDebt;
        updateBankInfo();
    }
    else{alert(`Sorry, you still need to repay your previous loan of ${loanDebt} kr. before taking another loan`);}
}


const bankSalary = () => {
    if(pay > 0){
        if(loanDebt > 0)
        {
            const payStartAmount = pay;
            const debtStartAmount = loanDebt;
            
            loanDebt -= pay*0.1;
            pay*=0.9;
            //loanDebt => (loanDebt < 0) ? pay += Math.abs(loanDebt): pay
            if(loanDebt < 0)
            {
                pay += Math.abs(loanDebt)
            }
                alert(`up to 10% (${payStartAmount - pay} kr.) of your pay (${payStartAmount}kr.) goes to paying your debt of ${debtStartAmount} kr. The rest ${pay} kr. is being transferred to your bank account.`);
            }
        
        bankBalance += pay;
        pay= 0;
        updateBankInfo();
    }
    else{alert(`Sorry, but there is nothing to transfer at the moment`);}
}

//#endregion public functions

// updates the html text to ensure it displays the actual bank informations
updateBankInfo()
const bank = {
    
    bankBalance,
    loanDebt,
    work,
    takeLoan,
    repayLoan,
    bankSalary

}


export default bank;