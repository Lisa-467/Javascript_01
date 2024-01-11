console.log(`====const object===`);
const developer1 = {
  firstName: "Dipti",
  age: "20",
  skills: ["C", "Cpp", "Java", "Javascript"],
  isMarried: false,
};
console.log(developer1);
console.log(`====changing age value===`);
developer1.age = "21";
console.log(developer1);
console.log(`=====object freezing====`);

const developer = {
  firstName: "Dipti",
  age: "20",
  skills: ["C", "Cpp", "Java", "Javascript"],
  isMarried: false,
};
console.log(developer);

Object.freeze(developer);
developer.firstName = "dip";
console.log(developer);
console.log(`====const array===`);

const array1 = [1, 2, 3, 4, 5];
console.log(array1);
console.log(`====changing inside array value===`);
array1[0] = 100;
console.log(array1);
console.log(`====freezing array===`);
const array2 = [1, 2, 3, 4, 5];
console.log(array2);
Object.freeze(array2);
console.log(`====trying to changing inside  value of freezed array===`);
array2[0] = 100;
console.log(array2);
