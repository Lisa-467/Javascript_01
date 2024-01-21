const array1 = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`==================== Q1 ===================`);
const arrayTrans = array1.map((currentValue) => {
  return currentValue + 10;
});
console.log(arrayTrans);
console.log(`==================== Q2 ===================`);
const cube = array1.map((currentValue) => {
  return currentValue * currentValue;
});

console.log(cube);
console.log(`==================== Q3 ===================`);
const sum = array1.map((currentValue, index) => {
  return currentValue * index;
});
console.log(sum);
