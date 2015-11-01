import { combineReducers } from 'redux';
import searchTerm from './SearchTerm';
import searchResults from './SearchResults';

const rootReducer = combineReducers({
  searchTerm,
  searchResults
});

export default rootReducer;
