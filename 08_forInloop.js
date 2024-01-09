let array = [11, 22, 33, 44, 55, 66, 77];
let sum = 0;
console.log(`sum of an array using for in loop..`);
for (const index in array) {
  sum = sum + array[index];
}
console.log(sum);
let array1 = [11, 22, 33, 44, 55, 66, 77];
console.log(`Traversing array using for in loop..`);
for (const index in array1) {
  console.log(array1[index]);
}
console.log(`Traversing an array using for of loop..`);
for (const element of array) {
  console.log(element);
}
let arrayNum = [4, 5, 6, 7, 3];
let sum1 = 0;
console.log(`Traversing an array using for of loop..`);
for (const element of arrayNum) {
  sum1 = element;
}
console.log(sum1);
console.log(`==== WAP to count the vowels from the given string=======`);
const str = "Developer UI and Backend";
const vowels = "aeiou";
let count = 0;
for (const char of str) {
  console.log(char);
  if (vowels.includes(char.toLowerCase())) {
    count++;
  }
}
console.log(`Vowels count is: ${count}`);
let arrayOfFriends = ["Jenny", "Elon", "Bill"];
const result = arrayOfFriends.join(",");
console.log(typeof result);
console.log(result);
arrayOfFriends.reverse();
console.log(arrayOfFriends);
console.log(`=====total no of words in string===`);
const word = "developer UI and Backend";
const arrayWord = word.split(" ");
console.log(arrayWord.length);
console.log(`======to reverse string not array=======`);
const word1 = word.split("").reverse().join("");
console.log(word1);
// word1.reverse();
// console.log(word1);
// const rejoin = word1.join("");
// console.log(rejoin);
