import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import CityWeatherButton from "../app/components/CityWeatherButton";

jest.useFakeTimers();

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <CityWeatherButton city="Colima" temp={25} onPress={() => true} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.name = "Colima";
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.temp = 25;
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
