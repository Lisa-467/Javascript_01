console.log("============Q1==========");
function add() {
  var a = 10;
  var b = 10;
  var c;
  c = a + b;
  console.log("addition is = ", c);
}
function mul() {
  var n1 = 10;
  var n2 = 20;
  var result;
  c = n1 * n2;
  console.log("multiplication = ", c);
}
add();
mul();
console.log("=========Q2=========");
function personDetails(firstN, middleN, lastN) {
  console.log("first name = ", firstN);
  console.log("middle name = ", middleN);
  console.log("last name = ", lastN);
}
personDetails("Dipti", "Dattatray", "Shelavane");
console.log("=========Q3=========");
function swapValues(val1, val2) {
  var temp;
  temp = val1;
  val1 = val2;
  val2 = temp;
  console.log("first value = ", val1);
  console.log("second value = ", val2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log("=========Q4=========");
function addThreeValues(val1, val2, val3) {
  var add = val1 + val2 + val3;
  console.log("addition = ", add);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", " Good", " Morning");
