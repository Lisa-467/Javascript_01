class Student {
  // Data member or properties
  // Constructor
  constructor(id, name, city, marks) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.marks = marks;
  }
  // Member Functions or methods
  getDetails() {
    console.log(
      `ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`
    );
  }
}
const jenny = new Student(11, "Jenny", "Pune", 70);
const lisa = new Student(12, "lisa", "seoul", 77);
const rosie = new Student(13, "rosie", "LA", 79);
console.log(jenny.name);
jenny.getDetails();

const bill = new Student(22, "Bill", "LA", 60);
//console.table(bill);
bill.getDetails();
console.log(`=======Traversing object======`);
const array1 = [jenny, lisa, rosie, bill];
for (const i of array1) {
  console.log(i);
}
console.log(`======calling method======`);
const array2 = [jenny, lisa, rosie, bill];
for (const i of array2) {
  i.getDetails();
}
console.log(`========wap to log student details if marks>=80 =========`);
for (const i of array2) {
  if (i.marks >= 70) {
    i.getDetails();
  }
}
