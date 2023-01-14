let bankBalance = 500;
let loanDebt = 1200;
let pay = 1450;

//Connecting HTML Text to the javascript
const balanceAmountTextElement = document.getElementById("balanceAmount")
const payAmountTextElement = document.getElementById("payAmount")
const loanDebtAmountTextElement = document.getElementById("loanDebtAmount")
const loanDebtDescriptionTextElement = document.getElementById("loanDebtDescription")

//Connecting HTML Buttons to the javascript
const repayLoanBtnElement = document.getElementById("repayLoanBtn")


updateBankInfo()
if(loanDebt <= 0){toggleLoanHtmlDisplay(false)}


const bank = {
    
    bankBalance,
    loanDebt,
    takeLoan,
    repayLoan

}
//#region public functions
function repayLoan() {
    if(loanDebt > 0)
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
}


function takeLoan() {
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
        toggleLoanHtmlDisplay(true)
        loanDebtAmountTextElement.textContent = loanTmp;
        balanceAmountTextElement.textContent = bankBalance + " kr";
    }
    else{alert(`Sorry, you still need to repay your previous loan of ${loanDebt} kr. before taking another loan`);}
}


function bankMoney() 
{

}

//#endregion public functions

//#region Private functions

function updateBankInfo()
{
    loanDebtAmountTextElement.textContent   = `${loanDebt} kr`;
    balanceAmountTextElement.textContent    = `${bankBalance} kr` ;
    payAmountTextElement.textContent        = `${pay} kr`;
    if(loanDebt <= 0){toggleLoanHtmlDisplay(false)}
    else{toggleLoanHtmlDisplay(true)}
}

// function for toggling between showing/hiding Loan HTML text & buttons (Boolean Parameter)
function toggleLoanHtmlDisplay(displayHTML)
{
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

//#endregion Private functions




export default bank;