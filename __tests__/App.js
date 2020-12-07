import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ReduxApp from '../ReduxApp';

jest.useFakeTimers();

it('renders correctly', () => {
  renderer.create(<ReduxApp />);
});
