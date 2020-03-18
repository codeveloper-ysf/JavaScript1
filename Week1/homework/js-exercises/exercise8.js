'use strict';
var x = 'dog';
var y = 'cat';

var fruit1 = {
    name : 'banana', 
    price: 5
};
var fruit2 = {
   name: 'apple',
   price: 10
};

console.log(typeof(x));
console.log(typeof(fruit1));

if(typeof x ===  typeof y){

    console.log('same type');
}else{
    console.log('not the same');
}

if(typeof x ===  typeof fruit1){
    console.log('same type');
}else{
    console.log('not the same');
}

if(typeof x ===  typeof fruit2){
    console.log('same type');
}else{
    console.log('not the same');
}

if(typeof y ===  typeof fruit1){
    console.log('same type');
}else{
    console.log('not the same');
}

if(typeof y ===  typeof fruit2){
    console.log('same type');
}else{
    console.log('not the same');
}

if(typeof fruit1 ===  typeof fruit2){
    console.log('same type');
}else{
    console.log('not the same');
}
