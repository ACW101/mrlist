import { combineReducers } from 'redux';
import SearchResultReducer from './reducer_searchResult';
import UserListReducer from './reducer_userList';

const rootReducer = combineReducers({
  searchResult: SearchResultReducer,
  userList: UserListReducer,
});

export default rootReducer;
