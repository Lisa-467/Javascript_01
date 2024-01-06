function reverseString(str1) {
  let r1 = " ";
  for (let i = str1.length - 1; i >= 0; i--) {
    if (str1.charAt(i) != " ") {
      r1 = r1 + str1.charAt(i);
    }
  }
  console.log(` reversed string without considering space is ${r1}`);
}
reverseString("Hard work always pays back ");
reverseString("Soon i will be Angular IT champ");
