"use strict";
function sumAll(arr) {
  if(arr[0] === arr[1]) return arr[0];
  if(arr[1] > arr[0]) return sumAll([arr[0], arr[1]-1]) + arr[1]
  else return sumAll([arr[1], arr[0]-1]) + arr[0]
}

sumAll([1, 4]);
