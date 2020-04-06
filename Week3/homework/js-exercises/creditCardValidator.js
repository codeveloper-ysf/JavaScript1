'use strict'

function calculateDigits(cardNumber) {
    if (cardNumber.length == 16 && !isNaN(cardNumber))
        return true;
    else {
        return false;
    }
}

function checkIfSame(cardNumber) {
    let cardNumArray = Array.from(String(cardNumber));
    if (!cardNumArray.every(number => number === cardNumArray[0])) {
        return true;
    }
    else {
        return false;
    }
}

function lastDigitCheck(cardNumber) {
    if (cardNumber[15] % 2 == 0)
        return true;
    else {
        return false;
    }
}

function sumOfDigits(cardNumber) {
    let cardNumArray = Array.from(String(cardNumber));
    let sum = 0;
    for (let i = 0; i < cardNumArray.length; i++) {
        sum += Number(cardNumArray[i])
    }
    if (sum > 16) {
        return true;
    }
    else {
        return false;
    }
}

function cardCheck(cardNumber) {
    if (calculateDigits(cardNumber) && checkIfSame(cardNumber) && lastDigitCheck(cardNumber) && sumOfDigits(cardNumber))
        console.log(`${cardNumber} is a valid card number.`);
    else
        console.log(`${cardNumber} is NOT a valid card number.`);
}

cardCheck(9999777788880000);
cardCheck(6666666666661666);
cardCheck('a92332119c011112');
cardCheck(4444444444444444);
cardCheck(1111111111111110);
cardCheck(6666666666666661);