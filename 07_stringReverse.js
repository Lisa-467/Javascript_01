console.log(`read string`);
str = "Developer UI";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
console.log(`reverse string`);
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result = result + str[i];
}
console.log(result);

let vowelCount = 0;
for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    vowelCount++;
  }
}
console.log(`vowel count in string is ${vowelCount}`);
