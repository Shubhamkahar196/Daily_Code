// Assignment -> 1
// Create a variable for each of the following: your favorite color,
//  your height in centimeters, and whether you like pizza. 
// Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let favCol = "Blue";
const heightInCen = 165;
var like = "I like pizza";

console.log(favCol);
console.log(heightInCen);
console.log(like);

//Assignment - 2
// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

function sum(a,b){
    return a+b;
}

console.log(sum(4,5));
// console.log(sum(p,q));  // give it error

//Assignment - 3
// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(e) {
    if(e> 18){
        return true;
    }else{
        return false;
    }
}

console.log(canVote(19));
console.log(canVote(17));

//Assignment - 4
// Write an if/else statement that checks if a number is even or odd.
//  If it's even, print "The number is even." Otherwise, print "The number is odd."

// let num = 10;
let num = 15;
if(num %2==0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}

//Assignment - 5
// Write a function called sum that finds the sum from 1 to a number

function sum(n){
    let total = 0;
    for(let i = 1; i<n; i++){
         total += i;
    }
    return total;
}

console.log(sum(5));
console.log(sum(10));

//Assignment - 6
// Write a function that takes a user as an input and greets them with their name and age

function greetUser(user) {
    console.log(`Hello, ${user.name} ! You are ${user.age} years old.`);
}

const user1 = {
    name: 'shubham', 
    age:30
}

greetUser(user1);

//Assignment - 7
//Write a function that takes a new object as input which has name , 
// age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greatUser(user){
    let greeting;
    switch(user.gender.toLowerCase()){
        case 'male' : greeting = 'Mr.';
        break;
        case 'female' : greeting = 'Mrs.';
        break;
        default : greeting = 'Others';
    }

    console.log(`Hi ${greeting} ${user.name}, your age is ${user.age}.`);
}

const user3 = { name: 'Shubham', age: 21, gender: 'Male' };
  greetUser(user3); 

  //Assignment - 8
//   Write a function that takes an array of numbers as input, 
//   and returns a new array with only even values. 
//   Read about filter in JS

function getEvenNumbers(numbers){
    const evenNumbers = [];
    for(let i = 0; i<numbers.length;i++){
        if(numbers[i] %2 == 0){
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);

// using filter method 

function getEvenNumber(number){
    return number.filter((number) => number % 2 === 0);
}

const number = [1, 2, 3, 4, 5, 6];
const evenNumber = getEvenNumber(number);
console.log(evenNumber);

//Assignment - 9
//Write a function that takes an array of users,
//  as inputs and returns only the users who are more than 18 years old

function getAdultUser(users) {
    return users.filter((users) => users.age> 18); 
}

const users = [
    { name: 'sk', age: 25 },
    { name: 'Jane', age: 17 },
    { name: 'Rahul', age: 30 },
    { name: 'coder', age: 15 },
    { name: 'XYZ', age: 22 }
  ];

  const getUser = getAdultUser(users);
  console.log(getUser);

  //Assignment - 10
//Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

function getAdultUsers(user) {
    return user.filter((user) => user.age > 18 && user.gender === 'Male');
}

const userss = [
    { name: 'sk', age: 25, gender: 'Male' },
    { name: 'Jane', age: 17, gender: 'Male'},
    { name: 'Rahul', age: 30, gender: 'Male' },
    { name: 'coder', age: 15 , gender: 'Female' },
    { name: 'XYZ', age: 22, gender: 'Female' }
  ];

  const getUsers = getAdultUsers(userss);
  console.log(getUsers);
  
  




  
  


