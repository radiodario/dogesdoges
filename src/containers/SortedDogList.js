import { connect } from 'react-redux';
import { sortBy } from 'lodash';
import DogList from '../components/DogList';

const getSortedDogs = (dogs, sorting) => {
  switch (sorting) {
    case 'ASC':
      return sortBy(dogs, d => (d.breed + d.subBreed))
    case 'DSC':
      return sortBy(dogs, d => (d.breed + d.subBreed)).reverse()
    default:
      return dogs
  }
}

const mapStateToProps = state => {
  return {
    dogs: getSortedDogs(state.dogs, state.sorting)
  }
}

const SortedDogList = connect(
  mapStateToProps,
)(DogList)

export default SortedDogList
