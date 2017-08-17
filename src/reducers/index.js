import { combineReducers } from 'redux';
import SearchResultReducer from './reducer_searchResult';
import SelectedRestaurantsReducer from './reducer_selectedRestaurants';
import FriendListReducer from './reducer_friendList';
import TagListReducer from './reducer_tagList';
import selectedTagReducer from './reducer_selectedTag';
import {restaurantListIsLoadingReducer, restaurantListReducer} from './reducer_restaurantList';
import {restaurantTagsReducer} from './reducer_restaurantTags';

const rootReducer = combineReducers({
  searchResult: SearchResultReducer,
  restaurantList: restaurantListReducer,
  restaurantListIsLoading: restaurantListIsLoadingReducer,
  selectedRestaurants: SelectedRestaurantsReducer,
  friendList: FriendListReducer,
  tagList: TagListReducer,
  selectedTag: selectedTagReducer,
  restaurantTags: restaurantTagsReducer,
});

export default rootReducer;
