'use strict';

let array1 = ['string1', 1, {city:'deventer'}, true];
console.log('the length of array1 is: '+ array1.length);

let array2 = ['string1', 'string2', 1, 2, {city:'amsterdam'}, {city:'rotterdam'}, false];
console.log('the length of array2 is: '+ array2.length);

if(array1.length === array2.length){
    console.log('they are the same!');
}
else{
    console.log('two different sizes');
}