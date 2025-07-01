function greet2(user: {
    name: string,
    age: number,
    address: {
        streetName: string,
        country: string,
    }
}){
    console.log('hello' + " " + user.address.streetName)
}

// one way

// greet2({
//     name: "Shubham",
//     age: 21
// });

// second way

let user = {
    name:"shubham",
    age: 21,
    address:{
        streetName: 'adiyar',
        country: "India"
    }
}

greet2(user)


// understanding interface
interface UserType {
    firstName: string,
    age: number
}

let user1: UserType = {
    firstName: "shubham",
    age: 21
}

// understanding Types

type User2 = {
	firstName: string;
	lastName: string;
	age: number
}