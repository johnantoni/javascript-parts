### Anonymous Functions

* Anonymous functions are functions that are dynamically declared at runtime.
* They are declared using the function operater instead of the function declaration.

**named function**

    function triple(x) {
      return x * 3
    }

**anonymous function**

    var triple = function(x) {
      return x * 3
    }
    
### First Class Functions

* they are stored in a variable or array
* or passed as an argument to a function
* or returned from a function
    
### Higher Order Functions

* help with composition allowing us to place little functions into bigger functions and so on.
* reducing complexity.
* functions that operate on other functions.
* to aid in readability and maintainability.

### what's the difference between let & var

* unlike let, var suffers from hoisting
* variables declared using var can be accessed in the whole scope
* we can access them before they're used

**example**

    function parent(data) {
      var i;

      // var is declared inside here but hoisted to the top of the parent function
      // so will wind up giving undefined as it will pollute itself
      // let would work better, as it's will remain inside our for loop
      for (var i = 0; i < data.length; i++) {
        console.log(data[i])
      }
    }

### Prototypal Inheritance

> A prototype is a working object instance. Objects inherit directly from other objects.

### Classsical Inheritance

> Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.

* Gorilla / Banana Problem: What you wanted was a banana, but what you got was a gorilla holding the banana, and the entire jungle
