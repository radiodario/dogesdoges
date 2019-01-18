export const setSortingDirection = direction => ({
  type: 'SET_SORTING_DIRECTION',
  direction
})


export const SortingDirections = {
  ASCENDING: 'ASC',
  DESCENDING: 'DSC',
}


export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
