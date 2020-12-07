import constants from '../config/constants';
import apiBaseUrl from './apiBaseUrl';

const getCityWeather = (cityName) =>
  apiBaseUrl
    .get(`/data/2.5/weather?q=${cityName}&appid=${constants.API_KEY}&lang=es`)
    .then((response) => response.data);

export default {
  getCityWeather,
};
