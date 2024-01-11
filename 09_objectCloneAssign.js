const bankSbi = {
  bankName: "StateBankOFIndia",
  branch: "Mohol",
  managerName: "abc xyz",
  staffNo: 20,
};
const bankLocation = {
  street: "solapur-pune road",
  city: "mohol",
  pin: 413213,
};
let bankSbi2 = Object.assign({}, bankSbi);
let branchLocation = Object.assign({}, bankLocation);
console.log(
  `====================== cloned object ============================`
);
console.log(bankSbi2);
console.log(`    `);
console.log(branchLocation);
const rateOfInterest = {
  homeLoanInterst: 8.4,
  personalLoanIterest: 9,
  dueInterst: 7,
};
console.log(`    `);
console.log(
  `====================== merging three object ==========================`
);
const sbiDetails = Object.assign({}, bankSbi, bankLocation);
console.log(sbiDetails);
console.log(`    `);
console.log(
  `====================== Traversing object ==========================`
);
for (const key in sbiDetails) {
  console.log(`key==>${key},values==>${sbiDetails[key]}`);
}
