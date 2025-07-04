"use strict";
// defining class and taking People 
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.number = "123322";
    }
}
//object of manager class
let user1 = new Manager("sk", 21);
console.log(user1.name);
console.log(user1.age);
