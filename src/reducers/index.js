import { combineReducers } from 'redux';
import searchTerm from './SearchTerm';
import searchResults from './SearchResults';
import diaryEntries from './DiaryEntries';
import { routerStateReducer as router } from 'redux-router';


const rootReducer = combineReducers({
  router,
  searchTerm,
  searchResults,
  diaryEntries
});

export default rootReducer;

