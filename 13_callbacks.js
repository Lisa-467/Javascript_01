function jenny(arg) {
  console.log(`after session jenny started HW and completed`);
  console.log(`Now she is ready to call back Bill !`);
  arg();
}
function Bill() {
  console.log(`Iam bill i will copy jenny's assignment `);
  console.log(` she will call me back after she will done`);
}
jenny(Bill);
let greet = function () {
  console.log(`hello ....good morning`);
};
setTimeout(greet, 3000); //funtion call 1 sec =1000 milli sec
