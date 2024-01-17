class MotherCat {
  constructor(eyeColor, totalLegs) {
    this.eyeColor = eyeColor;
    this.totalLegs = totalLegs;
  }
  meowing() {
    console.log(`Cat is meowing`);
    console.log(
      `Eye color: ${this.eyeColor} and Total legs is: ${this.totalLegs}`
    );
  }
}

class BabyCat extends MotherCat {
  constructor(bodyColor, name, colorOfEye, legs) {
    super(colorOfEye, legs);
    this.bodyColor = bodyColor;
    this.name = name;
  }
}
const kitty = new BabyCat("Brown", "kitty", "Grey", 4);
console.log(kitty);
kitty.meowing();
//  meowing(){
//   // Method Overriding which Runtime Polymorphism
//   console.log(`Baby Cat is meowing and asking for milk`);
//   console.log(
//     `Eye color: ${this.eyeColor} and Total legs is: ${this.totalLegs}`
//   );
//   console.log(`Body color: ${this.bodyColor} and name is: ${this.name}`);
// }
