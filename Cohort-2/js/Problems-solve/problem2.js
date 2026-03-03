const teas = {
    name: "Lemon tea",
    type: "Green ",
    caffine: "low"
}

// access and print the name and type properties of the tea object.
console.log(teas.name);
console.log(teas["type"]);

// add a new property origin to the tea object
teas.origin = "china";

// change the caffine level of the tea object to "medium"

teas.caffine = "Medium"

// remove the type propety from the tea object
delete teas.type
// check if the tea object has property origin
console.log("origin" in teas);

// use a for..in loop 
for(let key in teas){
    console.log(key + ": " + teas[key]);
}

// create a nested object repersenting different types of teas and other
const myteas = {
    greenTea:{
        name: "Green Tea"
    },
    blackTea: {
        name: "Black tea"
    }
}

// create a copy of the tea object

const teaCopy = {...myteas}   //shallow copy-> 
const anotherCopy = teas //reference 
console.log(teaCopy);