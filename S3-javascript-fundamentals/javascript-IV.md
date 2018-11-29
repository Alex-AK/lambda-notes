# JavaScript III

### References

-

### Important

- look into MDN on classes
  - `class declarations` vs `class expressions`
  - prototype methods `get` and `set`
  - `static`

## Revisiting Closure

```
fucntion sayName(customName){
  const name = customName;
  const greeting = "Hello";
  console.log(`${greeting} ${customName});

  function slang() {
    const slangGreeting = "Yo, what up";
    console.log(`${slangGreeting} ${customName});

    function proper() {
      const properGreeting = "Ever so nice to meet you";
      console.log(`${properGreeting} ${customName});
    }
    proper(); // has access to sayName variables, does not have access to slang variables since they are not used in proper();
  }
  slang(); // has access to sayName variable
}

sayName("Pam");
```

## Revisiting Callback Functions

```
// Higher Order Function
function calculate (a, b, cb) {
  return cb(a, b);
}

// Callback Functions (Function Expressions)
const add = function (a, b) {
  console.log(a + b);
}
const subtract = function (a, b) {
  console.log(a - b);
}
const multiply = function (a, b) {
  console.log(a * b);
}

// Invoking Higher Order Functions with Callback Functions (Function Expressions)
higherOrderFunction (2, 2, add);
higherOrderFunction (2, 2, subtract);
higherOrderFunction (2, 2, multiply);

```

## Class Keyword

- class keyword is 'syntactic sugar'
  - it's all `constructors` and `prototypes` under the hood
  - this is not a new object-oriented inheritance model in JS
- `classes` are special functions

```
 // setting up a class with class keyword
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

// setting up the same thing with a basic constructor,
// needs explicit inheritance defined to share properties
  function Rectangle (options) {
    this.height = options.height;
    this.width = options.width;
  }

const newRect = new Rectangle(400, 800);
```

### Inheritance with Classes

- accessing parent properties and methods from a child function
  - `extends` will abstract away explicit inheritance, ie: `.call(this, someAttributes);`
  - `super()` function will abstract away explicit bindings for prototypes
- declarative and obvious which class inherits from which
- classes are just funtions

```
  class Animal {
    constructor (name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a noise.`)
    }
  }

  // Creating a child class of Animal
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
    speak() {
      console.log(`${this.name} barks.`)
    }
  }

  const bean = new Dog('Bean');

  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
      speak() {
      console.log(`${this.name} meows.`)
    }
  }

  const mo = new Cat("Mo");
  mo.speak();

```

### Convert pseudo classically instantiated program into classes

- classes are easy to use
  - inheritance is trivial to setup
  - cleaner code
  - prototype systems for free

```
// constructor
  function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
  }

  Person.prototype.speak = function() {
    return `Hello, my name is ${this.name}`;
  };

// Creating a parent object
  // step 1: declare the class keyword
  class Person {
    // step 2: create constructor
    constructor(attributes) {
      this.age = attributes.age;
      this.name = attributes.name;
      this.homeTown = attributes.homeTown;
    }
    // step 3: convert Object.prototype into method syntax within class
    speak() {
      return `Hello, my name is ${this.name}`;
    }
  }
// Creating a child of parent
  // extends creates the __proto__ chain (family inheritance line)
  class Child extends Parent {
    constructor(childAttributes) {
      // super() allows acces to this items in extends class (in this case, parent)
      super(childAttributes);
      this.toy = childAttributes.you;
    }
    play = function () {
      console.log(`${this.name} plays with their ${this.toy}`)
    }
  }


```
