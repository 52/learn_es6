const sym_1 = Symbol("Symbol Definition");
const sym_2 = Symbol("Symbol Definition");

sym_1 == sym_2 ; // false


// Use symbol when need the data to be unique
// For example:
// The keys of this object is unique

const classRoom = {
  [Symbol("Mark")]: {grade: 80, gender: "Male"},
  [Symbol("Jane")]: {grade: 90, gender: "Female"},
  [Symbol("Jane")]: {grade: 70, gender: "Female"}
}

const syms = Object.getOwnPropertySymbols(classRoom);

const students = syms.map(sym => classRoom[sym]);

console.log(students);
