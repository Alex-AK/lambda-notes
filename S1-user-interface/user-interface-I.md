# Sprint I: User Interface I
## Semantic HTML
Specific code used for communicating importance and to SEO and programmer
Syntax: programming grammar for language.

### References
  - https://codepen.io/lambdaschool/pen/QJbWEy?editors=1100
  - w3.org - dense documentation on standards
  - w3schools.com
  - https://www.w3schools.com/htmL/html5_semantic_elements.asp
  - https://gsnedders.html5.org/outliner/
  - https://validator.w3.org/

### Tags
  - html - holds everything
    - HT in HTML - Hyper Text
    - ML in HTML - Markup Language
  - head
    - meta: holds description information
  - header: top section of the page (preferred place for H1)
    - h1: good place for title of banner
    - nav: block for navigation
      - a: anchor tag
        - href: attribute - hypertext reference
  - body: holds content
  - h1-h6: importance hierarchy for SEO and communicating importance on webpage.
    - only H1 per webpage
    - h4-h6: not often used (?)
  - p: telling the browser and search engine
  - section: tells the browser and programmer that this is a section of paired information
  - article: great for sharing content, SEO will know you want to share this content
  - aside: NOT indexed by browser for SEO, usually used for marketing campaigns or ads
  - div: not semantic, but can be used for css use(?)
  - footer: bottom section of the page for footer content


```
<a href="https://lambdaschool.com" target="_blank"> This is a hyper text reference </a>
```

## CSS: Cascading Style Sheets
### Level of Importance
- `*` (universal) < elements < classes, psuedo-classes, attributes < IDs < inline styles < !important
- order of elements, classes, elements matters since it's cascading down the sheet

##### Universal selector: individually selects every element and applies styling
```
  * {
    color: red;
  }
```

##### Pseudo-Classes
```
li:last-child {
  color: red;
}
```
##### ID elements
- not often used because they are so heavy and specific

##### !important selector
- !important - override any previous styles for that given property
- Try to avoid using !important unless you must use it.
- The only need I could imagine is if a 3rd party UI library was overwriting your styles and you needed to overwrite theirs.
