import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import App from './App';
import renderer from 'react-test-renderer';

import 'react-testing-library/cleanup-after-each'; // cleans up after all tests across app
import 'jest-dom/extend-expect';

// scoped to test file
afterEach(cleanup);

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
    // scoped to individual describe
    afterEach(cleanup);
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

  it.skip('matches snapshot', () => {
    const tree = renderer.create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  describe('mocking', () => {
    it('is mocking', () => {
      const mock = jest.fn(() => 'hello'); // shortcut for .mockImplementation
      // const mock = jest.fn().mockImplementation(() => 'hello');
      // const mock = jest.fn().mockReturnValue('hello');

      const actual = mock('hello');

      // running assertions against the value, not the function
      // expect(actual).toBeUndefined();
      expect(actual).toBe('hello');
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledTimes(1);
      expect(mock).toHaveBeenCalledWith('hello');
      expect(mock).not.toHaveBeenCalledWith('frown');
    });
    describe('speak()', () => {
      it('update the message when speak button is clicked', () => {
        const { getByText, queryByText } = render(<App />);

        const button = getByText(/speak/i);
        expect(queryByText(/this is a new message/i)).toBeFalsy();

        fireEvent.click(button);
        expect(queryByText(/this is a new message/i)).toBeTruthy();
      });
    });
  });
});
