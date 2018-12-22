# React Functional Components II

### References
- 

### Important
- 

## How Data Works in React

### State
- heart of react application, drives application
- `state` is mutable, with `setState`, can create, read, and update data
- when state updates, component will 'react' and update
- data our components hold onto and pass around to other components
  - pass `state` around to another component using `props`

### Props
- every component can receive `props`
- `props` is the blood `state` pumps through the system
- `props` are immutable, we simply pass them around and display information
- can be passed top down, or bottom up through event handlers
- components never modify their own `props`, all functions and classes in React are pure
- SEE `state-props.html`

### Reusability
- use `props` to dynamically pass data to a component to make it reusable in different context
- writing a component once and using it in multiple contexts, DRY programming
- let component do one thing really well, `Single Responsibility Principle`

### How?
- what are the bare minimum functionality and style this component needs?
- don't over style your components, it's easier to pass in props that trigger classNames for styles
- don't nest too deep, passing props through giant components is difficult
- use `defaultProps` when building a default component that can stand alone

```
// set up component to receive a style prop
  const BasicButton = props => {
    return <button className={props.buttonStyle}> Click Me! </button>
  };

  BasicButton.defaultProps = {
    buttonStyles: 'defaultStyles',
  };

  .defaultStyles {
    background: teal;
  }

  .red {
    background: red;
  }

  .blue {
    background: blue;
  }

// create unique buttons reusing a single component with different style props
  <BasicButton buttonStyle="red" />
  <BasicButton buttonStyle="blue" />
```

### Nested Functional Components
- everything is still an object
- all components return some sort of object at the end of the day
- we can nest functions together and make giant component trees
- the `props` chain will flow top to bottom
- as we pass data from one component to the next, we need to reference the `props`
- this pattern is called `props drilling`, it's kind of a pain
- don't too deep for nested `props` (recommended max three levels deep before implementing a library to manage)
