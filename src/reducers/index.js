import { combineReducers } from 'redux';
import SearchResultReducer from './reducer_searchResult';
import {restaurantListIsLoading, restaurantList} from './reducer_restaurantList';
import SelectedRestaurantsReducer from './reducer_selectedRestaurants';
import FriendListReducer from './reducer_friendList';
import TagListReducer from './reducer_tagList';
import selectedTagReducer from './reducer_selectedTag';

const rootReducer = combineReducers({
  searchResult: SearchResultReducer,
  restaurantList: restaurantList,
  restaurantListIsLoading: restaurantListIsLoading,
  selectedRestaurants: SelectedRestaurantsReducer,
  friendList: FriendListReducer,
  tagList: TagListReducer,
  selectedTag: selectedTagReducer,
});

export default rootReducer;
