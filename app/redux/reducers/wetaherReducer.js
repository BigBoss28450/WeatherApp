import {
  ADD_TO_WHEATER_LIST,
  REMOVE_FROM_WHEATER_LIST,
} from "../actions/types";

const initialState = {
  weatherList: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WHEATER_LIST:
      return {
        ...state,
        weatherList: state.weatherList.concat(action.data),
      };

    default:
      return state;
  }
};

export default weatherReducer;
