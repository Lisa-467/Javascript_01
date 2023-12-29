function stringHandsOn() {
  var developer = "    Hey you are doing good,keep it up    ";
  var lenOfStr = developer.length;
  console.log(developer);
  console.log(`length of string is ${lenOfStr}`);

  var developer1 = developer.trim();
  console.log(developer1);
  var lenOfStr2 = developer1.length;
  console.log(`after trim length is ${lenOfStr2}`);
  var firstChar = developer1.charAt(0);
  console.log(`first character = ${firstChar}`);
  var lastChar = developer1.charAt(32);
  console.log(`last character = ${lastChar}`);
  var result = developer1.split(" ");
  console.log(result);
  console.log(`Total Words in string ${result.length}`);
  console.log(`index of good is ${developer1.search("good")}`);
  console.log(`Substring ${developer1.substring(22)}`);
  console.log(`Slice ${developer1.slice(22)}`);
  console.log(`is "up" is include = ${developer1.includes("up")}`);
  console.log(`is Hey includes = ${developer1.includes("Hey")}`);
}
stringHandsOn();
