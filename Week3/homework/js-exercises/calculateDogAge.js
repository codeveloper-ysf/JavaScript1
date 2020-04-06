'use strict';

function calculateDogAge(dogAge){
    let rate = 7;
    let conversion = dogAge * rate;
    let msg =  `your doggie is  ${conversion} years old in dog years!`;
    return msg;
}

console.log(calculateDogAge(10));
console.log(calculateDogAge(20));
console.log(calculateDogAge(30));