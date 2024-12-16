

// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
//     const json = await response.json();
//     console.log(json.length);
// }

// main();


const axios = require("axios");

async function main(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/")

    console.log(response.data.length);
}

main();