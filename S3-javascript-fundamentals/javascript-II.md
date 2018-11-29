# JavaScript II

### References

- https://codepen.io/lambdaschool/pen/oQPWvN

### Important

- closure is often brought up in interview questions

## Closure

- functions operate as closures
- function body has access to variables outside of function

- describe what closure is
  - combination of a function and the lexical environment within which that function was declared
  - when a function is declared, a new scope is created, a functional scope
  - variables or functions declared within that function have the ability to reach outward for context, but never inward
  - this paradigm remains true, no maatter how deep you nest functions
- how closure is created

- when you have a function nested inside of a function, the inner function can access the outer variables, this is closure - it's a bridge
- closure will only maintain variables you need access to, ie, if you don't use it, it won't be stored in the closure. If we're not using it JS doesn't hold memory for it.
- "backbacks of information to be used for later"

```
  let me = 'Alex'
  function greetMe () {
    console.log('Hello ' + me);
  }

  greetMe(); // this function has access to outer variable scope
```

```
  const lastName = "Bond";
  function greet() {
    const firstName = 'James';
    console.log(`The name's ${lastName}, ${firstName} {lastName}`);
  }

  console.log(lastName); // logs "Bond"
  console.log(firstName); // does not work, cannot access function scope

  greet(); // logs "The name's Bond, James Bond"
```

```
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  let count = 0;
  return function() {
    return ++count;
  }
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
// each time the function is invoked, it recalls the stored memory and incriments it.
```

```
// More Closures
function myFunc() {
  console.log("IS this scope on?");
}
//myFunc();

// Closures
function sayName(name) {
  const nameHolder = name;
  console.log(`My name is ${nameHolder}`);
  debugger;

  function slang() {
    const slangSaying = "Yo, what up,";
    console.log(`${slangSaying} my name is ${nameHolder}`)
    debugger;

    function proper() {
      const properSaying = "Good day,"
      console.log(`We do not say: ${slangSaying} we say: ${properSaying} ${nameHolder}`);
      debugger;
    }

    proper();
  }// slang

  slang();
}// sayName

sayName("Josh");
```

## Callback Functions

- passing function to another function as a parameter
- functional programming paradigm
- functions are called first class citizens
  - store a function as a variable, then pass the reference to that function around like any other variable
- functions that can be passed as a parameter to another function
- a set of instructions to complete a task

```
  const functionFeeder = function(callback) {
    callback('Hello from the inside of Function Feeder');
  }

  functionFeeder(function(greeting) {
    console.log(greetings);
  });
```

```
  function sayHello(name) {
    console.log(`Hello, ${name}`);
  }

   function callSayHelloWithLars(callback) {
    const innerName = 'Lars';
    callback(innerName);
  }

  callSayHelloWithLars(sayHello);
```

```
  const elements = ['earth', 'wind', 'fire', 'water']

  for (let i=0; i < elements.length; i++) {
    console.log(elements[i]);
  }
```

```
// building our own callback functions

  const elements = ['earth', 'wind', 'fire', 'water']

  function showFirst(array, callback) {
    callback(array[0]);
  }

  function showLength(array, cb) {
    cb(array.length)
  };

  showFirst(elements, function(firstItem) {
    console.log(firstItem);
  });

  showLength(element, (lengthOfList) => {
    console.log(lengthOfList);
  });
```

```
function higherOrderFunction (a, b, cb) {
  <!-- console.log(`${a}, ${b}, ${c}`); -->
  return cb(a, b);
}
// function expression
const add = function (a, b) {
  console.log(a + b);
}
const subtract = function (a, b) {
  console.log(a - b);
}
const multiply = function (a, b) {
  console.log(a * b);
}

higherOrderFunction (2, 2, add);
higherOrderFunction (2, 2, subtract);
higherOrderFunction (2, 2, multiply);
```

## Advanced Array Methods - https://codepen.io/Alex-AK/pen/XyVmbG?editors=0012

- functional programming, immutability and making your data work your way
  - should never change original data set in functional paradigm
- arrays have many benefits and are built into the JS ecosystem as an object type
- easy to work with, most common methods: `.map();` `.filter();` `.reduce();`
- JSON as a standard focrces us to ensure our knowledge of array methods are strong
  - everything as sttring is double quoted
  - data is separated by commas with no trailing commas
  - array as objects
  - name/value pairs

```
  const data = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
  ];
```

- `.map();`

  - returns array of elements with index of element added
  - used for manipulating or reshaping data without altering original array
  - use case: good for converting numbers C to F, or case sensitivity

  ```
    const mappedCityStates = data.map((state) => {
      return {'city': state.city, 'state': state.state};
    }); // returns specified key and value into a new array
  ```

  ```
    // .map();
    const favThings = ['coffee', 'relaxation', 'meaningful conversartion', 'reading'];

    const newArray = favThing.map((thing, index) => {
    return `${index} ${thing}`;
    });

    console.log(newArray); // returns new array of elements with index added
    console.log(elements); // returns original array, unchanged
  ```

- `.filter();`

  - returns a new array of elements
  - calls back each element, index and returns each in turn
  - takes a callback that runs a 'truth' test. If true, returns element, else ignores
  - used for filtering out an array of elements by a specific condition

  ```
    const filterLargeStates = data.filter((state) => {
      return state.population >= 650000;
    }); // returns new array with key: value pairs that are true against condition
  ```

- `.forEach();`

  ```
    const favThings = ['coffee', 'relaxation', 'meaningful conversartion', 'reading'];

    favThings.forEach((thing, index) => {
    alert(thing, index);
    }); // .forEach takes two parameters, the item found at index and the index you want
  ```

  ```
  // for loop before .forEach
    for (let i = 0; i < cityData.length; i++) {
      someFunction();
    }

    function someFunction() {
      console.log("This was called!");
    }

  // forEach
    cityData.forEach(currentValue) {
      console.log(currentValue);
    }
  ```

- `.reduce();`

  - returns a new array of elements
  - takes a callback which is a reducer function
  - reducer function takes a previous value and a next value, known as accumulator and currentValue
  - manipulating or reshaping data into single value
  - not used as frequently

  ```
    const reduceStatePopulations = data.reduce((total, state) => {
      return total += state.population;
    }, 0); // returns total population in a number, 0 is the start value
  ```
