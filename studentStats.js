"use strict";

const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];

// your code goes here
function getRange(grades){
    let max = Math.max.apply(null, grades);
    let min = Math.min.apply(null, grades);
    return max-min;
}

function getMedian(grades){
    // Sort the array, return the number in the index of the center of the array (index must be an integer so I convert it into a integer by doing math.floor)
   let middleIndex = Math.floor(grades.length/2);
   let sorted = grades.slice(); //Copy the array so that i do not modify its order
   sorted.sort();
   return sorted[Number(middleIndex)];
}

function getSecondHalfRange(grades){
    //I want to split the array in half and run the getRange function on it
    let middleIndex = grades.length/2;
    let secondHalf = grades.slice(middleIndex, grades.length);
    return getRange(secondHalf);
}

function formatStats(range, median, secondHalfRange){
    return `Stats\n\tRange: ${range}\n\tMedian: ${median}\n\tHalfRange: ${secondHalfRange}`; //String formatting is very clean
}

let range = getRange(grades);
let median = getMedian(grades);
let secondHalfRange = getSecondHalfRange(grades);
let stats = formatStats(range, median, secondHalfRange);
console.log(stats);