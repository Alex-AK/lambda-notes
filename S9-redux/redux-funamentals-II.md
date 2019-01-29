# Redux Fundamentals II

### References

- https://repl.it/@AlexAK/understandingMutations
- https://codesandbox.io/s/lpowvzl1lq

### Redux Terminology Basics

- store : in charge of data
- reducers : in charge of updating store
- actions creator : a function that dispatches an action
- action : tells reducer how to update store and what to update it with
- components : react UI
  - components receive state from store as needed

### Mutability

- mutable objects are objects whose state is allowed to change over time
- mutation hides change, which can create (unexpected) side effects

### Immutability

- immutability makes it easy to see if anything has changed

### Redux and Immutability

- redux has a single immutable state tree
- state changes are explicitly handled by dispatching actions
- actions are processed by a reducer that accepts the previous state and the action and returns the next state of your application
  - time travel redux dev tools

### Array Methods

- `map`, `filter`, `reduce`, `concat`, and some other array functions are functions that do not mutate the array you are working with - meaning they can be used to keep our code immutable
  - _return a new array_ based on the logical callbacks passed to the few that accept them

### Object.assign

- `Object.assign()` is a method that creates a new object, copies another object’s properties and values into it, and updates whichever values we want to update in our new object, or adds new key/value pairs.

```
// ES5
  const myObject = {name: 'Ryan', scores: [33, 31, 29, 37, 34, 34, 43], age: 31};
  const newObject = Object.assign({}, myObject, {age: myObject.age + 1});
  console.log(myObject, newObject);

// ES6
  const myObject = {name: 'Ryan', scores: [33, 31, 29, 37, 34, 34, 43], age: 31};
  const newObject = {
    ...myObject,
    age: myObject.age + 1
  };
  console.log(myObject, newObject);
```
