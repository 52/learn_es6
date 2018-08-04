const people = document.querySelectorAll(".people li");

NodeList.prototype.isPrototypeOf(people); // true

people_array = Array.from(people);

Array.prototype.isPrototypeOf(people_array); // true

const names = Array.from(people, person => person.textContent);

console.log(names); // ["Jane", "John", "Joan"]

Array.prototype.isPrototypeOf(names); // true

