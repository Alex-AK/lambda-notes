# JSON Web Token

### References

- https://ponyfoo.com/articles/json-web-tokens-vs-session-cookies
- https://jwt.io/

### Important

-

### Sessions v Tokens for Auth

- main difference, where the data state is kept
- sessions : auth state is kept on server
- tokens : auth state is kept in the token, client is holding token to authorize
  - data stored in token will ALWAYS be accessible even without secret

### Token Types

- auth token : holds id, helps get access/authorization token
- access/authorization token :
- refresh token : could be 10 minutes, you trust this token
  - don't have to go back to db to check access of the user
  - trust the information on the token is still valid, unless it's expired or blacklisted
  - long lived: many hours
  - when the token expires, server sends error (token expired), client will send back access token and refresh token, sever will check refresh token and generates a new access token.

### Server Side Token Handling

- sever is responsible for making token
- server needs to send token to client
- token middleware handles incoming token
  - on request, server needs to read and verify the token
  - server needs to make payload available to API
- since we don't store tokens on the server, we want to keep a jwtid
  - blacklist tokens to invalidate token with jwtid

### Client Side Token Handling

- client needs to store token
- send token on request, approval on auth
- destroy token on logout, no request needs to be made to server

### JWT

- We can use JSON web tokens (JWTs) to add authentication to a Web API. A JSON web tokens is an industry standard for transferring data between two parties.
- JWTs are cryptographically signed, typically using a secret with the HMACSHA-256 algorithm.

- A JWT is a string that has three parts separated by a period (.). Those are:
  - The header
    - the alg key specifies which algorithm was used to create the token, in this case the HMACSHA-256 algorithm was used, and the typ property classifies this token as being of the type JWT.
  - The payload
    - The payload includes claims (fancy name for things like permissions for the user) information or any other data we’d like to store in the token, which is most likely a user id. There are specific claims defined in the JWT standard, and you can also add your own properties to this object.
  - The signature
    - To create a signature, we must create a string by base64 encoding the header and payload together, and then signing it with a secret.

```
// header
{
  "alg": "HS256",
  "typ": "JWT"
}


// payload
{
  "sub": "1234567890", // standard - subject, normally the user id
  "name": "John Doe", // custom property
  "iat": 1516239022 // standard - The Date the token was issued, expressed in seconds since epoch.
}

// json web token example
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

```
