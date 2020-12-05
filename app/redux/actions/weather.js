import { ADD_TO_WHEATER_LIST, REMOVE_FROM_WHEATER_LIST } from "./types";

export const getWeather = (data) => ({
  type: ADD_TO_WHEATER_LIST,
  data: data,
});

export const removeWeather = (data) => ({
  type: REMOVE_FROM_WHEATER_LIST,
  data: data,
});
