const developer1 = {
  firstName: "Gajanan",
  age: "32",
  skills: ["C", "Cpp", "Java", "Javascript"],
  isMarried: true,
};

const newDeveloper = Object.assign({}, developer1); //assigning object to new object(clonig object)
newDeveloper.firstName = "sir chi jenny";
console.log(newDeveloper);
console.log(developer1);
console.log(`======object merge ======`);
let user = {
  firstName: "lisa",
  designation: "singer",
};
const user1 = {
  firstName: "Rosie",
  designation: "singer",
};
const address = {
  city: "Seoul",
  country: "Thailand",
  pin: 123456,
};

Object.assign(user, address);
console.log(user);
console.log(address);
console.log(`======object merge in anather way======`);
const newobj = Object.assign({}, user1, address);
console.log(newobj);
