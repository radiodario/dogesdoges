import { SortingDirections } from '../actions'

const sorting = (state = SortingDirections.ASCENDING, action) => {
  switch (action.type) {
    case 'SET_SORTING_DIRECTION':
      return action.direction
    default:
      return state
  }

}

export default sorting
