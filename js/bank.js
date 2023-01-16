let bankBalance = 0;
let loanDebt = 0;
let pay = 0;

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
    if (displayHTML) {
        loanDebtDescriptionTextElement.style.display = "";
        loanDebtAmountTextElement.style.display = "";
        repayLoanBtnElement.hidden = false;
    } else {
        loanDebtDescriptionTextElement.style.display = "none";
        loanDebtAmountTextElement.style.display = "none";
        repayLoanBtnElement.hidden = true;
    }
}
// refreshes the bank details for the HTML text
const updateBankInfo = () => {
    loanDebtAmountTextElement.textContent = `${loanDebt} kr`;
    balanceAmountTextElement.textContent = `${bankBalance} kr`;
    payAmountTextElement.textContent = `${pay} kr`;
    if (loanDebt <= 0) {
        toggleLoanHtmlDisplay(false)
    } else {
        toggleLoanHtmlDisplay(true)
    }
}
//#endregion private functions



//#region public functions
const work = () => {
    pay += 100;
    updateBankInfo();
}
const repayLoan = () => {
    if (loanDebt > 0 && pay > 0) {
        pay -= loanDebt
        if (pay > 0) {
            bankBalance += pay;
            loanDebt = 0;
        } else {
            loanDebt = Math.abs(pay)
            pay = 0;
        }
        updateBankInfo();
    } else if (pay <= 0 && loanDebt > 0) {
        alert(`Insufficient funds to pay your loan`);
    }
}

// function for taking a loan which put up a prompt asking for an amount that is max 2x your bank account. 
const takeLoan = () => {
    if (loanDebt <= 0) {
        let loanTmp = "";
        loanTmp = Number(prompt(`how much do you want to loan? max ${bankBalance*2}`));
        while (true) {
            // checks if what you wrote is a number, if positive and no more than 2x your bank account
            if (isNaN(loanTmp) || loanTmp < 0 || loanTmp > bankBalance * 2) {
                loanTmp = Number(prompt(`Write a Number that is bigger than zero & max ${bankBalance*2}`));
            } else {
                break;
            }
        }
        loanDebt += loanTmp;
        bankBalance += loanDebt;
        updateBankInfo();
    } else {
        alert(`Sorry, you still need to repay your previous loan of ${loanDebt} kr. before taking another loan`);
    }
}

// function for banking your salary/pay and taking up to 10% to the side for paying off debts. 
const bankSalary = () => {
    if (pay > 0) {
        if (loanDebt > 0) {
            const payStartAmount = pay;
            const debtStartAmount = loanDebt;

            loanDebt -= pay * 0.1;
            pay *= 0.9;

            if (loanDebt < 0) {
                pay += Math.abs(loanDebt)
            }
            alert(`up to 10% (${payStartAmount - pay} kr.) of your pay (${payStartAmount}kr.) goes to paying your debt of ${debtStartAmount} kr. The rest ${pay} kr. is being transferred to your bank account.`);
        }

        bankBalance += pay;
        pay = 0;
        updateBankInfo();
    } else {
        alert(`Sorry, but there is nothing to transfer at the moment`);
    }
}

// function for buying the current selected product.
// only allow you to buy if you have sufficient funds on your bank account
const buyNow = (productCost) => {
    if (bankBalance >= productCost) {
        let result = confirm("are you sure you want to buy");

        if (result) {
            bankBalance -= productCost
            updateBankInfo();
            alert(`Enjoy your new laptop!${productCost} kr. have been withdrawn from your bank account`)
        } else {
            result = confirm("are you absolutely sure you don't want to buy?")
            if (!result) {
                bankBalance -= productCost
                updateBankInfo();
                alert(`Enjoy your new laptop!${productCost} kr. have been withdrawn from your bank account`)
            } else {
                result = confirm("so you don't want to buy the laptop? it's really not that expensive")
                if (result) {
                    bankBalance -= productCost
                    updateBankInfo();
                    alert(`Enjoy your new laptop!${productCost} kr. have been withdrawn from your bank account`)
                } else {
                    result = confirm("just to be sure... So you mean you don't want to buy from us?")
                    if (!result) {
                        bankBalance -= productCost
                        updateBankInfo();
                        alert(`Enjoy your new laptop!${productCost} kr. have been withdrawn from your bank account`)
                    } else {
                        alert("okay then... You could just have told us from the start")

                    }
                }
            }

        }
    } else {
        alert(`Insufficient funds! you need have ${productCost-bankBalance} kr. more on your bank account to buy the product(${productCost} kr.)`)
    }
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
    bankSalary,
    buyNow

}


export default bank;