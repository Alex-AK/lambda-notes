# JavaScript Arrays

```
  const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj’];
      // arrays are named with plural variables

  `.length` will return the number of items in an array

  `console.log (studentsNames.length);` // 4
```

```
  const todo = [
  "teach",
  "walk dog",
  "cook dinner",
  "clean kitchen"
  ];
```

### Indexing

```
  let index = todo.length;
  todo[index - 1];
```

### methods

```
  todo.length // 4
```

### Access

```
  const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];
                           0      1        2       3

  console.log(studentsNames[1]);  // ‘Maria'
  console.log(studentsNames[studentNames.length - 1]); // ‘Raj'
```

### Assignment - push, pop, shift, unshift

```
  const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];

  studentNames[0] = 'Ryan';
  console.log(studentNames);  // ['Ryan', 'Maria', 'Sara', 'Raj’]

  studentNames.push('Ryan’); // adds argument to end of array
  console.log(studentNames);  // ['Dan', 'Maria', 'Sara', 'Raj', 'Ryan’]

  studentNames.pop(); // removes last array item
  console.log(studentNames);  // ['Dan', 'Maria', ‘Sara’, 'Raj’]
```

// reset array

```
  const studentsNames = ['Dan', 'Maria', 'Sara', 'Raj'];

  studentNames.unshift('Ryan’);    // adds argument to beginning of array
  console.log(studentNames);  // ['Ryan', 'Dan', 'Maria', 'Sara', 'Raj']

  studentNames.shift();   // removes first array item
  console.log(studentNames);  // ['Dan', 'Maria', 'Sara', 'Raj']
```

### Objects

- `const newObj = {};`

### Key: Value pairs

- The key is the identifier and the value is the value we want to save to that key.
- Objects can hold many key:value pairs, they must be separated by a comma.
- Keys are unique in an object, there can be only one key of that name. Multiple keys can have the same value.

```
  const user = {
    username: 'dan.frehner',
    password: 'abc123',
    lovesJavascript: true,
    favoriteNumber: 42,
  };
```

### ccessing Values

- Once we have key:value pairs we can access those values by calling the object name and the key.

### dot notation - (hint: the length property is a key:value pair)

```
  user.lovesJavascript; // true
  user.username; // dan.frehner
```

### bracket notation

```
  const passString = 'password';
  user['lovesJavascript']; // true
  user['username'];        // dan.frehner
  user[passString];        // abc123
```

### Assigning Values

// adding key: value pairs

- We can assign them, when we create the object, with dot notation, or with bracket notation

```
  const newUser = {
      isNew: true,
  }

  const loveJSString = 'lovesJavascript';

  newUser.username = 'new.username';
  newUser['password'] = '12345';
  newUser[loveJSString] = true;
```

// deleting properties (keyword: delete)
It is rare we will see the use of the delete keyword, many find best practice to be setting the value of a keyword to undefined. It will be up to you when the time comes. (not sure what this means)

```
  const user = {
    username: 'dan.frehner',
    password: 'abc123',
    lovesJavascript: true,
    favoriteNumber: 42,
  };
  delete user.username;
```

### Methods - Functions saved on an object are called methods (.length, .push, .pop, etc, are all methods.)

```
  const newObject = {
    sayHiMethod: function() {
      console.log('Hi Everyone!');
    },
  }

  newObject.sayHiMethod(); // Hi Everyone!
```

### for…in loops

- In the parentheses we will declare a variable key, the keyword in, and the name of the object. This will loop over each key in the object and finish when all of the keys have been iterated over. We can use this key, and bracket notation, in our for loop to access the value associated with that key.

```
  const user = {
    username: 'dan.frehner',
    password: 'abc123',
    lovesJavascript: true,
    favoriteNumber: 42,
  };

  for (let key in user){
    console.log(key);
    console.log(user[key]);
  }

  // username
  // 'dan.frehner'
  // password
  // 'abc123'
  // lovesJavascript
  // true
  // favoriteNumber
  // 42

for (let key in user){
console.log(key + ": " + user[key]);
}

// username: dan.frehner
// password: abc123
// lovesJavascript: true
// favoriteNumber: 42

const testObject = {
  key1: "value1",
  key2: "value2",
};

for (let key in testObject) {
  // first iteration: key = "key1"
  // second iteration: key = "key2"
  console.log(key);
};
```

### “this” keyword

- Objects have a self referencing keyword
- Can use .this to self reference a keyword and use value

```
  const user = {
    username: 'dan.frehner',
    password: 'abc123',
    userSaysHi: function(){
        console.log( this.username + ' says hi!');
    },
  };

  user.usersaysHi(); // 'dan.frehner says hi!’

  const studentInfo = {
  name: "Simon",
  location: "Tuckluck, TN",
  age: 29,
  hometown: "Anchorage, AK",
  knowsJS: false,
  };

  studentInfo.sayHi = function() {
    console.log("Hello! I am " + studentInfo.name + ".")
      // console.log("Hello! I am " + this.name + ".");
      // both run the same this. pulls from the current object.
  };

  studentInfo.sayHi();
```

### Important Note: Objects in Javascript

- In this lesson we learned what Objects are and the many ways to access values, call methods, and assign values. Many of these techniques looked very familiar, as if we had used them in virtually every aspect of our learnings so far. There is a pattern here, that is because EVERYTHING in Javascript is an Object. Arrays are just objects with numerical keys, Strings are objects under the hood with built in methods, functions are actually objects with their own special properties, the entire Javascript runtime is an object (window in a browser, or global in Node.js). The more you work with Javascript the more this will start to make sense to you. Just remember, everything is an object.

### Homework:

- getThird takes in an array
- it returns the third item in the array
- if there is no third item, return null
- Example: getThird(['Doc', 'Biff', 'Marty']) returns 'Marty'

```
function getThird(array) {
if (!array[2]) {
  // my initial attempt tried to loop through this array and grab the second item
  // then return
  return null;
} else {
  return array[2];
  }
}
getThird( [0, 1, 2] );
```

```
Return object values as an arrayconst

object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
```

### Areas of challenge from this lesson

key: value pairs and accessing the data, especially when the object is set as a parameter in a function.
