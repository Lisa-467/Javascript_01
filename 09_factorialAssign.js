function factorialOfNum(num) {
  if (num == 0) {
    console.log(`factorial of given number is 1`);
  } else if (num == null || num == undefined || num == NaN) {
    console.log(`Invalid Input !!`);
  } else {
    result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    return console.log(`Result of given number is ${result}`);
  }
}

factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
