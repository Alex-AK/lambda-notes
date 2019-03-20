import React from 'react';
import Speaker from './Speaker';
import { render, fireEvent } from 'react-testing-library';

describe('<Speaker />', () => {
  it('should render component without failing', () => {
    render(<Speaker />);
  });

  // this is checking to see if the test is wired correctly, not testing the component function yet
  it.skip('should call speak function passed as prop', () => {
    const state = {
      greeting: 'hello'
    };
    const speak = jest.fn();

    const { getByText } = render(<Speaker speak={speak} state={state} />);
    const button = getByText(/speak/i);

    fireEvent.click(button);
    expect(speak).toHaveBeenCalled();
  });
});
