interface People{
    name: string,
    age: number,
    greet: ()=> string,

    // greet2(): string 
}


let person: People = {
    name: "SHubham",
    age: 21,
    greet: ()=>{
        return "hii"
    }
}


let greeting = person.greet();
console.log(greeting);

