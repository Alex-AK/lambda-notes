# Responsive Design I


### References
  - https://htmlmag.com/article/an-introduction-to-css-preprocessors-sass-less-stylus
  - http://lesscss.org/
  - https://codepen.io/lambdaschool/pen/XyMGKe

### Important
  - Syntax (LESS) -> Compiler (JavaScript) -> CSS
  - never edit compiled code (.css file) when using a preprocessor
  - don't edit the css file, .less file will overwrite it every time you save
  - git ignore .css file on github so there are no merge conflicts when working with multiple people
  - then on production level, include the final merged .css file
  - not ideal to go more than three selectors deep
    - ask yourself if you need the first in the chain (if fourth is present)

### Terminal Commands for Less
  - lessc -v: checks version of less
  - less-watch-compiler `<less folder (index.less file)>` `<output folder (style.css file)>` index.less
    - library watches for less file changes and compiles to .css file


## LESS Nesting
  - important concept to know
```
// Header Styles

.container {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid red;
  
  header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    align-items: baseline;
    
    h1 {
      font-size: 2rem;
    }
    
    nav {
      display: flex;
      width: 300px;
      justify-content: space-evenly;
      
      a {
        font-size: 1.2rem;
        color: red;
      }
    }
  }
}
```

## Nesting Media Queries
```
// Header Styles
  header {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    margin-top: 20px;
    align-items: baseline;
    
    @media(max-width: 800px) {
      background: gray;
    }
    
    @media(max-width: 500px) {
      background: blue;
    }
  }
```

## Variables
  - important concept to know
  - look into interpolation
```
// Variables
  @nav-color: @persian-blue;
  @persian-blue: #2324D7;
  @main-font: Georgia, serif;
  
  html {
    font-size: 62.5%;
    font-family: @main-font;
  }

  a {
    font-size: 1.8rem;
    color: @nav-color;
  }
```

## Variable Interpolation
  - likely won't use this for our purposes
  - look into this
  - variable within a variable

## Lazy Evaluation
  - important concept to know
  - variables can go anywhere since they are processed first
  - good to put them at the top of page for ease of development


## Mixins
```
// Mixins, () ensures mixin is not compiled into css
  .center() {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .custom-font-rules() {
    font-size: 3rem;
    color: orange;
  }

  .center-font-rules() {
    .center;
    .custom-font-rules;
  }

  .main-content {
    .center-font-rules;
  }
```


## Parametric Mixin
```
  .main-content {
    height: 200px;
    .layout(space-between, flex-end);
  }

  .layout(@j-content, @a-items) {
    display: flex;
    justify-content: @j-content;
    align-items: @a-items;
  }
```
