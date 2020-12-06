import apiBaseUrl from './apiBaseUrl';

const getCityWeather = (cityName) =>
  apiBaseUrl
    .get(
      `/data/2.5/weather?q=${cityName}&appid=5e22cdf392ec083c2aceed6fecc09977&lang=es`
    )
    .then((response) => response.data);

export default {
  getCityWeather,
};
