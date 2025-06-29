// let x: number | string = 1;
 
// x = 'shubham'
// console.log(x)


// basic types
// first problem
function greet(firstName: string){
    console.log("hello world" + firstName);
}

greet("shubham");

// second problem : wrt a function that calculates the sum of two function
//note typescript : you can not catch logical error
function sum1(a:number,b: number){
    return a+b
}

let ans = sum1(1,2);
console.log(ans);


// third problem : Return true or false based on if a user is 18+

function isLegal(age:number){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

console.log(isLegal(29))

//fourth : Create a function that takes another function as input, and runs it after 1 second.


function delayedCall(anotherFn: () => void){
    setTimeout(anotherFn,1000);
}


function log(){
    console.log("hi there");
}
delayedCall(log)



const greet1 = (name: string) => `Hello, ${name}!`;
console.log(greet1)

// number , string , any
//  any specail type of function in typeScript
let x: any = 1;
x= true
x = "shubham"