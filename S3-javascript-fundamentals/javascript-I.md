# JavaScript I

### References

## -

### Important

-

## Anatomy of a variable

`var myVar = 'example';`

- declartion - var, let, const
- identifier - must begin with letter, case sensitive, be descriptive
- assignment operator `=`
- value - string, numbers, boolean, array, object

### var
- function scoped
- duplicate identifier are permitted
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
- duplicate identifiers are not permitted
- value can be changed

```
function example () {
  if (true) {
    let myLet = 'Hello'; // defined in block scope
  }
  console.log(myLet);
}
example(); // ReferenceError
```

### const
- block scoped
- duplicate identifiers are not permitted
- value cannot be changed
- if const is holding an array or object, values inside array or object can be changed

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

## Object Anatomy
  ```
    const objName = {
      name: 'Alex'
      key: value'
    }
  ```

## Object Literals

```
  const objName = {
    name: 'Alex';
  }

  const person {
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
- ideal for calling keys with spaces or special characters
```
  console.log(person['location]);
  console.log(person['school']);
  colsole.log (['last name']); // 'Doe'
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

```
  array = ['firstValue', 'secondValue'];

// arrays under the hood
  array = {
    '0': 'firstValue';
    '1': 'secondValue';
  }

  array [0] // 'firstValue';
```

`.push()`