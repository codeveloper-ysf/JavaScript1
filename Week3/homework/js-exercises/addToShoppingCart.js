'use strict';

const groceryItems = ['orange', 'apple'];

function addToShoppingCart(groceryItem) {
    groceryItems.push(groceryItem);
    if (groceryItems.length > 3) {
        groceryItems.shift();
    }
    const msg = `you bought ${groceryItem}!`;
    return msg;
}

console.log(addToShoppingCart('banana'));
console.log(addToShoppingCart('lemon'));
console.log(addToShoppingCart('melon'));