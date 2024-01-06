// 0 to 10 Numbers print
for (var index = 0; index <= 10; index++) {
  console.log(index);
}
console.log("2, 4, 6 ,8, 10 Numbers to print");
// 2, 4, 6 ,8, 10 Numbers to print
for (let index = 2; index <= 10; index = index + 2) {
  console.log(index);
}
console.log(`========= Numbers from 10 to 1 ==============`);
for (let index = 10; index >= 1; index--) {
  console.log(index);
}
for (let index = 5; index <= 50; index = index + 5) {
  console.log(index);
}
console.log(`========= Example of Infinite loop==============`);
// for (let index = 5; index < 10; index--) {
//    console.log(index); // 5 4 3 2 1 0 ----------
// }
console.log(`========= Numbers from 1 to 10 ==============`);
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
