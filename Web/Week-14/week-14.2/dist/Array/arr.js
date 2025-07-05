"use strict";
//  problem 1
function getMax(nums) {
    let maxValue = -10000000;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
        }
    }
    return maxValue;
}
getMax([1, 2, 4]);
function filterUser(users8) {
    return users8.filter(x => x.age >= 18);
}
console.log(filterUser([{
        firstName: "shubham",
        lastName: "kahar",
        age: 21
    }, {
        firstName: "aaru",
        lastName: "kafr",
        age: 23
    }]));
