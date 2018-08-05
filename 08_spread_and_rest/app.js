// ----------SPREAD:
// ---
const a = [1, 2, 3];
const b = [5, 6, 7];
const c = [...a, 4, ...b];
console.log(c); // [1, 2, 3, 4, 5, 6, 7]

const str = "hello";
const chars = [...str];
console.log(chars); // ["h", "e", "l", "l", "o"]

// ---
const deepDish = {
  pizzaName: 'Deep Dish',
  size: 'Medium',
  ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};

const shoppingList = ['Eggs', 'Flour', ...deepDish.ingredients]
console.log(shoppingList);

// ---
const inventors = ["Einstein", "Newton", "Galileo", "Tesla"];
const newInventors = ["Musk", "Job", "Gates"];

inventors.push(...newInventors);
console.log(inventors);


// ---
function sayHi(firstName, lastName){
  console.log(`Hi there, ${firstName} ${lastName}`);
}

const full_name = ["Jane", "Doe"];
sayHi(...full_name);


// -----------REST:

// --- Using rest in function arguments:
function convertCurrency(rate, ...amounts){
  return amounts.map(amount => amount * rate);
}

console.log(convertCurrency(2, 10, 20, 30, 50)); // [20, 40, 60, 100]

// --- Using rest in destructing

const runner = ['Jane', 'R01', 3, 4, 5, 2]
const [name, id, ...distances] = runner;

console.log(name);      // 'Jane'
console.log(id);        // 'R01'
console.log(distances); // [3, 4, 5, 2]
