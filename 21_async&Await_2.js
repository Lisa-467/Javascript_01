function getData() {
  return "100 Products";
}

async function showData() {
  try {
    console.log(`Inside try block....`);
    const promiseData = await getData();
    console.log(promiseData);
  } catch (error) {
    console.log(`Inside catch block...`);
    console.log(error);
  }
}
showData();
