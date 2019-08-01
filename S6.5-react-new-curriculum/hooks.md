# Intro to React (with Hooks)

### Why use it?

- declarative - clear
- component-based - modular
- learn once, write anywhere
- combines html, css, and js into a single file - template and logic together

### Side Effects

- key concept in development, high potential for bugs
- code that produces some external effect, fetching data, etc
- a function that effects the scope outside of the function

### Polya's

- understand the problem.
- devise a plan.
- execute the plan.
- reevaluate and repeat.

### useEffect()

- how to use useEffect and sync side effects with state
- limits place where side effects can happen
- targeted external behavior and manipulation

```
  useEffect(() => {
    // run any logic, api calls, pipeline subscription, window tracking, etc

    return // if cleanup is needed, place callback function here
  }, [] // array option used to track specific state or props, called dependencies)

  useEffect(() => {
    axios.get(`dogAPI/${breed}/images/random/10`)
    .then(res => {
      const doggos = res.data.message;
      setPets(doggos);
    })
  }, [breed] // if you track pets, this will loop due to setPets);
```

### Tracking Changes

- anytime something changes, it will run useEffect
  - useEffect will check second option (array) first to determine if it should fire callback function
  - add array option to track specific state or props (ie syncing side effect)
  - empty array tracks nothing, effect will only run once
  - array with state attribute or prop will track that data, if it changes, useEffect will run
- manage external access and handle cleanup, doesn't inherently manipulate state.

### Event Cleanup

- scroll watch example
- cleanup and free memory usage

```
  useEffect(() => {
    const handleScroll = () => setPageYOffset(window.pageYOffset);

    window.addEventListener("scroll", handleScroll);

    })
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
```

### Important Notes

- by default, use empty array so it only runs once
- then decide what data you want to track and run effect on
- anything you put as a dependency, it will likely be included in your query
- IMPORTANT - when working with cleanup, you must store callback function in a variable, then add, then remove. If you use individual callback functions inline they will have different reference.

### keys in React

- used to track DOM list
- helps render and update tracking of items from list
  - key will be used to index correct piece of document

### React Lifecycle
