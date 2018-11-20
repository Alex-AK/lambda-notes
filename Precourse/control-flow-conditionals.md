# JavaScript Control Flow

- Execution order aside from top to bottom

## Important - DRY programming - don’t repeat yourself

### Review

- Variable Types
  - “This is a string” // string
  - 4 // number
  - true // boolean
  - null // null
  - undefined // undefined
- Keywords
  - `const` // fixed variable, cannot be changed
  - `let` // variable can be updated with operators
  - `var` // from ES5
- Operators
  - `++`, `--`
  - `let age = 10;`
  - `age++;`
  - `age;` // 11
- Resolution
  - Every line of code resolves to something
  - `let age = 10;` // storing data, does not resolve
  - `age;` // resolves to 10
  - `const otherAge = age;` // again, does not resolve.
- If / Else
  - `const x = 1;`
  - `const y = 5;`
  - `const z = x + y;` // reads top to bottom

### Comparison Operators

- `>`
- `<`
- `===`
- `!==`

### Truthiness

- Every single variable is considered truthy or falsey. // used to check if data is missing
- Every variable is considered true or false by an if statement.
  - Truthy: numbers, strings
  - Falsey: 0, “ ”, null, undefined

```
const x = 1;
  const y = 5;
  if ( x === y ) {
    console.log (“if”);
  } else {
    console.log (“else”);
    }
```

### Scope

```
  const x = 1;  // global scope
  const y = 5;
  const add = true;

  if (add) {
      console.log (x+y); // accessing variables from global scope
  )

  if (add)
      let z = x + y; // nested scope in block, var would not nest this scope.
      console.log (z);
}
```

### Logical Operators

- `!` // not
- `!(true);` // false
- `!!(true);` // true
- `!!(null);` // false, turns falsey into boolean operator

### Or Operator

```
  const hasCar = false;
  const hasBike = true;

  const canGetToParty = hasCar || hasBike;
  canGetToParty;
```

### And Operator

```
  const hasCar = true;
  const madeFood = true;
  const canGoToParty = hasCar && madeFood;
  canGoToParty;
```

### Combining Logical Operators

```
  const hasCar = false;
  const hasBike = true;
  const madeFood = false;

  const canGoToParty = (hasCar || hasBike) && madeFood;
  canGoToParty;
```

### Else / If statements

### Loop

```
  for ( let i=0; i <4; i++ ) {
    continue; // when a condition is met, loop skips an iteration and continues running
    if (i === 2) {
        continue;
    }
    break; // when a condition is met, loop iterates line of code then stops running.
    if (i === 2); {
        break;
    }
    console.log (“hey!”);
    }

// iterate through a string and count number of specific words or letters

  const string = "aaabbc"

  let counterA = 0;
  let counterB = 0;
  let counterC = 0;

  for (let i = 0; i < string.length; i++) {
      const char = string[i];
      console.log(char);
  }
```
