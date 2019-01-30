# Redux Fundamentals II

### References

- https://learn.lambdaschool.com/fsw/module/recsoiwnjzgurrxyh
- https://github.com/elgerlambert/redux-localstorage
- https://codesandbox.io/s/ykw8q272zx (follow along)
- https://codesandbox.io/s/p3jp970w7x (answer key)

### Redux Terminology Basics

- store : in charge of data
- reducers : in charge of updating store
  - in Redux the reducers are synchronous by default
- actions creator : a function that dispatches an action
- action : tells reducer how to update store and what to update it with
- components : react UI
  - components receive state from store as needed

### Follow Along

- `redux-logger` is a middleware package that will console.log your actions as they flow through the action creators
- NOTE: if you use `redux-logger` with other middleware packages, make sure logger is passed to applyMiddleware last.

`yarn add redux-logger`

`import logger from 'redux-logger';`

```
  import { applyMiddleware, createStore } from 'redux';
  import logger from 'redux-logger';

  const store = createStore(
    reducer,
    applyMiddleware(logger)
  );
```

### Thunk and Async API calls

- Redux Thunk is a middleware created by Dan Abramov, that provides the ability to handle asynchronous operations inside our Action Creators
- https://codesandbox.io/s/vy6148rx97

`yarn add redux-thunk`

`import thunk from redux-thunk`

```
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );
```

```
<!-- action creator with thunk -->
  import axios from 'axios';

  export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
  export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
  export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL';

  export const getPokemon = () => dispatch => {
    dispatch({ type: FETCH_POKEMON_START });
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then(res =>
        dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results })
      )
      .catch(err => dispatch({ type: FETCH_POKEMON_FAIL, payload: err }));
  };
```

```
<!-- reducer is now receiving payload after async function resolves -->
  import { FETCH_POKEMON_START } from '../actions';

  import {
    FETCH_POKEMON_START,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAIL
  } from '../actions';

  const initialState = {
    pokemon: [],
    error: '',
    isFetching: false
  };

  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_POKEMON_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_POKEMON_SUCCESS:
        return {
          ...state,
          pokemon: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_POKEMON_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }

  export default reducer;
```
