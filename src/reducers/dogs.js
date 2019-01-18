import { combineReducers } from 'redux'
import * as actionTypes from '../actions'

const byId = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOAD_DOGS_SUCCESS: {
      return {
        ...state,
        ...action.dogs
      }
    }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_DOGS_SUCCESS: {
      return [
        ...state,
        ...Object.keys.call(null, action.dogs),
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
