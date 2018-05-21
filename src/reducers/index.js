import { combineReducers } from 'redux';
import Weather from './reducer_weather';

const rootReducer = combineReducers({
    //reducer from reducer_weather
    weather: Weather
   
});

export default rootReducer;
