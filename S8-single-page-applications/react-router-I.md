# React Router I

### References

- see avengers-app for follow along demo
- https://codesandbox.io/s/o51m83q83y

### Important

-

### Goals

- explain the difference between client-side routing and sever-side routing
- add React Router to an application and set up basic routing
- describe the `Route` component and set up routes within a React Application
- create dynamic routes using URL parameters and the `match` object
- use the `Link` component to navigate between routes

### Client vs Server Side Routing

- navigation through websites and applications (URLs)
- when we route to a URL, the website requests information that lives somewhere else
- website requests data from server, server sends it to website, browser renders

#### Server Side - handled by server

- pros: better for SEO, only requests data that's needed
- cons: renders full page on request, may be slow

- navigate to webpage
- website requests data
- server returns html, or template, etc
- fresh page is loaded on the server each request

#### Client Side - handled by browser

- props: routing between views is faster, smooth transitions and animations can be added
- cons: first website needs to be loaded first, may download data you don't need, more setup work

- JS within an app, manages the data from it's own memory
- browser now has what it needs in memory to render any page
- if extra data is needed, API request is made for only the data
- server is no longer compiling, browser doesn't need to refresh

### React Router v4 Philosophy

- v4 is a rewrite, introduced dynamic routing
- routing takes place as app is rendering
- gives declarative way to setup routes

### Setup

- `yarn add react-router-dom`

- `import {BrowserRouter as Router} from 'react-router-dom`

- wrap Router around App in ReactDOM.render in index.js
  `ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))`

### <Route> Component

- render page based on path
- declarative `<Route path="/users" component={Users} />`
  - Route requires path you want and component you want it to render

### Examples

- user requests `/` so we will mount `Home`
- user requests `/contact` so we will mount `Contract`
- user requests `/about` so we will mount `About`
- Regex will recognize the `/` in `/contact` and `/home` and render `Home` and `another component`
  - introduce `exact` prop

```
<Route exact path="/" component={Home} />
<Route path="/contact" component={Contact} />
<Route path="/about" component={About} />
```

### Dynamic Routes

- browser's URL can hold on to some dynamic data we may need
- browser accomplishes this using 'params'
- when to use?
  - app has list of users, each has an `id` property
  - we want to build a page to view a single user when we click on a user
  - we set `id` as a param in the URL, Router will take care of conditional rendering
  - `:` is interpolating the `id`
  - `match` passes the user `id` as a `string`
  - must compare a string to a string, interpolate over the number id coming in

```
  `<Route path='/users/:userId' component={SingleUser}>

  function SingleUser = props => {
    const id = props.match.params.userId;
    const singleUser = userList.find(user => `${user.id}` === id);

    return (
      <div>
        <h2>{singleUser.name}</h2>
      </div>
    )
  }
```
