import { call, put, fork, take } from 'redux-saga/effects'
import Api from '../api/index.js'
import * as actionTypes from '../actions'

export function* fetchDogData(action) {
  const { breed, subBreed } = action;
  const id = subBreed ? `${breed}-${subBreed}` : breed
  const image = yield call(Api.fetchImage, breed, subBreed)
  const text = yield call(Api.fetchText)

  yield put({
    type: actionTypes.FETCH_DOG_SUCCESS,
    dog: {
      id,
      breed,
      subBreed,
      image,
      text,
    }
  })
}

export function* fetchDogs() {
  const dogsObject = yield call(Api.fetchDogs)
  const breeds = Object.keys.call(null, dogsObject)

  for (let i = 0; i < breeds.length; i++) {
    const breed = breeds[i]
    // case when there's no subbreed
    if (!dogsObject[breed].length) {
      yield put({
        type: actionTypes.FETCH_DOG_REQUEST,
        breed,
      })
    }
    else {
      const subBreeds = dogsObject[breed];
      for (let i = 0; i < subBreeds.length; i++) {
        const subBreed = subBreeds[i]
        yield put({
          type: actionTypes.FETCH_DOG_REQUEST,
          breed,
          subBreed,
        })
      }
    }
  }

}

export function* fetchDogSaga() {
  while (true) {
    const action = yield take(actionTypes.FETCH_DOG_REQUEST)
    yield fork(fetchDogData, action)
  }
}


function* dogsSaga() {
  yield fork(fetchDogSaga)
  yield call(fetchDogs)
}

export default dogsSaga
