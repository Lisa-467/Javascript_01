const arrayNum = [2, 4, 6, 8];

console.log(arrayNum);

console.log(`Total elements in the array is: ${arrayNum.length}`);

console.log(`Array type is: ${typeof arrayNum}`);

console.log(`===== Read or Access value from array =====`);

const elementAtIndex2 = arrayNum[2];

console.log(`Element at index 2 is: ${elementAtIndex2}`);

console.log(`===== Traversing value from array =====`);

for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];

  console.log(element);
}

console.log(`===== WAP to Sum of from array =====`);

let sum = 0;

for (let index = 0; index < arrayNum.length; index++) {
  sum = sum + arrayNum[index];
}

console.log(sum);

let array1 = ["jenny", "menny", "bill"];
console.log(`=====adding element at the end=====`);
array1.push("elon");
console.log(array1);
console.log(`======adding element at the begining======`);
array1.unshift("narayan");
console.log(array1);
console.log(`===remove from beginning`);
array1.shift();
console.log(array1);
console.log(`====remove last element===`);
array1.pop();
console.log(array1);
console.log(`====use of slice====`);
array2 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let s1 = array2.slice(2);
console.log(s1);
let s2 = array2.slice(2, 6);
console.log(s2);
console.log(`====use of splice====`);
console.log(`Removing and deleting elements`);
let r1 = array2.splice(4);
console.log(`removed elements ${r1}`);
console.log(`oringinal array ${array2}`);
console.log(`Removing and deleting elements from middle`);
let array3 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
r2 = array3.splice(2, 3);
console.log(`removed elements ${r2}`);
console.log(`oringinal array ${array3}`);
console.log(`======insert elements at the middle===`);
let array4 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
array4.splice(3, 0, 99, 98, 46);
console.log(array4);
console.log(`======Replace elements ====== `);
array4.splice(2, 2, 100, 101);
console.log(array4);
