const arrayNum = [ 5, 1, 6, 8,  2, 3]; 

const sum = arrayNum.reduce( (runningTotal, value) => {

    return runningTotal * value;

});

console.log(sum);

class Student {

    // Data member or properties

    // Constructor

    constructor(id, name, city, marks ){

        this.id = id;

        this.name = name;

        this.city = city;

        this.marks = marks;

    }

    // Member Functions or methods

    getDetails(){

       console.log(`ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`);

    } 

}

 

const jenny = new Student(11, 'Jenny', 'Pune', 54);

const bill = new Student(43, 'Bill', 'Mumbai', 67);

const elon = new Student(32, 'Elon', 'Hyd', 83);

const stew = new Student(22, 'Stew', 'Pune', 74);

const ratan = new Student(65, 'Ratan', 'Mumbai', 90);

 

const arrayStudents = [jenny, bill, elon, ratan, stew];

 

const totalMarks = arrayStudents.reduce( (runningTotal, element) => {

    return runningTotal + element.marks;

}, 0);

console.log(totalMarks);


console.log(`====== WAP to find all the students whose id is odd value and find it's marks average========`);

const array = arrayStudents.filter( (element) => {

    return element.id%2!=0;

});

 

const sumOfMarks = array.reduce((rt, element) => {

    return rt+ element.marks;

},0) 

console.log(`Total marks is ${sumOfMarks}, and Number of Students with odd id is ${array.length}`);

console.log(`Average is: ${sumOfMarks/array.length}`);

 

array.forEach(element=> {

    console.log(element);

})