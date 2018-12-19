# React Functional Components I

### References

- https://reactjs.org/
- https://reactjs.org/docs/introducing-jsx.html
### Important
- Using react means learning more JS, strong knowledge in one language will help learn other languages later on
- yarn install to get dependencies
- yarn start to host local react app

### React Basics
- UI component library, not a framework, it renders the UI, not concerned about how you organize your data
- deals with complex state (data) without bogging down DOM
  - react creates a virtual DOM, a representation of what the DOM will be
  - uses virtual DOM to render the actual DOM through a `root` target

- React allows compartmentalization (components) and scalability
- Redux is a third party app that manages state
- uses JSX language, template style language to represent our HTML and JS
- Babel converts JS into a backwards compatible version for current and older browsers or environments.

### Why Frameworks?
- develop and deploy scalable apps quickly

### React Documentation
- Declarative: design simple views for each state, React will update and render individual components as needed
- Component Based: encapsulated components that manage their own state, keeping state out of the DOM
- Learn once, write anywhere: develop new features without rewriting existing code

### A Simple Component
- React components implement `render()` method that takes input data and returns what to display
- Input data that is passed into the component can be accessed by `render()` via `this.props`
```
  class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}<br/><br/>
          {this.props.name} is {this.props.age} years old.
        </div>
      );
    }
  }

  ReactDOM.render(
    <HelloMessage name="Tom" age="30"/>,
    mountNode
  );
```

### A Stateful Component
- In addition to taking input data via `this.props`, a component can maintain internal state data via `this.state`
- When a component's state data changes, the rendered markup will be updated by re-invoking `render()`
```
  class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }

    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
    }
  }

  ReactDOM.render(<Timer />, mountNode);
```

### An Application
- using `props` and `state` we can put together a small todo application
- this example uses state to track the current list of items as well as the text entered
- concat() method merges two or more arrays and returns a new array.
```
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<TodoApp />, mountNode);
```

### A Component Using External Plugins
- React is flexible and provides hooks that allow you to interface with other libraries and frameworks
- This example uses remarkable, a markdown library, to convert `textarea` values in real time.
```
  class MarkdownEditor extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { value: 'Hello, **world**!' };
    }

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

    getRawMarkup() {
      const md = new Remarkable();
      return { __html: md.render(this.state.value) };
    }

    render() {
      return (
        <div className="MarkdownEditor">
          <h3>Input</h3>
          <label htmlFor="markdown-content">
            Enter some markdown
          </label>
          <textarea
            id="markdown-content"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
          <h3>Output</h3>
          <div
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<MarkdownEditor />, mountNode);
```

### Setting up a React JS environment using a single HTML file
- see react.html in this folder `/Users/Alex/Documents/LambdaSchool/Notes/S6-react/react.html`
- `React.createElement()` everything that gets built using react will make its way through this or a method like this.
- props is the information react will give to the virtual DOM
```
- react is creating an object and storing it in the virtual DOM
- we currently don't have an actual DOM element
- passing in a parent element (type), an object (props), and a child element (Child)

  const HelloWorld = React.createElement('h1', {
    className: 'heading',
    id: 'headingID'
  }, 'Hello World');

  // props:
  //   children: "Hello World"
  //   className: "heading"
  //   id: "headingID"
  //   __proto__: Object
  //   ref: null
  //   type: "h1"
  //   _owner: null


  ReactDOM.render(HelloWorld, document.getElementById('root'));
```

### Functional Components
- JS function takes in arbitrary parameters called `props`
- encapsulates pieces of UI, including JS, markup, and styles (if desired)
- need a return statement so you can render the function
- may only return one element, so multiple tags have to be wrapped in `div` or `React.Fragment`
```
  const MyFirstComponent = props => {
    return <div>My first React component</div>;
  };
```

### File Structure
- must `export default (insert function or class to export here);`
- then use `import (insert function or class exported here) from (insert file name here);`
- when importing a dependency: `import React from 'react';`
- when importing a function from an app: `import App from './App';`
- containers only hold components

