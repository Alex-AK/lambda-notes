# Sessions & Cookies

### References

- https://www.npmjs.com/package/express-session
- https://www.npmjs.com/package/client-sessions

### Important

-

### Lesson

- use in-memory sessions to persist authentication across requests
- restricting access to endpoints is a two step process:
  - write middleware to check that there is a session for the client
  - place that middleware in front of the endpoints we want to restrict

### Mitigate Risk

- use https / tls to prevent people from intercepting traffic
- keep transfer data limited, don't send sensitive data if you don't need to

### Auth workflow

- client sends credentials
- server verify credentials
- server creates a session for the client
- server produces and sends back cookie
- client stores the cookie
- client sends cookie on every request
- server verifies that cookie is valid
- server provides access to resource

### HTTP Methods

- body : contains the data portion of the message
- headers : headers are a key/value store that includes information about the request

### Sessions

- store user information that is used for various purposes
- this is adding state to the server / http requests
- one main use case is storing authentication data
- store auth data to allow user to navigate across site without having to verify each request
- each device will have a unique session, not per user

### Cookies

- transmit information between client and server
- to send cookies the server will add the `Set-Cookie` header to the response like so: `"Set-Cookie": "session=12345"`.
- browser will read the header and save a cookie called session with the value 12345.
- browser will add the `"Cookie": "session=12345"` header on every subsequent request and the server.
- not accessible from JavaScript or anywhere, they are cryptographically signed
- automatically included on every request
- unique to each domain / port + device pair
- cannot be sent to a different domain
- sent in the cookey header
- has a body that can have extra identifying information
- max size around 4KB

### Handling Sessions (see references for npm links)

- client-sessions
- express-session

### Storing Session Data

- ## memory cache (like Redis and Memcached)
- database

### Workflow for Cookie Use

- a cookie is a small key/value pair data structure that is passed back and forth between client and server and stored in the browser.
- the server use it to store information about a particular client/user
- workflow for using cookies as session storage:
  - the server issues a cookie with an expiration time and sends it with the response
  - browsers automatically store the cookie and send it on every request to the same domain
  - the server can read the information contained in the cookie (like the username)
  - the server can make changes to the cookie before sending it back on the response
    rinse and repeat

### Cookie Drawbacks

- small size (4kb)
- sent every request, increases size of request
- vulnerable to interception and decryption

### Storing Session In Memory

- data stored in memory is wiped when the server restarts
- causes memory leaks as more and more memory is used as the application continues to store data in session for different clients
- good for development due to its simplicity

### Storing Session In Memory Cache (Redis and Memcached)

- stored as key-value pair data in a separate server
- the server still uses a cookie, but it only contains the session id
- the memory cache server uses that session id to find the session data

- Advantages
  - quick lookups
  - decoupled from the api server
  - a single memory cache server can serve may applications
  - automatically remove old session data
- Downsides
  - another server to set up and manage
  - extra complexity for small applications
  - hard to reset the cache without losing all session data

### Storing Session Data in Database

- similar to storing data in a memory store
- the session cookie still holds the session id
- the server uses the session id to find the session data in the database
- retrieving data from a database is slower than reading from a memory cache
- causes chatter between the server an the database
- need to manage/remove old sessions manually or the database will be filled with unused session data
  - most libraries now manage this for you

```
  const session = require('express-session');

  // configure express-session middleware
  server.use(
    session({
      name: 'notsession', // default is connect.sid
      secret: 'nobody tosses a dwarf!',
      cookie: {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        secure: true, // only set cookies over https. Server will not send back a cookie over http.
      }, // 1 day in milliseconds
      httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
      resave: false,
      saveUninitialized: false,
    })
  );

  app.get('/', (req, res) => {
    req.session.name = 'Frodo';
    res.send('got it');
  });

  app.get('/greet', (req, res) => {
    const name = req.session.name;
    res.send(`hello ${req.session.name}`);
  });


  server.get('/api/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send('error logging out');
      } else {
        res.send('good bye');
      }
    });
  }
});
```

```
// middleware
function protected(req, res, next) {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.status(401).json({ message: 'you shall not pass!!' });
  }
}

// protected endpoint
server.get('/api/users', protected, (req, res) => {
  db('users')
    .then(users => res.json(users))
    .catch(err => res.json(err));
});
```
