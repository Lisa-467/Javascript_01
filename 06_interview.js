function interviewEligibility(gradScore, hscScore, sscScore, candidateName) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
    console.log(
      `Congrats ${candidateName} you are eligible for TCS interview !`
    );
  } else {
    console.log(`Unfortunately you are not eligible for interview`);
  }
}
interviewEligibility(80, 86, 90, "Dipti");
interviewEligibility(70, 65, 55, "Shubhangi");
interviewEligibility(60, 79, 88, "Rosie");
