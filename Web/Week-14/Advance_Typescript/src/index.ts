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

// ReadOnly => When you have a configuration object that should not be altered after initialization, making it Readonly ensures 
// its properties cannot be changed.
interface Config {
//   readonly endpoint: string;
   endpoint: string;
//   readonly apiKey: string;
     apiKey: string;
}

// this is the equivalent to   "readonly endpoint: string;"
const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.


// Record and map
// Record let’s you give a cleaner type to objects
// interface User {
//   id: string;
//   name: string;
// }

// type Users = { [key: string]: User };

// const users: Users = {
//   'abc123': {
//      id: 'abc123', 
//      name: 'John Doe' 
//     },
//   'xyz789': {
//      id: 'xyz789',
//       name: 'Jane Doe' },
// };

interface User5 {
  id: string;
  name: string;
}

type Users6 = Record<string, User5>;

const users: Users6 = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

// Map  maps gives you an even fancier way to deal with objects


interface User9 {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User9>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }