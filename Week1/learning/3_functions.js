// function declaration or defination
function sumOfTwoNum(a,b){
    let sum = a+b;
    return sum;
}

function bigAmongThree(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }else if(num3 > num1 && num3 > num1){
        return num3;
    }
    return "maybe some are equal";
}

function addVal(amtToBeAdded,prevTot){
    return prevTot + amtToBeAdded;
}
function applyDiscount(discountAmt,prevTot){
    return prevTot - discountAmt;
}
function addGST(totalAmt){
    let newTot = totalAmt + ((18/100)*totalAmt);
    return newTot;
}

// function calling

console.log(sumOfTwoNum(5,5));
console.log(typeof sumOfTwoNum);

let bigg = bigAmongThree(5,7,3);
console.log("Biggest: ",bigg);

let totalAmt = 0;
totalAmt = addVal(500,totalAmt);
totalAmt = addVal(1200,totalAmt);
totalAmt = applyDiscount(200,totalAmt);
totalAmt = addGST(totalAmt);
console.log(totalAmt);