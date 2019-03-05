### React Testing I

### Resources

- https://testing-library.com/react

### Important

- use data type testid on elements if you need a way to hook in, and can't math another way

### Lesson

- react-testing-library
- check if component renders
- check if component renders specific item / text / image / input
- check if event triggers properly / displays proper change from method

### Testing Structure

### Get By vs Query By

- get by will fail the test if expected fails.
- query by will return null if there is no element found.

### Notes

- test components the way a user would test them manually.
- how we test functions

  - setup the data/environment
  - invoke the function
  - make assertions

- how we test React components
  - setup the data/environment
  - render the component
  - make assertions

`component = (optionalData) => SomeUI`

- users don't know or care about implementation.
