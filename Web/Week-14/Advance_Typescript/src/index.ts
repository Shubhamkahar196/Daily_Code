interface User {
    id:string;
    name:string;
    age: number;
    email: string;
    password: string;
};

// interface UpdateProps{
//     name:string;
//      age:number;
//       password:string;
// }

// pick => allow set of properties 
type UpdateProps = Pick<User, 'name'| 'age'| 'email'>

function updateUser(updateProps: UpdateProps){

    // hit the database to update the user
}


// Partial => making all properties optional "?"