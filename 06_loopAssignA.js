console.log(`=========Q1==============`);
function countVowel(str) {
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      vowelCount++;
    }
  }
  console.log(`Count of Vowel is ${vowelCount}`);
}
countVowel("I am very good IT Developer");
console.log(`=========Q2==============`);
let cube = 0;
for (let i = 1; i <= 5; i++) {
  cube = cube + i * i * i;
}
console.log(`Sum of cube of from 1 to 5 is ${cube}`);
console.log(`=========Q3==============`);
function oddPositionChars(str2) {
  r1 = "";
  for (let i = 0; i < str2.length; i++) {
    //let char = str2[i];

    if (i % 2 != 0 && str2.charAt(i) != " ") {
      r1 = r1 + str2.charAt(i);
    }
  }
  console.log(
    `odd positioned character of string without considering space is ${r1}`
  );
}
oddPositionChars("Hard work always pays back");
