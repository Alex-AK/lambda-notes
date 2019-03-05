import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import App from './App';

import 'jest-dom/extend-expect';

describe('<App />', () => {
  it('renders without crashing', () => {
    // const helpers = render(<App />);
    // console.log('helpers', helpers);
    // CRA built in react-dom testing method
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });

  it('renders "hello world"', () => {
    const { getByText } = render(<App />);

    const actual = getByText(/hello world/i);

    expect(actual).toBeInTheDocument();
  });

  it('greet the team', () => {
    const { getByText } = render(<App />);

    const greetButton = getByText(/click me/i);
    fireEvent.click(greetButton);

    expect(getByText(/hello!/i)).toBeInTheDocument();
  });
});
