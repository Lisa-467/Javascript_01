const arrayNums = [20, 3, 4, 56, 90, 400, 49];
const cloneArr = arrayNums;
console.log(`=================== Q1 ====================`);
console.log(`Original array....`);
console.log(arrayNums);
console.log(`Cloned array....`);
console.log(cloneArr);
cloneArr.push(55, 66);

console.log(`Updated value in cloned array....`);
console.log(cloneArr);
console.log(`Original array....`);
console.log(arrayNums);

console.log(`=================== Q2 ====================`);
console.log(`Clone using spread Operator`);
const cloneB = [...arrayNums];
cloneB.splice(4, 0, 10, 25);
console.log(`Original array`);
console.log(arrayNums);
console.log(`Cloned array`);
console.log(cloneB);
console.log(`=================== Q3 ====================`);
const arrayEven = [2, 30, 14, 8];
console.log(`Even number array`);
console.log(arrayEven);
console.log(`Merging even array in original array using spread Operator`);
const newArr = [...arrayNums, ...arrayEven];
console.log(newArr);
console.log(`=================== Q4 ====================`);
const employee_info = {
  emp_id: 27,
  emp_name: "John Doe",
  salary: {
    july_month: "40,000INR",
    aug_month: "50,000INR",
    jun_month: "65,000INR",
  },
  address: {
    locality: {
      colony: "OM Vrindavan Society",
      street: "Kanch Pokali,431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800-4567 32", "+91 9096 5678 77"],
};
console.log(`Created Object `);
console.log(`=================== Q5 ====================`);
console.log(`Given object is `);
console.log(employee_info);
console.log(`Address is ....     `);
console.log(employee_info.address.locality);
console.log(employee_info.address);
console.log(`Mobile numbers...`);
console.log(employee_info.mobiles);
console.log(`=================== Q6 ====================`);
console.log(`Object clone by using JSON`);
const newObject = JSON.parse(JSON.stringify(employee_info));
newObject.salary.july_month = "80,000INR";
newObject.address.country = "United Kingdom";
console.log(`Updated values for cloned and original object`);
console.log(`For original object`);
console.log(`July month salary => ${employee_info.salary.july_month}`);
console.log(`Country => ${employee_info.address.country}`);
console.log(`For cloned object`);
console.log(`July month salary => ${newObject.salary.july_month}`);
console.log(`Country => ${newObject.address.country}`);
