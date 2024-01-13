function Bank(bName, location, iCode, bCode) {
  this.bankName = bName;
  this.location = location;
  this.ifscCode = iCode;
  this.branchCode = bCode;
  this.display = function () {
    console.log(
      `BankName : ${this.bankName} || Bank Location : ${this.location}`
    );
    console.log(
      `IFSC Code : ${this.ifscCode} || Branch Code : ${this.branchCode}`
    );
  };
}
const sbiBank = new Bank("SBI", "Mohol", "SBIN0000446", "000446");
const mahBank = new Bank(
  "Maharashtra Bank",
  "Pandharpur",
  "MAHN0000348",
  "000346"
);
const axisBank = new Bank("Axis Bank", "Akaluj", "AXIN0000567", "000567");

sbiBank.display();
mahBank.display();
axisBank.display();
console.log(`   `);
console.log(`========== Added common property to all object =========`);
console.log(`---------------------------------------------------------`);
Bank.prototype.openTime = "9 AM IST ";
Bank.prototype.closeTime = "6 PM IST ";
console.log(
  `Open time of SBI Bank : ${sbiBank.openTime} || Close Time : ${sbiBank.closeTime}`
);
console.log(
  `Open time of Maharshtra Bank : ${mahBank.openTime} || Close Time : ${mahBank.closeTime}`
);
console.log(
  `Open time of Axis Bank : ${sbiBank.openTime} || Close Time : ${axisBank.closeTime}`
);
