import { combineReducers } from 'redux';
import searchTerm from './SearchTerm';
import searchResults from './SearchResults';
import displayedDate from './DisplayedDate';
import diaryEntries from './DiaryEntries';
import { routerStateReducer as router } from 'redux-router';


const rootReducer = combineReducers({
  router,
  searchTerm,
  searchResults,
  displayedDate,
  diaryEntries
});

export default rootReducer;

