### React Testing II

### Resources

- https://testing-library.com/react

### Important

### Homework tips

- check which classes
- check for disabled or enabled
- check for default props
- check when class is locked / unlocked that text rendered is correct
- write 5-10 tests per component for MVP

### Lesson

### Tips

- as soon as someone reports a bug, you write a test for it, to ensure it doesn't reappear
- concentrate on the testing, it will take time to understand what and where to test
- use `.skip` and `.only` for running specific tests

### What to Test?

- does it render without failing
- does it render the expected output
- does it render with the correct values based on props
  - does it render when you pass in mock state
  - testing default state can be a bit trickier - pull it from the component?
- does it handle events correctly
- what about invalid input

### Good Unit Tests

- independent of other tests
  - should not be concerned with other tests or external values
- runs fast, each test should be milliseconds not seconds
- test one thing (unit of functionality), multiple expects is okay
-

### Snapshot : Example in react-test/demo

- checks the output of the component
- doesn't care about functionality of the component
- it's good to establish a snapshot of a component when it is confirmed working as intended
  - brittle test, but better than nothing
- serializes component and checks against last established component.
- snapshot will know about dynamically rendered props, handles dynamic components

### Mocking

- mock function instead of pulling in the actual function from the component.
  - example: mock an API call and test results instead making calls to actual API (may be costly)
  -
- what should you mock?

  - API calls

- const myMock = jest.fn()
- const myMock = jest.spyOn(object, methodName)
