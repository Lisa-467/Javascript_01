const arrayNum = [ 5, 1, 6, 8, 7];

const arrayTransformed = arrayNum.map( (currentValue) => {

    return currentValue * currentValue;

} )

 

console.log(arrayTransformed);

 

const arrayTrans = arrayNum.map( (currentValue) => {

    return currentValue + 100;

} )

console.log(arrayTrans);

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

const jenny = new Student(11, 'Jenny', 'Pune', 67);

const bill = new Student(43, 'Bill', 'Mumbai', 96);

const elon = new Student(32, 'Elon', 'Hyd', 83);

const stew = new Student(22, 'Stew', 'Pune', 75);

const ratan = new Student(65, 'Ratan', 'Mumbai', 90);

 

const arrayStudents = [jenny, bill, elon, ratan, stew];

console.log(`========== WAP to get students of even id============`);

const arrayOfNames = arrayStudents.map( (element ) => {

     return element.name;

});

console.log(arrayOfNames);


 


