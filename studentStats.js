"use strict";
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]

// your code goes here
function getRange(grades){
    let max = Math.max.apply(null, grades);
    let min = Math.min.apply(null, grades);
    return max-min;
}

function getMedian(grades){
    // Sort the array, return the number in the index of the center of the array (index must be an integer so I convert it into a number)
   let middleIndex = grades.length/2;
   let sorted = grades.slice(); //Copy the array so that i do not modify its order
   sorted.sort()
   return sorted[Number(middleIndex)];
}

let range = getRange(grades);
let median = getMedian(grades);