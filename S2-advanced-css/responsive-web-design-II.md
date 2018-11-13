# Responsive Design II


### References
  - http://pxtoem.com/
  - https://codepen.io/lambdaschool/pen/zMNayP?editors=1100

### Important
  - Accessibility is key, not just radical cases, but basic sight issues, etc
  - don't develop from a zoomed state
  - `font-size: 62.5%;` converts 1rem to 10px for easier conversion
  - good to use responsive units for fonts
  - good to use fixed units and breakpoints for layout design
  - don't set a height on anything

## Accessibility
  - responsive font size (not pixels - see below)
  - colors / contrast
  - zooming feature

## Preferred Method of Units 
  - font: rem
  - box-model: % or px
  - depends on dev environment

## Units
#### Pixels
  - hard codes pixels did not zoom in with the browser
  - this has been fixed with modern browsers
  - pixels do not change with user browser preferences

#### EM
  - relative units based on pixel value of parent container, would increase with zoom
  - difficult to keep track of compased to REM - see below
  - used for box model

#### REM
  - alternative to EM
  - instead of being based off of parent contanier, it's based off of one spot
  - based off of root tag `<html>` 
  - if no styling is applied to `<html>` default size is 16px
  - `font-size: 62.5%;` converts 1rem to 10px for easier conversion
    - place this in `<html>`

#### Viewport Width & Viewport Height
  - entirely based off of viewport (viewable area of screen)
  - use sparingly
  - maxes out at `height: 100vh;`
  - good for specific use cases
    - modal / popup `85vh` & `85vw`
    - massive layout pieces ie. background
  - don't use for:
    - navigation
    - box model

## Good Practice - template code from Josh
  ```
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  p {
    line-height: 1.25;
    margin: 10px 0;
  }

/* Responsive Image Techniques */
  img {
    max-width: 100%;
    height: auto; /* for cross broswer compatability */
  }

  .container {
    font-size: 1.6rem
    max-width: 1000px; /* good place to start, but should be based on analytics */
    margin: 0 auto;
  }

  ```

