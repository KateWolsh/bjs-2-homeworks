function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}
getArrayParams(-99, 99, 10)
getArrayParams(1, 2, 3, -100, 10)
getArrayParams(5)

function summElementsWorker(...arr) {
  if (arr.indexOf(Element)) {
    const sum = arr.reduce((total, amount) => total + amount, 0);
    return sum;
  }
}
console.log(summElementsWorker());

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);

    return max - min;
  }
  else {
    return 0;
  }
}


function differenceEvenOddWorker(...arr) {
  if (arr.length > 0) {
    var sumEvenElement = 0;
    var sumOddElement = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      }
      else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
  else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length > 0) {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      } 
    }
    return sumEvenElement / countEvenElement;
  }
  else {
    return 0;
  }
}


function makeWork(arrOfArr, func) {
  maxWorkerResult = -Infinity;
  for (let i; i = arrOfArr.length; i++) {
    const fancResult = func.apply(arrOfArr[i]);
    if (fancResult > maxWorkerResult){
      maxWorkerResult = fancResult;
    }
  }
  return maxWorkerResult;
}
