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
const arr = [
  emp_anil,
  emp_mahi,
  emp_monika,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_viny,
];
console.log(`========================== Q1 ========================`);
const arr1 = arr.filter((element) => {
  if (element.emp_company == "TCS") {
    return element;
  }
});
arr1.forEach((element) => {
  console.log(`${element.emp_company} => ${element.emp_name}`);
});
console.log(`========================== Q2 ========================`);
let sum = 0;
const arr2 = arr.filter((element) => {
  if (element.emp_company == "Wipro") {
    return element;
  }
});

arr2.forEach((element) => {
  sum = sum + element.emp_salary;
});
const avg = sum / arr2.length;
console.log(`Average salary of Wipro company employee is ${avg}`);
console.log(`========================== Q3 ========================`);
const arr3 = arr.filter((element) => {
  if (element.emp_company == "Wipro" || element.emp_company == "Infy") {
    return element;
  }
});
let sum1 = 0;
arr3.forEach((element) => {
  sum1 = sum1 + element.emp_salary;
});
const avg1 = sum1 / arr3.length;
console.log(`Average salary of wipro or Infy companies is ${avg1}`);
