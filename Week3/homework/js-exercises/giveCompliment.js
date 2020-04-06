'use strict';

function giveCompliment(name){
    const compliments = ["great", "awesome", "perfect", "amazing", "super", "smart", "interesting", "beautiful", "nice", "good"];
    let randomOfComps = Math.floor(Math.random() * compliments.length);
    let compliment = compliments[randomOfComps];
    let msg = "you are " + compliment + " " + name + "!";
    return msg;
}

console.log(giveCompliment("yusuf"));
console.log(giveCompliment("yusuf"));
console.log(giveCompliment("yusuf"));