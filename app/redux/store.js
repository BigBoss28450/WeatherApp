import { createStore, combineReducers } from 'redux';
import weatherReducer from './reducers/wetaherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
