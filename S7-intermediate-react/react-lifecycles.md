# React Lifecycles

### References

- https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
- https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

### Important

-

# Lecture Notes

### React Component

- when we extend the base class `Component` we gain access to lifecycle methods
- this allows us to control when things happen during the lifecycle
- three phases: mounting, updating, unmounting

### render

- render runs the return and displays components to UI
- render reruns anytime there is a change in state
- overlaps mounting and updating phase

```
  render() {
    return (
      <p>Code goes here</p>
    )
  }
```

### didMount

- the components moment of birth
- often used for API calls to bring data in from server or database
  - initialize state data
- once component mounts, code runs (ie API call)

- constructor function is called and state data is initialized
- can receive props and place them on component state
- render is then invoked and JSX elements are transformed into DOM elements
- after render is called, componentDidMount will be invoked

```
  componentDidMount() {

  }
```

### shouldComponentUpdate

- if React has any doubt the component needs to be rendered, it will run render
  - this can be costly and often unneeded
- this method gives us logic to make component render when we want it to render

  - returning true makes component operate as normal
  - returning false will prevent render from running when props or state changes

- Any new props received from a parent, will be triggered updates to the child
- setState is not directly part of lifecycle, but any change to state will call render by default

```
  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  componentDidUpdate () {

  }
```

### componentWillUnmount

- teardown or cleanup your code before your component disappears
- commonly used to remove event listeners after it occurs once
  - (ie window resize event listener)

```
componentWillUnmount () {
  // remove event listeners after it occurs once
}
```

# Important to Know, Not Often Used

## New Methods Being Introduced

### getDerivedStateFromProps

- React team wrote a blog about how you probably don't need this
- https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
- used for the rare case your component needs to take incoming props its receiving from parent and set it's own state based on those props

```
  static getDerivedStateFromProps(props, state) {
    // return the new, updated state based upon the props

  }
```

### getSnapshotBeforeUpdate

- creates a 'backup' of the current way things are
  - likely an object with multiple points of data called snapshot
- React team wrote a blog about how it's not a commonly needed method
- https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate

```
  getSnapshotBeforeUpdate() {

  }
```

## IMPORTANT - Below are no longer supported

### willReceiveProps

- anytime component receives props, it will run
- runs any time parent component passes initial props
- used to check if new props differ from original props, see code below
- will be entirely removed in React 17, good to know for legacy code

```
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // do something important
    }
  }
```

### componentWillMount

```
  componentWillMount() {

  }
```

### componentWillUpdate

```
  componentWillUpdate() {

  }
```
