# Responsive Design I


### References
  - https://www.markupbox.com/blog/fixed-vs-fluid-vs-adaptive-vs-responsive-layout/
  - https://www.mydevice.io/
  - https://codepen.io/davidgilbertson/pen/aBpJzO
  - https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862

### Important
  - `max-width: .. ;` will overwrite width declaration
    - not common practice to have `width` and `max-width`
    - `max-width` good with percent based layout
    - `min-width` not commonly used outside of media queries
  - we can't consume large amounts of L/R content - `approximately 600px`
  - min-width directly translates to mobile first design

## Fixed vs Fluid vs Adaptive vs Respsonsive

### Fixed
  - widths are fixed and sites don’t budge - very rigid
  - components do not adjust with screen size

### Fluid
  - percent width layout components based on viewport
  - components adjusts with screen size
  - no breakpoints

### Adaptive
  - multiple templates
  - screen size detected
  - template loads based on proper screen size
  - slower

## Responsive
  - one template loads
  - media queries detect screen size combined with percent based widths
  - media queries filter styling to display proper design layout
  - fast

### HTML meta tag
 - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
 - tag goes in `<head>` tag

### Media Query Rules
  - break points to account for top 15 devices used
    - 600px, 900px, 1200px, and 1800px
  - name your ranges sensibly
    - "portrait tablet" 
  - be declarative 
    ```
      @mixin for-phone-only {
        @media (max-width: 599px) { @content; }
      }
      @mixin for-tablet-portrait-up {
        @media (min-width: 600px) { @content; }
      }
      @mixin for-tablet-landscape-up {
        @media (min-width: 900px) { @content; }
      }
      @mixin for-desktop-up {
        @media (min-width: 1200px) { @content; }
      }
      @mixin for-big-desktop-up {
        @media (min-width: 1800px) { @content; }
      }

      // usage
      .my-box {
        padding: 10px;
        
        @include for-desktop-up {
          padding: 20px;
        }
      }
    ```

### max-width
  - desktop down approach
```
 /* At 768px And below do the following: */
  @media (max-width: 768px) {
    .box1 {
      background: brown;
      width: 400px;
    }
  }
```


### min-width
  - mobile first approach




