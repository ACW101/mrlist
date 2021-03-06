import { combineReducers } from 'redux';
import searchResultReducer from './reducer_searchResult';
import selectedRestaurantReducer from './profile/reducer_selectedRestaurant';
import friendListReducer from './reducer_friendList';
import tagListReducer from './reducer_tagList';
import {restaurantListIsLoadingReducer, restaurantListReducer} from './profile/reducer_restaurantList';
import {restaurantTagsReducer} from './reducer_restaurantTags';
import showTagTextfieldReducer from './reducer_showTagTextfield';
import newPollReducer from './reducer_newPoll';
import pollFormReducer from './reducer_pollForm';
import isOpenSendDialogReducer from './reducer_isOpenSendDialog';
import isOpenAddRestaurantDialogReducer from './reducer_isOpenAddRestaurantDialog'
import restaurantDetailReducer from './reducer_restaurantDetail'
import addRestaurantSnackbarReducer from './reducer_addRestaurantSnackbar'

import isOpenMenuReducer from './app/reducer_isOpenMenu';
import isOpenLoginDialogReducer from './app/reducer_isOpenLoginDialog';
import isSignedInReducer from './app/reducer_isSignedIn';
import tokenReducer from './app/reducer_token';
import isOpenImportDialogReducer from './profile/reducer_isOpenImportDialog';
import importResultReducer from './profile/reducer_importResult';
import importCheckboxReducer from './profile/reducer_importCheckbox'


const rootReducer = combineReducers({
  isOpenMenu: isOpenMenuReducer,
  isOpenLoginDialog: isOpenLoginDialogReducer,
  isSignedIn: isSignedInReducer,
  token: tokenReducer,
  // restaurantList
  isOpenImportDialog: isOpenImportDialogReducer,
  importResult: importResultReducer,
  importCheckbox: importCheckboxReducer,

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
  addRestaurantSnackbar: addRestaurantSnackbarReducer,
});

export default rootReducer;
