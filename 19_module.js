export const designation = "UI Developer";

 

export const PI = 3.14;

 

export const sumArray = function(array){

     const result = array.reduce( (runningTotal, element) => {

        return runningTotal+element;

    }, 0);

    return result;

}