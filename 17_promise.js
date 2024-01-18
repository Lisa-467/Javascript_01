const isNotesAvailable = false;

// const promiseNotes = new Promise(function(success, reject){

//     if (isNotesAvailable) {

//         success("Sharing the notes.. Here you go..");

//     }

//     reject(`Sorry guys.. I didn't get time`);

// });

// promiseNotes.then(function(success){

//     console.log(success);

//     console.log(`Thank you Master`);

// }).catch(function(failure){

//     console.log(`${failure}`);

//     console.log(`Very Kadhus master.. `);

// }).finally(function(){

//     console.log(`I must have my notes...`);

// });

const promiseNotes = new Promise((success, reject) => {
  if (isNotesAvailable) {
    success("Sharing the notes.. Here you go..");
  }

  reject(`Sorry guys.. I didn't get time`);
});

promiseNotes
  .then((success) => {
    console.log(success);

    console.log(`Thank you Master`);
  })
  .catch((failure) => {
    console.log(`${failure}`);

    console.log(`Very Kadhus master.. `);
  })
  .finally(() => {
    console.log(`I must have my notes...`);
  });
