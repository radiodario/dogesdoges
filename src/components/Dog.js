import React from 'react';
import PropTypes from 'prop-types';

const Dog = ({ breed, subBreed, image, text }) => {
  const breedName =  subBreed ? `${breed} - ${subBreed}` : breed
  return (
    <div className="Dog-Breed">
      <h4>{ breedName }</h4>
      <img
        src={image}
        alt={breedName}
      />
      <div className="Dog-Breed--Text">
        { text }
      </div>
    </div>
  )
}

Dog.propTypes = {
  breed: PropTypes.string.isRequired,
  subBreed: PropTypes.string,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Dog;
