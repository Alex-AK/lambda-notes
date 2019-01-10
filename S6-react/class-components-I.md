# React Class Components

### References

- https://codesandbox.io/s/0310rqzl3w (passing state and introduction to mutating with event)
- https://codesandbox.io/s/94qny15r8r (lecture)

### Important

- when state that has been passed around changes, the props change too, and render() will run again
- hooks will eventually replace Class components
- hooks will be released in quarter 2 of 2019, and it'll be another 3-6 months before they are integrated, production level will be 6-9 months out from Jan 2019.
- container components are usually class components, because this is where you hold and manage state

### Basics

- we extend `Base React Class` from react library
- base class gives us awesome functionality
- Class components will have access to new tidbits from React API and Lifecycle
- Render function is very important~
  - this is how react gets code through virtual DOM
- Class components can hold state

```
import React, { Component, Fragment } from 'react';

class App extends Component {
  constructor (props) {
    super(props); // gives access to parent classes methods (ie. render())
    this.state = {  }
  }

  render() {
    return (
      <Fragment>
        // components go here
      </Fragment>
     );
  }
}

export default App;
```

### State

- component level storage object that we use to hold onto data that our Components may or may not need access to.
- state can be/should be set up on the constructor function
- we can create, read, delete, and update state
- when state updates, render gets called again
- we can pass state around and props throughout multiple levels of our components
- when state that has been passed around changes, the props change too, fully dynamic
  - this is what make react "reactive"

### Reviewing `Array.map()`

- a function that produces a new array based on data given by another list
- immutability: 1st list -> produces 2nd list
- can change data in a produced array without altering the original array

```
const array = [1, 2, 3, 4, 5];

const newArray = array.map ((number) => number + 1);
```

### React and Lists

- JSX allows you to write inline JS code that can be interpreted by React
- We can give JSX a map function, it will turn into an array of JSX elements that can then be sent through React and turned into DOM elements.

### State to Props

- share data between components using state and props
  - state would be the heart, props would be the blood

### Revisiting State

- https://codesandbox.io/s/0310rqzl3w (passing state and introduction to mutating with event)
- the heart of the react application
- state is the data that we have when we need it
- stored on the constructor (in lambda school)
- state is just an object we can reference on the `this` keyword
- it is as persistent in memory as your component, as long as the component is mounted, so too will be your state
- state is mutable and can be changed with `setState`
  - when state changes `render` function gets called again

### Event Handling

- respond to events triggered by user interaction using event handlers
- what is a DOM event? Anytime a user interacts with a DOM element - click, mouse enter, mouse leave, input change, keypress, scroll, etc
- events are fired and triggered within the browser window and are attached to specific elements that reside within in
- most languages have some kind of event model and they may often be different from the way that JS event model is built
  - example: events may be handles differently in browser compiler versus node compiler
- if HTML and CSS is the house, JS is the electricity that enables us to interact with page.

### Event Handling in React

- (insert codesandbox link here)
- the event object is wrapped inside of a Synthetic Event object in React
- Objects are pools meaning that this event object can be used by various other types of DOM elements and their events
  - dont to help performance
- Events are completely custom in React, React Implementation controls how events work
  - they don't have to rely on the web browser events
- React events are considered synthetic events, this prevents actual browser events and bubbling.
- usable methods off of event object. `event.target`

### Extending Component in React

- gives access to state
- gives access to render
- gives access to lifecycle

- constructor extends prototypes, gives access to methods from React.Component, gives access to super, also contains state.

```
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
      </div>
    );
  }
}
```

- controlled input, is dependant on state

- spread operator `...` adds targeted array into a new array
