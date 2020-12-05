import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./app/navigation/MainNavigator";
import { getWeather } from "./app/redux/actions/weather";
import weatherApiCalls from "./app/api/weatherApiCalls";
import constants from "./app/config/constants";
import { useDispatch } from "react-redux";

// backgrund image courtesy of:
// <a href='https://www.freepik.es/fotos/fondo'>Foto de Fondo creado por tirachard - www.freepik.es</a>

export default function App() {
  // variables
  const cityList = constants.CITY_LIST;
  const dispatch = useDispatch();

  // functions
  const getCityWeather = async () => {
    cityList.map(async (city) => {
      const result = await weatherApiCalls.getCityWeather(city);
      dispatch(getWeather(result));
    });
  };

  useEffect(() => {
    getCityWeather();
  }, []);
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
