# JavaScript Basics

- Programming language vs markup language

### Code Resolution

- Every line of code is read
- Every line of code resolves to something
- The last line of code that runs appears in green (repl.it specific)

### Programming Language

- JavaScript, Java, Python, C, etc
- More advanced than markup languages
- JavaScript is designed for web, but is flexible enough to program any software
- JavaScript is not an object oriented program language

### Object creation & storing data

- `const x = 5;`
- `const y = 4;`

### Variable Keywords

- Default to using const for defining variables
  - `const age = 66;`
    - `age = 67;` // error, can’t assign new variable to const
- Use for variables that are not constant
  - `let age = 66;`
  - `age = 67;`
- let vs var
  - will be in next lecture, important interaction with scope
- let vs const
  - let allows change of variable
  - const does not allow change of variable

### Primitive Types

- 5; // number
- “this is a string”; // string
- true; // boolean
- false; // boolean
- undefined; // undefined - represents missing data, computers way to communicate missing data
- null; // null - represents missing data, developers way to communicate missing data

### Declaring Variable - variable declaration statement

- const age = 66;
  - const // keyword
  - age // name of variable
  - = // assigning variables
  - 66 // value

### Operators

- `+-`
- `*/` // multiplication and division
- `++`, `--`
- `%` // modulo will divide the two numbers and return the remainder
- `=` // defining a variable
- `==`, `===` //
- `!=`, `!==` //
- `>`, `<`
- `!false`, `!true` // switches
- `! (x < 5)` //

- `21 % 5 = 1;`
- `21 % 6 = 3;`
- `21 % 7 = 0;`

### Properties

```
const x = 8;
const name = “Alex”;
variableName.propertyName;
const school = 'Lambda';
school.length; //6
```

### Methods (prebuilt functions for types)

```
const num = 42;
num.toString(); //"42"

name.length; // 4
x.length // undefined, because it’s a number, not a string
name.toUpperCase(); // ALEX
const nameUpper = name.toUpperCase(); // ALEX

x.toString(); // “8”
console.log (“Hello, friends."); //

z = 3;
z++;
console.log (“z:”, z); // z: 4
```

### Global Operators

- `firstName;` // undefined, variable never defined
- // argument: 1.4
- // parameter: one number entered, some functions require parameters, others do not.
- `Math.round(1.4);` //
- `Math.floor (1.9);` // 1
- `Math.ceil (1.1);` // 2
- `Math.random();` // random number
- `Math.pow(3,2);` // 3 \* 3 = 9
- `Math.pow(3,3);` // 3 _ 3 _ 3 = 27

### Control Flow - clothing recommendation app

```
const raining = true;
   //conditional statement

if (raining) {
   console.log (“Wear a raincoat”);
} else {
   console.log (“Enjoy the sun!"
   }
```

## Functions & passing in arguments

### Anatomy of a Function

`function myFunc() {}`

- A function will start with the function keyword, this tells whatever is running your program that what follows is a function and to treat it as such. After that comes the name of the function, we like to give functions names that describe what they do. Then comes an open and a close parentheses. And finally, open and close brackets. In between these brackets is where all of our function code will go.

  ```
  function logsHello() {
      console.log('hello');
  }

  logsHello();
  ```

- In this example we declare a function logsHello and we set it up to console.log 'hello'. We can then see in order to run this function, we need to write the name and parentheses. This is the syntax to run a function. A function always needs parentheses to run.

### Arguments

- Now that we can run a basic function, we are going to start passing it arguments.

  ```
  function logsHello(name) {
      console.log('Hello, ' + name);
  }

  logsHello('Dan');
  ```

- If we add a variable to the parentheses when we declare the function we can use this variable within our function. We initiate the value of this variable by passing it into the function when we call it. So in this case name = 'Dan'. We can pass other variables into this as well:

  ```
  function logsHello(name) {
      console.log( `Hello, ${name}`);
  }

  const myName = 'Dan';
  logsHello(myName);
  ```

- We can add multiple arguments by placing a comma in between them:

  ```
  function addsTwoNumbers(a, b) {
    const sum = a + b;
    return sum;
  }

  addsTwoNumbers(1, 5); // 6
  ```

### Return statement and Scope

- In the last example we introduced the return statement. We will not console.log everything that comes out of a function. Most likely we will want to return something. In this case it is the sum of the two numbers. Think of the return statement as the only way for data to escape a function. Nothing other than what is returned can be accessed outside of the function. Also note, that when a function hits a return statement, the function immediately stops what it is doing and returns.

  ```
  function dividesTwoNumbers(a, b) {
    const product = a / b;
    return product;
  }

  dividesTwoNumbers(6, 3); // 2
  console.log(product); // undefined
  ```

- If we tried to console.log something that we declared inside of the function it would return undefined because we do not have access to it outside of the function. This is called scope. The only way to access something inside of the function is to return it.

- We can also set variables to equal what a function returns.

  ```
  function subtractsTwoNumbers(a, b) {
    const difference = a - b;
    return difference;
  }

  const differenceValue = subtractsTwoNumbers(10, 9);
  console.log(differenceValue); // 1
  console.log(difference); // undefined
  ```

- We can see that difference is set inside of the function. The variable inside the function only belongs inside the function.

### Homework

- Code reading
- Code writing
