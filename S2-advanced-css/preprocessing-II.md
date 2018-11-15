# Responsive Design I


### References
  - https://htmlmag.com/article/an-introduction-to-css-preprocessors-sass-less-stylus
  - http://lesscss.org/
  - https://codepen.io/lambdaschool/pen/bQWXwg?editors=1100
  - https://caniuse.com/

### Important
  - 

### Terminal Commands for Less
  - 


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

  .border-radius(@radius) {
    -webkit-border-radius: @radius;
      -moz-border-radius: @radius;
        border-radius: @radius;
  }
```

##  Named Pameters
```
  .layout (@j-content: center, @a-items: center) {
    display: flex;
    justify-content: @j-content;
    align-items: @a-items;
  }

  header {
    .layout(center, );
  }

```

## The `@arguments` variable 
```
.box-shadow(@x: 0; @y: 0; @blur: 1px; @color: #000) {
  -webkit-box-shadow: @arguments;
     -moz-box-shadow: @arguments;
          box-shadow: @arguments;
}
.big-block {
  .box-shadow(2px; 5px);
}
```

## Namespacing / Setting Scope for Mixins
- exporure to this idea, it's an organizational concept
- not needed, but helpful for organization
- mixin properties inside a more complicated selector
- you can stack up multiple classes
```
#fsw16 {
  .layout(
    ...
  )
  .border-radis()
}


.container {
  margin: 10px 0;
  #fsw16.layout;
}
```

## Functions
  - limited on list provided functions
  - color operations are most helpful
```
button:hover {
  darken(@button-color, 20%)
}

```


## Escaping
  - used heavily in media queries, not much in other cases
```
  // =================== media queries 
  @mobile: (max-width: 500px;);
  @tablet: (max-width: 800px);


  @media @phone {

  }
```

## Importing
  - using multiple files to style a page
  - separating out files (see below)
  - index.less file holds imports, no code


  ```

  // ==================== The Cascade Matters!
  // Variables and Mixins Go Here
    @import "variables";
    @import "mixins";

  // General Styles and Reset Go Here
    @import "reset";
    @imort "general-styles";

  // Components Go Here
    @import "header";
    @import "cta";
    @import "main-content";
    @import "footer";
  ```
