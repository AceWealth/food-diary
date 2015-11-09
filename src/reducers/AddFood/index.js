import { combineReducers } from 'redux';
import searchTerm from './SearchTerm';
import searchResults from './SearchResults';
import selectedPeriod from './SelectedPeriod';

const addFoodReducer = combineReducers({
  searchTerm,
  searchResults,
  selectedPeriod
});

export default addFoodReducer;
