const jwt = require('jsonwebtoken');

//decode, verify, generate

const value = {
    name: 'shubham',
    accountNumber: 123123123
}

//sign not generate
// const token = jwt.sign(value, "secret");
// console.log(token);

const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2h1YmhhbSIsImFjY291bnROdW1iZXIiOjEyMzEyMzEyMywiaWF0IjoxNzM1ODI2NDA1fQ.blJnvRjjNbZt8r9wq9iz4p6qFqtFbXIDyxvkw19e00o","secret");
console.log(verifiedValue);

