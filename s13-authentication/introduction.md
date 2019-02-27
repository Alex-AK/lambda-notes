# Authentication & Authorization

### References

- https://auth0.com/
- https://1password.com/

### Important

- check out master password extension
- very long passwords are the best
- never use the same password across multiple sites

### Lesson

- register user accounts
- login to prove identity
- logout of the system to invalidate the user’s access until they login again
- add a way for users to reset their passwords

### Authentication (authN)

- letting user establish identity, username / password
- process by which our Web API verifies the identity of a client that is trying to access a resource

### Authorization (authz)

- checking user identity and checking if they have access
- what can you do once I know who you are
- comes after authentication and determines what type of access, if any, a user has to a particular resource or part of it.

### Password Storage : Encrypting v Hashing

- Encryption is two-way that goes: plain text + private key = encrypted passord and then encrypted + ke = original password.
- Cryptographic Hashes are one way: parameters + input = hash. It is pure, given the same params and input it generates the same hash.
  - the preferred method of storing user passwords.

### Brute Force Attack Mitigation

- We aim to slow down hackers’ ability to get at a user’s password.
- To do so, we are going to add time to our security algorithm to produce what is known as a Key Derivation Function.
