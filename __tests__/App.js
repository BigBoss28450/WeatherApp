import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ReduxApp from '../ReduxApp';

jest.useFakeTimers();

test('renders correctly', () => {
  renderer.create(<ReduxApp />);
});
