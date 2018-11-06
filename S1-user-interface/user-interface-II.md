# User Interface II
### CSS Box Model
 - Content
 - Padding
 - Border
 - Margin

### References
 - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing

### Git Commands


#### Formatting of CSS
- broad styles at top of page, specific styles further down (`*` < elements < classes, psuedo-classes, attributes < IDs < inline styles < !important)
```
/* general styles at top */
  h1 {
    font-size: 40px;
    letter-spacing: 1.5px;
  }
  p {
    line-height: 1.25;
  }
/* page styles in middle */
  .container {
    background-color: grey;
  }
/* specific styles at bottom */
  #specific {
    background-color: blue;
  }
```

##### Content
  - width and height is first introduction to manipulating box model content.
  - 1100 px is a safe width to build websites up to.
##### Padding
  - with defined height and width, added padding will extend box beyond defined size.
  - To prevent this and pad the inside of the box, use:
  ```
    * {
      box-sizing: border-box;
    }
  ```
  - options for padding
  ```
  /* padding: T R B L */
  /* padding: T LR B */
  /* padding: TB RL */
  /* padding: TRBL */
  ```

##### Border
  - with universal box-sizing: border-box, border pushes in.
```
  .container {
    border: 2px solid black;
  }
```

##### Margin
 - margins stacking on top of each other will collapse.
 - if you put them next to each other they will add together.
 - how to center block level elements horizontally:
 ```
  .container {
    width: 800px;
    margin: 0 auto;
  }
 ```

### CSS Display Properties
##### Block
- all div element defaults are `display: block;`
- block level elements respect height, width
- block level elements allow element nesting inside
```
.example {
  display: block;
}
```

##### Inline
- inline elements do not respect height styling
- will only take up as much space as content, padding, border.
- examples of inline elements: `<a>` and `<span>` (for highlighting - styling)
- `<span>` tags are not accessible to screen readers.
- `<strong>` tags are accessible - you can also style them.
```
.example {
  display: inline;
}
```

##### Inline-Block
- inline applies only width of content, doesn't go full screen
- inline-block respects height.
- happy medium between display types.
```
.example {
  display: inline-block;
}
```

##### None
```
.example {
  display: none;
}

.example {
  visibility: hidden;
}

```

### Positioning
- `position: absolute;` used rarely, good for navigation.
- `position: absolute;` tries to find the nearest parent to move to.
- in order ot use `position: absolute;` parent element needs `position: relative;`
- `position: relative;` is used to establish a territory for the element with `position: absolute;`
- float is no longer used.

```
  .container header{
    position: relative;
  }

  .container header h1 {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
  }
```

- `position: fixed;` will stick to the page



### CSS Browser Reset
- reset vs normalize
- user agent stylesheet is default browser styling.
- this is why color: red assigned to a block element won't change the color of `<a>` tags.
- this is when you use a css reset to clear browser stylesheet.
- browser resets need to go at the top of the stylesheet.
- color is not part of css reset




#### Morning Coding Challenge
- quizzes will get harder as time goes on, submit the work at the end of 30 minutes anyways.
- a large part of programming is time management and working with other people.
- leave notes in code so you can come back to it later and finish the solution.
- start small by testing function with basic return.



```
const string1 = ['short', 'really, really long!!!', 'medium string just got a lot longer.'];

function longestString(arr) {
  let longest = "";
  for (i=0; i < arr.length; i++) {
    let currentItem = arr[i];
    if (currentItem.length > longest.length) {
      longest = arr[i];
    }  
  }
  return longest;
}

longestString(string1);
```


