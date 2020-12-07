import ENV from './ENV';
const API_URL = 'https://api.openweathermap.org/';
const API_KEY = ENV.WEATHER_API_KEY;
const CITY_LIST = [
  'Colima',
  'Guadalajara',
  'Sinaloa',
  'Nuevo Leon',
  'Michoacan',
  'Veracruz',
];

export default {
  API_URL,
  API_KEY,
  CITY_LIST,
};
