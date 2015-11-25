import { combineReducers } from 'redux';
import searchTerm from './SearchTerm';
import searchResults from './SearchResults';
import selectedPeriod from './SelectedPeriod';
import formState from './FormState';

const addFoodReducer = combineReducers({
  searchTerm,
  searchResults,
  selectedPeriod,
  formState
});

export default addFoodReducer;


