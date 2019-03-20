import React from 'react';

const Speaker = props => {
  return (
    <>
      <button onClick={props.speak}>Speak</button>
      <div>{props.message}</div>
    </>
  );
};

export default Speaker;
