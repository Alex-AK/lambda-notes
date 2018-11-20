# JavaScript Classes

## Prototype

- set methods (functions within an object) to the prototype - create one function that can be accessed across all classes.
- Protoype methods DO have access to the this keyword, and just as before, it will always point to the object (left of the dot) that is calling it.

```
 function User(name, github) {
    this.name = name;
    this.github = github;
  }

  User.prototype.introduction = function(){
      return 'My name is ' + this.name + ', my github handle is ' + this.github + '.';
  }

  let dan = new User('Dan', 'tetondan');
  let riley = new User('Riley', 'rileyriley');

  console.log(dan.introduction()); // My name is Dan, my github handle is tetondan.
  console.log(riley.introduction()); // My name is Riley, my github handle is rileyriley.
```

## Do not program multiple objects with similar information

```
const ninjaAssassin = {
  codename: "Hollow Eyes",
  weapon: "Katana",
  stealthy: true,
  headCount: 0,
  kill: function (){
    this.headCount++;
  } // a function stored in an object is called a method.
}

ninjaAssassin.kill();
ninjaAssassin.headCount;

const characterAssassin = {
  codename: "The Politican",
  weapon: "Rhetoric",
  stealthy: false,
  headCount: 0,
  kill: function (){
    this.headCount++;
  }
}

const ghostAssassin = {
  codename: "the Wraith",
  weapon: "Spirit Magic",
  stealthy:true,
  headCount: 0,
  kill: function (){
    this.headCount++;
  }
}
```

### Creating a Class: Using `DRY`

- When to create a class - when multiple objects have similar properties with different values.
- multiple assassins with similiar keys. It's time to group them together in a class. DRY programming practice. Class variable is capitalized.
- new keyword adds in automatic this and return, see below comments in Assassin.

```
const Assassin = function(codename, weapon, stealthy) {
  this = {}, happens automatically
  this.codename = codename;
    //this.codename is creating a property, right side takes in an argument from the function.
  this.weapon = weapon;
  this.hasStealth = true;
  this.headCount = 0;
    // return this, happens automatically
  how not to create a method in a class
  this.kill = function (){
    this.headCount++;
  }
};

- The class itself does not have key: value pairs - the instance takes them on as you create instances. The class is a constructor function.

console.log (Assassin); // undefined
console.log (Assassin.prototype); // {} empty object
```

### Introducing Prototype

```
Assassin.prototype = {}, it's an emptry object to hold methods for class.
```

- proper way to set a method in a class
- Adding method in prototype prevents adding a identical copy of the function in each instance. This saves memory.

```
  Assassin.prototype.kill = function () {
    this.headCount++;
      // this is a keyword that holds a place of whichever instance you call later on.
  };
```

- must use new keyword to add instance in a class. If you don't use the keyword it will just create a function with no return value.

```
const ninjaAssassin = new Assassin("Hollow Eyes", "Katana", true);
const characterAssassin = new Assassin("The Politican", "Rhetoric", false);
const ghostAssassin = new Assassin("The Wraith", "Spirit Magic", true);

ninjaAssassin.kill();
ninjaAssassin;

console.log(ninjaAssassin);
console.log(characterAssassin);
console.log(ghostAssassin);
```

- ninjaAssassin, characterAssassin, ghostAssassin are instances within the Assassin class.

```
// Using prototype to create a new method, returning second item in an array.

const array = [2, 6, 3, 4];
Array.prototype.returnSecond = function() {
  const secondItem = this[1];
  return secondItem;
}

array.returnSecond();
```

## homework discussion

- only three questions - largely about reading code
- `const HTMLElement = function (){ }`
