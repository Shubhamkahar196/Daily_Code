"use strict";
// let x: number | string = 1;
// x = 'shubham'
// console.log(x)
// basic types
// first problem
function greet(firstName) {
    console.log("hello world" + firstName);
}
greet("shubham");
// second problem : wrt a function that calculates the sum of two function
//note typescript : you can not catch logical error
function sum1(a, b) {
    return a + b;
}
let ans = sum1(1, 2);
console.log(ans);
// third problem : Return true or false based on if a user is 18+
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(29));
// number , string , any
//  any specail type of function in typeScript
let x = 1;
x = true;
x = "shubham";
