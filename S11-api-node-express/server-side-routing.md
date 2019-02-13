# Server Side Routing

### References

-

### Routing in Express

- one of expresses main features
- map incoming requests to servers from clients to appropriate request handler function
- based on URL and type of method used, it will trigger appropriate server method
- simplifies architecture of servers by keeping things organized

```
  server.get('/about', (req, res) => {
    res.status(200).send('<h1>about page</h1>');
  });

  server.get('/contact', (req, res) => {
    res.status(200).send('<h1>contact page</h1>');
  });
```

### Representational State Transfer (REST)

- set of principles introduced in 1999
- a way of designing and distributing software
  - most applications are split into multiple parts, front-end, back-end are generally running in different places, so we use this set of principles
- recommendation NOT a standard
- other options exist and are gaining popularity, such as GraphQL

### Principles (Important Bits from Luis)

- everything is a resource (categories you're trying to manage: users, hobbits, etc)
- each resource is accessible via a unique URI (Unique Resource Identifier, endpoint `/hobbits` etc)
- resource can have multiple representations (shows what's needed, id, name, bio, etc, based on methods)
- communication is done over the stateless protocol (HTTP)
  - request has a life cycle, start and end, a single request doesn't know about any other request
  - no shared state between client and server
    - client - makes request -> server - sends response -> client
- management of resources is done via HTTP methods

RPC Protocol `/getAllHubs` vs REST Protocol `send get request` to `/hubs`

### Constraints of REST

- client : server architecture
  - client (app) sends requests to server, and receives responses from server
- stateless
  - multiple clients (ios, web, android apps) can interact with server, sends interaction when it's requested
- cache items - this helps with performance
- each resource should be accessible through a single URL for a particular resource
- layered system

  - may have a single component in a layered system that doesn't interact with server
  - especially important given security need these days

  - we think it's like this: client <--> api
  - in reality it like this: client <--> isp <--> DNS Server <--> load balancers <--> api
    - could be more layers depending

- code on demand
  - server sends resource as needed
  - client only needs to know how to execute code, and read code it receives back

### Server Side Routing and Compartmentalizing

```
  node_modules
  User
    - userRoutes.js ()
  package.json
  server.js
  yarn.lock
```

```
// inside /users/userRoutes.js <- this can be place anywhere and called anything
const express = require('express');

const router = express.Router(); // notice the Uppercase R

// this file will only be used when the route begins with "/users"
// so we can remove that from the URLs, so "/users" becomes simply "/"
router.get('/', (req, res) => {
  res.status(200).send('hello from the GET /users endpoint');
});

router.get('/:id', (req, res) => {
  res.status(200).send('hello from the GET /users/:id endpoint');
});

router.post('/', (req, res) => {
  res.status(200).send('hello from the POST /users endpoint');
});

// .. and any other endpoint related to the users resource

// after the route has been fully configured, then we export it so it can be required where needed
module.exports = router; // it is recommended that this be the last line on the file
```

```
const userRoutes = require('/users/userRoutes')

// with it imported you can now use your routes without having the logic make the server code heavy

server.use('/users', userRoutes);
```

### Misc Notes:

- use async await any time you are resolving a promise, if node supports it
- async await is more
- use .then().catch() any time you want to work with promises on a version of node that doesn't support new syntax
