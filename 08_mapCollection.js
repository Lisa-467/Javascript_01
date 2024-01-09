const map1 = new Map();
map1.set("Height", "6ft");
map1.set("Weight", 78);
map1.set("Name", "Dipti");
map1.set("City", "Solapur");
map1.set("Married", "No");
console.log(map1);
console.log(map1.get("Name")); //to get value of aasociated key
console.log(`Adding duplicate key`);
map1.set("Name", "Dipti Shelavane"); //if we add same key with diff value it will overwrite on old one
console.log(map1);
console.log(`adding diff key with same value`); //if we add diff key with same value it will not affect it will add
map1.set("studentName", "Dipti Shelavane");
console.table(map1);
console.log(`map size is ${map1.size}`);
map1.delete("Married");
console.table(map1);
console.log(`is key available :${map1.has("Name")}`);
console.log(map1.keys());
console.log(map1.values());
console.log(`===map traversing==`);
const keyStore = map1.keys();
for (const ikey of keyStore) {
  console.log(`${ikey} ==> ${map1.get(ikey)}`);
}
