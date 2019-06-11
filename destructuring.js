const car = { wheels: 4, opentop: true }

// destructuring
//
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

let { wheels, opentop } = car;

console.log('wheels   :', wheels)
console.log('open-top :', opentop)
