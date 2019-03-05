import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Players from './Players';

describe('<Player />', () => {
  it('it should render no players available when no players provided', () => {
    const { getByText } = render(<Players />);

    expect(getByText(/no players/i)).toBeInTheDocument();
  });

  it('should render the provided list of players', () => {
    const players = [
      { id: 1, name: 'testname' },
      { id: 2, name: 'testname1' },
      { id: 3, name: 'testname2' }
    ];

    const { getAllByTestId } = render(<Players players={players} />);

    const playerNamesNodes = getAllByTestId('player-name');
    const playerNames = playerNamesNodes.map(n => n.textContent);
    const names = players.map(p => p.name);

    expect(playerNames).toHaveLength(players.length);
    expect(playerNames).toEqual(names);
  });
});
