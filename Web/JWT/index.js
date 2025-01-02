const jwt = require('jsonwebtoken');

//decode, verify, generate

const value = {
    name: 'shubham',
    accountNumber: 123123123
}

//jwt
const token = jwt.generate(value, "secret");
console.log(token);

