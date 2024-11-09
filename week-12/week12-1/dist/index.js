"use strict";
// Function that accepts a UserProfile type
const displayUserProfile = (user) => {
    console.log(`Name:${user.name},Age:${user.age},Email:${user.email}`);
};
// Function that accepts an object with optional 'name', 'age', and 'email' properties
function updateUser(UpdateProps) {
    // hit the database to update the user
    console.log(UpdateProps);
}
// Example usage of updateUser
updateUser({ name: "Alice" }); // Only updating the name
updateUser({ age: 30, email: "alice@example.com" }); // Updating age and email
const config = {
    endpoint: "<https://api.example.com>",
    apiKey: "abcdef123456",
};
const users = {
    abc123: { id: "abc123", name: "John Doe" },
    xyz789: { id: "xyz789", name: "Jane Doe" },
};
console.log(users["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }
// -----------------------------------
// const age = sumOfAge({ name: "gourish", age: 20 }, { name: "raju", age: 20 });
// console.log(age);
