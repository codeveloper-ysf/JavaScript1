'use strict';

//this function calculates grades based on the American grading system and converts the score into a percentage.

function gradeCalculator(score){
    if(score >= 90 && score <= 100 ){
        // %d or %i are used for numbers to show the score values in the strings.
        console.log("You got a A (%d%)!",score);
    }else if(score >= 80 && score <= 89){
        console.log("You got a B (%i%)!",score);
    }else if(score >= 70 && score <= 79){
        console.log("You got a C (%d%)!",score);
    }else if(score >= 60 && score <= 69){
        console.log("You got a D (%i%)!",score);
    }else if(score >= 50 && score <= 59){
        console.log("You got a E (%d%)!",score);
    }else if(score >= 0 && score <= 49){
        console.log("You got a F (%i%)!",score);
    }
}

gradeCalculator(49);
gradeCalculator(94);
