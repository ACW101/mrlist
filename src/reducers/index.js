import { combineReducers } from 'redux';
import SearchResultReducer from './reducer_searchResult';
import SelectedRestaurantReducer from './reducer_selectedRestaurant';
import FriendListReducer from './reducer_friendList';
import TagListReducer from './reducer_tagList';
import {restaurantListIsLoadingReducer, restaurantListReducer} from './reducer_restaurantList';
import {restaurantTagsReducer} from './reducer_restaurantTags';
import showTagTextfieldReducer from './reducer_showTagTextfield';

const rootReducer = combineReducers({
  searchResult: SearchResultReducer,
  restaurantList: restaurantListReducer,
  restaurantListIsLoading: restaurantListIsLoadingReducer,
  selectedRestaurant: SelectedRestaurantReducer,
  friendList: FriendListReducer,
  tagList: TagListReducer,
  restaurantTags: restaurantTagsReducer,
  showTagTextfield: showTagTextfieldReducer,
});

export default rootReducer;
