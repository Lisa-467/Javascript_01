function Student(id, name, marks) {
  this.id = id;
  this.name = name;
  this.marks = marks;
  this.display = function () {
    console.log(`ID:${this.id} Name:${this.name} Marks:${this.marks}`);
  };
}
const stew = new Student(11, "stew", 99);
const lisa = new Student(12, "lisa", 100);
console.table(stew);
stew.display();

lisa.display();
console.log(`to check whether lisa object is od student class or not`);
console.log(lisa instanceof Student);
console.log(`added comman property to all object by using prototype`);
Student.prototype.country = "Bharat";
console.log(lisa.country);
console.log(stew.country);
