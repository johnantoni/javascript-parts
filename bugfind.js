function greetPeople(...nameArray){
  var n;
  if(nameArray === undefined) {
    console.log("Please provide at least one name!")
    throw new Error("Greeting unavailable!");
  }
  
  var nameCount = nameArray.length;
 
  for(n = 0; n < nameCount; n++) {
    let name = nameArray[n];
    setTimeout(function(){
      console.log("Hello, "+name);
    }, 200);
  }
}
 
greetPeople('Gandalf', 'Frodo', 'Pippin', 'Merry', 'Samwise');

