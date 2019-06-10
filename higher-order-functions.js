var animals = [
  { name: 'peter', species: 'rabbit'},
  { name: 'james', species: 'dog'}
]

// function inside a value
var isDog = function(animal) {
  return animal.species === 'dog'
}

var dog = animals.filter(isDog) // ['dog']

console.log(dog)

// a function stored in a variable

const birthYears = [11,22,33]

const ages = birthYears.map(year => year !== 11)

console.log(ages)


