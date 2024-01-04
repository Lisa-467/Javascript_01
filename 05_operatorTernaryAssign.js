console.log(`===========Q1==========`);
function maleMarriageEligibility(gender, age, name) {
  var result =
    gender == "male" && age >= 21
      ? `hey ${name} you are eligible for marriage`
      : `hey ${name} You are not eligible for marriage`;
  return result;
}
var r1 = maleMarriageEligibility("male", 25, "BillGates");
var r2 = maleMarriageEligibility("male", 17, "stew Jobs");
console.log(r1);
console.log(r2);
console.log(`===========Q2==========`);
function femaleMarriageEligibility(gender1, age1, name1) {
  var result1 =
    gender1 == "female" && age1 >= 18
      ? `hey ${name1} you are eligible for marriage`
      : `hey ${name1} You are not eligible for marriage`;
  return result1;
}
var f1 = femaleMarriageEligibility("female", 16, "Jenifer");
var f2 = femaleMarriageEligibility("female", 27, "Malinda Gates");
console.log(f1);
console.log(f2);
