# User Interface III
### Flexbox
  - 
  - 
  - 
  - 

### References
  - https://scrimba.com/g/gflexbox
  - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  - https://codepen.io/lambdaschool/pen/mQVrYP?editors=1100

### Flexbox Cheatsheet

```
Flexbox Properties
    Parent (Flex Container)
        display: flex | inline-flex;
        flex-direction: row | row-reverse | column | column-reverse;
        flex-wrap: wrap | nowrap | wrap-reverse;
        flex-flow (shorthand for flex-direction and flex-wrap)
        justify-content (main axis): flex-start | flex-end | center | space-between | space-around | space-evenly;
        align-items (cross axis - adjust to individual sizes): flex-start | flex-end | center | baseline | stretch;
        align-content (cross axis - adjust to largest item): flex-start | flex-end | center | stretch | space-between | space-around;
    Children (Flex Items)
        order: <integer>;
        flex-grow: <number>; 
        flex-shrink: <number>; 
        flex-basis: <length> | auto;
        flex: shorthand for grow, shrink, and basis (default:  0 1 auto)
        
    align-self: overrides alignment set on parent
```

#### Flexbox Notes
  - `justify` is always the main axis (LR)
  - `align-items` is always the cross axis (TB)
    -`align-items: baseline;` good to line up nevaigation items
  - `align-content` does not work unless container has wrapping items.
  - source `order` is used with media queries.

#### Flex Box Module
  - Flex container
  - Flex item, only nests one level deep

```
    nav {
    display: flex;
    }

    <!-- flex container -->
    <nav>
    <!-- flex items -->
    <a href="#">
        <!-- flex box module does NOT reach this far! -->
        Home
    </a>
    <a href="#">About</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
    </nav>
```


#### Step 1 HTML
```
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

#### Step 2 CSS
```
.container {
  display: flex;
}

.container .item {
  width: 50px;
  height: 50px;
  background: lightgray;
  border: 1px solid black;
  margin: 20px;
}
```


