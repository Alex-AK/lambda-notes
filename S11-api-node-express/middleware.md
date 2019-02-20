# Node and Express

### References

-

### Important

- order of operations matter with middleware

### Path

- `yarn add path`
- `const path = require('path');`
- write and read files from local
  - send a static HTML files to client (see error handling below)
  - good for writing a file with logged interactions / errors

### Middleware

- functions to extend behavior of a method
- most code we write in express is middleware (route handlers, .json(), etc)
- can be considered an array of functions, executed in order they are introduced to server
- express middleware is compatible with connect middleware
  - connect is a web framework for Node that only provides middleware layer, use as needed
- order of operations matter with middleware
- think of middleware like a reducer in redux, it's a chain
- `reducer chain = [r1, r2, r3, etc]`
- `middleware chain = [m1, m2, m3, e1, m4, m5, m6, e2, m7, m8, em]`

### Middleware Types

- build-in : not added to express by default, bring in as needed
  - global application of middleware, ex: server.user(express.json()),
- third party : npm modules we can import with require();
  - thousands of packages
  - most common:
    - Morgan : logger middleware, to show you who's using your API
    - CORS : cross origin resource sharing, enable cross site communication
    - Helmet : security layer
      - without added security, the response sends information someone could use to exploit server
      - helmet sends back generic headers that are more secure
- custom build : functions we write to perform certain tasks

```
// fallback middleware function

const fallback = (req, res) => {
  res.status(404).send("Ain't nobody got time for that!")
}

// put right before server.listen(), or module.exports
server.use(fallback())

```

### Custom Middleware

- add new functionality that express doesn't provide
  - this was intentional, for flexibility in the package
- adding middleware allows us to extend express without modifying the source code
- two step process
  - write a function that receives 3 (normal) or 4 (error handling) arguments
- `next()` tells express your middleware is ready to move into the next middleware queue
  - if `next()` is not called, or a request isn't sent, a timeout error will occur
- middelware can modify `req` and `res`, but it doesn't have to
- middleware can also stop requests by sending a response back
- place middleware at top of server so it's accessible to all handlers

### Regular Middleware

```
// custom logger middleware
 const logger = (req, res, next) => {
     console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'Origin'
    )}`
  );
   next();
 }

 server.use(logger());
```

```
// custom authentication middleware

const atGate = (req, res, next) => {
  console.log("At the gate, about to be eaten");
  next();
}

server.use(atGate());

const auth = (req, res, next) => {
  if (req.url === '/mellon') {
    next();
  } else {
    res.send('You shall not pass!')
  }
}

// place middleware directly in a route to make it apply only to single route
server.get('/mellon', auth, (req, res) => {
  console.log('Gate opening...');
  console.log('Inside and safe!');
  res.send('Welcome Traveler!');
})

```

### Error Handling Middleware

- error handling is handled with a single argument
- the convention for that single argument will be an error object like this
  `next(new Error("error message"))`
- error handling middleware that handles full route should be placed at the end
- `middleware chain = [m1, m2, m3, e1, m4, m5, m6, e2, m7, m8, em]`
  - if error occurs on m1, m2, or m3, it will go to e1
  - e1 can decide to fix error and go to m4, or send error back to client
- most people start with a global error catch
- some applications don't need anything more than a global error handler

```
const express = require('express');
const path = require('path');

const server = express();

const errorHandler = ((err, req, res, next) => {
  console.log(err)
  res
  .status(500)
  .json({
    message: 'There was an error performing the required operation',
    error: err
  })
});

server.get('/download', (req, res, next) => {
 const filePath = path.join(__dirname, 'index.html');
 res.sendFile(filePath, err => {
   if (err) {
     next(err);
   } else {
     console.log('file sent successfully')
   }
 });
});




server.use(errorHandler())

server.listen(5000);
```
