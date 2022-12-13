"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let equationOne;
  let equationTwo;
  let D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0){
    console.log("Корней нет");
  }
  else if (D === 0){
    equationOne = -b / (2*a);
    arr.push(equationOne);
    console.log(arr);
  }
  else{
    equationOne = (-b + Math.sqrt(D))/ (2*a);
    equationTwo = (-b - Math.sqrt(D))/ (2*a);
    arr.push(equationOne);
    arr.push(equationTwo);
    console.log("Корень 1 = " + arr[0] + ";" +  "Корень 2: " + arr[1]);
  }

  return(arr);
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit;
  let monthPayment;
  let allPayment;

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths) 
  ) {
    console.log("Одно из параметров неверно")
    return false;
  }
    percent = (percent / 100) / 12;
    bodyCredit = amount - contribution;
    monthPayment = bodyCredit * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
    allPayment = parseFloat((monthPayment * countMonths).toFixed(2));
    
    return allPayment;
}