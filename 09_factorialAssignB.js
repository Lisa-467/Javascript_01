function factorialOfWordsCount(str1) {
  //   let s1 = str1.split(" ");
  //   let l1 = s1.length;
  if (str1 == null || str1 == undefined || str1 == NaN) {
    console.log(`Invalid Input !!`);
  } else {
    let s1 = str1.split(" ");
    let l1 = s1.length;
    let result = 1;
    for (let i = 1; i <= l1; i++) {
      result = result * i;
    }
    console.log(`Factorial of total no of word in given string ${result}`);
  }
  // console.log(l1);
}
factorialOfWordsCount("Revision is the mother of success");
factorialOfWordsCount("We never fail,we always learn ,Mind it");
factorialOfWordsCount(null);
factorialOfWordsCount("");
factorialOfWordsCount("Dipti Dattatray Shelavane");
