# React Lifecycles

### References

- https://codesandbox.io/s/jpnn8j7z2y

### Important

- used to share logic / functionality between components

### Higher Order Components (HOC)

- advanced react techniques
- function that takes function as argument (component receiving a component)
- used to share logic / functionality between components
- components mounted through HOC if you want to gain methods or state from HOC
- considered a container to perform 'higher level logic' - ie logic you want to pass down

### Array Methods are Higher Order Functions

`Array.map(item => Hello + item)`
`Array.filter(item => item > 24)`
`Array.reduce((prev, next) => {return prev !== next})`

### Let's Code

- follow along example (https://codesandbox.io/s/vqno26y4w5)

### Authentication

- based on a condition, mount one component
