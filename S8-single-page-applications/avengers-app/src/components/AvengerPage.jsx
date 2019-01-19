import React from 'react';
// import PropTypes from 'prop-types'
import avengers from '../data';

const AvengerPage = props => {
  const id = props.match.params.id;
  const avenger = avengers.find(avenger => `${avenger.id}` === id);

  return (
    <div>
      <img className="character-image" src={avenger.img} alt={avenger.name} />
      <div className="character-info-wrapper">
        <h1>{avenger.name}</h1>
        <h4>({avenger.nickname})</h4>
        <p>{avenger.description}</p>
      </div>
    </div>
  );
};

// AvengerPage.propTypes = {}

export default AvengerPage;
