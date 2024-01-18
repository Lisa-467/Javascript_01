console.log(`========= Q1 ===========`);
const n1 = () => {
  console.log(`Good Morning ,Today is Thursday `);
};
n1();
console.log(`========= Q1 ===========`);
const multiply = (n1, n2, n3 = 1) => {
  console.log(`Result of multiplication ${n1 * n2 * n3}`);
};
multiply(5, 5, 2);
multiply(10, 4);
console.log(`========== Q3 ==========`);
const Addition = (s1, s2, s3, s4, s5) => {
  r1 = s1 + s2 + s3 + s4 + s5;
  console.log(`Addition of parameter passed`);
  console.log(r1);
};
Addition(100, 100, 200, 349, 756);
Addition("1am", " learning", " ES6", " features", " in depth");
// console.log(res4);
// console.log(`====================`);
// console.log(res5);
