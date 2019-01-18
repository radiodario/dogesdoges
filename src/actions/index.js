export const setSortingDirection = direction => ({
  type: 'SET_SORTING_DIRECTION',
  direction
})


export const SortingDirections = {
  ASCENDING: 'ASC',
  DESCENDING: 'DSC',
}


export const LOAD_DOGS_REQUEST = 'LOAD_DOGS_REQUEST';
export const LOAD_DOGS_SUCCESS = 'LOAD_DOGS_SUCCESS';
