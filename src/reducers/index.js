import { combineReducers } from 'redux';
import RestaurantReducer from './reducer_restaurant';

const rootReducer = combineReducers({
  searchResult: RestaurantReducer
});

export default rootReducer;
