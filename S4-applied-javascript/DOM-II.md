# DOM II

### References

- https://codepen.io/lambdaschool/pen/vQwOXW?editors=1010
- https://developer.mozilla.org/en-US/docs/Web/API/UIEvent
- https://javascript.info/
- https://javascript.info/bubbling-and-capturing

### Important

- DOM is very expensive to utilize on the app
- React, Vue, Ember abstract these away from you to the virtual DOM
- When we add event listeneer, the string type determines what object contructor to build
  - different object contructor events will have different methods
- user agent === browser 

### Event Listeners

```
// Step 1: Gain access to the part of the DOM you want to listen to
const myButton = document.querySelector('.btn');

// Step 2: Add Event Listener
myButton.addEventListener('click', function(event) {
  console.log("I was clicked!")
});


```

Event Handler: event in html that runs code

### Event Listener

- event in JS that runs cb function

```

```

### Events

- mostly using click, mouse over,
- some scroll events and some network events

```
  myButton.addEventListener('click', function(event) {
    console.log("I was clicked!")
  });

  // 'click' is the type, it determines which constructor to build
  // in this case "click" creates a MouseEvent constructor
  // MouseEvent devices from UIEvent, which in turn derives from Event

  //
```

### Bubbling and Capturing

```
  const home = document.querySelector('.home');
  const myButton = document.querySelector('.btn');

  home.addEventListener('click', function(e) {
    console.log("Home was clicked!") // log "Home was clicked!"
  });

  myButton.addEventListener('click', function(e) {
    console.log("Button was clicked!") // logs "Button was clicked!" AND "Home was clicked"
  });

```

### Stopping Propogation

- Dealing with layering issues with eventPropogation

```
const home = document.querySelector('.home');
const myButton = document.querySelector('.btn');

// Step 2: Add Event Listener
  home.addEventListener('click', function(e) {
    console.log("Home fired!")
  });

  myButton.addEventListener('click', function(e) {
    e.stopPropogation(); // prevents higher bubbled events from firing
    console.log("Button Fired!");
  });
```

### eventTarget vs currentTarget

```
  const myButton = document.querySelector('.btn');
  const nav = document.querySelector('.main-nav')

  myButton.addEventListener('click', function(e) {
    // What element did you click on specifically?
      console.log(e.target);
    // The element which is attached to the event listener
      console.log(e.currentTarget);
  });
```

### Prevent Default

- example: when you click the anchor tag, it always refresh's the page
- example: when you click submit on form, it always refresh's the page
- `.preventDefault` will prevent the default behavior from operating
  - usually used for controlling data flow, server requests, or preventing page refreshed when submitting data
- `event.stopImmediatePropagation()` is called, no remaining listeners will be called

```
const home = document.querySelector('.home');
const myButton = document.querySelector('.btn');
const aTag = document.querySelectorAll('a');

aTag[0].addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log("a tag was clicked!")
});
aTag[1].addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log("a tag 2 was clicked!")
});

myButton.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log("Button Fired!");
});

home.addEventListener('click', function(e) {
  console.log("Home fired!")
});
```

### Toggle Class on Click Event

```
const cta = document.querySelector('.cta');
const ctaBlock = document.querySelector('.cta-text');

ctaButton.addEventListener('click', () => {
  cta.classList.toggle('toggleMeRed');
});
```
