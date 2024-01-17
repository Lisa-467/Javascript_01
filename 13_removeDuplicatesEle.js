function removeDuplictes(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let array1 = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      array1[j] = arr[i];
      j++;
    }
  }
  console.log(array1);
}
let arr2 = [11, 22, 33, 66, 11, 44, 33, 22, 11];
console.log(arr2);
console.log(`Array after deleting repeated elements`);
removeDuplictes(arr2);
