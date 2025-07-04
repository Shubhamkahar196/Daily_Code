// defining interface

interface Address {
        
    city: string;
    country: string;
    pincode: number;
  
}

interface User {
  name: String;
  age: number;
//   address?: {    // making it optional "?""
//     city?: string;
//     country?: string;
//     pincode: number;
//   };

address: Address
}


interface Office{
   address: Address   // interface uses interface
}

let user: User = {
  name: "Shubham",
  age: 21,
  address:  {
    city: "Adiyar",
    country: "Jaunpur",
    pincode: 222203,
  },
};

let user2: User = {
    name: "skk",
    age: 22,
    
    
}

function isLegal(user: User): boolean{
    if(user.age>= 18){
        return true
    }else{
        return false
    }
}

const ans = isLegal(user);
if(ans){
    console.log("I am legal");
}else{
    console.log("I am illegal")
}