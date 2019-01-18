import React from 'react';
import DogList from './DogList';
import renderer from 'react-test-renderer';
import { getSortedDogs } from '../containers/SortedDogList';
import { dogs } from '../containers/StoredDogList.test';

it('renders correctly', () => {
  const tree = renderer
    .create(<DogList dogs={getSortedDogs(dogs)} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

