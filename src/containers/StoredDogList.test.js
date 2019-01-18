import { getSortedDogs } from './SortedDogList'
export const dogs = {
  byId: {
    'terrier-boston': {
      id: 'terrier-boston',
      breed: 'terrier',
      subBreed: 'boston',
      text: 'hi',
      image: 'hi',
    },
    'corgi': {
      id: 'corgi',
      breed: 'corgi',
      subBreed: null,
      text: 'hi',
      image: 'hi',
    },
    'mastiff-spanish': {
      id: 'mastiff-spanish',
      breed: 'mastiff',
      subBreed: 'spanish',
      text: 'hi',
      image: 'hi',
    },
    'mastiff-english': {
      id: 'mastiff-english',
      breed: 'mastiff',
      subBreed: 'english',
      text: 'hi',
      image: 'hi',
    },
  },
  allIds: [
    'terrier-boston',
    'corgi',
    'mastiff-spanish',
    'mastiff-english',
  ]
}

describe('getSortedDogs', () => {

  it('sorts dogs ascending correctly', () => {
    const sortedDogs = getSortedDogs(dogs, 'ASC')

    const expected = [
      'corgi',
      'mastiff-english',
      'mastiff-spanish',
      'terrier-boston',
    ]

    expect(sortedDogs.map(dog => dog.id))
      .toEqual(expected)

  })

  it('sorts dogs descending correctly', () => {
    const sortedDogs = getSortedDogs(dogs, 'DSC')

    const expected = [
      'corgi',
      'mastiff-english',
      'mastiff-spanish',
      'terrier-boston',
    ]

    expect(sortedDogs.map(dog => dog.id))
      .toEqual(expected.reverse())

  })

})
