export const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);
export const metersToKilometers = (meters) => meters / 1000;
export const timestampToHours = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hour = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return `${hour}:${minutes}`;
};
export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
