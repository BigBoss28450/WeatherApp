import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CityWeatherButton from '../app/components/CityWeatherButton';
import DetailsListComponent from '../app/components/DetailsListComponent';

jest.useFakeTimers();

test('CityWeatherCompnent works perfect', () => {
  const component = renderer.create(
    <CityWeatherButton city="Colima" temp={25} onPress={() => true} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.city = 'Colima';
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.temp = 25;
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('DetilsListComponent renders correctly', () => {
  const component = renderer.create(
    <DetailsListComponent
      data={{
        main: {
          pressure: 1012,
          humidity: 81,
          temp_min: 279.15,
          temp_max: 281.15,
        },
        visibility: 10000,
        wind: {
          speed: 4.1,
        },
        sys: {
          sunrise: 1485762037,
          sunset: 1485794875,
        },
      }}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.sys = { sunrise: 1485762037, sunset: 1485794875 };
  // re-rendering
  tree = component.toJSON();

  // manually trigger the callback
  tree.props.main = {
    pressure: 1012,
    humidity: 81,
    temp_min: 279.15,
    temp_max: 281.15,
  };
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.wind = { speed: 4.1 };
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.visibility = 10000;
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
