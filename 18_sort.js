const array = ["Jenny", "Elon", "Stew", "Bill"];

console.log(`==== Before Reverse =====`);

console.log(array);

console.log(`==== After Reverse =====`);

array.reverse();

console.log(array);

 

const arr = ["Jenny", "Elon", "Stew", "Bill"];

console.log(`==== Before Sorting in Ascending order =====`);

console.log(arr);

console.log(`==== After  Sorting in Ascending order =====`);

arr.sort(); // By default sort in ascending order

console.log(arr);

 

console.log(`==== After Sorting in Descending order =====`);

arr.reverse();

console.log(arr);

console.log(`======= Sorting Number array ===============`);

const arrayNum = [20, 1, 50, 9, 79, 8];

console.log(`======= Before sorting ===============`);

console.log(arrayNum);

console.log(`======= After sorting in ascending order ===============`);

//arrayNum.sort(); // This will not give us the expected result

arrayNum.sort((a, b)=> { // a=50 b=9

    return a>b ? 1 : -1; // [1, 20, 9, 50, 79, 8];

});
console.log(arrayNum);

console.log(`======= After sorting in descending order ===============`);

arrayNum.sort((a, b)=> {

    return a>b ? -1 : 1;

});

// arrayNum.reverse() // Or we could reverse it 

console.log(arrayNum);