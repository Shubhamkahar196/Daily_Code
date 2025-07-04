function greet (name: string) : string{
    return "hello" + name
}

function isEven(num: number) : boolean{
    if(num% 2==0){
        return true
    }else{
        return false
    }
}

console.log(isEven(5));  // Output: false
console.log(greet("shubham"));  // Output: "helloshubham"
