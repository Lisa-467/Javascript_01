console.log(`===========Q1==========`);
function squareOfWordLength(str1) {
  var lengthOfStr = str1.length;
  console.log(`Square of lenght is ${lengthOfStr * lengthOfStr}`);
}
squareOfWordLength("Javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(`=========Q2========`);
function divMulOfLength() {
  str1 = "I am Angular Developer";
  var lengthOfStr1 = str1.length;
  var result = str1.split(" ");
  var lenOfResult = result.length;
  var divResult = lengthOfStr1 / lenOfResult;

  console.log(
    `String length divdide by Total number of words in string  result = ${divResult}`
  );
  var mulResult = lengthOfStr1 * lenOfResult;
  console.log(
    `String length multiply by Total number of words in string  result = ${mulResult}`
  );
}
divMulOfLength();
