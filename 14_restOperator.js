let array = ["jenny", "bill", "stew"];
console.log(array);
console.log(...array); //using spread operator it expand array
//using spread operator as rest operator
function show(n1, n2, ...arg) {
  console.log(n1);
  console.log(n2);
  console.log(arg);
}
show(10, 20, 30, 40, 50);
