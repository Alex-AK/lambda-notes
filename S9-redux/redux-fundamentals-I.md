# Redux Fundamentals I

### References

-

### Redux Terminology Basics

- store : in charge of data
- reducers : in charge of updating store
- actions creator : a function that dispatches an action
- action : tells reducer how to update store and what to update it with
- components : react UI
  - components receive state from store as needed
  - import actions as needed, used with event listeners

### Why Redux

- problem : data management ease
- solutions
  - central source of truth, keeps all data in store
  - helps manage large data sets
  - allows components to receive state and props as needed

### When To Use Redux

- when state is needed to be synced and shared across component trees
- when developer decides data is large enough to implement it

### Props Drilling & Context API

- drilling : when data needs to be passed down through components it's not needed in
- context : allows creation of global object, which can be referenced by any component

### Dustin Redux Tips

- access store in container components, then pass data down
