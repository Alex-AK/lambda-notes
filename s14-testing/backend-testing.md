### Back end Testing

### Resources

- https://github.com/visionmedia/supertest

### Important

### Overview

- use unit testing to test the application logic
- use integration testing to test the route handlers and middleware
- write tests to verify API endpoint returns expected values and status code
  - also check for formatting (HTML, XML, JSON)

### Integration vs Unit Testing

- The tests we write for endpoints are called integration tests because they test how different parts of the system work as a whole.
- This is different from the unit tests we use to verify correctness of one unit of work in isolation.

### Supertest

- https://github.com/visionmedia/supertest
- we can use supertest to load an instance of our server
- we can send requests to the different endpoints and make assertions about the responses.

- We can use supertest to verify that making a POST request to a particular endpoint returns a 201 HTTP status code after successfully creating a resource, or that it returns a 500 code if the server ran into an error while processing the request. Writing such a test may look like this:

- save a reference to the server.
- use supertest to make a post request passing correct data inside the body.
- check that the server responds with status code 201.
- We can use the same technique to test middleware and endpoints.

## Components of an API

function name(args) => return something;

- routes/endpoints: url(data) => return response;
- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser

- when running on browser, you access window object (ie window.setTimeout)
- when running on Node, you access global object (ie global.setTimeout)
- Node environment allows access to more files that browser testing doesn't allow for security

### New Additions to Back end to Accommodate Testing

- cross-env : npm package used to abstract away OS differences setting .env variables
  - put as dev dependency
  - `"test": "cross-env DB_ENV=testing jest --watch --verbose",`

### Important

- setting environment
  - `DB_ENV=testing`
- separate database for testing so you can wipe it as needed without concern
- `knex migrate:latest --env=testing`
- `knex migrate:latest --env=development`
- `knex migrate:latest --env=production`

- break out listen from the server, so when you run tests it doesn't reattempt to listen
