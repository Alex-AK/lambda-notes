# HTTP / AJAX I

### References

- https://repl.it/@AlexAK/Handling-Promises
- https://codesandbox.io/s/5wwon82yrp (Ajax follow along)
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

### Promises and Async Code

- async code is what makes it possible for JS engine to do 2 things at the same time
  - use async to execute code while fetching external data
  - create a helper object, called a Promise to let browser know an async task has finished
- Promise is an object with a few properties
  - instantiate a new Promise with `new Promise` and pass a callback that receives `resolve` and `reject` funtion
  - if successful, `resolve` is called, if rejected `reject` is called
  - when a Promise is resolved or rejected, we use the methods `.then()` or `.catch()` to tell engine what to do next

```
  const asyncFunction = () => {
    return new Promise ((resolve, reject) => {
      if (asyncFinishedSuccessfully) {
        resolve (dataObject);
      } else {
        reject(errorMessage)
      }
    });
  };

  asyncFunction ()
    .then((dataPassedFromResolve) => {
      console.log(dataPassedFromResolve)
    })
    .catch((errorPassedFromResolve) => {
      console.log(errorPassedFromResolve);
    });
```

### Making API calls

- when making API calls, we usually invoke a function that, under the hood, will return a promise and handle calling resolve() or reject()
- in these cases, we don't have to create a new Promise, but we still have access to .then() and .catch()
- if call is accepted, code runs `.then()` if error, `.catch()` is called

```
    axios.get(`http://somecoolurl.com`)
       .then(response => {
         // response is the response we get back from the server
         // in react we set the state of our component with the data that we get back from the request.
         console.log('response')
       })
       .catch(err => {
         // if something goes wrong, we handle any errors here
       });
```

### AJAX

- Ajax is not a language or tool, it's a concept
  - generic term for JS techniques to connect with server without reloading pages
- it's a way to exchange data with a server, and update part of webpage, without reloading entire page `THIS IS KEY`
- can use tool `axios` or use browser's `fetch` API

### HTTP

- network protocol or a set of rules that govern the way web clients communicate with web servers
- these rules contain methods that we use to perform CRUD operations

- HTTP Methods (often called HTTP verbs - what action are we trying to accomplish)

  - POST : we want to create a new resource on the database : CREATE
  - GET : we want to read data from the database : READ
  - PUT : we want to update data that is currently on the database : UPDATE
  - DELETE : we want to delete data from the database : DELETE

- HTTP Status Codes - https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

  - what the server might sends back in response to HTTP request

  - success : level 200
    - 201 : created
    - 202 : accepted
  - redirect : level 300 (not seen often)
  - error : level 400
    - 400 : bad request
    - 401 : unauthorized
    - 404 : page not found
  - server error : level 500
    - 500 : internal server error

### Axios

`yarn add axios`
`import axios from 'axios'`

-
