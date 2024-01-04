function marriageEligibility(gender, age) {
  if (gender == "male" && age >= 21) {
    console.log(`male,${age} is eligible for marriage`);
  } else if (gender == "female" && age >= 18) {
    console.log(`female,${age} is eligible for marriage`);
  } else if (gender == "other") {
    console.log(`other,${age} not eligible for marriage `);
  } else {
    console.log(`${gender},${age} You are not eligible for marriage`);
  }
}
marriageEligibility("male", 17);
marriageEligibility("male", 25);
marriageEligibility("female", 28);
marriageEligibility("female", 16);
marriageEligibility("other", 35);
marriageEligibility("other", 41);
