import React from 'react';

const Players = props => {
  return (
    <>
      <h3>Player List</h3>
      {props.players ? (
        props.players.map(p => (
          <div key={p.id} data-testid="player-name">
            {p.name}
          </div>
        ))
      ) : (
        <p>no players provided</p>
      )}
    </>
  );
};

export default Players;
