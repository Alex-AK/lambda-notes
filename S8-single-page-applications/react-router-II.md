# React Router II

### References

- https://codesandbox.io/s/4r15y63474
- https://reacttraining.com/react-router/core/guides/philosophy
- https://reacttraining.com/react-router/web/guides/quick-start

### Important

-

### Goals

- pass data to components through Router and Render Prop

### Render Prop

- a technique for sharing code between react components using a prop whose value is a function
- this function will return a component, the component we want to render
- Match, History, Location objects will all need to be passed explicitly
- need to make sure you use JSX syntax when referencing the component
- render props is not exclusive to react router

```
// Written out explicitly, not efficient
<Route path='/home' render={(props) =>
  <Component
    data={data}
    moreData={moreData}
    match={props.match}
    history={props.history}
    location={props.location}
  />
)} />


// Spread props
<Route path='/home' render={(props) =>
  <Component
    {...props}
    data={data}
    moreData={moreData}
  />
)} />

```
