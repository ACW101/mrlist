import { combineReducers } from 'redux';
import SearchResultReducer from './reducer_searchResult';
import UserListReducer from './reducer_userList';
import SelectedRestaurantsReducer from './reducer_selectedRestaurants';
import FriendListReducer from './reducer_friendList';

const rootReducer = combineReducers({
  searchResult: SearchResultReducer,
  userList: UserListReducer,
  selectedRestaurants: SelectedRestaurantsReducer,
  friendList: FriendListReducer
});

export default rootReducer;
