import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonComponent } from './index';

it('renders correctly at ButtonComponent', () => {
  const tree = renderer
    .create(<ButtonComponent useCase='auth'>ใในใ</ButtonComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
