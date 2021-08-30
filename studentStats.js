"use strict";
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]

// your code goes here
function getRange(grades){
    let max = Math.max.apply(null, grades);
    let min = Math.min.apply(null, grades);
    return max-min;
}

let range = getRange(grades);