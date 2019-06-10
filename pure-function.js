// pure function = given the same input returns the same output
//
// Math.random() not pure, never the same output

// given 2 returns 4 everytime, with no side effects
var doubleIt = function(val) {
  return val * 2
}

console.log(doubleIt(2))


// immutable, does not mutate state
// ...does not change the values of what it's given
