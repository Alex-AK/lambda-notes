# Components I

### References

- https://getbootstrap.com/
- https://codepen.io/lambdaschool/pen/vQqyWe?editors=1011

### Important

- current standard for web app development
- all frameworks and libraries have value, depending on the company
- be a programmer, not a language specific expert
- when using forEach, ask yourself if you have to stop at any point during the loop, if so.. don't use it

### Bootstrap

- extensive prebuild components
- components section, some with HTML and CSS, some with HTML, CSS, and JS

- Bootstrap CDNs, also requires jQuery
- https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js
- https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css

### Components

- turn reusable code chunks into components for reusability and DRY programming
- ask 'could I put this anywhere?'
- is this a one off block of code or will things be used multiple times across the website?
- can build your own libraries with components

```
// class takes in parameter of static html panels, allows `this` keyword
  class Panel {
    constructor(panel){
      this.panel = panel; // `this` binds panel to block
      console.log(this.panel); // returns full panel as DOM element
      this.heading = this.panel.querySelector('panel-content h3');
      this.content = this.panel.querySelector('panel-content p');
      console.log(this.heading); // returns each H3 from panels

      // non-arrow function binding for method access
      this.heading.addEventListener('click', this.togglePanel.bind(this)); // use this keyword to access object methods

      // arrow function binding for method access
      this.heading.addEventListener('click', () => this.togglePanel()); // arrow function implicitly binds `this` to method!!!

    }
    // methods
    togglePanel(){
      this.content.classList.toggle('toggle-on'); // can't access object scope without binding (see above)
    }
  }

// select all panels
  const panels = document.querySelectorAll('.panel');

// loop through panels and return live DOM component based off of static html
  panels.forEach( panel => {
    return new Panel(panel);
  });
```

### Stretch assignment Tip

```
togglePanel (){
  // close all panels
  // this.content.classList.toggle('toggle-on');
}
```
