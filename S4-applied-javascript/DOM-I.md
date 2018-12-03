# DOM I

### References

- https://codepen.io/lambdaschool/pen/jvjjGB?editors=1011
- http://bioub.github.io/d3.DOMVisualizer/

### Important

- DOM is an object representation of HTML elements of a webpage.
  - code is given to browser and converted into objects

## Documemnt Object Model - DOM

- sets up rules to link HTML with JS
  - DOM is not JS proper, but it's the only recommendation to manipulate websites
    - DOM is a web API
- DOM is broken down into nodes with specfic numbers assigned to them

## DOM Tree

- DOM is a tree like structure made up of nodes nested inside eachother
- each node has a value so DOM can interact with different languages
- vast majority of a webpage is made of element nodes and text elements
- document
  - root element: html
    - element: head
      - element: title
        - text: "my title"
    - element: body
      - element: h1
        - text: "this is a heading"
      - element: a
        - text: "this is a link"

## How to Access Nodes

```
  <div class="container home">
    <header>
      <h1 class="main-header a b c d">Dom Manipulation</h1>
      <nav class="main-nav">
        <a href="#" class="nav-item">Home</a>
        <a href="#" class="nav-item">About</a>
        <a href="#" class="nav-item">Blog</a>
        <a href="#" class="nav-item">Contact</a>
      </nav>
    </header>

    <section class="main-content">
      <h2 id="first-heading">Properties Tutorial</h2>
      <p>No, no, no. A vigilante is just a man lost in scramble for his own gratification.</p>
      <h2 class="second-heading">I am the DOM</h2>
      <p>You know what you said about the structures becoming shackles.</p>
      <img class="custom-img" src="" alt="Kitty image" />
    </section>
  </div>

```

- put selector in storage for later use and application of Document methods
- querySelector() selects first matching element, class, or id in CSS
- querySelectorAll() selects all matching elements and creates a NodeList (array-like collection)

```
  const mainHeader = document.querySelector(".main-header");
  const selectAnything = document.querySelector("");
  const selectEverything = document.querySelectorAll("a");

  console.log(mainHeader); // returns full node element: <h1 class="main-header">Dom Manipulation</h1>
  console.log(selectAnything); // returns first a tag

  console.log(selectEverything); // __proto__ points to NodeList
    // returns NodeList(4), has access to some array methods, but not all
    // can convert to full array in JS with Array.from();
    // why would we want to convert to proper array? Converts to proper JS array with more methods

  console.log(Array.from(selectEverything)); // now converted to proper JS array
    // __proto__ points to Array()

```

```
// older methods but good to know, not used anymore, may be seen in older code bases
const tagElements = document.getElementByTagName("a");
const classElements = document.getElementsByClassName("nav-items"); // returns HTMLCollection(3);

// still used but older
const myCustomId = document.getElementById("home-tag") // returns <a href="#" class="nav-item">Home</a>

console.log(tagElements); // returns HTMLCollection(4)
  // HTMLCollection was before NodeList and has even more limited methods
```

## Methods on Document Object

- do not use .innerHTML, security issue with interpolation
- .textContent turns everything into a string, no interpolation allowed.

```
  // .textContent
  mainHeader.textContent = 'Testhing'; // changes h1 source code

  // select element
  const kitty = document.querySelector('.custom-img');

  // change attribute within element selected
    // good for looping through database to change images
  kitty.src = 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350';

  // or use older method if needed for browser support
  kitty.setAttribute('src', 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350')

  kitty.alt = "Image of a cat";
```

- .style, change styles after page is loaded
- .style method is slower than styling in stylesheet
- .style inputs inline style into HTML, which is more specific than style sheet, unless !important
  - this is imporant for React when building components, not so much used for styling a standard webpage

```
mainHeader.style.color = "red";
mainHeader.style.backgroundColor = "red";
  // JS needs camel casing
```

- .className and .id
- gets and sets ALL class or id names
- wipes out previous class or id names, be careful

```
  console.log(mainHeader.className); // "main-header a b c d"
  console.log(mainHeader.className = "testing") // "testing"
```

- .classList returns DOMTokenList
- how you toggle classes on and off with eventListeners
- .toggle (conditional statement)
  - removes a given token from the last and returns false,
  - if token doesn't exist it's added and the function returns true

```
  console.log(mainHeader.classList.length); // 5
  console.log(mainHeader.classList) // DOMTokenList ["main-header", "a", "b", "c", "d"]
    // DOMTokenList has access to great methods!

mainHeader.classList.toggle("testing"); // conditional statement (see above)

// add and remove
mainHeader.classList.add("testing");
mainHeader.classList.remove("testing");

```

#

## DOM Element Creation

- this pattern is seen in react
- state (data) driven application
  - take databases of information and create thousands of unique webpages
  - is this how youtube homepage works?

```
// 1. Create Element
const newElement = document.createElement('a');  // <a></a>

// 2. Add values / attributes
newElement.href = '#'; // <a href = '#'></a>
newElement.textContent = 'testing'; //  <a href = '#'>testing</a>

// 3. Create a place for the element to land
const mainNav = document.querySelector('.main-nav');

// 4. Append or prepend the newly created element
mainNav.prepend(newElement);
mainNav.append(newElement);
```
