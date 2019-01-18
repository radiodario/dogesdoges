import { getSortedDogs } from './SortedDogList'
const dogs = {
  byId: {
    'terrier-boston': {
      id: 'terrier-boston',
      breed: 'terrier',
      subBreed: 'boston',
    },
    'corgi': {
      id: 'corgi',
      breed: 'corgi',
      subBreed: null,
    },
    'mastiff-spanish': {
      id: 'mastiff-spanish',
      breed: 'mastiff',
      subBreed: 'spanish',
    },
    'mastiff-english': {
      id: 'mastiff-english',
      breed: 'mastiff',
      subBreed: 'english',
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
