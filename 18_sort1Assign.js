console.log(`===================== Q1 ====================`);
const arrayRN = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Reversed Array`);
console.log(arrayRN.reverse());
console.log(`===================== Q2 ====================`);
console.log(`Using sort method without passing any argument`);
console.log(arrayRN.sort());
console.log(`===================== Q3 ====================`);
console.log(`Sorting array in asending order by custom logic`);
for (let i = 0; i < arrayRN.length; i++) {
  for (let j = 0; j < arrayRN.length; j++) {
    if (arrayRN[j] > arrayRN[j + 1]) {
      let temp = arrayRN[j];
      arrayRN[j] = arrayRN[j + 1];
      arrayRN[j + 1] = temp;
    }
  }
}
console.log(arrayRN);
console.log(`===================== Q4 ====================`);
console.log(`Greatest Number from array`);
console.log(arrayRN[arrayRN.length - 1]);
console.log(`===================== Q5 ====================`);
console.log(`Smallest element in array ${arrayRN[0]}`);
console.log(`===================== Q6 ====================`);
let r1 = [...new Set(arrayRN)];
console.log(r1);
