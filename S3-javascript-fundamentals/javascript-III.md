# JavaScript III

### References

- https://codepen.io/Alex-AK/pen/bQMeVE?editors=0012
- https://codepen.io/lambdaschool/pen/jQeZdv?editors=0011
- https://codepen.io/lambdaschool/pen/KrGRJm?editors=0012

### Important

-

## `this` keyword rules

- ask where is this function invoked, not where `this` keyword is written
- give's access to object in different contexts
- construct of scope, it lives within the scope. It points to things.

### Implicit (automatic) binding

- look to the left of the invokation, there you will find your this keyword reference

```
 let me = {
    name: 'Alex',
    age: 30,
    sayName: function () {
      console.log(this.name)
    }
 }

 me.sayName(); // `this` keyword is referencing what's left of the dot
```

```
const hobbit = {
  name: 'Samwise',
  food: 'taters',
  cook: function () {
    console.log(`${this.name} cooks some ${this.food}`);
    // method needs `this` keyword to reach outside of function scope
  }
}

// hobbit is 'this' for the cook method
hobbit.cook();
```

```
  let sayNameMixin = function(obj) {
    obj.sayName = function () {
      console.log(this.name);
    };
  };

  let me = {
    name: 'Alex',
    age: 30,
  };

  let you = {
    name: 'Tom',
    age: 32
  };

sayNameMixin(me);  // decorates object with new sayName property
sayNameMixin(you); // decorates object with new sayName property

me.sayName(); // 'Alex'
you.sayName(); // 'Tom'

```

### Explicit (we control this) binding

- Three function methods dealing with binding
  - `.call()` immediately invoke function outside of object, pass whole array at once
  - `.apply()` immediately invoke function outside of object, pass array items one at a time
  - `.bind()` returns new function you can invoke later, pass variables one at a time
    - " bind is 'use this later' " if you don't have data yet, you can set up calls beforehand(?)

```
  const person = {
    name: 'Bob',
  }

  const skills = ['HTML', 'CSS', 'JS']

  function introduce() {
    console.log(`Hello! My name is ${name}, and I like to program in ${skills}`);
  }

  introduce.call(person, skills); // passing in person, object is now assigned to 'this' keyword

```

```
  let sayName = function(lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`);
  };

  let stacey = {
    name: 'Stacey',
    age: '34'
  };

  let languages = ['JavaScript', 'Ruby', 'Python'];

  sayName.call(stacey, languages);
    // logs "My name is Stacey and I know JavaScript, Ruby, and Python"

  sayName.call(stacey, ...languages); // logs out stacey and splits array into items (same as call)

  sayName.apply(stacey, languages); // logs same as above

  let useLater = sayName.bind(stacey, languages);
  useLater(); // logs "My name is Stacey and I know JavaScript, Ruby, and Python"
```

### New (building new objects) binding

- whenever a constructor function is used, `this` refers to the specific instance of the
  object that is created and returned by the constructor function
- building of objects using a function

```
// Constructor function - a function that builds an object
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.speak = function () {
    console.log(`Hello ${this.name}`);
  }
}

```

```
  function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }

  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');

  jerry.speak();
  newman.speak();
```

### Window binding

- window binding with this is bad

```
  var sayName = function (name) {
    console.log('Hello ' + name)
  }

  console.log(this); // this will point to window, bad behavior

  function greeting() {
    "use strict"
    console.log(this); // undefined - because strict prevents window binding
  }

  greeting();
```

## Contructors and Prototype and Object Oriented Programming

-

### OOP

- paradigm favoring objects over functions
  - data over logic
  - logical procedure that takes in input data, processes it and returns it as an output
- JS is NOT a class based language by nature
  - Classes in JS are what we call syntactic sugar over the constructor pattern
  - we use psuedo-classical inheritance (and a few others) that we can use to achieve OOP

### Constructors

- functions that create object
  - receive an object and produce new object
- capitalize constructor functions `function Person() {..}`
  - instantiate (ie call upon the constructor) to produce an object using the `new` keyword
  - `this` keyword used in constructor function and replaced with object when using `new`

```
  function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.speak = function () {
      return `Hello, my name is ${this.name}`;
    }; // this function would be better placed on the prototype to conserve memory
  }

  const fred = new Person({
  age: 35,
  name: 'Fred',
  homeTown: 'Bedrock'
});
```

### Prototype

- mechanism by which all objects can inherit properties from one another
- allows on to 'deliberately' modify an objects properties
- helps avoid memory problems
- allows one to extend an object's properties to another object
- can be VERY dangerous, you can overwrite an entire objects methods if not careful

```
 function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
  }

  Person.prototype.speak = function () {
      return `Hello, my name is ${this.name}`;
    };
  }
```

### Prototypal Inheritance

- extending Parent methods into the child through prototypal inheritance
- psuedoclassical prototypal inheritance, not great to practice this, there are better techniques now

```
function Child(childAttributes) {
  Person.call(this, childAttributes); // binding this to Person
}

Child.prototype = Object.create(Person.prototype);

const pebbles = new Child ({
  age: 3,
  name: 'Pebbles',
  homeTown: 'Bedrock
});
```
