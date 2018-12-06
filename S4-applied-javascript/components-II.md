# Components I

### References

- https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
- https://codepen.io/lambdaschool/pen/wQVqoM?editors=1010

### Important

-

### `this` Keyword Review

### Data Attributes in HTML (dataset) and Building Components with Multiple Classes

- HTML elements usually only need one dataset
- associated with particular element but doesn't need defined meaning, it's an additional hook
- `data-*` syntax
- ability to link different divs together
- can be styled (see below), specificity between class and id

```
// set up reference in HTML
<div class="container">
  <div class="tab-links">
    <div class="link" data-tab="1">Tab 1</div>
    <div class="link" data-tab="2">Tab 2</div>
    <div class="link" data-tab="3">Tab 3</div>
    <div class="link" data-tab="4">Tab 4</div>
  </div>
  // match custom data attribute to tab clicked and related content
  <div class="tab-content">
    <div class="content" data-tab="1">Tab 1 Content</div>
    <div class="content" data-tab="2">Tab 2 Content</div>
    <div class="content" data-tab="3">Tab 3 Content</div>
    <div class="content" data-tab="4">Tab 4 Content</div>
  </div>
</div>

// style targeting for data-
// classes and data attributes work well together
  .link[data-tab='1'] {
    color: red;
  }

// accessing dataset in JS
  class Tablink {
    constructor(link) {
      // setting up the reference to our DOM node
      this.link = link;
      // setting up the reference to our custom data attribute
      this.linkData = this.link.dataset.tab; // "1,2,3,4"
      // setting up the reference to our matching tab-content's data attribute
      this.tabContent = document.querySelector(`.content[data-tab='${this.linkData}']`);
      // Creating a new version of tabContent
      this.tabContent = new Content(this.tabContent);
      // this.link.addEventListener('click', this.linkClick.bind(this));
      this.link.addEventListener('click', () => { this.linkClick() });
    }
    // methods
    linkClick() {
      this.tabContent.toggleContent();
    }
  }

  class Content {
    constructor(tabElement) {
      this.tabElement = tabElement;
    }
    toggleContent() {
      this.tabElement.classList.toggle('change');
    }
  }

  let links = document.querySelectorAll('.link');
  links = links.forEach( link => new Tablink(link));

```

### Explanation Recap

- we're iterating over the tabLinks NodeList using .forEach() and creating a new TabLink object for each item in that list.
- The constructor function for the TabLink class is assigning each object a custom data attribute based on the `data-*` attribute on the HTML element?

### Closing open tabs when opening a new one.

- loop through each tab, apply a class of `display: none;`
