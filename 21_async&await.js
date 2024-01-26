const isPromiseFailure = true;
function getData() {
  const promise = new Promise((success, failure) => {
    if (isPromiseFailure) {
      failure("Promise Failed to resolve : Unable to get the data");
    } else {
      success("Promise Resolved: Successfully fetched data");
    }
  });
  return promise;
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
  // promiseData.then((success) => {
  //     console.log(`${success}`);
  // }).catch((failure) => {
  //     console.log(`${failure}`);
  // }).finally(() => {
  //     console.log(`Finally block executed..`);
  // });
}
showData();
