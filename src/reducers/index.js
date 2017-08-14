import { combineReducers } from 'redux';
import SearchResultReducer from './reducer_searchResult';
import RestaurantListReducer from './reducer_restaurantList';
import SelectedRestaurantsReducer from './reducer_selectedRestaurants';
import FriendListReducer from './reducer_friendList';
import TagListReducer from './reducer_tagList';

const rootReducer = combineReducers({
  searchResult: SearchResultReducer,
  restaurantList: RestaurantListReducer,
  selectedRestaurants: SelectedRestaurantsReducer,
  friendList: FriendListReducer,
  tagList: TagListReducer,
});

export default rootReducer;
