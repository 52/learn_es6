const array = ["a", "b", "c"];

//-- for..of
for(const item of array){
  console.log(item); // => a, b, c
}

for(const [i, item] of array.entries()){
  console.log(i, item); // => 0, a | 1, b | 2, c
}
// NOTE: `object.entries()` only available from ES2017

// Can skip a step (`continue`) or stop the loop in the middle (`break`)
for(const item of array){
  if(item == "b")
    continue;
  console.log(item); // => a, c
}
// ----


//-- for..in
for(const i in array){
  console.log(i); // => 0, 1, 2
}

// The problem with for..in is where there is monkey patching
array.monkey = "PATCHED!";
for(const i in array){
  console.log(i); // => 0, 1, 2, monkey
}
// ----


//-- forEach
array.forEach(i => console.log(i));
// => a, b, c
// The limition of forEach is that you can't skip a step or stop the loop in the middle
// ----

