console.log(
  `================================== Q1 =================================`
);
class Vehicle {
  vehicleName;
  vehicleType;
  mileage;
  type2;
  companyName;
  constructor(vName, vType, m, ty, cName) {
    this.vehicleName = vName;
    this.vehicleType = vType;
    this.mileage = m;
    this.type2 = ty;
    this.companyName = cName;
  }
  vehicleDetails() {
    console.log(`==================================`);
    console.log(`Name of Vehicle:${this.vehicleName}`);
    console.log(`Type of vehicle:${this.vehicleType}`);
    console.log(`Vehicle mileage:${this.mileage}`);
    console.log(` Run on :${this.type2}`);
    console.log(`Name of company:${this.companyName}`);
  }
}
const RE = new Vehicle(
  "RoyalEnfield",
  "TwoWheeler",
  41.88,
  "petrol",
  "RoyalEnfieldLimited"
);
const safari = new Vehicle(
  "TATA_Safari",
  "FourWheeler",
  16.3,
  "petrol",
  "TATA"
);
const nexon = new Vehicle("TATA_Nexon", "FourWheeler", 24.08, "diesel", "TATA");
const tesla = new Vehicle(
  "Tesla_Model_Y",
  "FourWheeler",
  420,
  "Lithium_Ion_Battery",
  "TESLA"
);
const bmw = new Vehicle("BMW", "FourWheeler", 20, 35, "petrol", "BMW");
const array1 = [RE, safari, nexon, tesla, bmw];
for (const key in array1) {
  array1[key].vehicleDetails();
}
console.log(`    `);
console.log(
  `================================== Q2 =================================`
);

class College {
  name;
  Sid;
  rollno;
  collegeClass;
  constructor(name, Sid, rollno, collegeClass) {
    this.name = name;
    this.Sid = Sid;
    this.rollno = rollno;
    this.collegeClass = collegeClass;
  }
  display() {
    console.log(`Student Name : ${this.name}`);
    console.log(`Student Department : ${this.Sid}`);
    console.log(`Student Rollno : ${this.rollno}`);
    console.log(`Student class : ${this.collegeClass}`);
    console.log(`==================================`);
  }
}
const Lisa = new College("Lisa", "Computer Science", 18, "II Year");
const Tylor = new College("Tylor", "Arts", 35, "I Year");
const Meloni = new College("Meloni", "Political Science", 12, "III Year");
const Nirmala = new College("Nirmala", "Commerce", 38, "II Year");
const array2 = [Lisa, Tylor, Meloni, Nirmala];
for (const key in array2) {
  array2[key].display();
}
console.log(
  `================================== Q3 =================================`
);
console.log(`     `);
console.log(`=========== Traversing Object =============`);
function traverseObject(o1) {
  for (const key in o1) {
    console.log(`Key==>${key}  Value==>${o1[key]}`);
  }
  console.log(`****************************************`);
}
traverseObject(Lisa);
traverseObject(Tylor);
traverseObject(Meloni);
traverseObject(Nirmala);
