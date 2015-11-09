import { combineReducers } from 'redux';
import searchTerm from './SearchTerm';
import searchResults from './SearchResults';


const addFoodReducer = combineReducers({
  searchTerm,
  searchResults
});

export default addFoodReducer;

