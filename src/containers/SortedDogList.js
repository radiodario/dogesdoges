import { connect } from 'react-redux';
import { sortBy } from 'lodash';
import DogList from '../components/DogList';
import { SortingDirections} from '../actions'

const getSortedDogs = (dogs, sorting) => {
  const allDogs = dogs.allIds.map(id => dogs.byId[id])
  switch (sorting) {
    case SortingDirections.ASCENDING:
      return sortBy(allDogs, ['breed', 'subBreed'])
    case SortingDirections.DESCENDING:
      return sortBy(allDogs, ['breed', 'subBreed']).reverse()
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
