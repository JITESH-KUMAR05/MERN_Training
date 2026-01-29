// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
let onlyCreditTransaction = transactions.filter((transaction)=> transaction.type === 'credit');
console.log(onlyCreditTransaction);
//     2. map() to extract only transaction amounts
let onlyAmount = transactions.map((transaction)=>transaction.amount);
console.log(onlyAmount);
//     3. reduce() to calculate final account balance
let finalAmt = transactions.reduce((accumulator,transaction)=>{
    if(transaction.type==='credit'){
        accumulator = accumulator + transaction.amount;
    }
    else{
        if(transaction.amount < accumulator){
            accumulator = accumulator - transaction.amount;
        }
    }
    return accumulator;
},0);
console.log(finalAmt);
//     4. find() the first debit transaction
let firstDebit = transactions.find((transaction)=> transaction.type==='debit');
console.log(firstDebit);
//     5. findIndex() of transaction with amount 10000
let findIdForVal = transactions.findIndex((transaction)=>transaction.amount===10000);
console.log(findIdForVal);