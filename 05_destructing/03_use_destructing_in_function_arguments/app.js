//-- Function without optional hash
function calc_1(total, tax = .15, tip = .13){
  return total + total * tax + total * tip;
}

console.log(calc_1(100)); // default tax, tip
console.log(calc_1(100, undefined, .15)); // default tax, optional tip
// ----


//-- Function with optional hash
function calc_2(total, {tax = .15, tip = .13} = {}) {
  return total + total * tax + total * tip;
}

console.log(calc_2(100));
console.log(calc_2(100, {tip: .15}));
// ----


//-- ATTENTION: must provide default value for optional hash
function calc_3(total, {tax = .15, tip = .13}) {
  return total + total * tax + total * tip;
}

calc_3(100);
// TypeError: Cannot destructure property `tax` of 'undefined' or 'null'.
