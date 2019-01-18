import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

const DogList = ({ dogs }) => (
  <ul>
    { dogs.map((dog, index) => (
      <Dog key={index} {...dog} />
    ))}
  </ul>
)

DogList.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      breed: PropTypes.string.isRequired,
      subBreed: PropTypes.string,
      text: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired
}

export default DogList

