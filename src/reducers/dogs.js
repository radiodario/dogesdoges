import { combineReducers } from 'redux'
import * as actionTypes from '../actions'

const byId = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DOG_SUCCESS: {
      const { dog } = action;
      return {
        ...state,
        [dog.id] : dog,
      }
    }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DOG_SUCCESS: {
      const { dog } = action;
      return [
        ...state,
        dog.id,
      ]
    }
    default:
      return state
  }

}

const dogs = combineReducers({
  byId,
  allIds,
})

export default dogs
