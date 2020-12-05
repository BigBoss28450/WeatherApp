import "react-native";
import React from "react";
import ReduxApp from "../ReduxApp";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

jest.useFakeTimers();
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

it("renders correctly", () => {
  renderer.create(<ReduxApp />);
});
