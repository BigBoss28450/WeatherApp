import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import configureStore from '../app/redux/store';

jest.useFakeTimers();

test('Welcome Screen renders correctly', () => {
  const store = configureStore();
  const mainScreen = renderer
    .create(
      <Provider store={store}>
        <WelcomeScreen />
      </Provider>
    )
    .toJSON();
  expect(mainScreen).toMatchSnapshot();
});
