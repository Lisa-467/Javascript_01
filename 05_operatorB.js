console.log(`===========Q1==========`);
function greaterNum(n1, n2) {
  var result = n1 > n2 ? `${n1} is greater` : `${n2} is greater`;
  console.log(result);
}
greaterNum(10, -10);
greaterNum(800, 899);
console.log(`===========Q2==========`);
function isEvenOrOdd(num) {
  var result1 =
    num % 2 == 0 ? `${num} given number is even` : `${num} given number is odd`;
  return result1;
}
var r1 = isEvenOrOdd(29);
var r2 = isEvenOrOdd(44);
var r3 = isEvenOrOdd(0);
var r4 = isEvenOrOdd(101);
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(`===========Q3==========`);
function wordLength(word) {
  l1 = word.length;
  var result3 =
    l1 % 2 == 0 ? `${word} length is even ` : `${word} length is odd `;
  return result3;
}
var l4 = wordLength("javascript");
var l2 = wordLength("Developer");
var l3 = wordLength("Google");
console.log(l4);
console.log(l2);
console.log(l3);
