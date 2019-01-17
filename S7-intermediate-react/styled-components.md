# React Styled Components Library

### References

-

### Important

-

### Why Styled Components?

- a styling library in React
- CSS written in JS contained in same Component file
- combines ES6 and css
- styled components are declarative and functional
- community support (UI library, modals, animations, transition elements)
- there are tradeoffs to using styled components vs css

### Syntax

`import styled from 'styled-components`

- https://codesandbox.io/s/1mkl8wykl (follow along)

```
  const WrapperDiv = styled.div`
    font-family: sans-serif;
    text-align: center;
  `;

  <WrapperDiv>
    <h1>Styled Components Playground</h1>
  <WrapperDiv>
```

```
const Button = styled.button`
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: white;

  // this is called 'render prop'
  ${props => props.type === 'primary' ? 'background: grey' : null}
  ${props => props.type === 'success' ? 'background: green' : null}
  ${props => props.type === 'danger' ? 'background: yellow' : null}
  ${props => props.type === 'warning' ? 'background: red' : null}
`;

  <Button type='primary'>
  <Button type='secondary'>

```
