import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './app/navigation/MainNavigator';
import { getWeather } from './app/redux/actions/weather';
import weatherApiCalls from './app/api/weatherApiCalls';

// backgrund image courtesy of:
// <a href='https://www.freepik.es/fotos/fondo'>Foto de Fondo creado por tirachard - www.freepik.es</a>

export default function App() {
  // variables
  const cityList = useSelector((state) => state.weather.cityList);
  const alreadyDownloaded = useSelector(
    (state) => state.weather.alreadyDownloaded
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getCityWeather = async () => {
      cityList.map(async (city) => {
        const result = await weatherApiCalls.getCityWeather(city);
        dispatch(getWeather(result));
      });
    };

    if (!alreadyDownloaded) getCityWeather();
  }, [alreadyDownloaded, cityList, dispatch]);
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
