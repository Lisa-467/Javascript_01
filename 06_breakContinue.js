console.log(`======break statement======`);
for (let index = 0; index < 10; index++) {
  // console.log(index);
  if (index == 4) {
    break;
  }
  console.log(index);
}
console.log(`======continue statment======`);
for (let index = 0; index < 10; index++) {
  console.log(index);
  if (index == 5) {
    continue;
  }
}
