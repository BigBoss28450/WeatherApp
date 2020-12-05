import "react-native";
import weatherApiCalls from "../app/api/weatherApiCalls";

jest.useFakeTimers();

test("Weather Api works just fine ", async () => {
  expect(
    await weatherApiCalls.getCityWeather("Colima").then((result) => result.name)
  ).toEqual("Colima");
});
