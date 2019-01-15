# React Proptypes

### References

- https://reactjs.org/docs/typechecking-with-proptypes.html

### Important

-

### Vanilla JS Review

- number: 42
- boolean: true / false
- string: 'hello'
- object: {key: value}
  - array: ['items', 'mapped', 'with', 'index', 'numbers']
- undefined: undefined (a placeholder with no assigned value)
- null: null
- symbol: unique object with unique value (ES6)

### What's the problem?

- JavaScript is dynamic, gives us the ability to pass data around without type checks
- JS developers does a lot under the hood
- JS assumes you will pass the proper data type around
  - if incorrect data type is passed, it could error out, or cause bugs
  - there is no built in type checker, we have to build it from scratch

### Example

```
  const passData = (x, y) => x + y;

  passData(1, 2); // 3

  passData({data: 'whoops!'}, 2); // '[object Object]2'
    - this is a problem, it does exactly what it says it does
    - but it should restrict users input to numbers since that's it's intended purpose

```

### Type Check - this is a pain

```
  const passNumbers = (x, y) => {
    if (typeof x !== 'number') {
      return 'x is not a number!'
    } else if (typeof y !== 'number') {
      return 'y is not a number!'
    } else {
      return x + y
    }
  }
```

### Solutions

- use a third party library (typescript or flow)
  - allows you to extend functionality of JS code, adds type system
  - Ryan Hamblin does not think this is the solution, since JS was designed to be dynamic
  - TypeScript is more commonly used in Angular
  - Flow is more commonly used for React
- use `prop-types` in NPM package (preferred Lambda Method)
  - validates data at time component is built
  - will not allow you to type check all data, `only your props`
  - components become safe from the mistakes devs commonly make
  - only runs in development, not in production

### Importing Prop Types (Case Sensitive)

- `import PropTypes from 'prop-types'`

- select object with camel case `propTypes`
- pass in key pairs you want to validate
- this example makes sure `name` is a `string`
- to check value, you run the `PropTypes` object then add what type you want

```
  Object.propTypes = {
    name: PropTypes.string
  }
```

### PropType Checking an Object

```
  Quote.propTypes = {
    quote: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      memo: PropTypes.string.isRequired
    })
  };
```

### Type Challenge - don't forget to import PropTypes from 'prop-types'

```
TodoForm.PropTypes = {
  isChecked: PropTypes.bool
  toggleCompleted: PropTypes.func
};

```

```
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string,
      id: PropTypes.number,
      completed: PropTypes.bool
    })
  ),
  toggleCompleted: PropTypes.func
};
```

### Helpful Tips

- when on a component that does not use data, it just passes it, see below
- type check for an array or object on a pass through component
- deconstruct props if you have to type `props.whatever` more than three times
- build for every component, to practice, and make your components stronger
- prop types ONLY check props, not parameters passed
