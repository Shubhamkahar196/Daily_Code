"use strict";
;
function updateUser(updateProps) {
    // hit the database to update the user
}
// this is the equivalent to   "readonly endpoint: string;"
const config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
const users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
// Initialize an empty Map
const usersMap = new Map();
// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
