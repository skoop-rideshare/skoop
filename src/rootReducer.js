import { combineReducers } from 'redux';
import loginReducer from './login/reducer.js';
import homeReducer from './home/reducer.js';

export default combineReducers({
  loginReducer,
  homeReducer
});
