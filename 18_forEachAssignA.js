console.log(`==================== Q1 =================`);
const array1 = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
array1.forEach((currentValue, index) => {
  console.log(`${currentValue} => ${index}`);
});
console.log(` `);
console.log(`==================== Q2 =================`);
array1.forEach((element) => {
  if (element > 0) {
    console.log(element);
  }
});
console.log(` `);
console.log(`==================== Q3 =================`);
const arr = [];
array1.forEach((element) => {
  if (element < 0) {
    arr.push(element);
  }
});
console.log(arr);
console.log(` `);
console.log(`==================== Q4 =================`);
console.log(`Even Numbers`);
array1.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});
console.log(` `);
console.log(`==================== Q5 =================`);
let sum1 = 0;
array1.forEach((element) => {
  sum1 = sum1 + element;
});
console.log(`Sum of all element : ${sum1} `);
console.log(` `);
console.log(`==================== Q6 =================`);
array1.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(element);
  }
});
