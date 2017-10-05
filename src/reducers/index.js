import { combineReducers } from 'redux';
import isLoggedInReducer from './reducer_isLoggedIn';
import searchResultReducer from './reducer_searchResult';
import selectedRestaurantReducer from './reducer_selectedRestaurant';
import friendListReducer from './reducer_friendList';
import tagListReducer from './reducer_tagList';
import {restaurantListIsLoadingReducer, restaurantListReducer} from './reducer_restaurantList';
import {restaurantTagsReducer} from './reducer_restaurantTags';
import showTagTextfieldReducer from './reducer_showTagTextfield';
import newPollReducer from './reducer_newPoll';
import pollFormReducer from './reducer_pollForm';
import isOpenSendDialogReducer from './reducer_isOpenSendDialog';
import isOpenAddRestaurantDialogReducer from './reducer_isOpenAddRestaurantDialog'
import restaurantDetailReducer from './reducer_restaurantDetail'

const rootReducer = combineReducers({
  isLoggedIn: isLoggedInReducer,
  searchResult: searchResultReducer,
  restaurantList: restaurantListReducer,
  restaurantListIsLoading: restaurantListIsLoadingReducer,
  selectedRestaurant: selectedRestaurantReducer,
  friendList: friendListReducer,
  tagList: tagListReducer,
  restaurantTags: restaurantTagsReducer,
  showTagTextfield: showTagTextfieldReducer,
  newPoll: newPollReducer,
  pollForm: pollFormReducer,
  isOpenSendDialog: isOpenSendDialogReducer,
  isOpenAddRestaurantDialog: isOpenAddRestaurantDialogReducer,
  restaurantDetail: restaurantDetailReducer,
});

export default rootReducer;
