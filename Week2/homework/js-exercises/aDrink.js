'use strict';

let drinkTray = [];

const drinkTypes = [" cola", " lemonade", " water"];

let index = drinkTypes.length;
while(index < 5){
    drinkTray.push(drinkTypes);
    index++;
}
console.log("Hey guys, I brought a " + drinkTray);