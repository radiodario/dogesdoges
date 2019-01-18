import React from 'react';
import Dog from './Dog';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Dog
      breed="corgi"
      subBreed="pembroke"
      image="https://placehold.it/100"
      text="woof woof"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

