let Professer = {
  department: "Computer Science",
  collegeName: "Sangmehswar College",
  City: "Solapur",
  Salary: 80000,
  Skills: ["C", "Cpp", "Core Java", "Javascript", "MicroServices"],
  degree: {
    Engineering: "CSC",
    PHD: "Adv programming",
  },
};
console.log(Professer);
console.log(`====Added array certificates=======`);
Professer.Certificates = [
  "Hacker Rank Participation",
  "Certificate in IFE course",
  "Certificate in ADV programming",
];
console.log(Professer);
console.log(`====Added Total experience=======`);
Professer.exp = "14 years";
console.log(Professer.exp);
console.log(`=====Updated Engineering value ======`);
Professer.degree.Engineering = "Computer Science";
console.log(Professer.degree.Engineering);
console.log(`====Added new Certificate at 2nd index of certificate array=====`);
Professer.Certificates.splice(2, 0, "Oracle Certificate");
console.log(Professer.Certificates);
console.log(`=====Last element of Certificate======`);
console.log(Professer.Certificates[Professer.Certificates.length - 1]);
console.log(`=====complete object======`);

for (const key in Professer) {
  const element = Professer[key];
  console.log(`Property==>${key} , value==>${element}`);
}
console.log(`=====Traversing array of certificates======`);
for (const i of Professer.Certificates) {
  console.log(i);
}
