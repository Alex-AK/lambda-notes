### Testing I

### Resources

- https://jestjs.io/
- https://jestjs.io/docs/en/expect (assertions)

### Important

- tools for git flow : source tree, you can view commit history and rollback to anytime you want

### Lesson

- what is automated testing and why it’s important.
- commonly used automated testing types.
- what is unit testing and the tooling it needs.
- what is Jest and it’s main features.
- how to write unit tests for existing JavaScript code.

### General

- testing ensures software quality, it runs test on commits if any changes occurred in the file.
- manual testing at scale would be tedious, and likely result in missed issues.
- testing helps verify correctness, minimizes risk of regression, acts as safety net if refactoring.
- always a good idea to test a few assertions to verify the test passes multiple situations

### Testing with Jest

- three options for testing
  - folder `__folderNameHere__` will run tests
  - file name `anything.test.js` will run tests
  -

### No Automated Testing

- software needs to be tested manually.
- as the application grows it takes longer to test it.
- higher risk of introducing regressions. Code that used to work, breaks unexpectedly.
- uncertainty about the software working correctly on all cases, including edge/corner cases.
- making changes becomes exponentially slow.
- angry customer due to product failures.

### Types of Testing

- unit testing : testing individual code in isolation
- integration testing : testing code when paired together
- component testing : verify component output remains consistent
- end to end : slow to execute
- snapshot testing : checks current output against prior output, fails with any change to component
- coverage testing :
- functional testing :
- performance testing :

### Tooling

- test runner : Mocha, Jasmine, Jest, QUnit
- assertion library : Chai, Assert, Jest, Jasmine

### Example

- basic test

```
// production code
export.add (a, b) => {
  return ___
}


// test file
const math = require('./math)

test('adds two numbers', () => {
  //assertions using matchers
  expect(math.add(2,2)).toEqual(4)c
})
```

- assertion

- matcher
