// interface vs types
//create two types called user and admin
// create a function that takes either a user or an admin as in input and return a string saying "welvome, [name]";


interface Admin{
    name:string;
    permission: string;
}

interface User6 {
    name: string,
    age: number;
}

type User6OrAdmin = User6 | Admin;

function greet4(user: User6OrAdmin){
    console.log(user.name)
}

