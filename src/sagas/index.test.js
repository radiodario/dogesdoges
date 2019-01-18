import { call, put, fork, take } from 'redux-saga/effects'
import Api from '../api/index.js'
import * as actionTypes from '../actions'
import dogsSaga, {
  fetchDogData,
  fetchDogs,
  fetchDogSaga,
} from './index'

describe('Dogs main saga', () => {
  const gen = dogsSaga();

  it('should fork the fetch dog saga watcher', () => {
    expect(gen.next().value)
      .toEqual(fork(fetchDogSaga))
  })

  it('then it should call the main fetch dogs generator function', () => {
    expect(gen.next().value)
      .toEqual(call(fetchDogs))
  })
})

describe('fetchDogSaga', () => {
  const gen = fetchDogSaga();

  it('waits for a FETCH_DOG_REQUEST action', () => {
    expect(gen.next().value)
      .toEqual(take(actionTypes.FETCH_DOG_REQUEST))
  })

  it('then forks a fetch dog data task', () => {
    const action = {
      type: actionTypes.FETCH_DOG_REQUEST,
      breed: 'corgi',
      subBreed: 'pembroke'
    }
    expect(gen.next(action).value)
      .toEqual(fork(fetchDogData, action))
  })
})

describe('fetchDogs', () => {
  const gen = fetchDogs();
  const dogs = {
    'corgi' : ['pembroke'],
    'jindo' :[],
  };

  it('should call the Api for dogs', () => {
    expect(gen.next().value)
      .toEqual(call(Api.fetchDogs))
  })

  it('should iterate over the dogs and request data', () => {
    expect(gen.next(dogs).value)
      .toEqual(put({
        type: actionTypes.FETCH_DOG_REQUEST,
        breed: 'corgi',
        subBreed: 'pembroke',
      }))
    expect(gen.next(dogs).value)
      .toEqual(put({
        type: actionTypes.FETCH_DOG_REQUEST,
        breed: 'jindo',
      }))
  })

})

describe('fetchDogData', () => {

  const action = {
    breed: 'corgi',
    subBreed: 'pembroke',
  }

  const gen = fetchDogData(action)

  it('should fetch the image for the right breed', () => {
    expect(gen.next().value)
      .toEqual(call(Api.fetchImage, action.breed, action.subBreed))
  })

  it('should fetch the text', () => {
    expect(gen.next('image').value)
      .toEqual(call(Api.fetchText))
  })

  it('should then put the success action', () => {
    expect(gen.next('text').value)
      .toEqual(put({
        type: actionTypes.FETCH_DOG_SUCCESS,
        dog: {
          ...action,
          id: 'corgi-pembroke',
          text: 'text',
          image: 'image',
        },
      }))
  })
})
