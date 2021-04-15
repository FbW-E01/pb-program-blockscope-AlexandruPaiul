// # On the block

// #### 1. Updater
// * Depending on the value of a variable (determiner), assign a value to `x`. 
//     - If determiner is less than 0, `x`'s value should be "Less than 0"
//     - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".

const determiner = -1;
let x;
if (determiner<0) {
   
    x = "Less than 0"
    console.log(x);
} else {
    x = "Greater or equal to 0"
    console.log(x);
}

// #### 2. New Variables 
// * Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
//     - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
//     - If determiner is less than 0, `updater`'s value should be "Less than 0".
let updater;
if (determiner>=0){
    updater = "Greater or equal to 0";
    const message = "Positive Integer";
    console.log(updater);
    console.log(message);

} else {
    updater = "Less than 0"
    console.log(updater);
}


// * **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
// ReferenceError: message is not defined


// #### 3. Ternary v.s. If statement 
// * When do you use a ternary v.s. an if statement? Give an example.

// a ternary usually we use when we have a choice to make from two situations and if statement two and more. 
// i.e. ternary
 x = 1;
(x>0) ? console.log("Greater or equal to 0") : console.log("Less than 0");
