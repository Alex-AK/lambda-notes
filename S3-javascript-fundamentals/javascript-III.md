# JavaScript III

### References

- https://codepen.io/Alex-AK/pen/bQMeVE?editors=0012

### Important

-

## `this` keyword rules

- ask where is this function invoked, not where `this` keyword is written
- give's access to object in different contexts
-

### Implicit binding

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

### Explicit binding

- `.call()` immediately invoke function outside of object, pass variables one at a time
- `.apply()` immediately invoke function outside of object, pass whole array at once
- `.bind()` returns new function you can invoke later, pass variables one at a time

```
  let sayName = function(lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`);
  };

  let stacey = {
    name: 'Stacey',
    age: '34'
  };

  let languages = ['JavaScript', 'Ruby', 'Python'];

  sayName.call(stacey, languages[0], languages[1], languages[2]);
    // logs "My name is Stacey and I know JavaScript, Ruby, and Python"
  sayName.apply(stacey, languages); // logs same as above

  let newFunction = sayName.bind(stacey, languages[0], languages[1], languages[2]);
  newFunction()' // logs "My name is Stacey and I know JavaScript, Ruby, and Python"
```

### New binding

- whenever a constructor function is used, `this` refers to the specific instance of the
  object that is created and returned by the constructor function

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

  newman.speak();
  newman.speak();
```

### Window binding

```
  var sayName = function (name) {
    console.log('Hello ' + name)
  }
```

## Contructors and Prototype

-

### OOP

- paradigm favoring objects over functions
  - data over logic
  - logical procedure that takes in input data, processes it and returns it as an output
- JS is NOT a class based language by nature
  - Classes in JS are what we call syntactic sugar over the constructor pattern
  - we use psuedo-classical inheritance (and a few others) that we can use to achieve OOP
