//date

const now = new Date(); //current date and time
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.toISOString());  // output the data in ISO format

//Maps
const map = new Map();
map.set('name','Shubham');
map.set('age',21);
console.log(map.get('name'));
console.log(map.get('age'));
