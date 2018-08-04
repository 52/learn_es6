//-- Destructing Array
const details = ["Jane", "Doe", 32, "Web Developer"];

const [firstName, lastName, age, job] = details;

console.log(firstName); // "Jane"
console.log(lastName);  // "Doe"
console.log(age);       // 32
console.log(job);       // "Web Developer"
// ----


//-- Destructing array with rest
const team = ["Captain", "Vice-Captain", "Player 1", "Player 2", "Player 3"];
const [captain, viceCaptain, ...players] = team;

console.log(captain);     // "Captain"
console.log(viceCaptain); // "Vice-Captain"
console.log(players);     // ["Player 1", "Player 2", "Player 3"]
// ----


//-- Use destructing to swapping variables
let a = 1;
let b = 9;

console.log(a, b); // 1, 9
[a, b] = [b, a];
console.log(a, b); // 9, 1
// ----
