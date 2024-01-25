class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array1 = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
const arrayEmps = [
  emp_anil,
  emp_mahi,
  emp_monika,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_viny,
];
console.log(`=========================== Q1 ===================`);
const a1 = arrayEmps.filter((element) => {
  if (element.emp_company == "Wipro") {
    return element;
  }
});
console.log(`Employees from wipro company`);
a1.forEach((element) => {
  console.log(`${element.emp_name} => ${element.emp_company}`);
});

console.log(`=========================== Q2 ===================`);
const a2 = arrayEmps.filter((element) => {
  if (element.emp_dept == "IT" || element.emp_dept == "HR") {
    return element;
  }
});
console.log(`Employees from IT or HR department`);
a2.forEach((element) => {
  console.log(`${element.emp_name} => ${element.emp_dept}`);
});
console.log(`=========================== Q3 ===================`);
const a3 = arrayEmps.filter((element) => {
  if (element.emp_id > 50) {
    return element;
  }
});
console.log(`Employee whos emp id greater than 50 `);
a3.forEach((element) => {
  console.log(`${element.emp_name} => ${element.emp_id}`);
});

console.log(`=========================== Q4 ===================`);
const a4 = arrayEmps.filter((element) => {
  if (
    element.emp_name.startsWith("A") ||
    element.emp_name.startsWith("V") ||
    element.emp_name.startsWith("M")
  ) {
    return element;
  }
});
a4.forEach((element) => {
  console.log(element.emp_name);
});
console.log(`=========================== Q5 ===================`);
const total = arrayEmps.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);
let avg = total / arrayEmps.length;
console.log(`Average salary of all department : ${avg}`);
console.log(`=========================== Q6 ===================`);
const a6 = arrayEmps.filter((element) => {
  if (element.emp_dept == "IT") {
    return element;
  }
});
const sum = a6.reduce((RT, element) => {
  return RT + element.emp_salary;
}, 0);
let avg2 = sum / a6.length;
console.log(`Average salary of IT department ${avg2}`);
