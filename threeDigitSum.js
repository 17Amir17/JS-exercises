'use strict';

const num = 123;
let sum = 0;
// your code goes here
let dig1 = Math.floor(num / 100);
let dig2 = Math.floor(num % 100 / 10);
let dig3 = Math.floor(num % 100 % 10);
sum = dig1 + dig2 + dig3;
console.log(sum);