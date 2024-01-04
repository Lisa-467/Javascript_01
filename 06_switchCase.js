function dayOfWeek(dayNum) {
  switch (dayNum) {
    case 1:
      console.log(`Day ${dayNum} ==> Monday`);

      break;
    case 2:
      console.log(`Day ${dayNum} ==> Tuesday`);

      break;
    case 3:
      console.log(`Day ${dayNum} ==> Wednusday`);

      break;
    case 4:
      console.log(`Day ${dayNum} ==> Thursday`);

      break;
    case 5:
      console.log(`Day ${dayNum} ==> Friday`);

      break;
    case 6:
      console.log(`Day ${dayNum} ==> Saturday`);

      break;
    case 7:
      console.log(`Day ${dayNum} ==> Sunday`);

      break;

    default:
      console.log(`${dayNum} inavalid day`);
      break;
  }
}
dayOfWeek(3);
