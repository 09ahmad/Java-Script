let highIncome=true;
let highCreditScore=true;
let eligibleForLoan=highIncome || highCreditScore;
console.log('Eligible',eligibleForLoan);
let applicationRefuse=!eligibleForLoan;
console.log("Appplication Refuse",applicationRefuse);