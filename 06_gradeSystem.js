var Grade = function (marks) {
  if (marks < 0 || marks > 100) {
    console.log(` ${marks} invalid marks`);
  } else if (marks > 0 && marks < 35) {
    console.log(` ${marks} You are Failed`);
  } else if (marks >= 35 && marks <= 55) {
    console.log(`${marks} You are passed , you have C grade`);
  } else if (marks > 55 && marks <= 75) {
    console.log(` ${marks} You are passed , You have B grade`);
  } else if (marks > 75 && marks <= 100) {
    console.log(` ${marks} Congrats You are passed  you have A grade `);
  } else {
    console.log(` ${marks} invalid marks `);
  }
};
Grade(88);
Grade(101);
Grade(102);
Grade(undefined);
Grade(NaN);
