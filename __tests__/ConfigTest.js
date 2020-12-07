import 'react-native';
import colors from '../app/config/colors';
import constants from '../app/config/constants';
import { timestampToHours, capitalize } from '../app/config/helpers';

jest.useFakeTimers();

test('Colors matches', () => {
  expect(colors.white).toEqual('#FFFFFF');
});

test('Timestap to hour works correcty', () => {
  expect(timestampToHours(1607156053)).toEqual('2:14');
});

test('Capitalize text works correctly', () => {
  expect(capitalize('hola mundo')).toEqual('Hola mundo');
});

test('CITY_LIST contains Colima', () => {
  expect(constants.CITY_LIST).toContain('Colima');
});
