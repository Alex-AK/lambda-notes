# Redux Fundamentals I

### References

- https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207
- https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6
- https://codesandbox.io/s/42xx48wwlw ()

### Redux Terminology Basics

- store : in charge of data
- reducers : in charge of updating store
- actions creator : a function that dispatches an action
- action : tells reducer how to update store and what to update it with
- components : react UI
  - components receive state from store as needed
  - import actions as needed, used with event listeners

### Why Redux

- problem : data management ease
- solutions
  - central source of truth, keeps all data in store
  - helps manage large data sets
  - allows components to receive state and props as needed

### When To Use Redux

- when state is needed to be synced and shared across component trees
- when developer decides data is large enough to implement it

### Flux Cast of Character

- action creator : creates an action with a type and a payload
  - the type will be one of the types you have defined as actions in your system
  - ie. MESSAGE_CREATE or MESSAGE_READ
  - actions list is an overview of how an app behaves, how a user interacts with the app, and how data is changed and updated
  - once action creator has created the action, it passes the action to the dispatcher
- dispatcher : keeps a list of all the stores that it needs to send actions to
  - when an action comes in, dispatcher passes action around to different stores, in a synchronous manner
  - if one store needs to be updated before another, you can set this up with `waitFor()`
  - flux dispatcher sends action to all stores, regardless of action type (I think redux address this?)
- store : holds all application state and state changing logic
  - cannot directly request that the store changes state, you must follow proper procedure (must submit an action via action creator / dispatcher pipeline)
  - store holds switch statement that looks at action type to decide whether or not this store cares about this action
  - once store has made a change to state, a change event occurs, notifying the controller view that the state has changed
- controller view and the view : renders state and accepts user input

### Flux and Application Initialization

- First there’s the setup: application initialization which only happens once.

1. Stores let the dispatcher know that they want to be notified whenever an action comes in
2. Then the controller views ask the stores for the latest state
3. When the stores give the state to the controller views, they pass that state along to their child views to render.
4. The controller views also ask the stores to keep them notified when state changes.

### Flux and Data Flow

- Once the setup is done, the application is ready to accept user input. So let’s trigger an action by having the user make a change.

1. The view tells the action creator to prepare an action.
2. The action creator formats the action and sends it off to the dispatcher.
3. The dispatcher sends the action off to the stores in sequence. Each store gets notified of all actions. Then the store decides whether it cares about this one or not, and changes the state accordingly.
4. Once it’s done changing state, the store lets its subscribed view controllers know.
5. Those view controllers will then ask the store to give them the updated state.
6. After the store gives it the state, the view controller will tell its child views to rerender based on the new state.

### Redux Takes Flux and Improves

- redux separates state and methods into separate objects, this allows state to be saved in one object while the logic can be reloaded
- redux takes a snap shot of state every time state is changed, allowing time travel debugging
- redux allows for third party library integration

### Redux Cast of Characters

- action creator : creates an action to change state
  - unlike Flux, action creators in redux do not send an action to the dispatcher, instead they return a formatted object
- store : all state changes must be made in the store, in redux there is only one store, it holds entire state for application
  - redux uses reducers to hold logic for state change
- reducers : copies slice of needed state, then runs change logic on copy
  - reducer passes their copies back to the root reducer, which pastes the copies together to form the updated state object
  - large applications might have a whole tree of reducers, creating a hierarchy
- the view : redux has smart components and dumb components
  - smart components : in charge of actions, can pass as props to dumb components
    - container for dumb components, do not have their own styles
  - dumb components : manage rendering data to DOM and styles
- view layer binding : connects store to views (use react-redux with react)
  - the view layer binding introduces three concepts:
    1. The Provider component: This is wrapped around the component tree. It makes it easy for the root component’s children to hook up to the store using connect().
    2. connect(): This is a function provided by react-redux. If a component wants to get state updates, it wraps itself using connect(). Then the connect function will set up all the wiring for it, using the selector.
    3. selector: This is a function that you write. It specifies what parts of the state a component needs as properties.
- root component : redux uses root to create store, set reducers, and bind view layers to store

### How Redux Works

1. Get the store ready. The root component creates the store, telling it what root reducer to use, using createStore(). This root reducer already has a team of reducers which report to it. It assembled that team of reducers using combineReducers().
2. Set up the communication between the store and the components. The root component wraps its subcomponents with the provider component and makes the connection between the store and the provider.
   The Provider creates what’s basically a network to update the components. The smart components connect to network using connect(). This ensures they’ll get state updates.
3. Prepare the action callbacks. To make it easier for dumb components to work with actions, the smart components can setup action callbacks by using bindActionCreators(). This way, they can just pass down a callback to the dumb component. The action will be automatically dispatched after it is formatted.

### Redux Data Flow

1. The view requests an action. The action creator formats it and returns it.
2. The action is either dispatched automatically (if bindActionCreators() was used in setup), or the view dispatches the action.
3. The store receives the action. It sends the current state tree and the action to the root reducer.
4. The root reducer cuts apart the state tree into slices. Then it passes each slice to the subreducer that knows how to deal with it.
5. The subreducer copies the slice and makes changes to the copy. It returns the copy of the slice to the root reducer.
6. Once all of the subreducers have returned their slice copies, the root reducer pastes all of them together to form the whole updated state tree, which it returns to the store. The store replaces the old state tree with the new one.
7. The store tells the view layer binding that there’s new state.
8. The view layer binding asks the store to send over the new state.
9. The view layer binding triggers a rerender.

### Props Drilling & Context API

- drilling : when data needs to be passed down through components it's not needed in
- context : allows creation of global object, which can be referenced by any component

### Dustin Redux Tips

- access store in container components, then pass data down
- ALWAYS store logic for changing state in reducer, NOT in action
- as a developer, you get to choose the technologies in your app
- there is no preferred method of state management at the moment
- beware hooks are coming soon, which will allow react to

### Four Methods on Provider

- probably won't use these functions in your code

1. dispatch() :
2. getState() : gets latest state from store
3. replaceReducer() : think of this as reducer
4. subscribe() : watches for changes in store
