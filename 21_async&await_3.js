const isPromiseFailure = false;
function getData() {
  return new Promise((success, failure) => {
    setTimeout(() => {
      success("Promise Resolved: Successfully fetched data");
    }, 20000);
  });
}
async function showData() {
  console.log(`Inside try block....`);
  const promiseData = await getData();
  console.log(promiseData);
  dance();
}
showData();

function dance() {
  console.log("I am dancing as My Promise resolved...");
}
