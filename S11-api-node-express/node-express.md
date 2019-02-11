# Node and Express

### References

- https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
- https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82

### Node.js

- server side JS, allows JS to run outside browsers
- JSON to send information back and forth between applications

### Advantages

- use same language on server and browser, no context switching
- single threaded
- async built into JS, runs on a single CPU
- access to NPM registry

### Disadvantages

- we lose the ability to use the right tool (language) for the job
- single threaded : cannot take advantage of servers with multiple threads
- async is harder to learn for non JS developers
- NPM registry paradox of choice
- NPM may introduce vulnerabilities into code

### How To?

- write JS in terminal
- use node to execute a JS file (ex servers from previous lessons)

### Switching from Paradigm of Window object to Console object in JS

- lose some object methods you are used to, look into this to know what you have

### Assignment : write a simple server w/ node

- use node HTTP module to abstract away the complex network related operations
- write a single request handler function that will handle all the requests to the server
  - request handler is a function that takes the request coming from the client and produces the response
  - the request handler takes two arguments, a request and a response

### Node Express

- framework that sits on node JS server, wraps around http
- it's like react for your back end (Vanilla JS : React & Node : Express)
- extra functionality (middleware, routing, eloquent API)
- simplifies need to write extensive code

### What Can It Do?

- server single page applications
- build RESTful web services that work with JSON
- serve static content like HTML, images, audio, PDFs, and more
- power real-time applications using web sockets and webRTC

### Express Core Features

- middleware : functions that get the request and response objects, can perform operations on them, and can either move into the next middleware, or return a response back to the client
  - logging requests and security through authentication
  - express middleware stack is essentially an array of functions
  - when a user requests a resource at your route, it will operate on first function, then pass to next, until you send a response back
  - middleware CAN change the request or response but it doesn't have to
- routing : a way to select which request handler function is executed based on the URL and which HTTP method was used
  - helps break application into smaller parts
  - application broken up in terms of routers, a single route can serve up our SPA and another for our API
  - each router can have it's own middleware and routing
- convenience helpers : provides additional functionality out of the box
  - has things put together so that you don't have to
  - extension methods added to the request and response objects
    - examples: response.redirect(), .status(), .send(), request.ip
- views : provide a way to dynamically render HTML on the server and even generate it using other languages
  - not something we're going to get into

### Representational State Transfer (REST)

- set of principles introduced in 1999
- a way of designing and distributing software
- recommendation NOT a standard
- other options exist and are gaining popularity, such as GraphQL

### Principles

- everything is a resource
- each resource is accessible via a unique URI
- resource can have multiple representations
- communication is done over the stateless protocol (HTTP)
- management of resources is done via HTTP methods

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
- code on demand
  - server sends resource as needed
  - client only needs to know how to execute code, and read code it receives back
