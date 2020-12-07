import 'react-native';
import { getWeather, removeWeather } from '../app/redux/actions/weather';
import weatherReducer from '../app/redux/reducers/wetaherReducer';

jest.useFakeTimers();

test('Reducer getWeather works correctly ', () => {
  expect(
    weatherReducer(
      { weatherList: [], alreadyDownloaded: false },
      {
        type: 'ADD_TO_WHEATER_LIST',
        data: { id: 1 },
      }
    )
  ).toEqual({
    alreadyDownloaded: true,
    weatherList: [{ id: 1 }],
  });
});

test('Reducer remofveWeather works correctly ', () => {
  expect(
    weatherReducer(
      { weatherList: [{ name: 'alexis' }] },
      {
        type: 'REMOVE_FROM_WHEATER_LIST',
        data: 'alexis',
      }
    )
  ).toEqual({
    weatherList: [],
  });
});

test('Action getWeather Works fine', () => {
  expect(getWeather({ id: 1 })).toEqual({
    type: 'ADD_TO_WHEATER_LIST',
    data: { id: 1 },
  });
});

test('Action removeWeather works just fine', () => {
  expect(removeWeather({ id: 1 })).toEqual({
    type: 'REMOVE_FROM_WHEATER_LIST',
    data: { id: 1 },
  });
});
