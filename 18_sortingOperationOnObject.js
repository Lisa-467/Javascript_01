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
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
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
console.log(`====================== Q1 ==================`);
console.log(`Descending order of employee ID`);
array1.sort((s1, s2) => {
  return s1.emp_id > s2.emp_id ? -1 : 1;
});
for (const key of array1) {
  console.log(`ID => ${key.emp_id} : Department => ${key.emp_dept}`);
}
console.log(`====================== Q2 ==================`);
console.log(`Asending order employee department`);
array1.sort((s1, s2) => {
  return s1.emp_dept > s2.emp_dept ? 1 : -1;
});
for (const key of array1) {
  console.log(
    `ID => ${key.emp_id} : Dept => ${key.emp_dept} : Company => ${key.emp_company}`
  );
}
console.log(`====================== Q3 ==================`);
array1.sort((s1, s2) => {
  return s1.emp_salary > s2.emp_salary;
});
for (const key of array1) {
  console.log(
    `Name => ${key.emp_name} : Salary => ${key.emp_salary} : Company => ${key.emp_company}`
  );
}
