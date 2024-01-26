// A function takes function as an parameter and return function

function greet(callback){

    console.log(`Inside greet function...`);

    callback();

    return function() {

        console.log(`Returning one more function....`);

    }

}

const talk = function(){

    console.log(`Good Morning`);

}

const returnFunction = greet(talk);

returnFunction();

//greet(talk)();