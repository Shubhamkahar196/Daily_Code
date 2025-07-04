"use strict";
// defining interface
let user = {
    name: "Shubham",
    age: 21,
    address: {
        city: "Adiyar",
        country: "Jaunpur",
        pincode: 222203,
    },
};
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const ans = isLegal(user);
if (ans) {
    console.log("I am legal");
}
else {
    console.log("I am illegal");
}
