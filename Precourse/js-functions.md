# JavaScript Functions

##Review

- HTML - keywords
- CSS - id, class
- JS - types - number, string, boolean, null, undefined, operators, if/else, else/if, loops

### Paramaters

- we set these variables inside of the parentheses when we write the function
- Generally what does in a function.

```
  function myFunc( parameter1, parameter2 ){
    // We can use parameter1 and parameter2 in this function just like a variable.
  }
```

### Arguments

- to use an argument just put the data in the function call parentheses like so
- Generally what does in a function call.

```
  function logsName( name ){
    console.log(name);
  }
  logsName('Dan') // console.logs: Dan
  logsName('Diandra') // console.logs: Diandra
```

### Function Scope

- We can not reach into a function from the outside and get access to function scope variables. But we are free to use global variables within our function - this is not encouraged, goes against functional programming methodology.

```
  const var1 = 'Lambda'

  function myFunc(){
  const var2 = 'School'
  console.log(var1) // Lambda
  console.log(var2) // School
  }

  console.log(var1) // Lambda
  console.log(var2) // undefined
```

### Return

- There is one way we can access data from within a function, in fact it is the only way for us to get ANY data from a function, and that is to use the keyword return. Think of the return statement as the only way for data to escape a function. Nothing other than what is returned can be accessed outside of the function. Also note, that when a function hits a return statement, the function immediately stops what it is doing and returns.

```
  function sample () {
  x = 10;
  return x;
    // once code hits return statement, the function is done skips everything afterwards
  };

  console.log (sample()); // 10, sample function was assigned x
  console.log (x); // undefined, cannot reach in function scope
```

- We can also assign the value of a return statement to another variable, and we will now have access to the data returned from the function.

```
  function addTwoNumbers( a, b ) {
    const sum = a + b;
    return sum;
    console.log('This will never be reached');
  }

  const newSum = addTwoNumbers( 1, 2 );
  console.log(sum) // undefined
  console.log(newSum) // 3;
```

- Note: We will never be able to have access to the actual variable created in the function, we will only have access to the data that variable was assigned to.

- //annonymous function - a function assigned to a variable
- // benefit - it's hoisted, aka read before anything else
- // allows you to use the combine variable ahead of fuction declaration.
- //allows you to use variable ahead of function, can keep functions near bottom of code if wanted.

```
  const combine = function (p1, p2, p3) {
    const combination = p1 + p2 + p3;
    return combination;
  };

  combine (5, 3, 6);
```

- Interpolation - another way to create strings using variables in JS

```
  function logsSchool(School, descriptor){
    console.log(`${School} ${descriptor}`);
  }

  logsSchool('Lambda', 'is Awesome!') // console.logs: Lambda is Awesome!
```
