# React Lifecycles

### References

- https://codesandbox.io/s/jpnn8j7z2y (from TK)
- https://codesandbox.io/s/92w926lzvw (from live lecture)
- https://codesandbox.io/s/0q2kzrvoow (HOC answer key)

### Important

- used to share logic / functionality between components
- follow 20 minute rule, the 20 minutes of trying to figure it out will be your biggest growth
- NEW GIT FLOW: run CRA before you branch project

### Higher Order Components (HOC) Basics

- advanced react techniques
- function that takes function as argument (component receiving a component)
- used to share logic / functionality between components
- components mounted through HOC if you want to gain methods or state from HOC
- considered a container to perform 'higher level logic' - ie logic you want to pass down

### Array Methods are Higher Order Functions

```
  Array.map(item => Hello + item)
  Array.filter(item => item > 24)
  Array.reduce((prev, next) => {return prev !== next})
```

### Let's Code

- follow along example (https://codesandbox.io/s/vqno26y4w5)

### Basics of Function Syntax

```
  function () {
    return 42
  }

  // same as - has implicit return
  () => 42

  // if you introduce curly braces, you need to return
  () => {
    return 42
  }
```

```
// this one does not work, arrow function reads first curly brace as establishing of scope
  const person = name => {name: name}

// works
  const person = (name) => {
    return {name: name}
  }

// to keep implicit return and return object, wrap in parentheses
  const person = name => ({name: name})

```

### Callback Functions

```
// callback function, if we invoke execute, callback will be executed
const execute = (someFunc) => someFunc()

execute(() => alert('executed'))

```

### Functional Programming Reinforcement

- introduction for React and Redux
- reviewing closure with arrow functions

```
// returning a function from function (common practice in functional programming)

 // outer function is implicitly returning an inner function, aka a function returning a function
 const getOne = () => () => 1

 .. alternate syntax
 function getOne () {
   return function () {
     return 1;
   }
 }

 console.log(getOne) // returns function definition '[Function: getOne]'
 console.log(getOne()) // returns inner function definition '[Function]'
 console.log(getOne()()) // returns 1

```

```
const getInner = getOne(); // const getInner = () => 1

console.log(getInner()); // returns 1
```

### Use Cases For Nesting Functions

- accessing sensitive data you don't want to give external access to
- we want to give another function we create, a function (or method)
- creating dynamic functions with new functionality (in this example, multiplying variables)

```
  const multiply = (x) => (y) => x * y;
  multiple(5)(20); // returns 100

  multiply (5); // returns function y => 5 * y;

  const multiplyByFive = multiply(5); // returns (y) => 5 * y

  multiplyByFive(20); // returns 100
  multiplyByFive(5); // returns 25
```

```
  const primer = num = num * num

  [1, 2, 3].map(primer); // [1, 4, 9]
```

### Higher Order Components

- A component/function that takes another component as an argument
- returns a NEW component with that is the passed in component + added state and methods
- HOC's are never rendered, so they start with a lowercase letter
- only the components you pass through HOC will render
  ie: `const YellTitle = yell(Title);`
- https://codesandbox.io/s/92w926lzvw

### Today's Assignment - Authentication with HOC

- based on a condition, mount one component
- https://codesandbox.io/s/pp93znyv57

```
  this.state = {
    showFirst: true
  }

  toggle = e => {
    e.preventDefault();
    this.setState(prevState => {showFirst: !prevState.showFirst}))
  }

  render() {
    return (
      <div>
        <Conditional showFirst={this.state.showFirst}>
        <button onClick={this.state.showFirst}>Toggle Component</button>
      </div>
    )
  }

  const conditionalRender = FirstComponent => SecondComponent => props => {
    props.showFirst ? <FirstComponent /> : <SecondComponent />
  }

  const Conditional = conditionalRender(First)(Second)
```
