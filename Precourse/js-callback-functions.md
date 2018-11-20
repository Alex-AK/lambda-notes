# JavaScript Callback Functions

### Normal Function

```
function combine(param1, param2) { // parameters
  const x = param1+param2;
  return x;
}
```

### Anonymous Function

```
const combineAnon = function(param1, param2) {
  const x = param1+param2;
  return x;
}

let result;
  // result = combine(1,2); // inputting arguments
  // console.log(result); // 3
```

### Assigning Functions to Variables

```
combineV2 = combine;
const log = console.log;

log("hello!");

function identity (x) {
  return x;
}
```

### Pass functions into functions.

- `identity(combineV2(1,2));`

  - identity = higher order function.
  - combineV2 = callback function

- higher order function - function that takes in a function as an argument
- callback function - function that you pass into another function

- use cases:
  - asyncrynous programming, make sure pages are loading as quickly as possible.
  - functional programming relies on callbacks
  - helps with dry programming

## Array methods forEach, map, reduce

- callback functions
- 1 parameter: a single element in an array

```
function logNegative(x){
  console.log(-x);
}

function logPlusTwo(x) {
  console.log(x + 2);
}

function log (x) {
  console.log (x);
}
```

### Higher Order Function

- 1 parameter: a callback function
- no return value - forEach loops is for simply executing logic on an array.

```
const numbers = [16, 22, 12, 14, 10]

numbers.forEach(logNegative); // built in loop on numbers
numbers.forEach(logPlusTwo);

function getNegative(x){
  return -x;
};

function roundThisArray (x) {
  return Math.round(x);
}
```

```
const numbers = [1.5, 2.2, 1.2, 1.4, 1.0];
  // higher order function
  // 1 parameter: a callback function
  // return a mapped array - map executes the logic and returns a new array.

numbers.map(roundThisArray);

// annonymous faction - used if you are only needing to run the function once.

numbers.map(function(x){
  return x + 10;
});
```

### Reduce

```
numbers.reduce (function(currentTotal, x) {
  return currentTotal \* 2;
});
```

### Recap

```
numbers.forEach();
numbers.map();

const words = ["yarg", "blarg", "blargity"];

// old way of interacting with each array item
  for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
  }

// new way of interacting with each array item
  words.forEach(function(item, i, words) {
    console.log(item);
      // console.log(i);
      // console.log(words[i]);
  });

for (let i = 0; i < words.length; i++) {
  console.log(words[i].toUpperCase());
}

words.map(function(item) {
  return item.toUpperCase();
});
```

### how to write higher order functions - reduce repeating

```
// higher order
  function giveFeedback (cb) {
    console.log("Hey, there's something I want to tell you.");
    cb();
  }

// callbacks below - pass into higher order to give different feedback.
  function compliment () {
    console.log("You have really nice teeth.");
  }

  function insult () {
    console.log("Your elbows are ugly");
  }

  function neutral () {
    console.log("You're okay I guess.")
  }
```

### Homework

- 8.1 reading code, determining higher order vs callback functions/
- 8.2 practicing .forEach and .map

### Quiz Challenge

- convert object values to an array and then use forEach to loop through and check against given age.

```
const ages = [12, 18, 19, 11, 22];
let driverCount = 0;

ages.forEach(function(item){
  if (item >= 16) {
    driverCount ++;
  };
});

console.log(driverCount);

const number [2, 8, 19, 11, 2];

const chars ["x", "y", "e", "s"];

chars.reduce (function(foundTreature, item) {
  return foundTreasure || (item === "x");
}, false);
```
