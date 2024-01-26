let person = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true

}

function greet(message, msg) {

    console.log(`Hello ${message}, ${this.firstName}, ${msg}`);

}

 

// greet(`Good Morning`);

 

greet.call(person, 'Good Morning', 'How are you ?');



console.log(`========= apply() ============`);

function show(message, msg) {

    console.log(`Hello ${message}, ${this.firstName}, ${msg}`);

}

show.apply(person, ['Good Morning', 'How are you ?'] );

 

console.log(`========== bind() ===========`);

function display(message, msg) {

    console.log(`Hello ${message}, ${this.firstName}, ${msg}`);

}

const newFunction = display.bind(person);

newFunction('Good Morning', 'How are you ?');