function capitalize(str) {
  let str1 = str.split(" ");
  let newString = "";
  for (const key of str1) {
    let len = key.length;
    let f = key.substring(0, 1);
    let m = key.substring(1, key.length - 1);
    let last = key.charAt(key.length - 1);
    newString = newString + f.toUpperCase() + m + last.toUpperCase() + " ";
  }
  console.log(newString);
}
console.log(`Capitilizing first and last letter of each word of string`);
capitalize("hello world");
capitalize("Iam software developer");
