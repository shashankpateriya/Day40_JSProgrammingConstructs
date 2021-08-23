"use strict";

const promptSync = require("prompt-sync")
const prompt = promptSync(); 
let day = prompt("Enter the day: ");
let month = prompt("Enter the month: ");
if (( (month <= 6 && day <= 20) && ((month >= 3 && day <= 20) && (day<31)) ))
        console.log(true);
else
    console.log(false);
