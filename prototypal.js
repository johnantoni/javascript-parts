var human = {
  species: 'human',
  create: function(values) {
    var instance = Object.create(this);
    Object.keys(values).forEach(function(key) {
    })
    return instance;;
  },
  saySpecies: function() {
    console.log(this.species)
  }
}

var musician = Object.create({instrument: "cello"});
musician.playInstrument = function() {
  console.log(this.instrument)
}

musician.playInstrument();


