# HTTP / AJAX II

### References

- https://codesandbox.io/s/o51m83q83y

### HTTP Methods

- POST : we want to create a new resource on the database : CREATE
- GET : we want to read data from the database : READ
- PUT : we want to update data that is currently on the database : UPDATE
- DELETE : we want to delete data from the database : DELETE

### POST

```
  addItem = e => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/items`, this.state.newItem)
      .then(res => {
        this.setState({ items: res.data });
        this.props.history.push("/shop"); -> this redirects to shop when item is added
      })
      .catch(err => console.log(err));
  };
```

### Getting Router props to Parent Component

- use `withRouter()` HOC, pass in parent component to gain Router props
- callback component gains `.history()` `.match()` and `.location()`
- make sure to pass `props` into `constructor()` and `super()`
- refer to props with `this.props.`

```
const AppWithRouter = withRouter(App);
ReactDOM.render(<Router><AppWithRouter /></Router>, document.)
```

### DELETE
