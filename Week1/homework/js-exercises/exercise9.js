'use strict';
// we apply the modular arithmetic with %. the divider is 3. it will divide x until the remainder to be less than 3. when the remainder becomes less than 3, console will print it as a new value of x.
var x = 7;
if(x > 3){
    x = x % 3;      
    console.log(x);
}
// we apply the modular arithmetic with %. the divider is 4. it will divide y until the remainder to be less than 4. when the remainder becomes less than 4, console will print it as a new value of y.
var y = 21;
if(y > 4){
    y = y % 4;
    console.log(y);
}
// we apply the modular arithmetic with %. the divider is 3. it will divide z until the remainder to be less than 3. when the remainder becomes less than 3, console will print it as a new value of z.
var z = 13;
if(z > 3){
    z = z % 3;
    console.log(z);
}