function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById('loanAmountInput').value);
    const intrestRate = parseFloat(document.getElementById('interestRateInput').value);
    const loanTerm = parseFloat(document.getElementById('loanTermInput').value);

    if(isNaN(loanAmount) || isNaN(intrestRate) || isNaN(loanTerm)){
        showError("Please enter valid numbers for all fields.");
        return;
    }
    const monthlyInterestRate = intrestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate)/(1-  Math.pow(1 + monthlyInterestRate, - numberOfPayments));
    const totalInterest = (monthlyPayment * numberOfPayments) - loanAmount;

    displayResult(monthlyPayment,totalInterest);

}

function displayResult(monthlyPayment,totalInterest){

    const resulDiv = document.getElementById('result');

    resulDiv.innerHTML = `<p><strong> Monthly Payment : ${monthlyPayment.toFixed(2)} </strong></p>
    <p><strong> Total Interest :${totalInterest.toFixed(2)} </strong></p>`;

}
function showError(message){
    const resulDiv = document.getElementById('result');
    resulDiv.innerHTML = `<p class = "error">${message}</p>`


}
function resetDisplay(){
    const resulDiv = document.getElementById('result');
    resulDiv.innerHTML = "Final Result";
}

document.getElementById("calculateBtn").addEventListener("click",calculateLoan);
document.getElementById('reset').addEventListener('click',resetDisplay);