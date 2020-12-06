import constants from '../../config/constants';
import { ADD_TO_WHEATER_LIST } from '../actions/types';

const initialState = {
  cityList: constants.CITY_LIST,
  weatherList: [],
  alreadyDownloaded: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WHEATER_LIST:
      return {
        ...state,
        weatherList: state.weatherList.concat(action.data),
        alreadyDownloaded: true,
      };

    default:
      return state;
  }
};

export default weatherReducer;
