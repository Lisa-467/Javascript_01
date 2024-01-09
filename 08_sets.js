let setOfRoll = new Set();
setOfRoll.add(11);
setOfRoll.add(22);
setOfRoll.add(33);
setOfRoll.add(22);
setOfRoll.add(44);
setOfRoll.add(77);
console.log(setOfRoll);
console.log(`size of set is ${setOfRoll.size}`);
console.log(`deleting elements 77 `);
setOfRoll.delete(77);
console.log(setOfRoll);
console.log(`to check is element available`);
console.log(setOfRoll.has(11));
console.log(`travesrsing set elements`);
for (const iterator of setOfRoll) {
  console.log(iterator);
}
console.log(`Removing duplicate elements from array by using set`);
let arrayNum = [11, 22, 33, 44, 44, 55, 55, 66, 77];
console.log(arrayNum);
let array2 = [...new Set(arrayNum)]; //here we used spread op to clone array and set to remove
console.log(array2); //duplicate elements
