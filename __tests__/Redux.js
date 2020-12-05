import "react-native";
import { getWeather } from "../app/redux/actions/weather";
import weatherReducer from "../app/redux/reducers/wetaherReducer";

jest.useFakeTimers();

test("Reducer works correctly ", () => {
  expect(
    weatherReducer(
      { weatherList: [] },
      {
        type: "ADD_TO_WHEATER_LIST",
        data: { id: 1 },
      }
    )
  ).toEqual({
    weatherList: [{ id: 1 }],
  });
});

test("Action getWeather Works fine", () => {
  expect(getWeather({ id: 1 })).toEqual({
    type: "ADD_TO_WHEATER_LIST",
    data: { id: 1 },
  });
});
