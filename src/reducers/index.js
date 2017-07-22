import { combineReducers } from 'redux';
import SearchResultReducer from './reducer_searchResult';
import UserListReducer from './reducer_userList';
import SelectedRestaurantsReducer from './reducer_selectedRestaurants';

const rootReducer = combineReducers({
  searchResult: SearchResultReducer,
  userList: UserListReducer,
  selectedRestaurants: SelectedRestaurantsReducer
});

export default rootReducer;
