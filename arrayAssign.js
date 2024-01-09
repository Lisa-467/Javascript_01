console.log(`======1======`);
const arrayNum = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Total no of elements:${arrayNum.length}`);
console.log(`======2======`);
console.log(`First elements : ${arrayNum[0]}`);
console.log(`Last element :${arrayNum[arrayNum.length - 1]} `);
console.log(`======3======`);
console.log(`Last third element :${arrayNum[arrayNum.length - 3]} `);
console.log(`======4======`);
for (const i of arrayNum) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// let sum1 = 0;
// console.log(`============`);
// for (const i of arrayNum) {
//   sum1 = sum1 + i;
// }
// console.log(sum1);

console.log(`======5======`);
for (const i of arrayNum) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

console.log(`=======6======`);

let sum1 = 0;
for (const key in arrayNum) {
  if (key % 2 == 0) {
    sum1 = sum1 + arrayNum[key];
  }
}
console.log(`Sum of even positioned numbers is : ${sum1}`);
console.log(`=====7====`);
let sum2 = 0;
for (const key in arrayNum) {
  if (key % 2 != 0) {
    sum2 = sum2 + arrayNum[key];
  }
}
console.log(`Sum of odd positioned numbers is : ${sum2}`);
console.log(`=====8====`);
let sum3 = 0;
for (const i of arrayNum) {
  sum3 = sum3 + i;
}
console.log(`adiition of all numbers in array ${sum3}`);
console.log(`=====9====`);

for (const i of arrayNum) {
  if (i % 5 == 0) {
    console.log(i);
  }
}
console.log(`=====10====`);
let r1 = arrayNum.includes(115);
console.log(`115 is available :${r1}`);
console.log(`23 is avilable :${arrayNum.includes(23)}`);
console.log(`===11.inserting 55,66 at 3 index===`);
arrayNum.splice(3, 0, 55, 66);
console.log(arrayNum);
console.log(`===12.deleting 3 elements starting from index 4==`);
arrayNum.splice(4, 3);
console.log(arrayNum);
