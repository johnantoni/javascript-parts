// function greetPeople1(nameArray){
//   if(nameArray == undefined)
//     console.log("Please provide at least one name!")
//     throw new Error("Greeting unavailable!");
//   
//   var nameCount = nameArray.length;
//  
//   for(var n = 0; n < nameCount; n++) {
//     let name = nameArray[n];
//     setTimeout(function(){
//       console.log("Hello, "+name);
//     }, 200);
//   }
// }
//  
// greetPeople1('Gandalf', 'Frodo', 'Pippin', 'Merry', 'Samwise');


// to //


function greetPeople2(nameArray){
  if(nameArray === undefined) {
    console.log("Please provide at least one name!")
    throw new Error("Greeting unavailable!");
  }
  
  let nameCount = nameArray.length;
 
  for(let n = 0; n < nameCount; n++) {
    let name = nameArray[n];
    setTimeout(function(){
      console.log("Hello, "+name);
    }, 200);
  }
}
 
greetPeople2(['Gandalf', 'Frodo', 'Pippin', 'Merry', 'Samwise']);


// or with the spread operator //


function greetPeople3(...nameArray){
  if(nameArray === undefined) {
    console.log("Please provide at least one name!")
    throw new Error("Greeting unavailable!");
  }
  
  let nameCount = nameArray.length;
 
  for(let n = 0; n < nameCount; n++) {
    let name = nameArray[n];
    setTimeout(function(){
      console.log("Hello, "+name);
    }, 200);
  }
}
 
greetPeople3('Gandalf', 'Frodo', 'Pippin', 'Merry', 'Samwise');

