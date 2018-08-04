const jane = {
  first: "Jane",
  last: "Doe",
  age: 36,
  contact: {
    social: {
      twitter: "@jane",
      facebook: "fb.com/jane"
    }
  }
}

//-- Destructing object
const {first, last} = jane;

console.log(first); // "Jane"
console.log(last);  // "Doe"
// ----


//-- Destructing multi-level nested object
const {twitter, facebook} = jane.contact.social;

console.log(twitter); // "@jane"
console.log(facebook); // "fb.com/jane"
// ----


//-- Rename deconstructed variable
const {twitter: t, facebook: fb} = jane.contact.social;

console.log(t); // "@jane"
console.log(fb); // "fb.com/jane"
// ----


//-- Destructing with default value
const settings = {width: 800, fontSize: 18};

const {width = 600, height = 600, color = "white", fontSize = 12} = settings;

console.log(width);    // 800
console.log(height);   // 600
console.log(color);    // "white"
console.log(fontSize); // 18
// ----
