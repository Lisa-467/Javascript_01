console.log(`================== Q1 ===============`);
function palindrome(str1) {
  const s2 = str1.split("").reverse().join("");
  if (s2 == str1) {
    console.log(`palindrome`);
  } else {
    console.log(`Not palindrome`);
  }
  // const result = s2 == str1 ? "String is palindrome" : "String is palindrome";
  //   console.log(result);
}
palindrome("madam");
console.log(`  `);
palindrome("dad");
console.log(`  `);
palindrome("hello");
const Anagram = function (str1, str2) {
  const r1 = str1.split("").sort().join("");
  const r2 = str2.split("").sort().join("");
  const result = r1 == r2 ? "strings are Anagram" : "string are not Anagram";
  console.log(result);
};
console.log(`================== Q2 ===============`);
Anagram("silent", "listen");
console.log(`  `);
Anagram("Hello", "World");
console.log(`  `);
Anagram("Such", "much");
