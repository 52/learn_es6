const firstName = "Jane";
const lastName = "Doe";
const age = 32;

const person = {
  firstName,
  lastName,
  age,
  sayHi(){
    console.log(`Hi, there. My name is ${this.firstName}.`);
  }
}

// -------

const keys   = ['pocket', 'sleeves'];
const values = ['red', 'white'];

const shirt = {
  [`${keys.shift()}Color`]: values.shift(),
  [`${keys.shift()}Color`]: values.shift(),
}

// => {pocketColor: 'red', sleevesColor: 'white'}
