var age = 20;
if (age >= 21) {
  console.log(`Inside if block...`);
}

console.log(`Outside if block...`);
var age = 22;
if (age >= 21) {
  console.log(`Eligible for marriage`);
  console.log("Inside if block");
} else {
  console.log(`Nope.. Please try next time...`);
}
var isEvenOrOdd = function (num) {
  var returnValue = "";
  if (num % 2 == 0) {
    returnValue = "EVEN";
  } else {
    returnValue = "ODD";
  }
  return returnValue;
};

var result = isEvenOrOdd(23);
console.log(`23 Given number is ${result}`);

var result = isEvenOrOdd(30);
console.log(`30 Given number is ${result}`);
``;
