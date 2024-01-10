let person = {
  firstName: "DIPTI SHELAVANE",
  age: 20,
  isMarried: false,
};
console.log(person);
console.log(`=====with dot notation ====`);
console.log(person.firstName); //with dot notation
console.log(`=====with square notation ====`);
console.log(person["age"]); //with square notation
console.log(`==adding values===`);
person.designation = "Tech Arch";
console.log(person);
console.log(`=====Updating value====`);
person.firstName = "DIPTI";
console.log(person);
console.log(`===delete property===`);
delete person.age;
console.table(person);
console.log(`to create empty object`);
let add = {
  //empty object
};
let user = {
  userName: "jenny",
  country: "USA",
  address: {
    city: "mumbai",
    area: "lokhandawala",
    getAddress: function () {
      console.log(`Complete address ${this.city},${this.area}`);
    },
  },
  show: function () {
    console.log(`inside funtion block`);
  },
};
console.log(user);
let country1 = user.country;
console.log(country1);
user.show();
console.log(`object inside object=======`);
console.log(user.address.city);
console.log(`adding value in nested object======`);
user.address.Pin = 213435;
console.log(user.address);
console.log(`calling funtion inside nested object==========`);
user.address.getAddress();
console.log(`Traversing the object=====`);
let developer = {
  firstName: "DIPTI SHELAVANE",
  age: 20,
  isMarried: false,
  skills: ["C", "Cpp", "Core Java", "Javascript", "MicroServices"],
};
for (const key in developer) {
  if (Object.hasOwnProperty.call(developer, key)) {
    const element = developer[key];
    console.log(`Property==>${key} , value==>${element}`);
  }
}
console.log(developer.skills);
developer.skills.push("HTML");
console.log(developer.skills);
developer.skills.splice(0, 1);
console.log(developer.skills);
