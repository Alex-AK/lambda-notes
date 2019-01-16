# React Class Components II

### References

- https://codesandbox.io/s/5xk6z6k4mx
- https://devhints.io/js-array
- https://codesandbox.io/s/k3jqr62l03
- https://repl.it/@snowkid314/GentleHighlevelMegahertz
- https://codesandbox.io/s/mo60xzvrqx

### Important

-

### Mutating State

- state is mutable through `setState` function
- we will never change the state object itself
- components are stateless, unless state object is on them
- when state object updates, `render` is called

### Rules of setState Function

- mechanism built into react that allow us to update our state object
  - we never directly update our state
  - may be async, meaning there may be some unanticipated behavior
- setState always returns an object that will represent our state object
  - it replaces a key: value in the state
- React takes the values we give to setState and replaces the fields we select with the new values.
  - it will ignore values not explicitly set on the object
- setState triggers a call to our render() function

### Directly Updating State Key:

```
  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
```

### Referencing Previous State and Updating

- good for boolean, counter, or editing a current state
- anytime we need to access a current or previous value on state, we need to use the functional setState pattern (seen below)

### When to use prevState

- https://twitter.com/dan_abramov/status/816394376817635329/photo/1
- https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b
- https://medium.com/@wisecobbler/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1

```
  increaseCount = () => {
    this.setState(previousState => {
      return { count: previousState.count +1 }
    })
  }
```

### Nested React Class Components

- application can be built out as a component 'tree'
- will need to pass state around as props
- child components will often need access to state and lifecycle methods
- ask yourself:
  - does my component need access to a lifecycle method
  - does my component need access to it's own state
- data flows from top to bottom (parent to child)
  - when a parent's state is updated, the props reading from that state will also update

## Important Follow Along

- https://codesandbox.io/s/mo60xzvrqx
- Nesting a class component, and using props passed from it's parent to setup a new state.
- this new state is often only a bit of the state from it's parent
- this way you can manage a piece of state without going up multiple levels
