import { combineReducers } from 'redux';
import searchTerm from './SearchTerm';
import searchResults from './SearchResults';
import displayedDate from './DisplayedDate';
import { routerStateReducer } from 'redux-router';

const rootReducer = combineReducers({
  router: routerStateReducer,
  searchTerm,
  searchResults,
  displayedDate,
  diaryEntries: () => {
    return [
      {_id: 0, name: 'Cake', timestamp: new Date(new Date() - 3600000)},
      {_id: 1, name: 'Another Cake', timestamp: new Date(new Date() - 1800000)},
    ]
  }
});

export default rootReducer;
