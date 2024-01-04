console.log(`===========Q1==========`);
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    console.log(`Number is Even`);
  } else {
    console.log(`Number is odd`);
  }
}
isEvenOrOdd(45);
isEvenOrOdd(70);
isEvenOrOdd(67);
isEvenOrOdd(98);
console.log(`===========Q2==========`);
function eligibleForVote(age) {
  if (age >= 18) {
    console.log(`Eligible for vote`);
  } else {
    console.log(`Not eligible for vote`);
  }
}
eligibleForVote(18);
eligibleForVote(20);
eligibleForVote(17);
eligibleForVote(40);
console.log(`===========Q3==========`);
function checkNOCharactee(word) {
  L1 = word.length;
  if (L1 > 10) {
    console.log(`contains more than 10 characters`);
  } else {
    console.log(`less than 10 characters`);
  }
}
checkNOCharactee("Javascript-ES6");
console.log(`===========Q4==========`);
function checkStart(word1, string1) {
  var r1 = string1.startsWith(word1);
  if (r1 == true) {
    console.log(`yes string starts with ${word1}`);
  } else {
    console.log(`no string not starts with ${word1}`);
  }
}
checkStart("Java", "Javascript language");
