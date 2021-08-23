"use strict";

const promptSync = require("prompt-sync");
const prompt = promptSync();

let a = prompt("Enter the value of a = ");
let b = prompt("Enter the value of b = ");
let c = prompt("Enter the value of c = ");

let x = a + b * c;
let y = a % b + c;
let z = c + a / b;
let w = a * b + c;

console.log("Maximum value = " + Math.max(x, y, z, w));
console.log("Minimum value = " + Math.min(x, y, z, w));