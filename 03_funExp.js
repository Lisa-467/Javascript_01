// Function Expression - FE
// FE - Storing function inside the variable
var display = function () {
  console.log("display");
};
display(); // Call - Function expression
//console.log(display);

var maleMarriageEligibility = function (gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey ${boyName} you are eligible for Marriage`
      : " Unfortunately - You are not eligible, Please try next time.";
  console.log(result);
};
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Elon");
