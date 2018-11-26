# JavaScript I

### References

- https://codepen.io/lambdaschool/pen/QJBNPX
- https://gist.github.com/ourmaninamsterdam/1be9a5590c9cf4a0ab42
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

### Important

- before you hit run, think about what will happen with the code

## Anatomy of a variable

`var myVar = 'example';`

- declartion - var, let, const
- identifier - must begin with letter, case sensitive, be descriptive
- assignment operator `=`
- value - string, numbers, boolean, array, object

### var

- function scoped
- duplicate identifier are permitted, don't do this
  ```
  var myVar = "String1";
  var myVar = "String2";
  ```
- values can be changed
- variables declared using var are always hoisted to the top of their scope

```
function example () {
  if (true) {
    var myVar = 'Hello'; // defined in function scope
  }
  console.log(myVar);
}
example(); // 'Hello'
```

### let

- block scoped
- duplicate identifiers with the same name are not permitted
  ```
  let myVar = "String1";
  let myVar = "String2"; // throws an error, yay!
  ```
- value can be changed

```
function example () {
  if (true) {
    let myLet = 'Hello'; // defined in block scope
  }
  console.log(myLet);
}
example(); // ReferenceError console.log() can't access block
```

### const

- block scoped
- duplicate identifiers are not permitted
- value cannot be changed, prevents user error side effects
- if const is holding an array or object, values inside array or object can be changed
- use const until you can't

```
Example:
  const myArray = [1, 2];
  myArray.push(3);
  console.log(myArray); // [1, 2, 3]

Another example:
  const a = [1];
  const b = a;
  console.log(a === b); // true
  b.push(2);
  console.log(a === b); // true
  console.log(a); /// [ 1, 2 ]
```

### Global Variables

- be careful with assigning global variables

```
  globalVar = 'Do not do this';
  let alsoGlobal = 'Global';

  function example() {
    console.log (alsoGlobal);
  }

  example(); // 'Global'
```

### Hoisting

- best practices: declare variables at the top of the current scope.

### Functions

- declaration, identifier, parameter, inside block, invokation, argument
  - parameter - holding place for argument
  - argument - passing in when invoking the function

```
function someName(name) {
  console.log(name);
}

someName("Josh");
```

## Object Anatomy

```
  const objName = {
    name: 'Alex'
    key: value'
  }
```

## Object Literals

```
  const person {
    // object properties
    name: 'Jane',
    age: 25,
    location: 'United States',
    school: 'Lambda School'
    'last name': 'Doe'
  }
```

### Dot notation

```
  console.log(person);
  console.log(person.name); // 'Jane'
```

### Bracket notation

- great for data that's not yours
  - if receiving, naming convensions are sporatic or often include spaces
- ideal for calling keys with spaces or special characters
- must use quote marks

```
  console.log(person['location]);
  console.log(person['school']);
  colsole.log (['last name']); // 'Doe'
  console.log([name]); // undefined - due to 2 pass compiling method
```

## Object Methods

- when your key holds a function

```
  const student = {
    name: 'Jane',
    age: 25,
    location: 'United States',
    school: 'Lambda School'
    'last name': 'Doe'
    // object methods
    study: function(topic) {
      console.log('${this.name}) likes to study ${topic}');
    }
  }

// invoke method with dot notation

student.study('code'); // 'Jane likes to study code'
student['study']('code');

```

### Creat object method outside of object literal

```
  student.play = function(activity) {
    console.log ('${this.name}) loves to ${activity}');
  }

student.play('swim'); // 'Jane loves to swim'
```

### Object Methods `.keys()`, `.values()`, `.entries()`

```
console.log(Object.entries(student)); // returns key: value pairs of object in an array
coneole.log(Object.keys(student)); // returns keys of object in an array
console.log(Object.values(student)); // returns values of object in an array
console.log(Object.entries(student[1])); // returns age key: value pair in an array

const student = {
name: 'Jonas',
age: '12',
gender: 'M',
role: 'Receiver'
};
const studentKeys = Object.keys(student);
const studentValues = Object.values(student);

student.characters = ['Lily', 'Mother', 'Father', 'Caleb', 'Asher'];
const listOfChars = student.characters;

listOfChars.forEach(function(chars) {
console.log(chars);
});
```

### Reduce Method - maybe theres an object method to perform math on a value

- Can use Object.entries(...) to turn object into array
- Can use reduce method on that array to get sum or average of total

#

## Arrays

- special objects treated with a special key/value pair
- contain ordered values, zero based index order
- we can change, add, update, remove, etc
- very fast at retrieving specific item
- array methods live on the array prototype
- indexes are numerical
- often loop over entire array, searching for specific item is not efficient

```
  array = ['firstValue', 'secondValue'];

// arrays under the hood
  array = {
    '0': 'firstValue';
    '1': 'secondValue';
  }

  array [0] // 'firstValue';
```

```

```

### Array Methods

- `.push();` adds item to end of array
- `.pop();` removes item from end of array
- `.unshift();` adds item to beginning of array
- `.shift();` removes item from beginning of array
- `.splice(1, 1);` removes item from array at starting point to end point selected

### Important

- find first and last item in the array

```
const first = faveThings[0];
const last = faveThings[faveThings.length - 1];
```

### String template literals

- interpolation `${..}`

```
 for (let i = 0; i < array.length; i++) {
   console.log(`${array[i]} testing template literals`);
 }
```

### Objects in Arrays

```
 const fruits = [
  {
    name: "apple"
  },
  {
    name: "pear"
  },
  {
    name: "banana"
  },
  {
   name: "watermellon"
  }
];

//console.log(fruits.reverse());
//console.log(fruits[1]);

for(let i = 0; i < fruits.length; i++){
  console.log(`${fruits[i].name} test another and another`);
}
```
